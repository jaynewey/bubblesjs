import Emitter from "./Emitter";
import { snakeToCamel } from "../utils";

export default class ParticleEffect {
  constructor() {
    this._emitters = new Set();
    this._deadEmitters = new Set();

    this.x = 0;
    this.xSpeed = 0;
    this.y = 0;
    this.ySpeed = 0;

    this.loops = -1;
    this._currentLoop = 1;
  }

  update(deltatime = 1) {
    this.x += this.xSpeed * deltatime;
    this.y += this.ySpeed * deltatime;

    this._emitters.forEach((emitter) => {
      emitter.update();
      if (emitter.isDead()) {
        this._deadEmitters.add(emitter);
      }

      const deadParticles = new Set();
      emitter.particles.forEach((particle) => {
        particle.update(deltatime);
        particle.x -= this.xSpeed * deltatime;
        particle.y -= this.ySpeed * deltatime;
        if (particle.isDead()) {
          deadParticles.add(particle);
        }
      });

      deadParticles.forEach((deadParticle) => {
        emitter.particles.delete(deadParticle);
      });
    });

    if (this._deadEmitters.size == this._emitters.size) {
      if (this._currentLoop < this.loops || this.loops === -1) {
        this._deadEmitters.forEach((deadEmitter) => {
          deadEmitter.reset();
        });
        if (this.loops != -1) {
          this._currentLoop++;
        }
        this._deadEmitters.clear();
      }
    }
  }

  addEmitter(...emitters) {
    emitters.forEach((emitter) => {
      this._emitters.add(emitter);
    });
    return this;
  }

  getEmitters() {
    return this._emitters;
  }

  setPos(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  isDead() {
    return this.current_loops > this.loops != -1 && this._emitters.size;
  }

  static loadFromObject(settings) {
    const particleEffect = new ParticleEffect();
    for (const setting of Object.keys(settings)) {
      const camelSetting = snakeToCamel(setting);
      if (setting === "emitters") {
        for (const emitter of settings["emitters"]) {
          particleEffect.addEmitter(Emitter.loadFromObject(emitter));
        }
      } else {
        if (camelSetting in particleEffect) {
          particleEffect[camelSetting] = settings[setting];
        }
      }
    }
    return particleEffect;
  }
}
