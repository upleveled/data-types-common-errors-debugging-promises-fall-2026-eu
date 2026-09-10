// // A) ReferenceError: x is not defined
//
// // Possible reasons:
// // 1. Using the wrong variable name
// // 2. Not having access to the variable in scope
// // 3. Forgetting to import something or forgetting to declare the variable
// console.log(x); // 💥 ReferenceError: x is not defined

// // B) TypeError: x is not a function
// const x = 1;
// x(); // 💥 TypeError: x is not a function

// const user = {
//   id: 1,
// };
// user.getName(); // 💥 TypeError: user.getName is not a function

// // C) TypeError: Cannot read properties of undefined
// let user;

// console.log(user.id); // 💥 TypeError: Cannot read properties of undefined (reading 'id')

// D) TypeError: Assignment to constant variable.
const user = {
  id: 123,
  name: 'Karl',
};

// 💥 TypeError: Assignment to constant variable.
user = {
  id: 234,
  name: 'Kevin',
};

// // This does not trigger the error
// user.id = 234;
// user.name = 'Kevin';
