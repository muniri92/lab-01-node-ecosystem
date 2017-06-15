'use strict';

const
  expect = require('expect'),
  arithmetic = require('../lib/arithmetic'),
  greet = require('../lib/greet');


describe('testing arithmetic: ', () => {
  describe('testing add: ', () => {
    it('should return 4: ', () => {
      let result = arithmetic.add(2, 2);
      expect(result).toEqual(4);
    });

    it('should return 4 error: ', () => {
      let result = arithmetic.add('sup', 2);
      expect(result).toBe(null);
    });
  });

  describe('testing sub: ', () => {
    it('should return 4: ', () => {
      let result = arithmetic.sub(6, 2);
      expect(result).toEqual(4);
    });

    it('should return string error: ', () => {
      let result = arithmetic.sub('hey', 2);
      expect(result).toBe(null);
    });
  });
});
