export const gameIsInFuture = (game) => {
  let now = new Date();
  let gameDate = new Date(game.playAt);
  now.setHours(0);
  now.setMinutes(0);
  now.setSeconds(0);
  now.setMilliseconds(0);
  gameDate.setHours(0);
  gameDate.setMinutes(0);
  gameDate.setSeconds(0);
  gameDate.setMilliseconds(0);
  return gameDate.getTime() >= now.getTime();
};