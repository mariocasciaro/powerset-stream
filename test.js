var expect = require('chai').expect,
  powersetStream = require('./');
  
describe('powersetStream', function() {
  it('should generate the powerset of a simple set (numbers)', function(done) {
    var results = [];
    var expected = [ [ 1 ], [ 2 ], [ 3 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ];
    powersetStream([1, 2, 3])
      .on('data', function(comb) {
        results.push(comb);
      })
      .on('end', function() {
        expect(results).to.be.deep.equal(expected);
        done();
      });
  });
  
  it('should generate the powerset of a simple set (string)', function(done) {
    var results = [];
    var expected = ['a','b','c','ab','ac', 'bc', 'abc'];
    
    powersetStream('abc')
      .on('data', function(comb) {
        results.push(comb);
      })
      .on('end', function() {
        expect(results).to.be.deep.equal(expected);
        done();
      });
  });
  
  it('should be asynchronous', function(done) {
    var after = false;
    powersetStream('abc')
      .on('data', function(comb) {
      })
      .on('end', function() {
        expect(after).to.be.true;
        done();
      });
    after = true;
  });
});
