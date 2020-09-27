# bubbles(js)

![GitHub](https://img.shields.io/github/license/jaynewey/bubblesjs)

> A lightweight, fun particle system written in Javascript.

This library aims to port the [`bubbles`](https://github.com/jaynewey/bubbles) particle format to Javascript for use in the browser.

It is intended to be used for fun and experimentation - expect bugs and breaking changes.


## Examples

Here are some examples of simple particle effects with bubbles.

![Bubbles](https://media.giphy.com/media/YRz5GtvCT2iyi6UNbk/giphy.gif) | ![Fireball](https://media.giphy.com/media/ieJ24tUSc08s76xqrk/giphy.gif) | ![Explosion](https://media.giphy.com/media/d7qlgC0QFOJKwZUsem/giphy.gif) | ![Hearts](https://media.giphy.com/media/YoiFhr35wKXuRFteUx/giphy.gif) | ![Confetti](https://media.giphy.com/media/VbiApDYPwifGhAW9M9/giphy.gif) | ![Tornado](https://media.giphy.com/media/igt6cCxERpMfChrhjW/giphy.gif)
--- | --- | --- | --- | --- | ---
bubbles.json | fireball.json | explosion.json | hearts.json | confetti.json | tornado.json

You can find the .json for these in the [examples](https://github.com/jaynewey/bubbles/tree/master/examples) folder at [jaynewey/bubbles](https://github.com/jaynewey/bubbles). Note that currently images are not supported by `bubblesjs` so effects such as `hearts` will not work.


### Live Demo

See the live demo at [CodePen](https://codepen.io/jaynewey/pen/gOrQaaK).

The pen adds functionality for the effect to move to the mouse position - this doesn't come with `bubbles` but rather, shows how one might interact with it.


## Usage

The api for `bubblesjs` has been streamlined from the Python library to make it easier to intergrate into web pages.

Include `bubblesjs` via a `script` tag:

```html
<script src="dist/bubbles.min.js"></script>
```

In your html, add a `canvas` element with a distinct `id` attrbute:

```html
<canvas id="confetti"></canvas>
```

In your javascript, create a `Bubbles` instance, passing in the `id` of the `canvas` to render on:

```javascript
const bubbles = new Bubbles("#confetti");
```

You may now register Particle Effects in `bubbles` Particle Effect format (parameter details below):

```javascript
bubbles.registerEffect(
    {   
        "x": 50,
        "y": 50,
        "loops": -1,
        "emitters": [
            {
                "width": 8,
                "height": 8,
                "frames": 10,
                "spawn_amount": 10,
                "spawns": 10,
                "particle_settings": {
                    "lifetime": 120,
                    "x_speed": [0, 0],
                    "y_speed": -4,
                    "y_acceleration": 0.05,
                    "scale": [0.4, 0],
                    "shape": "square",
                    "rotation": [0, 90],
                    "colourise": true,
                    "red": 150,
                    "green": 150,
                    "blue": 150
                },
                "particle_variation": {
                    "lifetime": 30,
                    "x_speed": [1, 1],
                    "x_acceleration": 0.2,
                    "y_speed": 0.5,
                    "scale": [0.2, 0],
                    "rotation": [180, 90],
                    "red": 100,
                    "green": 100,
                    "blue": 100
                }
            }
        ]
    }
);
```

`bubbles` (should) start drawing onto the canvas at the x, y location relative to the canvas.

Note: You may use unquoted attribute identifiers and `camelCase` instead of `snake_case`, but this is not supported in the Python implementation.


### Particle

Particles are the small, individual parts that make up a collective effect. `Emitter` instances are used to spawn them. Particles have the following default attributes:

```javascript
{	
    // How many frames the particle lives for
    "lifetime": 30,
    
    // The interpolation function between points
    "interpolation": "linear", // (linear/cosine)

    // The x position of the particle relative to the effect
    "x": 0,
    "x_speed": 0,
    "x_acceleration": 0,
    
    // The y position of the particle relative to the effect
    "y": 0,
    "y_speed": 0,
    "y_acceleration": 0,
    
    // A multiplier of the size of the particle's shape. Generally <= 1, >= 0
    "scale": 1,
    
    // How opaque the particle is
    "opacity": 1,
    
    // Rotation of the particle in degrees
    "rotation": 0,
    
    // The shape of the particle
    "shape": "square",  // The name of the shape (only "square", "circle" supported currently).

    "red": 255,
    "green": 255,
    "blue": 255
}
```

Often, you might want parameters to change over the lifetime of a Particle. You can do this by setting the parameter as an array of arbitrary length (we'll go with a humble 3).

```javascript
{
    "scale": [0, 1, 0]
}
```

The particle will go from 0, to 1, to 0 in scale over its lifetime. You can apply this technique to the following parameters:

```javascript
[
    "x_speed",
    "x_acceleration",
    
    "y_speed",
    "y_acceleration",

    "scale",

    "opacity",

    "rotation",

    "red",
    "green",
    "blue"
]
```

You can choose between `"linear"` and `"cosine"` interpolation between these points by changing the `"interpolation"` parameter.

To illustrate the difference between these types of interpolation, consider the following particle example:

```javascript
{
    "lifetime": 60,
    "opacity": [0.25, 0.8, 0, 0.5, 0.1]
}
```

The following graphs show how the opacity will change over the particle's lifetime:

| <img src="https://i.imgur.com/v9lE9SY.png" width="100%"> | <img src="https://i.imgur.com/PiCloz6.png" width="100%"> | <img src="https://i.imgur.com/fUfXPfB.png" width="100%"> |
|--------|--------|------|
| Linear | Cosine | Both |

Note, that if you use a list for a parameter, that you must similarly use a list of the same length if you want to specify variation for that parameter.


### Emitter

You would want some form of variation between these particles, and to actually spawn them. Use emitters for this. You can have multiple emitters per effect and place wherever you like relative to the effect. The following values are set by default.

```javascript
{
    // Position relative to the effect
    "x": 0,
    "y": 0,
    
    // The area in which particles can spawn, by default is a single point
    "width": 0,
    "height": 0,
    
    // How many spawn bursts the emitter performs, by default is infinite
    "spawns": -1,
    
    // How many particles are spawned with each spawn burst
    "spawn_amount": 10,
    
    // How many frames between each spawn burst
    "frames": 30,
    
    // The maximum number of particles spawned with this emitter that can live at once
    "max_particles": 1000,
    
    // What kind of particles to spawn
    "particle_settings": {},
    "particle_variation": {
        	// Only these parameters can be varied:
            "lifetime": 0,
            "x_speed": 0,
            "y_speed": 0,
            "x_acceleration": 0,
            "y_acceleration": 0,
            "scale": 0,
            "opacity": 0,
            "rotation": 0,
            "red": 0,
            "green": 0,
            "blue": 0
        }
}
```

You want to tell the Emitter what kind of particles to spawn. You can set `particle_settings` as an object with the desired particle attributes. Think of it as a base particle of the emitter before any variation is applied.

Particle variation specifies how varied you'd like the particles to be on a +- basis. For example, setting the `lifetime` in settings to 60 and the `lifetime` variation to 30 means that the lifetime of particles spawned by the emitter is between 30 and 90.


### ParticleEffect

Particle effects handle Emitters and Particles. You can specify an effect's emitters and the following attributes, the default being:

```javascript
{
    // Position of the entire effect relative to where it is drawn
    "x": 0,
    "y": 0,

    // Global speed of the effect, applies to particles and position of effect
    "x_speed": 0,
    "y_speed": 0,
    
    // How many loops of the effect until this effect is finished, by default is infinite
    "loops": -1,
    
    // The emitters that belong to the effect
    "emitters": []
}
```

This effect does nothing since there are no emitters and hence no particles to draw. The `emitters` array is here is a an array of emitter __settings__ objects (not Emitter instances!).


## Issues

Use the GitHub issue tracker to report issues.
