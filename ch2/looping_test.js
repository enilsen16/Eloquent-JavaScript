var expect = require('chai').expect;
var actual = require ('../ch2/looping');

describe ('looping', function() {
  it('return 1 #', function() {
    expect(actual.triangle(1)).to.eql(('#\n'));
  });

  it ('returns a triangle of 2', function() {
    expect(actual.triangle(2)).to.eql(('#\n##\n'));
  });

  it ('returns a triangle of 7', function() {
    expect(actual.triangle(7)).to.eql(('#\n##\n###\n####\n#####\n######\n#######\n'));
    expect(actual.triangle(7)).to.not.eql(('#\n#\n#\n#\n#\n#\n#\n'));
  });
});
