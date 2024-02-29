const assert = require('assert');
const calc = require('./0-calcul');

describe('testing Calc', () => {
  it('should return 5', () => {
    assert.equal(calc(2, 3), 5);
  });
  it('should return 10', () => {
    assert.equal(calc(5.2, 5.1), 10);
  });
  it('should return 7', () => {
    assert.equal(calc(3.7, 3.2), 7);
  });
  it('should return -3', () => {
    assert.equal(calc(-1.6, -0.7), -3);
  });
});
