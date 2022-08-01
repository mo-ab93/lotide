const assert = require('chai').assert;
const tail = require('../tail');

describe('#Tail', () => {
  it('Arrays is equal: tail(["Yo Yo", "Lighthouse", "Labs"] === ["Lighthouse", "Labs"]', () => {
    const words = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), words);
  })
})


