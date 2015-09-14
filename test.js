'use strict';
var getArrows = require('./');

var arrows = getArrows({
	direction: 'n',
	amount: 5
});

console.log(arrows);
