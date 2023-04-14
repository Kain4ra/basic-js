const { NotImplementedError } = require('../extensions/index.js');

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
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  letter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  encrypt(str, key) {
    if(arguments.length !== 2 || typeof str !== 'string' || typeof key !== 'string') throw new Error('Incorrect arguments!');
    let result = '';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if(!this.letter.includes(str[i].toUpperCase())) {
        result+= str[i];
        continue;
      }
      if(count > key.length - 1) count = 0;
      let value = this.letter.indexOf(str[i].toUpperCase()) + this.letter.indexOf(key[count].toUpperCase());
      count++;
      while(value >= 26) {
        value-= 26;
      }
      result += this.letter[value];
    }

    return this.reverse ? result : result.split('').reverse().join('');
  }
  decrypt(str, key) {
    if(arguments.length !== 2 || typeof str !== 'string' || typeof key !== 'string') throw new Error('Incorrect arguments!');
    let result = '';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if(!this.letter.includes(str[i].toUpperCase())) {
        result+= str[i];
        continue;
      }
      if(count > key.length - 1) count = 0;
      let value = this.letter.indexOf(str[i].toUpperCase()) - this.letter.indexOf(key[count].toUpperCase());
      count++;
      if(value < 0) {
        value = 26 - Math.abs(value);
      }
      result += this.letter[value];
    }

    return this.reverse ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
