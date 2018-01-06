import { Component } from 'preact';
import GoalBox from './GoalBox';

export default class BigBoxScore extends Component {
  constructor(props) {
    super(props);
  }

  isLight = (hexCode) => {
    hexCode = hexCode.substring(1); // strip #
    let rgb = parseInt(hexCode, 16); // convert rrggbb to decimal
    let r = (rgb >> 16) & 0xff; // extract red
    let g = (rgb >> 8) & 0xff; // extract green
    let b = (rgb >> 0) & 0xff; // extract blue

    let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    return (luma > 230);
  };

  render() {
    const game = this.props.game;
    const played = this.props.played;
    return (
      <div class="big-box-score">
        <span class="date-span">{ game.playAt }</span>
        <div class="team-block">
          <div class="team-bg" style={`background-color: ${ game.team1.bgColor }`}></div>
          <div class="team-img" style={`background-image: url(/assets/badges-vector/${ game.team1.code }.svg)`}></div>
          <div class="overlay">
            <span class={`team-name ${game.team1.title.length > 15 ? 'smaller' : ''}`}>{ game.team1.title }</span>
            { played ? <span class="score-line score-line-1">{ game.score1 }</span> : null }
            { game.score1 > 0 ? <GoalBox goals={game.goals} team={game.team1Id} /> : null }
          </div>
        </div>
        <div class="separator-left" style={`border-color: ${ game.team1.bgColor } transparent transparent transparent;`}></div>
        <div class="separator-right" style={`border-color: transparent transparent ${ game.team2.bgColor } transparent;`}></div>
        <div class="team-block">
          <div class="team-bg" style={`background-color: ${ game.team2.bgColor }`}></div>
          <div class="team-img" style={`background-image: url(/assets/badges-vector/${ game.team2.code }.svg)`}></div>          <div class="overlay">
            <span class={`team-name ${game.team2.title.length > 15 ? 'smaller' : ''}`}>{ game.team2.title }</span>
            { played ? <span class="score-line score-line-2">{ game.score2 }</span> : null }
            { game.score1 > 0 ? <GoalBox goals={game.goals} team={game.team2Id} /> : null }
          </div>
        </div>
      </div>
    );
  }
}