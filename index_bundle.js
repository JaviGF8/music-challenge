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
/******/ 	__webpack_require__.p = "./";
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
  })), loading || !(album === null || album === void 0 ? void 0 : album.id) ? /*#__PURE__*/react_default.a.createElement("div", null, "LOADING...") : /*#__PURE__*/react_default.a.createElement(components_Album, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSWNvbi9pY29uLnNjc3M/MWQ3OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL2ljb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FeHRlcm5hbExpbmsvZXh0ZXJuYWxMaW5rLnNjc3M/NTJiMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FeHRlcm5hbExpbmsvZXh0ZXJuYWxMaW5rLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxidW0vYWxidW0uc2Nzcz8wMzIwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FsYnVtL2FsYnVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxidW1zTGlzdC9hbGJ1bXNMaXN0LnNjc3M/YmY1MSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BbGJ1bXNMaXN0L2FsYnVtc0xpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3M/YzRiNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL3NlYXJjaEJhci5zY3NzP2RmN2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL3NlYXJjaEJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlbGVjdG9yL3NlbGVjdG9yLnNjc3M/NTI2ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWxlY3Rvci9zZWxlY3Rvci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9BbGJ1bUxpc3RQYWdlL2FsYnVtTGlzdFBhZ2Uuc2Nzcz9kNmE0Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9BbGJ1bUxpc3RQYWdlL2FsYnVtTGlzdFBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQWxidW1QYWdlL2FsYnVtUGFnZS5zY3NzPzc3YTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0FsYnVtUGFnZS9hbGJ1bVBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuc2Nzcz8yOTQ4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz80YzM3Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZGlzcGF0Y2hzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hbGJ1bXMvYWxidW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9nZW5yZXMvZ2VucmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSWNvbi9JY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V4dGVybmFsTGluay9FeHRlcm5hbExpbmsuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V4dGVybmFsTGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BbGJ1bS9BbGJ1bUluZm8vQWxidW1JbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BbGJ1bS9BbGJ1bS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxidW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxidW1zTGlzdC9BbGJ1bUxpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FsYnVtc0xpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWxlY3Rvci9TZWxlY3Rvci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VsZWN0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0FsYnVtTGlzdFBhZ2UvQWxidW1MaXN0UGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0FsYnVtTGlzdFBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQXBpV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9nZW5yZXMvZ2VucmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2FsYnVtcy9hbGJ1bXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvYWxidW1MaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9BbGJ1bVBhZ2UvQWxidW1QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQWxidW1QYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL2FsYnVtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9NYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQUxCVU1TIiwiTE9BRElORyIsIkxPQURJTkdfRU5EIiwiU0VUIiwiU0VUX0FMTCIsIkdFTlJFUyIsImluaXRpYWxTdGF0ZSIsImFsYnVtIiwidW5kZWZpbmVkIiwiYWxidW1zIiwibG9hZGluZyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImdlbnJlcyIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwibWlkZGxld2FyZXMiLCJ0aHVua01pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlcnMiLCJhcHBseU1pZGRsZXdhcmUiLCJJY29uIiwiaWNvbiIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJFeHRlcm5hbExpbmsiLCJjbGFzc05hbWUiLCJ0ZXh0IiwiQWxidW1JbmZvIiwiZnVsbEluZm8iLCJwb3NpdGlvbiIsImltYWdlIiwibmFtZSIsImFydGlzdExpbmsiLCJhcnRpc3QiLCJyaWdodHMiLCJnZW5yZUxpbmsiLCJnZW5yZSIsInByaWNlIiwidG90YWxTb25ncyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiTUFJTl9VUkwiLCJwcm9jZXNzIiwiQUxCVU1fVVJMIiwiZ2V0Q2xhc3NOYW1lIiwiY2xhc3NuYW1lIiwiQWxidW0iLCJpZCIsIkFsYnVtTGlzdCIsImxlbmd0aCIsIm1hcCIsImFycmF5IiwiQnV0dG9uIiwiU2VhcmNoQmFyIiwiY2xlYXJJY29uIiwib25TZWFyY2giLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsIm91dHNpZGVSZWYiLCJ1c2VSZWYiLCJpbnB1dFJlZiIsImNsZWFyIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsInVzZUVmZmVjdCIsImZvY3VzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZ1bmMiLCJTZWxlY3RvciIsIm9uQ2hhbmdlIiwib3B0aW9ucyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJzZWxlY3RlZEFsbCIsInNldFNlbGVjdGVkQWxsIiwic2V0QWxsU2VsZWN0ZWQiLCJuZXdTZWxlY3RlZCIsImZvckVhY2giLCJvcHQiLCJwdXNoIiwib25TZWxlY3QiLCJvcHRpb24iLCJpbmRleCIsImluZGV4T2YiLCJmaWx0ZXIiLCJzYW1lTGVuZ3RoIiwiQWxidW1MaXN0UGFnZSIsImdldEFsbEFsYnVtcyIsImZpbHRlcmVkQWxidW1zIiwic2V0RmlsdGVyZWRBbGJ1bXMiLCJmaWx0ZXJlZEdlbnJlcyIsInNldEZpbHRlcmVkR2VucmVzIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiaXNTZWxlY3RlZCIsInRvTG93ZXJDYXNlIiwiZ2V0IiwidXJsIiwiYXhpb3MiLCJwb3N0IiwicGFyYW1zIiwicHV0IiwicmVtb3ZlIiwiZGVsZXRlIiwiZ2V0QWxidW1HZW5yZXMiLCJhbGwiLCJpZHgiLCJzZWxmIiwic29ydCIsInNldEFsYnVtR2VucmVzIiwiZGlzcGF0Y2giLCJJVFVORVNfVE9QXzEwMCIsInNldFNlbGVjdGVkQWxidW0iLCJzZXRBbGJ1bXMiLCJmb3JtYXRBbGJ1bSIsImxhYmVsIiwiYXR0cmlidXRlcyIsImhyZWYiLCJyZWxlYXNlRGF0ZSIsImZvcm1hdCIsIkRhdGUiLCJsaW5rIiwiY2F0ZWdvcnkiLCJzY2hlbWUiLCJmb3JtYXRBbGJ1bXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJmZWVkIiwiZW50cnkiLCJjYXRjaCIsImVyciIsImdldEFsYnVtQnlJZCIsImFsYnVtSWQiLCJnZXRTdGF0ZSIsImZpbmQiLCJmb3VuZEFsYnVtcyIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImJpbmRBY3Rpb25DcmVhdG9ycyIsIndpdGhSb3V0ZXIiLCJjb25uZWN0IiwiQWxidW1QYWdlIiwidXNlUGFyYW1z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QixDQUFqQixDQUF4Qjs7QUFLQSxNQUFNa0osd0JBQWtCLEdBQUkvQixRQUFELDJCQUN0QmdDLDJDQUFrQixDQUNuQjtBQUNFUCxtQ0FERjtBQUVFdkIsMkNBQWdCQTtBQUZsQixDQURtQixFQUtuQkYsUUFMbUIsQ0FESSxDQUEzQjs7QUFVZWlDLCtGQUFVLENBQUNDLDZCQUFPLENBQUNKLHFCQUFELEVBQWtCQyx3QkFBbEIsQ0FBUCxDQUE2Q0ksZUFBN0MsQ0FBRCxDQUF6QixFOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1FLElBQUksR0FBRyxtQkFDWCx5REFFRTtBQUFLLElBQUUsRUFBQztBQUFSLGdCQUNFLDhCQUFDLDhCQUFELHFCQUNFLDhCQUFDLDZCQUFEO0FBQU8sT0FBSyxNQUFaO0FBQWEsV0FBUyxFQUFFRixnQkFBeEI7QUFBbUMsTUFBSSxFQUFFOUcsU0FBU0E7QUFBbEQsRUFERixlQUVFLDhCQUFDLDZCQUFEO0FBQU8sT0FBSyxNQUFaO0FBQWEsV0FBUyxFQUFFbUQsU0FBeEI7QUFBdUMsTUFBSSxFQUFFckQsUUFBUUE7QUFBckQsRUFGRixDQURGLENBRkYsQ0FERjs7QUFZZWtILG1EQUFmLEU7O0FDbEJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUMsR0FBRyxHQUFHLG1CQUNWLDhCQUFDLHNCQUFEO0FBQVUsT0FBSyxFQUFFaEosU0FBS0E7QUFBdEIsZ0JBQ0UsOEJBQUMseUNBQUQscUJBQ0UsOEJBQUMsVUFBRCxPQURGLENBREYsQ0FERjs7QUFRZWdKLCtDQUFmLEU7Ozs7Ozs7O0FDZkE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBQyxtQkFBUSxDQUFDQyxNQUFULGVBQWdCLDhCQUFDLE9BQUQsT0FBaEIsRUFBeUJ0RixRQUFRLENBQUN1RixjQUFULENBQXdCLE1BQXhCLENBQXpCLEUiLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzE2NCwxXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaWNvbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY3VzdG9tLWljb257bWFyZ2luOjA7aGVpZ2h0OjhweH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9leHRlcm5hbExpbmsuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmV4dGVybmFsLWxpbmt7Y29sb3I6IzI4MjgyOH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbGJ1bS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYWxidW17ZGlzcGxheTpmbGV4fS5hbGJ1bSAuYWxidW0tY29udGFpbmVye2Rpc3BsYXk6ZmxleDtwYWRkaW5nOjhweDtoZWlnaHQ6Y2FsYygxMDAlIC0gMzJweCk7d2lkdGg6Y2FsYygxMDAlIC0gMTZweCk7b3ZlcmZsb3c6dmlzaWJsZX0uYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qe2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7d2lkdGg6Y2FsYygxMDAlIC0gMTZweCk7aGVpZ2h0OmNhbGMoMTAwJSAtIDE2cHgpO3BhZGRpbmc6MTZweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo0cHg7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIC4yNXM7b3ZlcmZsb3c6aGlkZGVuO3RleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiMyODI4Mjg7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDEzNiwxMzYsMTM2LDAuMil9LmFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0tcG9zaXRpb257Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXNpemU6MTRweDttaW4td2lkdGg6MzJweH0uYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZve2ZsZXg6MTtvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59LmFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mbyAuYWxidW0taW1hZ2V7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7aGVpZ2h0OjEwMCV9LmFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mbyAuYWxidW0taW1hZ2UgaW1ne2hlaWdodDoxMDAlO21heC13aWR0aDoxMDAlO29iamVjdC1maXQ6Y292ZXJ9LmFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mbyBhLC5hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm8gcHttYXJnaW46MDt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztvdmVyZmxvdzpoaWRkZW47bWF4LXdpZHRoOjEwMCU7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LmFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAudG9wLWxhYmVse2FsaWduLXNlbGY6ZmxleC1zdGFydDtwYWRkaW5nOjhweDtib3JkZXItcmFkaXVzOjRweDtwb3NpdGlvbjphYnNvbHV0ZTtjb2xvcjojZmZmfS5hbGJ1bSAuYWxidW0tY29udGFpbmVyPio6aG92ZXJ7dHJhbnNmb3JtOnNjYWxlKDEuMDIpfS5hbGJ1bS50b3AtYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qe2JhY2tncm91bmQtY29sb3I6I2MxZDBkNTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoNDcsOTcsMTE2LDAuMil9LmFsYnVtLnRvcC1hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLXBvc2l0aW9ue2ZvbnQtc2l6ZTozMnB4fS5hbGJ1bS50b3AtYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZvIGEsLmFsYnVtLnRvcC1hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm8gcHtmb250LXNpemU6MjRweH0uYWxidW0udG9wLWFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAudG9wLWxhYmVse2ZvbnQtc2l6ZTozMnB4O2JhY2tncm91bmQtY29sb3I6IzJmNjE3NH0uYWxidW0udG9wLXRocmVlLWFsYnVtIC5hbGJ1bS1jb250YWluZXI+KntiYWNrZ3JvdW5kLWNvbG9yOiNkN2U5ZTU7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDEyMCwxODIsMTY5LDAuMil9LmFsYnVtLnRvcC10aHJlZS1hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLXBvc2l0aW9ue2ZvbnQtc2l6ZToyNHB4fS5hbGJ1bS50b3AtdGhyZWUtYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZvIGEsLmFsYnVtLnRvcC10aHJlZS1hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm8gcHtmb250LXNpemU6MjBweH0uYWxidW0udG9wLXRocmVlLWFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAudG9wLWxhYmVse2ZvbnQtc2l6ZToxNnB4O2JhY2tncm91bmQtY29sb3I6Izc4YjZhOX0uYWxidW0udG9wLXNpeC1hbGJ1bSAuYWxidW0tY29udGFpbmVyPip7YmFja2dyb3VuZC1jb2xvcjojZmJmMWRlO2JvcmRlcjoxcHggc29saWQgcmdiYSgyNDIsMjA4LDE0NCwwLjIpfS5hbGJ1bS50b3Atc2l4LWFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0tcG9zaXRpb257Zm9udC1zaXplOjIwcHh9LmFsYnVtLnRvcC1zaXgtYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC50b3AtbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojZjJkMDkwfS5hbGJ1bS50b3AtdGVuLWFsYnVtIC5hbGJ1bS1jb250YWluZXI+Kntib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjQyLDIwOCwxNDQsMC40KX0uYWxidW0udG9wLXRlbi1hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLXBvc2l0aW9ue2ZvbnQtc2l6ZToxNnB4fS5hbGJ1bS50b3AtdGVuLWFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAudG9wLWxhYmVse2JhY2tncm91bmQtY29sb3I6I2YyZDA5MH0uYWxidW0uYWxidW0tZnVsbCAuYWxidW0tY29udGFpbmVyPip7YmFja2dyb3VuZC1jb2xvcjojZmZmO2N1cnNvcjphdXRvfS5hbGJ1bS5hbGJ1bS1mdWxsIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mb3tmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uYWxidW0uYWxidW0tZnVsbCAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm8gLmFsYnVtLWltYWdlIGltZ3toZWlnaHQ6MjAwcHg7d2lkdGg6MjAwcHg7bWFyZ2luLXJpZ2h0OjE2cHh9LmFsYnVtLmFsYnVtLWZ1bGwgLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZvIC5hbGJ1bS1mdWxsLWluZm97ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXgtd2lkdGg6MTAwJX0uYWxidW0uYWxidW0tZnVsbCAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm8gLmFsYnVtLWZ1bGwtaW5mbz5wLC5hbGJ1bS5hbGJ1bS1mdWxsIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mbyAuYWxidW0tZnVsbC1pbmZvPmRpdnttYXgtd2lkdGg6MTAwJTt3b3JkLWJyZWFrOmJyZWFrLXdvcmQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7bWFyZ2luOjhweCAwfS5hbGJ1bS5hbGJ1bS1mdWxsIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mbyAuYWxidW0tZnVsbC1pbmZvIC5hbGJ1bS1uYW1le2ZvbnQtc2l6ZTozMnB4O2ZvbnQtd2VpZ2h0OmJvbGR9LmFsYnVtLmFsYnVtLWZ1bGwgLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZvIC5hbGJ1bS1mdWxsLWluZm8gYXt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO2ZvbnQtc2l6ZToyNHB4O2NvbG9yOiMyMzRmNjF9LmFsYnVtLmFsYnVtLWZ1bGwgLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZvIC5hbGJ1bS1mdWxsLWluZm8gLmFsYnVtLXJpZ2h0c3tjb2xvcjojODg4O21hcmdpbjo4cHggMDtmb250LXNpemU6MTJweH0uYWxidW0uYWxidW0tZnVsbCAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm8gLmFsYnVtLWZ1bGwtaW5mbyAuYWxidW0tcHJpY2Ugc3Bhbntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6Izc4YjZhOTtwYWRkaW5nOjhweDtib3JkZXItcmFkaXVzOjRweH0uYWxidW0uYWxidW0tZnVsbCAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm8gLmFsYnVtLWZ1bGwtaW5mbyAuYWxidW0tZ2VucmUgYXttYXJnaW4tbGVmdDo4cHg7Zm9udC1zaXplOjE0cHh9LmFsYnVtLmFsYnVtLWZ1bGwgLmFsYnVtLWNvbnRhaW5lcj4qOmhvdmVye3RyYW5zZm9ybTpub25lO2N1cnNvcjphdXRvfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXsuYWxidW0uYWxidW0tZnVsbCAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm97ZmxleC1kaXJlY3Rpb246Y29sdW1ufX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbGJ1bXNMaXN0LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hbGJ1bS1saXN0e2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDttYXgtd2lkdGg6MTIwMHB4O3dpZHRoOjEwMHZ3fS5hbGJ1bS1saXN0Pip7ZmxleDowIDIwJTt3aWR0aDoyMCV9LmFsYnVtLWxpc3Q+KiAuYWxidW0taW1hZ2V7bWFyZ2luLWJvdHRvbToxNnB4fS5hbGJ1bS1saXN0Pio6Zmlyc3QtY2hpbGR7bWluLWhlaWdodDo0MDBweH0uYWxidW0tbGlzdD4qOm50aC1jaGlsZCgtbiszKTpub3QoOmZpcnN0LWNoaWxkKXtoZWlnaHQ6NDB2aDttaW4taGVpZ2h0OjM1MHB4fS5hbGJ1bS1saXN0Pio6bnRoLWNoaWxkKC1uKzYpOm5vdCg6bnRoLWNoaWxkKC1uKzMpKXtoZWlnaHQ6MzB2aDttaW4taGVpZ2h0OjMwMHB4fS5hbGJ1bS1saXN0Pio6bnRoLWNoaWxkKC1uKzEwKTpub3QoOm50aC1jaGlsZCgtbis2KSl7bWluLWhlaWdodDoyNTBweH0uYWxidW0tbGlzdD4qOm50aC1jaGlsZCgtbisyMCk6bm90KDpudGgtY2hpbGQoLW4rMTApKXttaW4taGVpZ2h0OjIwMHB4fS5hbGJ1bS1saXN0Pio6bnRoLWNoaWxkKC1uKzUwKTpub3QoOm50aC1jaGlsZCgtbisyMCkpe21pbi1oZWlnaHQ6MTUwcHg7Zm9udC1zaXplOjEycHh9LmFsYnVtLWxpc3Q+KjpudGgtY2hpbGQoLW4rMTAwKTpub3QoOm50aC1jaGlsZCgtbis1MCkpe21heC1oZWlnaHQ6MTAwcHg7Zm9udC1zaXplOjEycHh9LmFsYnVtLWxpc3Q+KjpudGgtY2hpbGQoLW4rMTAwKTpub3QoOm50aC1jaGlsZCgtbis1MCkpIC5hbGJ1bS1jb250YWluZXIgLmFsYnVtLWluZm97ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5hbGJ1bS1saXN0Pio6bnRoLWNoaWxkKC1uKzEwMCk6bm90KDpudGgtY2hpbGQoLW4rNTApKSAuYWxidW0tY29udGFpbmVyIC5hbGJ1bS1pbmZvIC5hbGJ1bS1pbWFnZXttYXJnaW4tYm90dG9tOjA7bWFyZ2luLXJpZ2h0OjhweH0uYWxidW0tbGlzdD4qOm50aC1jaGlsZCgtbisxMDApOm5vdCg6bnRoLWNoaWxkKC1uKzUwKSkgLmFsYnVtLWNvbnRhaW5lciAuYWxidW0taW5mbyAuYWxidW0taW1hZ2UgaW1ne21heC13aWR0aDo1MHB4fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KXsuYWxidW0tbGlzdD4qOmZpcnN0LWNoaWxke2ZsZXg6MCAxMDAlO3dpZHRoOjEwMCV9LmFsYnVtLWxpc3Q+KjpudGgtY2hpbGQoLW4rMyk6bm90KDpmaXJzdC1jaGlsZCl7ZmxleDowIDUwJTt3aWR0aDo1MCV9LmFsYnVtLWxpc3Q+KjpudGgtY2hpbGQoLW4rNik6bm90KDpudGgtY2hpbGQoLW4rMykpe2ZsZXg6MCAzMy4zMzMzJTt3aWR0aDozMy4zMzMzJX0uYWxidW0tbGlzdD4qOm50aC1jaGlsZCgtbisxMCk6bm90KDpudGgtY2hpbGQoLW4rNikpe2ZsZXg6MCAyNSU7d2lkdGg6MjUlfS5hbGJ1bS1saXN0Pio6bnRoLWNoaWxkKC1uKzIwKTpub3QoOm50aC1jaGlsZCgtbisxMCkpe2ZsZXg6MCAyMCU7d2lkdGg6MjAlfX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7LmFsYnVtLWxpc3Q+KntmbGV4OjAgMTAwJTttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0Ojc1cHh9LmFsYnVtLWxpc3Q+KiAuYWxidW0tY29udGFpbmVyIC5hbGJ1bS1pbmZve2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uYWxidW0tbGlzdD4qIC5hbGJ1bS1jb250YWluZXIgLmFsYnVtLWluZm8gcHt3b3JkLWJyZWFrOmJyZWFrLXdvcmQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7ZmxleDoxfS5hbGJ1bS1saXN0PiogLmFsYnVtLWNvbnRhaW5lciAuYWxidW0taW5mbyAuYWxidW0taW1hZ2V7ZmxleDoxO21hcmdpbi1yaWdodDo4cHg7bWFyZ2luLWJvdHRvbTowfS5hbGJ1bS1saXN0Pio6Zmlyc3QtY2hpbGR7aGVpZ2h0OjMwdmg7bWluLWhlaWdodDoyNTBweH0uYWxidW0tbGlzdD4qOm50aC1jaGlsZCgtbiszKTpub3QoOmZpcnN0LWNoaWxkKXtoZWlnaHQ6MjV2aDttaW4taGVpZ2h0OjIwMHB4fS5hbGJ1bS1saXN0Pio6bnRoLWNoaWxkKC1uKzYpOm5vdCg6bnRoLWNoaWxkKC1uKzMpKXtoZWlnaHQ6MjB2aDttaW4taGVpZ2h0OjE3NXB4fS5hbGJ1bS1saXN0Pio6bnRoLWNoaWxkKC1uKzEwKTpub3QoOm50aC1jaGlsZCgtbis2KSl7aGVpZ2h0OjE4dmg7bWluLWhlaWdodDoxNTBweH0uYWxidW0tbGlzdD4qOm50aC1jaGlsZCgtbis1MCk6bm90KDpudGgtY2hpbGQoLW4rMTApKXtoZWlnaHQ6MTV2aDttaW4taGVpZ2h0OjEyNXB4fX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1c3RvbS1idG57cGFkZGluZzo4cHggMTZweDtmb250LXNpemU6MTZweDtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MDtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzJmNjE3NDt0cmFuc2l0aW9uOmxpbmVhciBvcGFjaXR5IC4xcztvdXRsaW5lOjA7Y3Vyc29yOnBvaW50ZXJ9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoQmFyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZWFyY2gtYmFye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjojMmY2MTc0O2NvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo0cHh9LnNlYXJjaC1iYXIgLmN1c3RvbS1idG57aGVpZ2h0OjMycHg7d2lkdGg6MzJweDtwYWRkaW5nOjB9LnNlYXJjaC1iYXIgaW5wdXR7Zm9udC1zaXplOjE2cHg7cGFkZGluZzowIDRweDtoZWlnaHQ6MzJweDttYXgtd2lkdGg6MjAwcHg7b3BhY2l0eToxO291dGxpbmUtd2lkdGg6MDtib3JkZXI6MDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O3RyYW5zaXRpb246YWxsIGxpbmVhciAuMjVzO2NvbG9yOiNmZmZ9LnNlYXJjaC1iYXIgaW5wdXQ6OnBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC41KTtwb2ludGVyLWV2ZW50czpub25lfS5zZWFyY2gtYmFyIGlucHV0LmhpZGRlbntwYWRkaW5nOjA7bWF4LXdpZHRoOjA7b3BhY2l0eTowfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlbGVjdG9yLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZWxlY3RvcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5zZWxlY3Rvcj4uY3VzdG9tLWJ0bntoZWlnaHQ6MzJweDt3aWR0aDozMnB4O3BhZGRpbmc6MH0uc2VsZWN0b3IgLnNlbGVjdG9yLW9wdGlvbnN7ZGlzcGxheTpmbGV4O29wYWNpdHk6MTttYXJnaW4tdG9wOjE2cHg7cGFkZGluZzo0cHg7bWF4LXdpZHRoOjEwMHZoO3RyYW5zaXRpb246bGluZWFyIGFsbCAuMjVzfS5zZWxlY3RvciAuc2VsZWN0b3Itb3B0aW9ucz4uY3VzdG9tLWJ0bntvcGFjaXR5OjAuNTtoZWlnaHQ6MzJweDt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjI1cztmb250LXNpemU6MTJweDttYXJnaW4tcmlnaHQ6NHB4fS5zZWxlY3RvciAuc2VsZWN0b3Itb3B0aW9ucz4uY3VzdG9tLWJ0bi5zZWxlY3RlZHtvcGFjaXR5OjF9LnNlbGVjdG9yIC5zZWxlY3Rvci1vcHRpb25zPi5jdXN0b20tYnRuOmxhc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjB9LnNlbGVjdG9yIC5zZWxlY3Rvci1vcHRpb25zLmhpZGRlbntvcGFjaXR5OjA7bWFyZ2luLXRvcDowO3BhZGRpbmc6MCA0cHg7bWF4LXdpZHRoOjB9LnNlbGVjdG9yIC5zZWxlY3Rvci1vcHRpb25zLmhpZGRlbj4uY3VzdG9tLWJ0bntwYWRkaW5nOjA7b3BhY2l0eTowO2hlaWdodDowO3BvaW50ZXItZXZlbnRzOm5vbmV9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWxidW1MaXN0UGFnZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYWxidW1zLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5hbGJ1bXMtY29udGFpbmVyPi5zZWFyY2gtYmFye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6OHB4O2JvcmRlci1yYWRpdXM6MCAwIDRweCA0cHh9LmFsYnVtcy1jb250YWluZXI+LnNlbGVjdG9ye3Bvc2l0aW9uOmZpeGVkO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7ZmxleC1kaXJlY3Rpb246cm93O3RvcDo4cHg7cmlnaHQ6MDt6LWluZGV4OjN9LmFsYnVtcy1jb250YWluZXI+LnNlbGVjdG9yPi5jdXN0b20tYnRue21hcmdpbi1yaWdodDowO2JvcmRlci1yYWRpdXM6NHB4IDAgMCA0cHh9LmFsYnVtcy1jb250YWluZXI+LnNlbGVjdG9yIC5zZWxlY3Rvci1vcHRpb25ze3BhZGRpbmc6NHB4O21hcmdpbjowO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtiYWNrZ3JvdW5kLWNvbG9yOiMyZjYxNzQ7Ym9yZGVyLXJhZGl1czowIDAgMCA0cHh9LmFsYnVtcy1jb250YWluZXI+LnNlbGVjdG9yIC5zZWxlY3Rvci1vcHRpb25zPi5jdXN0b20tYnRue21hcmdpbi1yaWdodDowO21hcmdpbi1ib3R0b206NHB4O2JhY2tncm91bmQtY29sb3I6Izc4YjZhOTttYXgtd2lkdGg6MjAwcHh9LmFsYnVtcy1jb250YWluZXI+LnNlbGVjdG9yIC5zZWxlY3Rvci1vcHRpb25zPi5jdXN0b20tYnRuOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTowfS5hbGJ1bXMtY29udGFpbmVyPi5zZWxlY3RvciAuc2VsZWN0b3Itb3B0aW9ucy5oaWRkZW57cGFkZGluZzo0cHggMH0uYWxidW1zLWNvbnRhaW5lcj4uc2VsZWN0b3IgLnNlbGVjdG9yLW9wdGlvbnMuaGlkZGVuPi5jdXN0b20tYnRue21heC13aWR0aDowfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FsYnVtUGFnZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYWxidW0tcGFnZXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7bWF4LXdpZHRoOjEyMDBweDttYXJnaW4tdG9wOjhweH0uYWxidW0tcGFnZT5he3Bvc2l0aW9uOmZpeGVkO3RvcDoxNnB4O2xlZnQ6MTZweDtoZWlnaHQ6MzJweDt3aWR0aDozMnB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kLWNvbG9yOiMyZjYxNzQ7Y29sb3I6I2ZmZjt0ZXh0LWRlY29yYXRpb246bm9uZX0uYWxidW0tcGFnZT4uYWxidW17d2lkdGg6MTAwJX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRpb25zLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mYWRlaW57LXdlYmtpdC1hbmltYXRpb246ZmFkZWluIDAuNXM7LW1vei1hbmltYXRpb246ZmFkZWluIDAuNXM7LW1zLWFuaW1hdGlvbjpmYWRlaW4gMC41czstby1hbmltYXRpb246ZmFkZWluIDAuNXM7YW5pbWF0aW9uOmZhZGVpbiAwLjVzfUBrZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC1tb3ota2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALW1zLWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALW8ta2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7Zm9udC1mYW1pbHk6J01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O21hcmdpbjowO2NvbG9yOiMyODI4Mjg7LXdlYmtpdC1mb250LXNtb290aGluZzpzdWJwaXhlbC1hbnRpYWxpYXNlZDstbW96LW9zeC1mb250LXNtb290aGluZzphdXRvfS5zaGFkb3d7LXdlYmtpdC1ib3gtc2hhZG93OjBweCAwIDhweCAycHggcmdiYSgxMzYsMTM2LDEzNiwwLjIpOy1tb3otYm94LXNoYWRvdzowcHggMCA4cHggMnB4IHJnYmEoMTM2LDEzNiwxMzYsMC4yKTtib3gtc2hhZG93OjBweCAwIDhweCAycHggcmdiYSgxMzYsMTM2LDEzNiwwLjIpfW1haW57ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjEwMHZoO2JhY2tncm91bmQtY29sb3I6I2ZhZmFmZn1tYWluICNtYWluLWNvbnRhaW5lcnt3aWR0aDpjYWxjKDEwMCUgLSAzMnB4KTtwYWRkaW5nOjAgMTZweDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1ufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJleHBvcnQgY29uc3QgQUxCVU1TID0ge1xuICBMT0FESU5HOiAnQGFsYnVtcy9MT0FESU5HJyxcbiAgTE9BRElOR19FTkQ6ICdAYWxidW1zL0xPQURJTkdfRU5EJyxcbiAgU0VUOiAnQGFsYnVtcy9TRVQnLFxuICBTRVRfQUxMOiAnQGFsYnVtcy9TRVRfQUxMJyxcbn07XG5cbmV4cG9ydCBjb25zdCBHRU5SRVMgPSB7XG4gIFNFVF9BTEw6ICdAZ2VucmVzL1NFVF9BTEwnLFxufTtcbiIsImltcG9ydCB7IEFMQlVNUyB9IGZyb20gJy4uLy4uL3V0aWxzL2Rpc3BhdGNocyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgYWxidW06IHVuZGVmaW5lZCxcbiAgYWxidW1zOiBbXSxcbiAgbG9hZGluZzogZmFsc2UsXG59O1xuXG5jb25zdCBhbGJ1bXMgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBTEJVTVMuU0VUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFsYnVtOiBhY3Rpb24uYWxidW0gfTtcbiAgICBjYXNlIEFMQlVNUy5TRVRfQUxMOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFsYnVtczogYWN0aW9uLmFsYnVtcyB9O1xuICAgIGNhc2UgQUxCVU1TLkxPQURJTkc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9O1xuICAgIGNhc2UgQUxCVU1TLkxPQURJTkdfRU5EOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFsYnVtcztcbiIsImltcG9ydCB7IEdFTlJFUyB9IGZyb20gJy4uLy4uL3V0aWxzL2Rpc3BhdGNocyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZ2VucmVzOiBbXSxcbiAgbG9hZGluZzogZmFsc2UsXG59O1xuXG5jb25zdCBnZW5yZXMgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHRU5SRVMuU0VUX0FMTDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBnZW5yZXM6IGFjdGlvbi5nZW5yZXMgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2VucmVzO1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgYWxidW1zIGZyb20gJy4vYWxidW1zL2FsYnVtcyc7XG5pbXBvcnQgZ2VucmVzIGZyb20gJy4vZ2VucmVzL2dlbnJlcyc7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgYWxidW1zLFxuICBnZW5yZXMsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJpbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcblxuY29uc3QgbWlkZGxld2FyZXMgPSBbIHRodW5rTWlkZGxld2FyZSBdO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgSWNvbiA9ICh7IGljb24sIC4uLnJlc3QgfSkgPT4gPGkgey4uLnJlc3R9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT17aWNvbn0gLz47XG5cbkljb24uZGVmYXVsdFByb3BzID0ge1xuICBpY29uOiB1bmRlZmluZWQsXG59O1xuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0ICcuL2ljb24uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbic7XG5cbmNvbnN0IEV4dGVybmFsTGluayA9ICh7IGNsYXNzTmFtZSwgaWNvbiwgdGV4dCwgLi4ucmVzdCB9KSA9PiAoXG4gIDxhIHsuLi5yZXN0fSBjbGFzc05hbWU9e2BleHRlcm5hbC1saW5rJHtjbGFzc05hbWUgPyBgICR7Y2xhc3NOYW1lfWAgOiAnJ31gfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAge2ljb24gJiYgPEljb24gaWNvbj17aWNvbn0gLz59XG4gICAge3RleHR9XG4gIDwvYT5cbik7XG5cbkV4dGVybmFsTGluay5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBpY29uOiB1bmRlZmluZWQsXG4gIHRleHQ6IHVuZGVmaW5lZCxcbn07XG5cbkV4dGVybmFsTGluay5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVybmFsTGluaztcbiIsImltcG9ydCBFeHRlcm5hbExpbmsgZnJvbSAnLi9FeHRlcm5hbExpbmsnO1xuaW1wb3J0ICcuL2V4dGVybmFsTGluay5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgRXh0ZXJuYWxMaW5rO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgRXh0ZXJuYWxMaW5rIGZyb20gJy4uLy4uL0V4dGVybmFsTGluayc7XG5cbmNvbnN0IEFsYnVtSW5mbyA9ICh7IGFsYnVtLCBmdWxsSW5mbyB9KSA9PlxuICBhbGJ1bSAmJiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW0tcG9zaXRpb25cIj57YWxidW0ucG9zaXRpb259LjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bS1pbmZvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW0taW1hZ2VcIj5cbiAgICAgICAgICA8aW1nIHNyYz17YWxidW0uaW1hZ2V9IGFsdD17YWxidW0ubmFtZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtmdWxsSW5mbyA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtLWZ1bGwtaW5mb1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWxidW0tbmFtZVwiPnthbGJ1bS5uYW1lfTwvcD5cbiAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgaHJlZj17YWxidW0uYXJ0aXN0TGlua30gZGlzYWJsZWQ9eyFmdWxsSW5mb30gdGV4dD17YWxidW0uYXJ0aXN0fSAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWxidW0tcmlnaHRzXCI+e2FsYnVtLnJpZ2h0c308L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtLWdlbnJlXCI+XG4gICAgICAgICAgICAgIEdlbnJlOlxuICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rIGhyZWY9e2FsYnVtLmdlbnJlTGlua30gZGlzYWJsZWQ9eyFmdWxsSW5mb30gdGV4dD17YWxidW0uZ2VucmV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW0tcHJpY2VcIj5cbiAgICAgICAgICAgICAgUHJpY2U6IDxzcGFuPnthbGJ1bS5wcmljZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW0tc29uZ3NcIj5OdW1iZXIgb2Ygc29uZ3M6IHthbGJ1bS50b3RhbFNvbmdzfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge2FsYnVtLmFydGlzdH0gLSB7YWxidW0ubmFtZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHsxMSA+IGFsYnVtLnBvc2l0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwidG9wLWxhYmVsIHNoYWRvd1wiPlRPUCB7YWxidW0ucG9zaXRpb259PC9kaXY+fVxuICAgIDwvPlxuICApO1xuXG5BbGJ1bUluZm8uZGVmYXVsdFByb3BzID0ge1xuICBmdWxsSW5mbzogZmFsc2UsXG59O1xuXG5BbGJ1bUluZm8ucHJvcFR5cGVzID0ge1xuICBhbGJ1bTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBmdWxsSW5mbzogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGJ1bUluZm87XG4iLCJleHBvcnQgY29uc3QgTUFJTl9VUkwgPSBwcm9jZXNzLmVudi5QVUJMSUNfVVJMIHx8ICcvbXVzaWMtY2hhbGxlbmdlLyc7XG5leHBvcnQgY29uc3QgQUxCVU1fVVJMID0gYCR7TUFJTl9VUkx9OmFsYnVtSWRgO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBBbGJ1bUluZm8gZnJvbSAnLi9BbGJ1bUluZm8vQWxidW1JbmZvJztcbmltcG9ydCB7IE1BSU5fVVJMIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXJscyc7XG5cbmNvbnN0IGdldENsYXNzTmFtZSA9IChwb3NpdGlvbikgPT4ge1xuICBsZXQgY2xhc3NuYW1lID0gJ3RvcC1odW5kcmVkLWFsYnVtJztcblxuICBpZiAoMSA9PT0gcG9zaXRpb24pIHtcbiAgICBjbGFzc25hbWUgPSAndG9wLWFsYnVtJztcbiAgfSBlbHNlIGlmICg0ID4gcG9zaXRpb24pIHtcbiAgICBjbGFzc25hbWUgPSAndG9wLXRocmVlLWFsYnVtJztcbiAgfSBlbHNlIGlmICg3ID4gcG9zaXRpb24pIHtcbiAgICBjbGFzc25hbWUgPSAndG9wLXNpeC1hbGJ1bSc7XG4gIH0gZWxzZSBpZiAoMTEgPiBwb3NpdGlvbikge1xuICAgIGNsYXNzbmFtZSA9ICd0b3AtdGVuLWFsYnVtJztcbiAgfSBlbHNlIGlmICgyMSA+IHBvc2l0aW9uKSB7XG4gICAgY2xhc3NuYW1lID0gJ3RvcC10d2VudHktYWxidW0nO1xuICB9IGVsc2UgaWYgKDUxID4gcG9zaXRpb24pIHtcbiAgICBjbGFzc25hbWUgPSAndG9wLWZpZnR5LWFsYnVtJztcbiAgfVxuXG4gIHJldHVybiBjbGFzc25hbWU7XG59O1xuXG5jb25zdCBBbGJ1bSA9ICh7IGFsYnVtLCBmdWxsSW5mbyB9KSA9PlxuICBhbGJ1bSAmJiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BhbGJ1bSBmYWRlaW4ke2Z1bGxJbmZvID8gJyBhbGJ1bS1mdWxsJyA6ICcnfSAke2dldENsYXNzTmFtZShhbGJ1bS5wb3NpdGlvbil9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtLWNvbnRhaW5lclwiPlxuICAgICAgICB7ZnVsbEluZm8gPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3dcIj5cbiAgICAgICAgICAgIDxBbGJ1bUluZm8gYWxidW09e2FsYnVtfSBmdWxsSW5mbz17ZnVsbEluZm99IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwic2hhZG93XCIgdG89e2Ake01BSU5fVVJMfSR7YWxidW0uaWR9YH0+XG4gICAgICAgICAgICA8QWxidW1JbmZvIGFsYnVtPXthbGJ1bX0gZnVsbEluZm89e2Z1bGxJbmZvfSAvPlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG5BbGJ1bS5kZWZhdWx0UHJvcHMgPSB7XG4gIGZ1bGxJbmZvOiBmYWxzZSxcbn07XG5cbkFsYnVtLnByb3BUeXBlcyA9IHtcbiAgYWxidW06IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZnVsbEluZm86IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxidW07XG4iLCJpbXBvcnQgQWxidW0gZnJvbSAnLi9BbGJ1bSc7XG5pbXBvcnQgJy4vYWxidW0uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEFsYnVtO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQWxidW0gZnJvbSAnLi4vQWxidW0nO1xuXG5jb25zdCBBbGJ1bUxpc3QgPSAoeyBhbGJ1bXMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtLWxpc3RcIj5cbiAgICB7MCA8IGFsYnVtcz8ubGVuZ3RoICYmIGFsYnVtcy5tYXAoKGFsYnVtKSA9PiA8QWxidW0gYWxidW09e2FsYnVtfSBrZXk9e2FsYnVtLmlkfSAvPil9XG4gIDwvZGl2PlxuKTtcblxuQWxidW1MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgYWxidW1zOiBbXSxcbn07XG5cbkFsYnVtTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGFsYnVtczogUHJvcFR5cGVzLmFycmF5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxidW1MaXN0O1xuIiwiaW1wb3J0IEFsYnVtTGlzdCBmcm9tICcuL0FsYnVtTGlzdCc7XG5pbXBvcnQgJy4vYWxidW1zTGlzdC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgQWxidW1MaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcblxuY29uc3QgQnV0dG9uID0gKHsgY2xhc3NOYW1lLCBpY29uLCB0ZXh0LCAuLi5yZXN0IH0pID0+IChcbiAgPGJ1dHRvbiBjbGFzc05hbWU9e2BjdXN0b20tYnRuJHtjbGFzc05hbWUgPyBgICR7Y2xhc3NOYW1lfWAgOiAnJ31gfSB0eXBlPVwiYnV0dG9uXCIgey4uLnJlc3R9PlxuICAgIHtpY29uICYmIDxJY29uIGljb249e2ljb259IC8+fVxuICAgIHt0ZXh0fVxuICA8L2J1dHRvbj5cbik7XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBpY29uOiB1bmRlZmluZWQsXG4gIHRleHQ6IHVuZGVmaW5lZCxcbn07XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0ICcuL2J1dHRvbi5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5cbmNvbnN0IFNlYXJjaEJhciA9ICh7IGNsZWFySWNvbiwgaWNvbiwgb25TZWFyY2ggfSkgPT4ge1xuICBjb25zdCBbIHZhbHVlLCBzZXRWYWx1ZSBdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbIHZpc2libGUsIHNldFZpc2libGUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvdXRzaWRlUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgc2V0VmFsdWUoJycpO1xuICAgIHNldFZpc2libGUoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKHZpc2libGUgJiYgb3V0c2lkZVJlZi5jdXJyZW50ICYmICFvdXRzaWRlUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc2libGUpIHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9XG4gIH0sIFsgdmlzaWJsZSBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG9uU2VhcmNoKHZhbHVlKTtcbiAgfSwgWyB2YWx1ZSBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyIHNoYWRvd1wiIHJlZj17b3V0c2lkZVJlZn0+XG4gICAgICA8QnV0dG9uIGljb249e2ljb259IG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUodHJ1ZSl9IC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXt2YWx1ZSB8fCB2aXNpYmxlID8gJycgOiAnaGlkZGVuJ31cbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAvPlxuICAgICAgeyh2aXNpYmxlIHx8IHZhbHVlKSAmJiA8QnV0dG9uIGNsYXNzTmFtZT1cImZhZGVpblwiIGljb249e2NsZWFySWNvbn0gb25DbGljaz17Y2xlYXJ9IC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU2VhcmNoQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xlYXJJY29uOiAnZmFzIGZhLXRpbWVzJyxcbiAgaWNvbjogJ2ZhcyBmYS1zZWFyY2gnLFxufTtcblxuU2VhcmNoQmFyLnByb3BUeXBlcyA9IHtcbiAgY2xlYXJJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvblNlYXJjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcbiIsImltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9TZWFyY2hCYXInO1xuaW1wb3J0ICcuL3NlYXJjaEJhci5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuXG5jb25zdCBTZWxlY3RvciA9ICh7IG9uQ2hhbmdlLCBvcHRpb25zIH0pID0+IHtcbiAgY29uc3QgWyBzZWxlY3RlZCwgc2V0U2VsZWN0ZWQgXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgWyBzZWxlY3RlZEFsbCwgc2V0U2VsZWN0ZWRBbGwgXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbIHZpc2libGUsIHNldFZpc2libGUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzZXRBbGxTZWxlY3RlZCA9ICgpID0+IHtcbiAgICBpZiAob3B0aW9ucz8ubGVuZ3RoKSB7XG4gICAgICBjb25zdCBuZXdTZWxlY3RlZCA9IFtdO1xuXG4gICAgICBvcHRpb25zLmZvckVhY2goKG9wdCkgPT4gbmV3U2VsZWN0ZWQucHVzaChvcHQpKTtcbiAgICAgIHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25TZWxlY3QgPSAob3B0aW9uKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZC5pbmRleE9mKG9wdGlvbik7XG4gICAgaWYgKC0xID09PSBpbmRleCkge1xuICAgICAgc2V0U2VsZWN0ZWQoWyAuLi5zZWxlY3RlZCwgb3B0aW9uIF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZChzZWxlY3RlZC5maWx0ZXIoKG9wdCkgPT4gb3B0ICE9PSBvcHRpb24pKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRBbGxTZWxlY3RlZCgpO1xuICB9LCBbIG9wdGlvbnMgXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzYW1lTGVuZ3RoID0gc2VsZWN0ZWQubGVuZ3RoID09PSBvcHRpb25zPy5sZW5ndGg7XG4gICAgaWYgKHNlbGVjdGVkQWxsICYmICFzYW1lTGVuZ3RoKSB7XG4gICAgICBzZXRTZWxlY3RlZEFsbChmYWxzZSk7XG4gICAgfSBlbHNlIGlmICghc2VsZWN0ZWRBbGwgJiYgc2FtZUxlbmd0aCkge1xuICAgICAgc2V0U2VsZWN0ZWRBbGwodHJ1ZSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2Uoc2VsZWN0ZWQpO1xuICB9LCBbIHNlbGVjdGVkIF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RvclwiPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3dcIlxuICAgICAgICBpY29uPXtgZmFzIGZhLSR7dmlzaWJsZSA/ICdhcnJvdy1yaWdodCcgOiAnZmlsdGVyJ31gfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKCF2aXNpYmxlKX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHNlbGVjdG9yLW9wdGlvbnMgc2hhZG93JHt2aXNpYmxlID8gJycgOiAnIGhpZGRlbid9YH0+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdGVkQWxsID8gJ3NlbGVjdGVkJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBkaXNhYmxlZD17c2VsZWN0ZWRBbGx9XG4gICAgICAgICAgb25DbGljaz17c2V0QWxsU2VsZWN0ZWR9XG4gICAgICAgICAgdGV4dD1cIkFsbFwiXG4gICAgICAgIC8+XG4gICAgICAgIHtvcHRpb25zLm1hcCgob3B0KSA9PiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAga2V5PXtvcHR9XG4gICAgICAgICAgICBjbGFzc05hbWU9ey0xID09PSBzZWxlY3RlZC5pbmRleE9mKG9wdCkgPyB1bmRlZmluZWQgOiAnc2VsZWN0ZWQnfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3Qob3B0KX1cbiAgICAgICAgICAgIHRleHQ9e29wdH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU2VsZWN0b3IuZGVmYXVsdFByb3BzID0ge1xuICBvcHRpb25zOiBbXSxcbn07XG5cblNlbGVjdG9yLnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yO1xuIiwiaW1wb3J0IFNlbGVjdG9yIGZyb20gJy4vU2VsZWN0b3InO1xuaW1wb3J0ICcuL3NlbGVjdG9yLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBbGJ1bUxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BbGJ1bXNMaXN0JztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWFyY2hCYXInO1xuaW1wb3J0IFNlbGVjdG9yIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VsZWN0b3InO1xuXG5jb25zdCBBbGJ1bUxpc3RQYWdlID0gKHsgYWxidW1zLCBnZW5yZXMsIGdldEFsbEFsYnVtcywgbG9hZGluZyB9KSA9PiB7XG4gIGNvbnN0IFsgZmlsdGVyZWRBbGJ1bXMsIHNldEZpbHRlcmVkQWxidW1zIF0gPSB1c2VTdGF0ZShhbGJ1bXMpO1xuICBjb25zdCBbIGZpbHRlcmVkR2VucmVzLCBzZXRGaWx0ZXJlZEdlbnJlcyBdID0gdXNlU3RhdGUoZ2VucmVzKTtcbiAgY29uc3QgWyBzZWFyY2gsIHNldFNlYXJjaCBdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcblxuICBjb25zdCBpc1NlbGVjdGVkID0gKHsgYXJ0aXN0LCBuYW1lLCBnZW5yZSB9KSA9PlxuICAgIC0xIDwgZmlsdGVyZWRHZW5yZXMuaW5kZXhPZihnZW5yZSkgJiZcbiAgICAoLTEgPCBhcnRpc3QudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fCAtMSA8IG5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBbGxBbGJ1bXMoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFsYnVtcyAmJiBzZWFyY2gpIHtcbiAgICAgIHNldEZpbHRlcmVkQWxidW1zKGFsYnVtcy5maWx0ZXIoKGFsYnVtKSA9PiBpc1NlbGVjdGVkKGFsYnVtKSkpO1xuICAgIH0gZWxzZSBpZiAoYWxidW1zKSB7XG4gICAgICBzZXRGaWx0ZXJlZEFsYnVtcyhhbGJ1bXMpO1xuICAgIH1cbiAgfSwgWyBhbGJ1bXMsIHNlYXJjaCBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmaWx0ZXJlZEdlbnJlcy5sZW5ndGggIT09IGdlbnJlcz8ubGVuZ3RoIHx8IGZpbHRlcmVkQWxidW1zPy5sZW5ndGggIT09IGFsYnVtcz8ubGVuZ3RoKSB7XG4gICAgICBzZXRGaWx0ZXJlZEFsYnVtcyhhbGJ1bXMuZmlsdGVyKChhbGJ1bSkgPT4gaXNTZWxlY3RlZChhbGJ1bSkpKTtcbiAgICB9XG4gIH0sIFsgZmlsdGVyZWRHZW5yZXMgXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtcy1jb250YWluZXJcIj5cbiAgICAgIDxoMT5Ub3AgMTAwIEFsYnVtcyBpbiBpVHVuZXMgVVNBPC9oMT5cbiAgICAgIDxTZWFyY2hCYXIgb25TZWFyY2g9e3NldFNlYXJjaH0gLz5cbiAgICAgIHshIWdlbnJlcz8ubGVuZ3RoICYmIDxTZWxlY3RvciBvcHRpb25zPXtnZW5yZXN9IG9uQ2hhbmdlPXtzZXRGaWx0ZXJlZEdlbnJlc30gLz59XG4gICAgICB7bG9hZGluZyAmJiA8ZGl2PkxPQURJTkc8L2Rpdj59XG4gICAgICA8QWxidW1MaXN0IGFsYnVtcz17ZmlsdGVyZWRBbGJ1bXN9IGdlbnJlcz17Z2VucmVzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQWxidW1MaXN0UGFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsYnVtczogW10sXG4gIGdlbnJlczogW10sXG4gIGxvYWRpbmc6IGZhbHNlLFxufTtcblxuQWxidW1MaXN0UGFnZS5wcm9wVHlwZXMgPSB7XG4gIGFsYnVtczogUHJvcFR5cGVzLmFycmF5LFxuICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgZ2V0QWxsQWxidW1zOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsYnVtTGlzdFBhZ2U7XG4iLCJpbXBvcnQgQWxidW1MaXN0UGFnZSBmcm9tICcuL0FsYnVtTGlzdFBhZ2UnO1xuaW1wb3J0ICcuL2FsYnVtTGlzdFBhZ2Uuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEFsYnVtTGlzdFBhZ2U7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgZ2V0ID0gYXN5bmMgKHVybCkgPT4gYXhpb3MuZ2V0KHVybCk7XG5cbmV4cG9ydCBjb25zdCBwb3N0ID0gYXN5bmMgKHVybCwgcGFyYW1zKSA9PiBheGlvcy5wb3N0KHVybCwgcGFyYW1zKTtcblxuZXhwb3J0IGNvbnN0IHB1dCA9IGFzeW5jICh1cmwsIHBhcmFtcykgPT4gYXhpb3MucHV0KHVybCwgcGFyYW1zKTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZSA9IGFzeW5jICh1cmwsIHBhcmFtcykgPT4gYXhpb3MuZGVsZXRlKHVybCwgcGFyYW1zKTtcbiIsImltcG9ydCB7IEdFTlJFUyB9IGZyb20gJy4uLy4uL3V0aWxzL2Rpc3BhdGNocyc7XG5cbmNvbnN0IGdldEFsYnVtR2VucmVzID0gKGFsYnVtcykgPT4ge1xuICBsZXQgZ2VucmVzID0gW107XG5cbiAgaWYgKGFsYnVtcz8ubGVuZ3RoKSB7XG4gICAgY29uc3QgYWxsID0gYWxidW1zLm1hcCgoeyBnZW5yZSB9KSA9PiBnZW5yZSk7XG4gICAgZ2VucmVzID0gYWxsLmZpbHRlcigoZ2VucmUsIGlkeCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKGdlbnJlKSA9PT0gaWR4KS5zb3J0KCk7XG4gIH1cbiAgcmV0dXJuIGdlbnJlcztcbn07XG5cbmNvbnN0IHNldEFsYnVtR2VucmVzID0gKGFsYnVtcykgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHsgdHlwZTogR0VOUkVTLlNFVF9BTEwsIGdlbnJlczogZ2V0QWxidW1HZW5yZXMoYWxidW1zKSB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldEFsYnVtR2VucmVzO1xuIiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vQXBpV3JhcHBlcic7XG5pbXBvcnQgeyBBTEJVTVMgfSBmcm9tICcuLi8uLi91dGlscy9kaXNwYXRjaHMnO1xuaW1wb3J0IHNldEFsYnVtR2VucmVzIGZyb20gJy4uL2dlbnJlcy9nZW5yZXMnO1xuXG5jb25zdCBJVFVORVNfVE9QXzEwMCA9ICdodHRwczovL2l0dW5lcy5hcHBsZS5jb20vdXMvcnNzL3RvcGFsYnVtcy9saW1pdD0xMDAvanNvbic7XG5cbmNvbnN0IExPQURJTkcgPSB7IHR5cGU6IEFMQlVNUy5MT0FESU5HIH07XG5jb25zdCBMT0FESU5HX0VORCA9IHsgdHlwZTogQUxCVU1TLkxPQURJTkdfRU5EIH07XG5cbmV4cG9ydCBjb25zdCBzZXRTZWxlY3RlZEFsYnVtID0gKGFsYnVtKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goeyB0eXBlOiBBTEJVTVMuU0VULCBhbGJ1bSB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRBbGJ1bXMgPSAoYWxidW1zKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goeyB0eXBlOiBBTEJVTVMuU0VUX0FMTCwgYWxidW1zIH0pO1xufTtcblxuY29uc3QgZm9ybWF0QWxidW0gPSAoYWxidW0sIHBvc2l0aW9uKSA9PlxuICBhbGJ1bSA/XG4gICAge1xuICAgICAgICBuYW1lOiBhbGJ1bVsnaW06bmFtZSddPy5sYWJlbCxcbiAgICAgICAgYXJ0aXN0OiBhbGJ1bVsnaW06YXJ0aXN0J10/LmxhYmVsLFxuICAgICAgICBhcnRpc3RMaW5rOiBhbGJ1bVsnaW06YXJ0aXN0J10/LmF0dHJpYnV0ZXM/LmhyZWYsXG4gICAgICAgIGlkOiBhbGJ1bS5pZD8uYXR0cmlidXRlcz8uWydpbTppZCddLFxuICAgICAgICBpbWFnZTogYWxidW1bJ2ltOmltYWdlJ10/LlthbGJ1bVsnaW06aW1hZ2UnXS5sZW5ndGggLSAxXT8ubGFiZWwsXG4gICAgICAgIHJlbGVhc2VEYXRlOiBhbGJ1bVsnaW06cmVsZWFzZURhdGUnXT8ubGFiZWwgP1xuICAgICAgICAgIGZvcm1hdChuZXcgRGF0ZShhbGJ1bVsnaW06cmVsZWFzZURhdGUnXS5sYWJlbCksICdkZC9NTS9ZWVknKSA6XG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uICsgMSxcbiAgICAgICAgbGluazogYWxidW0uaWQ/LmxhYmVsIHx8IGFsYnVtLmxpbms/LmF0dHJpYnV0ZXM/LmhyZWYsXG4gICAgICAgIGdlbnJlOiBhbGJ1bS5jYXRlZ29yeT8uYXR0cmlidXRlcz8ubGFiZWwsXG4gICAgICAgIGdlbnJlTGluazogYWxidW0uY2F0ZWdvcnk/LmF0dHJpYnV0ZXM/LnNjaGVtZSxcbiAgICAgICAgcHJpY2U6IGFsYnVtWydpbTpwcmljZSddPy5sYWJlbCxcbiAgICAgICAgdG90YWxTb25nczogYWxidW1bJ2ltOml0ZW1Db3VudCddPy5sYWJlbCxcbiAgICAgICAgcmlnaHRzOiBhbGJ1bS5yaWdodHM/LmxhYmVsLFxuICAgICAgfSA6XG4gICAgbnVsbDtcblxuY29uc3QgZm9ybWF0QWxidW1zID0gKGFsYnVtcykgPT4gKGFsYnVtcz8ubGVuZ3RoID8gYWxidW1zLm1hcChmb3JtYXRBbGJ1bSkgOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxBbGJ1bXMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goTE9BRElORyk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBnZXQoSVRVTkVTX1RPUF8xMDApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgYWxidW1zID0gZm9ybWF0QWxidW1zKHJlc3BvbnNlLmRhdGEuZmVlZC5lbnRyeSk7XG4gICAgICAgIGRpc3BhdGNoKHNldEFsYnVtR2VucmVzKGFsYnVtcykpO1xuICAgICAgICBkaXNwYXRjaChzZXRBbGJ1bXMoYWxidW1zKSk7XG4gICAgICAgIHJlc29sdmUoYWxidW1zKTtcbiAgICAgICAgZGlzcGF0Y2goTE9BRElOR19FTkQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICBkaXNwYXRjaChMT0FESU5HX0VORCk7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxidW1CeUlkID0gKGFsYnVtSWQpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgZGlzcGF0Y2goTE9BRElORyk7XG4gIGNvbnN0IHsgYWxidW1zIH0gPSBnZXRTdGF0ZSgpLmFsYnVtcztcblxuICBpZiAoYWxidW1zPy5sZW5ndGgpIHtcbiAgICBkaXNwYXRjaChzZXRTZWxlY3RlZEFsYnVtKGFsYnVtcy5maW5kKChhbGJ1bSkgPT4gYWxidW0uaWQgPT09IGFsYnVtSWQpKSk7XG4gICAgZGlzcGF0Y2goTE9BRElOR19FTkQpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BhdGNoKGdldEFsbEFsYnVtcygpKVxuICAgICAgLnRoZW4oKGZvdW5kQWxidW1zKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldFNlbGVjdGVkQWxidW0oZm91bmRBbGJ1bXMuZmluZCgoYWxidW0pID0+IGFsYnVtLmlkID09PSBhbGJ1bUlkKSkpO1xuICAgICAgICBkaXNwYXRjaChMT0FESU5HX0VORCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goTE9BRElOR19FTkQpO1xuICAgICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgQWxidW1MaXN0UGFnZSBmcm9tICcuLi8uLi9wYWdlcy9BbGJ1bUxpc3RQYWdlJztcbmltcG9ydCB7IGdldEFsbEFsYnVtcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYWxidW1zL2FsYnVtcyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGFsYnVtcywgZ2VucmVzIH0pID0+ICh7XG4gIGFsYnVtczogYWxidW1zLmFsYnVtcyxcbiAgZ2VucmVzOiBnZW5yZXMuZ2VucmVzLFxuICBsb2FkaW5nOiBhbGJ1bXMubG9hZGluZyxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIC4uLmJpbmRBY3Rpb25DcmVhdG9ycyhcbiAgICB7XG4gICAgICBnZXRBbGxBbGJ1bXMsXG4gICAgfSxcbiAgICBkaXNwYXRjaCxcbiAgKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFsYnVtTGlzdFBhZ2UpKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlUGFyYW1zLCBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQWxidW0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BbGJ1bSc7XG5pbXBvcnQgeyBNQUlOX1VSTCB9IGZyb20gJy4uLy4uL3V0aWxzL3VybHMnO1xuXG5jb25zdCBBbGJ1bVBhZ2UgPSAoeyBhbGJ1bSwgZ2V0QWxidW1CeUlkLCBsb2FkaW5nLCBzZXRTZWxlY3RlZEFsYnVtIH0pID0+IHtcbiAgY29uc3QgeyBhbGJ1bUlkIH0gPSB1c2VQYXJhbXMoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWxidW1JZCAmJiAhYWxidW0/LmlkKSB7XG4gICAgICBnZXRBbGJ1bUJ5SWQoYWxidW1JZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHNldFNlbGVjdGVkQWxidW0oKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW0tcGFnZVwiPlxuICAgICAgPE5hdkxpbmsgdG89e01BSU5fVVJMfT5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LWxlZnRcIiAvPlxuICAgICAgPC9OYXZMaW5rPlxuICAgICAge2xvYWRpbmcgfHwgIWFsYnVtPy5pZCA/IDxkaXY+TE9BRElORy4uLjwvZGl2PiA6IDxBbGJ1bSBhbGJ1bT17YWxidW19IGZ1bGxJbmZvIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQWxidW1QYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWxidW06IHt9LFxuICBsb2FkaW5nOiBmYWxzZSxcbn07XG5cbkFsYnVtUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGFsYnVtOiBQcm9wVHlwZXMub2JqZWN0LFxuICBnZXRBbGJ1bUJ5SWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBzZXRTZWxlY3RlZEFsYnVtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxidW1QYWdlO1xuIiwiaW1wb3J0IEFsYnVtUGFnZSBmcm9tICcuL0FsYnVtUGFnZSc7XG5pbXBvcnQgJy4vYWxidW1QYWdlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBBbGJ1bVBhZ2U7XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgQWxidW1QYWdlIGZyb20gJy4uLy4uL3BhZ2VzL0FsYnVtUGFnZSc7XG5pbXBvcnQgeyBnZXRBbGJ1bUJ5SWQsIHNldFNlbGVjdGVkQWxidW0gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2FsYnVtcy9hbGJ1bXMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBhbGJ1bXMgfSkgPT4gKHtcbiAgYWxidW06IGFsYnVtcy5hbGJ1bSxcbiAgbG9hZGluZzogYWxidW1zLmxvYWRpbmcsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAuLi5iaW5kQWN0aW9uQ3JlYXRvcnMoXG4gICAge1xuICAgICAgZ2V0QWxidW1CeUlkLFxuICAgICAgc2V0U2VsZWN0ZWRBbGJ1bSxcbiAgICB9LFxuICAgIGRpc3BhdGNoLFxuICApLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWxidW1QYWdlKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEFsYnVtTGlzdFBhZ2UgZnJvbSAnLi4vY29udGFpbmVycy9hbGJ1bUxpc3QnO1xuaW1wb3J0IEFsYnVtUGFnZSBmcm9tICcuLi9jb250YWluZXJzL2FsYnVtJztcbmltcG9ydCB7IEFMQlVNX1VSTCwgTUFJTl9VUkwgfSBmcm9tICcuLi91dGlscy91cmxzJztcblxuY29uc3QgTWFpbiA9ICgpID0+IChcbiAgPG1haW4+XG4gICAgey8qIDxOYXZiYXIgLz4gKi99XG4gICAgPGRpdiBpZD1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgZXhhY3QgY29tcG9uZW50PXtBbGJ1bVBhZ2V9IHBhdGg9e0FMQlVNX1VSTH0gLz5cbiAgICAgICAgPFJvdXRlIGV4YWN0IGNvbXBvbmVudD17QWxidW1MaXN0UGFnZX0gcGF0aD17TUFJTl9VUkx9IC8+XG4gICAgICA8L1N3aXRjaD5cbiAgICA8L2Rpdj5cbiAgPC9tYWluPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9wYWdlcy9NYWluJztcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgIDxNYWluIC8+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJ0FwcCc7XG5cbmltcG9ydCAnLi9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=