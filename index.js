'use strict';
var unicodeArrows = require('unicode-arrows');

exports.getArrows = function (direction, amount) {
	var currentArrows = [];

	if (direction === undefined) {
		Object.keys(unicodeArrows).map(function(prop) {
			currentArrows.push.apply(currentArrows, unicodeArrows[prop]);
		});
	} else {
		currentArrows = unicodeArrows[direction];
	}

	if (amount !== undefined) {
		var result = new Array(amount),
   		    length = currentArrows.length,
   		    taken = new Array(length);
   		if (amount > length)
   		    throw new RangeError("getRandom: more elements taken than available");
   		while (amount--) {
   		    var x = Math.floor(Math.random() * length);
   		    result[amount] = currentArrows[x in taken ? taken[x] : x];
   		    taken[x] = --length;
   		}
   		console.log(result);
	}
};