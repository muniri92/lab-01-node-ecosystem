'use strict';

module.exports = {};

const greet = (name) => {
  if (typeof(name) !== 'string') {
    return null;
  }
  return ('Hello, ', name);

}
