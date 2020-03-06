const evaluate = require('../dependencies/evaluate.js');


const findEvensArray1 = ['.', '1', '2', ':'];
const findEvensArray2 = ['1', 'two', 'three', '10'];
const findEvensArray3 = ['one', '2', '', 'NaN'];
const findEvensArray4 = ['.', 1, 2, NaN];

const oddsToNotFind = ['1', '3', '5'];
const evensToFind = ['2', '4', '6'];

const findAllEvensTests = [
  { name: 'first', args: [findEvensArray1], expected: ['2'] },
  { name: 'second', args: [findEvensArray2], expected: ['10'] },
  { name: 'third', args: [findEvensArray3], expected: ['2', ''] },
  { name: 'fourth', args: [findEvensArray4], expected: null },
  { name: 'fifth', args: [[1, 2, 3]], expected: null },
  { name: 'sixth', args: [oddsToNotFind], expected: [] },
  { name: 'seventh', args: [evensToFind], expected: ['2', '4', '6'] },
];

function findAllEvens(arr) { }

evaluate(findAllEvens, findAllEvensTests);

