'use strict';

module.exports = (name) => typeof name === 'string' ?  `Hello, ${name}` : null

// module.exports = (name) => {
//   return typeof name === 'string' ?  `Hello, ${name}` : null
// }

// module.exports = (name) => {
//   if (typeof name === 'string')
//     return `Hello, ${name}`;
//   return null;
// };
