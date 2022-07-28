const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion of equal arrays Failed: ${arr1} !== ${arr2}`);
  }else{
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


const words = ["ground", "control", "to", "major", "tom"];


const map = function (array, callback) {
  let result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
}

const results1 = map(words, word => word[0]);

const results2 = map(words, word => word[1]);

const results3 = map(words, word => word[0]);

const results4 = map(words, word => word[2]);

assertArraysEqual(results1, results2);
assertArraysEqual(results1, results3);
assertArraysEqual(results1, results4);







