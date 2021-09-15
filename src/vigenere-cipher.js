import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(directMachine = true) {
    this.type = directMachine === true ? 'direct' : 'reverse'
  }
  encrypt(message, key) {
    if (typeof message === 'undefined' || typeof key === 'undefined') throw new Error('Incorrect arguments!') 

    message = message.toUpperCase()
    key = key.toUpperCase()

    while (key.length < message.length) key = key.repeat(2)
    key = key.slice(0, message.length)

    let idx = 0
    let newString = message.split('').map((el) => {
      const elCode = el.charCodeAt(0)
      if (elCode < 65 || elCode > 90) return el

      const keyCode = key[idx].charCodeAt(0)
      let newCode = (elCode + keyCode - 65 > 90) ? elCode + keyCode - 91 : elCode + keyCode - 65
      idx += 1
      return String.fromCharCode(newCode)
    }).join('')

    return this.type === 'direct' ? newString : newString.split('').reverse().join('')
  }
  decrypt(message, key) {
    if (typeof message === 'undefined' || typeof key === 'undefined') throw new Error('Incorrect arguments!') 

    message = message.toUpperCase()
    key = key.toUpperCase()

    while (key.length < message.length) key = key.repeat(2)
    key = key.slice(0, message.length)

    let idx = 0
    let newString = message.split('').map((el) => {
      const elCode = el.charCodeAt(0)
      if (elCode < 65 || elCode > 90) return el

      const keyCode = key[idx].charCodeAt(0)
      let newCode = (elCode - keyCode + 65 < 65) ? elCode - keyCode + 91 : elCode - keyCode + 65
      idx += 1
      return String.fromCharCode(newCode)
    }).join('')

    return this.type === 'direct' ? newString : newString.split('').reverse().join('')
  }
}