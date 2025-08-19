// "use strict";

// Array Concepts

const arr = [1, 2, 3, 4, 5, "Abc", true];
// arr.push(5);

// arr[5] = 6;

// console.log(arr[5]);

//

// arr.pop();
arr.shift();
console.log(arr);
// const person = {
//     name:"hh"
// }

// person.push(5)

// con

let emptyArr = [];

emptyArr.push(5);

emptyArr.push("arya");

console.log(emptyArr);

// sort

const arr2 = [4, 5, 7, 6, 8, 3, 4, 5, 6, 7, 4, 45, 65, 9];

// const sortedArray = arr2.sort((a, b) => b - a);
// console.log(arr2);

// forEach
// Map
// filter
//reduser
let double = [];
arr2.forEach((el, i, arr) => {
  const mul = el * 2;
  double.push(mul);
});

console.log(double);

const doublearr = arr2.map((el) => el * 2);
console.log(doublearr);

const filterArr = arr2.filter((el) => el % 2 === 0);
console.log(filterArr);

// interview question

// const que = [1,2,[3,4,[5,6]]]

// [1,2,3,4,5,6]
