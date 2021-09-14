import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let {repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|'} = options
  str = typeof str === 'string' ? str : String(str)
  addition = typeof addition === 'undefined' ? addition : String(addition)

  if (typeof addition !== 'undefined') { //&& typeof additionRepeatTimes === 'number'
    if (typeof additionRepeatTimes === 'number')
      addition = (addition+additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length)
  } else {
    addition = ''
  }
  
  str = str + addition

  if (typeof repeatTimes === 'number') str = (str+separator).repeat(repeatTimes).slice(0, -separator.length)
  
  return str
}

// function repeater(str, options) {
//   let {repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|'} = options
//   str = typeof str === 'string' ? str : str?.toString()
//   addition = typeof addition === 'string' ? addition : addition?.toString()

//   if (typeof addition !== 'undefined' && typeof additionRepeatTimes === 'number') addition = (addition+additionSeparator).repeat(repeatTimes).slice(0, -additionSeparator.length)
//   if (typeof repeatTimes === 'number') str = (str+addition+separator).repeat(repeatTimes).slice(0, -separator.length)
  
//   return str
// }

// console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))

//console.log(undefined?.toString())
