var expect = require('chai').expect;
var actual = require ('../ch2/fizzbuzz');

describe ('Fizzbuzz', function() {
  it('return fizzbuzz', function() {
    expect(actual.fizzbuzz(15)).to.eql("FizzBuzz");
  });

  it('return fizz', function() {
    expect(actual.fizzbuzz(3)).to.eql("Fizz");
  });

  it('return buzz', function() {
    expect(actual.fizzbuzz(5)).to.eql("Buzz");
  });
});
