const evaluate = require('../dependencies/evaluate.js');

const thingsToNumber1 = ['.', '1', '2', ':'];
const thingsToNumber2 = ['1', 'two', 'three', '10'];
const thingsToNumber3 = ['one', '2', '', 'NaN'];
const thingsToNumber4 = ['.', 1, 2, NaN];

const oddsToNumber = ['1', '3', '5'];
const evensToNumber = ['2', '4', '6'];

const returnAsNumbersTests = [
  { name: 'first', args: [thingsToNumber1], expected: [1, 2] },
  { name: 'second', args: [thingsToNumber2], expected: [1, 10] },
  { name: 'third', args: [thingsToNumber3], expected: [2, 0] },
  { name: 'fourth', args: [thingsToNumber4], expected: null },
  { name: 'fifth', args: [[1, 2, 3]], expected: null },
  { name: 'sixth', args: [oddsToNumber], expected: [1, 3, 5] },
  { name: 'seventh', args: [evensToNumber], expected: [2, 4, 6] },
];

function returnAsNumbers(arr) {
  // hint: try an early return condition for array contains no numbery strings
};

evaluate(returnAsNumbers, returnAsNumbersTests);

