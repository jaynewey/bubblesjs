(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bubbles"] = factory();
	else
		root["bubbles"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index.js */ \"./src/index.js\");\n// expose Bubbles as window.Bubbles in webpack\n\nwindow.Bubbles = _src_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//# sourceURL=webpack://bubbles/./entry.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bubbles; });\n/* harmony import */ var _modules_ParticleEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ParticleEffect */ \"./src/modules/ParticleEffect.js\");\n/* harmony import */ var _modules_EffectRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/EffectRenderer */ \"./src/modules/EffectRenderer.js\");\n\n\n\nclass Bubbles {\n  constructor(canvasId, baseSize = 32) {\n    this.renderer = new _modules_EffectRenderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](baseSize);\n    this.canvas = document.querySelector(canvasId);\n    this.particleEffects = [];\n    this.update = this.update.bind(this);\n    this.update();\n  }\n\n  registerEffect(effectOptions) {\n    this.particleEffects.push(_modules_ParticleEffect__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadFromObject(effectOptions));\n    return this;\n  }\n\n  update() {\n    this.canvas.getContext(\"2d\").clearRect(0, 0, this.canvas.width, this.canvas.height);\n    for (const particleEffect of this.particleEffects) {\n      particleEffect.update();\n      this.renderer.renderEffect(particleEffect, this.canvas);\n    }\n    requestAnimationFrame(this.update);\n  }\n}\n\n\n//# sourceURL=webpack://bubbles/./src/index.js?");

/***/ }),

/***/ "./src/modules/EffectRenderer.js":
/*!***************************************!*\
  !*** ./src/modules/EffectRenderer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EffectRenderer; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n\n\nclass EffectRenderer {\n    constructor(baseSize = 32) {\n        this.baseSize = baseSize;\n    }\n\n    renderEffect(particleEffect, surface) {\n        const context = surface.getContext(\"2d\");\n        particleEffect.getEmitters().forEach((emitter) => {\n            emitter.particles.forEach((particle) => {\n                const position = {\n                    x: particleEffect.x + particle.x - (this.baseSize * particle.scale) / 2,\n                    y: particleEffect.y + particle.y - (this.baseSize * particle.scale) / 2\n                }\n                this[\"_render\" + Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"capitalise\"])(particle.shape)](particle, context, position)\n            })\n        })\n    }\n\n    _renderCircle(particle, context, position) {\n        const radius = (particle.scale * this.baseSize) / 2;\n        if (radius > 0) {\n            context.beginPath();\n            context.fillStyle = `rgba( ${particle.red}, ${particle.green}, ${particle.blue}, ${particle.opacity})`;\n            context.arc(\n                position.x, position.y, radius, 0, 2 * Math.PI, false);\n            context.fill();\n        }\n    }\n\n    _renderSquare(particle, context, position) {\n        context.fillStyle = `rgba( ${particle.red}, ${particle.green}, ${particle.blue}, ${particle.opacity})`;\n        context.setTransform(1, 0, 0, 1, position.x, position.y);\n        context.rotate(particle.rotation * Math.PI / 180);\n        context.fillRect(\n            (particle.scale * this.baseSize) / 2,\n            (particle.scale * this.baseSize) / 2,\n            particle.scale * this.baseSize,\n            particle.scale * this.baseSize\n        );\n        context.setTransform(1, 0, 0, 1, 0, 0);\n    }\n}\n\n//# sourceURL=webpack://bubbles/./src/modules/EffectRenderer.js?");

/***/ }),

