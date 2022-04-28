'use strict';

const random = (min = 0, max) => {
  if (!max) {
    max = min;
    min = 0;
  }

  const rand = Math.floor(Math.random() * (max - min)) + min;
  return rand;
};

module.exports = { random };
