import { capitalise } from "../utils"


export default class EffectRenderer {
    constructor(baseSize = 32) {
        this.baseSize = baseSize;
    }

    renderEffect(particleEffect, surface) {
        const context = surface.getContext("2d");
        particleEffect.getEmitters().forEach((emitter) => {
            emitter.particles.forEach((particle) => {
                const position = {
                    x: particleEffect.x + particle.x - (this.baseSize * particle.scale) / 2,
                    y: particleEffect.y + particle.y - (this.baseSize * particle.scale) / 2
                }
                this["_render" + capitalise(particle.shape)](particle, context, position)
            })
        })
    }

    _renderCircle(particle, context, position) {
        const radius = (particle.scale * this.baseSize) / 2;
        if (radius > 0) {
            context.beginPath();
            context.fillStyle = `rgba( ${particle.red}, ${particle.green}, ${particle.blue}, ${particle.opacity})`;
            context.arc(
                position.x, position.y, radius, 0, 2 * Math.PI, false);
            context.fill();
        }
    }

    _renderSquare(particle, context, position) {
        context.fillStyle = `rgba( ${particle.red}, ${particle.green}, ${particle.blue}, ${particle.opacity})`;
        context.setTransform(1, 0, 0, 1, position.x, position.y);
        context.rotate(particle.rotation * Math.PI / 180);
        context.fillRect(
            (particle.scale * this.baseSize) / 2,
            (particle.scale * this.baseSize) / 2,
            particle.scale * this.baseSize,
            particle.scale * this.baseSize
        );
        context.setTransform(1, 0, 0, 1, 0, 0);
    }
}