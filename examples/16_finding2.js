const R = require('ramda');

const users = [
  { name: 'John', age: 25 },
  { name: 'Lenny', age: 51 },
  { name: 'Andrew', age: 43 },
  { name: 'Peter', age: 81 },
  { name: 'Anna', age: 43 },
  { name: 'Albert', age: 76 },
  { name: 'Adam', age: 47 },
  { name: 'Robert', age: 72 },
  { name: 'Robert', age: 26 },
];

console.log(R.find(R.propEq('name', 'Robert'))(users));
console.log(R.find(R.propEq('age', 81))(users));
