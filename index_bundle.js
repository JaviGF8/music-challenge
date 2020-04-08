/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/music-challenge/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([164,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(165);
module.exports = __webpack_require__(414);


/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(30);
            var content = __webpack_require__(376);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(31);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-icon{margin:0;height:8px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(30);
            var content = __webpack_require__(378);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(31);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".external-link{color:#282828}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(30);
            var content = __webpack_require__(381);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(31);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".album{display:flex}.album .album-container{display:flex;padding:8px;height:calc(100% - 32px);width:calc(100% - 16px);overflow:visible}.album .album-container>*{display:flex;justify-content:flex-end;width:calc(100% - 16px);height:calc(100% - 16px);padding:16px;background-color:#fff;border-radius:4px;transition:linear all .25s;overflow:hidden;text-decoration:none;color:#282828;border:1px solid rgba(136,136,136,0.2)}.album .album-container>* .album-position{font-weight:bold;font-size:14px;min-width:32px}.album .album-container>* .album-info{flex:1;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.album .album-container>* .album-info .album-image{display:flex;justify-content:center;height:100%}.album .album-container>* .album-info .album-image img{height:100%;max-width:100%;object-fit:cover}.album .album-container>* .album-info a,.album .album-container>* .album-info p{margin:0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:100%;text-decoration:none}.album .album-container>* .top-label{align-self:flex-start;padding:8px;border-radius:4px;position:absolute;color:#fff}.album .album-container>*:hover{transform:scale(1.02)}.album.top-album .album-container>*{background-color:#c1d0d5;border:1px solid rgba(47,97,116,0.2)}.album.top-album .album-container>* .album-position{font-size:32px}.album.top-album .album-container>* .album-info a,.album.top-album .album-container>* .album-info p{font-size:24px}.album.top-album .album-container>* .top-label{font-size:32px;background-color:#2f6174}.album.top-three-album .album-container>*{background-color:#d7e9e5;border:1px solid rgba(120,182,169,0.2)}.album.top-three-album .album-container>* .album-position{font-size:24px}.album.top-three-album .album-container>* .album-info a,.album.top-three-album .album-container>* .album-info p{font-size:20px}.album.top-three-album .album-container>* .top-label{font-size:16px;background-color:#78b6a9}.album.top-six-album .album-container>*{background-color:#fbf1de;border:1px solid rgba(242,208,144,0.2)}.album.top-six-album .album-container>* .album-position{font-size:20px}.album.top-six-album .album-container>* .top-label{background-color:#f2d090}.album.top-ten-album .album-container>*{border:1px solid rgba(242,208,144,0.4)}.album.top-ten-album .album-container>* .album-position{font-size:16px}.album.top-ten-album .album-container>* .top-label{background-color:#f2d090}.album.album-full .album-container>*{background-color:#fff;cursor:auto}.album.album-full .album-container>* .album-info{flex-direction:row;align-items:flex-start;justify-content:flex-start}.album.album-full .album-container>* .album-info .album-image img{height:200px;width:200px;margin-right:16px}.album.album-full .album-container>* .album-info .album-full-info{display:flex;flex-direction:column;max-width:100%}.album.album-full .album-container>* .album-info .album-full-info>p,.album.album-full .album-container>* .album-info .album-full-info>div{max-width:100%;word-break:break-word;text-overflow:inherit;white-space:inherit;margin:8px 0}.album.album-full .album-container>* .album-info .album-full-info .album-name{font-size:32px;font-weight:bold}.album.album-full .album-container>* .album-info .album-full-info a{text-decoration:underline;font-size:24px;color:#234f61}.album.album-full .album-container>* .album-info .album-full-info .album-rights{color:#888;margin:8px 0;font-size:12px}.album.album-full .album-container>* .album-info .album-full-info .album-price span{color:#fff;background-color:#78b6a9;padding:8px;border-radius:4px}.album.album-full .album-container>* .album-info .album-full-info .album-genre a{margin-left:8px;font-size:14px}.album.album-full .album-container>*:hover{transform:none;cursor:auto}@media screen and (max-width: 768px){.album.album-full .album-container>* .album-info{flex-direction:column}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(30);
            var content = __webpack_require__(383);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(31);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".album-list{display:flex;flex-wrap:wrap;max-width:1200px;width:100vw}.album-list>*{flex:0 20%;width:20%}.album-list>* .album-image{margin-bottom:16px}.album-list>*:first-child{min-height:400px}.album-list>*:nth-child(-n+3):not(:first-child){height:40vh;min-height:350px}.album-list>*:nth-child(-n+6):not(:nth-child(-n+3)){height:30vh;min-height:300px}.album-list>*:nth-child(-n+10):not(:nth-child(-n+6)){min-height:250px}.album-list>*:nth-child(-n+20):not(:nth-child(-n+10)){min-height:200px}.album-list>*:nth-child(-n+50):not(:nth-child(-n+20)){min-height:150px;font-size:12px}.album-list>*:nth-child(-n+100):not(:nth-child(-n+50)){max-height:100px;font-size:12px}.album-list>*:nth-child(-n+100):not(:nth-child(-n+50)) .album-container .album-info{flex-direction:row;justify-content:flex-start}.album-list>*:nth-child(-n+100):not(:nth-child(-n+50)) .album-container .album-info .album-image{margin-bottom:0;margin-right:8px}.album-list>*:nth-child(-n+100):not(:nth-child(-n+50)) .album-container .album-info .album-image img{max-width:50px}@media screen and (min-width: 992px){.album-list>*:first-child{flex:0 100%;width:100%}.album-list>*:nth-child(-n+3):not(:first-child){flex:0 50%;width:50%}.album-list>*:nth-child(-n+6):not(:nth-child(-n+3)){flex:0 33.3333%;width:33.3333%}.album-list>*:nth-child(-n+10):not(:nth-child(-n+6)){flex:0 25%;width:25%}.album-list>*:nth-child(-n+20):not(:nth-child(-n+10)){flex:0 20%;width:20%}}@media screen and (max-width: 992px){.album-list>*{flex:0 100%;max-width:100%;max-height:75px}.album-list>* .album-container .album-info{flex-direction:row;justify-content:flex-start}.album-list>* .album-container .album-info p{word-break:break-word;text-overflow:inherit;white-space:inherit;flex:1}.album-list>* .album-container .album-info .album-image{flex:1;margin-right:8px;margin-bottom:0}.album-list>*:first-child{height:30vh;min-height:250px}.album-list>*:nth-child(-n+3):not(:first-child){height:25vh;min-height:200px}.album-list>*:nth-child(-n+6):not(:nth-child(-n+3)){height:20vh;min-height:175px}.album-list>*:nth-child(-n+10):not(:nth-child(-n+6)){height:18vh;min-height:150px}.album-list>*:nth-child(-n+50):not(:nth-child(-n+10)){height:15vh;min-height:125px}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(30);
            var content = __webpack_require__(385);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(31);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-btn{padding:8px 16px;font-size:16px;border-radius:4px;border:0;color:#fff;background-color:#2f6174;transition:linear opacity .1s;outline:0;cursor:pointer}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(30);
            var content = __webpack_require__(387);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(31);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".search-bar{display:flex;align-items:center;background-color:#2f6174;color:#fff;border-radius:4px}.search-bar .custom-btn{height:32px;width:32px;padding:0}.search-bar input{font-size:16px;padding:0 4px;height:32px;max-width:200px;opacity:1;outline-width:0;border:0;background:transparent;transition:all linear .25s;color:#fff}.search-bar input::placeholder{color:rgba(255,255,255,0.5);pointer-events:none}.search-bar input.hidden{padding:0;max-width:0;opacity:0}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(30);
            var content = __webpack_require__(389);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(31);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".selector{display:flex;flex-direction:column;align-items:center;justify-content:center}.selector>.custom-btn{height:32px;width:32px;padding:0}.selector .selector-options{display:flex;opacity:1;margin-top:16px;padding:4px;max-width:100vh;transition:linear all .25s}.selector .selector-options>.custom-btn{opacity:0.5;height:32px;transition:linear all .25s;font-size:12px;margin-right:4px}.selector .selector-options>.custom-btn.selected{opacity:1}.selector .selector-options>.custom-btn:last-child{margin-right:0}.selector .selector-options.hidden{opacity:0;margin-top:0;padding:0 4px;max-width:0}.selector .selector-options.hidden>.custom-btn{padding:0;opacity:0;height:0;pointer-events:none}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(30);
            var content = __webpack_require__(391);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(31);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".albums-container{display:flex;flex-direction:column;align-items:center;justify-content:center}.albums-container>.search-bar{position:fixed;top:0;left:8px;border-radius:0 0 4px 4px}.albums-container>.selector{position:fixed;align-items:flex-start;flex-direction:row;top:8px;right:0;z-index:3}.albums-container>.selector>.custom-btn{margin-right:0;border-radius:4px 0 0 4px}.albums-container>.selector .selector-options{padding:4px;margin:0;flex-direction:column;background-color:#2f6174;border-radius:0 0 0 4px}.albums-container>.selector .selector-options>.custom-btn{margin-right:0;margin-bottom:4px;background-color:#78b6a9;max-width:200px}.albums-container>.selector .selector-options>.custom-btn:last-child{margin-bottom:0}.albums-container>.selector .selector-options.hidden{padding:4px 0}.albums-container>.selector .selector-options.hidden>.custom-btn{max-width:0}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(30);
            var content = __webpack_require__(409);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(31);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".album-page{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:1200px;margin-top:8px}.album-page>a{position:fixed;top:16px;left:16px;height:32px;width:32px;display:flex;align-items:center;justify-content:center;border-radius:50%;background-color:#2f6174;color:#fff;text-decoration:none}.album-page>.album{width:100%}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(30);
            var content = __webpack_require__(411);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(31);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fadein{-webkit-animation:fadein 0.5s;-moz-animation:fadein 0.5s;-ms-animation:fadein 0.5s;-o-animation:fadein 0.5s;animation:fadein 0.5s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{from{opacity:0}to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(30);
            var content = __webpack_require__(413);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(31);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body{font-family:'Montserrat', sans-serif;font-size:14px;margin:0;color:#282828;-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto}.shadow{-webkit-box-shadow:0px 0 8px 2px rgba(136,136,136,0.2);-moz-box-shadow:0px 0 8px 2px rgba(136,136,136,0.2);box-shadow:0px 0 8px 2px rgba(136,136,136,0.2)}main{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;min-height:100vh;background-color:#fafaff}main #main-container{width:calc(100% - 32px);padding:0 16px;display:flex;align-items:center;justify-content:center;flex-direction:column}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(83);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/redux-thunk/es/index.js
var redux_thunk_es = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(32);

// CONCATENATED MODULE: ./src/utils/dispatchs.js
const ALBUMS = {
  LOADING: '@albums/LOADING',
  LOADING_END: '@albums/LOADING_END',
  SET: '@albums/SET',
  SET_ALL: '@albums/SET_ALL'
};
const GENRES = {
  SET_ALL: '@genres/SET_ALL'
};
// CONCATENATED MODULE: ./src/reducers/albums/albums.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  album: undefined,
  albums: [],
  loading: false
};

const albums_albums = (state = initialState, action) => {
  switch (action.type) {
    case ALBUMS.SET:
      return _objectSpread({}, state, {
        album: action.album
      });

    case ALBUMS.SET_ALL:
      return _objectSpread({}, state, {
        albums: action.albums
      });

    case ALBUMS.LOADING:
      return _objectSpread({}, state, {
        loading: true
      });

    case ALBUMS.LOADING_END:
      return _objectSpread({}, state, {
        loading: false
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ var reducers_albums_albums = (albums_albums);
// CONCATENATED MODULE: ./src/reducers/genres/genres.js
function genres_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function genres_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { genres_ownKeys(Object(source), true).forEach(function (key) { genres_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { genres_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function genres_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const genres_initialState = {
  genres: [],
  loading: false
};

const genres_genres = (state = genres_initialState, action) => {
  switch (action.type) {
    case GENRES.SET_ALL:
      return genres_objectSpread({}, state, {
        genres: action.genres
      });

    default:
      return genres_objectSpread({}, state);
  }
};

/* harmony default export */ var reducers_genres_genres = (genres_genres);
// CONCATENATED MODULE: ./src/reducers/index.js



const rootReducer = Object(redux["c" /* combineReducers */])({
  albums: reducers_albums_albums,
  genres: reducers_genres_genres
});
/* harmony default export */ var reducers = (rootReducer);
// CONCATENATED MODULE: ./src/store.js



const middlewares = [redux_thunk_es["a" /* default */]];
const store = Object(redux["d" /* createStore */])(reducers, Object(redux["a" /* applyMiddleware */])(...middlewares));
/* harmony default export */ var src_store = (store);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/components/Icon/Icon.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Icon = (_ref) => {
  let icon = _ref.icon,
      rest = _objectWithoutProperties(_ref, ["icon"]);

  return /*#__PURE__*/react_default.a.createElement("i", _extends({}, rest, {
    "aria-hidden": "true",
    className: icon
  }));
};

Icon.defaultProps = {
  icon: undefined
};
Icon.propTypes = {
  icon: prop_types_default.a.string
};
/* harmony default export */ var Icon_Icon = (Icon);
// EXTERNAL MODULE: ./src/components/Icon/icon.scss
var Icon_icon = __webpack_require__(375);

// CONCATENATED MODULE: ./src/components/Icon/index.js


/* harmony default export */ var components_Icon = (Icon_Icon);
// CONCATENATED MODULE: ./src/components/ExternalLink/ExternalLink.jsx
function ExternalLink_extends() { ExternalLink_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ExternalLink_extends.apply(this, arguments); }

function ExternalLink_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ExternalLink_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ExternalLink_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ExternalLink = (_ref) => {
  let className = _ref.className,
      icon = _ref.icon,
      text = _ref.text,
      rest = ExternalLink_objectWithoutProperties(_ref, ["className", "icon", "text"]);

  return /*#__PURE__*/react_default.a.createElement("a", ExternalLink_extends({}, rest, {
    className: "external-link".concat(className ? " ".concat(className) : ''),
    target: "_blank",
    rel: "noopener noreferrer"
  }), icon && /*#__PURE__*/react_default.a.createElement(components_Icon, {
    icon: icon
  }), text);
};

ExternalLink.defaultProps = {
  className: undefined,
  icon: undefined,
  text: undefined
};
ExternalLink.propTypes = {
  className: prop_types_default.a.string,
  icon: prop_types_default.a.string,
  text: prop_types_default.a.string
};
/* harmony default export */ var ExternalLink_ExternalLink = (ExternalLink);
// EXTERNAL MODULE: ./src/components/ExternalLink/externalLink.scss
var externalLink = __webpack_require__(377);

// CONCATENATED MODULE: ./src/components/ExternalLink/index.js


/* harmony default export */ var components_ExternalLink = (ExternalLink_ExternalLink);
// CONCATENATED MODULE: ./src/components/Album/AlbumInfo/AlbumInfo.jsx




const AlbumInfo = ({
  album,
  fullInfo
}) => album && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
  className: "album-position"
}, album.position, "."), /*#__PURE__*/react_default.a.createElement("div", {
  className: "album-info"
}, /*#__PURE__*/react_default.a.createElement("div", {
  className: "album-image"
}, /*#__PURE__*/react_default.a.createElement("img", {
  src: album.image,
  alt: album.name
})), fullInfo ? /*#__PURE__*/react_default.a.createElement("div", {
  className: "album-full-info"
}, /*#__PURE__*/react_default.a.createElement("p", {
  className: "album-name"
}, album.name), /*#__PURE__*/react_default.a.createElement(components_ExternalLink, {
  href: album.artistLink,
  disabled: !fullInfo,
  text: album.artist
}), /*#__PURE__*/react_default.a.createElement("p", {
  className: "album-rights"
}, album.rights), /*#__PURE__*/react_default.a.createElement("div", {
  className: "album-genre"
}, "Genre:", /*#__PURE__*/react_default.a.createElement(components_ExternalLink, {
  href: album.genreLink,
  disabled: !fullInfo,
  text: album.genre
})), /*#__PURE__*/react_default.a.createElement("div", {
  className: "album-price"
}, "Price: ", /*#__PURE__*/react_default.a.createElement("span", null, album.price)), /*#__PURE__*/react_default.a.createElement("div", {
  className: "album-songs"
}, "Number of songs: ", album.totalSongs)) : /*#__PURE__*/react_default.a.createElement("p", null, album.artist, " - ", album.name)), 11 > album.position && /*#__PURE__*/react_default.a.createElement("div", {
  className: "top-label shadow"
}, "TOP ", album.position));

AlbumInfo.defaultProps = {
  fullInfo: false
};
AlbumInfo.propTypes = {
  album: prop_types_default.a.object.isRequired,
  fullInfo: prop_types_default.a.bool
};
/* harmony default export */ var AlbumInfo_AlbumInfo = (AlbumInfo);
// CONCATENATED MODULE: ./src/utils/urls.js
const MAIN_URL = "/music-challenge/" || false;
const ALBUM_URL = "".concat(MAIN_URL, ":albumId");
// CONCATENATED MODULE: ./src/components/Album/Album.jsx






const getClassName = position => {
  let classname = 'top-hundred-album';

  if (1 === position) {
    classname = 'top-album';
  } else if (4 > position) {
    classname = 'top-three-album';
  } else if (7 > position) {
    classname = 'top-six-album';
  } else if (11 > position) {
    classname = 'top-ten-album';
  } else if (21 > position) {
    classname = 'top-twenty-album';
  } else if (51 > position) {
    classname = 'top-fifty-album';
  }

  return classname;
};

const Album = ({
  album,
  fullInfo
}) => album && /*#__PURE__*/react_default.a.createElement("div", {
  className: "album fadein".concat(fullInfo ? ' album-full' : '', " ").concat(getClassName(album.position))
}, /*#__PURE__*/react_default.a.createElement("div", {
  className: "album-container"
}, fullInfo ? /*#__PURE__*/react_default.a.createElement("div", {
  className: "shadow"
}, /*#__PURE__*/react_default.a.createElement(AlbumInfo_AlbumInfo, {
  album: album,
  fullInfo: fullInfo
})) : /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* NavLink */], {
  className: "shadow",
  to: "".concat(MAIN_URL).concat(album.id)
}, /*#__PURE__*/react_default.a.createElement(AlbumInfo_AlbumInfo, {
  album: album,
  fullInfo: fullInfo
}))));

Album.defaultProps = {
  fullInfo: false
};
Album.propTypes = {
  album: prop_types_default.a.object.isRequired,
  fullInfo: prop_types_default.a.bool
};
/* harmony default export */ var Album_Album = (Album);
// EXTERNAL MODULE: ./src/components/Album/album.scss
var Album_album = __webpack_require__(380);

// CONCATENATED MODULE: ./src/components/Album/index.js


/* harmony default export */ var components_Album = (Album_Album);
// CONCATENATED MODULE: ./src/components/AlbumsList/AlbumList.jsx




const AlbumList = ({
  albums
}) => /*#__PURE__*/react_default.a.createElement("div", {
  className: "album-list"
}, 0 < (albums === null || albums === void 0 ? void 0 : albums.length) && albums.map(album => /*#__PURE__*/react_default.a.createElement(components_Album, {
  album: album,
  key: album.id
})));

AlbumList.defaultProps = {
  albums: []
};
AlbumList.propTypes = {
  albums: prop_types_default.a.array
};
/* harmony default export */ var AlbumsList_AlbumList = (AlbumList);
// EXTERNAL MODULE: ./src/components/AlbumsList/albumsList.scss
var albumsList = __webpack_require__(382);

// CONCATENATED MODULE: ./src/components/AlbumsList/index.js


/* harmony default export */ var AlbumsList = (AlbumsList_AlbumList);
// CONCATENATED MODULE: ./src/components/Button/Button.jsx
function Button_extends() { Button_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Button_extends.apply(this, arguments); }

function Button_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Button_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Button_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Button = (_ref) => {
  let className = _ref.className,
      icon = _ref.icon,
      text = _ref.text,
      rest = Button_objectWithoutProperties(_ref, ["className", "icon", "text"]);

  return /*#__PURE__*/react_default.a.createElement("button", Button_extends({
    className: "custom-btn".concat(className ? " ".concat(className) : ''),
    type: "button"
  }, rest), icon && /*#__PURE__*/react_default.a.createElement(components_Icon, {
    icon: icon
  }), text);
};

Button.defaultProps = {
  className: undefined,
  icon: undefined,
  text: undefined
};
Button.propTypes = {
  className: prop_types_default.a.string,
  icon: prop_types_default.a.string,
  text: prop_types_default.a.string
};
/* harmony default export */ var Button_Button = (Button);
// EXTERNAL MODULE: ./src/components/Button/button.scss
var Button_button = __webpack_require__(384);

// CONCATENATED MODULE: ./src/components/Button/index.js


/* harmony default export */ var components_Button = (Button_Button);
// CONCATENATED MODULE: ./src/components/SearchBar/SearchBar.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





const SearchBar = ({
  clearIcon,
  icon,
  onSearch
}) => {
  const _useState = Object(react["useState"])(''),
        _useState2 = _slicedToArray(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

  const _useState3 = Object(react["useState"])(false),
        _useState4 = _slicedToArray(_useState3, 2),
        visible = _useState4[0],
        setVisible = _useState4[1];

  const outsideRef = Object(react["useRef"])();
  const inputRef = Object(react["useRef"])();

  const clear = () => {
    setValue('');
    setVisible(false);
  };

  const handleClick = event => {
    if (visible && outsideRef.current && !outsideRef.current.contains(event.target)) {
      setVisible(false);
    }
  };

  Object(react["useEffect"])(() => {
    if (visible) {
      inputRef.current.focus();
    }
  }, [visible]);
  Object(react["useEffect"])(() => {
    onSearch(value);
  }, [value]);
  Object(react["useEffect"])(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "search-bar shadow",
    ref: outsideRef
  }, /*#__PURE__*/react_default.a.createElement(components_Button, {
    icon: icon,
    onClick: () => setVisible(true)
  }), /*#__PURE__*/react_default.a.createElement("input", {
    className: value || visible ? '' : 'hidden',
    ref: inputRef,
    onChange: event => setValue(event.target.value),
    placeholder: "Search",
    value: value
  }), (visible || value) && /*#__PURE__*/react_default.a.createElement(components_Button, {
    className: "fadein",
    icon: clearIcon,
    onClick: clear
  }));
};

SearchBar.defaultProps = {
  clearIcon: 'fas fa-times',
  icon: 'fas fa-search'
};
SearchBar.propTypes = {
  clearIcon: prop_types_default.a.string,
  icon: prop_types_default.a.string,
  onSearch: prop_types_default.a.func.isRequired
};
/* harmony default export */ var SearchBar_SearchBar = (SearchBar);
// EXTERNAL MODULE: ./src/components/SearchBar/searchBar.scss
var searchBar = __webpack_require__(386);

// CONCATENATED MODULE: ./src/components/SearchBar/index.js


/* harmony default export */ var components_SearchBar = (SearchBar_SearchBar);
// CONCATENATED MODULE: ./src/components/Selector/Selector.jsx
function Selector_slicedToArray(arr, i) { return Selector_arrayWithHoles(arr) || Selector_iterableToArrayLimit(arr, i) || Selector_unsupportedIterableToArray(arr, i) || Selector_nonIterableRest(); }

function Selector_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Selector_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Selector_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Selector_arrayLikeToArray(o, minLen); }

function Selector_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function Selector_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Selector_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





const Selector = ({
  onChange,
  options
}) => {
  const _useState = Object(react["useState"])([]),
        _useState2 = Selector_slicedToArray(_useState, 2),
        selected = _useState2[0],
        setSelected = _useState2[1];

  const _useState3 = Object(react["useState"])(true),
        _useState4 = Selector_slicedToArray(_useState3, 2),
        selectedAll = _useState4[0],
        setSelectedAll = _useState4[1];

  const _useState5 = Object(react["useState"])(false),
        _useState6 = Selector_slicedToArray(_useState5, 2),
        visible = _useState6[0],
        setVisible = _useState6[1];

  const setAllSelected = () => {
    if (options === null || options === void 0 ? void 0 : options.length) {
      const newSelected = [];
      options.forEach(opt => newSelected.push(opt));
      setSelected(newSelected);
    }
  };

  const onSelect = option => {
    const index = selected.indexOf(option);

    if (-1 === index) {
      setSelected([...selected, option]);
    } else {
      setSelected(selected.filter(opt => opt !== option));
    }
  };

  Object(react["useEffect"])(() => {
    setAllSelected();
  }, [options]);
  Object(react["useEffect"])(() => {
    const sameLength = selected.length === (options === null || options === void 0 ? void 0 : options.length);

    if (selectedAll && !sameLength) {
      setSelectedAll(false);
    } else if (!selectedAll && sameLength) {
      setSelectedAll(true);
    }

    onChange(selected);
  }, [selected]);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "selector"
  }, /*#__PURE__*/react_default.a.createElement(components_Button, {
    className: "shadow",
    icon: "fas fa-".concat(visible ? 'arrow-right' : 'filter'),
    onClick: () => setVisible(!visible)
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "selector-options shadow".concat(visible ? '' : ' hidden')
  }, /*#__PURE__*/react_default.a.createElement(components_Button, {
    className: selectedAll ? 'selected' : undefined,
    disabled: selectedAll,
    onClick: setAllSelected,
    text: "All"
  }), options.map(opt => /*#__PURE__*/react_default.a.createElement(components_Button, {
    key: opt,
    className: -1 === selected.indexOf(opt) ? undefined : 'selected',
    onClick: () => onSelect(opt),
    text: opt
  }))));
};

Selector.defaultProps = {
  options: []
};
Selector.propTypes = {
  onChange: prop_types_default.a.func.isRequired,
  options: prop_types_default.a.array
};
/* harmony default export */ var Selector_Selector = (Selector);
// EXTERNAL MODULE: ./src/components/Selector/selector.scss
var selector = __webpack_require__(388);

// CONCATENATED MODULE: ./src/components/Selector/index.js


/* harmony default export */ var components_Selector = (Selector_Selector);
// CONCATENATED MODULE: ./src/pages/AlbumListPage/AlbumListPage.jsx
function AlbumListPage_slicedToArray(arr, i) { return AlbumListPage_arrayWithHoles(arr) || AlbumListPage_iterableToArrayLimit(arr, i) || AlbumListPage_unsupportedIterableToArray(arr, i) || AlbumListPage_nonIterableRest(); }

function AlbumListPage_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function AlbumListPage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AlbumListPage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AlbumListPage_arrayLikeToArray(o, minLen); }

function AlbumListPage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function AlbumListPage_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function AlbumListPage_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







const AlbumListPage = ({
  albums,
  genres,
  getAllAlbums,
  loading
}) => {
  const _useState = Object(react["useState"])(albums),
        _useState2 = AlbumListPage_slicedToArray(_useState, 2),
        filteredAlbums = _useState2[0],
        setFilteredAlbums = _useState2[1];

  const _useState3 = Object(react["useState"])(genres),
        _useState4 = AlbumListPage_slicedToArray(_useState3, 2),
        filteredGenres = _useState4[0],
        setFilteredGenres = _useState4[1];

  const _useState5 = Object(react["useState"])(undefined),
        _useState6 = AlbumListPage_slicedToArray(_useState5, 2),
        search = _useState6[0],
        setSearch = _useState6[1];

  const isSelected = ({
    artist,
    name,
    genre
  }) => -1 < filteredGenres.indexOf(genre) && (-1 < artist.toLowerCase().indexOf(search.toLowerCase()) || -1 < name.toLowerCase().indexOf(search.toLowerCase()));

  Object(react["useEffect"])(() => {
    getAllAlbums();
  }, []);
  Object(react["useEffect"])(() => {
    if (albums && search) {
      setFilteredAlbums(albums.filter(album => isSelected(album)));
    } else if (albums) {
      setFilteredAlbums(albums);
    }
  }, [albums, search]);
  Object(react["useEffect"])(() => {
    if (filteredGenres.length !== (genres === null || genres === void 0 ? void 0 : genres.length) || (filteredAlbums === null || filteredAlbums === void 0 ? void 0 : filteredAlbums.length) !== (albums === null || albums === void 0 ? void 0 : albums.length)) {
      setFilteredAlbums(albums.filter(album => isSelected(album)));
    }
  }, [filteredGenres]);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "albums-container"
  }, /*#__PURE__*/react_default.a.createElement("h1", null, "Top 100 Albums in iTunes USA"), /*#__PURE__*/react_default.a.createElement(components_SearchBar, {
    onSearch: setSearch
  }), !!(genres === null || genres === void 0 ? void 0 : genres.length) && /*#__PURE__*/react_default.a.createElement(components_Selector, {
    options: genres,
    onChange: setFilteredGenres
  }), loading && /*#__PURE__*/react_default.a.createElement("div", null, "LOADING"), /*#__PURE__*/react_default.a.createElement(AlbumsList, {
    albums: filteredAlbums,
    genres: genres
  }));
};

AlbumListPage.defaultProps = {
  albums: [],
  genres: [],
  loading: false
};
AlbumListPage.propTypes = {
  albums: prop_types_default.a.array,
  genres: prop_types_default.a.array,
  getAllAlbums: prop_types_default.a.func.isRequired,
  loading: prop_types_default.a.bool
};
/* harmony default export */ var AlbumListPage_AlbumListPage = (AlbumListPage);
// EXTERNAL MODULE: ./src/pages/AlbumListPage/albumListPage.scss
var albumListPage = __webpack_require__(390);

// CONCATENATED MODULE: ./src/pages/AlbumListPage/index.js


/* harmony default export */ var pages_AlbumListPage = (AlbumListPage_AlbumListPage);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 31 modules
var format = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(67);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/actions/ApiWrapper.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


const get = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", axios_default.a.get(url));

        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));

  return function get(_x) {
    return _ref.apply(this, arguments);
  };
}();
const post = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, params) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", axios_default.a.post(url, params));

        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));

  return function post(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
const put = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url, params) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", axios_default.a.put(url, params));

        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));

  return function put(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
const remove = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(url, params) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", axios_default.a.delete(url, params));

        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));

  return function remove(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();
// CONCATENATED MODULE: ./src/actions/genres/genres.js


const getAlbumGenres = albums => {
  let genres = [];

  if (albums === null || albums === void 0 ? void 0 : albums.length) {
    const all = albums.map(({
      genre
    }) => genre);
    genres = all.filter((genre, idx, self) => self.indexOf(genre) === idx).sort();
  }

  return genres;
};

const setAlbumGenres = albums => dispatch => {
  dispatch({
    type: GENRES.SET_ALL,
    genres: getAlbumGenres(albums)
  });
};

/* harmony default export */ var actions_genres_genres = (setAlbumGenres);
// CONCATENATED MODULE: ./src/actions/albums/albums.js




const ITUNES_TOP_100 = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';
const LOADING = {
  type: ALBUMS.LOADING
};
const LOADING_END = {
  type: ALBUMS.LOADING_END
};
const albums_setSelectedAlbum = album => dispatch => {
  dispatch({
    type: ALBUMS.SET,
    album
  });
};
const setAlbums = albums => dispatch => {
  dispatch({
    type: ALBUMS.SET_ALL,
    albums
  });
};

const formatAlbum = (album, position) => {
  var _album$imName, _album$imArtist, _album$imArtist2, _album$imArtist2$attr, _album$id, _album$id$attributes, _album$imImage, _album$imImage2, _album$imReleaseDate, _album$id2, _album$link, _album$link$attribute, _album$category, _album$category$attri, _album$category2, _album$category2$attr, _album$imPrice, _album$imItemCount, _album$rights;

  return album ? {
    name: (_album$imName = album['im:name']) === null || _album$imName === void 0 ? void 0 : _album$imName.label,
    artist: (_album$imArtist = album['im:artist']) === null || _album$imArtist === void 0 ? void 0 : _album$imArtist.label,
    artistLink: (_album$imArtist2 = album['im:artist']) === null || _album$imArtist2 === void 0 ? void 0 : (_album$imArtist2$attr = _album$imArtist2.attributes) === null || _album$imArtist2$attr === void 0 ? void 0 : _album$imArtist2$attr.href,
    id: (_album$id = album.id) === null || _album$id === void 0 ? void 0 : (_album$id$attributes = _album$id.attributes) === null || _album$id$attributes === void 0 ? void 0 : _album$id$attributes['im:id'],
    image: (_album$imImage = album['im:image']) === null || _album$imImage === void 0 ? void 0 : (_album$imImage2 = _album$imImage[album['im:image'].length - 1]) === null || _album$imImage2 === void 0 ? void 0 : _album$imImage2.label,
    releaseDate: ((_album$imReleaseDate = album['im:releaseDate']) === null || _album$imReleaseDate === void 0 ? void 0 : _album$imReleaseDate.label) ? Object(format["a" /* default */])(new Date(album['im:releaseDate'].label), 'dd/MM/YYY') : null,
    position: position + 1,
    link: ((_album$id2 = album.id) === null || _album$id2 === void 0 ? void 0 : _album$id2.label) || ((_album$link = album.link) === null || _album$link === void 0 ? void 0 : (_album$link$attribute = _album$link.attributes) === null || _album$link$attribute === void 0 ? void 0 : _album$link$attribute.href),
    genre: (_album$category = album.category) === null || _album$category === void 0 ? void 0 : (_album$category$attri = _album$category.attributes) === null || _album$category$attri === void 0 ? void 0 : _album$category$attri.label,
    genreLink: (_album$category2 = album.category) === null || _album$category2 === void 0 ? void 0 : (_album$category2$attr = _album$category2.attributes) === null || _album$category2$attr === void 0 ? void 0 : _album$category2$attr.scheme,
    price: (_album$imPrice = album['im:price']) === null || _album$imPrice === void 0 ? void 0 : _album$imPrice.label,
    totalSongs: (_album$imItemCount = album['im:itemCount']) === null || _album$imItemCount === void 0 ? void 0 : _album$imItemCount.label,
    rights: (_album$rights = album.rights) === null || _album$rights === void 0 ? void 0 : _album$rights.label
  } : null;
};

const formatAlbums = albums => (albums === null || albums === void 0 ? void 0 : albums.length) ? albums.map(formatAlbum) : [];

const albums_getAllAlbums = () => dispatch => {
  dispatch(LOADING);
  return new Promise((resolve, reject) => {
    get(ITUNES_TOP_100).then(response => {
      const albums = formatAlbums(response.data.feed.entry);
      dispatch(actions_genres_genres(albums));
      dispatch(setAlbums(albums));
      resolve(albums);
      dispatch(LOADING_END);
    }).catch(err => {
      reject(err);
      dispatch(LOADING_END);
    });
  });
};
const albums_getAlbumById = albumId => (dispatch, getState) => {
  dispatch(LOADING);
  const albums = getState().albums.albums;

  if (albums === null || albums === void 0 ? void 0 : albums.length) {
    dispatch(albums_setSelectedAlbum(albums.find(album => album.id === albumId)));
    dispatch(LOADING_END);
  } else {
    dispatch(albums_getAllAlbums()).then(foundAlbums => {
      dispatch(albums_setSelectedAlbum(foundAlbums.find(album => album.id === albumId)));
      dispatch(LOADING_END);
    }).catch(() => {
      dispatch(LOADING_END);
    });
  }
};
// CONCATENATED MODULE: ./src/containers/albumList/index.js
function albumList_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function albumList_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { albumList_ownKeys(Object(source), true).forEach(function (key) { albumList_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { albumList_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function albumList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const mapStateToProps = ({
  albums,
  genres
}) => ({
  albums: albums.albums,
  genres: genres.genres,
  loading: albums.loading
});

const mapDispatchToProps = dispatch => albumList_objectSpread({}, Object(redux["b" /* bindActionCreators */])({
  getAllAlbums: albums_getAllAlbums
}, dispatch));

/* harmony default export */ var albumList = (Object(react_router["g" /* withRouter */])(Object(es["b" /* connect */])(mapStateToProps, mapDispatchToProps)(pages_AlbumListPage)));
// CONCATENATED MODULE: ./src/pages/AlbumPage/AlbumPage.jsx






const AlbumPage = ({
  album,
  getAlbumById,
  loading,
  setSelectedAlbum
}) => {
  const _useParams = Object(react_router["f" /* useParams */])(),
        albumId = _useParams.albumId;

  Object(react["useEffect"])(() => {
    if (albumId && !(album === null || album === void 0 ? void 0 : album.id)) {
      getAlbumById(albumId);
    }

    return () => setSelectedAlbum();
  }, []);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "album-page"
  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* NavLink */], {
    to: MAIN_URL
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fas fa-arrow-left"
  })), loading || !album ? /*#__PURE__*/react_default.a.createElement("div", null, "LOADING...") : /*#__PURE__*/react_default.a.createElement(components_Album, {
    album: album,
    fullInfo: true
  }));
};

AlbumPage.defaultProps = {
  album: {},
  loading: false
};
AlbumPage.propTypes = {
  album: prop_types_default.a.object,
  getAlbumById: prop_types_default.a.func.isRequired,
  loading: prop_types_default.a.bool,
  setSelectedAlbum: prop_types_default.a.func.isRequired
};
/* harmony default export */ var AlbumPage_AlbumPage = (AlbumPage);
// EXTERNAL MODULE: ./src/pages/AlbumPage/albumPage.scss
var albumPage = __webpack_require__(408);

// CONCATENATED MODULE: ./src/pages/AlbumPage/index.js


/* harmony default export */ var pages_AlbumPage = (AlbumPage_AlbumPage);
// CONCATENATED MODULE: ./src/containers/album/index.js
function album_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function album_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { album_ownKeys(Object(source), true).forEach(function (key) { album_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { album_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function album_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const album_mapStateToProps = ({
  albums
}) => ({
  album: albums.album,
  loading: albums.loading
});

const album_mapDispatchToProps = dispatch => album_objectSpread({}, Object(redux["b" /* bindActionCreators */])({
  getAlbumById: albums_getAlbumById,
  setSelectedAlbum: albums_setSelectedAlbum
}, dispatch));

/* harmony default export */ var containers_album = (Object(react_router["g" /* withRouter */])(Object(es["b" /* connect */])(album_mapStateToProps, album_mapDispatchToProps)(pages_AlbumPage)));
// CONCATENATED MODULE: ./src/pages/Main.jsx






const Main = () => /*#__PURE__*/react_default.a.createElement("main", null, /*#__PURE__*/react_default.a.createElement("div", {
  id: "main-container"
}, /*#__PURE__*/react_default.a.createElement(react_router["c" /* Switch */], null, /*#__PURE__*/react_default.a.createElement(react_router["a" /* Route */], {
  exact: true,
  component: containers_album,
  path: ALBUM_URL
}), /*#__PURE__*/react_default.a.createElement(react_router["a" /* Route */], {
  exact: true,
  component: albumList,
  path: MAIN_URL
}))));

/* harmony default export */ var pages_Main = (Main);
// CONCATENATED MODULE: ./src/App.jsx






const App = () => /*#__PURE__*/react_default.a.createElement(es["a" /* Provider */], {
  store: src_store
}, /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* BrowserRouter */], null, /*#__PURE__*/react_default.a.createElement(pages_Main, null)));

/* harmony default export */ var src_App = (App);
// EXTERNAL MODULE: ./src/styles/animations.scss
var animations = __webpack_require__(410);

// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(412);

// CONCATENATED MODULE: ./src/index.js





react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(src_App, null), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSWNvbi9pY29uLnNjc3M/MWQ3OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL2ljb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FeHRlcm5hbExpbmsvZXh0ZXJuYWxMaW5rLnNjc3M/NTJiMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FeHRlcm5hbExpbmsvZXh0ZXJuYWxMaW5rLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxidW0vYWxidW0uc2Nzcz8wMzIwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FsYnVtL2FsYnVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxidW1zTGlzdC9hbGJ1bXNMaXN0LnNjc3M/YmY1MSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BbGJ1bXNMaXN0L2FsYnVtc0xpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3M/YzRiNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL3NlYXJjaEJhci5zY3NzP2RmN2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL3NlYXJjaEJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlbGVjdG9yL3NlbGVjdG9yLnNjc3M/NTI2ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWxlY3Rvci9zZWxlY3Rvci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9BbGJ1bUxpc3RQYWdlL2FsYnVtTGlzdFBhZ2Uuc2Nzcz9kNmE0Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9BbGJ1bUxpc3RQYWdlL2FsYnVtTGlzdFBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQWxidW1QYWdlL2FsYnVtUGFnZS5zY3NzPzc3YTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0FsYnVtUGFnZS9hbGJ1bVBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuc2Nzcz8yOTQ4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz80YzM3Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZGlzcGF0Y2hzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hbGJ1bXMvYWxidW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9nZW5yZXMvZ2VucmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSWNvbi9JY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V4dGVybmFsTGluay9FeHRlcm5hbExpbmsuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V4dGVybmFsTGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BbGJ1bS9BbGJ1bUluZm8vQWxidW1JbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BbGJ1bS9BbGJ1bS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxidW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxidW1zTGlzdC9BbGJ1bUxpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FsYnVtc0xpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWxlY3Rvci9TZWxlY3Rvci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VsZWN0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0FsYnVtTGlzdFBhZ2UvQWxidW1MaXN0UGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0FsYnVtTGlzdFBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQXBpV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9nZW5yZXMvZ2VucmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2FsYnVtcy9hbGJ1bXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvYWxidW1MaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9BbGJ1bVBhZ2UvQWxidW1QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQWxidW1QYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL2FsYnVtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9NYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQUxCVU1TIiwiTE9BRElORyIsIkxPQURJTkdfRU5EIiwiU0VUIiwiU0VUX0FMTCIsIkdFTlJFUyIsImluaXRpYWxTdGF0ZSIsImFsYnVtIiwidW5kZWZpbmVkIiwiYWxidW1zIiwibG9hZGluZyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImdlbnJlcyIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwibWlkZGxld2FyZXMiLCJ0aHVua01pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlcnMiLCJhcHBseU1pZGRsZXdhcmUiLCJJY29uIiwiaWNvbiIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJFeHRlcm5hbExpbmsiLCJjbGFzc05hbWUiLCJ0ZXh0IiwiQWxidW1JbmZvIiwiZnVsbEluZm8iLCJwb3NpdGlvbiIsImltYWdlIiwibmFtZSIsImFydGlzdExpbmsiLCJhcnRpc3QiLCJyaWdodHMiLCJnZW5yZUxpbmsiLCJnZW5yZSIsInByaWNlIiwidG90YWxTb25ncyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiTUFJTl9VUkwiLCJwcm9jZXNzIiwiQUxCVU1fVVJMIiwiZ2V0Q2xhc3NOYW1lIiwiY2xhc3NuYW1lIiwiQWxidW0iLCJpZCIsIkFsYnVtTGlzdCIsImxlbmd0aCIsIm1hcCIsImFycmF5IiwiQnV0dG9uIiwiU2VhcmNoQmFyIiwiY2xlYXJJY29uIiwib25TZWFyY2giLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsIm91dHNpZGVSZWYiLCJ1c2VSZWYiLCJpbnB1dFJlZiIsImNsZWFyIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsInVzZUVmZmVjdCIsImZvY3VzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZ1bmMiLCJTZWxlY3RvciIsIm9uQ2hhbmdlIiwib3B0aW9ucyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJzZWxlY3RlZEFsbCIsInNldFNlbGVjdGVkQWxsIiwic2V0QWxsU2VsZWN0ZWQiLCJuZXdTZWxlY3RlZCIsImZvckVhY2giLCJvcHQiLCJwdXNoIiwib25TZWxlY3QiLCJvcHRpb24iLCJpbmRleCIsImluZGV4T2YiLCJmaWx0ZXIiLCJzYW1lTGVuZ3RoIiwiQWxidW1MaXN0UGFnZSIsImdldEFsbEFsYnVtcyIsImZpbHRlcmVkQWxidW1zIiwic2V0RmlsdGVyZWRBbGJ1bXMiLCJmaWx0ZXJlZEdlbnJlcyIsInNldEZpbHRlcmVkR2VucmVzIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiaXNTZWxlY3RlZCIsInRvTG93ZXJDYXNlIiwiZ2V0IiwidXJsIiwiYXhpb3MiLCJwb3N0IiwicGFyYW1zIiwicHV0IiwicmVtb3ZlIiwiZGVsZXRlIiwiZ2V0QWxidW1HZW5yZXMiLCJhbGwiLCJpZHgiLCJzZWxmIiwic29ydCIsInNldEFsYnVtR2VucmVzIiwiZGlzcGF0Y2giLCJJVFVORVNfVE9QXzEwMCIsInNldFNlbGVjdGVkQWxidW0iLCJzZXRBbGJ1bXMiLCJmb3JtYXRBbGJ1bSIsImxhYmVsIiwiYXR0cmlidXRlcyIsImhyZWYiLCJyZWxlYXNlRGF0ZSIsImZvcm1hdCIsIkRhdGUiLCJsaW5rIiwiY2F0ZWdvcnkiLCJzY2hlbWUiLCJmb3JtYXRBbGJ1bXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJmZWVkIiwiZW50cnkiLCJjYXRjaCIsImVyciIsImdldEFsYnVtQnlJZCIsImFsYnVtSWQiLCJnZXRTdGF0ZSIsImZpbmQiLCJmb3VuZEFsYnVtcyIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImJpbmRBY3Rpb25DcmVhdG9ycyIsIndpdGhSb3V0ZXIiLCJjb25uZWN0IiwiQWxidW1QYWdlIiwidXNlUGFyYW1z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UUFBRCwyQkFDdEJnQywyQ0FBa0IsQ0FDbkI7QUFDRVAsbUNBREY7QUFFRXZCLDJDQUFnQkE7QUFGbEIsQ0FEbUIsRUFLbkJGLFFBTG1CLENBREksQ0FBM0I7O0FBVWVpQywrRkFBVSxDQUFDQyw2QkFBTyxDQUFDSixxQkFBRCxFQUFrQkMsd0JBQWxCLENBQVAsQ0FBNkNJLGVBQTdDLENBQUQsQ0FBekIsRTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRSxJQUFJLEdBQUcsbUJBQ1gseURBRUU7QUFBSyxJQUFFLEVBQUM7QUFBUixnQkFDRSw4QkFBQyw4QkFBRCxxQkFDRSw4QkFBQyw2QkFBRDtBQUFPLE9BQUssTUFBWjtBQUFhLFdBQVMsRUFBRUYsZ0JBQXhCO0FBQW1DLE1BQUksRUFBRTlHLFNBQVNBO0FBQWxELEVBREYsZUFFRSw4QkFBQyw2QkFBRDtBQUFPLE9BQUssTUFBWjtBQUFhLFdBQVMsRUFBRW1ELFNBQXhCO0FBQXVDLE1BQUksRUFBRXJELFFBQVFBO0FBQXJELEVBRkYsQ0FERixDQUZGLENBREY7O0FBWWVrSCxtREFBZixFOztBQ2xCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLE1BQU1DLEdBQUcsR0FBRyxtQkFDViw4QkFBQyxzQkFBRDtBQUFVLE9BQUssRUFBRWhKLFNBQUtBO0FBQXRCLGdCQUNFLDhCQUFDLHlDQUFELHFCQUNFLDhCQUFDLFVBQUQsT0FERixDQURGLENBREY7O0FBUWVnSiwrQ0FBZixFOzs7Ozs7OztBQ2ZBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQUMsbUJBQVEsQ0FBQ0MsTUFBVCxlQUFnQiw4QkFBQyxPQUFELE9BQWhCLEVBQXlCdEYsUUFBUSxDQUFDdUYsY0FBVCxDQUF3QixNQUF4QixDQUF6QixFIiwiZmlsZSI6ImluZGV4X2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MDogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9tdXNpYy1jaGFsbGVuZ2UvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFsxNjQsMV0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ljb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1c3RvbS1pY29ue21hcmdpbjowO2hlaWdodDo4cHh9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZXh0ZXJuYWxMaW5rLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5leHRlcm5hbC1saW5re2NvbG9yOiMyODI4Mjh9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWxidW0uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFsYnVte2Rpc3BsYXk6ZmxleH0uYWxidW0gLmFsYnVtLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7cGFkZGluZzo4cHg7aGVpZ2h0OmNhbGMoMTAwJSAtIDMycHgpO3dpZHRoOmNhbGMoMTAwJSAtIDE2cHgpO292ZXJmbG93OnZpc2libGV9LmFsYnVtIC5hbGJ1bS1jb250YWluZXI+KntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO3dpZHRoOmNhbGMoMTAwJSAtIDE2cHgpO2hlaWdodDpjYWxjKDEwMCUgLSAxNnB4KTtwYWRkaW5nOjE2cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6NHB4O3RyYW5zaXRpb246bGluZWFyIGFsbCAuMjVzO292ZXJmbG93OmhpZGRlbjt0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojMjgyODI4O2JvcmRlcjoxcHggc29saWQgcmdiYSgxMzYsMTM2LDEzNiwwLjIpfS5hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLXBvc2l0aW9ue2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjE0cHg7bWluLXdpZHRoOjMycHh9LmFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mb3tmbGV4OjE7b3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm8gLmFsYnVtLWltYWdle2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2hlaWdodDoxMDAlfS5hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm8gLmFsYnVtLWltYWdlIGltZ3toZWlnaHQ6MTAwJTttYXgtd2lkdGg6MTAwJTtvYmplY3QtZml0OmNvdmVyfS5hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm8gYSwuYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZvIHB7bWFyZ2luOjA7d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7b3ZlcmZsb3c6aGlkZGVuO21heC13aWR0aDoxMDAlO3RleHQtZGVjb3JhdGlvbjpub25lfS5hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLnRvcC1sYWJlbHthbGlnbi1zZWxmOmZsZXgtc3RhcnQ7cGFkZGluZzo4cHg7Ym9yZGVyLXJhZGl1czo0cHg7cG9zaXRpb246YWJzb2x1dGU7Y29sb3I6I2ZmZn0uYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qOmhvdmVye3RyYW5zZm9ybTpzY2FsZSgxLjAyKX0uYWxidW0udG9wLWFsYnVtIC5hbGJ1bS1jb250YWluZXI+KntiYWNrZ3JvdW5kLWNvbG9yOiNjMWQwZDU7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDQ3LDk3LDExNiwwLjIpfS5hbGJ1bS50b3AtYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1wb3NpdGlvbntmb250LXNpemU6MzJweH0uYWxidW0udG9wLWFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mbyBhLC5hbGJ1bS50b3AtYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZvIHB7Zm9udC1zaXplOjI0cHh9LmFsYnVtLnRvcC1hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLnRvcC1sYWJlbHtmb250LXNpemU6MzJweDtiYWNrZ3JvdW5kLWNvbG9yOiMyZjYxNzR9LmFsYnVtLnRvcC10aHJlZS1hbGJ1bSAuYWxidW0tY29udGFpbmVyPip7YmFja2dyb3VuZC1jb2xvcjojZDdlOWU1O2JvcmRlcjoxcHggc29saWQgcmdiYSgxMjAsMTgyLDE2OSwwLjIpfS5hbGJ1bS50b3AtdGhyZWUtYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1wb3NpdGlvbntmb250LXNpemU6MjRweH0uYWxidW0udG9wLXRocmVlLWFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mbyBhLC5hbGJ1bS50b3AtdGhyZWUtYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZvIHB7Zm9udC1zaXplOjIwcHh9LmFsYnVtLnRvcC10aHJlZS1hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLnRvcC1sYWJlbHtmb250LXNpemU6MTZweDtiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YTl9LmFsYnVtLnRvcC1zaXgtYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qe2JhY2tncm91bmQtY29sb3I6I2ZiZjFkZTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjQyLDIwOCwxNDQsMC4yKX0uYWxidW0udG9wLXNpeC1hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLXBvc2l0aW9ue2ZvbnQtc2l6ZToyMHB4fS5hbGJ1bS50b3Atc2l4LWFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAudG9wLWxhYmVse2JhY2tncm91bmQtY29sb3I6I2YyZDA5MH0uYWxidW0udG9wLXRlbi1hbGJ1bSAuYWxidW0tY29udGFpbmVyPip7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDI0MiwyMDgsMTQ0LDAuNCl9LmFsYnVtLnRvcC10ZW4tYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1wb3NpdGlvbntmb250LXNpemU6MTZweH0uYWxidW0udG9wLXRlbi1hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLnRvcC1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOiNmMmQwOTB9LmFsYnVtLmFsYnVtLWZ1bGwgLmFsYnVtLWNvbnRhaW5lcj4qe2JhY2tncm91bmQtY29sb3I6I2ZmZjtjdXJzb3I6YXV0b30uYWxidW0uYWxidW0tZnVsbCAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm97ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LmFsYnVtLmFsYnVtLWZ1bGwgLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZvIC5hbGJ1bS1pbWFnZSBpbWd7aGVpZ2h0OjIwMHB4O3dpZHRoOjIwMHB4O21hcmdpbi1yaWdodDoxNnB4fS5hbGJ1bS5hbGJ1bS1mdWxsIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mbyAuYWxidW0tZnVsbC1pbmZve2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWF4LXdpZHRoOjEwMCV9LmFsYnVtLmFsYnVtLWZ1bGwgLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZvIC5hbGJ1bS1mdWxsLWluZm8+cCwuYWxidW0uYWxidW0tZnVsbCAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm8gLmFsYnVtLWZ1bGwtaW5mbz5kaXZ7bWF4LXdpZHRoOjEwMCU7d29yZC1icmVhazpicmVhay13b3JkO3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O21hcmdpbjo4cHggMH0uYWxidW0uYWxidW0tZnVsbCAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm8gLmFsYnVtLWZ1bGwtaW5mbyAuYWxidW0tbmFtZXtmb250LXNpemU6MzJweDtmb250LXdlaWdodDpib2xkfS5hbGJ1bS5hbGJ1bS1mdWxsIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mbyAuYWxidW0tZnVsbC1pbmZvIGF7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtmb250LXNpemU6MjRweDtjb2xvcjojMjM0ZjYxfS5hbGJ1bS5hbGJ1bS1mdWxsIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mbyAuYWxidW0tZnVsbC1pbmZvIC5hbGJ1bS1yaWdodHN7Y29sb3I6Izg4ODttYXJnaW46OHB4IDA7Zm9udC1zaXplOjEycHh9LmFsYnVtLmFsYnVtLWZ1bGwgLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZvIC5hbGJ1bS1mdWxsLWluZm8gLmFsYnVtLXByaWNlIHNwYW57Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YTk7cGFkZGluZzo4cHg7Ym9yZGVyLXJhZGl1czo0cHh9LmFsYnVtLmFsYnVtLWZ1bGwgLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZvIC5hbGJ1bS1mdWxsLWluZm8gLmFsYnVtLWdlbnJlIGF7bWFyZ2luLWxlZnQ6OHB4O2ZvbnQtc2l6ZToxNHB4fS5hbGJ1bS5hbGJ1bS1mdWxsIC5hbGJ1bS1jb250YWluZXI+Kjpob3Zlcnt0cmFuc2Zvcm06bm9uZTtjdXJzb3I6YXV0b31AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7LmFsYnVtLmFsYnVtLWZ1bGwgLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZve2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWxidW1zTGlzdC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYWxidW0tbGlzdHtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7bWF4LXdpZHRoOjEyMDBweDt3aWR0aDoxMDB2d30uYWxidW0tbGlzdD4qe2ZsZXg6MCAyMCU7d2lkdGg6MjAlfS5hbGJ1bS1saXN0PiogLmFsYnVtLWltYWdle21hcmdpbi1ib3R0b206MTZweH0uYWxidW0tbGlzdD4qOmZpcnN0LWNoaWxke21pbi1oZWlnaHQ6NDAwcHh9LmFsYnVtLWxpc3Q+KjpudGgtY2hpbGQoLW4rMyk6bm90KDpmaXJzdC1jaGlsZCl7aGVpZ2h0OjQwdmg7bWluLWhlaWdodDozNTBweH0uYWxidW0tbGlzdD4qOm50aC1jaGlsZCgtbis2KTpub3QoOm50aC1jaGlsZCgtbiszKSl7aGVpZ2h0OjMwdmg7bWluLWhlaWdodDozMDBweH0uYWxidW0tbGlzdD4qOm50aC1jaGlsZCgtbisxMCk6bm90KDpudGgtY2hpbGQoLW4rNikpe21pbi1oZWlnaHQ6MjUwcHh9LmFsYnVtLWxpc3Q+KjpudGgtY2hpbGQoLW4rMjApOm5vdCg6bnRoLWNoaWxkKC1uKzEwKSl7bWluLWhlaWdodDoyMDBweH0uYWxidW0tbGlzdD4qOm50aC1jaGlsZCgtbis1MCk6bm90KDpudGgtY2hpbGQoLW4rMjApKXttaW4taGVpZ2h0OjE1MHB4O2ZvbnQtc2l6ZToxMnB4fS5hbGJ1bS1saXN0Pio6bnRoLWNoaWxkKC1uKzEwMCk6bm90KDpudGgtY2hpbGQoLW4rNTApKXttYXgtaGVpZ2h0OjEwMHB4O2ZvbnQtc2l6ZToxMnB4fS5hbGJ1bS1saXN0Pio6bnRoLWNoaWxkKC1uKzEwMCk6bm90KDpudGgtY2hpbGQoLW4rNTApKSAuYWxidW0tY29udGFpbmVyIC5hbGJ1bS1pbmZve2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uYWxidW0tbGlzdD4qOm50aC1jaGlsZCgtbisxMDApOm5vdCg6bnRoLWNoaWxkKC1uKzUwKSkgLmFsYnVtLWNvbnRhaW5lciAuYWxidW0taW5mbyAuYWxidW0taW1hZ2V7bWFyZ2luLWJvdHRvbTowO21hcmdpbi1yaWdodDo4cHh9LmFsYnVtLWxpc3Q+KjpudGgtY2hpbGQoLW4rMTAwKTpub3QoOm50aC1jaGlsZCgtbis1MCkpIC5hbGJ1bS1jb250YWluZXIgLmFsYnVtLWluZm8gLmFsYnVtLWltYWdlIGltZ3ttYXgtd2lkdGg6NTBweH1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCl7LmFsYnVtLWxpc3Q+KjpmaXJzdC1jaGlsZHtmbGV4OjAgMTAwJTt3aWR0aDoxMDAlfS5hbGJ1bS1saXN0Pio6bnRoLWNoaWxkKC1uKzMpOm5vdCg6Zmlyc3QtY2hpbGQpe2ZsZXg6MCA1MCU7d2lkdGg6NTAlfS5hbGJ1bS1saXN0Pio6bnRoLWNoaWxkKC1uKzYpOm5vdCg6bnRoLWNoaWxkKC1uKzMpKXtmbGV4OjAgMzMuMzMzMyU7d2lkdGg6MzMuMzMzMyV9LmFsYnVtLWxpc3Q+KjpudGgtY2hpbGQoLW4rMTApOm5vdCg6bnRoLWNoaWxkKC1uKzYpKXtmbGV4OjAgMjUlO3dpZHRoOjI1JX0uYWxidW0tbGlzdD4qOm50aC1jaGlsZCgtbisyMCk6bm90KDpudGgtY2hpbGQoLW4rMTApKXtmbGV4OjAgMjAlO3dpZHRoOjIwJX19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpey5hbGJ1bS1saXN0Pip7ZmxleDowIDEwMCU7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDo3NXB4fS5hbGJ1bS1saXN0PiogLmFsYnVtLWNvbnRhaW5lciAuYWxidW0taW5mb3tmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LmFsYnVtLWxpc3Q+KiAuYWxidW0tY29udGFpbmVyIC5hbGJ1bS1pbmZvIHB7d29yZC1icmVhazpicmVhay13b3JkO3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2ZsZXg6MX0uYWxidW0tbGlzdD4qIC5hbGJ1bS1jb250YWluZXIgLmFsYnVtLWluZm8gLmFsYnVtLWltYWdle2ZsZXg6MTttYXJnaW4tcmlnaHQ6OHB4O21hcmdpbi1ib3R0b206MH0uYWxidW0tbGlzdD4qOmZpcnN0LWNoaWxke2hlaWdodDozMHZoO21pbi1oZWlnaHQ6MjUwcHh9LmFsYnVtLWxpc3Q+KjpudGgtY2hpbGQoLW4rMyk6bm90KDpmaXJzdC1jaGlsZCl7aGVpZ2h0OjI1dmg7bWluLWhlaWdodDoyMDBweH0uYWxidW0tbGlzdD4qOm50aC1jaGlsZCgtbis2KTpub3QoOm50aC1jaGlsZCgtbiszKSl7aGVpZ2h0OjIwdmg7bWluLWhlaWdodDoxNzVweH0uYWxidW0tbGlzdD4qOm50aC1jaGlsZCgtbisxMCk6bm90KDpudGgtY2hpbGQoLW4rNikpe2hlaWdodDoxOHZoO21pbi1oZWlnaHQ6MTUwcHh9LmFsYnVtLWxpc3Q+KjpudGgtY2hpbGQoLW4rNTApOm5vdCg6bnRoLWNoaWxkKC1uKzEwKSl7aGVpZ2h0OjE1dmg7bWluLWhlaWdodDoxMjVweH19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jdXN0b20tYnRue3BhZGRpbmc6OHB4IDE2cHg7Zm9udC1zaXplOjE2cHg7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjA7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMyZjYxNzQ7dHJhbnNpdGlvbjpsaW5lYXIgb3BhY2l0eSAuMXM7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaEJhci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2VhcmNoLWJhcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6IzJmNjE3NDtjb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6NHB4fS5zZWFyY2gtYmFyIC5jdXN0b20tYnRue2hlaWdodDozMnB4O3dpZHRoOjMycHg7cGFkZGluZzowfS5zZWFyY2gtYmFyIGlucHV0e2ZvbnQtc2l6ZToxNnB4O3BhZGRpbmc6MCA0cHg7aGVpZ2h0OjMycHg7bWF4LXdpZHRoOjIwMHB4O29wYWNpdHk6MTtvdXRsaW5lLXdpZHRoOjA7Ym9yZGVyOjA7YmFja2dyb3VuZDp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOmFsbCBsaW5lYXIgLjI1cztjb2xvcjojZmZmfS5zZWFyY2gtYmFyIGlucHV0OjpwbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuNSk7cG9pbnRlci1ldmVudHM6bm9uZX0uc2VhcmNoLWJhciBpbnB1dC5oaWRkZW57cGFkZGluZzowO21heC13aWR0aDowO29wYWNpdHk6MH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zZWxlY3Rvci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2VsZWN0b3J7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uc2VsZWN0b3I+LmN1c3RvbS1idG57aGVpZ2h0OjMycHg7d2lkdGg6MzJweDtwYWRkaW5nOjB9LnNlbGVjdG9yIC5zZWxlY3Rvci1vcHRpb25ze2Rpc3BsYXk6ZmxleDtvcGFjaXR5OjE7bWFyZ2luLXRvcDoxNnB4O3BhZGRpbmc6NHB4O21heC13aWR0aDoxMDB2aDt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjI1c30uc2VsZWN0b3IgLnNlbGVjdG9yLW9wdGlvbnM+LmN1c3RvbS1idG57b3BhY2l0eTowLjU7aGVpZ2h0OjMycHg7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIC4yNXM7Zm9udC1zaXplOjEycHg7bWFyZ2luLXJpZ2h0OjRweH0uc2VsZWN0b3IgLnNlbGVjdG9yLW9wdGlvbnM+LmN1c3RvbS1idG4uc2VsZWN0ZWR7b3BhY2l0eToxfS5zZWxlY3RvciAuc2VsZWN0b3Itb3B0aW9ucz4uY3VzdG9tLWJ0bjpsYXN0LWNoaWxke21hcmdpbi1yaWdodDowfS5zZWxlY3RvciAuc2VsZWN0b3Itb3B0aW9ucy5oaWRkZW57b3BhY2l0eTowO21hcmdpbi10b3A6MDtwYWRkaW5nOjAgNHB4O21heC13aWR0aDowfS5zZWxlY3RvciAuc2VsZWN0b3Itb3B0aW9ucy5oaWRkZW4+LmN1c3RvbS1idG57cGFkZGluZzowO29wYWNpdHk6MDtoZWlnaHQ6MDtwb2ludGVyLWV2ZW50czpub25lfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FsYnVtTGlzdFBhZ2Uuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFsYnVtcy1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uYWxidW1zLWNvbnRhaW5lcj4uc2VhcmNoLWJhcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjhweDtib3JkZXItcmFkaXVzOjAgMCA0cHggNHB4fS5hbGJ1bXMtY29udGFpbmVyPi5zZWxlY3Rvcntwb3NpdGlvbjpmaXhlZDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2ZsZXgtZGlyZWN0aW9uOnJvdzt0b3A6OHB4O3JpZ2h0OjA7ei1pbmRleDozfS5hbGJ1bXMtY29udGFpbmVyPi5zZWxlY3Rvcj4uY3VzdG9tLWJ0bnttYXJnaW4tcmlnaHQ6MDtib3JkZXItcmFkaXVzOjRweCAwIDAgNHB4fS5hbGJ1bXMtY29udGFpbmVyPi5zZWxlY3RvciAuc2VsZWN0b3Itb3B0aW9uc3twYWRkaW5nOjRweDttYXJnaW46MDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZC1jb2xvcjojMmY2MTc0O2JvcmRlci1yYWRpdXM6MCAwIDAgNHB4fS5hbGJ1bXMtY29udGFpbmVyPi5zZWxlY3RvciAuc2VsZWN0b3Itb3B0aW9ucz4uY3VzdG9tLWJ0bnttYXJnaW4tcmlnaHQ6MDttYXJnaW4tYm90dG9tOjRweDtiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2YTk7bWF4LXdpZHRoOjIwMHB4fS5hbGJ1bXMtY29udGFpbmVyPi5zZWxlY3RvciAuc2VsZWN0b3Itb3B0aW9ucz4uY3VzdG9tLWJ0bjpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206MH0uYWxidW1zLWNvbnRhaW5lcj4uc2VsZWN0b3IgLnNlbGVjdG9yLW9wdGlvbnMuaGlkZGVue3BhZGRpbmc6NHB4IDB9LmFsYnVtcy1jb250YWluZXI+LnNlbGVjdG9yIC5zZWxlY3Rvci1vcHRpb25zLmhpZGRlbj4uY3VzdG9tLWJ0bnttYXgtd2lkdGg6MH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbGJ1bVBhZ2Uuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFsYnVtLXBhZ2V7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO21heC13aWR0aDoxMjAwcHg7bWFyZ2luLXRvcDo4cHh9LmFsYnVtLXBhZ2U+YXtwb3NpdGlvbjpmaXhlZDt0b3A6MTZweDtsZWZ0OjE2cHg7aGVpZ2h0OjMycHg7d2lkdGg6MzJweDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZC1jb2xvcjojMmY2MTc0O2NvbG9yOiNmZmY7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LmFsYnVtLXBhZ2U+LmFsYnVte3dpZHRoOjEwMCV9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0aW9ucy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmFkZWluey13ZWJraXQtYW5pbWF0aW9uOmZhZGVpbiAwLjVzOy1tb3otYW5pbWF0aW9uOmZhZGVpbiAwLjVzOy1tcy1hbmltYXRpb246ZmFkZWluIDAuNXM7LW8tYW5pbWF0aW9uOmZhZGVpbiAwLjVzO2FuaW1hdGlvbjpmYWRlaW4gMC41c31Aa2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fUAtbW96LWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC1tcy1rZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC1vLWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e2ZvbnQtZmFtaWx5OidNb250c2VycmF0Jywgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDttYXJnaW46MDtjb2xvcjojMjgyODI4Oy13ZWJraXQtZm9udC1zbW9vdGhpbmc6c3VicGl4ZWwtYW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6YXV0b30uc2hhZG93ey13ZWJraXQtYm94LXNoYWRvdzowcHggMCA4cHggMnB4IHJnYmEoMTM2LDEzNiwxMzYsMC4yKTstbW96LWJveC1zaGFkb3c6MHB4IDAgOHB4IDJweCByZ2JhKDEzNiwxMzYsMTM2LDAuMik7Ym94LXNoYWRvdzowcHggMCA4cHggMnB4IHJnYmEoMTM2LDEzNiwxMzYsMC4yKX1tYWlue2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O3dpZHRoOjEwMCU7bWluLWhlaWdodDoxMDB2aDtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmZ9bWFpbiAjbWFpbi1jb250YWluZXJ7d2lkdGg6Y2FsYygxMDAlIC0gMzJweCk7cGFkZGluZzowIDE2cHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiZXhwb3J0IGNvbnN0IEFMQlVNUyA9IHtcbiAgTE9BRElORzogJ0BhbGJ1bXMvTE9BRElORycsXG4gIExPQURJTkdfRU5EOiAnQGFsYnVtcy9MT0FESU5HX0VORCcsXG4gIFNFVDogJ0BhbGJ1bXMvU0VUJyxcbiAgU0VUX0FMTDogJ0BhbGJ1bXMvU0VUX0FMTCcsXG59O1xuXG5leHBvcnQgY29uc3QgR0VOUkVTID0ge1xuICBTRVRfQUxMOiAnQGdlbnJlcy9TRVRfQUxMJyxcbn07XG4iLCJpbXBvcnQgeyBBTEJVTVMgfSBmcm9tICcuLi8uLi91dGlscy9kaXNwYXRjaHMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGFsYnVtOiB1bmRlZmluZWQsXG4gIGFsYnVtczogW10sXG4gIGxvYWRpbmc6IGZhbHNlLFxufTtcblxuY29uc3QgYWxidW1zID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUxCVU1TLlNFVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhbGJ1bTogYWN0aW9uLmFsYnVtIH07XG4gICAgY2FzZSBBTEJVTVMuU0VUX0FMTDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhbGJ1bXM6IGFjdGlvbi5hbGJ1bXMgfTtcbiAgICBjYXNlIEFMQlVNUy5MT0FESU5HOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfTtcbiAgICBjYXNlIEFMQlVNUy5MT0FESU5HX0VORDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhbGJ1bXM7XG4iLCJpbXBvcnQgeyBHRU5SRVMgfSBmcm9tICcuLi8uLi91dGlscy9kaXNwYXRjaHMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGdlbnJlczogW10sXG4gIGxvYWRpbmc6IGZhbHNlLFxufTtcblxuY29uc3QgZ2VucmVzID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgR0VOUkVTLlNFVF9BTEw6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZ2VucmVzOiBhY3Rpb24uZ2VucmVzIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdlbnJlcztcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGFsYnVtcyBmcm9tICcuL2FsYnVtcy9hbGJ1bXMnO1xuaW1wb3J0IGdlbnJlcyBmcm9tICcuL2dlbnJlcy9nZW5yZXMnO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGFsYnVtcyxcbiAgZ2VucmVzLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XG5cbmNvbnN0IG1pZGRsZXdhcmVzID0gWyB0aHVua01pZGRsZXdhcmUgXTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEljb24gPSAoeyBpY29uLCAuLi5yZXN0IH0pID0+IDxpIHsuLi5yZXN0fSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9e2ljb259IC8+O1xuXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWNvbjogdW5kZWZpbmVkLFxufTtcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCAnLi9pY29uLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nO1xuXG5jb25zdCBFeHRlcm5hbExpbmsgPSAoeyBjbGFzc05hbWUsIGljb24sIHRleHQsIC4uLnJlc3QgfSkgPT4gKFxuICA8YSB7Li4ucmVzdH0gY2xhc3NOYW1lPXtgZXh0ZXJuYWwtbGluayR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgIHtpY29uICYmIDxJY29uIGljb249e2ljb259IC8+fVxuICAgIHt0ZXh0fVxuICA8L2E+XG4pO1xuXG5FeHRlcm5hbExpbmsuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICB0ZXh0OiB1bmRlZmluZWQsXG59O1xuXG5FeHRlcm5hbExpbmsucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHRlcm5hbExpbms7XG4iLCJpbXBvcnQgRXh0ZXJuYWxMaW5rIGZyb20gJy4vRXh0ZXJuYWxMaW5rJztcbmltcG9ydCAnLi9leHRlcm5hbExpbmsuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVybmFsTGluaztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEV4dGVybmFsTGluayBmcm9tICcuLi8uLi9FeHRlcm5hbExpbmsnO1xuXG5jb25zdCBBbGJ1bUluZm8gPSAoeyBhbGJ1bSwgZnVsbEluZm8gfSkgPT5cbiAgYWxidW0gJiYgKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtLXBvc2l0aW9uXCI+e2FsYnVtLnBvc2l0aW9ufS48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW0taW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtLWltYWdlXCI+XG4gICAgICAgICAgPGltZyBzcmM9e2FsYnVtLmltYWdlfSBhbHQ9e2FsYnVtLm5hbWV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ZnVsbEluZm8gPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bS1mdWxsLWluZm9cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFsYnVtLW5hbWVcIj57YWxidW0ubmFtZX08L3A+XG4gICAgICAgICAgICA8RXh0ZXJuYWxMaW5rIGhyZWY9e2FsYnVtLmFydGlzdExpbmt9IGRpc2FibGVkPXshZnVsbEluZm99IHRleHQ9e2FsYnVtLmFydGlzdH0gLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFsYnVtLXJpZ2h0c1wiPnthbGJ1bS5yaWdodHN9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bS1nZW5yZVwiPlxuICAgICAgICAgICAgICBHZW5yZTpcbiAgICAgICAgICAgICAgPEV4dGVybmFsTGluayBocmVmPXthbGJ1bS5nZW5yZUxpbmt9IGRpc2FibGVkPXshZnVsbEluZm99IHRleHQ9e2FsYnVtLmdlbnJlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtLXByaWNlXCI+XG4gICAgICAgICAgICAgIFByaWNlOiA8c3Bhbj57YWxidW0ucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtLXNvbmdzXCI+TnVtYmVyIG9mIHNvbmdzOiB7YWxidW0udG90YWxTb25nc308L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHthbGJ1bS5hcnRpc3R9IC0ge2FsYnVtLm5hbWV9XG4gICAgICAgICAgPC9wPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7MTEgPiBhbGJ1bS5wb3NpdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cInRvcC1sYWJlbCBzaGFkb3dcIj5UT1Age2FsYnVtLnBvc2l0aW9ufTwvZGl2Pn1cbiAgICA8Lz5cbiAgKTtcblxuQWxidW1JbmZvLmRlZmF1bHRQcm9wcyA9IHtcbiAgZnVsbEluZm86IGZhbHNlLFxufTtcblxuQWxidW1JbmZvLnByb3BUeXBlcyA9IHtcbiAgYWxidW06IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZnVsbEluZm86IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxidW1JbmZvO1xuIiwiZXhwb3J0IGNvbnN0IE1BSU5fVVJMID0gcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCB8fCAnL211c2ljLWNoYWxsZW5nZS8nO1xuZXhwb3J0IGNvbnN0IEFMQlVNX1VSTCA9IGAke01BSU5fVVJMfTphbGJ1bUlkYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgQWxidW1JbmZvIGZyb20gJy4vQWxidW1JbmZvL0FsYnVtSW5mbyc7XG5pbXBvcnQgeyBNQUlOX1VSTCB9IGZyb20gJy4uLy4uL3V0aWxzL3VybHMnO1xuXG5jb25zdCBnZXRDbGFzc05hbWUgPSAocG9zaXRpb24pID0+IHtcbiAgbGV0IGNsYXNzbmFtZSA9ICd0b3AtaHVuZHJlZC1hbGJ1bSc7XG5cbiAgaWYgKDEgPT09IHBvc2l0aW9uKSB7XG4gICAgY2xhc3NuYW1lID0gJ3RvcC1hbGJ1bSc7XG4gIH0gZWxzZSBpZiAoNCA+IHBvc2l0aW9uKSB7XG4gICAgY2xhc3NuYW1lID0gJ3RvcC10aHJlZS1hbGJ1bSc7XG4gIH0gZWxzZSBpZiAoNyA+IHBvc2l0aW9uKSB7XG4gICAgY2xhc3NuYW1lID0gJ3RvcC1zaXgtYWxidW0nO1xuICB9IGVsc2UgaWYgKDExID4gcG9zaXRpb24pIHtcbiAgICBjbGFzc25hbWUgPSAndG9wLXRlbi1hbGJ1bSc7XG4gIH0gZWxzZSBpZiAoMjEgPiBwb3NpdGlvbikge1xuICAgIGNsYXNzbmFtZSA9ICd0b3AtdHdlbnR5LWFsYnVtJztcbiAgfSBlbHNlIGlmICg1MSA+IHBvc2l0aW9uKSB7XG4gICAgY2xhc3NuYW1lID0gJ3RvcC1maWZ0eS1hbGJ1bSc7XG4gIH1cblxuICByZXR1cm4gY2xhc3NuYW1lO1xufTtcblxuY29uc3QgQWxidW0gPSAoeyBhbGJ1bSwgZnVsbEluZm8gfSkgPT5cbiAgYWxidW0gJiYgKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYWxidW0gZmFkZWluJHtmdWxsSW5mbyA/ICcgYWxidW0tZnVsbCcgOiAnJ30gJHtnZXRDbGFzc05hbWUoYWxidW0ucG9zaXRpb24pfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bS1jb250YWluZXJcIj5cbiAgICAgICAge2Z1bGxJbmZvID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93XCI+XG4gICAgICAgICAgICA8QWxidW1JbmZvIGFsYnVtPXthbGJ1bX0gZnVsbEluZm89e2Z1bGxJbmZvfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cInNoYWRvd1wiIHRvPXtgJHtNQUlOX1VSTH0ke2FsYnVtLmlkfWB9PlxuICAgICAgICAgICAgPEFsYnVtSW5mbyBhbGJ1bT17YWxidW19IGZ1bGxJbmZvPXtmdWxsSW5mb30gLz5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuQWxidW0uZGVmYXVsdFByb3BzID0ge1xuICBmdWxsSW5mbzogZmFsc2UsXG59O1xuXG5BbGJ1bS5wcm9wVHlwZXMgPSB7XG4gIGFsYnVtOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGZ1bGxJbmZvOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsYnVtO1xuIiwiaW1wb3J0IEFsYnVtIGZyb20gJy4vQWxidW0nO1xuaW1wb3J0ICcuL2FsYnVtLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBBbGJ1bTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFsYnVtIGZyb20gJy4uL0FsYnVtJztcblxuY29uc3QgQWxidW1MaXN0ID0gKHsgYWxidW1zIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bS1saXN0XCI+XG4gICAgezAgPCBhbGJ1bXM/Lmxlbmd0aCAmJiBhbGJ1bXMubWFwKChhbGJ1bSkgPT4gPEFsYnVtIGFsYnVtPXthbGJ1bX0ga2V5PXthbGJ1bS5pZH0gLz4pfVxuICA8L2Rpdj5cbik7XG5cbkFsYnVtTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsYnVtczogW10sXG59O1xuXG5BbGJ1bUxpc3QucHJvcFR5cGVzID0ge1xuICBhbGJ1bXM6IFByb3BUeXBlcy5hcnJheSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsYnVtTGlzdDtcbiIsImltcG9ydCBBbGJ1bUxpc3QgZnJvbSAnLi9BbGJ1bUxpc3QnO1xuaW1wb3J0ICcuL2FsYnVtc0xpc3Quc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEFsYnVtTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbic7XG5cbmNvbnN0IEJ1dHRvbiA9ICh7IGNsYXNzTmFtZSwgaWNvbiwgdGV4dCwgLi4ucmVzdCB9KSA9PiAoXG4gIDxidXR0b24gY2xhc3NOYW1lPXtgY3VzdG9tLWJ0biR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9YH0gdHlwZT1cImJ1dHRvblwiIHsuLi5yZXN0fT5cbiAgICB7aWNvbiAmJiA8SWNvbiBpY29uPXtpY29ufSAvPn1cbiAgICB7dGV4dH1cbiAgPC9idXR0b24+XG4pO1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICB0ZXh0OiB1bmRlZmluZWQsXG59O1xuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCAnLi9idXR0b24uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuXG5jb25zdCBTZWFyY2hCYXIgPSAoeyBjbGVhckljb24sIGljb24sIG9uU2VhcmNoIH0pID0+IHtcbiAgY29uc3QgWyB2YWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgWyB2aXNpYmxlLCBzZXRWaXNpYmxlIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb3V0c2lkZVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgIHNldFZhbHVlKCcnKTtcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmICh2aXNpYmxlICYmIG91dHNpZGVSZWYuY3VycmVudCAmJiAhb3V0c2lkZVJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHNldFZpc2libGUoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuICB9LCBbIHZpc2libGUgXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBvblNlYXJjaCh2YWx1ZSk7XG4gIH0sIFsgdmFsdWUgXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhciBzaGFkb3dcIiByZWY9e291dHNpZGVSZWZ9PlxuICAgICAgPEJ1dHRvbiBpY29uPXtpY29ufSBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKHRydWUpfSAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT17dmFsdWUgfHwgdmlzaWJsZSA/ICcnIDogJ2hpZGRlbid9XG4gICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgLz5cbiAgICAgIHsodmlzaWJsZSB8fCB2YWx1ZSkgJiYgPEJ1dHRvbiBjbGFzc05hbWU9XCJmYWRlaW5cIiBpY29uPXtjbGVhckljb259IG9uQ2xpY2s9e2NsZWFyfSAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNlYXJjaEJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsZWFySWNvbjogJ2ZhcyBmYS10aW1lcycsXG4gIGljb246ICdmYXMgZmEtc2VhcmNoJyxcbn07XG5cblNlYXJjaEJhci5wcm9wVHlwZXMgPSB7XG4gIGNsZWFySWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XG4iLCJpbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vU2VhcmNoQmFyJztcbmltcG9ydCAnLi9zZWFyY2hCYXIuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcblxuY29uc3QgU2VsZWN0b3IgPSAoeyBvbkNoYW5nZSwgb3B0aW9ucyB9KSA9PiB7XG4gIGNvbnN0IFsgc2VsZWN0ZWQsIHNldFNlbGVjdGVkIF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFsgc2VsZWN0ZWRBbGwsIHNldFNlbGVjdGVkQWxsIF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgWyB2aXNpYmxlLCBzZXRWaXNpYmxlIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc2V0QWxsU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKG9wdGlvbnM/Lmxlbmd0aCkge1xuICAgICAgY29uc3QgbmV3U2VsZWN0ZWQgPSBbXTtcblxuICAgICAgb3B0aW9ucy5mb3JFYWNoKChvcHQpID0+IG5ld1NlbGVjdGVkLnB1c2gob3B0KSk7XG4gICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uU2VsZWN0ID0gKG9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0ZWQuaW5kZXhPZihvcHRpb24pO1xuICAgIGlmICgtMSA9PT0gaW5kZXgpIHtcbiAgICAgIHNldFNlbGVjdGVkKFsgLi4uc2VsZWN0ZWQsIG9wdGlvbiBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VsZWN0ZWQoc2VsZWN0ZWQuZmlsdGVyKChvcHQpID0+IG9wdCAhPT0gb3B0aW9uKSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0QWxsU2VsZWN0ZWQoKTtcbiAgfSwgWyBvcHRpb25zIF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2FtZUxlbmd0aCA9IHNlbGVjdGVkLmxlbmd0aCA9PT0gb3B0aW9ucz8ubGVuZ3RoO1xuICAgIGlmIChzZWxlY3RlZEFsbCAmJiAhc2FtZUxlbmd0aCkge1xuICAgICAgc2V0U2VsZWN0ZWRBbGwoZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoIXNlbGVjdGVkQWxsICYmIHNhbWVMZW5ndGgpIHtcbiAgICAgIHNldFNlbGVjdGVkQWxsKHRydWUpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHNlbGVjdGVkKTtcbiAgfSwgWyBzZWxlY3RlZCBdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0b3JcIj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93XCJcbiAgICAgICAgaWNvbj17YGZhcyBmYS0ke3Zpc2libGUgPyAnYXJyb3ctcmlnaHQnIDogJ2ZpbHRlcid9YH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSghdmlzaWJsZSl9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWxlY3Rvci1vcHRpb25zIHNoYWRvdyR7dmlzaWJsZSA/ICcnIDogJyBoaWRkZW4nfWB9PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzZWxlY3RlZEFsbCA/ICdzZWxlY3RlZCcgOiB1bmRlZmluZWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkQWxsfVxuICAgICAgICAgIG9uQ2xpY2s9e3NldEFsbFNlbGVjdGVkfVxuICAgICAgICAgIHRleHQ9XCJBbGxcIlxuICAgICAgICAvPlxuICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdCkgPT4gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGtleT17b3B0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXstMSA9PT0gc2VsZWN0ZWQuaW5kZXhPZihvcHQpID8gdW5kZWZpbmVkIDogJ3NlbGVjdGVkJ31cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0KG9wdCl9XG4gICAgICAgICAgICB0ZXh0PXtvcHR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNlbGVjdG9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgb3B0aW9uczogW10sXG59O1xuXG5TZWxlY3Rvci5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvcjtcbiIsImltcG9ydCBTZWxlY3RvciBmcm9tICcuL1NlbGVjdG9yJztcbmltcG9ydCAnLi9zZWxlY3Rvci5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0b3I7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQWxidW1MaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWxidW1zTGlzdCc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJztcbmltcG9ydCBTZWxlY3RvciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlbGVjdG9yJztcblxuY29uc3QgQWxidW1MaXN0UGFnZSA9ICh7IGFsYnVtcywgZ2VucmVzLCBnZXRBbGxBbGJ1bXMsIGxvYWRpbmcgfSkgPT4ge1xuICBjb25zdCBbIGZpbHRlcmVkQWxidW1zLCBzZXRGaWx0ZXJlZEFsYnVtcyBdID0gdXNlU3RhdGUoYWxidW1zKTtcbiAgY29uc3QgWyBmaWx0ZXJlZEdlbnJlcywgc2V0RmlsdGVyZWRHZW5yZXMgXSA9IHVzZVN0YXRlKGdlbnJlcyk7XG4gIGNvbnN0IFsgc2VhcmNoLCBzZXRTZWFyY2ggXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG5cbiAgY29uc3QgaXNTZWxlY3RlZCA9ICh7IGFydGlzdCwgbmFtZSwgZ2VucmUgfSkgPT5cbiAgICAtMSA8IGZpbHRlcmVkR2VucmVzLmluZGV4T2YoZ2VucmUpICYmXG4gICAgKC0xIDwgYXJ0aXN0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHwgLTEgPCBuYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QWxsQWxidW1zKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhbGJ1bXMgJiYgc2VhcmNoKSB7XG4gICAgICBzZXRGaWx0ZXJlZEFsYnVtcyhhbGJ1bXMuZmlsdGVyKChhbGJ1bSkgPT4gaXNTZWxlY3RlZChhbGJ1bSkpKTtcbiAgICB9IGVsc2UgaWYgKGFsYnVtcykge1xuICAgICAgc2V0RmlsdGVyZWRBbGJ1bXMoYWxidW1zKTtcbiAgICB9XG4gIH0sIFsgYWxidW1zLCBzZWFyY2ggXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZmlsdGVyZWRHZW5yZXMubGVuZ3RoICE9PSBnZW5yZXM/Lmxlbmd0aCB8fCBmaWx0ZXJlZEFsYnVtcz8ubGVuZ3RoICE9PSBhbGJ1bXM/Lmxlbmd0aCkge1xuICAgICAgc2V0RmlsdGVyZWRBbGJ1bXMoYWxidW1zLmZpbHRlcigoYWxidW0pID0+IGlzU2VsZWN0ZWQoYWxidW0pKSk7XG4gICAgfVxuICB9LCBbIGZpbHRlcmVkR2VucmVzIF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bXMtY29udGFpbmVyXCI+XG4gICAgICA8aDE+VG9wIDEwMCBBbGJ1bXMgaW4gaVR1bmVzIFVTQTwvaDE+XG4gICAgICA8U2VhcmNoQmFyIG9uU2VhcmNoPXtzZXRTZWFyY2h9IC8+XG4gICAgICB7ISFnZW5yZXM/Lmxlbmd0aCAmJiA8U2VsZWN0b3Igb3B0aW9ucz17Z2VucmVzfSBvbkNoYW5nZT17c2V0RmlsdGVyZWRHZW5yZXN9IC8+fVxuICAgICAge2xvYWRpbmcgJiYgPGRpdj5MT0FESU5HPC9kaXY+fVxuICAgICAgPEFsYnVtTGlzdCBhbGJ1bXM9e2ZpbHRlcmVkQWxidW1zfSBnZW5yZXM9e2dlbnJlc30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFsYnVtTGlzdFBhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBhbGJ1bXM6IFtdLFxuICBnZW5yZXM6IFtdLFxuICBsb2FkaW5nOiBmYWxzZSxcbn07XG5cbkFsYnVtTGlzdFBhZ2UucHJvcFR5cGVzID0ge1xuICBhbGJ1bXM6IFByb3BUeXBlcy5hcnJheSxcbiAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGdldEFsbEFsYnVtczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGJ1bUxpc3RQYWdlO1xuIiwiaW1wb3J0IEFsYnVtTGlzdFBhZ2UgZnJvbSAnLi9BbGJ1bUxpc3RQYWdlJztcbmltcG9ydCAnLi9hbGJ1bUxpc3RQYWdlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBBbGJ1bUxpc3RQYWdlO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IGdldCA9IGFzeW5jICh1cmwpID0+IGF4aW9zLmdldCh1cmwpO1xuXG5leHBvcnQgY29uc3QgcG9zdCA9IGFzeW5jICh1cmwsIHBhcmFtcykgPT4gYXhpb3MucG9zdCh1cmwsIHBhcmFtcyk7XG5cbmV4cG9ydCBjb25zdCBwdXQgPSBhc3luYyAodXJsLCBwYXJhbXMpID0+IGF4aW9zLnB1dCh1cmwsIHBhcmFtcyk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmUgPSBhc3luYyAodXJsLCBwYXJhbXMpID0+IGF4aW9zLmRlbGV0ZSh1cmwsIHBhcmFtcyk7XG4iLCJpbXBvcnQgeyBHRU5SRVMgfSBmcm9tICcuLi8uLi91dGlscy9kaXNwYXRjaHMnO1xuXG5jb25zdCBnZXRBbGJ1bUdlbnJlcyA9IChhbGJ1bXMpID0+IHtcbiAgbGV0IGdlbnJlcyA9IFtdO1xuXG4gIGlmIChhbGJ1bXM/Lmxlbmd0aCkge1xuICAgIGNvbnN0IGFsbCA9IGFsYnVtcy5tYXAoKHsgZ2VucmUgfSkgPT4gZ2VucmUpO1xuICAgIGdlbnJlcyA9IGFsbC5maWx0ZXIoKGdlbnJlLCBpZHgsIHNlbGYpID0+IHNlbGYuaW5kZXhPZihnZW5yZSkgPT09IGlkeCkuc29ydCgpO1xuICB9XG4gIHJldHVybiBnZW5yZXM7XG59O1xuXG5jb25zdCBzZXRBbGJ1bUdlbnJlcyA9IChhbGJ1bXMpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7IHR5cGU6IEdFTlJFUy5TRVRfQUxMLCBnZW5yZXM6IGdldEFsYnVtR2VucmVzKGFsYnVtcykgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXRBbGJ1bUdlbnJlcztcbiIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IGdldCB9IGZyb20gJy4uL0FwaVdyYXBwZXInO1xuaW1wb3J0IHsgQUxCVU1TIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGlzcGF0Y2hzJztcbmltcG9ydCBzZXRBbGJ1bUdlbnJlcyBmcm9tICcuLi9nZW5yZXMvZ2VucmVzJztcblxuY29uc3QgSVRVTkVTX1RPUF8xMDAgPSAnaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL3VzL3Jzcy90b3BhbGJ1bXMvbGltaXQ9MTAwL2pzb24nO1xuXG5jb25zdCBMT0FESU5HID0geyB0eXBlOiBBTEJVTVMuTE9BRElORyB9O1xuY29uc3QgTE9BRElOR19FTkQgPSB7IHR5cGU6IEFMQlVNUy5MT0FESU5HX0VORCB9O1xuXG5leHBvcnQgY29uc3Qgc2V0U2VsZWN0ZWRBbGJ1bSA9IChhbGJ1bSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHsgdHlwZTogQUxCVU1TLlNFVCwgYWxidW0gfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0QWxidW1zID0gKGFsYnVtcykgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHsgdHlwZTogQUxCVU1TLlNFVF9BTEwsIGFsYnVtcyB9KTtcbn07XG5cbmNvbnN0IGZvcm1hdEFsYnVtID0gKGFsYnVtLCBwb3NpdGlvbikgPT5cbiAgYWxidW0gP1xuICAgIHtcbiAgICAgICAgbmFtZTogYWxidW1bJ2ltOm5hbWUnXT8ubGFiZWwsXG4gICAgICAgIGFydGlzdDogYWxidW1bJ2ltOmFydGlzdCddPy5sYWJlbCxcbiAgICAgICAgYXJ0aXN0TGluazogYWxidW1bJ2ltOmFydGlzdCddPy5hdHRyaWJ1dGVzPy5ocmVmLFxuICAgICAgICBpZDogYWxidW0uaWQ/LmF0dHJpYnV0ZXM/LlsnaW06aWQnXSxcbiAgICAgICAgaW1hZ2U6IGFsYnVtWydpbTppbWFnZSddPy5bYWxidW1bJ2ltOmltYWdlJ10ubGVuZ3RoIC0gMV0/LmxhYmVsLFxuICAgICAgICByZWxlYXNlRGF0ZTogYWxidW1bJ2ltOnJlbGVhc2VEYXRlJ10/LmxhYmVsID9cbiAgICAgICAgICBmb3JtYXQobmV3IERhdGUoYWxidW1bJ2ltOnJlbGVhc2VEYXRlJ10ubGFiZWwpLCAnZGQvTU0vWVlZJykgOlxuICAgICAgICAgIG51bGwsXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbiArIDEsXG4gICAgICAgIGxpbms6IGFsYnVtLmlkPy5sYWJlbCB8fCBhbGJ1bS5saW5rPy5hdHRyaWJ1dGVzPy5ocmVmLFxuICAgICAgICBnZW5yZTogYWxidW0uY2F0ZWdvcnk/LmF0dHJpYnV0ZXM/LmxhYmVsLFxuICAgICAgICBnZW5yZUxpbms6IGFsYnVtLmNhdGVnb3J5Py5hdHRyaWJ1dGVzPy5zY2hlbWUsXG4gICAgICAgIHByaWNlOiBhbGJ1bVsnaW06cHJpY2UnXT8ubGFiZWwsXG4gICAgICAgIHRvdGFsU29uZ3M6IGFsYnVtWydpbTppdGVtQ291bnQnXT8ubGFiZWwsXG4gICAgICAgIHJpZ2h0czogYWxidW0ucmlnaHRzPy5sYWJlbCxcbiAgICAgIH0gOlxuICAgIG51bGw7XG5cbmNvbnN0IGZvcm1hdEFsYnVtcyA9IChhbGJ1bXMpID0+IChhbGJ1bXM/Lmxlbmd0aCA/IGFsYnVtcy5tYXAoZm9ybWF0QWxidW0pIDogW10pO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsQWxidW1zID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKExPQURJTkcpO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZ2V0KElUVU5FU19UT1BfMTAwKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsYnVtcyA9IGZvcm1hdEFsYnVtcyhyZXNwb25zZS5kYXRhLmZlZWQuZW50cnkpO1xuICAgICAgICBkaXNwYXRjaChzZXRBbGJ1bUdlbnJlcyhhbGJ1bXMpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0QWxidW1zKGFsYnVtcykpO1xuICAgICAgICByZXNvbHZlKGFsYnVtcyk7XG4gICAgICAgIGRpc3BhdGNoKExPQURJTkdfRU5EKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgZGlzcGF0Y2goTE9BRElOR19FTkQpO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFsYnVtQnlJZCA9IChhbGJ1bUlkKSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gIGRpc3BhdGNoKExPQURJTkcpO1xuICBjb25zdCB7IGFsYnVtcyB9ID0gZ2V0U3RhdGUoKS5hbGJ1bXM7XG5cbiAgaWYgKGFsYnVtcz8ubGVuZ3RoKSB7XG4gICAgZGlzcGF0Y2goc2V0U2VsZWN0ZWRBbGJ1bShhbGJ1bXMuZmluZCgoYWxidW0pID0+IGFsYnVtLmlkID09PSBhbGJ1bUlkKSkpO1xuICAgIGRpc3BhdGNoKExPQURJTkdfRU5EKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwYXRjaChnZXRBbGxBbGJ1bXMoKSlcbiAgICAgIC50aGVuKChmb3VuZEFsYnVtcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRTZWxlY3RlZEFsYnVtKGZvdW5kQWxidW1zLmZpbmQoKGFsYnVtKSA9PiBhbGJ1bS5pZCA9PT0gYWxidW1JZCkpKTtcbiAgICAgICAgZGlzcGF0Y2goTE9BRElOR19FTkQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKExPQURJTkdfRU5EKTtcbiAgICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEFsYnVtTGlzdFBhZ2UgZnJvbSAnLi4vLi4vcGFnZXMvQWxidW1MaXN0UGFnZSc7XG5pbXBvcnQgeyBnZXRBbGxBbGJ1bXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2FsYnVtcy9hbGJ1bXMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBhbGJ1bXMsIGdlbnJlcyB9KSA9PiAoe1xuICBhbGJ1bXM6IGFsYnVtcy5hbGJ1bXMsXG4gIGdlbnJlczogZ2VucmVzLmdlbnJlcyxcbiAgbG9hZGluZzogYWxidW1zLmxvYWRpbmcsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAuLi5iaW5kQWN0aW9uQ3JlYXRvcnMoXG4gICAge1xuICAgICAgZ2V0QWxsQWxidW1zLFxuICAgIH0sXG4gICAgZGlzcGF0Y2gsXG4gICksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBbGJ1bUxpc3RQYWdlKSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHVzZVBhcmFtcywgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEFsYnVtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWxidW0nO1xuaW1wb3J0IHsgTUFJTl9VUkwgfSBmcm9tICcuLi8uLi91dGlscy91cmxzJztcblxuY29uc3QgQWxidW1QYWdlID0gKHsgYWxidW0sIGdldEFsYnVtQnlJZCwgbG9hZGluZywgc2V0U2VsZWN0ZWRBbGJ1bSB9KSA9PiB7XG4gIGNvbnN0IHsgYWxidW1JZCB9ID0gdXNlUGFyYW1zKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFsYnVtSWQgJiYgIWFsYnVtPy5pZCkge1xuICAgICAgZ2V0QWxidW1CeUlkKGFsYnVtSWQpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiBzZXRTZWxlY3RlZEFsYnVtKCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtLXBhZ2VcIj5cbiAgICAgIDxOYXZMaW5rIHRvPXtNQUlOX1VSTH0+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcnJvdy1sZWZ0XCIgLz5cbiAgICAgIDwvTmF2TGluaz5cbiAgICAgIHtsb2FkaW5nIHx8ICFhbGJ1bSA/IDxkaXY+TE9BRElORy4uLjwvZGl2PiA6IDxBbGJ1bSBhbGJ1bT17YWxidW19IGZ1bGxJbmZvIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQWxidW1QYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWxidW06IHt9LFxuICBsb2FkaW5nOiBmYWxzZSxcbn07XG5cbkFsYnVtUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGFsYnVtOiBQcm9wVHlwZXMub2JqZWN0LFxuICBnZXRBbGJ1bUJ5SWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBzZXRTZWxlY3RlZEFsYnVtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxidW1QYWdlO1xuIiwiaW1wb3J0IEFsYnVtUGFnZSBmcm9tICcuL0FsYnVtUGFnZSc7XG5pbXBvcnQgJy4vYWxidW1QYWdlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBBbGJ1bVBhZ2U7XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgQWxidW1QYWdlIGZyb20gJy4uLy4uL3BhZ2VzL0FsYnVtUGFnZSc7XG5pbXBvcnQgeyBnZXRBbGJ1bUJ5SWQsIHNldFNlbGVjdGVkQWxidW0gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2FsYnVtcy9hbGJ1bXMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBhbGJ1bXMgfSkgPT4gKHtcbiAgYWxidW06IGFsYnVtcy5hbGJ1bSxcbiAgbG9hZGluZzogYWxidW1zLmxvYWRpbmcsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAuLi5iaW5kQWN0aW9uQ3JlYXRvcnMoXG4gICAge1xuICAgICAgZ2V0QWxidW1CeUlkLFxuICAgICAgc2V0U2VsZWN0ZWRBbGJ1bSxcbiAgICB9LFxuICAgIGRpc3BhdGNoLFxuICApLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWxidW1QYWdlKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEFsYnVtTGlzdFBhZ2UgZnJvbSAnLi4vY29udGFpbmVycy9hbGJ1bUxpc3QnO1xuaW1wb3J0IEFsYnVtUGFnZSBmcm9tICcuLi9jb250YWluZXJzL2FsYnVtJztcbmltcG9ydCB7IEFMQlVNX1VSTCwgTUFJTl9VUkwgfSBmcm9tICcuLi91dGlscy91cmxzJztcblxuY29uc3QgTWFpbiA9ICgpID0+IChcbiAgPG1haW4+XG4gICAgey8qIDxOYXZiYXIgLz4gKi99XG4gICAgPGRpdiBpZD1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgZXhhY3QgY29tcG9uZW50PXtBbGJ1bVBhZ2V9IHBhdGg9e0FMQlVNX1VSTH0gLz5cbiAgICAgICAgPFJvdXRlIGV4YWN0IGNvbXBvbmVudD17QWxidW1MaXN0UGFnZX0gcGF0aD17TUFJTl9VUkx9IC8+XG4gICAgICA8L1N3aXRjaD5cbiAgICA8L2Rpdj5cbiAgPC9tYWluPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9wYWdlcy9NYWluJztcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgIDxNYWluIC8+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJ0FwcCc7XG5cbmltcG9ydCAnLi9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=