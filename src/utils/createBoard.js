import { createCell } from "./createCell";

export const createBoard = (width, height, bombs) => {
  const matrix = [];

  for (let row = 0; row < height; row++) {
    const newRow = [];
    for (let col = 0; col < width; col++) {
      newRow.push(createCell(row, col));
    }
    matrix.push(newRow);
  }

  // insert bombs
  // increase nums

  return matrix;
};
