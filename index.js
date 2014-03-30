'use strict';

var annotate = require('annotate');


module.exports = annotate('client', 'Provides access to effectserver lights').
    on(validate, function execute(o) {
        return {
            animate: require('./lib/animate')(o),
            effects: require('./effects')({
                lightAmount: o.lightAmount
            })
        };
    });

function validate(o) {
    if(!o) {
        return console.error('Missing configuration');
    }

    if(!o.port) {
        return console.error('Missing port');
    }

    if(!o.host) {
        return console.error('Missing host');
    }

    if(!o.lightAmount) {
        return console.error('Missing lightAmount');
    }

    return true;
}
