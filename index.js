var from = require('from2');

//this should be back-pressure aware
//but it would complicate implementation a lot
//better algorithms are welcome
module.exports = function(inputSet) {
  if(!Array.isArray(inputSet) && typeof inputSet !== 'string') {
    throw new Error('Input must be an array or string');
  }
  
  function generateCombinationsSync(set, subset, cb) {
    for(var i = 0; i < set.length; i++) {
      var newComb = subset.concat(set.slice(i, i + 1));
      generateCombinationsDeferred(set.slice(i + 1), newComb, cb);
      cb(newComb);
    }
  }

  var runningCombines = 0;
  function generateCombinationsDeferred(set, subset, cb) {
    runningCombines++;
    //defer
    setImmediate(function() {
      generateCombinationsSync(set, subset, cb);
      if(--runningCombines === 0) {
        //all recursive steps are done
        cb(null);
      }
    });
  }

  return from.obj(function(size, next) {
    var self = this;
    generateCombinationsDeferred(inputSet, [], function(comb) {
      self.push(comb);
    });
  });
}
