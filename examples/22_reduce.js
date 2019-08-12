const R = require('ramda');
const L = require('lodash');
let nums = [2, 3, 4, 5, 6, 7];

let sum = R.reduce((x, y) => x+y, 0, nums);
console.log(sum);

let product = R.reduce((x, y) => x*y, 1, nums);
console.log(product);


//----------------------solution---------------------------------------------------
console.log("---------------------------------------------------")


let sum2 = L.reduce(nums,(x, y) => x+y, 0);
console.log(sum2);