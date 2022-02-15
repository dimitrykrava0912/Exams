// Sum all numbers from an array

'use strict';

const sum = (array) => {
    let result = 0;

    for (const item of array) {
        if (typeof item === 'number') {
            result += item;
        }
    }

    return result;
}

require('../Tests/sum.js')(sum);
