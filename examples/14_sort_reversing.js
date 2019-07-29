const R = require('ramda');

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