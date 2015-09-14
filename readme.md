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
})

console.log(arrows)
//=> [ '⇑', '⇈', '⇮', '↾', '⇧' ]
```


## API

### getArrows(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global get-arrows
```

```
$ get-arrows --help

  Usage
    get-arrows [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ get-arrows
    unicorns & rainbows
    $ get-arrows ponies
    ponies & rainbows
```


## License

MIT © [David Öhlin](http://davidohlin.se)
