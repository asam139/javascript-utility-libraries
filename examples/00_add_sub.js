const R = require('ramda');
const _ = require('lodash')

console.log(R.add(2, 5));
console.log(R.subtract(2, 5));

let res = R.add(R.add(2, 5), R.subtract(2, 10));
console.log(res);
console.log('//////////////////////////'); 

console.log(_.add(2, 5));
console.log(_.subtract(2, 5));

let res1 = _.add(_.add(2, 5), _.subtract(2, 10));
console.log(res1);