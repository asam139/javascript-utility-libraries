const R = require('ramda');
const L = require('lodash');

let nums = [3, 1, 4, 2, 8, 5, 6];

console.log('sorting:')

// sort ascending
console.log(R.sort((x, y) =>  x - y , nums));
console.log(R.sort(R.comparator(R.lt), nums));

// sort descending
console.log(R.sort((x, y) =>  y - x , nums));
console.log(R.sort(R.comparator(R.gt), nums));

console.log('reversing:')

// reversing
console.log(R.reverse(nums));
console.log(R.reverse('forest'));


//----------------------Solution----------------------------------
console.log('-----------------------------------------------------');

// sort ascending
console.log(L.sortBy(nums));

// sort descending
console.log(L.reverse(L.sortBy(nums)));

// reversing
console.log('reversing:')
console.log(L.reverse(nums));

console.log(L.join(L.reverse( L.split("forest",'')),''));




