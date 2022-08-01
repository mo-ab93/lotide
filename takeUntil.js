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


const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const results3 = takeUntil(data1, x => x === 4);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const results4 = takeUntil(data2, x => x === 'to');


assertArraysEqual(results1, results2);
assertArraysEqual(results1, results3);
assertArraysEqual(results2, results4);
assertArraysEqual(results1, results1);

module.exports = takeUntil;