// Named imports
import { animalCount, isAnimal } from './imports/a.js';
// Default import
import sum from './imports/b/c.js';

// CommonJS - older style, avoid
// const { animalCount, isAnimal } = require('./imports/a.js');

console.log(animalCount);
console.log(isAnimal());

console.log(sum(1, 2));