/***/ "./src/modules/Emitter.js":
/*!********************************!*\
  !*** ./src/modules/Emitter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Emitter; });\n/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Particle */ \"./src/modules/Particle.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n\n\nclass Emitter {\n  constructor() {\n    this.particleSettings = {};\n    this.particleVariation = {\n      lifetime: 0,\n      xSpeed: 0,\n      ySpeed: 0,\n      xAcceleration: 0,\n      yAcceleration: 0,\n      scale: 0,\n      opacity: 0,\n      rotation: 0,\n      red: 0,\n      green: 0,\n      blue: 0,\n    };\n\n    this.particles = new Set();\n\n    this.x = 0;\n    this.y = 0;\n    this.width = 0;\n    this.height = 0;\n\n    this.spawns = -1;\n    this._currentSpawn = 0;\n\n    this.frames = 30;\n    this._currentFrame = 0;\n\n    this.maxParticles = 1000;\n    this.spawnAmount = 10;\n  }\n\n  update() {\n    if (this._currentFrame === 0) {\n      this._spawnBatch();\n    }\n\n    this._currentFrame++;\n    this._currentFrame %= this.frames;\n  }\n\n  isDead() {\n    return (\n      this.spawns != -1 &&\n      this._currentSpawn > this.spawns &&\n      this.particles.size == 0\n    );\n  }\n\n  reset() {\n    this._currentSpawn = 0;\n  }\n\n  _spawnParticle() {\n    const values = {};\n\n    for (const [parameter, value] of Object.entries(this.particleSettings)) {\n      if (parameter in this.particleVariation) {\n        if (value instanceof Array) {\n          values[parameter] = value.map((base, i) => {\n            return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"uniform\"])(\n              base - this.particleVariation[parameter][i],\n              base + this.particleVariation[parameter][i]\n            );\n          });\n        } else {\n          values[parameter] = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"uniform\"])(\n            value - this.particleVariation[parameter],\n            value + this.particleVariation[parameter]\n          );\n        }\n      } else {\n        values[parameter] = value;\n      }\n    }\n    values.x = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"uniform\"])(this.x, this.x + this.width);\n    values.y = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"uniform\"])(this.y, this.y + this.height);\n\n    return _Particle__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadFromObject(values);\n  }\n\n  _spawnBatch() {\n    if (this.spawns != -1) {\n      this._currentSpawn++;\n    }\n    if (this._currentSpawn <= this.spawns || this.spawns === -1) {\n      let particle;\n      for (particle = 0; particle < this.spawnAmount; particle++) {\n        if (this.particles.size < this.maxParticles) {\n          this.particles.add(this._spawnParticle());\n        }\n      }\n    }\n  }\n\n  static loadFromObject(settings) {\n    const emitter = new Emitter();\n    for (const setting of Object.keys(settings)) {\n      const camelSetting = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"snakeToCamel\"])(setting);\n      if (camelSetting in emitter) {\n        emitter[camelSetting] = settings[setting];\n      }\n    }\n    return emitter;\n  }\n}\n\n\n//# sourceURL=webpack://bubbles/./src/modules/Emitter.js?");

/***/ }),

/***/ "./src/modules/Particle.js":
/*!*********************************!*\
  !*** ./src/modules/Particle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Particle; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n\nclass Particle {\n  constructor() {\n    this.currentFrame = 0;\n\n    this.lifetime = 30;\n    this.interpolation = \"linear\";\n\n    this.x = 0;\n    this.xSpeed = 0;\n    this._xSpeedPoints = null;\n    this.xAcceleration = 0;\n    this._xAccelerationPoints = null;\n\n    this.y = 0;\n    this.ySpeed = 0;\n    this._ySpeedPoints = null;\n    this.yAcceleration = 0;\n    this._yAccelerationPoints = null;\n\n    this.scale = 1;\n    this._scalePoints = null;\n\n    this.opacity = 1;\n    this._opacityPoints = null;\n\n    this.rotation = 0;\n    this._rotationPoints = null;\n\n    this.shape = \"square\";\n    this.colourise = false;\n\n    this.red = 255;\n    this._redPoints = null;\n    this.green = 255;\n    this._greenPoints = null;\n    this.blue = 255;\n    this._bluePoints = null;\n  }\n\n  update(deltatime) {\n    this.xAcceleration += this._interpolate(this._xAccelerationPoints);\n    this.yAcceleration += this._interpolate(this._yAccelerationPoints);\n    this.xSpeed += this._interpolate(this._xSpeedPoints) + this.xAcceleration;\n    this.ySpeed += this._interpolate(this._ySpeedPoints) + this.yAcceleration;\n    this.x += this.xSpeed * deltatime;\n    this.y += this.ySpeed * deltatime;\n\n    this.scale += this._interpolate(this._scalePoints);\n    this.opacity += this._interpolate(this._opacityPoints);\n    this.rotation += this._interpolate(this._rotationPoints);\n\n    this.red += this._interpolate(this._redPoints);\n    this.green += this._interpolate(this._greenPoints);\n    this.blue += this._interpolate(this._bluePoints);\n\n    this.currentFrame++;\n  }\n\n  isDead() {\n    return this.currentFrame > this.lifetime;\n  }\n\n  _interpolate(points) {\n    if (points === null) {\n      return 0;\n    }\n    const framesPerPoint = ~~(this.lifetime / (points.length - 1));\n    const currentPoint = ~~(this.currentFrame / framesPerPoint);\n    const y1 = points[currentPoint];\n    const y2 =\n      currentPoint + 1 < points.length\n        ? points[currentPoint + 1]\n        : points[currentPoint];\n    const x1 = currentPoint * framesPerPoint;\n    const x2 = (currentPoint + 1) * framesPerPoint;\n    return this[\"_\" + this.interpolation + \"Interpolate\"](y1, y2, x1, x2);\n  }\n\n  _linearInterpolate(y1, y2, x1, x2) {\n    return (y2 - y1) / (x2 - x1);\n  }\n\n  _cosineInterpolate(y1, y2, x1, x2) {\n    return (\n      ((y2 - y1) / (x2 - x1)) *\n      (Math.PI / 2) *\n      Math.sin((Math.PI * (this.currentFrame - x1)) / (x2 - x1))\n    );\n  }\n\n  static loadFromObject(settings) {\n    const particle = new Particle();\n    for (const setting of Object.keys(settings)) {\n      const camelSetting = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"snakeToCamel\"])(setting);\n      if (camelSetting in particle) {\n        if (\n          settings[setting] instanceof Array &&\n          settings[setting].length > 1\n        ) {\n          particle[camelSetting] = settings[setting][0];\n          particle[\"_\" + camelSetting + \"Points\"] = settings[setting];\n        } else {\n          particle[camelSetting] = settings[setting];\n        }\n      }\n    }\n    return particle;\n  }\n}\n\n\n//# sourceURL=webpack://bubbles/./src/modules/Particle.js?");

/***/ }),

