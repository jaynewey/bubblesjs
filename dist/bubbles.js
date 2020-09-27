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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bubbles; });\n/* harmony import */ var _modules_ParticleEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ParticleEffect */ \"./src/modules/ParticleEffect.js\");\n/* harmony import */ var _modules_EffectRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/EffectRenderer */ \"./src/modules/EffectRenderer.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Bubbles = /*#__PURE__*/function () {\n  function Bubbles(canvasId) {\n    var baseSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;\n\n    _classCallCheck(this, Bubbles);\n\n    this.renderer = new _modules_EffectRenderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](baseSize);\n    this.canvas = document.querySelector(canvasId);\n    this.particleEffects = [];\n    this.update = this.update.bind(this);\n    this.update();\n  }\n\n  _createClass(Bubbles, [{\n    key: \"registerEffect\",\n    value: function registerEffect(effectOptions) {\n      this.particleEffects.push(_modules_ParticleEffect__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadFromObject(effectOptions));\n      return this;\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.canvas.getContext(\"2d\").clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n      var _iterator = _createForOfIteratorHelper(this.particleEffects),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var particleEffect = _step.value;\n          particleEffect.update();\n          this.renderer.renderEffect(particleEffect, this.canvas);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      requestAnimationFrame(this.update);\n    }\n  }]);\n\n  return Bubbles;\n}();\n\n\n\n//# sourceURL=webpack://bubbles/./src/index.js?");

/***/ }),

