// Compare two dictionaries
'use strict';

const compare = (first_values, second_values) => {
  const firstKeys = Object.keys(first_values);
  const lastKeys = Object.keys(second_values);

  if (firstKeys.join() !== lastKeys.join()) return false;

  for (const key of firstKeys) {
    if(first_values[key] !== second_values[key]) {
      return false;
    }
  }
  return true;
};
require('../Tests/compare.js')(compare);
