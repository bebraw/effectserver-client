'use strict';

var dgram = require('dgram');

var Animation = require('animation').Animation;
var annotate = require('annotate');
var flatten = require('annofp').flatten;


module.exports = function(config) {
    return annotate('animate', 'Animates lights using given frames').
        on(validate, function(o) {
            animate(config, o);
        });
};

function validate(o) {
    if(!o.nick) {
        return console.error('Missing nick');
    }

    if(!o.sequence) {
        return console.error('Missing sequence');
    }

    if(!o.interval) {
        return console.error('Missing interval');
    }

    return true;
}

function animate(config, o) {
    var animation = new Animation({
        frame: o.interval + 'ms'
    });
    var frames = o.sequence.map(function(frame) {
        return flatten(frame.map(function(v) {
            return [1, v.id, 0].concat(v.rgb);
        }));
    });
    var times = o.times || 1;
    var i = 0;
    var j = 0;

    animation.on('tick', function() {
        var frame;

        if(!frames[i]) {
            j++;

            if(j === times) {
                animation.stop();
            }

            i = 0;
        }

        frame = frames[i];

        sendMessage(config, o.nick, frame);

        i++;
    });

    animation.start();
}

function sendMessage(config, nick, light) {
    var message = [1, 0].concat(toOrdinals(nick)).concat([0]).concat(light);

    var client = dgram.createSocket('udp4');
    client.send(new Buffer(message), 0, message.length, config.port, config.host, function(err) {
        if(err) {
            return console.error(err);
        }

        client.close();
    });
}

function toOrdinals(str) {
    return str.split('').map(function(v) {
        return v.charCodeAt(0);
    });
}
