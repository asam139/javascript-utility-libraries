const R = require('ramda');

const isPositive = x => x > 0;

let values = [-1, 0, -4, 5, 6, -1, 9, -2]

let val = R.find(isPositive, values);
console.log(val);

let val2 = R.findLast(isPositive, values);
console.log(val2);

