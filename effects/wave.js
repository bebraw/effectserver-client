'use strict';

var range = require('annomath').range;


module.exports = function(config) {
    return function(o) {
        return range(config.lightAmount).map(function(v) {
            return [{
                id: v,
                rgb: o.rgb
            }];
        });
    };
};
