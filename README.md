# Yeelight NodeJS API
A simple REST-like NodeJS express JSON API for manipulating Yeelight.

## Example request
### GET lights/
Gets all lights on LAN network.

Example response:
```json
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

### POST lights/:id/toggle
Toggle a light on/off

| Query Parameter | Description         |
|-----------------|:--------------------|
| id              | The id of the light |

### POST lights/:id/set_bright
Toggle a light on/off

| Query Parameter | Description         |
|-----------------|:--------------------|
| id              | The id of the light |

Example Body
```json
{
    "brightness": 100,
    "effect": "smooth",
    "duration": 500
}
```

## Setup and install packages
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
