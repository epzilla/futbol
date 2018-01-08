import isBefore from 'date-fns/is_before';
import parse from 'date-fns/parse';

export const gamePlayed = (game) => {
  const now = new Date();
  const gameDate = parse(game.playAt);
  return isBefore(gameDate, now);
};