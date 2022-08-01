const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion of equal arrays Failed: ${arr1} !== ${arr2}`);
  }else{
    console.log(`✅✅✅ Assertion of equal arrays Passed: ${arr1} === ${arr2}`);
  }

};

module.exports = assertArraysEqual;
