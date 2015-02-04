var expect = require('chai').expect;
var actual = require ('../ch2/looping');

describe ('looping', function() {
  it('return 1 #', function(){
    expect(actual.triangle(1)).to.eql(console.log('#\n'));
  });
});
