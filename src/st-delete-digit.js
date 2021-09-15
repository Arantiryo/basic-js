import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let biggestNumber = 0
  const str = String(n)
  
  str.split('').forEach((el, idx) => {
    const num = Number(str.slice(0, idx) + str.slice(idx+1, str.length))
    biggestNumber = num > biggestNumber ? num : biggestNumber
  })
  return biggestNumber  
}