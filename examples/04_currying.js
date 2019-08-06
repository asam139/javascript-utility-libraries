const R = require('ramda');
const _ = require('lodash');


let addOneToAll = R.map(R.add(1));
let res = addOneToAll([1,2,3]);

console.log(res);
let array = [1, 2, 3];

console.log('/////////////////');

res1 = _.map(array, function (num){ return num + 1});

console.log(res1);



