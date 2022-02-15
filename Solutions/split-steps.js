// Split an array into two parts

let split_Array = (index, array) => {
  begin = array.slice(0, index);
  const len = array.length;
  array = array.slice(index, len);
  return [begin, array];
};

//use const, use strict
'use strict';

const split_Array = (index, array) => {
  const begin = array.slice(0, index);
  const len = array.length;
  array = array.slice(index, len);
  return [begin, array];
};

//do not change parameter
'use strict';

const split_Array = (index, array) => {
  const begin = array.slice(0, index);
  const len = array.length;
  const end = array.slice(index, len);
  return [begin, end];
};

//remove redundant var len
'use strict';

const split_Array = (index, array) => {
  const begin = array.slice(0, index);
  const end = array.slice(index, array.length);
  return [begin, end];
};

//remove redundant vars
const split_Array = (index, array) => {
  return [array.slice(0, index), array.slice(index, array.length)];
};

//remove return
const split_Array = (index, array) => [array.slice(0, index), array.slice(index, array.length)];