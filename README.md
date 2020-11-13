# Yeelight NodeJS API
A simple REST-like NodeJS Express JSON API for manipulating Yeelight.
This is a very simple ExpressJS wrapper around [yeelight2](https://github.com/song940/node-yeelight).

* [Examples](#examples)
* [Setup](#setup)

## Examples
### GET /
Gets all lights on LAN network.

Example response:
```
[
    {
        "id": "0x00000000034ff670",
        "name": "Nightstand Lamp",
        "supports": [
            ...
            "set_rgb",
            "set_hsv",
            "set_adjust",
            "adjust_bright",
            "adjust_ct",
            "adjust_color",
            "set_music",
            "set_name"
        ],
        "isOn": true
    },
    ...
]
```

### POST /:id/toggle
Toggle a light on/off.

| Query Parameter | Description         |
|-----------------|:--------------------|
| id              | The id of the light |

### POST /:id/set_bright
Set a light's brightness value.

| Query Parameter | Description         |
|-----------------|:--------------------|
| id              | The id of the light |

Example Body
```
{
    "brightness": 100, // 1 to 100
    "effect": "smooth", // "smooth" | "sudden"
    "duration": 500
}
```

### POST /:id/set_rgb
Set light to a specific RGB color.

| Query Parameter | Description         |
|-----------------|:--------------------|
| id              | The id of the light |

Example Body
```
{
    "value": "#ffffff", // Can be both with or without "#"
    "effect": "smooth", // "smooth" | "sudden"
    "duration": 500
}
```

## Setup
```
yarn
```

## Build

```
yarn build
```

This will output the app to `./build/index.js` which can be run with `node ./build/index.js`.

## Run with live reload for development
```
yarn start
```

This will start the ts-node-dev watcher and automatically recompile and re-run the API when changes are made to source-files.
The app runs on `http://localhost:3000` by default.
