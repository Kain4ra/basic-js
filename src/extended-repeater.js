const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  let strString = '' + str;
  let strArr = [];
  let additArr = [];

  if(options.addition !== undefined) {
    let rep = options.additionRepeatTimes || 1;
    for (let i = 0; i < rep; i++) {
      additArr.push('' + options.addition);
    }
  }

  const additString = additArr.join(options.additionSeparator || '|');

  let rep = options.repeatTimes || 1;
  for (let i = 0; i < rep; i++) {
    strArr.push(strString + additString);
  }

  return strArr.join(options.separator || '+');
}

module.exports = {
  repeater
};
