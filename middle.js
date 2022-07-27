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
// case: For arrays with one or two elements, there is no middle. Return an empty array.
// case: For arrays with odd number of elements, an array containing a single middle element should be returned.
// case: For arrays with an even number of elements, an array containing the two elements in the middle should be returned


const middle = function(array) {
  let result = [];
    if (array.length === 1 || array.length === 2) {
      return result;
    } if (array.length % 2 !== 0) {
      result.push(array[Math.floor(array.length / 2)]);
    } if (array.length % 2 === 0) {
      result.push(array[Math.floor((array.length - 1) / 2)], array[Math.floor((array.length - 1) / 2) + 1]);
    }
  return result;
}

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1]));

const newArr1 = [1, 2, 3, 4];
const middleItem = middle(newArr1);
assertArraysEqual(middleItem, [2, 3]);
assertArraysEqual(middleItem, [3]);