import { gameIsInFuture } from '../lib/helpers';

const getResult = (game, teamId) => {
  if (game.score1 === game.score2) {
    return 'D';
  }

  if (game.score1 > game.score2) {
    return game.team1Id === teamId ? 'W' : 'L';
  }

  return game.team2Id === teamId ? 'W' : 'L';
};

const StatsTable = ({ games, currentYear, showRecord, team, teams }) => {
  let wins = 0;
  let losses = 0;
  let draws = 0;
  let record;

  const rows = games.map((game, i) => {
    let resText;
    let rowClass;
    const played = !gameIsInFuture(game);
    if (played) {
      const result = getResult(game, team.id);
      if (result === 'W') {
        resText = 'W';
        rowClass = 'win';
        wins++;
      } else if (result === 'L') {
        resText = 'L';
        rowClass = 'loss';
        losses++;
      } else {
        resText = 'D';
        rowClass = 'draw';
        draws++;
      }
    } else {
      rowClass = 'future';
    }

    record = `${wins}–${losses}-${draws}`;

    return (
      <div tabindex={i + 11} class={`stats-table-row ${rowClass}`}>
        <div class="team-block">
          <span class="team-name">{ game.team1.title }</span>
          <span class="team-badge" style={`background-image: url(/assets/badges/${ game.team1.code }.png)`}></span>
        </div>
        { played ?
            <span class="score-line">
              <span class="score-span">{ game.score1 }</span>
              <span class="score-separator">-</span>
              <span class="score-span">{ game.score2 }</span>
            </span>
          :
            <span class="score-line">
              <span class="score-span"></span>
              <span class="score-separator">&nbsp;v.&nbsp;</span>
              <span class="score-span"></span>
            </span>
        }
        <div class="team-block">
          <span class="team-badge" style={`background-image: url(/assets/badges/${ game.team2.code }.png)`}></span>
          <span class="team-name">{ game.team2.title }</span>
        </div>
        <span class="date-span">{ game.playAt }</span>
      </div>
    )
  });

  return (
    <div class="full-width">
      { showRecord ? <h2 class="record align-center">Record: { record }</h2> : null }
      <div class="stats-table faux-table">
        { rows }
      </div>
    </div>
  );
};

export default StatsTable;