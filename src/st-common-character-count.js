import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let a1 = s1.split(''),
      a2 = s2.split(''),
      res = []
  res = a1.map( el => a2.indexOf(el) > -1 && a2.splice(a2.indexOf(el), 1) ).flat().filter(el => typeof el === 'string')
  
  return res.length
}
