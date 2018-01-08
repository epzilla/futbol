import { gamePlayed, getFormattedGameDate } from '../lib/helpers';
import { h, Component } from 'preact';
import BigBoxScore from './BigBoxScore';

export default class StatsTable extends Component {
  constructor(props) {
    super(props);
    this.state = { expandedGame: null };
  }

  getResult = (game, teamId) => {
    if (game.score1 === game.score2) {
      return 'D';
    }

    if (game.score1 > game.score2) {
      return game.team1Id === teamId ? 'W' : 'L';
    }

    return game.team2Id === teamId ? 'W' : 'L';
  };

  expandGame = (expandedGame) => {
    this.setState({ expandedGame });
  };

  render() {
    const { games, currentYear, showRecord, team, teams } = this.props;
    let wins = 0;
    let losses = 0;
    let draws = 0;
    let record;

    const rows = games.map((game, i) => {
      let resText;
      let rowClass;
      const played = gamePlayed(game);
      if (played) {
        const result = this.getResult(game, team.id);
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
        <div tabindex={i + 11} class="stats-table-row-wrapper">
          <div class={`stats-table-row ${rowClass}`} onClick={() => this.expandGame(game.id)}>
            <span class="date-span">
              <i class="fa fa-clock"></i>
              { getFormattedGameDate(game) }
            </span>
            <div class="team-block">
              <span class="team-name team-name-full">{ game.team1.title }</span>
              <span class="team-name team-name-small">{ game.team1.shortName }</span>
              <span class="team-name team-name-smaller">{ game.team1.shorterName }</span>
              <span class="team-name team-name-smallest">{ game.team1.code }</span>
              <span class="team-badge" style={`background-image: url(/assets/badges/compressed/${ game.team1.bgColor ? game.team1.code : 'default'}.png)`}></span>
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
              <span class="team-badge" style={`background-image: url(/assets/badges/compressed/${ game.team2.bgColor ? game.team2.code : 'default'}.png)`}></span>
              <span class="team-name team-name-full">{ game.team2.title }</span>
              <span class="team-name team-name-small">{ game.team2.shortName }</span>
              <span class="team-name team-name-smaller">{ game.team2.shorterName }</span>
              <span class="team-name team-name-smallest">{ game.team2.code }</span>
            </div>
          </div>
          { this.state.expandedGame === game.id ? <BigBoxScore game={game} played={played} /> : null }
        </div>
      );
    });

    return (
      <div class="full-width">
        { showRecord ? <h2 class="record align-center">Record: { record }</h2> : null }
        <div class="stats-table faux-table">
          { rows }
        </div>
      </div>
    );
  }
}