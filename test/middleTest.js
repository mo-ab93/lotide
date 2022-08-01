const assert = require('chai').assert;
const middle = require('../middle');

describe('#Middle', () => {
  it('if an array has even number of items will return two middle items in that array : middle([1, 2, 3, 4]) === [2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('if an array has odd number of items will return the middle item in that array : middle([1, 2, 3]) === [2]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('if an array has single item will return empty array : middle([3]) === []', () => {
    assert.deepEqual(middle([3]), []);
  });
});


