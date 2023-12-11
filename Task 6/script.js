'use strict';
console.log('script.js file was loaded');

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

function getUserAverageAge(users) {
  var totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

function getUsersNames(users) {
  return users.map(user => user.name);
}

const userAverageAge = getUserAverageAge(users);

const usersNames = getUsersNames(users)

// console.log(userAverageAge);

// console.log(usersNames);