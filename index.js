mocha indexTest.js
// Importing functions from helpers.js
const { multiply, random, mod, max } = require('./helpers');
const chai = require('chai');
const expect = chai.expect;

describe('helpers.js', function() {
  describe('multiply', function() {
    it("is an equation whose multiplied results will equal 62", function() {
      expect(multiply()).to.eq(62);
    });
  });

  describe('random', function() {
    it("generates a random integer greater than 0", function() {
      expect(random()).to.be.gt(0);
    });
  });

  describe('mod', function() {
    it("is an equation that calculates a remainder that is equal to 4", function() {
      expect(mod()).to.eq(4);
    });
  });

  describe('max', function() {
    it("will return 20 as the highest number in the set", function() {
      expect(max()).to.eq(20);
    });
  });
});
