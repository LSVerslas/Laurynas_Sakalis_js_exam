'use strict';
console.log('script.js file was loaded');

const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

function showObjectKeys(obj) {
  return Object.keys(obj);
}

function getObjectValues(obj) {
  return Object.values(obj);
}

const keysArray = showObjectKeys(audi);
const valuesArray = getObjectValues(audi);

// console.log(keysArray);
// console.log(valuesArray);