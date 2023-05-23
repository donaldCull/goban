import { PositionStatus } from "./types/status";

export const gobanPieces = {
  '.' : PositionStatus.EMPTY,
  'o' : PositionStatus.WHITE,
  '#' : PositionStatus.BLACK
}