// Sum all number values in dict

'use strict';

const count = (dictionary) => {
  let sum = 0;

  for(const key of Object.keys(dictionary)) {
    if (typeof dictionary[key] === 'number') {
      sum += dictionary[key];
    }
  }

  return sum;
};

require('../Tests/count.js')(count);
