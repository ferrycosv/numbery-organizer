const evaluate = require('../dependencies/evaluate.js');


const numbersToSum1 = [-1, 0, 1];
const numbersToSum2 = [-1, 0, -1];
const numbersToSum3 = [1, 0, 1];

const sumAllTests = [
  { name: 'first', args: [numbersToSum1], expected: 0 },
  { name: 'second', args: [numbersToSum1], expected: 0 },
  { name: 'third', args: [numbersToSum2], expected: -2 },
  { name: 'fourth', args: [numbersToSum2], expected: -2 },
  { name: 'fifth', args: [[1, 2, 3]], expected: 6 },
  { name: 'sixth', args: [numbersToSum3], expected: 2 },
  { name: 'seventh', args: [numbersToSum3], expected: 2 },
];

function sumAll(arr) { }

evaluate(sumAll, sumAllTests);
