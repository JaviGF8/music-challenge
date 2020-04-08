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
module.exports = __webpack_require__(415);


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

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(30);
            var content = __webpack_require__(410);

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

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(31);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".album-page{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:1200px;margin-top:8px}.album-page>a{position:fixed;top:16px;left:16px;height:32px;width:32px;display:flex;align-items:center;justify-content:center;border-radius:50%;background-color:#2f6174;color:#fff;text-decoration:none}.album-page>.album{width:100%}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(30);
            var content = __webpack_require__(412);

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

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(31);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fadein{-webkit-animation:fadein 0.5s;-moz-animation:fadein 0.5s;-ms-animation:fadein 0.5s;-o-animation:fadein 0.5s;animation:fadein 0.5s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{from{opacity:0}to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(30);
            var content = __webpack_require__(414);

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

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(31);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body{font-family:'Montserrat', sans-serif;font-size:14px;margin:0;color:#282828;-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto}.shadow{-webkit-box-shadow:0px 0 8px 2px rgba(136,136,136,0.2);-moz-box-shadow:0px 0 8px 2px rgba(136,136,136,0.2);box-shadow:0px 0 8px 2px rgba(136,136,136,0.2)}main{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;min-height:100vh;background-color:#fafaff}main #main-container{width:calc(100% - 32px);padding:0 16px;display:flex;align-items:center;justify-content:center;flex-direction:column}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 415:
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
const MAIN_URL = '/music-challenge';
const ALBUM_URL = "".concat(MAIN_URL, "/:albumId");
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
  to: "".concat(MAIN_URL, "/").concat(album.id)
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
var format = __webpack_require__(417);

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
var albumPage = __webpack_require__(409);

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
var animations = __webpack_require__(411);

// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(413);

// CONCATENATED MODULE: ./src/index.js





react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(src_App, null), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSWNvbi9pY29uLnNjc3M/MWQ3OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL2ljb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FeHRlcm5hbExpbmsvZXh0ZXJuYWxMaW5rLnNjc3M/NTJiMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FeHRlcm5hbExpbmsvZXh0ZXJuYWxMaW5rLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxidW0vYWxidW0uc2Nzcz8wMzIwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FsYnVtL2FsYnVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxidW1zTGlzdC9hbGJ1bXNMaXN0LnNjc3M/YmY1MSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BbGJ1bXNMaXN0L2FsYnVtc0xpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3M/YzRiNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL3NlYXJjaEJhci5zY3NzP2RmN2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL3NlYXJjaEJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlbGVjdG9yL3NlbGVjdG9yLnNjc3M/NTI2ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWxlY3Rvci9zZWxlY3Rvci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9BbGJ1bUxpc3RQYWdlL2FsYnVtTGlzdFBhZ2Uuc2Nzcz9kNmE0Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9BbGJ1bUxpc3RQYWdlL2FsYnVtTGlzdFBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQWxidW1QYWdlL2FsYnVtUGFnZS5zY3NzPzc3YTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0FsYnVtUGFnZS9hbGJ1bVBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuc2Nzcz8yOTQ4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz80YzM3Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZGlzcGF0Y2hzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hbGJ1bXMvYWxidW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9nZW5yZXMvZ2VucmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSWNvbi9JY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V4dGVybmFsTGluay9FeHRlcm5hbExpbmsuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V4dGVybmFsTGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BbGJ1bS9BbGJ1bUluZm8vQWxidW1JbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BbGJ1bS9BbGJ1bS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxidW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxidW1zTGlzdC9BbGJ1bUxpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FsYnVtc0xpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWxlY3Rvci9TZWxlY3Rvci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VsZWN0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0FsYnVtTGlzdFBhZ2UvQWxidW1MaXN0UGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0FsYnVtTGlzdFBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQXBpV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9nZW5yZXMvZ2VucmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2FsYnVtcy9hbGJ1bXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvYWxidW1MaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9BbGJ1bVBhZ2UvQWxidW1QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQWxidW1QYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL2FsYnVtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9NYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQUxCVU1TIiwiTE9BRElORyIsIkxPQURJTkdfRU5EIiwiU0VUIiwiU0VUX0FMTCIsIkdFTlJFUyIsImluaXRpYWxTdGF0ZSIsImFsYnVtIiwidW5kZWZpbmVkIiwiYWxidW1zIiwibG9hZGluZyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImdlbnJlcyIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwibWlkZGxld2FyZXMiLCJ0aHVua01pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlcnMiLCJhcHBseU1pZGRsZXdhcmUiLCJJY29uIiwiaWNvbiIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJFeHRlcm5hbExpbmsiLCJjbGFzc05hbWUiLCJ0ZXh0IiwiQWxidW1JbmZvIiwiZnVsbEluZm8iLCJwb3NpdGlvbiIsImltYWdlIiwibmFtZSIsImFydGlzdExpbmsiLCJhcnRpc3QiLCJyaWdodHMiLCJnZW5yZUxpbmsiLCJnZW5yZSIsInByaWNlIiwidG90YWxTb25ncyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiTUFJTl9VUkwiLCJBTEJVTV9VUkwiLCJnZXRDbGFzc05hbWUiLCJjbGFzc25hbWUiLCJBbGJ1bSIsImlkIiwiQWxidW1MaXN0IiwibGVuZ3RoIiwibWFwIiwiYXJyYXkiLCJCdXR0b24iLCJTZWFyY2hCYXIiLCJjbGVhckljb24iLCJvblNlYXJjaCIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwib3V0c2lkZVJlZiIsInVzZVJlZiIsImlucHV0UmVmIiwiY2xlYXIiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwidXNlRWZmZWN0IiwiZm9jdXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZnVuYyIsIlNlbGVjdG9yIiwib25DaGFuZ2UiLCJvcHRpb25zIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInNlbGVjdGVkQWxsIiwic2V0U2VsZWN0ZWRBbGwiLCJzZXRBbGxTZWxlY3RlZCIsIm5ld1NlbGVjdGVkIiwiZm9yRWFjaCIsIm9wdCIsInB1c2giLCJvblNlbGVjdCIsIm9wdGlvbiIsImluZGV4IiwiaW5kZXhPZiIsImZpbHRlciIsInNhbWVMZW5ndGgiLCJBbGJ1bUxpc3RQYWdlIiwiZ2V0QWxsQWxidW1zIiwiZmlsdGVyZWRBbGJ1bXMiLCJzZXRGaWx0ZXJlZEFsYnVtcyIsImZpbHRlcmVkR2VucmVzIiwic2V0RmlsdGVyZWRHZW5yZXMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJpc1NlbGVjdGVkIiwidG9Mb3dlckNhc2UiLCJnZXQiLCJ1cmwiLCJheGlvcyIsInBvc3QiLCJwYXJhbXMiLCJwdXQiLCJyZW1vdmUiLCJkZWxldGUiLCJnZXRBbGJ1bUdlbnJlcyIsImFsbCIsImlkeCIsInNlbGYiLCJzb3J0Iiwic2V0QWxidW1HZW5yZXMiLCJkaXNwYXRjaCIsIklUVU5FU19UT1BfMTAwIiwic2V0U2VsZWN0ZWRBbGJ1bSIsInNldEFsYnVtcyIsImZvcm1hdEFsYnVtIiwibGFiZWwiLCJhdHRyaWJ1dGVzIiwiaHJlZiIsInJlbGVhc2VEYXRlIiwiZm9ybWF0IiwiRGF0ZSIsImxpbmsiLCJjYXRlZ29yeSIsInNjaGVtZSIsImZvcm1hdEFsYnVtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImZlZWQiLCJlbnRyeSIsImNhdGNoIiwiZXJyIiwiZ2V0QWxidW1CeUlkIiwiYWxidW1JZCIsImdldFN0YXRlIiwiZmluZCIsImZvdW5kQWxidW1zIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwid2l0aFJvdXRlciIsImNvbm5lY3QiLCJBbGJ1bVBhZ2UiLCJ1c2VQYXJhbXMiLCJNYWluIiwi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QiwyQ0FBZ0JBO0FBRmxCLENBRG1CLEVBS25CRixRQUxtQixDQURJLENBQTNCOztBQVVlaUMsK0ZBQVUsQ0FBQ0MsNkJBQU8sQ0FBQ0oscUJBQUQsRUFBa0JDLHdCQUFsQixDQUFQLENBQTZDSSxlQUE3QyxDQUFELENBQXpCLEU7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUUsSUFBSSxHQUFHLG1CQUNYLHlEQUVFO0FBQUssSUFBRSxFQUFDO0FBQVIsZ0JBQ0UsOEJBQUMsOEJBQUQscUJBQ0UsOEJBQUMsNkJBQUQ7QUFBTyxPQUFLLE1BQVo7QUFBYSxXQUFTLEVBQUVGLGdCQUF4QjtBQUFtQyxNQUFJLEVBQUU5RyxTQUFTQTtBQUFsRCxFQURGLGVBRUUsOEJBQUMsNkJBQUQ7QUFBTyxPQUFLLE1BQVo7QUFBYSxXQUFTLEVBQUVtRCxTQUF4QjtBQUF1QyxNQUFJLEVBQUVwRCxRQUFRQTtBQUFyRCxFQUZGLENBREYsQ0FGRixDQURGOztBQVllaUgsbURBQWYsRTs7QUNsQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNQyxHQUFHLEdBQUcsbUJBQ1YsOEJBQUMsc0JBQUQ7QUFBVSxPQUFLLEVBQUUvSSxTQUFLQTtBQUF0QixnQkFDRSw4QkFBQyx5Q0FBRCxxQkFDRSw4QkFBQyxVQUFELE9BREYsQ0FERixDQURGOztBQVFlK0ksK0NBQWYsRTs7Ozs7Ozs7QUNmQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUFDLG1CQUFRLENBQUNDLE1BQVQsZUFBZ0IsOEJBQUMsT0FBRCxPQUFoQixFQUF5QnRGLFFBQVEsQ0FBQ3VGLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBekIsRSIsImZpbGUiOiJpbmRleF9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDA6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMTY0LDFdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pY29uLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jdXN0b20taWNvbnttYXJnaW46MDtoZWlnaHQ6OHB4fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2V4dGVybmFsTGluay5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZXh0ZXJuYWwtbGlua3tjb2xvcjojMjgyODI4fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FsYnVtLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hbGJ1bXtkaXNwbGF5OmZsZXh9LmFsYnVtIC5hbGJ1bS1jb250YWluZXJ7ZGlzcGxheTpmbGV4O3BhZGRpbmc6OHB4O2hlaWdodDpjYWxjKDEwMCUgLSAzMnB4KTt3aWR0aDpjYWxjKDEwMCUgLSAxNnB4KTtvdmVyZmxvdzp2aXNpYmxlfS5hbGJ1bSAuYWxidW0tY29udGFpbmVyPip7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpmbGV4LWVuZDt3aWR0aDpjYWxjKDEwMCUgLSAxNnB4KTtoZWlnaHQ6Y2FsYygxMDAlIC0gMTZweCk7cGFkZGluZzoxNnB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjRweDt0cmFuc2l0aW9uOmxpbmVhciBhbGwgLjI1cztvdmVyZmxvdzpoaWRkZW47dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6IzI4MjgyODtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTM2LDEzNiwxMzYsMC4yKX0uYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1wb3NpdGlvbntmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxNHB4O21pbi13aWR0aDozMnB4fS5hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm97ZmxleDoxO292ZXJmbG93OmhpZGRlbjtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn0uYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZvIC5hbGJ1bS1pbWFnZXtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjtoZWlnaHQ6MTAwJX0uYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZvIC5hbGJ1bS1pbWFnZSBpbWd7aGVpZ2h0OjEwMCU7bWF4LXdpZHRoOjEwMCU7b2JqZWN0LWZpdDpjb3Zlcn0uYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZvIGEsLmFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mbyBwe21hcmdpbjowO3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO292ZXJmbG93OmhpZGRlbjttYXgtd2lkdGg6MTAwJTt0ZXh0LWRlY29yYXRpb246bm9uZX0uYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC50b3AtbGFiZWx7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0O3BhZGRpbmc6OHB4O2JvcmRlci1yYWRpdXM6NHB4O3Bvc2l0aW9uOmFic29sdXRlO2NvbG9yOiNmZmZ9LmFsYnVtIC5hbGJ1bS1jb250YWluZXI+Kjpob3Zlcnt0cmFuc2Zvcm06c2NhbGUoMS4wMil9LmFsYnVtLnRvcC1hbGJ1bSAuYWxidW0tY29udGFpbmVyPip7YmFja2dyb3VuZC1jb2xvcjojYzFkMGQ1O2JvcmRlcjoxcHggc29saWQgcmdiYSg0Nyw5NywxMTYsMC4yKX0uYWxidW0udG9wLWFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0tcG9zaXRpb257Zm9udC1zaXplOjMycHh9LmFsYnVtLnRvcC1hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm8gYSwuYWxidW0udG9wLWFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mbyBwe2ZvbnQtc2l6ZToyNHB4fS5hbGJ1bS50b3AtYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC50b3AtbGFiZWx7Zm9udC1zaXplOjMycHg7YmFja2dyb3VuZC1jb2xvcjojMmY2MTc0fS5hbGJ1bS50b3AtdGhyZWUtYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qe2JhY2tncm91bmQtY29sb3I6I2Q3ZTllNTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTIwLDE4MiwxNjksMC4yKX0uYWxidW0udG9wLXRocmVlLWFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0tcG9zaXRpb257Zm9udC1zaXplOjI0cHh9LmFsYnVtLnRvcC10aHJlZS1hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm8gYSwuYWxidW0udG9wLXRocmVlLWFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mbyBwe2ZvbnQtc2l6ZToyMHB4fS5hbGJ1bS50b3AtdGhyZWUtYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC50b3AtbGFiZWx7Zm9udC1zaXplOjE2cHg7YmFja2dyb3VuZC1jb2xvcjojNzhiNmE5fS5hbGJ1bS50b3Atc2l4LWFsYnVtIC5hbGJ1bS1jb250YWluZXI+KntiYWNrZ3JvdW5kLWNvbG9yOiNmYmYxZGU7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDI0MiwyMDgsMTQ0LDAuMil9LmFsYnVtLnRvcC1zaXgtYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1wb3NpdGlvbntmb250LXNpemU6MjBweH0uYWxidW0udG9wLXNpeC1hbGJ1bSAuYWxidW0tY29udGFpbmVyPiogLnRvcC1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOiNmMmQwOTB9LmFsYnVtLnRvcC10ZW4tYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qe2JvcmRlcjoxcHggc29saWQgcmdiYSgyNDIsMjA4LDE0NCwwLjQpfS5hbGJ1bS50b3AtdGVuLWFsYnVtIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0tcG9zaXRpb257Zm9udC1zaXplOjE2cHh9LmFsYnVtLnRvcC10ZW4tYWxidW0gLmFsYnVtLWNvbnRhaW5lcj4qIC50b3AtbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojZjJkMDkwfS5hbGJ1bS5hbGJ1bS1mdWxsIC5hbGJ1bS1jb250YWluZXI+KntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y3Vyc29yOmF1dG99LmFsYnVtLmFsYnVtLWZ1bGwgLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZve2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5hbGJ1bS5hbGJ1bS1mdWxsIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mbyAuYWxidW0taW1hZ2UgaW1ne2hlaWdodDoyMDBweDt3aWR0aDoyMDBweDttYXJnaW4tcmlnaHQ6MTZweH0uYWxidW0uYWxidW0tZnVsbCAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm8gLmFsYnVtLWZ1bGwtaW5mb3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21heC13aWR0aDoxMDAlfS5hbGJ1bS5hbGJ1bS1mdWxsIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mbyAuYWxidW0tZnVsbC1pbmZvPnAsLmFsYnVtLmFsYnVtLWZ1bGwgLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZvIC5hbGJ1bS1mdWxsLWluZm8+ZGl2e21heC13aWR0aDoxMDAlO3dvcmQtYnJlYWs6YnJlYWstd29yZDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDttYXJnaW46OHB4IDB9LmFsYnVtLmFsYnVtLWZ1bGwgLmFsYnVtLWNvbnRhaW5lcj4qIC5hbGJ1bS1pbmZvIC5hbGJ1bS1mdWxsLWluZm8gLmFsYnVtLW5hbWV7Zm9udC1zaXplOjMycHg7Zm9udC13ZWlnaHQ6Ym9sZH0uYWxidW0uYWxidW0tZnVsbCAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm8gLmFsYnVtLWZ1bGwtaW5mbyBhe3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7Zm9udC1zaXplOjI0cHg7Y29sb3I6IzIzNGY2MX0uYWxidW0uYWxidW0tZnVsbCAuYWxidW0tY29udGFpbmVyPiogLmFsYnVtLWluZm8gLmFsYnVtLWZ1bGwtaW5mbyAuYWxidW0tcmlnaHRze2NvbG9yOiM4ODg7bWFyZ2luOjhweCAwO2ZvbnQtc2l6ZToxMnB4fS5hbGJ1bS5hbGJ1bS1mdWxsIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mbyAuYWxidW0tZnVsbC1pbmZvIC5hbGJ1bS1wcmljZSBzcGFue2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojNzhiNmE5O3BhZGRpbmc6OHB4O2JvcmRlci1yYWRpdXM6NHB4fS5hbGJ1bS5hbGJ1bS1mdWxsIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mbyAuYWxidW0tZnVsbC1pbmZvIC5hbGJ1bS1nZW5yZSBhe21hcmdpbi1sZWZ0OjhweDtmb250LXNpemU6MTRweH0uYWxidW0uYWxidW0tZnVsbCAuYWxidW0tY29udGFpbmVyPio6aG92ZXJ7dHJhbnNmb3JtOm5vbmU7Y3Vyc29yOmF1dG99QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpey5hbGJ1bS5hbGJ1bS1mdWxsIC5hbGJ1bS1jb250YWluZXI+KiAuYWxidW0taW5mb3tmbGV4LWRpcmVjdGlvbjpjb2x1bW59fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FsYnVtc0xpc3Quc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFsYnVtLWxpc3R7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO21heC13aWR0aDoxMjAwcHg7d2lkdGg6MTAwdnd9LmFsYnVtLWxpc3Q+KntmbGV4OjAgMjAlO3dpZHRoOjIwJX0uYWxidW0tbGlzdD4qIC5hbGJ1bS1pbWFnZXttYXJnaW4tYm90dG9tOjE2cHh9LmFsYnVtLWxpc3Q+KjpmaXJzdC1jaGlsZHttaW4taGVpZ2h0OjQwMHB4fS5hbGJ1bS1saXN0Pio6bnRoLWNoaWxkKC1uKzMpOm5vdCg6Zmlyc3QtY2hpbGQpe2hlaWdodDo0MHZoO21pbi1oZWlnaHQ6MzUwcHh9LmFsYnVtLWxpc3Q+KjpudGgtY2hpbGQoLW4rNik6bm90KDpudGgtY2hpbGQoLW4rMykpe2hlaWdodDozMHZoO21pbi1oZWlnaHQ6MzAwcHh9LmFsYnVtLWxpc3Q+KjpudGgtY2hpbGQoLW4rMTApOm5vdCg6bnRoLWNoaWxkKC1uKzYpKXttaW4taGVpZ2h0OjI1MHB4fS5hbGJ1bS1saXN0Pio6bnRoLWNoaWxkKC1uKzIwKTpub3QoOm50aC1jaGlsZCgtbisxMCkpe21pbi1oZWlnaHQ6MjAwcHh9LmFsYnVtLWxpc3Q+KjpudGgtY2hpbGQoLW4rNTApOm5vdCg6bnRoLWNoaWxkKC1uKzIwKSl7bWluLWhlaWdodDoxNTBweDtmb250LXNpemU6MTJweH0uYWxidW0tbGlzdD4qOm50aC1jaGlsZCgtbisxMDApOm5vdCg6bnRoLWNoaWxkKC1uKzUwKSl7bWF4LWhlaWdodDoxMDBweDtmb250LXNpemU6MTJweH0uYWxidW0tbGlzdD4qOm50aC1jaGlsZCgtbisxMDApOm5vdCg6bnRoLWNoaWxkKC1uKzUwKSkgLmFsYnVtLWNvbnRhaW5lciAuYWxidW0taW5mb3tmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LmFsYnVtLWxpc3Q+KjpudGgtY2hpbGQoLW4rMTAwKTpub3QoOm50aC1jaGlsZCgtbis1MCkpIC5hbGJ1bS1jb250YWluZXIgLmFsYnVtLWluZm8gLmFsYnVtLWltYWdle21hcmdpbi1ib3R0b206MDttYXJnaW4tcmlnaHQ6OHB4fS5hbGJ1bS1saXN0Pio6bnRoLWNoaWxkKC1uKzEwMCk6bm90KDpudGgtY2hpbGQoLW4rNTApKSAuYWxidW0tY29udGFpbmVyIC5hbGJ1bS1pbmZvIC5hbGJ1bS1pbWFnZSBpbWd7bWF4LXdpZHRoOjUwcHh9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpey5hbGJ1bS1saXN0Pio6Zmlyc3QtY2hpbGR7ZmxleDowIDEwMCU7d2lkdGg6MTAwJX0uYWxidW0tbGlzdD4qOm50aC1jaGlsZCgtbiszKTpub3QoOmZpcnN0LWNoaWxkKXtmbGV4OjAgNTAlO3dpZHRoOjUwJX0uYWxidW0tbGlzdD4qOm50aC1jaGlsZCgtbis2KTpub3QoOm50aC1jaGlsZCgtbiszKSl7ZmxleDowIDMzLjMzMzMlO3dpZHRoOjMzLjMzMzMlfS5hbGJ1bS1saXN0Pio6bnRoLWNoaWxkKC1uKzEwKTpub3QoOm50aC1jaGlsZCgtbis2KSl7ZmxleDowIDI1JTt3aWR0aDoyNSV9LmFsYnVtLWxpc3Q+KjpudGgtY2hpbGQoLW4rMjApOm5vdCg6bnRoLWNoaWxkKC1uKzEwKSl7ZmxleDowIDIwJTt3aWR0aDoyMCV9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KXsuYWxidW0tbGlzdD4qe2ZsZXg6MCAxMDAlO21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6NzVweH0uYWxidW0tbGlzdD4qIC5hbGJ1bS1jb250YWluZXIgLmFsYnVtLWluZm97ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5hbGJ1bS1saXN0PiogLmFsYnVtLWNvbnRhaW5lciAuYWxidW0taW5mbyBwe3dvcmQtYnJlYWs6YnJlYWstd29yZDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtmbGV4OjF9LmFsYnVtLWxpc3Q+KiAuYWxidW0tY29udGFpbmVyIC5hbGJ1bS1pbmZvIC5hbGJ1bS1pbWFnZXtmbGV4OjE7bWFyZ2luLXJpZ2h0OjhweDttYXJnaW4tYm90dG9tOjB9LmFsYnVtLWxpc3Q+KjpmaXJzdC1jaGlsZHtoZWlnaHQ6MzB2aDttaW4taGVpZ2h0OjI1MHB4fS5hbGJ1bS1saXN0Pio6bnRoLWNoaWxkKC1uKzMpOm5vdCg6Zmlyc3QtY2hpbGQpe2hlaWdodDoyNXZoO21pbi1oZWlnaHQ6MjAwcHh9LmFsYnVtLWxpc3Q+KjpudGgtY2hpbGQoLW4rNik6bm90KDpudGgtY2hpbGQoLW4rMykpe2hlaWdodDoyMHZoO21pbi1oZWlnaHQ6MTc1cHh9LmFsYnVtLWxpc3Q+KjpudGgtY2hpbGQoLW4rMTApOm5vdCg6bnRoLWNoaWxkKC1uKzYpKXtoZWlnaHQ6MTh2aDttaW4taGVpZ2h0OjE1MHB4fS5hbGJ1bS1saXN0Pio6bnRoLWNoaWxkKC1uKzUwKTpub3QoOm50aC1jaGlsZCgtbisxMCkpe2hlaWdodDoxNXZoO21pbi1oZWlnaHQ6MTI1cHh9fVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY3VzdG9tLWJ0bntwYWRkaW5nOjhweCAxNnB4O2ZvbnQtc2l6ZToxNnB4O2JvcmRlci1yYWRpdXM6NHB4O2JvcmRlcjowO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMmY2MTc0O3RyYW5zaXRpb246bGluZWFyIG9wYWNpdHkgLjFzO291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zZWFyY2hCYXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlYXJjaC1iYXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiMyZjYxNzQ7Y29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjRweH0uc2VhcmNoLWJhciAuY3VzdG9tLWJ0bntoZWlnaHQ6MzJweDt3aWR0aDozMnB4O3BhZGRpbmc6MH0uc2VhcmNoLWJhciBpbnB1dHtmb250LXNpemU6MTZweDtwYWRkaW5nOjAgNHB4O2hlaWdodDozMnB4O21heC13aWR0aDoyMDBweDtvcGFjaXR5OjE7b3V0bGluZS13aWR0aDowO2JvcmRlcjowO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjphbGwgbGluZWFyIC4yNXM7Y29sb3I6I2ZmZn0uc2VhcmNoLWJhciBpbnB1dDo6cGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjUpO3BvaW50ZXItZXZlbnRzOm5vbmV9LnNlYXJjaC1iYXIgaW5wdXQuaGlkZGVue3BhZGRpbmc6MDttYXgtd2lkdGg6MDtvcGFjaXR5OjB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VsZWN0b3Iuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlbGVjdG9ye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnNlbGVjdG9yPi5jdXN0b20tYnRue2hlaWdodDozMnB4O3dpZHRoOjMycHg7cGFkZGluZzowfS5zZWxlY3RvciAuc2VsZWN0b3Itb3B0aW9uc3tkaXNwbGF5OmZsZXg7b3BhY2l0eToxO21hcmdpbi10b3A6MTZweDtwYWRkaW5nOjRweDttYXgtd2lkdGg6MTAwdmg7dHJhbnNpdGlvbjpsaW5lYXIgYWxsIC4yNXN9LnNlbGVjdG9yIC5zZWxlY3Rvci1vcHRpb25zPi5jdXN0b20tYnRue29wYWNpdHk6MC41O2hlaWdodDozMnB4O3RyYW5zaXRpb246bGluZWFyIGFsbCAuMjVzO2ZvbnQtc2l6ZToxMnB4O21hcmdpbi1yaWdodDo0cHh9LnNlbGVjdG9yIC5zZWxlY3Rvci1vcHRpb25zPi5jdXN0b20tYnRuLnNlbGVjdGVke29wYWNpdHk6MX0uc2VsZWN0b3IgLnNlbGVjdG9yLW9wdGlvbnM+LmN1c3RvbS1idG46bGFzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MH0uc2VsZWN0b3IgLnNlbGVjdG9yLW9wdGlvbnMuaGlkZGVue29wYWNpdHk6MDttYXJnaW4tdG9wOjA7cGFkZGluZzowIDRweDttYXgtd2lkdGg6MH0uc2VsZWN0b3IgLnNlbGVjdG9yLW9wdGlvbnMuaGlkZGVuPi5jdXN0b20tYnRue3BhZGRpbmc6MDtvcGFjaXR5OjA7aGVpZ2h0OjA7cG9pbnRlci1ldmVudHM6bm9uZX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbGJ1bUxpc3RQYWdlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hbGJ1bXMtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmFsYnVtcy1jb250YWluZXI+LnNlYXJjaC1iYXJ7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDo4cHg7Ym9yZGVyLXJhZGl1czowIDAgNHB4IDRweH0uYWxidW1zLWNvbnRhaW5lcj4uc2VsZWN0b3J7cG9zaXRpb246Zml4ZWQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtmbGV4LWRpcmVjdGlvbjpyb3c7dG9wOjhweDtyaWdodDowO3otaW5kZXg6M30uYWxidW1zLWNvbnRhaW5lcj4uc2VsZWN0b3I+LmN1c3RvbS1idG57bWFyZ2luLXJpZ2h0OjA7Ym9yZGVyLXJhZGl1czo0cHggMCAwIDRweH0uYWxidW1zLWNvbnRhaW5lcj4uc2VsZWN0b3IgLnNlbGVjdG9yLW9wdGlvbnN7cGFkZGluZzo0cHg7bWFyZ2luOjA7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2JhY2tncm91bmQtY29sb3I6IzJmNjE3NDtib3JkZXItcmFkaXVzOjAgMCAwIDRweH0uYWxidW1zLWNvbnRhaW5lcj4uc2VsZWN0b3IgLnNlbGVjdG9yLW9wdGlvbnM+LmN1c3RvbS1idG57bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWJvdHRvbTo0cHg7YmFja2dyb3VuZC1jb2xvcjojNzhiNmE5O21heC13aWR0aDoyMDBweH0uYWxidW1zLWNvbnRhaW5lcj4uc2VsZWN0b3IgLnNlbGVjdG9yLW9wdGlvbnM+LmN1c3RvbS1idG46bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjB9LmFsYnVtcy1jb250YWluZXI+LnNlbGVjdG9yIC5zZWxlY3Rvci1vcHRpb25zLmhpZGRlbntwYWRkaW5nOjRweCAwfS5hbGJ1bXMtY29udGFpbmVyPi5zZWxlY3RvciAuc2VsZWN0b3Itb3B0aW9ucy5oaWRkZW4+LmN1c3RvbS1idG57bWF4LXdpZHRoOjB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWxidW1QYWdlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hbGJ1bS1wYWdle2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTIwMHB4O21hcmdpbi10b3A6OHB4fS5hbGJ1bS1wYWdlPmF7cG9zaXRpb246Zml4ZWQ7dG9wOjE2cHg7bGVmdDoxNnB4O2hlaWdodDozMnB4O3dpZHRoOjMycHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY29sb3I6IzJmNjE3NDtjb2xvcjojZmZmO3RleHQtZGVjb3JhdGlvbjpub25lfS5hbGJ1bS1wYWdlPi5hbGJ1bXt3aWR0aDoxMDAlfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdGlvbnMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZhZGVpbnstd2Via2l0LWFuaW1hdGlvbjpmYWRlaW4gMC41czstbW96LWFuaW1hdGlvbjpmYWRlaW4gMC41czstbXMtYW5pbWF0aW9uOmZhZGVpbiAwLjVzOy1vLWFuaW1hdGlvbjpmYWRlaW4gMC41czthbmltYXRpb246ZmFkZWluIDAuNXN9QGtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1ALW1vei1rZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fUAtbXMta2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fUAtby1rZXlmcmFtZXMgZmFkZWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtmb250LWZhbWlseTonTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7bWFyZ2luOjA7Y29sb3I6IzI4MjgyODstd2Via2l0LWZvbnQtc21vb3RoaW5nOnN1YnBpeGVsLWFudGlhbGlhc2VkOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmF1dG99LnNoYWRvd3std2Via2l0LWJveC1zaGFkb3c6MHB4IDAgOHB4IDJweCByZ2JhKDEzNiwxMzYsMTM2LDAuMik7LW1vei1ib3gtc2hhZG93OjBweCAwIDhweCAycHggcmdiYSgxMzYsMTM2LDEzNiwwLjIpO2JveC1zaGFkb3c6MHB4IDAgOHB4IDJweCByZ2JhKDEzNiwxMzYsMTM2LDAuMil9bWFpbntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6MTAwdmg7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZmfW1haW4gI21haW4tY29udGFpbmVye3dpZHRoOmNhbGMoMTAwJSAtIDMycHgpO3BhZGRpbmc6MCAxNnB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsImV4cG9ydCBjb25zdCBBTEJVTVMgPSB7XG4gIExPQURJTkc6ICdAYWxidW1zL0xPQURJTkcnLFxuICBMT0FESU5HX0VORDogJ0BhbGJ1bXMvTE9BRElOR19FTkQnLFxuICBTRVQ6ICdAYWxidW1zL1NFVCcsXG4gIFNFVF9BTEw6ICdAYWxidW1zL1NFVF9BTEwnLFxufTtcblxuZXhwb3J0IGNvbnN0IEdFTlJFUyA9IHtcbiAgU0VUX0FMTDogJ0BnZW5yZXMvU0VUX0FMTCcsXG59O1xuIiwiaW1wb3J0IHsgQUxCVU1TIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGlzcGF0Y2hzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBhbGJ1bTogdW5kZWZpbmVkLFxuICBhbGJ1bXM6IFtdLFxuICBsb2FkaW5nOiBmYWxzZSxcbn07XG5cbmNvbnN0IGFsYnVtcyA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFMQlVNUy5TRVQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYWxidW06IGFjdGlvbi5hbGJ1bSB9O1xuICAgIGNhc2UgQUxCVU1TLlNFVF9BTEw6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYWxidW1zOiBhY3Rpb24uYWxidW1zIH07XG4gICAgY2FzZSBBTEJVTVMuTE9BRElORzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH07XG4gICAgY2FzZSBBTEJVTVMuTE9BRElOR19FTkQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYWxidW1zO1xuIiwiaW1wb3J0IHsgR0VOUkVTIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGlzcGF0Y2hzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBnZW5yZXM6IFtdLFxuICBsb2FkaW5nOiBmYWxzZSxcbn07XG5cbmNvbnN0IGdlbnJlcyA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEdFTlJFUy5TRVRfQUxMOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGdlbnJlczogYWN0aW9uLmdlbnJlcyB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZW5yZXM7XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBhbGJ1bXMgZnJvbSAnLi9hbGJ1bXMvYWxidW1zJztcbmltcG9ydCBnZW5yZXMgZnJvbSAnLi9nZW5yZXMvZ2VucmVzJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBhbGJ1bXMsXG4gIGdlbnJlcyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiIsImltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xuXG5jb25zdCBtaWRkbGV3YXJlcyA9IFsgdGh1bmtNaWRkbGV3YXJlIF07XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBJY29uID0gKHsgaWNvbiwgLi4ucmVzdCB9KSA9PiA8aSB7Li4ucmVzdH0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPXtpY29ufSAvPjtcblxuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGljb246IHVuZGVmaW5lZCxcbn07XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiIsImltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgJy4vaWNvbi5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcblxuY29uc3QgRXh0ZXJuYWxMaW5rID0gKHsgY2xhc3NOYW1lLCBpY29uLCB0ZXh0LCAuLi5yZXN0IH0pID0+IChcbiAgPGEgey4uLnJlc3R9IGNsYXNzTmFtZT17YGV4dGVybmFsLWxpbmske2NsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnfWB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICB7aWNvbiAmJiA8SWNvbiBpY29uPXtpY29ufSAvPn1cbiAgICB7dGV4dH1cbiAgPC9hPlxuKTtcblxuRXh0ZXJuYWxMaW5rLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgdGV4dDogdW5kZWZpbmVkLFxufTtcblxuRXh0ZXJuYWxMaW5rLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXh0ZXJuYWxMaW5rO1xuIiwiaW1wb3J0IEV4dGVybmFsTGluayBmcm9tICcuL0V4dGVybmFsTGluayc7XG5pbXBvcnQgJy4vZXh0ZXJuYWxMaW5rLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBFeHRlcm5hbExpbms7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBFeHRlcm5hbExpbmsgZnJvbSAnLi4vLi4vRXh0ZXJuYWxMaW5rJztcblxuY29uc3QgQWxidW1JbmZvID0gKHsgYWxidW0sIGZ1bGxJbmZvIH0pID0+XG4gIGFsYnVtICYmIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bS1wb3NpdGlvblwiPnthbGJ1bS5wb3NpdGlvbn0uPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtLWluZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bS1pbWFnZVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXthbGJ1bS5pbWFnZX0gYWx0PXthbGJ1bS5uYW1lfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2Z1bGxJbmZvID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW0tZnVsbC1pbmZvXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbGJ1bS1uYW1lXCI+e2FsYnVtLm5hbWV9PC9wPlxuICAgICAgICAgICAgPEV4dGVybmFsTGluayBocmVmPXthbGJ1bS5hcnRpc3RMaW5rfSBkaXNhYmxlZD17IWZ1bGxJbmZvfSB0ZXh0PXthbGJ1bS5hcnRpc3R9IC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbGJ1bS1yaWdodHNcIj57YWxidW0ucmlnaHRzfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW0tZ2VucmVcIj5cbiAgICAgICAgICAgICAgR2VucmU6XG4gICAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgaHJlZj17YWxidW0uZ2VucmVMaW5rfSBkaXNhYmxlZD17IWZ1bGxJbmZvfSB0ZXh0PXthbGJ1bS5nZW5yZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bS1wcmljZVwiPlxuICAgICAgICAgICAgICBQcmljZTogPHNwYW4+e2FsYnVtLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bS1zb25nc1wiPk51bWJlciBvZiBzb25nczoge2FsYnVtLnRvdGFsU29uZ3N9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7YWxidW0uYXJ0aXN0fSAtIHthbGJ1bS5uYW1lfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgezExID4gYWxidW0ucG9zaXRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbGFiZWwgc2hhZG93XCI+VE9QIHthbGJ1bS5wb3NpdGlvbn08L2Rpdj59XG4gICAgPC8+XG4gICk7XG5cbkFsYnVtSW5mby5kZWZhdWx0UHJvcHMgPSB7XG4gIGZ1bGxJbmZvOiBmYWxzZSxcbn07XG5cbkFsYnVtSW5mby5wcm9wVHlwZXMgPSB7XG4gIGFsYnVtOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGZ1bGxJbmZvOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsYnVtSW5mbztcbiIsImV4cG9ydCBjb25zdCBNQUlOX1VSTCA9ICcvbXVzaWMtY2hhbGxlbmdlJztcbmV4cG9ydCBjb25zdCBBTEJVTV9VUkwgPSBgJHtNQUlOX1VSTH0vOmFsYnVtSWRgO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBBbGJ1bUluZm8gZnJvbSAnLi9BbGJ1bUluZm8vQWxidW1JbmZvJztcbmltcG9ydCB7IE1BSU5fVVJMIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXJscyc7XG5cbmNvbnN0IGdldENsYXNzTmFtZSA9IChwb3NpdGlvbikgPT4ge1xuICBsZXQgY2xhc3NuYW1lID0gJ3RvcC1odW5kcmVkLWFsYnVtJztcblxuICBpZiAoMSA9PT0gcG9zaXRpb24pIHtcbiAgICBjbGFzc25hbWUgPSAndG9wLWFsYnVtJztcbiAgfSBlbHNlIGlmICg0ID4gcG9zaXRpb24pIHtcbiAgICBjbGFzc25hbWUgPSAndG9wLXRocmVlLWFsYnVtJztcbiAgfSBlbHNlIGlmICg3ID4gcG9zaXRpb24pIHtcbiAgICBjbGFzc25hbWUgPSAndG9wLXNpeC1hbGJ1bSc7XG4gIH0gZWxzZSBpZiAoMTEgPiBwb3NpdGlvbikge1xuICAgIGNsYXNzbmFtZSA9ICd0b3AtdGVuLWFsYnVtJztcbiAgfSBlbHNlIGlmICgyMSA+IHBvc2l0aW9uKSB7XG4gICAgY2xhc3NuYW1lID0gJ3RvcC10d2VudHktYWxidW0nO1xuICB9IGVsc2UgaWYgKDUxID4gcG9zaXRpb24pIHtcbiAgICBjbGFzc25hbWUgPSAndG9wLWZpZnR5LWFsYnVtJztcbiAgfVxuXG4gIHJldHVybiBjbGFzc25hbWU7XG59O1xuXG5jb25zdCBBbGJ1bSA9ICh7IGFsYnVtLCBmdWxsSW5mbyB9KSA9PlxuICBhbGJ1bSAmJiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BhbGJ1bSBmYWRlaW4ke2Z1bGxJbmZvID8gJyBhbGJ1bS1mdWxsJyA6ICcnfSAke2dldENsYXNzTmFtZShhbGJ1bS5wb3NpdGlvbil9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtLWNvbnRhaW5lclwiPlxuICAgICAgICB7ZnVsbEluZm8gPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3dcIj5cbiAgICAgICAgICAgIDxBbGJ1bUluZm8gYWxidW09e2FsYnVtfSBmdWxsSW5mbz17ZnVsbEluZm99IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwic2hhZG93XCIgdG89e2Ake01BSU5fVVJMfS8ke2FsYnVtLmlkfWB9PlxuICAgICAgICAgICAgPEFsYnVtSW5mbyBhbGJ1bT17YWxidW19IGZ1bGxJbmZvPXtmdWxsSW5mb30gLz5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuQWxidW0uZGVmYXVsdFByb3BzID0ge1xuICBmdWxsSW5mbzogZmFsc2UsXG59O1xuXG5BbGJ1bS5wcm9wVHlwZXMgPSB7XG4gIGFsYnVtOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGZ1bGxJbmZvOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsYnVtO1xuIiwiaW1wb3J0IEFsYnVtIGZyb20gJy4vQWxidW0nO1xuaW1wb3J0ICcuL2FsYnVtLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBBbGJ1bTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFsYnVtIGZyb20gJy4uL0FsYnVtJztcblxuY29uc3QgQWxidW1MaXN0ID0gKHsgYWxidW1zIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bS1saXN0XCI+XG4gICAgezAgPCBhbGJ1bXM/Lmxlbmd0aCAmJiBhbGJ1bXMubWFwKChhbGJ1bSkgPT4gPEFsYnVtIGFsYnVtPXthbGJ1bX0ga2V5PXthbGJ1bS5pZH0gLz4pfVxuICA8L2Rpdj5cbik7XG5cbkFsYnVtTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsYnVtczogW10sXG59O1xuXG5BbGJ1bUxpc3QucHJvcFR5cGVzID0ge1xuICBhbGJ1bXM6IFByb3BUeXBlcy5hcnJheSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsYnVtTGlzdDtcbiIsImltcG9ydCBBbGJ1bUxpc3QgZnJvbSAnLi9BbGJ1bUxpc3QnO1xuaW1wb3J0ICcuL2FsYnVtc0xpc3Quc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEFsYnVtTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbic7XG5cbmNvbnN0IEJ1dHRvbiA9ICh7IGNsYXNzTmFtZSwgaWNvbiwgdGV4dCwgLi4ucmVzdCB9KSA9PiAoXG4gIDxidXR0b24gY2xhc3NOYW1lPXtgY3VzdG9tLWJ0biR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9YH0gdHlwZT1cImJ1dHRvblwiIHsuLi5yZXN0fT5cbiAgICB7aWNvbiAmJiA8SWNvbiBpY29uPXtpY29ufSAvPn1cbiAgICB7dGV4dH1cbiAgPC9idXR0b24+XG4pO1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICB0ZXh0OiB1bmRlZmluZWQsXG59O1xuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCAnLi9idXR0b24uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuXG5jb25zdCBTZWFyY2hCYXIgPSAoeyBjbGVhckljb24sIGljb24sIG9uU2VhcmNoIH0pID0+IHtcbiAgY29uc3QgWyB2YWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgWyB2aXNpYmxlLCBzZXRWaXNpYmxlIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb3V0c2lkZVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgIHNldFZhbHVlKCcnKTtcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmICh2aXNpYmxlICYmIG91dHNpZGVSZWYuY3VycmVudCAmJiAhb3V0c2lkZVJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHNldFZpc2libGUoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuICB9LCBbIHZpc2libGUgXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBvblNlYXJjaCh2YWx1ZSk7XG4gIH0sIFsgdmFsdWUgXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhciBzaGFkb3dcIiByZWY9e291dHNpZGVSZWZ9PlxuICAgICAgPEJ1dHRvbiBpY29uPXtpY29ufSBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKHRydWUpfSAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT17dmFsdWUgfHwgdmlzaWJsZSA/ICcnIDogJ2hpZGRlbid9XG4gICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgLz5cbiAgICAgIHsodmlzaWJsZSB8fCB2YWx1ZSkgJiYgPEJ1dHRvbiBjbGFzc05hbWU9XCJmYWRlaW5cIiBpY29uPXtjbGVhckljb259IG9uQ2xpY2s9e2NsZWFyfSAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNlYXJjaEJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsZWFySWNvbjogJ2ZhcyBmYS10aW1lcycsXG4gIGljb246ICdmYXMgZmEtc2VhcmNoJyxcbn07XG5cblNlYXJjaEJhci5wcm9wVHlwZXMgPSB7XG4gIGNsZWFySWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XG4iLCJpbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vU2VhcmNoQmFyJztcbmltcG9ydCAnLi9zZWFyY2hCYXIuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcblxuY29uc3QgU2VsZWN0b3IgPSAoeyBvbkNoYW5nZSwgb3B0aW9ucyB9KSA9PiB7XG4gIGNvbnN0IFsgc2VsZWN0ZWQsIHNldFNlbGVjdGVkIF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFsgc2VsZWN0ZWRBbGwsIHNldFNlbGVjdGVkQWxsIF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgWyB2aXNpYmxlLCBzZXRWaXNpYmxlIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc2V0QWxsU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKG9wdGlvbnM/Lmxlbmd0aCkge1xuICAgICAgY29uc3QgbmV3U2VsZWN0ZWQgPSBbXTtcblxuICAgICAgb3B0aW9ucy5mb3JFYWNoKChvcHQpID0+IG5ld1NlbGVjdGVkLnB1c2gob3B0KSk7XG4gICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uU2VsZWN0ID0gKG9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0ZWQuaW5kZXhPZihvcHRpb24pO1xuICAgIGlmICgtMSA9PT0gaW5kZXgpIHtcbiAgICAgIHNldFNlbGVjdGVkKFsgLi4uc2VsZWN0ZWQsIG9wdGlvbiBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VsZWN0ZWQoc2VsZWN0ZWQuZmlsdGVyKChvcHQpID0+IG9wdCAhPT0gb3B0aW9uKSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0QWxsU2VsZWN0ZWQoKTtcbiAgfSwgWyBvcHRpb25zIF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2FtZUxlbmd0aCA9IHNlbGVjdGVkLmxlbmd0aCA9PT0gb3B0aW9ucz8ubGVuZ3RoO1xuICAgIGlmIChzZWxlY3RlZEFsbCAmJiAhc2FtZUxlbmd0aCkge1xuICAgICAgc2V0U2VsZWN0ZWRBbGwoZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoIXNlbGVjdGVkQWxsICYmIHNhbWVMZW5ndGgpIHtcbiAgICAgIHNldFNlbGVjdGVkQWxsKHRydWUpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHNlbGVjdGVkKTtcbiAgfSwgWyBzZWxlY3RlZCBdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0b3JcIj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93XCJcbiAgICAgICAgaWNvbj17YGZhcyBmYS0ke3Zpc2libGUgPyAnYXJyb3ctcmlnaHQnIDogJ2ZpbHRlcid9YH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSghdmlzaWJsZSl9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWxlY3Rvci1vcHRpb25zIHNoYWRvdyR7dmlzaWJsZSA/ICcnIDogJyBoaWRkZW4nfWB9PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzZWxlY3RlZEFsbCA/ICdzZWxlY3RlZCcgOiB1bmRlZmluZWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkQWxsfVxuICAgICAgICAgIG9uQ2xpY2s9e3NldEFsbFNlbGVjdGVkfVxuICAgICAgICAgIHRleHQ9XCJBbGxcIlxuICAgICAgICAvPlxuICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdCkgPT4gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17LTEgPT09IHNlbGVjdGVkLmluZGV4T2Yob3B0KSA/IHVuZGVmaW5lZCA6ICdzZWxlY3RlZCd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdChvcHQpfVxuICAgICAgICAgICAgdGV4dD17b3B0fVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TZWxlY3Rvci5kZWZhdWx0UHJvcHMgPSB7XG4gIG9wdGlvbnM6IFtdLFxufTtcblxuU2VsZWN0b3IucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0b3I7XG4iLCJpbXBvcnQgU2VsZWN0b3IgZnJvbSAnLi9TZWxlY3Rvcic7XG5pbXBvcnQgJy4vc2VsZWN0b3Iuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFsYnVtTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FsYnVtc0xpc3QnO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaEJhcic7XG5pbXBvcnQgU2VsZWN0b3IgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWxlY3Rvcic7XG5cbmNvbnN0IEFsYnVtTGlzdFBhZ2UgPSAoeyBhbGJ1bXMsIGdlbnJlcywgZ2V0QWxsQWxidW1zLCBsb2FkaW5nIH0pID0+IHtcbiAgY29uc3QgWyBmaWx0ZXJlZEFsYnVtcywgc2V0RmlsdGVyZWRBbGJ1bXMgXSA9IHVzZVN0YXRlKGFsYnVtcyk7XG4gIGNvbnN0IFsgZmlsdGVyZWRHZW5yZXMsIHNldEZpbHRlcmVkR2VucmVzIF0gPSB1c2VTdGF0ZShnZW5yZXMpO1xuICBjb25zdCBbIHNlYXJjaCwgc2V0U2VhcmNoIF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG4gIGNvbnN0IGlzU2VsZWN0ZWQgPSAoeyBhcnRpc3QsIG5hbWUsIGdlbnJlIH0pID0+XG4gICAgLTEgPCBmaWx0ZXJlZEdlbnJlcy5pbmRleE9mKGdlbnJlKSAmJlxuICAgICgtMSA8IGFydGlzdC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8IC0xIDwgbmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoLnRvTG93ZXJDYXNlKCkpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFsbEFsYnVtcygpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWxidW1zICYmIHNlYXJjaCkge1xuICAgICAgc2V0RmlsdGVyZWRBbGJ1bXMoYWxidW1zLmZpbHRlcigoYWxidW0pID0+IGlzU2VsZWN0ZWQoYWxidW0pKSk7XG4gICAgfSBlbHNlIGlmIChhbGJ1bXMpIHtcbiAgICAgIHNldEZpbHRlcmVkQWxidW1zKGFsYnVtcyk7XG4gICAgfVxuICB9LCBbIGFsYnVtcywgc2VhcmNoIF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZpbHRlcmVkR2VucmVzLmxlbmd0aCAhPT0gZ2VucmVzPy5sZW5ndGggfHwgZmlsdGVyZWRBbGJ1bXM/Lmxlbmd0aCAhPT0gYWxidW1zPy5sZW5ndGgpIHtcbiAgICAgIHNldEZpbHRlcmVkQWxidW1zKGFsYnVtcy5maWx0ZXIoKGFsYnVtKSA9PiBpc1NlbGVjdGVkKGFsYnVtKSkpO1xuICAgIH1cbiAgfSwgWyBmaWx0ZXJlZEdlbnJlcyBdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW1zLWNvbnRhaW5lclwiPlxuICAgICAgPGgxPlRvcCAxMDAgQWxidW1zIGluIGlUdW5lcyBVU0E8L2gxPlxuICAgICAgPFNlYXJjaEJhciBvblNlYXJjaD17c2V0U2VhcmNofSAvPlxuICAgICAgeyEhZ2VucmVzPy5sZW5ndGggJiYgPFNlbGVjdG9yIG9wdGlvbnM9e2dlbnJlc30gb25DaGFuZ2U9e3NldEZpbHRlcmVkR2VucmVzfSAvPn1cbiAgICAgIHtsb2FkaW5nICYmIDxkaXY+TE9BRElORzwvZGl2Pn1cbiAgICAgIDxBbGJ1bUxpc3QgYWxidW1zPXtmaWx0ZXJlZEFsYnVtc30gZ2VucmVzPXtnZW5yZXN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BbGJ1bUxpc3RQYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWxidW1zOiBbXSxcbiAgZ2VucmVzOiBbXSxcbiAgbG9hZGluZzogZmFsc2UsXG59O1xuXG5BbGJ1bUxpc3RQYWdlLnByb3BUeXBlcyA9IHtcbiAgYWxidW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGdlbnJlczogUHJvcFR5cGVzLmFycmF5LFxuICBnZXRBbGxBbGJ1bXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxidW1MaXN0UGFnZTtcbiIsImltcG9ydCBBbGJ1bUxpc3RQYWdlIGZyb20gJy4vQWxidW1MaXN0UGFnZSc7XG5pbXBvcnQgJy4vYWxidW1MaXN0UGFnZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgQWxidW1MaXN0UGFnZTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBnZXQgPSBhc3luYyAodXJsKSA9PiBheGlvcy5nZXQodXJsKTtcblxuZXhwb3J0IGNvbnN0IHBvc3QgPSBhc3luYyAodXJsLCBwYXJhbXMpID0+IGF4aW9zLnBvc3QodXJsLCBwYXJhbXMpO1xuXG5leHBvcnQgY29uc3QgcHV0ID0gYXN5bmMgKHVybCwgcGFyYW1zKSA9PiBheGlvcy5wdXQodXJsLCBwYXJhbXMpO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gYXN5bmMgKHVybCwgcGFyYW1zKSA9PiBheGlvcy5kZWxldGUodXJsLCBwYXJhbXMpO1xuIiwiaW1wb3J0IHsgR0VOUkVTIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGlzcGF0Y2hzJztcblxuY29uc3QgZ2V0QWxidW1HZW5yZXMgPSAoYWxidW1zKSA9PiB7XG4gIGxldCBnZW5yZXMgPSBbXTtcblxuICBpZiAoYWxidW1zPy5sZW5ndGgpIHtcbiAgICBjb25zdCBhbGwgPSBhbGJ1bXMubWFwKCh7IGdlbnJlIH0pID0+IGdlbnJlKTtcbiAgICBnZW5yZXMgPSBhbGwuZmlsdGVyKChnZW5yZSwgaWR4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YoZ2VucmUpID09PSBpZHgpLnNvcnQoKTtcbiAgfVxuICByZXR1cm4gZ2VucmVzO1xufTtcblxuY29uc3Qgc2V0QWxidW1HZW5yZXMgPSAoYWxidW1zKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goeyB0eXBlOiBHRU5SRVMuU0VUX0FMTCwgZ2VucmVzOiBnZXRBbGJ1bUdlbnJlcyhhbGJ1bXMpIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0QWxidW1HZW5yZXM7XG4iLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuLi9BcGlXcmFwcGVyJztcbmltcG9ydCB7IEFMQlVNUyB9IGZyb20gJy4uLy4uL3V0aWxzL2Rpc3BhdGNocyc7XG5pbXBvcnQgc2V0QWxidW1HZW5yZXMgZnJvbSAnLi4vZ2VucmVzL2dlbnJlcyc7XG5cbmNvbnN0IElUVU5FU19UT1BfMTAwID0gJ2h0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS91cy9yc3MvdG9wYWxidW1zL2xpbWl0PTEwMC9qc29uJztcblxuY29uc3QgTE9BRElORyA9IHsgdHlwZTogQUxCVU1TLkxPQURJTkcgfTtcbmNvbnN0IExPQURJTkdfRU5EID0geyB0eXBlOiBBTEJVTVMuTE9BRElOR19FTkQgfTtcblxuZXhwb3J0IGNvbnN0IHNldFNlbGVjdGVkQWxidW0gPSAoYWxidW0pID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7IHR5cGU6IEFMQlVNUy5TRVQsIGFsYnVtIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEFsYnVtcyA9IChhbGJ1bXMpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7IHR5cGU6IEFMQlVNUy5TRVRfQUxMLCBhbGJ1bXMgfSk7XG59O1xuXG5jb25zdCBmb3JtYXRBbGJ1bSA9IChhbGJ1bSwgcG9zaXRpb24pID0+XG4gIGFsYnVtID9cbiAgICB7XG4gICAgICAgIG5hbWU6IGFsYnVtWydpbTpuYW1lJ10/LmxhYmVsLFxuICAgICAgICBhcnRpc3Q6IGFsYnVtWydpbTphcnRpc3QnXT8ubGFiZWwsXG4gICAgICAgIGFydGlzdExpbms6IGFsYnVtWydpbTphcnRpc3QnXT8uYXR0cmlidXRlcz8uaHJlZixcbiAgICAgICAgaWQ6IGFsYnVtLmlkPy5hdHRyaWJ1dGVzPy5bJ2ltOmlkJ10sXG4gICAgICAgIGltYWdlOiBhbGJ1bVsnaW06aW1hZ2UnXT8uW2FsYnVtWydpbTppbWFnZSddLmxlbmd0aCAtIDFdPy5sYWJlbCxcbiAgICAgICAgcmVsZWFzZURhdGU6IGFsYnVtWydpbTpyZWxlYXNlRGF0ZSddPy5sYWJlbCA/XG4gICAgICAgICAgZm9ybWF0KG5ldyBEYXRlKGFsYnVtWydpbTpyZWxlYXNlRGF0ZSddLmxhYmVsKSwgJ2RkL01NL1lZWScpIDpcbiAgICAgICAgICBudWxsLFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24gKyAxLFxuICAgICAgICBsaW5rOiBhbGJ1bS5pZD8ubGFiZWwgfHwgYWxidW0ubGluaz8uYXR0cmlidXRlcz8uaHJlZixcbiAgICAgICAgZ2VucmU6IGFsYnVtLmNhdGVnb3J5Py5hdHRyaWJ1dGVzPy5sYWJlbCxcbiAgICAgICAgZ2VucmVMaW5rOiBhbGJ1bS5jYXRlZ29yeT8uYXR0cmlidXRlcz8uc2NoZW1lLFxuICAgICAgICBwcmljZTogYWxidW1bJ2ltOnByaWNlJ10/LmxhYmVsLFxuICAgICAgICB0b3RhbFNvbmdzOiBhbGJ1bVsnaW06aXRlbUNvdW50J10/LmxhYmVsLFxuICAgICAgICByaWdodHM6IGFsYnVtLnJpZ2h0cz8ubGFiZWwsXG4gICAgICB9IDpcbiAgICBudWxsO1xuXG5jb25zdCBmb3JtYXRBbGJ1bXMgPSAoYWxidW1zKSA9PiAoYWxidW1zPy5sZW5ndGggPyBhbGJ1bXMubWFwKGZvcm1hdEFsYnVtKSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbEFsYnVtcyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChMT0FESU5HKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGdldChJVFVORVNfVE9QXzEwMClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBhbGJ1bXMgPSBmb3JtYXRBbGJ1bXMocmVzcG9uc2UuZGF0YS5mZWVkLmVudHJ5KTtcbiAgICAgICAgZGlzcGF0Y2goc2V0QWxidW1HZW5yZXMoYWxidW1zKSk7XG4gICAgICAgIGRpc3BhdGNoKHNldEFsYnVtcyhhbGJ1bXMpKTtcbiAgICAgICAgcmVzb2x2ZShhbGJ1bXMpO1xuICAgICAgICBkaXNwYXRjaChMT0FESU5HX0VORCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIGRpc3BhdGNoKExPQURJTkdfRU5EKTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBbGJ1bUJ5SWQgPSAoYWxidW1JZCkgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICBkaXNwYXRjaChMT0FESU5HKTtcbiAgY29uc3QgeyBhbGJ1bXMgfSA9IGdldFN0YXRlKCkuYWxidW1zO1xuXG4gIGlmIChhbGJ1bXM/Lmxlbmd0aCkge1xuICAgIGRpc3BhdGNoKHNldFNlbGVjdGVkQWxidW0oYWxidW1zLmZpbmQoKGFsYnVtKSA9PiBhbGJ1bS5pZCA9PT0gYWxidW1JZCkpKTtcbiAgICBkaXNwYXRjaChMT0FESU5HX0VORCk7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGF0Y2goZ2V0QWxsQWxidW1zKCkpXG4gICAgICAudGhlbigoZm91bmRBbGJ1bXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0U2VsZWN0ZWRBbGJ1bShmb3VuZEFsYnVtcy5maW5kKChhbGJ1bSkgPT4gYWxidW0uaWQgPT09IGFsYnVtSWQpKSk7XG4gICAgICAgIGRpc3BhdGNoKExPQURJTkdfRU5EKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChMT0FESU5HX0VORCk7XG4gICAgICB9KTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBBbGJ1bUxpc3RQYWdlIGZyb20gJy4uLy4uL3BhZ2VzL0FsYnVtTGlzdFBhZ2UnO1xuaW1wb3J0IHsgZ2V0QWxsQWxidW1zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hbGJ1bXMvYWxidW1zJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgYWxidW1zLCBnZW5yZXMgfSkgPT4gKHtcbiAgYWxidW1zOiBhbGJ1bXMuYWxidW1zLFxuICBnZW5yZXM6IGdlbnJlcy5nZW5yZXMsXG4gIGxvYWRpbmc6IGFsYnVtcy5sb2FkaW5nLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgLi4uYmluZEFjdGlvbkNyZWF0b3JzKFxuICAgIHtcbiAgICAgIGdldEFsbEFsYnVtcyxcbiAgICB9LFxuICAgIGRpc3BhdGNoLFxuICApLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWxidW1MaXN0UGFnZSkpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VQYXJhbXMsIE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBBbGJ1bSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FsYnVtJztcbmltcG9ydCB7IE1BSU5fVVJMIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXJscyc7XG5cbmNvbnN0IEFsYnVtUGFnZSA9ICh7IGFsYnVtLCBnZXRBbGJ1bUJ5SWQsIGxvYWRpbmcsIHNldFNlbGVjdGVkQWxidW0gfSkgPT4ge1xuICBjb25zdCB7IGFsYnVtSWQgfSA9IHVzZVBhcmFtcygpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhbGJ1bUlkICYmICFhbGJ1bT8uaWQpIHtcbiAgICAgIGdldEFsYnVtQnlJZChhbGJ1bUlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gc2V0U2VsZWN0ZWRBbGJ1bSgpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bS1wYWdlXCI+XG4gICAgICA8TmF2TGluayB0bz17TUFJTl9VUkx9PlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctbGVmdFwiIC8+XG4gICAgICA8L05hdkxpbms+XG4gICAgICB7bG9hZGluZyB8fCAhYWxidW0gPyA8ZGl2PkxPQURJTkcuLi48L2Rpdj4gOiA8QWxidW0gYWxidW09e2FsYnVtfSBmdWxsSW5mbyAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFsYnVtUGFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsYnVtOiB7fSxcbiAgbG9hZGluZzogZmFsc2UsXG59O1xuXG5BbGJ1bVBhZ2UucHJvcFR5cGVzID0ge1xuICBhbGJ1bTogUHJvcFR5cGVzLm9iamVjdCxcbiAgZ2V0QWxidW1CeUlkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2V0U2VsZWN0ZWRBbGJ1bTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsYnVtUGFnZTtcbiIsImltcG9ydCBBbGJ1bVBhZ2UgZnJvbSAnLi9BbGJ1bVBhZ2UnO1xuaW1wb3J0ICcuL2FsYnVtUGFnZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgQWxidW1QYWdlO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEFsYnVtUGFnZSBmcm9tICcuLi8uLi9wYWdlcy9BbGJ1bVBhZ2UnO1xuaW1wb3J0IHsgZ2V0QWxidW1CeUlkLCBzZXRTZWxlY3RlZEFsYnVtIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hbGJ1bXMvYWxidW1zJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgYWxidW1zIH0pID0+ICh7XG4gIGFsYnVtOiBhbGJ1bXMuYWxidW0sXG4gIGxvYWRpbmc6IGFsYnVtcy5sb2FkaW5nLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgLi4uYmluZEFjdGlvbkNyZWF0b3JzKFxuICAgIHtcbiAgICAgIGdldEFsYnVtQnlJZCxcbiAgICAgIHNldFNlbGVjdGVkQWxidW0sXG4gICAgfSxcbiAgICBkaXNwYXRjaCxcbiAgKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFsYnVtUGFnZSkpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBBbGJ1bUxpc3RQYWdlIGZyb20gJy4uL2NvbnRhaW5lcnMvYWxidW1MaXN0JztcbmltcG9ydCBBbGJ1bVBhZ2UgZnJvbSAnLi4vY29udGFpbmVycy9hbGJ1bSc7XG5pbXBvcnQgeyBBTEJVTV9VUkwsIE1BSU5fVVJMIH0gZnJvbSAnLi4vdXRpbHMvdXJscyc7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiAoXG4gIDxtYWluPlxuICAgIHsvKiA8TmF2YmFyIC8+ICovfVxuICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIGV4YWN0IGNvbXBvbmVudD17QWxidW1QYWdlfSBwYXRoPXtBTEJVTV9VUkx9IC8+XG4gICAgICAgIDxSb3V0ZSBleGFjdCBjb21wb25lbnQ9e0FsYnVtTGlzdFBhZ2V9IHBhdGg9e01BSU5fVVJMfSAvPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9kaXY+XG4gIDwvbWFpbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZXMvTWFpbic7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICA8TWFpbiAvPlxuICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgPC9Qcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEFwcCBmcm9tICdBcHAnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL2FuaW1hdGlvbnMuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9