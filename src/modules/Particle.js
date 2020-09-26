import { snakeToCamel } from "../utils";

export default class Particle {
  constructor() {
    this.currentFrame = 0;

    this.lifetime = 30;
    this.interpolation = "linear";

    this.x = 0;
    this.xSpeed = 0;
    this._xSpeedPoints = null;
    this.xAcceleration = 0;
    this._xAccelerationPoints = null;

    this.y = 0;
    this.ySpeed = 0;
    this._ySpeedPoints = null;
    this.yAcceleration = 0;
    this._yAccelerationPoints = null;

    this.scale = 1;
    this._scalePoints = null;

    this.opacity = 1;
    this._opacityPoints = null;

    this.rotation = 0;
    this._rotationPoints = null;

    this.shape = "square";
    this.colourise = false;

    this.red = 255;
    this._redPoints = null;
    this.green = 255;
    this._greenPoints = null;
    this.blue = 255;
    this._bluePoints = null;
  }

  update(deltatime) {
    this.xAcceleration += this._interpolate(this._xAccelerationPoints);
    this.yAcceleration += this._interpolate(this._yAccelerationPoints);
    this.xSpeed += this._interpolate(this._xSpeedPoints) + this.xAcceleration;
    this.ySpeed += this._interpolate(this._ySpeedPoints) + this.yAcceleration;
    this.x += this.xSpeed * deltatime;
    this.y += this.ySpeed * deltatime;

    this.scale += this._interpolate(this._scalePoints);
    this.opacity += this._interpolate(this._opacityPoints);
    this.rotation += this._interpolate(this._rotationPoints);

    this.red += this._interpolate(this._redPoints);
    this.green += this._interpolate(this._greenPoints);
    this.blue += this._interpolate(this._bluePoints);

    this.currentFrame++;
  }

  isDead() {
    return this.currentFrame > this.lifetime;
  }

  _interpolate(points) {
    if (points === null) {
      return 0;
    }
    const framesPerPoint = ~~(this.lifetime / (points.length - 1));
    const currentPoint = ~~(this.currentFrame / framesPerPoint);
    const y1 = points[currentPoint];
    const y2 =
      currentPoint + 1 < points.length
        ? points[currentPoint + 1]
        : points[currentPoint];
    const x1 = currentPoint * framesPerPoint;
    const x2 = (currentPoint + 1) * framesPerPoint;
    return this["_" + this.interpolation + "Interpolate"](y1, y2, x1, x2);
  }

  _linearInterpolate(y1, y2, x1, x2) {
    return (y2 - y1) / (x2 - x1);
  }

  _cosineInterpolate(y1, y2, x1, x2) {
    return (
      ((y2 - y1) / (x2 - x1)) *
      (Math.PI / 2) *
      Math.sin((Math.PI * (this.currentFrame - x1)) / (x2 - x1))
    );
  }

  static loadFromObject(settings) {
    const particle = new Particle();
    for (const setting of Object.keys(settings)) {
      const camelSetting = snakeToCamel(setting);
      if (camelSetting in particle) {
        if (
          settings[setting] instanceof Array &&
          settings[setting].length > 1
        ) {
          particle[camelSetting] = settings[setting][0];
          particle["_" + camelSetting + "Points"] = settings[setting];
        } else {
          particle[camelSetting] = settings[setting];
        }
      }
    }
    return particle;
  }
}
