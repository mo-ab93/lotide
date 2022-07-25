const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);  
  }

  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 4);
assertEqual('Mohammed', 'Abbas');
assertEqual('lighthouse', 'lighthouse');