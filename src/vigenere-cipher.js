const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct
  }
  vizhener = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  encrypt(string, key) {
    let j = 0;
    let str = string.toString().toUpperCase().split('');
    let keys = key.toUpperCase().split('');
    if (!this.direct) {
      str = str.reverse();
      keys = keys.reverse();
    }
    return str.map( (item)=> {
      if (/^[\W\d]/.test(item)) return item;
      if (j === key.length) j = 0;
      const result = this.vizhener[(item.charCodeAt(0) + keys[j].charCodeAt(0)) % 26];
      j++;
      return result
    }).join('');
  }

  decrypt(string, key) {
    let j = 0;
    let str = string.toString().toUpperCase().split('');
    let keys = key.toUpperCase().split('');
    if (!this.direct) {
      str = str.reverse();
      keys = keys.reverse();
    }
    return str.map( (item)=> {
      if (/^[\W\d]/.test(item)) {return item}
      if (j === key.length) j = 0;
      const result = this.vizhener[(item.charCodeAt(0) + 26 - keys[j].charCodeAt(0)) % 26];
      j++;
      return result
    }).join('');
  }
}

module.exports = VigenereCipheringMachine;