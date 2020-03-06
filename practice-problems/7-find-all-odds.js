const evaluate = require('../dependencies/evaluate.js');


const findOddsArray1 = ['.', '1', '2', ':'];
const findOddsArray2 = ['1', 'two', 'three', '10'];
const findOddsArray3 = ['one', '2', '', 'NaN'];
const findOddsArray4 = ['.', 1, 2, NaN];

const oddsToFind = ['1', '3', '5'];
const evensToNotFind = ['2', '4', '6'];

const findAllOddsTests = [
  { name: 'first', args: [findOddsArray1], expected: ['1'] },
  { name: 'second', args: [findOddsArray2], expected: ['1'] },
  { name: 'third', args: [findOddsArray3], expected: [] },
  { name: 'fourth', args: [findOddsArray4], expected: null },
  { name: 'fifth', args: [[1, 2, 3]], expected: null },
  { name: 'sixth', args: [oddsToFind], expected: ['1', '3', '5'] },
  { name: 'seventh', args: [evensToNotFind], expected: [] },
];
function findAllOdds(arr) { }

evaluate(findAllOdds, findAllOddsTests);
