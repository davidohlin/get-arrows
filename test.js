'use strict';
var test = require('ava');
var getArrows = require('./');

var arrows = getArrows({
	direction: 'n',
	amount: 8
});

test(function (t) {
	t.is(Array.isArray(arrows), true);
	t.end();
});
