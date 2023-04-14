const { NotImplementedError } = require('../extensions/index.js');

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
function getSeason(date) {
  if(arguments.length === 0) return 'Unable to determine the time of year!';
  try {
    if(isNaN(date)) throw Error('Invalid date!');
    const num = date.getMonth();
    if(num < 2 || num > 10) return 'winter';
    else if(num < 5 && num > 1) return 'spring';
    else if(num < 8 && num > 4) return 'summer';
    else if(num < 11 && num > 7) return 'autumn';
  } catch {
    throw new Error('Invalid date!');
  }
 
}

module.exports = {
  getSeason
};
