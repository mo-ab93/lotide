const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (!eqObjects(object1, object2)) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }

  console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (object1, object2) {
if (Object.keys(object1).length !== Object.keys(object2).length) {
  return false;
}
for (let key of Object.keys(object1)) {
  if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
    return eqArrays(object1[key], object2[key]);
  } else if (object1[key] !== object2[key]) {
    return false;
  }
  }
return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);


module.exports = assertObjectsEqual;
