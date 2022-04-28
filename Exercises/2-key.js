'use strict';

const generateKey = (length, possible) => {
  let str = '';
  for (let i = 0; i < length; i++) {
    const randomKey = Math.floor(Math.random() * possible.length);
    str += possible.split('')[randomKey];
  }
  return str;
};

module.exports = { generateKey };
