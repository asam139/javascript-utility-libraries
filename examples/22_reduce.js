const R = require('ramda');

let nums = [2, 3, 4, 5, 6, 7];

let sum = R.reduce((x, y) => x+y, 0, nums);
console.log(sum);

let product = R.reduce((x, y) => x*y, 1, nums);
console.log(product);
