const R = require('ramda');
const L = require('lodash');

const users = [
  { name: 'John', age: 25 },
  { name: 'Lenny', age: 51 },
  { name: 'Andrew', age: 43 },
  { name: 'Peter', age: 81 },
  { name: 'Anna', age: 43 },
  { name: 'Albert', age: 76 },
  { name: 'Adam', age: 47 },
  { name: 'Robert', age: 72 }
];

let isJohn = R.includes('John', R.pluck('name', users));

if (isJohn) {
  console.log('There is John in the list');
}

//----------------------solution---------------------------------------------------
console.log("---------------------------------------------------")

let name = L.map(users, 'name');
let isJohn2= L.includes(name,'John');


if (isJohn2) {
  console.log('There is John in the list');
}