const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  matrix.forEach(x => {
    result.push(new Array(x.length).fill(0));
  })

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === true) {
        result[i][j] = result[i][j] - 1;
        for(let a = i - 1; a <= i + 1; a++) {
          for(let b = j - 1; b <= j + 1; b++) {
            if(a >= 0 && a < matrix.length && b >= 0 && b < matrix[i].length) {
              result[a][b] = result[a][b] + 1;
            }
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
