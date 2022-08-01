const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};


// Implement the function findKey which takes in an object and a callback (function take 2 arguments)
// It should scan the object (loop)
//return the first key for which the callback returns a truthy value (conditional)
//If no key is found, then it should return undefined.


const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    } else {
      undefined;
    }
  }
};


const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1);

const result3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3);

assertEqual(result1, result2);
assertEqual(result1, result3);
assertEqual(result2, result3);
assertEqual(result2, result2);

module.exports = findKey;

