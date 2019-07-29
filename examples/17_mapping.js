const R = require('ramda');

nums = [2, 4, 5, 6, 7, 8, 9];

let res = R.map(x => x * 2, nums);
console.log(res);

const isEven = x => x % 2 === 0;
let res2 = R.map(isEven, nums);
console.log(res2);

let repeated = R.map(R.call, R.repeat(Math.random, 5));
console.log(repeated);