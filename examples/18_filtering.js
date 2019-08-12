const R = require('ramda');
const L = require('lodash');
const nums = [-3, -1, 0, 2, 3, 4, 5, 6, 7]

let res = R.filter(x => x > 0, nums);
console.log(res);

let res2 = R.filter(x => x < 0, nums);
console.log(res2);

const isEven = x => x % 2 === 0;

let filtered = R.filter(isEven, nums);
console.log(filtered);



//----------------------solution---------------------------------------------------
console.log("---------------------------------------------------")

let res3 = L.filter(nums,x => x > 0);
console.log(res3);

let res4 = L.filter(nums,x => x < 0);
console.log(res4);
