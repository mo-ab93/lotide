const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion of equal arrays Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`✅✅✅ Assertion of equal arrays Passed: ${arr1} === ${arr2}`);
  }

};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};


const flatten = function(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (Array.isArray(value)) {
      for (let j = 0; j < value.length; j++) {
        result.push(value[j]);
      }
    } else {
      result.push(value);
    }
  }
  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);


module.exports = flatten;


