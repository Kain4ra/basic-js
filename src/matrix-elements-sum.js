const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = matrix[0].reduce((accum, currentNum) => accum + currentNum);
  matrix.forEach((item, index) => {
    if(index === 0) return;
    sum += item.reduce((accum, currentNum, i) => matrix[index - 1][i] === 0 ? accum : accum + currentNum, 0);
  })
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
