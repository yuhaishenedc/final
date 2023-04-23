var initCount = 0;
const counter = function() {
  initCount += 1;
};

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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })

/******/ ({

/***/ 0:
/***/ (function(module=counter(), exports, __webpack_require__) {

    //"use strict";

    module.exports = __webpack_require__("EW39");

/***/ }),

/***/ "EW39":
/***/ (function(module, exports, __webpack_require__) {

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
    /***/ }),

    /***/ "GfhN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = undefined,
    self = undefined,
    window = undefined,
    document = undefined,
    location = undefined,
    XMLHttpRequest = undefined,
    AlipayJSBridge = undefined,
    importScript = undefined,
    importScripts = undefined,
    AFAppX = undefined,
    fetch = undefined,
    $AppxFramework = undefined,
    $AppxRuntime = undefined,
    mqEnvironment = undefined,
    wxEnvironment = undefined,
    __CUBE_KERNEL__ = undefined;
    
App({
  onLaunch: function onLaunch(options) {
    console.log('App Launch', options);
    console.log('getSystemInfoSync', my.getSystemInfoSync());
    console.log('SDKVersion', my.SDKVersion);
  },
  onShow: function onShow() {
    console.log('App Show');
  },
  onHide: function onHide() {
    console.log('App Hide');
  },

  globalData: {
    hasLogin: false
  }
});

/***/ }),

/***/ "RJR6":
/***/ (function(module, exports, __webpack_require__) {

    "use strict";

    module.exports = function (r, p) {
      var e = p.AFAppX,
          o = p.$AppxFramework;return !(!e || e.$AppxFramework || o);
    };
    
    /***/ }),
    

/******/ });