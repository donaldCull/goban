interface Coordinates {
  x: number;
  y: number;
}

interface Directions {
  above: Coordinates;
  below: Coordinates;
  left: Coordinates;
  right: Coordinates;
}



export const directionMap = (x: number, y: number): Directions => {
  return {
    above: {
      x: x,
      y: y - 1
    },
    below: {
      x: x,
      y: y + 1
    },
    left: {
      x: x - 1,
      y: y,
    },
    right: {
      x: x + 1,
      y: y,
    }
  }
}
