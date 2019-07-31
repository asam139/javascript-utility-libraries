const R = require('ramda');
const L = require('lodash');

let res = R.call(R.add, 1, 2);
console.log(res);

console.log(R.call(R.repeat, 'x')(5));

R.call(console.log, [1, 2, 3]);

console.log("--------------------------");

//Solutions
rest2 = L.add(1,2)
console.log(rest2);

console.log(L.times(5,L.constant( 'x' ) ) )
L.times(1,console.log([1,2,3]));

