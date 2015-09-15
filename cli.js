#!/usr/bin/env node
'use strict';
var meow = require('meow');
var getArrows = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ get-arrows [direction] [amount]',
		'',
		'Direction',
		'  The following are accepted directions:',
		'  n, ne, e, se, s, sw, w, nw, ns and se.',
		'',
		'Amount',
		'  There is a limited amount of arrows available. If exceeded, all available arrows will be returned.',
		'',
		'Examples',
		'  $ get-arrows n 4',
		'  ⇭ ⇡ ⇧ ↟',
		'  $ get-arrows s 3',
		'  ↶ ⇣ ⇟',
		'  $ get-arrows sw',
		'  ↙ ⇙',
		'  $ get-arrows 4',
		'  ↼ ⇇ ↕ ↿'
	]
});

if (!cli.input[0]) {
	var arrows = getArrows();
	console.log(arrows.join(' '));
} else {
	var arrows = getArrows({
		direction: cli.input[0],
		amount: cli.input[1]
	});
	console.log(arrows.join(' '));
}