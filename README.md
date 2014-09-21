powerset-stream
===========

A readable stream that generates all the possible combinations of subsets of the set given in input.

[![NPM version](https://badge.fury.io/js/powerset-stream.png)](http://badge.fury.io/js/powerset-stream)
[![Build Status](https://travis-ci.org/mariocasciaro/powerset-stream.png)](https://travis-ci.org/mariocasciaro/powerset-stream)
![Downloads](http://img.shields.io/npm/dm/powerset-stream.svg)

## Install

### Node.js

```
npm install powerset-stream
```

## Usage

```javascript

powersetStream([1, 2, 3])
  .on('data', function(comb) {
    console.log(comb);
  });

/* Prints:

[ 1 ]
[ 2 ]
[ 3 ]
[ 1, 2 ]
[ 1, 3 ]
[ 2, 3 ]
[ 1, 2, 3 ]

*/

```

### Credits

* [Mario Casciaro](https://github.com/mariocasciaro) - Author
