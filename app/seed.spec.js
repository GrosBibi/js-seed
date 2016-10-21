var expect = require('chai').expect;
describe('seed', function() {
  var seed = require('./seed.js');

  it('on peut tester la vérité', function() {
    expect(seed.returnTheTruth()).to.be.true;
  });
});