/***/ "./src/modules/EffectRenderer.js":
/*!***************************************!*\
  !*** ./src/modules/EffectRenderer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EffectRenderer; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar EffectRenderer = /*#__PURE__*/function () {\n  function EffectRenderer() {\n    var baseSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;\n\n    _classCallCheck(this, EffectRenderer);\n\n    this.baseSize = baseSize;\n  }\n\n  _createClass(EffectRenderer, [{\n    key: \"renderEffect\",\n    value: function renderEffect(particleEffect, surface) {\n      var _this = this;\n\n      var context = surface.getContext(\"2d\");\n      particleEffect.getEmitters().forEach(function (emitter) {\n        emitter.particles.forEach(function (particle) {\n          var position = {\n            x: particleEffect.x + particle.x - _this.baseSize * particle.scale / 2,\n            y: particleEffect.y + particle.y - _this.baseSize * particle.scale / 2\n          };\n\n          _this[\"_render\" + Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"capitalise\"])(particle.shape)](particle, context, position);\n        });\n      });\n    }\n  }, {\n    key: \"_renderCircle\",\n    value: function _renderCircle(particle, context, position) {\n      var radius = particle.scale * this.baseSize / 2;\n\n      if (radius > 0) {\n        context.beginPath();\n        context.fillStyle = \"rgba( \".concat(particle.red, \", \").concat(particle.green, \", \").concat(particle.blue, \", \").concat(particle.opacity, \")\");\n        context.arc(position.x, position.y, radius, 0, 2 * Math.PI, false);\n        context.fill();\n      }\n    }\n  }, {\n    key: \"_renderSquare\",\n    value: function _renderSquare(particle, context, position) {\n      context.fillStyle = \"rgba( \".concat(particle.red, \", \").concat(particle.green, \", \").concat(particle.blue, \", \").concat(particle.opacity, \")\");\n      context.setTransform(1, 0, 0, 1, position.x, position.y);\n      context.rotate(particle.rotation * Math.PI / 180);\n      context.fillRect(particle.scale * this.baseSize / 2, particle.scale * this.baseSize / 2, particle.scale * this.baseSize, particle.scale * this.baseSize);\n      context.setTransform(1, 0, 0, 1, 0, 0);\n    }\n  }]);\n\n  return EffectRenderer;\n}();\n\n\n\n//# sourceURL=webpack://bubbles/./src/modules/EffectRenderer.js?");

/***/ }),

/***/ "./src/modules/Emitter.js":
/*!********************************!*\
  !*** ./src/modules/Emitter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Emitter; });\n/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Particle */ \"./src/modules/Particle.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Emitter = /*#__PURE__*/function () {\n  function Emitter() {\n    _classCallCheck(this, Emitter);\n\n    this.particleSettings = {};\n    this.particleVariation = {\n      lifetime: 0,\n      xSpeed: 0,\n      ySpeed: 0,\n      xAcceleration: 0,\n      yAcceleration: 0,\n      scale: 0,\n      opacity: 0,\n      rotation: 0,\n      red: 0,\n      green: 0,\n      blue: 0\n    };\n    this.particles = new Set();\n    this.x = 0;\n    this.y = 0;\n    this.width = 0;\n    this.height = 0;\n    this.spawns = -1;\n    this._currentSpawn = 0;\n    this.frames = 30;\n    this._currentFrame = 0;\n    this.maxParticles = 1000;\n    this.spawnAmount = 10;\n  }\n\n  _createClass(Emitter, [{\n    key: \"update\",\n    value: function update() {\n      if (this._currentFrame === 0) {\n        this._spawnBatch();\n      }\n\n      this._currentFrame++;\n      this._currentFrame %= this.frames;\n    }\n  }, {\n    key: \"isDead\",\n    value: function isDead() {\n      return this.spawns != -1 && this._currentSpawn > this.spawns && this.particles.size == 0;\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this._currentSpawn = 0;\n    }\n  }, {\n    key: \"_spawnParticle\",\n    value: function _spawnParticle() {\n      var _this = this;\n\n      var values = {};\n\n      var _loop = function _loop() {\n        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n            parameter = _Object$entries$_i[0],\n            value = _Object$entries$_i[1];\n\n        if (parameter in _this.particleVariation) {\n          if (value instanceof Array) {\n            values[parameter] = value.map(function (base, i) {\n              return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"uniform\"])(base - _this.particleVariation[parameter][i], base + _this.particleVariation[parameter][i]);\n            });\n          } else {\n            values[parameter] = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"uniform\"])(value - _this.particleVariation[parameter], value + _this.particleVariation[parameter]);\n          }\n        } else {\n          values[parameter] = value;\n        }\n      };\n\n      for (var _i = 0, _Object$entries = Object.entries(this.particleSettings); _i < _Object$entries.length; _i++) {\n        _loop();\n      }\n\n      values.x = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"uniform\"])(this.x, this.x + this.width);\n      values.y = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"uniform\"])(this.y, this.y + this.height);\n      return _Particle__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadFromObject(values);\n    }\n  }, {\n    key: \"_spawnBatch\",\n    value: function _spawnBatch() {\n      if (this.spawns != -1) {\n        this._currentSpawn++;\n      }\n\n      if (this._currentSpawn <= this.spawns || this.spawns === -1) {\n        var particle;\n\n        for (particle = 0; particle < this.spawnAmount; particle++) {\n          if (this.particles.size < this.maxParticles) {\n            this.particles.add(this._spawnParticle());\n          }\n        }\n      }\n    }\n  }], [{\n    key: \"loadFromObject\",\n    value: function loadFromObject(settings) {\n      var emitter = new Emitter();\n\n      for (var _i2 = 0, _Object$keys = Object.keys(settings); _i2 < _Object$keys.length; _i2++) {\n        var setting = _Object$keys[_i2];\n        var camelSetting = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"snakeToCamel\"])(setting);\n\n        if (camelSetting in emitter) {\n          emitter[camelSetting] = settings[setting];\n        }\n      }\n\n      return emitter;\n    }\n  }]);\n\n  return Emitter;\n}();\n\n\n\n//# sourceURL=webpack://bubbles/./src/modules/Emitter.js?");

/***/ }),

