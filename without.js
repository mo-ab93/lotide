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


const without = function(arr1, arr2) {

let result = arr1.filter(x => !arr2.includes(x));
return result;

}

console.log(without([1, 2, 3], [1]));

console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);