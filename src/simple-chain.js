import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value = '') {
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if(isNaN(position) || position < 1 || this.chain.length-1 < position) {
      this.chain = []
      throw new Error('You can\'t remove incorrect link!')
    } 
    this.chain.splice(position-1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    const result = this.chain.join('~~')
    this.chain = []
    return result
  }
};
