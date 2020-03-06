const evaluate = require('../dependencies/evaluate.js');

const isNaNyStringTests = [
  { name: 'first', args: ['3'], expected: false },
  { name: 'second', args: [''], expected: false },
  { name: 'third', args: ['.'], expected: true },
  { name: 'fourth', args: ['*'], expected: true },
  { name: 'fifth', args: ['1e3'], expected: false },
  { name: 'sixth', args: ['1e3'], expected: false },
  { name: 'seventh', args: ['Infinity'], expected: false },
  { name: 'eighth', args: ['infinity'], expected: true },
  { name: 'ninth', args: ['NaN'], expected: true },
  { name: 'tenth', args: [NaN], expected: null },
  { name: 'eleventh', args: [true], expected: null },
  { name: 'twelfth', args: [undefined], expected: null },
  { name: 'thirteenth', args: [null], expected: null },
];

function isNaNyString(arg) { }

evaluate(isNaNyString, isNaNyStringTests);
