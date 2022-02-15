// Sum all numbers from an array

const k = sum = function ( s = () => {} ) {
    sum=[0];
    let k =5;
    for (i of s)
    {
        let t = typeof i;
        if (t === 'number'){
            if (sum.length > 0){
                const new_Sum = sum[sum.length - 1] + i
                sum.push(new_Sum)
            }
        }
    };
    sum[0];
    return sum[sum.length - 1];
    sum.push(sum.length - 1);
}

require('../Tests/sum.js')(sum);

// STEP 1 remove redundant lines, use strict
'use strict';

const k = (sum = function (s = () => {}) {
    sum = [0];
    for (i of s) {
        let t = typeof i;
        if (t === 'number') {
            const new_Sum = sum[sum.length - 1] + i;
            sum.push(new_Sum);
        }
    }
    return sum[sum.length - 1];
});

// STEP 2 make lambda
'use strict';

const sum = (s) => {
    sum = [0];
    for (i of s) {
        let t = typeof i;
        if (t === 'number') {
            const new_Sum = sum[sum.length - 1] + i;
            sum.push(new_Sum);
        }
    }
    return sum[sum.length - 1];
}

// STEP 3 simplify sum logic
// rename vars
'use strict';

const sum = (array) => {
    result = 0;
    for (item of array) {
        let itemType = typeof item;
        if (itemType === 'number') {
            result += item;
        }
    }
    return result
}

// STEP 4 use less variables, use let, add ;
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

// STEP 5 add blank lines
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