module.exports = function (models, app, sequelize) {
  var teams = [];
  const Games = models['Games'];
  const Teams = models['Teams'];
  const Events = models['Events'];
  const Leagues = models['Leagues'];
  const Seasons = models['Seasons'];
  const Rounds = models['Rounds'];

  const mapRawGames = rawGames => {
    return rawGames.map(g => {
      const team1 = teams.find(t => t.id === g.team1Id);
      const team2 = teams.find(t => t.id === g.team2Id);
      const winnerId = g.winner === 1 ? g.team1Id : (g.winner === 2 ? g.team2Id : null);
      return {
        id: g.id,
        key: g.key,
        roundId: g.roundId,
        team1Id: g.team1Id,
        team2Id: g.team2Id,
        team1: team1,
        team2: team2,
        playAt: g.playAt,
        postponed: g.postponed,
        score1: g.score1,
        score2: g.score2,
        winner: g.winner,
        winnerId: winnerId,
        winner90: g.winner90,
        nextGameId: g.nextGameId,
        prevGameId: g.prevGameId
      };
    });
  };

  Teams.findAll().then(t => {
    teams = t;
  });

  app.get('/games-by-team/:id', (req, res) => {
    const id = req.params.id;
    return Games.findAll({
      where: {
        $or: [
          { team1Id: id },
          { team2Id: id}
        ]
      }
    }).then(rawGames => {
      return res.json(mapRawGames(rawGames));
    });
  });

  app.get('/games-by-league-season/:league/:season', (req, res) => {
    const leagueId = req.params.league;
    const seasonKey = req.params.season;
    let seasonNum = parseInt(seasonKey);
    const convertedKey = `${--seasonNum}/${seasonKey.slice(-2)}`;
    return Seasons.findOne({ where: { key: convertedKey }}).then(season => {
      return Events.findOne({ where: { $and: [ {seasonId: season.id}, {leagueId: leagueId} ]}}).then(event => {
        return Rounds.findAll({ where: { eventId: event.id }}).then(rounds => {
          return Games.findAll({ where: { roundId: {$in: rounds.map(r => r.id) }}}).then(games => {
            return res.json(mapRawGames(games));
          });
        });
      });
    });
  });

  app.get('/games-by-team-season/:team/:season', (req, res) => {
    const teamId = req.params.team;
    const seasonKey = req.params.season;
    let seasonNum = parseInt(seasonKey);
    const convertedKey = `${--seasonNum}/${seasonKey.slice(-2)}`;
    return sequelize.query(`
      SELECT g.id FROM games g
        INNER JOIN teams t1 ON t1.id = g.team1_id
        INNER JOIN teams t2 ON t2.id = g.team2_id
        INNER JOIN rounds r ON r.id = g.round_id
        INNER JOIN events e ON e.id = r.event_id
        INNER JOIN leagues l on (l.id = e.league_id)
        INNER JOIN seasons s on (s.id = e.season_id)
      WHERE s.key = '${convertedKey}' and (t1.id = '${teamId}' or t2.id = '${teamId}')`, { type: sequelize.QueryTypes.SELECT}
    )
    .then(function(gameIds) {
      return Games.findAll({ where: { id: {$in: gameIds.map(g => g.id) }}}).then(games => {
        return res.json(mapRawGames(games));
      });
    });
  });

  app.get('/games-by-opp/:team/:opp', (req, res) => {
    const team = req.params.team;
    const opp = req.params.opp;
    return Games.findAll({ where: {
      $or: [
        { $and: [{team1Id: team}, {team2Id: opp}] },
        { $and: [{team1Id: opp}, {team2Id: team}] }
      ]
    }}).then(games => {
      return res.json(mapRawGames(games));
    });
  });

};