import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  return matrix.map((arr, i) => {
    return arr.map((el, j) => {
      let count = 0
      for (let a = -1; a < 2; a++) {
        for (let b = - 1; b < 2; b++) {
          if ((a === 0 && b === 0) || i+a < 0 || j+b < 0 || i+a > matrix.length-1 || j+b > arr.length-1) continue
          if (matrix[i+a][j+b] === true) count += 1
        }
      }
      return count
    })
  })
}
