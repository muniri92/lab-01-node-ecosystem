'use strict';

const
  expect = require('expect'),
  greet = require('../lib/greet');

describe('testing greet ', () => {
  describe('testing greet ', () => {
    it('should return "Hello, Munir"', () => {
      let result = greet('Munir');
      expect(result).toEqual('Hello, Munir');
    });

    it('should return null', () => {
      expect(greet([])).toBe(null);
      expect(greet({})).toBe(null);
      expect(greet(24)).toBe(null);
      expect(greet(true)).toBe(null);
    });
  });
});
