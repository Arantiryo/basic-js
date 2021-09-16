import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let result = '', 
      count = 1

  str.split('').forEach((el,idx,arr) => {
    if (el !== arr[idx+1]) {
      result += count > 1 ? `${count}${el}` : el
      count = 1
    } else {
      count += 1
    }
  })

  return result
}