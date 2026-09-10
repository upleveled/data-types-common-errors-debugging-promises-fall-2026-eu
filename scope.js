// 1. Function scope
function sum(numberA, numberB) {
  const result = numberA + numberB;
  return result;
}

console.log(sum(1, 2));
// console.log(numberA); // 💥 ReferenceError: numberA is not defined
// console.log(numberB); // 💥 ReferenceError: numberB is not defined
// console.log(result); // 💥 ReferenceError: result is not defined

// 2. Block scope
let age = 20;

if (age > 19) {
  const message = 'You are too old!';
  console.log(message);
}

console.log(message);
