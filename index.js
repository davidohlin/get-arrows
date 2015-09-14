'use strict';
var unicodeArrows = require('unicode-arrows');
var objectAssign = require('object-assign');
var mergeArray = require('merge-array');

module.exports = function (opts) {
	opts = objectAssign({}, opts);

	var arrowList = [];

	if (!opts.direction) {
		Object.keys(unicodeArrows).map(function(prop) {
			mergeArray(arrowList, unicodeArrows[prop]);
		});
	} else {
		var args = [];

		Object.keys(unicodeArrows).map(function(prop) {
			args.push.apply(args, [prop]);
		});

		if (args.indexOf(opts.direction) > -1) {
			arrowList = unicodeArrows[opts.direction];
		} else {
			throw new TypeError('Invalid direction. Valid directions are' + args);
		}
	}

	if (!opts.amount) {
		return arrowList;
	}
	
	var randomArrows = new Array(opts.amount);
	var length = arrowList.length;
	var taken = new Array(length);
	
	if (opts.amount > length) {
		return arrowList;
	}

	while (opts.amount--) {
		var x = Math.floor(Math.random() * length);
		randomArrows[opts.amount] = arrowList[x in taken ? taken[x] : x];
		taken[x] = --length;
	}

	return randomArrows;	
};