import { h, Component } from 'preact';

export default class BigBoxScore extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const game = this.props.game;
    const played = this.props.played;
    return (
      <div class="big-box-score">
        <span class="date-span">{ game.playAt }</span>
        <div class="team-block" style={`background-color: ${ game.team1.primaryColor }`}>
          <span class="team-name">{ game.team1.title }</span>
          <span class="team-badge" style={`background-image: url(/assets/badges/${ game.team1.code }.png)`}></span>
          { played ? <span class="score-line score-line-1">{ game.score1 }</span> : null }
        </div>
        <div class="separator-left" style={`border-color: ${ game.team1.primaryColor } transparent transparent transparent;`}></div>
        <div class="separator-right" style={`border-color: transparent transparent ${ game.team2.primaryColor } transparent;`}></div>
        <div class="team-block" style={`background-color: ${ game.team2.primaryColor }`}>
          { played ? <span class="score-line score-line-2">{ game.score2 }</span> : null }
          <span class="team-badge" style={`background-image: url(/assets/badges/${ game.team2.code }.png)`}></span>
          <span class="team-name">{ game.team2.title }</span>
        </div>
        <span class="row-expander" onClick={() => expandRow( game )}></span>
      </div>
    );
  }
}