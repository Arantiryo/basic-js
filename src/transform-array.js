import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  const sequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']

  let result = []
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++
        break
      case '--discard-prev':
        if (result.length > 0 && result[result.length-1] === arr[i-1] ) result.pop() //&& sequences.indexOf(arr[i-1]) === -1
        break
      case '--double-next':
        if (i < arr.length-1 && sequences.indexOf(arr[i+1]) === -1) result.push(arr[i+1]) //
        break
      case '--double-prev':
        if (result.length > 0 && result[result.length-1] === arr[i-1] ) result.push(arr[i-1]) // && sequences.indexOf(arr[i-1]) === -1
        break
      default:
        result.push(arr[i])
    }
  }

  return result
}
