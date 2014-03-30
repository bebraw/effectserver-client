[![build status](https://secure.travis-ci.org/bebraw/effectserver-client.png)](http://travis-ci.org/bebraw/effectserver-client)
# effectserver-client

Node.js client for [instanssi/effectserver](https://github.com/Instanssi/effectserver). It comes with a couple of sample effects and a demo.

## Animation Specification

The system is based on lists. Each list represents a frame. Next frame is shown after given interval (no better control at the moment). Every effect just generates a list compatible with the format. Consider the example below:

```js
[
    [{ // first frame
        id: 10,
        rgb: [0, 0, 255]
    },
    {
        id: 13,
        rgb: [0, 0, 255]
    }],
    [{ // second frame
        id: 10,
        rgb: [255, 0, 0]
    },
    {
        id: 13,
        rgb: [255, 0, 0]
    }]
]
```

`id` refers to the light. rgb is just an array of three values [0, 255] each representing a color channel.

## License

`effectserver-client` is available under MIT. See LICENSE for more details.

