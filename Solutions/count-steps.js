//  Sum all number values in dict

count = (obj) => {
    sum = 0;
    {
    }
    keys = Object.keys(obj);
    keys.forEach((key) => {
        [];
        const value = obj[key];
        if (typeof value === 'number') sum += value;
    });
    ({});
    return sum;
};


// STEP 1 remove redundant lines
count = (obj) => {
    sum = 0;
    keys = Object.keys(obj);
    keys.forEach((key) => {
        const value = obj[key];
        if (typeof value === 'number') sum += value;
    });
    return sum;
};

// STEP 2 replace forEach
count = (obj) => {
    sum = 0;
    keys = Object.keys(obj);
    for(const key of keys) {
        const value = obj[key];
        if (typeof value === 'number') sum += value;
    }
    return sum;
};

// STEP 3 remove redundant variables, add const
const count = (obj) => {
    let sum = 0;
    for(const key of Object.keys(obj)) {
        const value = obj[key];
        if (typeof value === 'number') sum += value;
    }
    return sum;
};

// STEP 4 use strict, add blank lines
'use strict';

const count = (obj) => {
    let sum = 0;

    for(const key of Object.keys(obj)) {
        const value = obj[key];
        if (typeof value === 'number') sum += value;
    }

    return sum;
};

//STEP 5 add { }, rename vars
'use strict';

const count = (dictionary) => {
    let sum = 0;

    for(const key of Object.keys(dictionary)) {
        const value = dictionary[key];

        if (typeof value === 'number') {
            sum += value;
        }
    }

    return sum;
};

// STEP 6 remove redundant vars
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