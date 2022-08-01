const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);  
  }

  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const countLetter = function (str) {
  const result = {};
  const newStr = str.split(' ').join('');
  for (let letter of newStr) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
 return result;
}

const stringToCount = "lighthouse in the house";
const results = countLetter(stringToCount);
console.log(results);

module.exports = countLetter;
