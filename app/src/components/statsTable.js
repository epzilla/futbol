import { gameIsInFuture } from '../lib/helpers';

const StatsTable = ({ games, user, toggleUserAttend, currentYear, showRecord, config }) => {
  let wins = 0;
  let losses = 0;
  let ties = 0;
  let confW = 0;
  let confL = 0;
  let confT = 0;
  let record;

  const rows = games.map((game, i) => {
    let resText;
    let rowClass;
    let attendCol;
    let dateParts = game.date.split('-');

    if (game.result === 'W') {
      resText = 'W';
      rowClass = 'win';
      wins++;
      if (game.confGame) {
        confW++;
      }
    } else if (game.result === 'L') {
      resText = 'L';
      rowClass = 'loss';
      losses++;
      if (game.confGame) {
        confL++;
      }
    } else {
      rowClass = 'tie';
      resText = currentYear === game.season ? '--' : 'T';
      if (game.season < 1996) {
        ties++;
        if (game.confGame) {
          confT++;
        }
      }
    }

    record = `${wins}–${losses}${ties > 0 ? '–' + ties : ''}`;
    if (confW || confL || confT) {
      record += ` (${confW}–${confL}${ties > 0 ? '–' + confT : ''})`;
    }

    if (user) {
      let didAttend = user.games.indexOf(game._id) !== -1;
      if (!gameIsInFuture(game)) {
        attendCol = (
          <td>
            <button class={didAttend ? 'btn primary attended' : 'btn not-attended'} onClick={() => toggleUserAttend(game._id)}>
              {didAttend ? '✔' : '—'}
            </button>
          </td>
        );
      }
      else {
        attendCol = <td></td>;
      }
    }

    return (
      <tr tabindex={i + 11} class={rowClass}>
        <td>
          <span class="larger">{ `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}` }</span>
          <span class="smaller">{dateParts[0]}</span>
        </td>
        <td class="center">{ game.result }</td>
        <td class="logo-td center">
              <div class={`team-logo logo-${ game.opponent.replace(/\s+/g, '').replace(/&/g, '').replace(/\./g, '') }`}></div>
            </td>
        <td>
          <span class="larger">{game.opponent}</span>
          <span class="smaller">{game.opponentShortName}</span>
          <span class="smallest">{game.opponentAbbrev}</span>
        </td>
        <td>{ `${game.teamScore}–${game.opScore}` }</td>
        <td class="center">
          <span class="larger">{game.location}</span>
          <span class="smaller">{game.homeAwayNeutral}</span>
        </td>
        { attendCol }
      </tr>
    )
  });

  return (
    <div class="full-width">
      { showRecord ? <h2 class="record align-center">Record: { record }</h2> : null }
      <table class="stats-table center capped-size-table">
        <thead>
          <th>
            <span class="larger">Date</span>
            <span class="smaller">Year</span>
          </th>
          <th class="center">W/L</th>
          <th></th>
          <th>Team</th>
          <th>Score</th>
          <th class="center">
            <span class="larger">Location</span>
            <span class="smaller">Loc</span>
          </th>
          { user ? <th>Attended?</th> : null }
        </thead>
        <tbody>{ rows }</tbody>
      </table>
    </div>
  );
};

export default StatsTable;