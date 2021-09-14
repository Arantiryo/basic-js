import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

 const seasons = {
  winter: [11, 0, 1],
  spring: [2, 3, 4],
  summer: [5, 6, 7],
  fall: [8, 9, 10]
}

export default function getSeason(date) {
  console.log(date)
  if (date === null || date === undefined) return 'Unable to determine the time of year!'
  if (!(date instanceof Date)) throw new Error('Invalid date!')

  try {
    isNaN(date.getTime())
  } catch {
    throw new Error('Invalid date!')
  }
  
  let season = Object.keys(seasons).find(key => seasons[key].indexOf(date.getMonth()) > -1 )

  return season
}