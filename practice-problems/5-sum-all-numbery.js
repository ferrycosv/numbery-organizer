const evaluate = require('../dependencies/evaluate.js');


const sumNumberys1 = ['.', '1', '2', ':'];
const sumNumberys2 = ['1', 'two', 'three', '10'];
const sumNumberys3 = ['one', '2', '', 'NaN'];
const sumNumberys4 = ['.', 1, 2, NaN];

const oddsToSum = ['1', '3', '5'];
const evensToSum = ['2', '4', '6'];

const sumAllNumberysTests = [
  { name: 'first', args: [sumNumberys1], expected: 3 },
  { name: 'second', args: [sumNumberys2], expected: 11 },
  { name: 'third', args: [sumNumberys3], expected: 2 },
  { name: 'fourth', args: [sumNumberys4], expected: null },
  { name: 'fifth', args: [[1, 2, 3]], expected: null },
  { name: 'sixth', args: [['1', '2', '3']], expected: 6 },
  { name: 'seventh', args: [oddsToSum], expected: 9 },
  { name: 'eighth', args: [evensToSum], expected: 12 },
];

function sumAllNumberys(arr) { }

evaluate(sumAllNumberys, sumAllNumberysTests);
