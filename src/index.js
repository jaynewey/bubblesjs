import ParticleEffect from "./modules/ParticleEffect";
import EffectRenderer from "./modules/EffectRenderer";

export default class Bubbles {
  constructor(canvasId, baseSize = 32) {
    this.renderer = new EffectRenderer(baseSize);
    this.canvas = document.querySelector(canvasId);
    this.particleEffects = [];
    this.update = this.update.bind(this);
    this.update();
  }

  registerEffect(effectOptions) {
    this.particleEffects.push(ParticleEffect.loadFromObject(effectOptions));
    return this;
  }

  update() {
    this.canvas.getContext("2d").clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const particleEffect of this.particleEffects) {
      particleEffect.update();
      this.renderer.renderEffect(particleEffect, this.canvas);
    }
    requestAnimationFrame(this.update);
  }
}
