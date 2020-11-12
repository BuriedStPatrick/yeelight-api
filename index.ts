import Yeelight, { Closable, Light } from 'yeelight2';
import express from 'express';

const lights: {[key: string]: Light } = {};

export interface LightViewModel {
    id: string;
    name: string;
    supports: string[];
    isOn: boolean;
}

Yeelight.discover(function(this: Closable, light: Light) {
    lights[(light as any).id] = light;
});

const app = express();
app.use(express.json());

function get_prop(light: Light, prop: string): any {
    return (light as any)[prop];
}

app.get('/lights', (req, res) => {
    return res.send(
        Object.keys(lights).map(key => {
            const light = lights[key];
            return ({
                id: key,
                name: Buffer.from(light.name, 'base64').toString(),
                supports: get_prop(light, 'supports'),
                isOn: get_prop(light, 'power') === 'on'
            } as LightViewModel)})
    );
});

app.post('/lights/:id/toggle', (req, res) => {
    lights[req.params.id].toggle();

    return res.status(200).send('Ok');
});

app.post('/lights/:id/set_bright', (req, res) => {
    lights[req.params.id].set_bright(
        req.body.brightness,
        req.body.effect,
        req.body.duration
    );

    return res.status(200).send('Ok');
});

app.post('/lights/:id/:set_rgb', (req, res) => {
    const rgbValue = req.body.value.replace('#', '');
    lights[req.params.id].set_rgb(
        parseInt(rgbValue, 16),
        req.body.effect,
        req.body.duration
    );

    return res.status(200).send('Ok');
});

app.listen(3000, function() {
    console.log('app listening on 3000');
});
