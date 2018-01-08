const GoalBox = ({ goals, team, textColor }) => {
  return (
    <ul class="goal-box">
      {
        goals.filter(g => g.teamId === team).map(g => {
          return (
            <li style={`color: ${textColor ? textColor : 'white' }`} class={ textColor ? 'light-bg' : 'dark-bg' }>
              <span class="ball">⚽️</span>
              <span style={`color: ${textColor ? textColor : 'white' }`} class="scorer">{ g.player.name }</span>
              { g.owngoal === 't' ? <span style={`color: ${textColor ? textColor : 'white' }`} class="og">&nbsp;(OG)&nbsp;</span> : null }
              { g.penalty === 't' ? <span style={`color: ${textColor ? textColor : 'white' }`} class="pen">&nbsp;(PEN)&nbsp;</span> : null }
              <span style={`color: ${textColor ? textColor : 'white' }`} class="minute">&nbsp;{ g.minute }'</span>
            </li>
          )
        })
      }
    </ul>
  );
};

export default GoalBox;