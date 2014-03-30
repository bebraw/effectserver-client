'use strict';

var range = require('annomath').range;


module.exports = function(config) {
    var setAll = require('./setAll')(config);

    return function(o) {
        return range(config.lightAmount).map(function(v) {
            var ret = setAll({rgb: [0, 0, 0]});

            ret[v].rgb = o.rgb;

            return ret;
        });
    };
};
