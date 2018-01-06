const GoalBox = ({ goals, team }) => {
  return (
    <ul class="goal-box">
      {
        goals.filter(g => g.teamId === team).map(g => {
          return (
            <li>
              <span class="ball">⚽️</span>
              <span class="scorer">{ g.player.name }</span>
              { g.owngoal === 't' ? <span class="og">&nbsp;(OG)&nbsp;</span> : null }
              <span class="minute">&nbsp;&ndash;&nbsp;{ g.minute }'</span>
            </li>
          )
        })
      }
    </ul>
  );
};

export default GoalBox;