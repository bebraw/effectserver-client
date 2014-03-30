#!/usr/bin/env node

'use strict';

var client = require('./')({
    port: process.env['LIGHTSERVER_PORT'],
    host: process.env['LIGHTSERVER_HOST'],
    lightAmount: parseInt(process.env['LIGHTSERVER_LIGHT_AMOUNT'], 10)
});


main();

function main() {
    client.animate({
        nick: process.env['LIGHTSERVER_NICK'],
        sequence: client.effects.wave2({
            rgb: [255, 255, 255]
        }),
        interval: 50,
        times: 5
    });
}
