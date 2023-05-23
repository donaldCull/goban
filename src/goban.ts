import { gobanPieces } from './gobanPieces';
import { directionMap } from './types/directions';
import { PositionStatus } from './types/status';

export default class Goban {
  goban: string[];
  coordMap: Map<string, string>;

  constructor(board: string[]) {
    this.goban = board;
    this.coordMap = new Map();
  }

  private getStatus(x: number, y: number) {
    if (
      !this.goban ||
      x < 0 ||
      y < 0 ||
      y >= this.goban.length ||
      x >= this.goban[0].length
    ) {
      return PositionStatus.OUT;
    }
    return gobanPieces[this.goban[y][x]];
  }

  private floodFill(x: number, y: number) {
    const coord = `${x}-${y}`;
    if (this.coordMap.has(coord)) {
      return;
    }
    this.coordMap.set(coord, coord);

    const { above, below, left, right } = directionMap(x, y);

    const currentStone = this.getStatus(x, y);
    if (
      currentStone === PositionStatus.OUT ||
      currentStone === PositionStatus.EMPTY
    ) {
      this.coordMap.set('freedom', coord)
    }

    const aboveCurrent = this.getStatus(above.x, above.y);
    const belowCurrent = this.getStatus(below.x, below.y);
    const leftOfCurrent = this.getStatus(left.x, left.y);
    const rightOfCurrent = this.getStatus(right.x, right.y);
    if (
      aboveCurrent === PositionStatus.EMPTY ||
      belowCurrent === PositionStatus.EMPTY ||
      leftOfCurrent === PositionStatus.EMPTY ||
      rightOfCurrent === PositionStatus.EMPTY
    ) {
      this.coordMap.set('freedom', coord)
    }

    if (aboveCurrent === currentStone) {
      this.floodFill(above.x, above.y);
    }

    if (belowCurrent === currentStone) {
      this.floodFill(below.x, below.y);
    }

    if (leftOfCurrent === currentStone) {
      this.floodFill(left.x, left.y);
    }

    if (rightOfCurrent === currentStone) {
      this.floodFill(right.x, right.y);
    }
  }

  isTaken(x: number, y: number) {
    this.floodFill(x, y);
    const result = !this.coordMap.has('freedom');
    this.coordMap.clear();
    return result;
  }

  show() {
    this.goban.forEach((row) => console.log(row));
  }
}
