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
  });

  describe('testing sub: ', () => {
    it('should return 4: ', () => {
      let result = arithmetic.sub(6, 2);
      expect(result).toEqual(4);
    });
  });
});

describe('testing greet: ', () => {
  describe('testing greet: ', () => {
    it('should return "Hello, Munir"', () => {
      let result = greet('Munir');
      expect(result).toEqual('Hello, Munir');
    });
  });
})
