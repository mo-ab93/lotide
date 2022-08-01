const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');



const newArr1 = [1, 2, 3, 4];
const middleItem = middle(newArr1);
assertArraysEqual(middleItem, [2, 3]);
assertArraysEqual(middleItem, [3]);