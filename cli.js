#!/usr/bin/env node
'use strict';
var meow = require('meow');
var getArrows = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ get-arrows [input]',
		'',
		'Options',
		'  --foo  Lorem ipsum. [Default: false]',
		'',
		'Examples',
		'  $ get-arrows',
		'  unicorns & rainbows',
		'  $ get-arrows ponies',
		'  ponies & rainbows'
	]
});

console.log(getArrows(cli.input[0] || 'unicorns'));
