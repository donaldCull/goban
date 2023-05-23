import Goban from "./goban"

const board = [
  'ooo',
  '###',
  'o#o',
  'o#o',
  'o#o',
]

const goban = new Goban(board);

console.log(goban.isTaken(1,2));
