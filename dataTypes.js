// - try to remember as many data types as you can
//   - identify whether each data type is primitive or non-primitive
// - write code to create values of each data type
// - write code to update the values of each data type

// number (primitive)
const numberA = 10; // number literal value
let numberB = 22; // number literal value
numberB = 70; // update a `let` number

const numberC = 10 + 20;
const numberD = numberA / numberB;

// Floating-point math is not always precise
console.log(0.1 + 0.2); // 0.30000000000000004

const numberE = Number('1234'); // converting string to number
console.log(numberE);
console.log(typeof numberE); // find data type: 'number'

console.log(NaN); // Not a Number: a number value that is invalid
console.log(typeof NaN); // 'number'
console.log(0 / 0); // NaN
console.log(Number('asdf')); // NaN

// undefined (primitive)
const undA = undefined; // undefined literal value

let undB;
console.log(undB); // undefined

const obj = { a: 1 };
console.log(obj.b);

const arr = [];
console.log(arr[0]);

function run() {} // no return
console.log(run()); // 'undefined'

// null (primitive)
const n = null; // null literal

// Communicating *intentional* creation of an "empty" value
const userWithHat = {
  id: 1,
  hat: 'Sombrero',
};
userWithHat.hat = null;
console.log(userWithHat.hat); // null
console.log(userWithHat.invalidProperty); // undefined

// boolean (primitive)
const boolA = true; // boolean literal value
const boolB = numberB > 2; // creating a boolean from an expression

// string (primitive)
const strA = 'giraffe'; // string literal with single quotes
const strB = "I'm a giraffe"; // string literal with double quotes
const strC = `I'm a ${strA}`; // string literal with backticks

// 6. Symbol (primitive)
const sym = Symbol('abc');
console.log(sym);

const obj2 = {
  [sym]: 'def',
};
console.log(obj2.abc); // undefined
console.log(obj2[Symbol('abc')]); // undefined
console.log(obj2[Symbol.for('abc')]); // undefined
console.log(obj2[sym]); // 'def' <-- one of the only ways to access the data

// 7. BigInt (primitive)
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);
const bigInt = 9007199254740991n + 2n;
console.log(bigInt);

// object (non-primitive)
const user = {
  id: 123,
  firstName: 'Kevin',
  lastName: 'Buchmann',
  // nested object
  address: {
    streetName: 'Wibautstraat',
  },
}; // object literal

console.log(user);

console.log(user.firstName); // dot notation
console.log(user['firstName']); // bracket notation

user.lastName = 'Buchmannz'; // updating a property
user.address.streetName = 'Javastraat'; // updating a property on the nested object

console.log(user);

// array (non-primitive)
const arrA = ['a', 'b', 'c']; // array literal with same data type
const arrB = ['a', 1, true]; // array literal with mixed data types
const arrC = ['a', ['b', 'c', 'd']]; // array literal with array inside (nested)
const arrD = [
  {
    id: 1,
    firstName: 'Kevin',
    lastName: 'Buchmann',
  },
  {
    id: 2,
    firstName: 'Karl',
    lastName: 'Horky',
  },
]; // array literal with objects inside

console.log(arrA);
console.log(arrA[1]); // 'b'

console.log(typeof arrA); // 'object'
console.log(Array.isArray(arrA)); // true

arrA.push('d');
console.log(arrA); // ['a', 'b', 'c', 'd']

console.log(arrA.push('e')); // 5: new length of the array
// .unshift: add element to beginning
console.log(arrA.unshift('z')); // 6: new length of the array
console.log(arrA);

// .pop/.shift to remove an item at end and beginning
console.log(arrA.pop()); // 'e'
console.log(arrA); // [ 'z', 'a', 'b', 'c', 'd' ]
console.log(arrA.shift()); // 'z'
console.log(arrA); // ['a', 'b', 'c', 'd']

// .slice - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// .some: return a boolean: does any item in the array match a condition
// .find: return a single item matching a condition
// .filter: return all items matching a condition
console.log(
  arrD.find((user) => {
    return user.firstName === 'Kevin';
  }), // will return only the Kevin object
);
console.log(
  arrD.filter((user) => {
    return user.firstName.startsWith('K');
  }), // will return both Kevin and Karl in an array
);

// .map: return a new array, changing the existing array
const usersWithoutLastNames = arrD.map((user) => {
  user.lastName = null;
  return user;

  // Better: Modify the object without touching the original
  // We'll cover again later
  // return {
  //   ...user,
  //   lastName: null,
  // };
});
console.log(usersWithoutLastNames);

// .forEach: looping over the array elements
const x = arrD.forEach((user) => {
  console.log(user.lastName);
});
console.log('forEach return value', x); // return value for forEach is `undefined`

// for: a better way of looping, in most cases
for (const user of arrD) {
  console.log(user.lastName);
}

// functions (non-primitive)
function sum(numberA, numberB) {
  const result = numberA + numberB;
  return result;
}

// Calling the function - name and then parentheses with arguments
const result1 = sum(20, 300);
console.log(result1); // 320

const result2 = sum(9, 88);
console.log(result2); // 97

// All 3 functions below do the same thing

// Function declaration with function keyword
function sumFn(numberA, numberB) {
  return numberA + numberB;
}

// Function expression with arrow function
const sumArrow = (numberA, numberB) => {
  return numberA + numberB;
};

// Function expression with arrow function, implicit return
const sumArrow2 = (numberA, numberB) => numberA + numberB;
