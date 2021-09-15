import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let res = {}

  domains.forEach(el => {
    let reverseEl = el.split('.').reverse() 
    let prevDNS = ''
    
    reverseEl.forEach(el => {
      let dns = prevDNS + '.' + el
      res.hasOwnProperty(dns) ? res[dns] += 1 : res[dns] = 1
      prevDNS = dns
    })
  })

  return res
}