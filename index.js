'use strict';
var unicodeArrows = require('unicode-arrows');
var objectAssign = require('object-assign');
var mergeArray = require('merge-array');
var arrayShuffle = require('array-shuffle');
var arrayMaxLength = require('array-max-length');
var grammarray = require('grammarray');

module.exports = function (opts) {
	opts = objectAssign({}, opts);

	var arrowList = [];

	if (!opts.direction) {
		Object.keys(unicodeArrows).map(function (prop) {
			mergeArray(arrowList, unicodeArrows[prop]);
		});
	} else {
		var args = [];

		Object.keys(unicodeArrows).map(function (prop) {
			mergeArray(args, [prop]);
		});

		if (args.indexOf(opts.direction) !== -1) {
			arrowList = unicodeArrows[opts.direction];
		} else {
			throw new TypeError('Invalid direction. Valid directions are ' + grammarray(args));
		}
	}

	if (!opts.amount) {
		return arrowList;
	}

	return arrayMaxLength(arrayShuffle(arrowList), opts.amount);
};