/***/ "./src/modules/Particle.js":
/*!*********************************!*\
  !*** ./src/modules/Particle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Particle; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Particle = /*#__PURE__*/function () {\n  function Particle() {\n    _classCallCheck(this, Particle);\n\n    this.currentFrame = 0;\n    this.lifetime = 30;\n    this.interpolation = \"linear\";\n    this.x = 0;\n    this.xSpeed = 0;\n    this._xSpeedPoints = null;\n    this.xAcceleration = 0;\n    this._xAccelerationPoints = null;\n    this.y = 0;\n    this.ySpeed = 0;\n    this._ySpeedPoints = null;\n    this.yAcceleration = 0;\n    this._yAccelerationPoints = null;\n    this.scale = 1;\n    this._scalePoints = null;\n    this.opacity = 1;\n    this._opacityPoints = null;\n    this.rotation = 0;\n    this._rotationPoints = null;\n    this.shape = \"square\";\n    this.colourise = false;\n    this.red = 255;\n    this._redPoints = null;\n    this.green = 255;\n    this._greenPoints = null;\n    this.blue = 255;\n    this._bluePoints = null;\n  }\n\n  _createClass(Particle, [{\n    key: \"update\",\n    value: function update(deltatime) {\n      this.xAcceleration += this._interpolate(this._xAccelerationPoints);\n      this.yAcceleration += this._interpolate(this._yAccelerationPoints);\n      this.xSpeed += this._interpolate(this._xSpeedPoints) + this.xAcceleration;\n      this.ySpeed += this._interpolate(this._ySpeedPoints) + this.yAcceleration;\n      this.x += this.xSpeed * deltatime;\n      this.y += this.ySpeed * deltatime;\n      this.scale += this._interpolate(this._scalePoints);\n      this.opacity += this._interpolate(this._opacityPoints);\n      this.rotation += this._interpolate(this._rotationPoints);\n      this.red += this._interpolate(this._redPoints);\n      this.green += this._interpolate(this._greenPoints);\n      this.blue += this._interpolate(this._bluePoints);\n      this.currentFrame++;\n    }\n  }, {\n    key: \"isDead\",\n    value: function isDead() {\n      return this.currentFrame > this.lifetime;\n    }\n  }, {\n    key: \"_interpolate\",\n    value: function _interpolate(points) {\n      if (points === null) {\n        return 0;\n      }\n\n      var framesPerPoint = ~~(this.lifetime / (points.length - 1));\n      var currentPoint = ~~(this.currentFrame / framesPerPoint);\n      var y1 = points[currentPoint];\n      var y2 = currentPoint + 1 < points.length ? points[currentPoint + 1] : points[currentPoint];\n      var x1 = currentPoint * framesPerPoint;\n      var x2 = (currentPoint + 1) * framesPerPoint;\n      return this[\"_\" + this.interpolation + \"Interpolate\"](y1, y2, x1, x2);\n    }\n  }, {\n    key: \"_linearInterpolate\",\n    value: function _linearInterpolate(y1, y2, x1, x2) {\n      return (y2 - y1) / (x2 - x1);\n    }\n  }, {\n    key: \"_cosineInterpolate\",\n    value: function _cosineInterpolate(y1, y2, x1, x2) {\n      return (y2 - y1) / (x2 - x1) * (Math.PI / 2) * Math.sin(Math.PI * (this.currentFrame - x1) / (x2 - x1));\n    }\n  }], [{\n    key: \"loadFromObject\",\n    value: function loadFromObject(settings) {\n      var particle = new Particle();\n\n      for (var _i = 0, _Object$keys = Object.keys(settings); _i < _Object$keys.length; _i++) {\n        var setting = _Object$keys[_i];\n        var camelSetting = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"snakeToCamel\"])(setting);\n\n        if (camelSetting in particle) {\n          if (settings[setting] instanceof Array && settings[setting].length > 1) {\n            particle[camelSetting] = settings[setting][0];\n            particle[\"_\" + camelSetting + \"Points\"] = settings[setting];\n          } else {\n            particle[camelSetting] = settings[setting];\n          }\n        }\n      }\n\n      return particle;\n    }\n  }]);\n\n  return Particle;\n}();\n\n\n\n//# sourceURL=webpack://bubbles/./src/modules/Particle.js?");

/***/ }),

