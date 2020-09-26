import Particle from "./Particle";
import { snakeToCamel, uniform } from "../utils";

export default class Emitter {
  constructor() {
    this.particleSettings = {};
    this.particleVariation = {
      lifetime: 0,
      xSpeed: 0,
      ySpeed: 0,
      xAcceleration: 0,
      yAcceleration: 0,
      scale: 0,
      opacity: 0,
      rotation: 0,
      red: 0,
      green: 0,
      blue: 0,
    };

    this.particles = new Set();

    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;

    this.spawns = -1;
    this._currentSpawn = 0;

    this.frames = 30;
    this._currentFrame = 0;

    this.maxParticles = 1000;
    this.spawnAmount = 10;
  }

  update() {
    if (this._currentFrame === 0) {
      this._spawnBatch();
    }

    this._currentFrame++;
    this._currentFrame %= this.frames;
  }

  isDead() {
    return (
      this.spawns != -1 &&
      this._currentSpawn > this.spawns &&
      this.particles.size == 0
    );
  }

  reset() {
    this._currentSpawn = 0;
  }

  _spawnParticle() {
    const values = {};

    for (const [parameter, value] of Object.entries(this.particleSettings)) {
      if (parameter in this.particleVariation) {
        if (value instanceof Array) {
          values[parameter] = value.map((base, i) => {
            return uniform(
              base - this.particleVariation[parameter][i],
              base + this.particleVariation[parameter][i]
            );
          });
        } else {
          values[parameter] = uniform(
            value - this.particleVariation[parameter],
            value + this.particleVariation[parameter]
          );
        }
      } else {
        values[parameter] = value;
      }
    }
    values.x = uniform(this.x, this.x + this.width);
    values.y = uniform(this.y, this.y + this.height);

    return Particle.loadFromObject(values);
  }

  _spawnBatch() {
    if (this.spawns != -1) {
      this._currentSpawn++;
    }
    if (this._currentSpawn <= this.spawns || this.spawns === -1) {
      let particle;
      for (particle = 0; particle < this.spawnAmount; particle++) {
        if (this.particles.size < this.maxParticles) {
          this.particles.add(this._spawnParticle());
        }
      }
    }
  }

  static loadFromObject(settings) {
    const emitter = new Emitter();
    for (const setting of Object.keys(settings)) {
      const camelSetting = snakeToCamel(setting);
      if (camelSetting in emitter) {
        emitter[camelSetting] = settings[setting];
      }
    }
    return emitter;
  }
}
