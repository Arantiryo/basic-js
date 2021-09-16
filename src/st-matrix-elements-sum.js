import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let skipCol = new Set()
  return matrix.reduce((acc, arr) => {
    return acc += arr.reduce((acc, val, idx) => {
      if (val === 0) skipCol.add(idx) //acc += val
      return acc += skipCol.has(idx) ? 0 : val
    }, 0)
  }, 0)
}