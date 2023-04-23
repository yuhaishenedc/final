/******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
                    test:"console"
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })

/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {
    
    module.exports = __webpack_require__("EW39");
    
    /***/ }),
    
    /***/ "EW39":
    /***/ (function(module, exports, __webpack_require__) {

        console.log(module.moduleId);
    
        (function (hostGlobal) {
            if (!hostGlobal.__appxInited) {
              if (hostGlobal.importScripts) {}
              hostGlobal.__appxInited = 1;
              var callback = function () {}
              var appCallback = function () {
                __webpack_require__("GfhN");
              };
              var pageRequestPaths = [];
              var pageRequests = {}
        
            var engine0detect = __webpack_require__("RJR6");
                if ( engine0detect(0, hostGlobal) ) {
                  var engine0init = __webpack_require__("JMLp");
                  engine0init(0, hostGlobal, callback, appCallback, pageRequests, pageRequestPaths)
                  return;
                }
            }
          })(globalThis);	
        
        
        //(typeof global !== 'undefined' ? global : self);	
        /***/ })
    
    /******/ });