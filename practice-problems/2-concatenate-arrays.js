const evaluate = require('../dependencies/evaluate.js');

const arrToConcat1 = [1, 2, 3];
const arrToConcat2 = [2, 3, 4];
const arrToConcat3 = ['3', null, 'hi!'];
const arrToConcat4 = [true, false, '5'];

const concatArraysTests = [
  { name: 'first', args: [arrToConcat2, arrToConcat1], expected: [2, 3, 4, 1, 2, 3] },
  { name: 'second', args: [arrToConcat3, arrToConcat1], expected: ['3', null, 'hi!', 1, 2, 3] },
  { name: 'third', args: [['hello'], arrToConcat4], expected: ['hello', true, false, '5'] },
  { name: 'fourth', args: [['hello'], ['world']], expected: ['hello', 'world'] },
];

function concatArrays(arr1, arr2) { }

evaluate(concatArrays, concatArraysTests);