/***/ "./src/modules/ParticleEffect.js":
/*!***************************************!*\
  !*** ./src/modules/ParticleEffect.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ParticleEffect; });\n/* harmony import */ var _Emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emitter */ \"./src/modules/Emitter.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n\n\nclass ParticleEffect {\n  constructor() {\n    this._emitters = new Set();\n    this._deadEmitters = new Set();\n\n    this.x = 0;\n    this.xSpeed = 0;\n    this.y = 0;\n    this.ySpeed = 0;\n\n    this.loops = -1;\n    this._currentLoop = 1;\n  }\n\n  update(deltatime = 1) {\n    this.x += this.xSpeed * deltatime;\n    this.y += this.ySpeed * deltatime;\n\n    this._emitters.forEach((emitter) => {\n      emitter.update();\n      if (emitter.isDead()) {\n        this._deadEmitters.add(emitter);\n      }\n\n      const deadParticles = new Set();\n      emitter.particles.forEach((particle) => {\n        particle.update(deltatime);\n        particle.x -= this.xSpeed * deltatime;\n        particle.y -= this.ySpeed * deltatime;\n        if (particle.isDead()) {\n          deadParticles.add(particle);\n        }\n      });\n\n      deadParticles.forEach((deadParticle) => {\n        emitter.particles.delete(deadParticle);\n      });\n    });\n\n    if (this._deadEmitters.size == this._emitters.size) {\n      if (this._currentLoop < this.loops || this.loops === -1) {\n        this._deadEmitters.forEach((deadEmitter) => {\n          deadEmitter.reset();\n        });\n        if (this.loops != -1) {\n          this._currentLoop++;\n        }\n        this._deadEmitters.clear();\n      }\n    }\n  }\n\n  addEmitter(...emitters) {\n    emitters.forEach((emitter) => {\n      this._emitters.add(emitter);\n    });\n    return this;\n  }\n\n  getEmitters() {\n    return this._emitters;\n  }\n\n  setPos(x, y) {\n    this.x = x;\n    this.y = y;\n    return this;\n  }\n\n  isDead() {\n    return this.current_loops > this.loops != -1 && this._emitters.size;\n  }\n\n  static loadFromObject(settings) {\n    const particleEffect = new ParticleEffect();\n    for (const setting of Object.keys(settings)) {\n      const camelSetting = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"snakeToCamel\"])(setting);\n      if (setting === \"emitters\") {\n        for (const emitter of settings[\"emitters\"]) {\n          particleEffect.addEmitter(_Emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadFromObject(emitter));\n        }\n      } else {\n        if (camelSetting in particleEffect) {\n          particleEffect[camelSetting] = settings[setting];\n        }\n      }\n    }\n    return particleEffect;\n  }\n}\n\n\n//# sourceURL=webpack://bubbles/./src/modules/ParticleEffect.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: snakeToCamel, capitalise, uniform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"snakeToCamel\", function() { return snakeToCamel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"capitalise\", function() { return capitalise; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uniform\", function() { return uniform; });\nconst snakeToCamel = (s) =>\n  s.replace(/(_\\w)/g, (k) => k[1].toUpperCase());\n\nconst capitalise = (word) =>\n  word[0].toUpperCase() + word.substring(1).toLowerCase();\n\nconst uniform = (min, max) => Math.random() * (max - min) + min;\n\n\n//# sourceURL=webpack://bubbles/./src/utils/index.js?");

/***/ })

/******/ });
});