/***/ "./src/modules/ParticleEffect.js":
/*!***************************************!*\
  !*** ./src/modules/ParticleEffect.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ParticleEffect; });\n/* harmony import */ var _Emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emitter */ \"./src/modules/Emitter.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar ParticleEffect = /*#__PURE__*/function () {\n  function ParticleEffect() {\n    _classCallCheck(this, ParticleEffect);\n\n    this._emitters = new Set();\n    this._deadEmitters = new Set();\n    this.x = 0;\n    this.xSpeed = 0;\n    this.y = 0;\n    this.ySpeed = 0;\n    this.loops = -1;\n    this._currentLoop = 1;\n  }\n\n  _createClass(ParticleEffect, [{\n    key: \"update\",\n    value: function update() {\n      var _this = this;\n\n      var deltatime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n      this.x += this.xSpeed * deltatime;\n      this.y += this.ySpeed * deltatime;\n\n      this._emitters.forEach(function (emitter) {\n        emitter.update();\n\n        if (emitter.isDead()) {\n          _this._deadEmitters.add(emitter);\n        }\n\n        var deadParticles = new Set();\n        emitter.particles.forEach(function (particle) {\n          particle.update(deltatime);\n          particle.x -= _this.xSpeed * deltatime;\n          particle.y -= _this.ySpeed * deltatime;\n\n          if (particle.isDead()) {\n            deadParticles.add(particle);\n          }\n        });\n        deadParticles.forEach(function (deadParticle) {\n          emitter.particles[\"delete\"](deadParticle);\n        });\n      });\n\n      if (this._deadEmitters.size == this._emitters.size) {\n        if (this._currentLoop < this.loops || this.loops === -1) {\n          this._deadEmitters.forEach(function (deadEmitter) {\n            deadEmitter.reset();\n          });\n\n          if (this.loops != -1) {\n            this._currentLoop++;\n          }\n\n          this._deadEmitters.clear();\n        }\n      }\n    }\n  }, {\n    key: \"addEmitter\",\n    value: function addEmitter() {\n      var _this2 = this;\n\n      for (var _len = arguments.length, emitters = new Array(_len), _key = 0; _key < _len; _key++) {\n        emitters[_key] = arguments[_key];\n      }\n\n      emitters.forEach(function (emitter) {\n        _this2._emitters.add(emitter);\n      });\n      return this;\n    }\n  }, {\n    key: \"getEmitters\",\n    value: function getEmitters() {\n      return this._emitters;\n    }\n  }, {\n    key: \"setPos\",\n    value: function setPos(x, y) {\n      this.x = x;\n      this.y = y;\n      return this;\n    }\n  }, {\n    key: \"isDead\",\n    value: function isDead() {\n      return this.current_loops > this.loops != -1 && this._emitters.size;\n    }\n  }], [{\n    key: \"loadFromObject\",\n    value: function loadFromObject(settings) {\n      var particleEffect = new ParticleEffect();\n\n      for (var _i = 0, _Object$keys = Object.keys(settings); _i < _Object$keys.length; _i++) {\n        var setting = _Object$keys[_i];\n        var camelSetting = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"snakeToCamel\"])(setting);\n\n        if (setting === \"emitters\") {\n          var _iterator = _createForOfIteratorHelper(settings[\"emitters\"]),\n              _step;\n\n          try {\n            for (_iterator.s(); !(_step = _iterator.n()).done;) {\n              var emitter = _step.value;\n              particleEffect.addEmitter(_Emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadFromObject(emitter));\n            }\n          } catch (err) {\n            _iterator.e(err);\n          } finally {\n            _iterator.f();\n          }\n        } else {\n          if (camelSetting in particleEffect) {\n            particleEffect[camelSetting] = settings[setting];\n          }\n        }\n      }\n\n      return particleEffect;\n    }\n  }]);\n\n  return ParticleEffect;\n}();\n\n\n\n//# sourceURL=webpack://bubbles/./src/modules/ParticleEffect.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: snakeToCamel, capitalise, uniform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"snakeToCamel\", function() { return snakeToCamel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"capitalise\", function() { return capitalise; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uniform\", function() { return uniform; });\nvar snakeToCamel = function snakeToCamel(s) {\n  return s.replace(/(_\\w)/g, function (k) {\n    return k[1].toUpperCase();\n  });\n};\nvar capitalise = function capitalise(word) {\n  return word[0].toUpperCase() + word.substring(1).toLowerCase();\n};\nvar uniform = function uniform(min, max) {\n  return Math.random() * (max - min) + min;\n};\n\n//# sourceURL=webpack://bubbles/./src/utils/index.js?");

/***/ })

/******/ });
});