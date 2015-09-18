#!/usr/bin/env node
'use strict';
var meow = require('meow');
var numberIsInteger = require('number-is-integer');
var getArrows = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ get-arrows [direction] [amount]',
		'',
		'Direction',
		'  Accepted directions:',
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
	console.log(getArrows().join(' '));
} else {
	var direction;
	var amount;

	for (var i = 0; i < cli.input.length; i++) {
		if (typeof cli.input[i] === 'string' && !direction) {
			direction = cli.input[i];
		} else if (numberIsInteger(cli.input[i]) && !amount) {
			amount = cli.input[i];
		}
	}

	console.log(getArrows({
		direction: direction,
		amount: amount
	}).join(' '));
}
