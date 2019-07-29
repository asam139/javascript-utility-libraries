const R = require('ramda');

const nums = [-3, -1, 0, 2, 3, 4, 5, 6, 7]

let res = R.filter(x => x > 0, nums);
console.log(res);

let res2 = R.filter(x => x < 0, nums);
console.log(res2);

const isEven = x => x % 2 === 0;

let filtered = R.filter(isEven, nums);
console.log(filtered);