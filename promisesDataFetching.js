import { fakeFetch } from './util/fakeFetch.js';

// one website will always take longer, but it's random which one
// no way to know how long that they will take

// it should console.log() the response objects in order, regardless of how long each takes:
// - YouTube first
// - Google second

// restrictions:
// - cannot use async/await
// - fakeFetch functions cannot be moved

let googleResponseGlobal;
let youtubeResponseGlobal;

fakeFetch('https://example.com/youtube')
  .then((youtubeResponse) => {
    youtubeResponseGlobal = youtubeResponse;
    if (googleResponseGlobal !== undefined) {
      console.log(youtubeResponse);
      console.log(googleResponseGlobal);
    }
  })
  .catch((error) => {
    console.error(error);
  });

fakeFetch('https://example.com/google')
  .then((googleResponse) => {
    googleResponseGlobal = googleResponse;
    if (youtubeResponseGlobal !== undefined) {
      console.log(youtubeResponseGlobal);
      console.log(googleResponse);
    }
  })
  .catch((error) => {
    console.error(error);
  });

// Nicer solutions if you could use async/await

// console.log(await fakeFetch('https://example.com/youtube'));
// console.log(await fakeFetch('https://example.com/google'));

// console.log(
//   await Promise.all([
//     fakeFetch('https://example.com/youtube'),
//     fakeFetch('https://example.com/google'),
//   ]),
// );

//

//

//

//

// Promise Example
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('abc');
//   }, 2000);
// });

// promise.then((value) => {
//   console.log(value);
// });
