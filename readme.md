# get-arrows [![Build Status](https://travis-ci.org/davidohlin/get-arrows.svg?branch=master)](https://travis-ci.org/davidohlin/get-arrows)

> My neat module


## Install

```
$ npm install --save get-arrows
```


## Usage

```js
var getArrows = require('get-arrows');

var arrows = getArrows({
	direction: 'n',
	amount: 5
});

console.log(arrows);
//=> [ '⇑', '⇈', '⇮', '↾', '⇧' ]
```


## CLI

```
$ npm install --g get-arrows
```

```
$ get-arrows --help
	
		Usage
			$ get-arrows <direction> <amount>

		Direction
		  Accepted directions:
		  n, ne, e, se, s, sw, w, nw, ns and se

		Amount
		  There is a limited amount of arrows available. If exceeded, all available arrows will be returned.

		Examples
		  $ get-arrows n 4
		  ⇭ ⇡ ⇧ ↟
```

## License

MIT © [David Öhlin](http://davidohlin.se)
