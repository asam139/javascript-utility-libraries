const R = require('ramda');

let nums = [1, 2, 3, 4, 5, 6];

let ret = R.reduce((acc, x) => acc + x[0] * x[1], 0, R.splitEvery(2, nums));
console.log(ret);