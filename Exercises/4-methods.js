'use strict';

const methods = (iface) => {
  const result = [];
  for (const prop in iface) {
    const fun = iface[prop];
    if (typeof fun === 'function') {
      result.push([prop, fun.length]);
    }
  }
  return result;
};

module.exports = { methods };
