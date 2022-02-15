// Compare two dictionaries

let compare = (first_values, ...parameters_LIST) => {
    const second_values = parameters_LIST[0];
    let a = Object.keys(first_values);
    let b = Object.keys(second_values);
    if (a.join('-') !== b.join('-')) return false;
    let e = true;
    for (c of a) {
        if (first_values[c] === second_values[c]) e = e && true;
        else {
            e = e && false;
        }
    }
    return e;
};

// STEP 1 rename vars
let compare = (first_values, ...parameters_LIST) => {
    const second_values = parameters_LIST[0];
    let firstKeys = Object.keys(first_values);
    let lastKeys = Object.keys(second_values);
    if (firstKeys.join('-') !== lastKeys.join('-')) return false;
    let areEqual = true;
    for (key of firstKeys) {
        if (first_values[key] === second_values[key]) areEqual = areEqual && true;
        else {
            areEqual = areEqual && false;
        }
    }
    return areEqual;
};

// STEP 2 change parameters
//rename vars
let compare = (first_values, second_values) => {
    let firstKeys = Object.keys(first_values);
    let lastKeys = Object.keys(second_values);
    if (firstKeys.join('-') !== lastKeys.join('-')) return false;
    let areEqual = true;
    for (key of firstKeys) {
        if (first_values[key] === second_values[key]) areEqual = areEqual && true;
        else {
            areEqual = areEqual && false;
        }
    }
    return areEqual;
};

// STEP 3 remove redundant checks
let compare = (first_values, second_values) => {
    let firstKeys = Object.keys(first_values);
    let lastKeys = Object.keys(second_values);
    if (firstKeys.join('-') !== lastKeys.join('-')) return false;
    let areEqual = true;
    for (key of firstKeys) {
        if (first_values[key] === second_values[key]) areEqual = areEqual;
        else {
            areEqual = false;
        }
    }
    return areEqual;
};

// STEP 4 if at least one field is not the same - areEqual == false
//return false with at least one difference, return true in the end
let compare = (first_values, second_values) => {
    let firstKeys = Object.keys(first_values);
    let lastKeys = Object.keys(second_values);
    if (firstKeys.join('-') !== lastKeys.join('-')) return false;

    for (key of firstKeys) {
        if (first_values[key] === second_values[key]) {
        } else {
            return false;
        }
    }
    return true;
};

//STEP 5 revert empty if statement, add blank lines
let compare = (first_values, second_values) => {
    let firstKeys = Object.keys(first_values);
    let lastKeys = Object.keys(second_values);

    if (firstKeys.join('-') !== lastKeys.join('-')) return false;

    for (key of firstKeys) {
        if(first_values[key] !== second_values[key]) {
            return false;
        }
    }
    return true;
};

//STEP 6 use const, use strict
'use strict';

const compare = (first_values, second_values) => {
    const firstKeys = Object.keys(first_values);
    const lastKeys = Object.keys(second_values);

    if (firstKeys.join('-') !== lastKeys.join('-')) return false;

    for (const key of firstKeys) {
        if(first_values[key] !== second_values[key]) {
            return false;
        }
    }
    return true;
};

//STEP 7 remove '-' from join
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