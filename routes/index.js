module.exports = function (models, app, sequelize) {
  var teams = [];
  const Games = models['Games'];
  const Teams = models['Teams'];
  const Events = models['Events'];
  const Leagues = models['Leagues'];
  const Seasons = models['Seasons'];
  const Rounds = models['Rounds'];
  const Goals = models['Goals'];
  const Persons = models['Persons'];

  const mapRawGames = (rawGames) => {
    return rawGames.map(g => {
      const team1 = teams.find(t => t.id === g.team1Id);
      const team2 = teams.find(t => t.id === g.team2Id);
      const winnerId = g.winner === 1 ? g.team1Id : (g.winner === 2 ? g.team2Id : null);
      let game = {
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

      if (g.goals) {
        game.goals = g.goals;
      }

      return game;
    });
  };

  const mapGoalsToGames = (games, goals) => {
    return games.map(g => {
      let game = {
        id: g.id,
        key: g.key,
        roundId: g.roundId,
        team1Id: g.team1Id,
        team2Id: g.team2Id,
        team1: g.team1,
        team2: g.team2,
        playAt: g.playAt,
        postponed: g.postponed,
        score1: g.score1,
        score2: g.score2,
        winner: g.winner,
        winnerId: g.winnerId,
        winner90: g.winner90,
        nextGameId: g.nextGameId,
        prevGameId: g.prevGameId
      };
      game['goals'] = goals.filter(gl => gl.gameId === g.id);
      return game;
    });
  };

  const mapPersonsToGoals = (goals) => {
    let personIds = [];
    goals.forEach(gl => {
      if (personIds.indexOf(gl.personId) === -1) {
        personIds.push(gl.personId);
      }
    });
    return Persons.findAll({ where: { id: { $in: personIds}}}).then(people => {
      return goals.map(gl => {
        let goal = {
          id: gl.id,
          personId: gl.personId,
          gameId: gl.gameId,
          teamId: gl.teamId,
          minute: gl.minute,
          offset: gl.offset,
          score1: gl.score1,
          score2: gl.score2,
          penalty: gl.penalty,
          owngoal: gl.owngoal,
          player: people.find(p => p.id === gl.personId)
        };
        return goal;
      });
    });
  };

  Teams.findAll().then(t => {
    teams = t;
  });

  app.get('/api/players', (req, res) => {
    return Persons.findAll().then(p => res.json(p));
  });

  app.get('/api/games', (req, res) => {
    return Promise.all([
      Games.findAll(),
      Goals.findAll()
    ]).then(result => {
      return res.json(mapGoalsToGames(mapRawGames(result[0]), result[1]));
    });
  });

  app.get('/api/goals', (req, res) => {
    return Goals.findAll()
      .then(mapPersonsToGoals)
      .then(goals => res.json(goals));
  });

  app.get('/api/goals-by-player/:name', (req, res) => {
    return Persons.findOne({
      where: {
        $or: [
          { id: req.params.name },
          { name: { $like: `%${req.params.name}%`}},
          { key: { $like: `%${req.params.name}%`}}
        ]
      }
    }).then(p => {
      if (!p) {
        return res.json({});
      }

      return Goals.findAll({ where: { personId: p.id }})
        .then(mapPersonsToGoals)
        .then(goals => res.json(goals));
    });
  });

  app.get('/api/goals-by-game/:id', (req, res) => {
    return Goals.findAll({ where: { gameId: req.params.id }})
        .then(mapPersonsToGoals)
        .then(goals => res.json(goals));
  });

  app.get('/api/games-by-team/:id', (req, res) => {
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

  app.get('/api/games-by-league-season/:league/:season', (req, res) => {
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

  app.get('/api/games-by-team-season/:team/:season', (req, res) => {
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
      const ids = gameIds.map(g => g.id);
      return Promise.all([
          Games.findAll({ where: { id: {$in: ids}}}),
          Goals.findAll({ where: { gameId: {$in: ids}}}).then(goals => mapPersonsToGoals(goals))
        ]
      ).then(result => {
        return res.json(mapGoalsToGames(mapRawGames(result[0]), result[1]));
      });
    });
  });

  app.get('/api/games-by-opp/:team/:opp', (req, res) => {
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

  app.get('/*', (req, res) => res.render('index'));
};