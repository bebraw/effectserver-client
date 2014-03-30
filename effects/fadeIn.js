'use strict';

var range = require('annomath').range;


module.exports = function(config) {
    var setAll = require('./setAll')(config);

    return function fadeIn(o) {
        var min = o.min || 0;
        var max = o.max || 255;
        var step = o.step || 1;

        return range(min, max + 1, step).map(function(v) {
            return setAll({rgb: [v, v, v]});
        });
    };
};
