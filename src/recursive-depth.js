const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    if (Array.isArray(arr)) {
      let countMax = 0;
      arr.forEach((element) => {
        const count = this.calculateDepth(element);
        if (count > countMax) {
          countMax = count;
        }
      });
      result += countMax;
    } else {
      return 0;
    }
    return result;    
  }
}

module.exports = {
  DepthCalculator
};
