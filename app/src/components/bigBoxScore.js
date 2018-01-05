import { h, Component } from 'preact';

export default class BigBoxScore extends Component {
  constructor(props) {
    super(props);
  }

  isLight = (hexCode) => {
    var hexCode = hexCode.substring(1); // strip #
    var rgb = parseInt(hexCode, 16); // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff; // extract red
    var g = (rgb >>  8) & 0xff; // extract green
    var b = (rgb >>  0) & 0xff; // extract blue

    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    return (luma > 230);
  };

  render() {
    const game = this.props.game;
    const played = this.props.played;
    let team1StyleString;
    let team2StyleString;
    if (this.isLight(game.team1.bgColor)) {
      team1StyleString = `color: ${ game.team1.textColor }`;
    }
    if (this.isLight(game.team2.bgColor)) {
      team2StyleString = `color: ${ game.team2.textColor }`;
    }
    return (
      <div class="big-box-score">
        <span class="date-span">{ game.playAt }</span>
        <div class="team-block">
          <div class="team-bg" style={`background-color: ${ game.team1.bgColor }; background-image: url(/assets/badges-vector/${ game.team1.code }.svg)`}></div>
          <div class="overlay">
            <span class="team-name" style={team1StyleString}>{ game.team1.title }</span>
            { played ? <span class="score-line score-line-1" style={team1StyleString}>{ game.score1 }</span> : null }
          </div>
        </div>
        <div class="separator-left" style={`border-color: ${ game.team1.bgColor } transparent transparent transparent;`}></div>
        <div class="separator-right" style={`border-color: transparent transparent ${ game.team2.bgColor } transparent;`}></div>
        <div class="team-block">
          <div class="team-bg" style={`background-color: ${ game.team2.bgColor }; background-image: url(/assets/badges-vector/${ game.team2.code }.svg)`}></div>
          <div class="overlay">
            { played ? <span class="score-line score-line-2" style={team2StyleString}>{ game.score2 }</span> : null }
            <span class="team-name" style={team2StyleString}>{ game.team2.title }</span>
          </div>
        </div>
        <span class="row-expander" onClick={() => expandRow( game )}></span>
      </div>
    );
  }
}