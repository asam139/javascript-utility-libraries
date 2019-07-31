const R = require('ramda');
const L = require('lodash');

let nums = [1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 6, 7];

let n1 = R.length(nums);
console.log(n1);

let n2 = R.length(R.uniq(nums));
console.log(n2);


//-----------solutions--------------------------
console.log("-------------------------------")
let n3 = L.size(nums);
console.log(n3);

let n4 = L.size(L.uniqWith(nums, L.isEqual) );
console.log(n4);