function layer1(){

  var tab=[];

  var loop_count=20000;

  var a=1,b=2;
  
  for(var i=0;i<loop_count;i++){
    tab[i]=function (){
      x=1;
      y=2;
      return a+b+x+y;
    }
  }

  for(var i=0;i<loop_count;i++){
    tab[i]();
  }

  console.log(1);

	function layer2(){
		// build:0.63.4 */var __scriptTimeBegin4Bundle = Date && Date.now && Date.now();var __scriptName4Bundle = "index.js";
/*! 
[PositionForClientEntryCodeBegin]*/ !(function(){/**! __CODEPLACEHOLDER_START__ */ /*[PositionForClientEntryCodeBegin]*/ /**! __CODEPLACEHOLDER_END__ */})(); /*
 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+33g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".btn-container {width:100%;height:100vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.btn-container .a-button {width:250px}.box.top, .box.bottom {height:200px}.box.left, .box.right {width:200px;height:100%}.box {background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "+5UK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/request-payment/request-payment",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("7pIe");
    },
    stylesheet: function () {
      return __webpack_require__("Wa/z");
    }
  });
  
  

/***/ }),

/***/ "+C45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("Gbrn");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/swiper/swiper.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "+EL3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var Alphabet_ = $getComponentClass("/node_modules/mini-ali-ui/es/list/alphabet/index");
var Alphabet = Alphabet_ || (0, _EmptyComponentFactory2.default)("alphabet");
var AmIcon_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-icon/index");
var AmIcon = AmIcon_ || (0, _EmptyComponentFactory2.default)("am-icon");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "dyt-list", style: "position: relative; height: 100vh;"
    },
    _react2.default.createElement(
      Alphabet,
      {
        alphabet: data['alphabet'], onClick: $getComponentEventHandler(this, "onAlphabetClick"), $isCustomComponent: this.$isCustomComponent, __tag: 'alphabet'
      },
      _react2.default.createElement(
        View,
        {
          slot: "prefix"
        },
        _react2.default.createElement(AmIcon, {
          size: "12", type: "check_", $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
        })
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "+GnR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("G3az");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/list-item/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "+JBi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("gqBJ");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/get-title-color/get-title-color.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "+LKb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("XkMr");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

var _ocrTemplate = __webpack_require__("4gaC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $templates = {};
$templates = (0, _extends3.default)({}, _ocrTemplate.$ownTemplates);
function render(data) {
  return (0, _createRoot2.default)((0, _useTemplate2.default)($templates["ocr-template"], {
    textArry: data['textArry'],
    imgUrl: data['imgUrl']
  }, undefined, this));
};
module.exports = exports["default"];

/***/ }),

/***/ "+PbP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("0RpE");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/notice/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "+SPl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".switch-item + .switch-item {margin-top:0.2rem}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "+U1z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".extra {background-image:url('https://gw.alipayobjects.com/zos/rmsportal/dOfSJfWQvYdvsZiJStvg.svg');background-size:contain;background-repeat:no-repeat;background-position:right center;opacity:0.2;height:22px;width:22px}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "+V0A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".tips {margin-left:10px;margin-top:20px;color:red;font-size:12px}.tips .item {margin:5px 0;color:#888888;line-height:14px}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "+VHu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "am-filter-" + (data['show'] ? 'show' : 'hide') + " " + data['className'], disableScroll: false
    },
    _react2.default.createElement(View, {
      className: "am-filter-mask", onTap: $getEventHandler(this, "maskTap")
    }),
    _react2.default.createElement(
      View,
      {
        className: "am-filter-document"
      },
      _react2.default.createElement(
        View,
        {
          className: "am-filter-content", onChange: $getEventHandler(this, data['callBackFn'])
        },
        _react2.default.createElement(
          View,
          {
            className: "am-filter-list " + (data['equalRows'] > 0 ? 'am-filter-child-' + data['equalRows'] : '')
          },
          (0, _renderSlot2.default)(data, "$default", null)
        ),
        data['max'] !== 1 ? _react2.default.createElement(
          View,
          {
            className: "am-filter-btn"
          },
          _react2.default.createElement(
            Button,
            {
              type: "default", className: "am-filter-default", onTap: $getEventHandler(this, "resetFn")
            },
            (0, _toString2.default)("重置")
          ),
          _react2.default.createElement(
            Button,
            {
              type: "primary", className: "am-filter-primary", onTap: $getEventHandler(this, "confirmFn")
            },
            (0, _toString2.default)("确定")
          )
        ) : null
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "+YeH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/generate-image-from-code/generate-image-from-code.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "+Zxo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("5AAy");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  M_1_["WorkerComponent"] && Object(M_1_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/tag/index",
    
    
    usingComponents: {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"},
    render: function () {
      return __webpack_require__("k74N");
    },
  });
  
  

/***/ }),

/***/ "+cA9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("JPAY");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/create-selector-query/create-selector-query.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "+dOh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".buttons {padding:0.12rem;line-height:1.2;height:0.6rem;width:2rem;font-size:0.3rem;text-align:center;margin-top:0.4rem}.server_addr {width:6rem;text-align:center;color:#6a6f77;margin-top:0.2rem}.subView {-webkit-box-align:center;-webkit-align-items:center;align-items:center}.message_text {margin-top:0.4rem;width:5rem;height:0.4rem}.run_log {margin-top:0.3rem}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "+i+x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("4mcr");
/* harmony import */ var M_2_ = __webpack_require__("JGVg");
/* harmony import */ var M_3_ = __webpack_require__("qgau");
/* harmony import */ var M_4_ = __webpack_require__("lJKG");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/local-logoff/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "+iNU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("JI+L");
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;



internal_style = ".red {background:red}.stream {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:0.1rem}.post + .post {margin-top:0.1rem}.post {display:-webkit-box;display:-webkit-flex;display:flex}.postUser {-webkit-box-flex:0;-webkit-flex:0 1 auto;flex:0 1 auto;padding-bottom:0.2rem}.postUser__name {width:1.8rem;color:#57727C;font-size:0.24rem;font-weight:700;line-height:1;text-align:center;margin-top:0.6rem}.postBody {-webkit-box-flex:1;-webkit-flex:1 1 0%;flex:1 1 0%;position:relative;padding:0.3rem;border:" + M_0_["RPX_2"] + " solid #CAD0D2;border-radius:0.08rem}.postBody:after,\n.postBody:before {right:100%;top:0.7rem;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}.postBody:after {border-color:transparent;border-right-color:#ffffff;border-width:0.16rem;margin-top:-0.16rem}.postBody:before {border-color:transparent;border-right-color:#CAD0D2;border-width:0.18rem;margin-top:-0.18rem}.postBody__content {color:#57727C;font-size:0.24rem}.postBody__date {margin-top:0.1rem;color:#86969C;font-size:0.2rem;text-transform:uppercase;letter-spacing:" + M_0_["RPX_2"] + "}.red {color:red}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "+oOD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/ocr-driver-license/ocr-driver-license",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("rWt6");
    },
    stylesheet: function () {
      return __webpack_require__("0pSK");
    }
  });
  
  

/***/ }),

/***/ "+uWv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  M_0_["WorkerComponent"] && Object(M_0_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/mask/index",
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("t+CH");
    },
  });
  
  

/***/ }),

/***/ "+wje":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("FE7j");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/upload-file/upload-file.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "+y0s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("DQZR");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/stepper/stepper.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "+yVA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/screen/screen.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "/4Xp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("4Twf");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/loading/loading.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "/FJ1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "/FjR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var Loading_ = $getComponentClass("/node_modules/mini-ali-ui/es/loading/index");
var Loading = Loading_ || (0, _EmptyComponentFactory2.default)("loading");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "am-list " + data['className']
    },
    (0, _getLooseDataMember2.default)([data['$slots'], "header"]) ? _react2.default.createElement(
      View,
      {
        className: "am-list-header"
      },
      (0, _renderSlot2.default)(data, "header", null)
    ) : null,
    _react2.default.createElement(
      View,
      {
        className: "am-list-body"
      },
      (0, _renderSlot2.default)(data, "$default", null)
    ),
    data['loadMore'] === 'load' ? _react2.default.createElement(
      View,
      {
        className: "am-list-load-more"
      },
      _react2.default.createElement(Loading, {
        size: data['loadingSize'], $isCustomComponent: this.$isCustomComponent, __tag: 'loading'
      }),
      _react2.default.createElement(
        Text,
        {
          className: "am-list-load-more-txt"
        },
        (0, _toString2.default)((0, _getLooseDataMember2.default)([data['loadContent'], 0]) ? (0, _getLooseDataMember2.default)([data['loadContent'], 0]) : '')
      )
    ) : null,
    data['loadMore'] === 'over' ? _react2.default.createElement(
      View,
      {
        className: "am-list-load-over"
      },
      (0, _toString2.default)((0, _getLooseDataMember2.default)([data['loadContent'], 1]) ? (0, _getLooseDataMember2.default)([data['loadContent'], 1]) : '')
    ) : null,
    (0, _getLooseDataMember2.default)([data['$slots'], "footer"]) ? _react2.default.createElement(
      View,
      {
        className: "am-list-footer"
      },
      (0, _renderSlot2.default)(data, "footer", null)
    ) : null
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "/HlJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("bNz3");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/video/video.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "/IVs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("确认框 API")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("my.confirm")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "comfirm")
          },
          (0, _toString2.default)("显示确认框")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "/O5m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Canvas = _afAppx.Canvas || (0, _EmptyComponentFactory2.default)("canvas");

var ScrollView = _afAppx.ScrollView || (0, _EmptyComponentFactory2.default)("scroll-view");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};
function render(data) {
  var _this = this;

  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("画布 API")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("my.createCanvasContext")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(Canvas, {
          className: "canvas-element", id: "canvas", onTap: $getEventHandler(this, "log"), onTouchStart: $getEventHandler(this, "log"), ref: $getRefHandler(this, "canvas")
        })
      ),
      _react2.default.createElement(
        ScrollView,
        {
          className: "canvas-buttons", scrollY: "true"
        },
        (0, _iterate2.default)(data['methods'], function (method, index) {
          return _react2.default.createElement(
            Button,
            {
              className: "canvas-button", type: "primary", onTap: $getEventHandler(_this, method)
            },
            (0, _toString2.default)(method)
          );
        })
      ),
      _react2.default.createElement(
        ScrollView,
        {
          className: "canvas-buttons", scrollY: "true", style: "height: 150rpx;"
        },
        _react2.default.createElement(
          Button,
          {
            className: "canvas-button", type: "primary", onTap: $getEventHandler(this, "toTempFilePath")
          },
          (0, _toString2.default)("toTempFilePath")
        ),
        _react2.default.createElement(
          Button,
          {
            className: "canvas-button", type: "primary", onTap: $getEventHandler(this, "getImageData")
          },
          (0, _toString2.default)("getImageData")
        ),
        _react2.default.createElement(
          Button,
          {
            className: "canvas-button", type: "primary", onTap: $getEventHandler(this, "putImageData")
          },
          (0, _toString2.default)("putImageData")
        ),
        _react2.default.createElement(
          Button,
          {
            className: "canvas-button", type: "primary", onTap: $getEventHandler(this, "preloadCanvasImage")
          },
          (0, _toString2.default)("preloadCanvasImage")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "/Sw3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("KuL8");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/calendar/calendar.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "/Vp4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("5AAy");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  M_1_["WorkerComponent"] && Object(M_1_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/title/index",
    
    
    usingComponents: {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"},
    render: function () {
      return __webpack_require__("oC31");
    },
  });
  
  

/***/ }),

/***/ "/WkC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");

var Input = _afAppx.Input || (0, _EmptyComponentFactory2.default)("input");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("联系人 API")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("my.choosePhoneContact")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "choosePhoneContact")
          },
          (0, _toString2.default)("唤起本地通讯录")
        )
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("my.chooseAlipayContact")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "chooseAlipayContact")
          },
          (0, _toString2.default)("唤起支付宝通讯录")
        )
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("my.chooseContact")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "chooseContact")
          },
          (0, _toString2.default)("选择联系人")
        )
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("my.addPhoneContact")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          View,
          {
            style: "font-size:18px;margin-top:18px;margin-bottom:18px"
          },
          _react2.default.createElement(
            Text,
            {
              style: "font-size:18px;margin-top:18px;margin-bottom:18px"
            },
            (0, _toString2.default)("基本信息")
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("昵称")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "nickName", onInput: $getEventHandler(this, "onInput"), className: "input", value: "七月流火", ref: $getRefHandler(this, "nickName")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("姓氏")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "lastName", onInput: $getEventHandler(this, "onInput"), className: "input", value: "Last", ref: $getRefHandler(this, "lastName")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("中间名")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "middleName", onInput: $getEventHandler(this, "onInput"), className: "input", value: "Middle", ref: $getRefHandler(this, "middleName")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("名字")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "firstName", onInput: $getEventHandler(this, "onInput"), className: "input", value: "First", ref: $getRefHandler(this, "firstName")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("备注")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "remark", onInput: $getEventHandler(this, "onInput"), className: "input", value: "这里是备注", ref: $getRefHandler(this, "remark")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("手机号")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "mobilePhoneNumber", onInput: $getEventHandler(this, "onInput"), className: "input", value: "13800000000", ref: $getRefHandler(this, "mobilePhoneNumber")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("支付宝账号")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "alipayAccount", onInput: $getEventHandler(this, "onInput"), className: "input", value: "alipay@alipay.com", ref: $getRefHandler(this, "alipayAccount")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("微信号")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "weChatNumber", onInput: $getEventHandler(this, "onInput"), className: "input", value: "liuhuo", ref: $getRefHandler(this, "weChatNumber")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            style: "font-size:18px;margin-top:18px;margin-bottom:18px"
          },
          _react2.default.createElement(
            Text,
            {
              style: "font-size:18px;margin-top:18px;margin-bottom:18px"
            },
            (0, _toString2.default)("联系地址")
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("国家")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "addressCountry", onInput: $getEventHandler(this, "onInput"), className: "input", value: "US", ref: $getRefHandler(this, "addressCountry")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("省份")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "addressState", onInput: $getEventHandler(this, "onInput"), className: "input", value: "California", ref: $getRefHandler(this, "addressState")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("城市")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "addressCity", onInput: $getEventHandler(this, "onInput"), className: "input", value: "San Francisco", ref: $getRefHandler(this, "addressCity")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("街道")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "addressStreet", onInput: $getEventHandler(this, "onInput"), className: "input", value: "Mountain View", ref: $getRefHandler(this, "addressStreet")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("邮政编码")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "addressPostalCode", onInput: $getEventHandler(this, "onInput"), className: "input", value: "94016", ref: $getRefHandler(this, "addressPostalCode")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            style: "font-size:18px;margin-top:18px;margin-bottom:18px"
          },
          _react2.default.createElement(
            Text,
            {
              style: "font-size:18px;margin-top:18px;margin-bottom:18px"
            },
            (0, _toString2.default)("工作")
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("公司")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "organization", onInput: $getEventHandler(this, "onInput"), className: "input", value: "AntFin", ref: $getRefHandler(this, "organization")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("职位")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "title", onInput: $getEventHandler(this, "onInput"), className: "input", value: "Developer", ref: $getRefHandler(this, "title")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("工作传真")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "workFaxNumber", onInput: $getEventHandler(this, "onInput"), className: "input", value: "11111111", ref: $getRefHandler(this, "workFaxNumber")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("工作电话")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "workPhoneNumber", onInput: $getEventHandler(this, "onInput"), className: "input", value: "11111112", ref: $getRefHandler(this, "workPhoneNumber")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("公司电话")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "hostNumber", onInput: $getEventHandler(this, "onInput"), className: "input", value: "11111113", ref: $getRefHandler(this, "hostNumber")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("电子邮件")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "email", onInput: $getEventHandler(this, "onInput"), className: "input", value: "liuhuo01@sina.com", ref: $getRefHandler(this, "email")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("网站")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "url", onInput: $getEventHandler(this, "onInput"), className: "input", value: "www.alipay.com", ref: $getRefHandler(this, "url")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            style: "font-size:18px;margin-top:18px;margin-bottom:18px"
          },
          _react2.default.createElement(
            Text,
            {
              style: "font-size:18px;margin-top:18px;margin-bottom:18px"
            },
            (0, _toString2.default)("工作地址")
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("国家")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "workAddressCountry", onInput: $getEventHandler(this, "onInput"), className: "input", value: "China", ref: $getRefHandler(this, "workAddressCountry")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("省份")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "workAddressState", onInput: $getEventHandler(this, "onInput"), className: "input", value: "Zhejiang", ref: $getRefHandler(this, "workAddressState")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("城市")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "workAddressCity", onInput: $getEventHandler(this, "onInput"), className: "input", value: "Hangzhou", ref: $getRefHandler(this, "workAddressCity")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("街道")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "workAddressStreet", onInput: $getEventHandler(this, "onInput"), className: "input", value: "Tianmushan Road", ref: $getRefHandler(this, "workAddressStreet")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("邮政编码")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "workAddressPostalCode", onInput: $getEventHandler(this, "onInput"), className: "input", value: "361005", ref: $getRefHandler(this, "workAddressPostalCode")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            style: "font-size:18px;margin-top:18px;margin-bottom:18px"
          },
          _react2.default.createElement(
            Text,
            {
              style: "font-size:18px;margin-top:18px;margin-bottom:18px"
            },
            (0, _toString2.default)("住宅")
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("传真")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "homeFaxNumber", onInput: $getEventHandler(this, "onInput"), className: "input", value: "11111114", ref: $getRefHandler(this, "homeFaxNumber")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("电话")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "homePhoneNumber", onInput: $getEventHandler(this, "onInput"), className: "input", value: "11111115", ref: $getRefHandler(this, "homePhoneNumber")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("国家")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "homeAddressCountry", onInput: $getEventHandler(this, "onInput"), className: "input", value: "Canada", ref: $getRefHandler(this, "homeAddressCountry")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("省份")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "homeAddressState", onInput: $getEventHandler(this, "onInput"), className: "input", value: "Ontario", ref: $getRefHandler(this, "homeAddressState")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("城市")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "homeAddressCity", onInput: $getEventHandler(this, "onInput"), className: "input", value: "Toronto", ref: $getRefHandler(this, "homeAddressCity")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("街道")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "homeAddressStreet", onInput: $getEventHandler(this, "onInput"), className: "input", value: "No.234 Road", ref: $getRefHandler(this, "homeAddressStreet")
            })
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("邮政编码")
          ),
          _react2.default.createElement(
            View,
            {
              className: "form-row-content"
            },
            _react2.default.createElement(Input, {
              id: "homeAddressPostalCode", onInput: $getEventHandler(this, "onInput"), className: "input", value: "123456", ref: $getRefHandler(this, "homeAddressPostalCode")
            })
          )
        ),
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "addPhoneContact")
          },
          (0, _toString2.default)("添加到手机联系人")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "/XTH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Yq+t");
/* harmony import */ var M_1_ = __webpack_require__("5AAy");
/* harmony import */ var M_2_ = __webpack_require__("ju+b");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

    
  
  M_2_["WorkerComponent"] && Object(M_2_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/grid/index",
    
    
    usingComponents: {"pagination":"/node_modules/mini-ali-ui/es/pagination/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"},
    render: function () {
      return __webpack_require__("ioxd");
    },
  });
  
  

/***/ }),

/***/ "/cyv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".canvas-view {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.canvas {width:305px;height:305px;background-color:#fff}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "/dLU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("4mcr");
/* harmony import */ var M_2_ = __webpack_require__("JGVg");
/* harmony import */ var M_3_ = __webpack_require__("qgau");
/* harmony import */ var M_4_ = __webpack_require__("OtHD");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/local-redpacket/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "/kcS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("4+M5");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/view/view.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "PLSW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("32v2");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/local-error/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "PME2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("XkMr");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

var _ocrTemplate = __webpack_require__("4gaC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $templates = {};
$templates = (0, _extends3.default)({}, _ocrTemplate.$ownTemplates);
function render(data) {
  return (0, _createRoot2.default)((0, _useTemplate2.default)($templates["ocr-template"], {
    textArry: data['textArry'],
    imgUrl: data['imgUrl']
  }, undefined, this));
};
module.exports = exports["default"];

/***/ }),

/***/ "PNhg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("vfPE");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/map/map.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "PTzX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/open-location/open-location",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("4O2O");
    },
    stylesheet: function () {
      return __webpack_require__("WEC4");
    }
  });
  
  

/***/ }),

/***/ "PeSR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var WebView = _afAppx.WebView || (0, _EmptyComponentFactory2.default)("web-view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(WebView, {
      src: "https://render.alipay.com/p/w/tinyapp-demo-h5/index.html", onMessage: $getEventHandler(this, "onmessage")
    })
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "PeXH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":["/page/API/ocr-template/ocr-template.acss"]}*/var internal_style;
/* require("/page/API/ocr-template/ocr-template.acss") */

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "PvO1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Input = _afAppx.Input || (0, _EmptyComponentFactory2.default)("input");
var AmIcon_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-icon/index");
var AmIcon = AmIcon_ || (0, _EmptyComponentFactory2.default)("am-icon");


var $templates = {};

var _ref = _react2.default.createElement(View, {
  className: "am-verify-code-line-bottom"
});

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "am-verify-code-item " + (data['last'] ? 'last' : '') + " " + data['className']
    },
    _react2.default.createElement(
      View,
      {
        className: "am-verify-code-line"
      },
      _react2.default.createElement(
        View,
        {
          className: "am-verify-code-label " + data['labelCls']
        },
        (0, _toString2.default)(data['label'])
      ),
      _react2.default.createElement(Input, {
        enableNative: data['enableNative'], syncInput: data['syncInput'], className: "am-verify-code-content " + data['inputCls'], value: data['value'], name: data['name'], placeholder: data['placeholder'], placeholderClass: "am-verify-code-placeholder-base " + data['placeholderClass'], placeholderStyle: data['placeholderStyle'], disabled: data['disabled'], maxlength: data['maxlength'], focus: data['focus'], onInput: $getEventHandler(this, "onInput"), onConfirm: $getEventHandler(this, "onConfirm"), onFocus: $getEventHandler(this, "onFocus"), onBlur: $getEventHandler(this, "onBlur"), controlled: true
      }),
      data['clear'] ? _react2.default.createElement(
        View,
        {
          className: "am-verify-code-clear " + (data['clear'] && (0, _getLooseDataMember2.default)([data['value'], "length"]) > 0 && !data['disabled'] && data['_focus'] ? 'show' : 'hidden'), onTap: $getEventHandler(this, "onClear")
        },
        _react2.default.createElement(AmIcon, {
          size: "18", type: "close_", className: "am-verify-code-clear-icon", color: "#ccc", $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
        })
      ) : null,
      _react2.default.createElement(
        View,
        {
          className: "am-verify-code-action " + (data['_actionActive'] ? 'active' : 'inactive'), onTap: $getEventHandler(this, "onTapSend")
        },
        (0, _toString2.default)(data['_actionActive'] ? data['actedBefore'] ? '重发验证码' : '发送验证码' : data['_countDown'] + '\u79D2\u540E\u91CD\u8BD5')
      ),
      _ref
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "PwDG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-card {position:relative;display:-webkit-box;display:-webkit-flex;display:flex;border-radius:8px;border-radius:var(--am-card-border-radius,8px);margin:6px 10px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:transparent;background-size:100%;min-height:85px}.am-card-container {width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:relative}.am-card-container-expanded {position:absolute;top:0;left:0;height:100%}.am-card-outter-container {padding-top:0}.am-card-outter-container-expanded {position:relative;width:100%;z-index:0;height:0;padding-top:60%}.am-card-body {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;padding:19px 12px;padding:19px var(--am-card-padding,12px);border-radius:8px;border-radius:var(--am-card-border-radius,8px);min-height:85px;box-sizing:border-box;background-color:#929292;background-repeat:no-repeat;z-index:2;position:relative;background-size:100%}.am-card-bg-mask {position:absolute;top:0;left:0;border-radius:8px;border-radius:var(--am-card-border-radius,8px);width:100%;height:100%;background:#656464;background:-webkit-linear-gradient(top,rgba(0,0,0,.4) 0,rgba(252,252,252,0) 60px,rgba(244,244,244,0) 100%);background:linear-gradient(to bottom,rgba(0,0,0,.4) 0,rgba(252,252,252,0) 60px,rgba(244,244,244,0) 100%)}.am-card-body-expand {-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;background-color:transparent;height:100%}.am-card-content-wrapper {display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.am-card-content {-webkit-box-flex:1;-webkit-flex:1;flex:1;min-width:100px;z-index:1}.am-card-title {font-size:18px;font-size:var(--am-card-title-size,18px);line-height:25px;color:#fff;color:var(--am-card-title-color,#fff)}.am-card-subtitle {margin-top:2px}.am-card-subtitle-text {font-size:13px;line-height:1.5;color:#fff;color:var(--am-card-subtitle-colo,#fff);background:#0003;border-radius:3px;padding:1px 6px}.am-card-thumb {margin-right:12px;margin-right:var(--am-card-padding,12px);width:48px;height:48px;border-radius:50vh;border-radius:var(--am-card-thumb-border-radius,50vh);border-width:2px;border-width:var(--am-card-thumb-border-width,2px);border-color:#fff;border-color:var(--am-card-thumb-border-color,#fff);border-style:solid}.am-card-arrow {width:13px;height:13px}.am-card-footer {display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around;font-size:14px;line-height:20px;color:#333;color:var(--am-card-action-color,#333);background:#fff;background:var(--am-card-footer-color,#fff);box-sizing:border-box;padding:12px;padding:var(--am-card-padding,12px);border-radius:0 0 8px 8px;border-radius:0 0 var(--am-card-border-radius,8px) var(--am-card-border-radius,8px);border-top:8px solid #fff;border-top:var(--am-card-border-radius,8px) solid var(--am-card-footer-color,#fff);margin-top:-8px;margin-top:calc(var(--am-card-border-radius,8px) * -1);z-index:1}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "Q0T4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("4mcr");
/* harmony import */ var M_2_ = __webpack_require__("Fh/U");
/* harmony import */ var M_3_ = __webpack_require__("vxXc");
/* harmony import */ var M_4_ = __webpack_require__("o8kU");
/* harmony import */ var M_5_ = __webpack_require__("D5gq");
/* harmony import */ var M_6_ = __webpack_require__("gfmo");
/* harmony import */ var M_7_ = __webpack_require__("KCEN");
/* harmony import */ var M_8_ = __webpack_require__("7CIQ");
/* harmony import */ var M_9_ = __webpack_require__("eS2D");
/* harmony import */ var M_10_ = __webpack_require__("PBO1");
/* harmony import */ var M_11_ = __webpack_require__("JGVg");
/* harmony import */ var M_12_ = __webpack_require__("Vw/W");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/list/list.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  
  stylesheet.imports(M_5_["default"]);
  
  stylesheet.imports(M_6_["default"]);
  
  stylesheet.imports(M_7_["default"]);
  
  stylesheet.imports(M_8_["default"]);
  
  stylesheet.imports(M_9_["default"]);
  
  stylesheet.imports(M_10_["default"]);
  
  stylesheet.imports(M_11_["default"]);
  
  stylesheet.imports(M_12_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "Q1u+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("hZKm");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/page-result/local-network/index",
    
    
    
    usingComponents: {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"},
    render: function () {
      return __webpack_require__("xXVZ");
    },
    stylesheet: function () {
      return __webpack_require__("k+Ls");
    }
  });
  
  

/***/ }),

/***/ "Q5OZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Image = _afAppx.Image || (0, _EmptyComponentFactory2.default)("image");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "am-card"
    },
    _react2.default.createElement(
      View,
      {
        style: "width: 100%;", className: "am-card-outter-container " + (data['expand'] ? 'am-card-outter-container-expanded' : '')
      },
      _react2.default.createElement(
        View,
        {
          className: "am-card-container " + (data['expand'] ? 'am-card-container-expanded' : '')
        },
        _react2.default.createElement(
          View,
          {
            className: "am-card-body " + (data['expand'] ? 'am-card-body-expand' : ''), style: data['bgImg'] ? 'background-image: url(\'' + data['bgImg'] + '\');' : '', onTap: $getEventHandler(this, "onCardClick")
          },
          _react2.default.createElement(
            View,
            {
              className: "am-card-content-wrapper"
            },
            _react2.default.createElement(Image, {
              src: data['thumb'], className: "am-card-thumb", mode: "scaleToFill"
            }),
            _react2.default.createElement(
              View,
              {
                className: "am-card-content"
              },
              _react2.default.createElement(
                View,
                {
                  className: "am-card-title"
                },
                (0, _toString2.default)(data['title'])
              ),
              data['subTitle'] ? _react2.default.createElement(
                View,
                {
                  className: "am-card-subtitle"
                },
                _react2.default.createElement(
                  Text,
                  {
                    className: "am-card-subtitle-text"
                  },
                  (0, _toString2.default)(data['subTitle'])
                )
              ) : null
            )
          )
        ),
        data['action'] && !data['expand'] ? _react2.default.createElement(
          View,
          {
            className: "am-card-footer"
          },
          _react2.default.createElement(
            Text,
            {
              onTap: $getEventHandler(this, "onActionClick")
            },
            (0, _toString2.default)(data['action'])
          ),
          _react2.default.createElement(
            Text,
            {
              onTap: $getEventHandler(this, "onExtraActionClick")
            },
            (0, _toString2.default)(data['extraAction'])
          )
        ) : null
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "Q7eS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var Notice_ = $getComponentClass("/node_modules/mini-ali-ui/es/notice/index");
var Notice = Notice_ || (0, _EmptyComponentFactory2.default)("notice");

var RadioGroup = _afAppx.RadioGroup || (0, _EmptyComponentFactory2.default)("radio-group");

var Label = _afAppx.Label || (0, _EmptyComponentFactory2.default)("label");

var Radio = _afAppx.Radio || (0, _EmptyComponentFactory2.default)("radio");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");

var Input = _afAppx.Input || (0, _EmptyComponentFactory2.default)("input");

var CheckboxGroup = _afAppx.CheckboxGroup || (0, _EmptyComponentFactory2.default)("checkbox-group");

var Checkbox = _afAppx.Checkbox || (0, _EmptyComponentFactory2.default)("checkbox");

var Image = _afAppx.Image || (0, _EmptyComponentFactory2.default)("image");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)([_react2.default.createElement(
    View,
    {
      className: "demo-item"
    },
    _react2.default.createElement(
      Notice,
      {
        marqueeProps: data['marqueeProps'], enableMarquee: true, show: data['closeShow'], type: data['noticeType'], mode: data['noticeMode'], action: data['actionText'], onClick: $getComponentEventHandler(this, "actionClick"), actionLeft: data['actionLeftText'], onClickLeft: $getComponentEventHandler(this, "linkActionClick"), $isCustomComponent: this.$isCustomComponent, __tag: 'notice'
      },
      (0, _toString2.default)("无限循环滚动的通告栏展示情况。文字不够继续添加文字凑数。")
    )
  ), _react2.default.createElement(
    View,
    {
      className: "demo-item"
    },
    _react2.default.createElement(
      Notice,
      {
        enableMarquee: true, show: data['closeShow'], showIcon: false, type: data['noticeType'], mode: data['noticeMode'], action: data['actionText'], onClick: $getComponentEventHandler(this, "actionClick"), actionLeft: data['actionLeftText'], onClickLeft: $getComponentEventHandler(this, "linkActionClick"), $isCustomComponent: this.$isCustomComponent, __tag: 'notice'
      },
      (0, _toString2.default)("滚动一次的通告栏展示情况。文字不够继续添加文字凑数。无 icon")
    )
  ), _react2.default.createElement(
    View,
    {
      className: "demo-item"
    },
    _react2.default.createElement(
      Notice,
      {
        show: data['closeShow'], type: data['noticeType'], mode: data['noticeMode'], action: data['actionText'], onClick: $getComponentEventHandler(this, "actionClick"), actionLeft: data['actionLeftText'], onClickLeft: $getComponentEventHandler(this, "linkActionClick"), $isCustomComponent: this.$isCustomComponent, __tag: 'notice'
      },
      (0, _toString2.default)("不滚动的通告栏展示情况。")
    )
  ), _react2.default.createElement(
    View,
    {
      className: "demo-item"
    },
    _react2.default.createElement(
      Notice,
      {
        show: data['closeShow'], type: data['noticeType'], mode: data['noticeMode'], action: data['actionText'], onClick: $getComponentEventHandler(this, "actionClick"), actionLeft: data['actionLeftText'], onClickLeft: $getComponentEventHandler(this, "linkActionClick"), capsule: true, capsuleItem: data['capsuleItem'], $isCustomComponent: this.$isCustomComponent, __tag: 'notice'
      },
      (0, _toString2.default)((0, _getLooseDataMember2.default)([data['capsuleItem'], "length"]) > 0 ? (0, _getLooseDataMember2.default)([data['capsuleItem'], "length"]) + ' 个优惠信息推荐' : '暂无优惠信息推荐')
    )
  ), _react2.default.createElement(
    View,
    {
      className: "demo-title"
    },
    (0, _toString2.default)("type:")
  ), _react2.default.createElement(
    RadioGroup,
    {
      className: "radio-group", onChange: $getEventHandler(this, "typeChange"), name: "type"
    },
    (0, _iterate2.default)(data['type'], function (item, index) {
      return _react2.default.createElement(
        Label,
        {
          className: "radio", key: "label-" + index
        },
        _react2.default.createElement(Radio, {
          value: (0, _getLooseDataMember2.default)([item, "name"]), checked: (0, _getLooseDataMember2.default)([item, "checked"])
        }),
        _react2.default.createElement(
          Text,
          {
            className: "radio-text"
          },
          (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "value"]))
        )
      );
    })
  ), _react2.default.createElement(
    View,
    {
      className: "demo-title"
    },
    (0, _toString2.default)("mode:")
  ), _react2.default.createElement(
    RadioGroup,
    {
      className: "radio-group", onChange: $getEventHandler(this, "modeChange"), name: "mode"
    },
    (0, _iterate2.default)(data['mode'], function (item, index) {
      return _react2.default.createElement(
        Label,
        {
          className: "radio", key: "label-" + index
        },
        _react2.default.createElement(Radio, {
          value: (0, _getLooseDataMember2.default)([item, "name"]), checked: (0, _getLooseDataMember2.default)([item, "checked"])
        }),
        _react2.default.createElement(
          Text,
          {
            className: "radio-text"
          },
          (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "value"]))
        )
      );
    })
  ), _react2.default.createElement(Input, {
    placeholder: "右边的文字", value: data['actionText'] ? data['actionText'] : '', onInput: $getEventHandler(this, "getRightText")
  }), data['actionText'] !== '' || data['noticeMode'] !== '' ? _react2.default.createElement(Input, {
    placeholder: "左边的文字", onInput: $getEventHandler(this, "getLeftText")
  }) : null, _react2.default.createElement(
    View,
    {
      className: "demo-title"
    },
    (0, _toString2.default)("胶囊通告栏 item:")
  ), _react2.default.createElement(
    CheckboxGroup,
    {
      className: "radio-group", onChange: $getEventHandler(this, "capsuleItemChange"), name: "capsule"
    },
    (0, _iterate2.default)(data['capsuleItemList'], function (item, index) {
      return _react2.default.createElement(
        Label,
        {
          className: "checkbox", key: "label-" + index
        },
        _react2.default.createElement(Checkbox, {
          value: (0, _getLooseDataMember2.default)([item, "name"]), checked: (0, _getLooseDataMember2.default)([item, "checked"]), style: "vertical-align: middle;"
        }),
        _react2.default.createElement(Image, {
          src: (0, _getLooseDataMember2.default)([item, "value"]), className: "itemSize"
        })
      );
    })
  )]);
};
module.exports = exports['default'];

/***/ }),

/***/ "Q8XB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/share/share.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "TCWI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".extra-info {border-top:1px solid #ddd;margin-left:0.3rem;padding:0.2rem 0;overflow:auto}.search-outer {box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;height:40px;overflow:hidden;padding:8px;border-bottom:1px solid #ddd;background-color:#efeff4}.search-outer * {box-sizing:border-box}.search-input {-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;display:block;color:#000;height:24px;font-size:15px;background-color:#fff;border-color:transparent}.search-input:focus + .search-cancel {margin-right:0;opacity:1}.search-cancel {margin-right:-40px;display:inline-block;opacity:0;padding-left:8px;height:24px;line-height:24px;font-size:16px;color:#108ee9;text-align:right;-webkit-transition:margin-right .3s,opacity .3s;transition:margin-right .3s,opacity .3s;-webkit-transition-delay:.1s;transition-delay:.1s}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "TD6U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/checkbox/checkbox",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("88xV");
    },
    stylesheet: function () {
      return __webpack_require__("nyvl");
    }
  });
  
  

/***/ }),

/***/ "TIwy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("uUrv");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr-business-card/ocr-business-card.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "TK+y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var Title_ = $getComponentClass("/node_modules/mini-ali-ui/es/title/index");
var Title = Title_ || (0, _EmptyComponentFactory2.default)("title");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "container"
    },
    _react2.default.createElement(
      Title,
      {
        $isCustomComponent: this.$isCustomComponent, __tag: 'title'
      },
      (0, _toString2.default)("外部标题")
    ),
    _react2.default.createElement(
      Title,
      {
        hasLine: "true", $isCustomComponent: this.$isCustomComponent, __tag: 'title'
      },
      (0, _toString2.default)("内部标题无 icon")
    ),
    _react2.default.createElement(
      Title,
      {
        iconURL: "https://img.alicdn.com/tfs/TB1UNX2bSFRMKJjy0FhXXX.xpXa-112-46.png", $isCustomComponent: this.$isCustomComponent, __tag: 'title'
      },
      (0, _toString2.default)("无下划线")
    ),
    _react2.default.createElement(
      Title,
      {
        hasLine: "true", iconURL: "https://img.alicdn.com/tfs/TB1UNX2bSFRMKJjy0FhXXX.xpXa-112-46.png", $isCustomComponent: this.$isCustomComponent, __tag: 'title'
      },
      (0, _toString2.default)("内部标题无操作")
    ),
    _react2.default.createElement(
      Title,
      {
        hasLine: "true", iconURL: "https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*wiFYTo5I0m8AAAAAAAAAAABjAQAAAQ/original", type: "arrow", onActionTap: $getComponentEventHandler(this, "titleGo"), $isCustomComponent: this.$isCustomComponent, __tag: 'title'
      },
      (0, _toString2.default)("内部标题可跳转")
    ),
    _react2.default.createElement(
      Title,
      {
        hasLine: "true", type: "more", onActionTap: $getComponentEventHandler(this, "titleMore"), $isCustomComponent: this.$isCustomComponent, __tag: 'title'
      },
      (0, _toString2.default)("内部标题无 icon 展开气泡菜单")
    ),
    _react2.default.createElement(
      Title,
      {
        hasLine: "true", iconURL: "https://t.alipayobjects.com/images/T1HHFgXXVeXXXXXXXX.png", type: "close", onActionTap: $getComponentEventHandler(this, "titleClose"), $isCustomComponent: this.$isCustomComponent, __tag: 'title'
      },
      (0, _toString2.default)("内部标题可关闭")
    ),
    _react2.default.createElement(
      Title,
      {
        hasLine: "true", $isCustomComponent: this.$isCustomComponent, __tag: 'title'
      },
      (0, _toString2.default)("标题过长后的处理，标题单行展示。标题过长后的处理，标题单行展示。")
    ),
    _react2.default.createElement(
      Title,
      {
        hasLine: "true", className: "changeColor", iconURL: "https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*wiFYTo5I0m8AAAAAAAAAAABjAQAAAQ/original", type: "arrow", onActionTap: $getComponentEventHandler(this, "titleGo"), $isCustomComponent: this.$isCustomComponent, __tag: 'title'
      },
      (0, _toString2.default)("使用class修改样式")
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "TVln":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("nn2v");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/scan-code/scan-code.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "TYq4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0MVh");
/* harmony import */ var M_1_ = __webpack_require__("AnxE");
/* harmony import */ var M_2_ = __webpack_require__("5AAy");
/* harmony import */ var M_3_ = __webpack_require__("ju+b");
/* harmony import */ var M_3__default = /*#__PURE__*/__webpack_require__.n(M_3_);

  


    
  
  Object(M_3_["Page"])({
    pagePath: "page/component/input-item/input-item",
    
    
    
    usingComponents: {"list":"/node_modules/mini-ali-ui/es/list/index","input-item":"/node_modules/mini-ali-ui/es/input-item/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"},
    render: function () {
      return __webpack_require__("V0wA");
    },
    stylesheet: function () {
      return __webpack_require__("3ufD");
    }
  });
  
  

/***/ }),

/***/ "TaxA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("sACq");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/webview/webview.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "Tc2y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".icon-list {display:-webkit-flex;display:-webkit-box;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.item {display:-webkit-flex;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-flex-direction:column;margin-bottom:10px;margin-right:10px;-webkit-box-align:center;align-items:center;-webkit-align-items:center}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "Tgco":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("zicR");
/* harmony import */ var M_1_ = __webpack_require__("0MVh");
/* harmony import */ var M_2_ = __webpack_require__("vCWb");
/* harmony import */ var M_3_ = __webpack_require__("ju+b");
/* harmony import */ var M_3__default = /*#__PURE__*/__webpack_require__.n(M_3_);

  


    
  
  Object(M_3_["Page"])({
    pagePath: "page/tabBar/API/index",
    
    
    
    usingComponents: {"block-list":"/page/common/components/block-list/block-list","list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index"},
    tabIndex: 11,
    render: function () {
      return __webpack_require__("DUPw");
    },
    stylesheet: function () {
      return __webpack_require__("f9em");
    }
  });
  
  

/***/ }),

/***/ "TpHF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/ocr-vin/ocr-vin",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("UtFq");
    },
    stylesheet: function () {
      return __webpack_require__("85FF");
    }
  });
  
  

/***/ }),

/***/ "Tv3t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("K0hz");
/* harmony import */ var M_1_ = __webpack_require__("0MVh");
/* harmony import */ var M_2_ = __webpack_require__("vCWb");
/* harmony import */ var M_3_ = __webpack_require__("yclZ");
/* harmony import */ var M_4_ = __webpack_require__("ju+b");
/* harmony import */ var M_4__default = /*#__PURE__*/__webpack_require__.n(M_4_);

  



    
  
  Object(M_4_["Page"])({
    pagePath: "page/component/am-checkbox/am-checkbox",
    
    
    
    usingComponents: {"am-checkbox":"/node_modules/mini-ali-ui/es/am-checkbox/index","list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index","button":"/node_modules/mini-ali-ui/es/button/index"},
    render: function () {
      return __webpack_require__("CNIF");
    },
    stylesheet: function () {
      return __webpack_require__("LmRl");
    }
  });
  
  

/***/ }),

/***/ "U+sf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("AAPo");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/get-user-info/get-user-info.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "U1vu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("2GJZ");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/pagination/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "UAVp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("o8kU");
/* harmony import */ var M_2_ = __webpack_require__("PBO1");
/* harmony import */ var M_3_ = __webpack_require__("4mcr");
/* harmony import */ var M_4_ = __webpack_require__("Fh/U");
/* harmony import */ var M_5_ = __webpack_require__("vxXc");
/* harmony import */ var M_6_ = __webpack_require__("D5gq");
/* harmony import */ var M_7_ = __webpack_require__("kDWH");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/radio-ali-ui/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  
  stylesheet.imports(M_5_["default"]);
  
  stylesheet.imports(M_6_["default"]);
  
  stylesheet.imports(M_7_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "UJRF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-terms {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:4px;padding:var(--am-terms-padding,4px);width:100%;box-sizing:border-box}.am-terms .am-terms-header {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#333;color:var(--am-terms-content-color,#333);margin-bottom:20px;margin-bottom:var(--am-terms-content-margin,20px)}.am-terms .am-terms-header .am-checkbox {margin-right:8px;margin-right:var(--am-terms-checkbox-margin,8px)}.am-terms .am-terms-header .text {font-size:15px;font-size:var(--am-terms-content-font-size,15px);line-height:22px;line-height:var(--am-terms-content-line-height,22px);-webkit-box-flex:1;-webkit-flex:1;flex:1}.am-terms .am-terms-header .text .link {color:#1677ff;color:var(--am-terms-link-color,#1677ff);display:inline}.am-terms .am-terms-body {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.am-terms .am-terms-body .am-button {margin-bottom:12px;margin-bottom:var(--am-terms-button-margin,12px)}.am-terms .am-terms-footer {color:#333;color:var(--am-terms-desc-color,#333);font-size:11px;font-size:var(--am-terms-desc-font-size,11px);line-height:1.5;line-height:var(--am-terms-desc-line-height,1.5);margin-top:4px;margin-top:var(--am-terms-desc-margin,4px)}.am-terms .am-terms-footer .text .link {color:#1677ff;color:var(--am-terms-link-color,#1677ff);display:inline}.am-terms-fixed {position:fixed;z-index:2;bottom:0;left:0;right:0;background-color:#fff;background-color:var(--am-terms-background-color,#fff);padding:8px;padding:var(--am-terms-fixed-padding,8px);width:100%;box-sizing:border-box}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "USjB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/set-navigation-bar/set-navigation-bar",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("n40X");
    },
    stylesheet: function () {
      return __webpack_require__("oDgw");
    }
  });
  
  

/***/ }),

/***/ "UXvp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/storage/storage.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "UbM5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/button/button",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("4oGa");
    },
    stylesheet: function () {
      return __webpack_require__("sY5+");
    }
  });
  
  

/***/ }),

/***/ "UdYZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "UehS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".red {background-color:red;border-color:red;color:#fff}.a-button + .a-button {margin-top:0.32rem}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "Uf4/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("TIwy");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr-business-card/ocr-business-card.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "UhhF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("5hy4");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/get-auth-code/get-auth-code.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "UiF6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Switch = _afAppx.Switch || (0, _EmptyComponentFactory2.default)("switch");


var $templates = {};

var _ref = _react2.default.createElement(
  View,
  {
    className: "switch-item"
  },
  _react2.default.createElement(Switch, {
    color: "red", checked: true
  })
);

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("开关")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo switch-list"
        },
        _react2.default.createElement(
          View,
          {
            className: "switch-item"
          },
          _react2.default.createElement(Switch, {
            checked: true, onChange: $getEventHandler(this, "switch1Change"), 'aria-label': data['switch1'] ? 'switch opened' : 'switch closed'
          })
        ),
        _react2.default.createElement(
          View,
          {
            className: "switch-item"
          },
          _react2.default.createElement(Switch, {
            onChange: $getEventHandler(this, "switch2Change")
          })
        ),
        _ref
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "UtFq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("XkMr");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

var _ocrTemplate = __webpack_require__("4gaC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $templates = {};
$templates = (0, _extends3.default)({}, _ocrTemplate.$ownTemplates);
function render(data) {
  return (0, _createRoot2.default)((0, _useTemplate2.default)($templates["ocr-template"], {
    textArry: data['textArry'],
    imgUrl: data['imgUrl']
  }, undefined, this));
};
module.exports = exports["default"];

/***/ }),

/***/ "UuNp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("YDVR");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr-vehicle/ocr-vehicle.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "UvO/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var TipsDialog_ = $getComponentClass("/node_modules/mini-ali-ui/es/tips/tips-dialog/index");
var TipsDialog = TipsDialog_ || (0, _EmptyComponentFactory2.default)("tips-dialog");
var AmButton_ = $getComponentClass("/node_modules/mini-ali-ui/es/button/index");
var AmButton = AmButton_ || (0, _EmptyComponentFactory2.default)("am-button");

var Picker = _afAppx.Picker || (0, _EmptyComponentFactory2.default)("picker");
var AmIcon_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-icon/index");
var AmIcon = AmIcon_ || (0, _EmptyComponentFactory2.default)("am-icon");
var ListItem_ = $getComponentClass("/node_modules/mini-ali-ui/es/list/list-item/index");
var ListItem = ListItem_ || (0, _EmptyComponentFactory2.default)("list-item");

var Switch = _afAppx.Switch || (0, _EmptyComponentFactory2.default)("switch");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _react2.default.createElement(
      TipsDialog,
      {
        iconUrl: data['useIcon'] ? 'https://gw.alipayobjects.com/zos/rmsportal/AzRAgQXlnNbEwQRvEwiu.png' : '', iconSize: "36", type: "rectangle", className: "rectangle", onCloseTap: $getComponentEventHandler(this, "onCloseTap"), show: data['showRectangle'], arrowPosition: (0, _getLooseDataMember2.default)([data['arrowPositions'], data['arrowPosIndex']]), $isCustomComponent: this.$isCustomComponent, __tag: 'tips-dialog'
      },
      _react2.default.createElement(
        View,
        {
          className: "content", slot: "content"
        },
        (0, _toString2.default)("箭头有8个方向。字数字数字数字数字两行")
      ),
      data['useButton'] ? _react2.default.createElement(
        AmButton,
        {
          slot: "operation", shape: "capsule", capsuleSize: "small", onTap: $getComponentEventHandler(this, "onRectangleTap"), $isCustomComponent: this.$isCustomComponent, __tag: 'am-button'
        },
        (0, _toString2.default)("立即添加")
      ) : null
    ),
    _react2.default.createElement(
      View,
      {
        style: "padding: 20px 10px;"
      },
      _react2.default.createElement(
        Picker,
        {
          onChange: $getEventHandler(this, "setInfo"), value: data['arrowPosIndex'], range: data['arrowPositions'], 'data-name': "arrowPosIndex"
        },
        _react2.default.createElement(
          View,
          {
            className: "row"
          },
          _react2.default.createElement(
            View,
            {
              className: "row-title"
            },
            (0, _toString2.default)("箭头位置")
          ),
          _react2.default.createElement(
            View,
            {
              className: "row-extra"
            },
            [(0, _toString2.default)("当前选择："), (0, _toString2.default)((0, _getLooseDataMember2.default)([data['arrowPositions'], data['arrowPosIndex']]))]
          ),
          _react2.default.createElement(AmIcon, {
            type: "right", size: "13", $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
          })
        )
      ),
      _react2.default.createElement(
        ListItem,
        {
          $isCustomComponent: this.$isCustomComponent, __tag: 'list-item'
        },
        (0, _toString2.default)("左侧图标"),
        _react2.default.createElement(Switch, {
          slot: "extra", checked: data['useIcon'], onChange: $getEventHandler(this, "setInfo"), 'data-name': "useIcon"
        })
      ),
      _react2.default.createElement(
        ListItem,
        {
          $isCustomComponent: this.$isCustomComponent, __tag: 'list-item'
        },
        (0, _toString2.default)("右侧按钮"),
        _react2.default.createElement(Switch, {
          slot: "extra", checked: data['useButton'], onChange: $getEventHandler(this, "setInfo"), 'data-name': "useButton"
        })
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "UxO/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/ocr-business-license/ocr-business-license",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("HapC");
    },
    stylesheet: function () {
      return __webpack_require__("sFkd");
    }
  });
  
  

/***/ }),

/***/ "V0qb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("Ys4/");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/local-network/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "V0wA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var List_ = $getComponentClass("/node_modules/mini-ali-ui/es/list/index");
var List = List_ || (0, _EmptyComponentFactory2.default)("list");
var InputItem_ = $getComponentClass("/node_modules/mini-ali-ui/es/input-item/index");
var InputItem = InputItem_ || (0, _EmptyComponentFactory2.default)("input-item");
var AmIcon_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-icon/index");
var AmIcon = AmIcon_ || (0, _EmptyComponentFactory2.default)("am-icon");


var $templates = {};

var _ref = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _ref,
    _react2.default.createElement(
      List,
      {
        $isCustomComponent: this.$isCustomComponent, __tag: 'list'
      },
      _react2.default.createElement(
        InputItem,
        {
          'data-field': "cardNo", clear: false, value: data['cardNo'], className: "dadada", placeholder: "银行卡号", onInput: $getComponentEventHandler(this, "onItemInput"), onBlur: $getComponentEventHandler(this, "onItemBlur"), onConfirm: $getComponentEventHandler(this, "onItemConfirm"), controlled: true, onClear: $getComponentEventHandler(this, "onClear"), $isCustomComponent: this.$isCustomComponent, __tag: 'input-item'
        },
        (0, _toString2.default)("卡号"),
        _react2.default.createElement(View, {
          slot: "extra", className: "extra", onTap: $getEventHandler(this, "onExtraTap")
        })
      ),
      _react2.default.createElement(
        InputItem,
        {
          'data-field': "name", placeholder: "姓名", type: "text", value: data['name'], clear: true, onInput: $getComponentEventHandler(this, "onItemInput"), onClear: $getComponentEventHandler(this, "onClear"), $isCustomComponent: this.$isCustomComponent, __tag: 'input-item'
        },
        (0, _toString2.default)("姓名")
      ),
      _react2.default.createElement(
        InputItem,
        {
          'data-field': "password", password: true, placeholder: "密码", $isCustomComponent: this.$isCustomComponent, __tag: 'input-item'
        },
        (0, _toString2.default)("密码")
      ),
      _react2.default.createElement(
        InputItem,
        {
          'data-field': "layerShow1", placeholder: "layer 为 vertical 的排列", type: "text", layer: "vertical", value: data['layerShow1'], clear: true, onInput: $getComponentEventHandler(this, "onItemInput"), onClear: $getComponentEventHandler(this, "onClear"), $isCustomComponent: this.$isCustomComponent, __tag: 'input-item'
        },
        (0, _toString2.default)("竖向表单"),
        _react2.default.createElement(
          View,
          {
            onTap: $getEventHandler(this, "onExtraTap"), slot: "extra"
          },
          _react2.default.createElement(AmIcon, {
            type: "phone-book_", size: "24", color: "#1677ef", $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
          })
        )
      ),
      _react2.default.createElement(
        InputItem,
        {
          'data-field': "layerShow2", placeholder: "layer 为 vertical 的排列", type: "text", layer: "vertical", value: data['layerShow2'], clear: true, onInput: $getComponentEventHandler(this, "onItemInput"), onClear: $getComponentEventHandler(this, "onClear"), $isCustomComponent: this.$isCustomComponent, __tag: 'input-item'
        },
        (0, _toString2.default)("竖向表单")
      ),
      _react2.default.createElement(
        InputItem,
        {
          'data-field': "layerShow3", placeholder: "layer 为 vertical 的排列", type: "text", layer: "vertical", disabled: true, value: data['layerShow3'], clear: true, onInput: $getComponentEventHandler(this, "onItemInput"), onClear: $getComponentEventHandler(this, "onClear"), $isCustomComponent: this.$isCustomComponent, __tag: 'input-item'
        },
        (0, _toString2.default)("竖向表单"),
        _react2.default.createElement(
          View,
          {
            onTap: $getEventHandler(this, "onExtraTap"), slot: "extra"
          },
          _react2.default.createElement(AmIcon, {
            type: "phone-book_", size: "24", color: "#1677ef", $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
          })
        )
      ),
      _react2.default.createElement(InputItem, {
        'data-field': "remark", placeholder: "备注", $isCustomComponent: this.$isCustomComponent, __tag: 'input-item'
      })
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "V21L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("XDV1");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/input-item/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "VI1H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("nhWK");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/flex/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "VMsR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/navigator/redirect",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("D7Ns");
    },
    stylesheet: function () {
      return __webpack_require__("1yTs");
    }
  });
  
  

/***/ }),

/***/ "VTow":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("8487");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/picker-view/picker-view.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "VdRN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("OvrG");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/navigator/reLaunch.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "Vdi9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var TipsPlain_ = $getComponentClass("/node_modules/mini-ali-ui/es/tips/tips-plain/index");
var TipsPlain = TipsPlain_ || (0, _EmptyComponentFactory2.default)("tips-plain");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    TipsPlain,
    {
      onClose: $getComponentEventHandler(this, "onClose"), time: data['time'], $isCustomComponent: this.$isCustomComponent, __tag: 'tips-plain'
    },
    (0, _toString2.default)(data['content'])
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "VexH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("2ECd");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/filter/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "Vf4n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-flexbox-item {box-sizing:border-box;-webkit-box-flex:1;-webkit-flex:1;flex:1;min-width:10px;margin-left:8px}.am-flexbox-item:first-child {margin-left:0}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "VpPl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      Button,
      {
        type: "primary", onTap: $getEventHandler(this, "uploadFile")
      },
      (0, _toString2.default)("上传图片")
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "VqBC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("pwXV");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/report-analytics/report-analytics.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "VuR/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0MVh");
/* harmony import */ var M_1_ = __webpack_require__("vCWb");
/* harmony import */ var M_2_ = __webpack_require__("lCTV");
/* harmony import */ var M_3_ = __webpack_require__("F2xs");
/* harmony import */ var M_4_ = __webpack_require__("+Zxo");
/* harmony import */ var M_5_ = __webpack_require__("5AAy");
/* harmony import */ var M_6_ = __webpack_require__("0ICq");
/* harmony import */ var M_7_ = __webpack_require__("Hes+");
/* harmony import */ var M_8_ = __webpack_require__("yclZ");
/* harmony import */ var M_9_ = __webpack_require__("ju+b");
/* harmony import */ var M_9__default = /*#__PURE__*/__webpack_require__.n(M_9_);

  








    
  
  Object(M_9_["Page"])({
    pagePath: "page/component/list/list",
    
    
    
    usingComponents: {"list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index","alphabet":"/node_modules/mini-ali-ui/es/list/alphabet/index","list-secondary":"/node_modules/mini-ali-ui/es/list/list-secondary/index","tag":"/node_modules/mini-ali-ui/es/tag/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index","am-switch":"/node_modules/mini-ali-ui/es/am-switch/index","am-radio":"/node_modules/mini-ali-ui/es/am-radio/index","button":"/node_modules/mini-ali-ui/es/button/index"},
    render: function () {
      return __webpack_require__("NN8W");
    },
    stylesheet: function () {
      return __webpack_require__("BiJq");
    }
  });
  
  

/***/ }),

/***/ "Vw/W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("mPqH");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/list/list.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "VwBf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".a-navigator {background-color:lightcoral;color:#fff;margin-bottom:0.1rem;padding:0.2rem;text-align:center}.navigator-hover {background-color:lightskyblue;color:#fff}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "W+Cn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("nqXb");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/error/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "W+z0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("G3IE");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/tabBar/API/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "W/ny":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("显示 loading 后，会覆盖整个h5页面，页面元素不能交互。")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-btns"
        },
        _react2.default.createElement(
          View,
          {
            onTap: $getEventHandler(this, "showLoading")
          },
          (0, _toString2.default)("显示加载提示")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "W15X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-popover {position:relative}.am-popover-mask {position:fixed;top:0;right:0;left:0;bottom:0;background-color:rgba(0,0,0,.75);background-color:var(--am-popover-mask-color,rgba(0,0,0,.75));height:100%;z-index:99}.am-popover-content {position:absolute;z-index:100;border-radius:4px;border-radius:var(--am-popover-border-radius,4px);font-size:15px;font-size:var(--am-popover-font-size,15px);color:#333;color:var(--am-popover-font-color,#333)}.border-true {border:1px solid #ddd}.am-popover-inner {position:relative;background-color:#fff;background-color:var(--am-popover-bg-color,#fff);border-radius:4px;border-radius:var(--am-popover-border-radius,4px);overflow:hidden}.am-popover-placement-top {top:-7px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.am-popover-placement-topLeft {top:-7px;left:0;-webkit-transform:translate(0,-100%);transform:translate(0,-100%)}.am-popover-placement-topRight {top:-7px;right:0;-webkit-transform:translate(0,-100%);transform:translate(0,-100%)}.am-popover-placement-right {top:50%;right:-7px;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}.am-popover-placement-rightTop {top:0;right:-7px;-webkit-transform:translateX(100%);transform:translateX(100%)}.am-popover-placement-rightBottom {bottom:0;right:-7px;-webkit-transform:translateX(100%);transform:translateX(100%)}.am-popover-placement-bottom {bottom:-7px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.am-popover-placement-bottomRight {bottom:-7px;right:0;-webkit-transform:translateY(100%);transform:translateY(100%)}.am-popover-placement-bottomLeft {bottom:-7px;left:0;-webkit-transform:translateY(100%);transform:translateY(100%)}.am-popover-placement-left {top:50%;left:-7px;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.am-popover-placement-leftTop {top:0;left:-7px;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.am-popover-placement-leftBottom {bottom:0;left:-7px;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.am-popover-arrow {position:absolute;width:7px;height:7px;background-color:#fff;background-color:var(--am-popover-arrow-color,#fff);z-index:0}.am-popover-placement-top .am-popover-arrow,.am-popover-placement-topLeft .am-popover-arrow,.am-popover-placement-topRight .am-popover-arrow {-webkit-transform:translateY(50%) rotate(45deg);transform:translateY(50%) rotate(45deg);bottom:0}.am-popover-placement-top .am-popover-arrow {-webkit-transform:translate(-50%,50%) rotate(45deg);transform:translate(-50%,50%) rotate(45deg);left:50%}.am-popover-placement-topRight .am-popover-arrow {right:16px}.am-popover-placement-topLeft .am-popover-arrow {left:16px}.am-popover-placement-right .am-popover-arrow,.am-popover-placement-rightBottom .am-popover-arrow,.am-popover-placement-rightTop .am-popover-arrow {-webkit-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg);left:0}.am-popover-placement-right .am-popover-arrow {-webkit-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg);top:50%}.am-popover-placement-rightBottom .am-popover-arrow {bottom:16px}.am-popover-placement-rightTop .am-popover-arrow {top:16px}.am-popover-placement-bottom .am-popover-arrow,.am-popover-placement-bottomLeft .am-popover-arrow,.am-popover-placement-bottomRight .am-popover-arrow {-webkit-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg);top:0}.am-popover-placement-bottom .am-popover-arrow {-webkit-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg);left:50%}.am-popover-placement-bottomLeft .am-popover-arrow {left:16px}.am-popover-placement-bottomRight .am-popover-arrow {right:16px}.am-popover-placement-left .am-popover-arrow,.am-popover-placement-leftBottom .am-popover-arrow,.am-popover-placement-leftTop .am-popover-arrow {-webkit-transform:translateX(50%) rotate(45deg);transform:translateX(50%) rotate(45deg);right:0}.am-popover-placement-left .am-popover-arrow {-webkit-transform:translate(50%,-50%) rotate(45deg);transform:translate(50%,-50%) rotate(45deg);top:50%}.am-popover-placement-leftTop .am-popover-arrow {top:16px}.am-popover-placement-leftBottom .am-popover-arrow {bottom:16px}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "W2EE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("YOir");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/local-error/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "W4zL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Lsdr");
/* harmony import */ var M_1_ = __webpack_require__("/Vp4");
/* harmony import */ var M_2_ = __webpack_require__("ju+b");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

    
  
  Object(M_2_["Page"])({
    pagePath: "page/component/container/index",
    
    
    
    usingComponents: {"container":"/node_modules/mini-ali-ui/es/container/index","title":"/node_modules/mini-ali-ui/es/title/index"},
    render: function () {
      return __webpack_require__("3f+9");
    },
    stylesheet: function () {
      return __webpack_require__("cjel");
    }
  });
  
  

/***/ }),

/***/ "W5PT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Slider = _afAppx.Slider || (0, _EmptyComponentFactory2.default)("slider");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("滑块")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("设置step")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(Slider, {
          value: "5", onChange: $getEventHandler(this, "slider2change"), step: "5"
        })
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("设置最小/最大值范围")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(Slider, {
          value: "33", onChange: $getEventHandler(this, "slider4change"), min: "25", max: "50", showValue: true
        })
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("自定义样式")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(Slider, {
          value: "33", onChange: $getEventHandler(this, "slider4change"), min: "25", max: "50", showValue: true, backgroundColor: "#FFAA00", activeColor: "#00aaee", trackSize: "2", handleSize: "6", handleColor: "blue"
        })
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "W7FK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("oCMV");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/get-location/get-location.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "W8Nt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0MVh");
/* harmony import */ var M_1_ = __webpack_require__("vCWb");
/* harmony import */ var M_2_ = __webpack_require__("NSEQ");
/* harmony import */ var M_3_ = __webpack_require__("ju+b");
/* harmony import */ var M_3__default = /*#__PURE__*/__webpack_require__.n(M_3_);

  


    
  
  Object(M_3_["Page"])({
    pagePath: "page/component/badge/badge",
    
    
    
    usingComponents: {"list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index","badge":"/node_modules/mini-ali-ui/es/badge/index"},
    render: function () {
      return __webpack_require__("a2Ge");
    },
    stylesheet: function () {
      return __webpack_require__("037v");
    }
  });
  
  

/***/ }),

/***/ "WA4c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-long-password-item {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;background:var(--am-long-password-item-background,#fff);padding-left:12px;padding-left:var(--am-long-password-item-padding-left,12px)}.am-long-password-item .a-input-content {padding-left:2px}.am-long-password-line {position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:12px;padding-right:var(--am-long-password-line-padding-right,12px);min-height:48px;min-height:var(--am-long-password-line-min-height,48px);overflow:hidden;font-size:17px;font-size:var(--am-long-password-font-size,17px)}.am-long-password-content {-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;color:#333;color:var(--am-long-password-content-color,#333);text-align:left;padding:0}.am-long-password-content .a-input-wrap {-webkit-box-flex:1;-webkit-flex:1;flex:1}.am-long-password-clear {display:-webkit-box;display:-webkit-flex;display:flex;height:22px;height:var(--am-long-password-icon-size,22px);width:22px;width:var(--am-long-password-icon-size,22px);-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:12px;margin-left:var(--am-long-password-eye-spacing,12px)}.am-long-password-clear-icon {line-height:1;line-height:var(--am-long-password-icon-line-height,1)}.am-long-password-clear.show {visibility:visible}.am-long-password-clear.hidden {visibility:hidden;pointer-events:none}.am-long-password-line-bottom::after {content:'';position:absolute;background-color:#eee;display:block;top:auto;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.am-long-password-item.last .am-input-line-bottom::after {display:none}.am-long-password-placeholder-base {color:#ccc;color:var(--am-long-password-placeholder-color,#ccc)}.am-long-password-eye {margin-left:12px;margin-left:var(--am-long-password-eye-spacing,12px);height:22px;height:var(--am-long-password-icon-size,22px);width:22px;width:var(--am-long-password-icon-size,22px);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.am-long-password-eye-icon {line-height:1;line-height:var(--am-long-password-icon-line-height,1)}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "WEC4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("XtPV");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/open-location/open-location.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "WIiS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var PageResult_ = $getComponentClass("/node_modules/mini-ali-ui/es/page-result/index");
var PageResult = PageResult_ || (0, _EmptyComponentFactory2.default)("page-result");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _react2.default.createElement(PageResult, {
      type: "payment", title: "付款没成功", brief: "请重新付款", footer: data['footer'], onTapLeft: $getComponentEventHandler(this, "onTapLeft"), $isCustomComponent: this.$isCustomComponent, __tag: 'page-result'
    })
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "Wuaa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var PageResult_ = $getComponentClass("/node_modules/mini-ali-ui/es/page-result/index");
var PageResult = PageResult_ || (0, _EmptyComponentFactory2.default)("page-result");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _react2.default.createElement(PageResult, {
      type: "busy", footer: data['footer'], isCountDown: true, $isCustomComponent: this.$isCustomComponent, __tag: 'page-result'
    })
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "Wx6M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Image = _afAppx.Image || (0, _EmptyComponentFactory2.default)("image");

var Icon = _afAppx.Icon || (0, _EmptyComponentFactory2.default)("icon");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");
var BlockList_ = $getComponentClass("/page/common/components/block-list/block-list");
var BlockList = BlockList_ || (0, _EmptyComponentFactory2.default)("block-list");
var List_ = $getComponentClass("/node_modules/mini-ali-ui/es/list/index");
var List = List_ || (0, _EmptyComponentFactory2.default)("list");
var ListItem_ = $getComponentClass("/node_modules/mini-ali-ui/es/list/list-item/index");
var ListItem = ListItem_ || (0, _EmptyComponentFactory2.default)("list-item");


var $templates = {};

var _ref = _react2.default.createElement(Image, {
  src: "/image/component_logo.png", mode: "aspectFit"
});

var _ref2 = _react2.default.createElement(Icon, {
  type: "search", size: "14", color: "#1D1D1D"
});

function render(data) {
  var _this = this;

  return (0, _createRoot2.default)([_react2.default.createElement(
    View,
    null,
    _react2.default.createElement(
      View,
      {
        className: "banner"
      },
      _react2.default.createElement(
        View,
        {
          className: "logo", style: "opacity: " + data['titleOpacity']
        },
        _ref
      ),
      _react2.default.createElement(
        View,
        {
          className: "title", style: "opacity: " + data['titleOpacity']
        },
        (0, _toString2.default)("小程序官方示例")
      ),
      _react2.default.createElement(
        View,
        {
          className: "sub-title", style: "opacity: " + data['titleOpacity']
        },
        (0, _toString2.default)("以下展示小程序官方组件和API")
      ),
      _react2.default.createElement(
        View,
        {
          className: "fake-searchbar", onTap: $getEventHandler(this, "onSearchBarTap")
        },
        _ref2,
        _react2.default.createElement(
          Text,
          {
            className: "fake-placeholder"
          },
          (0, _toString2.default)("搜索你想要的组件和API")
        )
      )
    ),
    _react2.default.createElement(BlockList, {
      listData: data['hot'], className: "hot", $isCustomComponent: this.$isCustomComponent, __tag: 'block-list'
    }),
    _react2.default.createElement(
      View,
      {
        className: "tabs " + (data['shadow'] ? 'shadow' : ''), style: "top: " + data['top'] + "px"
      },
      _react2.default.createElement(
        View,
        {
          className: "tabs-bar"
        },
        (0, _iterate2.default)(data['tabs'], function (item, index) {
          return _react2.default.createElement(
            View,
            {
              className: "tabs-bar-tab", 'data-index': index, onTap: $getEventHandler(_this, "onTabBarTap")
            },
            _react2.default.createElement(
              View,
              {
                className: "tabs-bar-tab-title " + (data['activeTab'] === index ? 'active' : '')
              },
              (0, _toString2.default)(item)
            )
          );
        })
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "list-wrap"
      },
      _react2.default.createElement(
        View,
        {
          className: "list-container", style: {
            transform: 'translate3d(' + -data['activeTab'] * 100 + 'vw, 0, 0)'
          }
        },
        _react2.default.createElement(
          View,
          {
            className: "list", style: {
              height: data['activeTab'] === 0 ? 'auto' : 0
            }
          },
          (0, _iterate2.default)(data['basicComponentList'], function (list, index) {
            return _react2.default.createElement(
              List,
              {
                className: "list-item", $isCustomComponent: _this.$isCustomComponent, __tag: 'list'
              },
              _react2.default.createElement(
                View,
                {
                  slot: "header", className: "list-header"
                },
                (0, _toString2.default)((0, _getLooseDataMember2.default)([list, "type"]))
              ),
              (0, _iterate2.default)((0, _getLooseDataMember2.default)([list, "list"]), function (item, index) {
                return _react2.default.createElement(
                  ListItem,
                  {
                    arrow: true, multipleLine: false, key: "items-" + (0, _getLooseDataMember2.default)([item, "name"]), last: true, 'data-url': (0, _getLooseDataMember2.default)([item, "path"]), onClick: $getComponentEventHandler(_this, "openPage"), $isCustomComponent: _this.$isCustomComponent, __tag: 'list-item'
                  },
                  _react2.default.createElement(
                    View,
                    {
                      style: "display: flex; align-items: center"
                    },
                    _react2.default.createElement(Image, {
                      src: (0, _getLooseDataMember2.default)([item, "thumb"]), className: "thumb", mode: "aspectFit"
                    }),
                    _react2.default.createElement(
                      Text,
                      {
                        className: "component-name"
                      },
                      (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "name"]))
                    ),
                    _react2.default.createElement(
                      Text,
                      {
                        className: "component-brief"
                      },
                      (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "nameEn"]))
                    )
                  )
                );
              })
            );
          })
        ),
        _react2.default.createElement(
          View,
          {
            className: "list", style: {
              height: data['activeTab'] === 1 ? 'auto' : 0
            }
          },
          (0, _iterate2.default)(data['extComponentList'], function (list, index) {
            return _react2.default.createElement(
              List,
              {
                className: "list-item", $isCustomComponent: _this.$isCustomComponent, __tag: 'list'
              },
              _react2.default.createElement(
                View,
                {
                  slot: "header", className: "list-header"
                },
                (0, _toString2.default)((0, _getLooseDataMember2.default)([list, "type"]))
              ),
              (0, _iterate2.default)((0, _getLooseDataMember2.default)([list, "list"]), function (item, index) {
                return _react2.default.createElement(
                  ListItem,
                  {
                    arrow: true, multipleLine: false, key: "items-" + (0, _getLooseDataMember2.default)([item, "name"]), last: true, 'data-url': (0, _getLooseDataMember2.default)([item, "path"]), onClick: $getComponentEventHandler(_this, "openPage"), $isCustomComponent: _this.$isCustomComponent, __tag: 'list-item'
                  },
                  _react2.default.createElement(
                    View,
                    {
                      style: "display: flex; align-items: center"
                    },
                    _react2.default.createElement(Image, {
                      src: (0, _getLooseDataMember2.default)([item, "thumb"]), className: "thumb", mode: "aspectFit"
                    }),
                    _react2.default.createElement(
                      Text,
                      {
                        className: "component-name"
                      },
                      (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "name"]))
                    ),
                    _react2.default.createElement(
                      Text,
                      {
                        className: "component-brief"
                      },
                      (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "nameEn"]))
                    )
                  )
                );
              })
            );
          })
        )
      )
    )
  ), _react2.default.createElement(Image, {
    mode: "scaleToFill", src: "/image/logo_devCenter.png", className: "logo_devCenter", onTap: $getEventHandler(this, "goDevCenter")
  })]);
};
module.exports = exports['default'];

/***/ }),

/***/ "WyLO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var AmIcon_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-icon/index");
var AmIcon = AmIcon_ || (0, _EmptyComponentFactory2.default)("am-icon");

var Image = _afAppx.Image || (0, _EmptyComponentFactory2.default)("image");


var $templates = {};

var _ref = _react2.default.createElement(View, {
  className: "am-notice-capsule-bg"
});

function render(data) {
  return (0, _createRoot2.default)(data['show'] && data['capsule'] !== true ? _react2.default.createElement(
    View,
    {
      className: "am-notice " + data['className'] + " " + (data['type'] === 'normal' ? '' : 'am-notice-' + data['type']), onTap: $getEventHandler(this, "onNoticeTap")
    },
    data['showIcon'] ? _react2.default.createElement(
      View,
      {
        className: "am-notice-thumb"
      },
      data['type'] === 'error' ? _react2.default.createElement(AmIcon, {
        className: "am-notice-thumb-icon", type: "help", $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
      }) : _react2.default.createElement(AmIcon, {
        className: "am-notice-thumb-icon", type: "voice", $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
      })
    ) : null,
    _react2.default.createElement(
      View,
      {
        className: "am-notice-content am-notice-content-" + data['$id']
      },
      data['showShadow'] ? [data['enableMarquee'] ? _react2.default.createElement(View, {
        className: "am-notice-scroll-left am-notice-" + (data['type'] === 'normal' ? '' : data['type']) + "-scroll-left"
      }) : null, data['enableMarquee'] ? _react2.default.createElement(View, {
        className: "am-notice-scroll-right am-notice-" + (data['type'] === 'normal' ? '' : data['type']) + "-scroll-right"
      }) : null] : null,
      data['canIUseTransitionEnd'] ? _react2.default.createElement(
        View,
        {
          className: "am-notice-marquee am-notice-marquee-" + data['$id'], style: data['marqueeStyle'] + " display: " + (data['enableMarquee'] ? 'inline-block' : 'block'), onTransitionEnd: $getEventHandler(this, "onTransitionEnd")
        },
        (0, _renderSlot2.default)(data, "$default", null)
      ) : _react2.default.createElement(
        View,
        {
          className: "am-notice-marquee am-notice-marquee-" + data['$id'], style: "right: " + data['animatedWidth'] + "px; display: " + (data['enableMarquee'] ? 'inline-block' : 'block')
        },
        (0, _renderSlot2.default)(data, "$default", null)
      )
    ),
    data['mode'] || data['action'] !== '' ? _react2.default.createElement(
      View,
      {
        className: "am-notice-operation"
      },
      data['actionLeft'] !== '' ? _react2.default.createElement(
        View,
        {
          className: "am-notice-operation-text am-notice-operation-left", onTap: $getEventHandler(this, "onActionLeftTap"), hoverClass: "am-notice-operation-text__hover", hoverStartTime: "0", hoverStayTime: "0"
        },
        (0, _toString2.default)(data['actionLeft'] ? data['actionLeft'] : '查看详情')
      ) : null,
      data['action'] !== '' ? _react2.default.createElement(
        View,
        {
          className: "am-notice-operation-text", onTap: $getEventHandler(this, "onOperationTap"), hoverClass: "am-notice-operation-text__hover", hoverStartTime: "0", hoverStayTime: "0"
        },
        (0, _toString2.default)(data['action'] ? data['action'] : '查看详情')
      ) : data['mode'] == 'closable' ? _react2.default.createElement(
        View,
        {
          onTap: $getEventHandler(this, "onOperationTap"), hoverClass: "am-notice-operation-text__hover", hoverStartTime: "0", hoverStayTime: "0"
        },
        _react2.default.createElement(AmIcon, {
          type: "close", className: "am-notice-operation-icon", $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
        })
      ) : data['mode'] == 'link' && data['actionLeft'] == '' ? _react2.default.createElement(
        View,
        {
          hoverClass: "am-notice-operation-text__hover", hoverStartTime: "0", hoverStayTime: "0"
        },
        _react2.default.createElement(AmIcon, {
          type: "right", className: "am-notice-operation-icon", $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
        })
      ) : data['mode'] == 'link' && data['actionLeft'] !== '' ? _react2.default.createElement(
        View,
        {
          onTap: $getEventHandler(this, "onOperationTap"), hoverClass: "am-notice-operation-text__hover", hoverStartTime: "0", hoverStayTime: "0"
        },
        _react2.default.createElement(AmIcon, {
          type: "right", className: "am-notice-operation-icon", $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
        })
      ) : null
    ) : null,
    _react2.default.createElement(View, {
      className: data['transparent'] ? 'am-notice-transparent-bg' : 'am-notice-' + data['type'] + '-bg'
    })
  ) : data['show'] && data['capsule'] ? _react2.default.createElement(
    View,
    {
      className: "am-notice-capsule-wrap", onTap: $getEventHandler(this, "onNoticeTap")
    },
    _react2.default.createElement(
      View,
      {
        className: "am-notice am-notice-capsule " + data['className']
      },
      (0, _getLooseDataMember2.default)([data['capsuleItem'], "length"]) > 0 ? _react2.default.createElement(
        View,
        {
          className: "am-notice-capsule-item"
        },
        (0, _iterate2.default)(data['capsuleItem'], function (item, index) {
          return index <= 2 ? _react2.default.createElement(Image, {
            src: item, className: "am-notice-capsule-img"
          }) : null;
        })
      ) : null,
      _react2.default.createElement(
        View,
        {
          className: "am-notice-capsule-content am-notice-content-" + data['$id'], hoverClass: "am-notice-capsule-content__hover", hoverStartTime: "0", hoverStayTime: "0"
        },
        (0, _renderSlot2.default)(data, "$default", null)
      ),
      _ref
    )
  ) : null);
};
module.exports = exports['default'];

/***/ }),

/***/ "X1k0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("MhrH");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/tips/2/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "X6Nz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("hn+S");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/filter/single_2/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "XB03":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/get-image-info/get-image-info.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "XDV1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-input-item {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;background:var(--am-input-item-background,#fff);padding-left:12px;padding-left:var(--am-input-item-padding-left,12px)}.am-input-item-extra {margin-left:12px;margin-left:var(--am-input-item-padding-left,12px)}.am-input-line {position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:12px;padding-right:var(--am-input-line-padding-right,12px);min-height:48px;min-height:var(--am-input-line-min-height,48px);overflow:hidden}.am-input-label {-webkit-align-self:center;align-self:center;min-width:80px;min-width:var(--am-input-label-min-width,80px);margin-right:2px;font-size:17px;font-size:var(--am-input-label-font-size,17px);color:#333;color:var(--am-input-item-label-color,#333)}.am-input-layer {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1}.am-input-layer-vertical {-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:12px 0;padding:var(--am-input-vlabel-paddingTB,12px) 0}.am-input-layer-vertical .am-input-label {-webkit-align-self:flex-start;align-self:flex-start;font-size:15px;font-size:var(--am-input-vlabel-font-size,15px);color:#999;color:var(--am-input-vlabel-color,#999)}.am-input-layer-vertical .a-input-placeholder {margin-left:-3px}.am-input-content {-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;padding:0;font-size:17px;font-size:var(--am-input-font-size,17px);text-align:left;color:#333;color:var(--am-input-item-color,#333)}.am-input-content .a-input-wrap {-webkit-box-flex:1;-webkit-flex:1;flex:1}.am-input-clear {display:-webkit-box;display:-webkit-flex;display:flex;height:22px;height:var(--am-input-icon-size,22px);width:22px;width:var(--am-input-icon-size,22px);-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.am-input-clear-icon {line-height:1;line-height:var(--am-input-icon-line-height,1)}.am-input-clear.show {visibility:visible}.am-input-clear.hidden {visibility:hidden;pointer-events:none}.am-input-line-bottom::after {content:'';position:absolute;background-color:#eee;display:block;top:auto;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.am-input-item.last .am-input-line-bottom::after {display:none}.am-input-placeholder-base {color:#ccc;color:var(--am-input-item-placeholder-color,#ccc)}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "XGJZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/clipboard/clipboard",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("sr+3");
    },
    stylesheet: function () {
      return __webpack_require__("KCI+");
    }
  });
  
  

/***/ }),

/***/ "XHUk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("RQr8");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/favorite/favorite.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "XI/p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("NapD");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/tips/2/index",
    
    
    
    usingComponents: {"tips-plain":"/node_modules/mini-ali-ui/es/tips/tips-plain/index"},
    render: function () {
      return __webpack_require__("Vdi9");
    },
    stylesheet: function () {
      return __webpack_require__("X1k0");
    }
  });
  
  

/***/ }),

/***/ "XOTE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var List_ = $getComponentClass("/node_modules/mini-ali-ui/es/list/index");
var List = List_ || (0, _EmptyComponentFactory2.default)("list");
var ListItem_ = $getComponentClass("/node_modules/mini-ali-ui/es/list/list-item/index");
var ListItem = ListItem_ || (0, _EmptyComponentFactory2.default)("list-item");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _react2.default.createElement(
      List,
      {
        $isCustomComponent: this.$isCustomComponent, __tag: 'list'
      },
      _react2.default.createElement(
        ListItem,
        {
          arrow: "horizontal", index: "filter", onClick: $getComponentEventHandler(this, "openPage"), 'data-url': "single/index", key: "items-filter1", $isCustomComponent: this.$isCustomComponent, __tag: 'list-item'
        },
        _react2.default.createElement(
          View,
          null,
          (0, _toString2.default)("单行2列")
        )
      ),
      _react2.default.createElement(
        ListItem,
        {
          arrow: "horizontal", index: "filter", onClick: $getComponentEventHandler(this, "openPage"), 'data-url': "single_1/index", key: "items-filter2", $isCustomComponent: this.$isCustomComponent, __tag: 'list-item'
        },
        _react2.default.createElement(
          View,
          null,
          (0, _toString2.default)("单行3列")
        )
      ),
      _react2.default.createElement(
        ListItem,
        {
          arrow: "horizontal", index: "filter", onClick: $getComponentEventHandler(this, "openPage"), 'data-url': "single_2/index", key: "items-filter2", $isCustomComponent: this.$isCustomComponent, __tag: 'list-item'
        },
        _react2.default.createElement(
          View,
          null,
          (0, _toString2.default)("双行2列")
        )
      ),
      _react2.default.createElement(
        ListItem,
        {
          arrow: "horizontal", index: "filter", onClick: $getComponentEventHandler(this, "openPage"), 'data-url': "alternative/index", key: "items-filter2", $isCustomComponent: this.$isCustomComponent, __tag: 'list-item'
        },
        _react2.default.createElement(
          View,
          null,
          (0, _toString2.default)("多选")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "XQbu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("srED");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/create-inner-audiocontext/create-inner-audiocontext.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "XQdC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/movable-view/movable-view",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("WnqE");
    },
    stylesheet: function () {
      return __webpack_require__("GnjK");
    }
  });
  
  

/***/ }),

/***/ "XRCa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("jcCe");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/grid/4/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "XXHl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "Xczx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/ocr/ocr",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("hiDy");
    },
    stylesheet: function () {
      return __webpack_require__("k1SR");
    }
  });
  
  

/***/ }),

/***/ "XgXe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createBlock; });
/* harmony import */ var M_0_ = __webpack_require__("cDcd");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);


function createBlock(element, props) {
  var arrayElements = element;
  if (!Array.isArray(arrayElements)) {
    arrayElements = [arrayElements];
  }
  if (M_0_["Fragment"]) {
    return M_0__default.a.createElement.apply(M_0__default.a, [M_0_["Fragment"], props].concat(arrayElements));
  } else {
    return arrayElements;
  }
}

/***/ }),

/***/ "XkMr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
module.exports = Object.assign || function _extends(to) {
    var from = slice.call(arguments, 1);
    from.forEach(function t(f) {
        if (f && typeof f === 'object') {
            Object.keys(f).forEach(function tt(k) {
                to[k] = f[k];
            });
        }
    });
    return to;
};
//# sourceMappingURL=extends.js.map

/***/ }),

/***/ "XtPV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("0v8H");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/open-location/open-location.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "XylM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("fv+s");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/picker-item/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "Y/uV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var Tag_ = $getComponentClass("/node_modules/mini-ali-ui/es/tag/index");
var Tag = Tag_ || (0, _EmptyComponentFactory2.default)("tag");
var ListItem_ = $getComponentClass("/node_modules/mini-ali-ui/es/list/list-item/index");
var ListItem = ListItem_ || (0, _EmptyComponentFactory2.default)("list-item");
var AmSwitch_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-switch/index");
var AmSwitch = AmSwitch_ || (0, _EmptyComponentFactory2.default)("am-switch");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      style: "padding: 12px;"
    },
    _react2.default.createElement(
      View,
      {
        style: "display: flex; justify-content: space-evenly;"
      },
      _react2.default.createElement(
        Tag,
        {
          size: "lg", iconType: data['useIcon'] ? 'qr' : '', ghost: data['ghost'], type: "primary", $isCustomComponent: this.$isCustomComponent, __tag: 'tag'
        },
        (0, _toString2.default)("标签")
      ),
      _react2.default.createElement(
        Tag,
        {
          size: "lg", iconType: data['useIcon'] ? 'qr' : '', ghost: data['ghost'], type: "warning", $isCustomComponent: this.$isCustomComponent, __tag: 'tag'
        },
        (0, _toString2.default)("标签")
      ),
      _react2.default.createElement(
        Tag,
        {
          size: "lg", iconType: data['useIcon'] ? 'qr' : '', ghost: data['ghost'], type: "danger", $isCustomComponent: this.$isCustomComponent, __tag: 'tag'
        },
        (0, _toString2.default)("标签")
      ),
      _react2.default.createElement(
        Tag,
        {
          size: "lg", iconType: data['useIcon'] ? 'qr' : '', ghost: data['ghost'], type: "success", $isCustomComponent: this.$isCustomComponent, __tag: 'tag'
        },
        (0, _toString2.default)("标签")
      )
    ),
    _react2.default.createElement(
      View,
      {
        style: "display: flex; justify-content: space-evenly; margin-top: 20px;"
      },
      _react2.default.createElement(
        Tag,
        {
          size: "sm", iconType: data['useIcon'] ? 'qr' : '', ghost: data['ghost'], type: "primary", $isCustomComponent: this.$isCustomComponent, __tag: 'tag'
        },
        (0, _toString2.default)("标签")
      ),
      _react2.default.createElement(
        Tag,
        {
          size: "sm", iconType: data['useIcon'] ? 'qr' : '', ghost: data['ghost'], type: "warning", $isCustomComponent: this.$isCustomComponent, __tag: 'tag'
        },
        (0, _toString2.default)("标签")
      ),
      _react2.default.createElement(
        Tag,
        {
          size: "sm", iconType: data['useIcon'] ? 'qr' : '', ghost: data['ghost'], type: "danger", $isCustomComponent: this.$isCustomComponent, __tag: 'tag'
        },
        (0, _toString2.default)("标签")
      ),
      _react2.default.createElement(
        Tag,
        {
          size: "sm", iconType: data['useIcon'] ? 'qr' : '', ghost: data['ghost'], type: "success", $isCustomComponent: this.$isCustomComponent, __tag: 'tag'
        },
        (0, _toString2.default)("标签")
      )
    ),
    _react2.default.createElement(
      View,
      {
        style: "padding: 20px 10px;"
      },
      _react2.default.createElement(
        ListItem,
        {
          $isCustomComponent: this.$isCustomComponent, __tag: 'list-item'
        },
        (0, _toString2.default)("图标"),
        _react2.default.createElement(AmSwitch, {
          slot: "extra", onChange: $getComponentEventHandler(this, "setInfo"), 'data-name': "useIcon", checked: data['useIcon'], $isCustomComponent: this.$isCustomComponent, __tag: 'am-switch'
        })
      ),
      _react2.default.createElement(
        ListItem,
        {
          $isCustomComponent: this.$isCustomComponent, __tag: 'list-item'
        },
        (0, _toString2.default)("线框样式"),
        _react2.default.createElement(AmSwitch, {
          slot: "extra", onChange: $getComponentEventHandler(this, "setInfo"), 'data-name': "ghost", checked: data['ghost'], $isCustomComponent: this.$isCustomComponent, __tag: 'am-switch'
        })
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "Y89I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/multi-level-select/multi-level-select.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "Y9XF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/get-user-info/get-user-info",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("oCUz");
    },
    stylesheet: function () {
      return __webpack_require__("Kb+G");
    }
  });
  
  

/***/ }),

/***/ "YD9D":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(data['elevator'] ? _react2.default.createElement(
    View,
    {
      id: "am-tabs-elevator-pane-" + data['tabId'], className: "am-tabs-elevator-pane", ref: $getRefHandler(this, "am-tabs-elevator-pane-" + data['tabId'])
    },
    (0, _renderSlot2.default)(data, "$default", null)
  ) : data['style'] ? _react2.default.createElement(
    View,
    {
      style: data['style'], className: "am-tabs-pane-wrap am-tabs-pane-swiper-item", key: "tabs-pane-" + data['key']
    },
    (0, _renderSlot2.default)(data, "$default", null)
  ) : _react2.default.createElement(
    View,
    {
      style: data['tabId'] !== '' && data['activeTab'] !== '' ? data['tabId'] === data['activeTab'] ? '' : 'height: 0px;' : '', className: "am-tabs-pane-wrap", key: "tabs-pane-" + data['key']
    },
    (0, _renderSlot2.default)(data, "$default", null)
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "YDVR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("GxuW");
/* harmony import */ var M_2_ = __webpack_require__("3ZlR");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr-vehicle/ocr-vehicle.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "YIXs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("lwzp");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/common/components/block-list/block-list.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "YJ1A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("6VZI");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/search-bar/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "YNu+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var Grid_ = $getComponentClass("/node_modules/mini-ali-ui/es/grid/index");
var Grid = Grid_ || (0, _EmptyComponentFactory2.default)("grid");


var $templates = {};

var _ref = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref2 = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

function render(data) {
  return (0, _createRoot2.default)([_ref, _react2.default.createElement(Grid, {
    onGridItemClick: $getComponentEventHandler(this, "onItemClick"), columnNum: 4, list: data['list4'], $isCustomComponent: this.$isCustomComponent, __tag: 'grid'
  }), _ref2, _react2.default.createElement(Grid, {
    onGridItemClick: $getComponentEventHandler(this, "onItemClick"), circular: true, columnNum: 4, list: data['list42'], $isCustomComponent: this.$isCustomComponent, __tag: 'grid'
  })]);
};
module.exports = exports['default'];

/***/ }),

/***/ "YOir":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "YRMo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("z4Ye");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/get-network-type/get-network-type.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "YTOm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/ocr-general/ocr-general",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("+LKb");
    },
    stylesheet: function () {
      return __webpack_require__("5g5z");
    }
  });
  
  

/***/ }),

/***/ "YU9A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("0uvj");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/checkbox/checkbox.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "YaE0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("lo9R");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/title/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "Yi8l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveScopedSlots; });
function resolveScopedSlots(arrScopedSlots) {
  var objScopedSlots = {};
  arrScopedSlots.forEach(function (arr) {
    var _arr$slot = arr.slot,
        slot = _arr$slot === undefined ? '$default' : _arr$slot,
        fn = arr.fn;

    objScopedSlots[slot] = objScopedSlots[slot] || [];
    objScopedSlots[slot].push(fn);
  });
  return objScopedSlots;
}

/***/ }),

/***/ "YjBN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var List_ = $getComponentClass("/node_modules/mini-ali-ui/es/list/index");
var List = List_ || (0, _EmptyComponentFactory2.default)("list");
var ListItem_ = $getComponentClass("/node_modules/mini-ali-ui/es/list/list-item/index");
var ListItem = ListItem_ || (0, _EmptyComponentFactory2.default)("list-item");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _react2.default.createElement(
      List,
      {
        $isCustomComponent: this.$isCustomComponent, __tag: 'list'
      },
      _react2.default.createElement(
        ListItem,
        {
          arrow: "horizontal", index: "grid", onClick: $getComponentEventHandler(this, "openPage"), 'data-url': "2/index", key: "items-grid", $isCustomComponent: this.$isCustomComponent, __tag: 'list-item'
        },
        _react2.default.createElement(
          View,
          null,
          (0, _toString2.default)("2列宫格")
        )
      ),
      _react2.default.createElement(
        ListItem,
        {
          arrow: "horizontal", index: "grid", onClick: $getComponentEventHandler(this, "openPage"), 'data-url': "3/index", key: "items-grid", $isCustomComponent: this.$isCustomComponent, __tag: 'list-item'
        },
        _react2.default.createElement(
          View,
          null,
          (0, _toString2.default)("3列宫格")
        )
      ),
      _react2.default.createElement(
        ListItem,
        {
          arrow: "horizontal", index: "grid", onClick: $getComponentEventHandler(this, "openPage"), 'data-url': "4/index", key: "items-grid", $isCustomComponent: this.$isCustomComponent, __tag: 'list-item'
        },
        _react2.default.createElement(
          View,
          null,
          (0, _toString2.default)("4列宫格")
        )
      ),
      _react2.default.createElement(
        ListItem,
        {
          arrow: "horizontal", index: "notice", onClick: $getComponentEventHandler(this, "openPage"), 'data-url': "5/index", key: "items-notice", last: true, $isCustomComponent: this.$isCustomComponent, __tag: 'list-item'
        },
        _react2.default.createElement(
          View,
          null,
          (0, _toString2.default)("5列宫格")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "Yjv3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "YlaY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/cover-view/cover-view",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("nofa");
    },
    stylesheet: function () {
      return __webpack_require__("f3zr");
    }
  });
  
  

/***/ }),

/***/ "YmoJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("wTGe");
/* harmony import */ var M_2_ = __webpack_require__("3ZlR");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr-bank-card/ocr-bank-card.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "Ymux":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-badge {display:inline-block;position:relative;vertical-align:middle;line-height:1.5;line-height:var(--am-badge-line-height,1.5)}.am-badge-text {display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;right:0;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);top:0;min-width:16px;padding:0;min-height:16px;text-align:center;background-color:#ff3b30;background-color:var(--am-badge-bg-color,#ff3b30);border-radius:50vh;border-radius:var(--am-badge-border-radius,50vh);color:#fff;color:var(--am-badge-font-color,#fff);z-index:1}.am-badge-text-padding {font-size:10px;opacity:0}.am-badge-text-inner {position:relative;z-index:2;font-size:11px;white-space:nowrap}.am-badge-text.am-badge-double {padding:0 4px}.am-badge-not-a-wrapper .am-badge-text {position:relative;top:auto;right:auto;-webkit-transform:translateX(0);transform:translateX(0)}.am-badge-text.is-dot {padding:0;width:10px;min-width:10px;height:10px;min-height:10px;border-radius:50vh;border-radius:var(--am-badge-border-radius,50vh)}.am-badge-arrow {position:absolute;height:8px;width:8px;bottom:-2px;left:50%;margin-left:-4px;-webkit-transform:rotate(45deg);transform:rotate(45deg);z-index:1;border-radius:50vh 0 0;background:#ff3b30;background-color:var(--am-badge-bg-color,#ff3b30)}.am-badge-arrow.am-badge-stroke {border:0 none;-webkit-filter:drop-shadow(1px 1px 0 #fff);filter:drop-shadow(1px 1px 0 #fff)}.am-badge-text-arrow-right {border-radius:8px 8px 0 8px}.am-badge-text-arrow-left {border-radius:8px 8px 8px 0}.am-badge-stroke {border:1px solid #fff}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "Yq+t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  M_0_["WorkerComponent"] && Object(M_0_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/pagination/index",
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("/wDd");
    },
  });
  
  

/***/ }),

/***/ "Ys4/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "Yu1Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".radio-text,\n.btnLabel {margin:0 0.2rem 0 0.04rem}.radio-group {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.radio,\n.showBtn {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "Yw5K":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("用户截屏事件 API")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("my.onUserCaptureScreen")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          View,
          null,
          [(0, _toString2.default)("目前状态："), (0, _toString2.default)(data['condition'] ? "已经开启监听" : '已经取消监听')]
        ),
        data['condition'] ? _react2.default.createElement(
          View,
          null,
          _react2.default.createElement(
            Button,
            {
              type: "primary", onTap: $getEventHandler(this, "offUserCaptureScreen")
            },
            (0, _toString2.default)("取消监听屏幕事件")
          )
        ) : _react2.default.createElement(
          View,
          null,
          _react2.default.createElement(
            Button,
            {
              type: "primary", onTap: $getEventHandler(this, "onUserCaptureScreen")
            },
            (0, _toString2.default)("开启\b监听屏幕事件")
          )
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "Yz4u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/get-location/get-location",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("ROlj");
    },
    stylesheet: function () {
      return __webpack_require__("3V1r");
    }
  });
  
  

/***/ }),

/***/ "Z+xR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "Z0BT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/image/image",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("6NYf");
    },
    stylesheet: function () {
      return __webpack_require__("rpCv");
    }
  });
  
  

/***/ }),

/***/ "Z0DT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("ts7A");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/tabs/tabs.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "Z1MX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Favorite = _afAppx.Favorite || (0, _EmptyComponentFactory2.default)("favorite");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "favorite"
    },
    _react2.default.createElement(
      Favorite,
      null,
      (0, _toString2.default)("收藏小程序示例")
    ),
    _react2.default.createElement(
      View,
      {
        className: "name"
      },
      _react2.default.createElement(
        Text,
        null,
        (0, _toString2.default)("Favorite")
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "title"
      },
      _react2.default.createElement(
        View,
        null,
        (0, _toString2.default)("收藏组件")
      ),
      _react2.default.createElement(
        View,
        null,
        (0, _toString2.default)("favorite")
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "explanation"
      },
      (0, _toString2.default)("提示用户收藏小程序，收藏后，用户可直接从小程序收藏进入，再次使用几率大大增加。可根据用户当前收藏状态，判断是否显示组件，并根据用户首次收藏或关闭收藏组件行为，控制展示内容及疲劳度。")
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "Z67O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Au/O");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/loading/loading",
    
    
    
    usingComponents: {"loading":"/node_modules/mini-ali-ui/es/loading/index"},
    render: function () {
      return __webpack_require__("Lv3m");
    },
    stylesheet: function () {
      return __webpack_require__("DN7J");
    }
  });
  
  

/***/ }),

/***/ "Z7PN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("/kcS");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/view/view.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "Z8y2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("0Eg3");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr-driver-license/ocr-driver-license.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ZA82":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/share/share",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("feJL");
    },
    stylesheet: function () {
      return __webpack_require__("vmQL");
    }
  });
  
  

/***/ }),

/***/ "ZBMD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("/HlJ");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/video/video.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ZDiJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".page {padding:0}.text-demo-title {margin-left:0.3rem;margin-top:0.3rem}.text-demo-text {font-size:0.36rem}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "ZGqB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("x+K3");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/memory-warning/memory-warning.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ZMVt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var Terms_ = $getComponentClass("/node_modules/mini-ali-ui/es/terms/index");
var Terms = Terms_ || (0, _EmptyComponentFactory2.default)("terms");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");

var Navigator = _afAppx.Navigator || (0, _EmptyComponentFactory2.default)("navigator");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)([_react2.default.createElement(
    View,
    null,
    _react2.default.createElement(
      Terms,
      {
        onSelect: $getComponentEventHandler(this, "onSelect"), related: (0, _getLooseDataMember2.default)([data['c1'], "related"]), hasDesc: (0, _getLooseDataMember2.default)([data['c1'], "hasDesc"]), agreeBtn: (0, _getLooseDataMember2.default)([data['c1'], "agreeBtn"]), cancelBtn: (0, _getLooseDataMember2.default)([data['c1'], "cancelBtn"]), $isCustomComponent: this.$isCustomComponent, __tag: 'terms'
      },
      _react2.default.createElement(
        View,
        {
          className: "text", slot: "header"
        },
        _react2.default.createElement(
          Text,
          null,
          (0, _toString2.default)("同意"),
          _react2.default.createElement(
            Navigator,
            {
              className: "link", url: "/page/tabBar/component/index"
            },
            (0, _toString2.default)("《用户授权协议》")
          )
        )
      )
    ),
    _react2.default.createElement(
      Text,
      {
        className: "title"
      },
      (0, _toString2.default)("双按钮")
    )
  ), _react2.default.createElement(
    View,
    null,
    _react2.default.createElement(
      Terms,
      {
        onSelect: $getComponentEventHandler(this, "onSelect"), fixed: (0, _getLooseDataMember2.default)([data['c2'], "fixed"]), related: (0, _getLooseDataMember2.default)([data['c2'], "related"]), hasDesc: (0, _getLooseDataMember2.default)([data['c2'], "hasDesc"]), agreeBtn: (0, _getLooseDataMember2.default)([data['c2'], "agreeBtn"]), cancelBtn: (0, _getLooseDataMember2.default)([data['c2'], "cancelBtn"]), shape: (0, _getLooseDataMember2.default)([data['c2'], "shape"]), capsuleMinWidth: (0, _getLooseDataMember2.default)([data['c2'], "capsuleMinWidth"]), capsuleSize: (0, _getLooseDataMember2.default)([data['c2'], "capsuleSize"]), $isCustomComponent: this.$isCustomComponent, __tag: 'terms'
      },
      _react2.default.createElement(
        View,
        {
          className: "text", slot: "desc"
        },
        _react2.default.createElement(
          Text,
          null,
          (0, _toString2.default)("查看"),
          _react2.default.createElement(
            Navigator,
            {
              className: "link", url: "/page/tabBar/component/index"
            },
            (0, _toString2.default)("《ETC服务用户协议》")
          ),
          (0, _toString2.default)("，授权ETC服务获取身份证、收货地址用于申请ETC，关注车主服务生活号获取审核；")
        )
      )
    ),
    _react2.default.createElement(
      Text,
      {
        className: "title"
      },
      (0, _toString2.default)("带辅助描述")
    )
  ), _react2.default.createElement(
    View,
    null,
    _react2.default.createElement(
      Terms,
      {
        onSelect: $getComponentEventHandler(this, "onSelect"), fixed: (0, _getLooseDataMember2.default)([data['c3'], "fixed"]), related: (0, _getLooseDataMember2.default)([data['c3'], "related"]), hasDesc: (0, _getLooseDataMember2.default)([data['c3'], "hasDesc"]), agreeBtn: (0, _getLooseDataMember2.default)([data['c3'], "agreeBtn"]), cancelBtn: (0, _getLooseDataMember2.default)([data['c3'], "cancelBtn"]), $isCustomComponent: this.$isCustomComponent, __tag: 'terms'
      },
      _react2.default.createElement(
        View,
        {
          className: "text", slot: "header"
        },
        _react2.default.createElement(
          Text,
          null,
          (0, _toString2.default)("同意"),
          _react2.default.createElement(
            Navigator,
            {
              className: "link", url: "/page/tabBar/component/index"
            },
            (0, _toString2.default)("《用户授权协议》")
          )
        )
      )
    ),
    _react2.default.createElement(
      Text,
      {
        className: "title"
      },
      (0, _toString2.default)("捆绑协议已选中")
    )
  ), _react2.default.createElement(
    View,
    null,
    _react2.default.createElement(
      Terms,
      {
        onSelect: $getComponentEventHandler(this, "onSelect"), fixed: (0, _getLooseDataMember2.default)([data['c4'], "fixed"]), related: (0, _getLooseDataMember2.default)([data['c4'], "related"]), hasDesc: (0, _getLooseDataMember2.default)([data['c4'], "hasDesc"]), agreeBtn: (0, _getLooseDataMember2.default)([data['c4'], "agreeBtn"]), cancelBtn: (0, _getLooseDataMember2.default)([data['c4'], "cancelBtn"]), shape: (0, _getLooseDataMember2.default)([data['c4'], "shape"]), capsuleMinWidth: (0, _getLooseDataMember2.default)([data['c4'], "capsuleMinWidth"]), capsuleSize: (0, _getLooseDataMember2.default)([data['c4'], "capsuleSize"]), $isCustomComponent: this.$isCustomComponent, __tag: 'terms'
      },
      _react2.default.createElement(
        View,
        {
          className: "text", slot: "header"
        },
        _react2.default.createElement(
          Text,
          null,
          (0, _toString2.default)("同意"),
          _react2.default.createElement(
            Navigator,
            {
              className: "link", url: "/page/tabBar/component/index"
            },
            (0, _toString2.default)("《用户授权协议》")
          )
        )
      )
    ),
    _react2.default.createElement(
      Text,
      {
        className: "title"
      },
      (0, _toString2.default)("捆绑协议未选中")
    )
  ), _react2.default.createElement(
    View,
    null,
    _react2.default.createElement(
      Terms,
      {
        fixed: (0, _getLooseDataMember2.default)([data['c5'], "fixed"]), related: (0, _getLooseDataMember2.default)([data['c5'], "related"]), hasDesc: (0, _getLooseDataMember2.default)([data['c5'], "hasDesc"]), agreeBtn: (0, _getLooseDataMember2.default)([data['c5'], "agreeBtn"]), cancelBtn: (0, _getLooseDataMember2.default)([data['c5'], "cancelBtn"]), shape: (0, _getLooseDataMember2.default)([data['c5'], "shape"]), capsuleMinWidth: (0, _getLooseDataMember2.default)([data['c5'], "capsuleMinWidth"]), capsuleSize: (0, _getLooseDataMember2.default)([data['c5'], "capsuleSize"]), $isCustomComponent: this.$isCustomComponent, __tag: 'terms'
      },
      _react2.default.createElement(
        View,
        {
          className: "text", slot: "header"
        },
        _react2.default.createElement(
          Text,
          null,
          (0, _toString2.default)("同意"),
          _react2.default.createElement(
            Navigator,
            {
              className: "link", url: "/page/tabBar/component/index"
            },
            (0, _toString2.default)("《用户授权协议》")
          )
        )
      )
    ),
    _react2.default.createElement(
      Text,
      {
        className: "title"
      },
      (0, _toString2.default)("无捆绑协议")
    )
  ), _react2.default.createElement(
    View,
    {
      style: "padding-bottom:30px;"
    },
    _react2.default.createElement(
      Terms,
      {
        fixed: (0, _getLooseDataMember2.default)([data['c6'], "fixed"]), related: (0, _getLooseDataMember2.default)([data['c6'], "related"]), hasDesc: (0, _getLooseDataMember2.default)([data['c6'], "hasDesc"]), agreeBtn: (0, _getLooseDataMember2.default)([data['c6'], "agreeBtn"]), cancelBtn: (0, _getLooseDataMember2.default)([data['c6'], "cancelBtn"]), shape: (0, _getLooseDataMember2.default)([data['c6'], "shape"]), capsuleMinWidth: (0, _getLooseDataMember2.default)([data['c6'], "capsuleMinWidth"]), capsuleSize: (0, _getLooseDataMember2.default)([data['c6'], "capsuleSize"]), $isCustomComponent: this.$isCustomComponent, __tag: 'terms'
      },
      _react2.default.createElement(
        View,
        {
          className: "text", slot: "header"
        },
        _react2.default.createElement(
          Text,
          null,
          (0, _toString2.default)("同意"),
          _react2.default.createElement(
            Navigator,
            {
              className: "link", url: "/page/tabBar/component/index"
            },
            (0, _toString2.default)("《用户授权协议》")
          )
        )
      )
    ),
    _react2.default.createElement(
      Text,
      {
        className: "title"
      },
      (0, _toString2.default)("吸底")
    )
  )]);
};
module.exports = exports['default'];

/***/ }),

/***/ "ZOIL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("BaJx");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/collapse/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ZONF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("hZKm");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/page-result/log-off/index",
    
    
    
    usingComponents: {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"},
    render: function () {
      return __webpack_require__("bbHx");
    },
    stylesheet: function () {
      return __webpack_require__("ZOkT");
    }
  });
  
  

/***/ }),

/***/ "ZOkT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("v+V5");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/log-off/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ZPmF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("adb0");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/filter/single_1/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ZPri":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-modal {background-color:#fff;background-color:var(--am-modal-content-backgroundColor,#fff);border-radius:8px;border-radius:var(--am-modal-content-radius,8px);width:280px;position:relative}.am-modal-show {position:fixed;top:0;left:0;right:0;bottom:0}.am-modal-hide {display:none}.am-modal-document,.am-modal-mask {position:absolute;top:0;left:0;right:0;bottom:0}.am-modal-mask {background-color:rgba(0,0,0,.55);background-color:var(--am-modal-mask-backgroundColor,rgba(0,0,0,.55))}.am-modal-mask-advice {background-color:rgba(0,0,0,.75);background-color:var(--am-modal-market-mask-backgroundColor,rgba(0,0,0,.75))}.am-modal-document {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.am-modal-content {padding:20px 12px;padding:var(20px --am-modal-content-padding-h,20px 12px)}.am-modal-content--fill {padding-top:0}.am-modal-image {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-bottom:12px;margin-bottom:var(--am-modal-content-margin-v,12px)}.am-modal-image-lg .am-modal-image-element {width:280px;height:156px;margin-left:-12px;margin-left:var(---am-modal-content-padding-h,-12px);margin-right:-12px;margin-right:var(---am-modal-content-padding-h,-12px);border-top-left-radius:8px;border-top-left-radius:var(--am-modal-content-radius,8px);border-top-right-radius:8px;border-top-right-radius:var(--am-modal-content-radius,8px);overflow:hidden}.am-modal-image-md .am-modal-image-element {width:140px;height:140px}.am-modal-image-sm .am-modal-image-element {width:80px;height:80px}.am-modal-header {font-size:18px;font-size:var(--am-modal-title-fontSize,18px);line-height:1.5;line-height:var(--am-modal-title-lineHeight,1.5);text-align:center;color:#333;color:var(--am-modal-title-color,#333);font-weight:700;margin-bottom:8px;margin-bottom:var(--am-modal-title-margin-v,8px)}.am-modal-body {overflow:hidden;max-width:280px;line-height:1.5;line-height:var(--am-modal-body-lineHeight,1.5);text-align:center;color:#333;color:var(--am-modal-body-color,#333);font-size:15px;font-size:var(--am-modal-body-fontSize,15px)}.am-modal-footer {height:50px;line-height:50px;position:relative;font-size:18px;font-size:var(--am-modal-footer-fontSize,18px);color:#1677ff;color:var(--am-color-text-primary,#1677ff);text-align:center}.am-modal-footer::before {content:'';position:absolute;background-color:#e5e5e5;display:block;top:0;right:0;bottom:auto;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.am-modal-buttons {position:relative;display:-webkit-box;display:-webkit-flex;display:flex;font-size:18px;font-size:var(--am-modal-footer-fontSize,18px);color:#1677ff;color:var(--am-color-text-primary,#1677ff);text-align:center}.am-modal-buttons::before {content:'';position:absolute;background-color:#e5e5e5;display:block;top:0;right:0;bottom:auto;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.am-modal-buttons--vertical {-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.am-modal-buttons--horizontal {-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.am-modal-button {padding:12px;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.am-modal-button--vertical::after {content:'';position:absolute;background-color:#e5e5e5;display:block;top:auto;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.am-modal-button--vertical:last-child::after {display:none}.am-modal-button--horizontal::after {content:'';position:absolute;background-color:#e5e5e5;display:block;top:0;right:0;bottom:0;left:auto;width:1px;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.am-modal-button--horizontal:last-child::after {display:none}.am-modal-close {position:absolute;display:block;right:0;top:0;height:44px;width:44px;text-align:center;line-height:44px}.am-modal-button-active,.am-modal-close-active,.am-modal-footer-active {background-color:rgba(37,39,40,.05)}.am-modal-document-advice .am-modal {margin-top:-38px;padding-top:0;width:auto}.am-modal-document-advice .am-modal-content {padding:0;border-radius:8px;overflow:hidden}.am-modal-document-advice .am-modal-body {padding:0;max-width:319px}.am-modal-document-advice .am-modal-close {bottom:-50px;top:auto;right:50%;-webkit-transform:translateX(50%);transform:translateX(50%);line-height:1;margin-top:24px;height:26px;width:26px}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "ZQ0L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("5mzs");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/popup/popup.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ZR/n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("hZKm");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/page-result/local-logoff/index",
    
    
    
    usingComponents: {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"},
    render: function () {
      return __webpack_require__("gc90");
    },
    stylesheet: function () {
      return __webpack_require__("qqx9");
    }
  });
  
  

/***/ }),

/***/ "ZRlX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("hZKm");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/page-result/payment/index",
    
    
    
    usingComponents: {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"},
    render: function () {
      return __webpack_require__("WIiS");
    },
    stylesheet: function () {
      return __webpack_require__("E8K0");
    }
  });
  
  

/***/ }),

/***/ "Zg0C":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      Button,
      {
        type: "primary", onTap: $getEventHandler(this, "watchShake")
      },
      (0, _toString2.default)("绑定摇一摇，点击 Shake 按钮看效果")
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "ZloM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "Zyd+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("o8kU");
/* harmony import */ var M_2_ = __webpack_require__("HjtI");
/* harmony import */ var M_3_ = __webpack_require__("Bd6L");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/verify-code/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "a/Qv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("o8kU");
/* harmony import */ var M_2_ = __webpack_require__("+PbP");
/* harmony import */ var M_3_ = __webpack_require__("KROL");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/notice/notice.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "a2Ge":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var Badge_ = $getComponentClass("/node_modules/mini-ali-ui/es/badge/index");
var Badge = Badge_ || (0, _EmptyComponentFactory2.default)("badge");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");


var $templates = {};

var _ref = _react2.default.createElement(View, {
  slot: "inner", style: "height: 24px; width: 24px; background-color: #ddd;"
});

function render(data) {
  var _this = this;

  return (0, _createRoot2.default)([_react2.default.createElement(
    View,
    null,
    (0, _iterate2.default)(data['items'], function (item, index) {
      return _react2.default.createElement(
        View,
        {
          className: "list-like", index: index, key: "items-" + index
        },
        _react2.default.createElement(
          View,
          null,
          (0, _getLooseDataMember2.default)([item, "isWrap"]) ? _react2.default.createElement(
            Badge,
            {
              text: (0, _getLooseDataMember2.default)([item, "text"]), dot: (0, _getLooseDataMember2.default)([item, "dot"]), $isCustomComponent: _this.$isCustomComponent, __tag: 'badge'
            },
            _ref
          ) : null,
          _react2.default.createElement(
            Text,
            {
              style: "margin-left: " + ((0, _getLooseDataMember2.default)([item, "isWrap"]) ? '12px' : '0')
            },
            (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "intro"]))
          )
        ),
        _react2.default.createElement(
          View,
          null,
          !(0, _getLooseDataMember2.default)([item, "isWrap"]) ? _react2.default.createElement(Badge, {
            text: (0, _getLooseDataMember2.default)([item, "text"]), dot: (0, _getLooseDataMember2.default)([item, "dot"]), overflowCount: (0, _getLooseDataMember2.default)([item, "overflowCount"]), withArrow: (0, _getLooseDataMember2.default)([item, "withArrow"]), direction: (0, _getLooseDataMember2.default)([item, "direction"]), $isCustomComponent: _this.$isCustomComponent, __tag: 'badge'
          }) : null
        )
      );
    })
  ), _react2.default.createElement(
    View,
    {
      style: "\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  background-color: #333;\n  color: #f8f8f8;"
    },
    (0, _toString2.default)("深色底时，stroke 可设为 true"),
    _react2.default.createElement(Badge, {
      text: "深色底时加描边", stroke: true, withArrow: true, direction: "left", $isCustomComponent: this.$isCustomComponent, __tag: 'badge'
    })
  )]);
};
module.exports = exports['default'];

/***/ }),

/***/ "a6EI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var Button_ = $getComponentClass("/node_modules/mini-ali-ui/es/button/index");
var Button = Button_ || (0, _EmptyComponentFactory2.default)("button");

var Input = _afAppx.Input || (0, _EmptyComponentFactory2.default)("input");

var RadioGroup = _afAppx.RadioGroup || (0, _EmptyComponentFactory2.default)("radio-group");

var Label = _afAppx.Label || (0, _EmptyComponentFactory2.default)("label");
var Radio_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-radio/index");
var Radio = Radio_ || (0, _EmptyComponentFactory2.default)("radio");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");
var Checkbox_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-checkbox/index");
var Checkbox = Checkbox_ || (0, _EmptyComponentFactory2.default)("checkbox");


var $templates = {};
function render(data) {
  var _this = this;

  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "container"
    },
    _react2.default.createElement(
      Button,
      {
        onTap: $getComponentEventHandler(this, "onTest"), showLoading: data['showLoading'], dataName: data['dataName'], type: data['type'], subtitle: data['subtitle'], disabled: data['disabled'], shape: data['shape'], capsuleSize: data['capsuleSize'], capsuleMinWidth: data['capsuleMinWidth'], $isCustomComponent: this.$isCustomComponent, __tag: 'button'
      },
      (0, _toString2.default)(data['title'])
    ),
    _react2.default.createElement(
      View,
      {
        className: "title"
      },
      (0, _toString2.default)("主标题")
    ),
    _react2.default.createElement(Input, {
      value: data['title'], onInput: $getEventHandler(this, "titleChange"), className: "inputItem"
    }),
    _react2.default.createElement(
      View,
      {
        className: "title"
      },
      (0, _toString2.default)("副标题")
    ),
    _react2.default.createElement(Input, {
      value: data['subtitle'], onInput: $getEventHandler(this, "subtitleChange"), className: "inputItem"
    }),
    _react2.default.createElement(
      View,
      {
        className: "title"
      },
      (0, _toString2.default)("按钮类型")
    ),
    _react2.default.createElement(
      RadioGroup,
      {
        className: "radio-group", onChange: $getEventHandler(this, "typeChange"), name: "type"
      },
      (0, _iterate2.default)(data['types'], function (item, index) {
        return _react2.default.createElement(
          Label,
          {
            className: "radio", key: "label-" + index
          },
          _react2.default.createElement(Radio, {
            value: (0, _getLooseDataMember2.default)([item, "name"]), checked: (0, _getLooseDataMember2.default)([item, "checked"]), $isCustomComponent: _this.$isCustomComponent, __tag: 'radio'
          }),
          _react2.default.createElement(
            Text,
            {
              className: "radio-text"
            },
            (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "value"]))
          )
        );
      })
    ),
    _react2.default.createElement(
      View,
      {
        className: "title"
      },
      (0, _toString2.default)("形状")
    ),
    _react2.default.createElement(
      RadioGroup,
      {
        className: "radio-group", onChange: $getEventHandler(this, "shapeChange"), name: "shape"
      },
      (0, _iterate2.default)(data['shapes'], function (item, index) {
        return _react2.default.createElement(
          Label,
          {
            className: "radio", key: "label-" + index
          },
          _react2.default.createElement(Radio, {
            value: (0, _getLooseDataMember2.default)([item, "name"]), checked: (0, _getLooseDataMember2.default)([item, "checked"]), $isCustomComponent: _this.$isCustomComponent, __tag: 'radio'
          }),
          _react2.default.createElement(
            Text,
            {
              className: "radio-text"
            },
            (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "value"]))
          )
        );
      })
    ),
    _react2.default.createElement(
      View,
      {
        className: "title"
      },
      (0, _toString2.default)("胶囊按钮大小")
    ),
    _react2.default.createElement(
      RadioGroup,
      {
        className: "radio-group", onChange: $getEventHandler(this, "sizeChange"), name: "size"
      },
      (0, _iterate2.default)(data['capsuleSizes'], function (item, index) {
        return _react2.default.createElement(
          Label,
          {
            className: "radio", key: "label-" + index
          },
          _react2.default.createElement(Radio, {
            value: (0, _getLooseDataMember2.default)([item, "name"]), checked: (0, _getLooseDataMember2.default)([item, "checked"]), $isCustomComponent: _this.$isCustomComponent, __tag: 'radio'
          }),
          _react2.default.createElement(
            Text,
            {
              className: "radio-text"
            },
            (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "value"]))
          )
        );
      })
    ),
    _react2.default.createElement(
      View,
      {
        className: "changeItem"
      },
      _react2.default.createElement(Checkbox, {
        onChange: $getComponentEventHandler(this, "onDisableChange"), id: "disabled__", $isCustomComponent: this.$isCustomComponent, __tag: 'checkbox'
      }),
      _react2.default.createElement(
        Label,
        {
          'for': "disabled__", style: "margin-left: 8rpx;"
        },
        (0, _toString2.default)("是否禁用")
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "changeItem"
      },
      _react2.default.createElement(Checkbox, {
        onChange: $getComponentEventHandler(this, "onMinWidthChange"), id: "miniBtn__", $isCustomComponent: this.$isCustomComponent, __tag: 'checkbox'
      }),
      _react2.default.createElement(
        Label,
        {
          'for': "miniBtn__", style: "margin-left: 8rpx;"
        },
        (0, _toString2.default)("是否限制胶囊按钮最小宽度")
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "changeItem"
      },
      _react2.default.createElement(Checkbox, {
        onChange: $getComponentEventHandler(this, "onLoadingChange"), id: "loading__", $isCustomComponent: this.$isCustomComponent, __tag: 'checkbox'
      }),
      _react2.default.createElement(
        Label,
        {
          'for': "loading__", style: "margin-left: 8rpx;"
        },
        (0, _toString2.default)("是否显示 loading")
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "aA1a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("GfNJ");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/alphabet/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "aAmk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("Qc4y");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/progress/progress.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "aCvW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("/XTH");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/grid/4/index",
    
    
    
    usingComponents: {"grid":"/node_modules/mini-ali-ui/es/grid/index"},
    render: function () {
      return __webpack_require__("YNu+");
    },
    stylesheet: function () {
      return __webpack_require__("XRCa");
    }
  });
  
  

/***/ }),

/***/ "aFVz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("cXuR");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/guide/guide.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "aL+I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("h0l4");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/navigator/navigator.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "aNxG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("hZKm");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/page-result/redpacket/index",
    
    
    
    usingComponents: {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"},
    render: function () {
      return __webpack_require__("pDAP");
    },
    stylesheet: function () {
      return __webpack_require__("myXe");
    }
  });
  
  

/***/ }),

/***/ "aUGS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("r5Gr");
/* harmony import */ var M_1_ = __webpack_require__("qGUU");
/* harmony import */ var M_2_ = __webpack_require__("ju+b");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

    
  
  Object(M_2_["Page"])({
    pagePath: "page/component/popover/popover",
    
    
    
    usingComponents: {"popover":"/node_modules/mini-ali-ui/es/popover/index","popover-item":"/node_modules/mini-ali-ui/es/popover/popover-item/index"},
    render: function () {
      return __webpack_require__("M5EV");
    },
    stylesheet: function () {
      return __webpack_require__("hifH");
    }
  });
  
  

/***/ }),

/***/ "acKC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Input = _afAppx.Input || (0, _EmptyComponentFactory2.default)("input");
var AmIcon_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-icon/index");
var AmIcon = AmIcon_ || (0, _EmptyComponentFactory2.default)("am-icon");


var $templates = {};

var _ref = _react2.default.createElement(View, {
  className: "am-input-line-bottom"
});

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "am-input-item " + (data['last'] ? 'last' : '') + " " + data['className']
    },
    _react2.default.createElement(
      View,
      {
        className: "am-input-line"
      },
      _react2.default.createElement(
        View,
        {
          className: "am-input-layer " + (data['layer'] === 'vertical' ? 'am-input-layer-vertical' : 'am-input-layer-normal')
        },
        (0, _getLooseDataMember2.default)([data['$slots'], "$default"]) ? _react2.default.createElement(
          View,
          {
            className: "am-input-label " + data['labelCls']
          },
          (0, _renderSlot2.default)(data, "$default", null)
        ) : null,
        _react2.default.createElement(Input, {
          enableNative: data['enableNative'], syncInput: data['syncInput'], className: "am-input-content " + data['inputCls'], value: data['value'], name: data['name'], type: data['type'], password: data['password'], placeholder: data['placeholder'], placeholderClass: "am-input-placeholder-base " + data['placeholderClass'], placeholderStyle: data['placeholderStyle'], disabled: data['disabled'], maxlength: data['maxlength'], focus: data['focus'], onInput: $getEventHandler(this, "onInput"), onConfirm: $getEventHandler(this, "onConfirm"), onFocus: $getEventHandler(this, "onFocus"), onBlur: $getEventHandler(this, "onBlur"), controlled: data['controlled']
        })
      ),
      data['clear'] ? _react2.default.createElement(
        View,
        {
          className: "am-input-clear " + (data['clear'] && (0, _getLooseDataMember2.default)([data['value'], "length"]) > 0 && !data['disabled'] && data['_focus'] ? 'show' : 'hidden'), onTap: $getEventHandler(this, "onClear")
        },
        _react2.default.createElement(AmIcon, {
          size: "18", className: "am-input-clear-icon", type: "close_", color: "#ccc", $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
        })
      ) : null,
      (0, _getLooseDataMember2.default)([data['$slots'], "extra"]) ? _react2.default.createElement(
        View,
        {
          className: "am-input-item-extra"
        },
        (0, _renderSlot2.default)(data, "extra", null)
      ) : null,
      _ref
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "adb0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("VexH");
/* harmony import */ var M_2_ = __webpack_require__("tj4d");
/* harmony import */ var M_3_ = __webpack_require__("Wjie");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/filter/single_1/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "aePz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("hZKm");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/page-result/local-error/index",
    
    
    
    usingComponents: {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"},
    render: function () {
      return __webpack_require__("M9SO");
    },
    stylesheet: function () {
      return __webpack_require__("PLSW");
    }
  });
  
  

/***/ }),

/***/ "aiUx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("WWGm");
/* harmony import */ var M_2_ = __webpack_require__("3ZlR");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr-train-ticket/ocr-train-ticket.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "avCZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "am-collapse " + data['className'] + " am-collapse-container-" + data['id']
    },
    (0, _renderSlot2.default)(data, "$default", null)
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "b/Ay":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("yclZ");
/* harmony import */ var M_1_ = __webpack_require__("5AAy");
/* harmony import */ var M_2_ = __webpack_require__("ju+b");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

    
  
  M_2_["WorkerComponent"] && Object(M_2_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/message/index",
    
    
    usingComponents: {"button":"/node_modules/mini-ali-ui/es/button/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"},
    render: function () {
      return __webpack_require__("q8Xj");
    },
  });
  
  

/***/ }),

/***/ "b0+5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Form = _afAppx.Form || (0, _EmptyComponentFactory2.default)("form");

var Slider = _afAppx.Slider || (0, _EmptyComponentFactory2.default)("slider");

var Switch = _afAppx.Switch || (0, _EmptyComponentFactory2.default)("switch");

var Input = _afAppx.Input || (0, _EmptyComponentFactory2.default)("input");

var RadioGroup = _afAppx.RadioGroup || (0, _EmptyComponentFactory2.default)("radio-group");

var Label = _afAppx.Label || (0, _EmptyComponentFactory2.default)("label");

var Radio = _afAppx.Radio || (0, _EmptyComponentFactory2.default)("radio");

var CheckboxGroup = _afAppx.CheckboxGroup || (0, _EmptyComponentFactory2.default)("checkbox-group");

var Checkbox = _afAppx.Checkbox || (0, _EmptyComponentFactory2.default)("checkbox");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};

var _ref = _react2.default.createElement(
  View,
  {
    className: "page-section-demo"
  },
  _react2.default.createElement(Slider, {
    value: "80", name: "slider", showValue: true
  })
);

var _ref2 = _react2.default.createElement(
  View,
  {
    className: "form-row-content", style: "text-align: right"
  },
  _react2.default.createElement(Switch, {
    name: "switch"
  })
);

var _ref3 = _react2.default.createElement(View, {
  className: "form-line"
});

var _ref4 = _react2.default.createElement(
  View,
  {
    className: "form-row-content"
  },
  _react2.default.createElement(Input, {
    name: "input", className: "input", placeholder: "input something"
  })
);

var _ref5 = _react2.default.createElement(Radio, {
  value: "radio1"
});

var _ref6 = _react2.default.createElement(Radio, {
  value: "radio2"
});

var _ref7 = _react2.default.createElement(Checkbox, {
  value: "checkbox1"
});

var _ref8 = _react2.default.createElement(Checkbox, {
  value: "checkbox2"
});

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("表单")
    ),
    _react2.default.createElement(
      Form,
      {
        onSubmit: $getEventHandler(this, "onSubmit"), onReset: $getEventHandler(this, "onReset")
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section"
        },
        _react2.default.createElement(
          View,
          {
            className: "page-section-title"
          },
          (0, _toString2.default)("Slider")
        ),
        _ref
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section"
        },
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("Switch")
          ),
          _ref2
        ),
        _ref3,
        _react2.default.createElement(
          View,
          {
            className: "form-row"
          },
          _react2.default.createElement(
            View,
            {
              className: "form-row-label"
            },
            (0, _toString2.default)("Input")
          ),
          _ref4
        )
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section"
        },
        _react2.default.createElement(
          View,
          {
            className: "page-section-title"
          },
          (0, _toString2.default)("Radio")
        ),
        _react2.default.createElement(
          View,
          {
            className: "page-section-demo"
          },
          _react2.default.createElement(
            RadioGroup,
            {
              name: "radio-group"
            },
            _react2.default.createElement(
              Label,
              null,
              _ref5,
              (0, _toString2.default)("radio1")
            ),
            _react2.default.createElement(
              Label,
              null,
              _ref6,
              (0, _toString2.default)("radio2")
            )
          )
        )
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section"
        },
        _react2.default.createElement(
          View,
          {
            className: "page-section-title"
          },
          (0, _toString2.default)("Checkbox")
        ),
        _react2.default.createElement(
          View,
          {
            className: "page-section-demo"
          },
          _react2.default.createElement(
            CheckboxGroup,
            {
              name: "checkbox"
            },
            _react2.default.createElement(
              Label,
              null,
              _ref7,
              (0, _toString2.default)("checkbox1")
            ),
            _react2.default.createElement(
              Label,
              null,
              _ref8,
              (0, _toString2.default)("checkbox2")
            )
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "page-section-btns"
          },
          _react2.default.createElement(
            View,
            null,
            _react2.default.createElement(
              Button,
              {
                type: "ghost", size: "mini", formType: "reset"
              },
              (0, _toString2.default)("Reset")
            )
          ),
          _react2.default.createElement(
            View,
            null,
            _react2.default.createElement(
              Button,
              {
                type: "primary", size: "mini", formType: "submit"
              },
              (0, _toString2.default)("Submit")
            )
          )
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "b5iv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("4mcr");
/* harmony import */ var M_2_ = __webpack_require__("JGVg");
/* harmony import */ var M_3_ = __webpack_require__("qgau");
/* harmony import */ var M_4_ = __webpack_require__("915Y");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/local-busy/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "bBKV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var AmIcon_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-icon/index");
var AmIcon = AmIcon_ || (0, _EmptyComponentFactory2.default)("am-icon");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "am-popover-item " + data['className'], hoverClass: "am-popover-item-hover", hoverStartTime: "20", hoverStayTime: "20", onTap: $getEventHandler(this, "onItemClick")
    },
    _react2.default.createElement(
      View,
      {
        className: "am-popover-item-wrapper"
      },
      data['iconType'] ? _react2.default.createElement(
        View,
        {
          className: "am-popover-item-icon-holder am-popover-item-ver-center"
        },
        _react2.default.createElement(AmIcon, {
          type: data['iconType'], size: "22", $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
        })
      ) : null,
      _react2.default.createElement(
        View,
        {
          className: "am-popover-item-slot-holder am-popover-item-ver-center"
        },
        (0, _renderSlot2.default)(data, "$default", null)
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "bF0z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("/cyv");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/canvas/canvas.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "bIyI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("+JBi");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/get-title-color/get-title-color.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "bJ1U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/navigator/navigate.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "bKiF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("4mcr");
/* harmony import */ var M_2_ = __webpack_require__("Fh/U");
/* harmony import */ var M_3_ = __webpack_require__("vxXc");
/* harmony import */ var M_4_ = __webpack_require__("o8kU");
/* harmony import */ var M_5_ = __webpack_require__("D5gq");
/* harmony import */ var M_6_ = __webpack_require__("uGW+");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/page-result.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  
  stylesheet.imports(M_5_["default"]);
  
  stylesheet.imports(M_6_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "bNz3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("uvfw");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/video/video.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "bUA4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-stepper-content {display:-webkit-box;display:-webkit-flex;display:flex;position:relative;height:24px;height:var(--am-stepper-height,24px);overflow:hidden;font-size:15px;border:1px solid #eee;border:var(--am-stepper-borderWidth,1px) solid var(--am-stepper-borderColor,#eee);background-color:#fff;background-color:var(--am-stepper-bgc,#fff);border-radius:2px;border-radius:var(--am-stepper-borderRadius,2px);box-sizing:border-box}.am-stepper-input {height:24px;height:var(--am-stepper-input-size,24px);padding:0;margin:0 8px;margin:0 var(--am-stepper-input-marginLR,v-spacing-standard);line-height:24px;line-height:var(--am-stepper-input-size,24px);text-align:center;font-size:15px;font-size:var(--am-stepper-input-fontSize,15px);color:#333;color:var(--am-stepper-input-color,#333);border:0 none;background-color:transparent;-webkit-transform:translate(0,-1px);transform:translate(0,-1px)}.am-stepper-input-hide {visibility:hidden}.am-stepper-option {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 24px;flex:0 0 24px;-webkit-flex:0 0 var(--am-stepper-btn-size,24px);flex:0 0 var(--am-stepper-btn-size,24px);height:24px;height:var(--am-stepper-btn-size,24px);-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border:1px solid #eee;border:var(--am-stepper-borderWidth,1px) solid var(--am-stepper-borderColor,#eee);border-radius:2px;border-radius:var(--am-stepper-borderRadius,2px);box-sizing:border-box}.am-stepper-reduce {position:relative;-webkit-transform:translate(-1px,-1px);transform:translate(-1px,-1px)}.am-stepper-reduce::before {content:\"\";display:inline-block;width:8px;width:var(--am-stepper-btn-reduce,8px);height:1px;overflow:hidden;background-color:#1677ff;background-color:var(--am-stepper-btn-color,#1677ff);border-radius:50vh}.am-stepper-add {-webkit-transform:translate(1px,-1px);transform:translate(1px,-1px)}.am-stepper-add .am-icon {font-size:12px;font-size:var(--am-stepper-btn-add,12px);color:#1677ff;color:var(--am-stepper-btn-color,#1677ff)}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "bUAQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/swiper/swiper",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("6Gl3");
    },
    stylesheet: function () {
      return __webpack_require__("LCQ5");
    }
  });
  
  

/***/ }),

/***/ "bVpi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("1bcJ");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/tag/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ba7r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("mY68");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/choose-location/choose-location.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "bbHx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var PageResult_ = $getComponentClass("/node_modules/mini-ali-ui/es/page-result/index");
var PageResult = PageResult_ || (0, _EmptyComponentFactory2.default)("page-result");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _react2.default.createElement(PageResult, {
      type: "logoff", $isCustomComponent: this.$isCustomComponent, __tag: 'page-result'
    })
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "bbXl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "be5n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("7J34");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/date-picker/date-picker.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "bebP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var CheckboxGroup = _afAppx.CheckboxGroup || (0, _EmptyComponentFactory2.default)("checkbox-group");

var Label = _afAppx.Label || (0, _EmptyComponentFactory2.default)("label");

var Checkbox = _afAppx.Checkbox || (0, _EmptyComponentFactory2.default)("checkbox");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");

var RadioGroup = _afAppx.RadioGroup || (0, _EmptyComponentFactory2.default)("radio-group");

var Radio = _afAppx.Radio || (0, _EmptyComponentFactory2.default)("radio");


var $templates = {};

var _ref = _react2.default.createElement(Checkbox, {
  value: "AngularJS"
});

var _ref2 = _react2.default.createElement(Checkbox, {
  value: "React"
});

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("Checkbox")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          CheckboxGroup,
          null,
          _react2.default.createElement(
            View,
            null,
            _react2.default.createElement(
              Label,
              null,
              _ref,
              _react2.default.createElement(
                Text,
                null,
                (0, _toString2.default)("AngularJS")
              )
            )
          ),
          _react2.default.createElement(
            View,
            null,
            _react2.default.createElement(
              Label,
              null,
              _ref2,
              _react2.default.createElement(
                Text,
                null,
                (0, _toString2.default)("React")
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("Radio")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          RadioGroup,
          null,
          _react2.default.createElement(
            View,
            null,
            _react2.default.createElement(Radio, {
              id: "AngularJS", value: "AngularJS", ref: $getRefHandler(this, "AngularJS")
            }),
            _react2.default.createElement(
              Label,
              {
                'for': "AngularJS"
              },
              (0, _toString2.default)("AngularJS")
            )
          ),
          _react2.default.createElement(
            View,
            null,
            _react2.default.createElement(Radio, {
              id: "React", value: "React", ref: $getRefHandler(this, "React")
            }),
            _react2.default.createElement(
              Label,
              {
                'for': "React"
              },
              (0, _toString2.default)("React")
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("label中有多个 Checkbox ，点击后只选中一个")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          Label,
          null,
          _react2.default.createElement(
            Checkbox,
            null,
            (0, _toString2.default)("选中我")
          ),
          _react2.default.createElement(
            Checkbox,
            null,
            (0, _toString2.default)("选不中")
          ),
          _react2.default.createElement(
            Checkbox,
            null,
            (0, _toString2.default)("选不中")
          ),
          _react2.default.createElement(
            Checkbox,
            null,
            (0, _toString2.default)("选不中")
          ),
          _react2.default.createElement(
            View,
            null,
            _react2.default.createElement(
              Text,
              null,
              (0, _toString2.default)("Click Me")
            )
          )
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "bjbW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("4mcr");
/* harmony import */ var M_2_ = __webpack_require__("JGVg");
/* harmony import */ var M_3_ = __webpack_require__("o8kU");
/* harmony import */ var M_4_ = __webpack_require__("zrY6");
/* harmony import */ var M_5_ = __webpack_require__("Qwd5");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/modal/modal.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  
  stylesheet.imports(M_5_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "bn83":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var PageResult_ = $getComponentClass("/node_modules/mini-ali-ui/es/page-result/index");
var PageResult = PageResult_ || (0, _EmptyComponentFactory2.default)("page-result");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _react2.default.createElement(PageResult, {
      type: "error", title: "页面遇到一些小问题", brief: "耽误您的时候，我们深感歉意", footer: data['footer'], $isCustomComponent: this.$isCustomComponent, __tag: 'page-result'
    })
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "bx1Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/animation/animation",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("cb7A");
    },
    stylesheet: function () {
      return __webpack_require__("fXHO");
    }
  });
  
  

/***/ }),

/***/ "bywP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  M_0_["WorkerComponent"] && Object(M_0_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/list/auto-size-img/index",
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("sHRk");
    },
  });
  
  

/***/ }),

/***/ "c/LF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("APk3");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/webview/webview.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = globalThis.React;

/***/ }),

/***/ "cIJn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");
var Modal_ = $getComponentClass("/node_modules/mini-ali-ui/es/modal/index");
var Modal = Modal_ || (0, _EmptyComponentFactory2.default)("modal");

var Image = _afAppx.Image || (0, _EmptyComponentFactory2.default)("image");

var Slider = _afAppx.Slider || (0, _EmptyComponentFactory2.default)("slider");


var $templates = {};

var _ref = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref2 = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref3 = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref4 = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref5 = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref6 = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref7 = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref8 = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref9 = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref10 = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref11 = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref12 = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref13 = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref14 = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref15 = _react2.default.createElement(Image, {
  mode: "widthFix", style: "width: 100%;", src: "https://tfsimg.alipay.com/images/mobilecodec/TB1JjWmXkyEDuNjme6tXXXIKXXa"
});

var _ref16 = _react2.default.createElement(
  View,
  {
    style: "display: flex; height: 465px; width: 319px;"
  },
  _react2.default.createElement(Image, {
    style: "height: 465px;width: 319px;", src: "https://gw.alipayobjects.com/zos/rmsportal/vJzAWQLgeDLGOMKiIgZt.png"
  })
);

var _ref17 = _react2.default.createElement(
  View,
  {
    style: "display: flex; width: 270px; height: 350px;"
  },
  _react2.default.createElement(Image, {
    style: "width: 270px;height: 350px;", src: "https://gw.alipayobjects.com/zos/rmsportal/vJzAWQLgeDLGOMKiIgZt.png"
  })
);

var _ref18 = _react2.default.createElement(
  View,
  {
    style: "margin-top:10px;padding-bottom:10px"
  },
  _react2.default.createElement(Slider, {
    value: "5", step: "5"
  })
);

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _ref,
    _react2.default.createElement(
      Button,
      {
        onTap: $getEventHandler(this, "openModal21"), style: "margin: 0 10px;"
      },
      (0, _toString2.default)("带图弹窗")
    ),
    _ref2,
    _react2.default.createElement(
      Button,
      {
        onTap: $getEventHandler(this, "openModal22"), style: "margin: 0 10px;"
      },
      (0, _toString2.default)("带图弹窗-小图")
    ),
    _ref3,
    _react2.default.createElement(
      Button,
      {
        onTap: $getEventHandler(this, "openModal222"), style: "margin: 0 10px;"
      },
      (0, _toString2.default)("带图弹窗-中图")
    ),
    _ref4,
    _react2.default.createElement(
      Button,
      {
        onTap: $getEventHandler(this, "openModal2"), style: "margin: 0 10px;"
      },
      (0, _toString2.default)("带图弹窗-大图")
    ),
    _ref5,
    _react2.default.createElement(
      Button,
      {
        onTap: $getEventHandler(this, "openModal23"), style: "margin: 0 10px;"
      },
      (0, _toString2.default)("带图弹窗-关闭icon")
    ),
    _ref6,
    _react2.default.createElement(
      Button,
      {
        onTap: $getEventHandler(this, "openModal"), style: "margin: 0 10px;"
      },
      (0, _toString2.default)("通用modal")
    ),
    _ref7,
    _react2.default.createElement(
      Button,
      {
        onTap: $getEventHandler(this, "openModal3"), style: "margin: 0 10px;"
      },
      (0, _toString2.default)("运营活动弹窗-大")
    ),
    _ref8,
    _react2.default.createElement(
      Button,
      {
        onTap: $getEventHandler(this, "openModal4"), style: "margin: 0 10px;"
      },
      (0, _toString2.default)("运营活动弹窗-小")
    ),
    _ref9,
    _react2.default.createElement(
      Button,
      {
        onTap: $getEventHandler(this, "openModal5"), style: "margin: 0 10px;"
      },
      (0, _toString2.default)("双按钮弹框")
    ),
    _ref10,
    _react2.default.createElement(
      Button,
      {
        onTap: $getEventHandler(this, "openModal6"), style: "margin: 0 10px;"
      },
      (0, _toString2.default)("双按钮弹框-竖排")
    ),
    _ref11,
    _react2.default.createElement(
      Button,
      {
        onTap: $getEventHandler(this, "openModal7"), style: "margin: 0 10px;"
      },
      (0, _toString2.default)("弹框自定义按钮样式")
    ),
    _ref12,
    _react2.default.createElement(
      Button,
      {
        onTap: $getEventHandler(this, "openModal8"), style: "margin: 0 10px;"
      },
      (0, _toString2.default)("三按钮弹框")
    ),
    _ref13,
    _react2.default.createElement(
      Button,
      {
        onTap: $getEventHandler(this, "openModal9"), style: "margin: 0 10px;"
      },
      (0, _toString2.default)("自定义弹框内容")
    ),
    _ref14,
    _react2.default.createElement(
      Modal,
      {
        show: data['modalOpened21'], onModalClick: $getComponentEventHandler(this, "onModalClick21"), onModalClose: $getComponentEventHandler(this, "onModalClose21"), topImage: "https://gw.alipayobjects.com/zos/rmsportal/yFeFExbGpDxvDYnKHcrs.png", $isCustomComponent: this.$isCustomComponent, __tag: 'modal'
      },
      _react2.default.createElement(
        View,
        {
          slot: "header"
        },
        (0, _toString2.default)("标题单行")
      ),
      (0, _toString2.default)("说明当前状态、提示用户解决方案，最好不要超过两行。"),
      _react2.default.createElement(
        View,
        {
          slot: "footer"
        },
        (0, _toString2.default)("我知道了")
      )
    ),
    _react2.default.createElement(
      Modal,
      {
        show: data['modalOpened23'], onModalClick: $getComponentEventHandler(this, "onModalClick23"), onModalClose: $getComponentEventHandler(this, "onModalClose23"), showClose: true, topImage: "https://gw.alipayobjects.com/zos/rmsportal/yFeFExbGpDxvDYnKHcrs.png", $isCustomComponent: this.$isCustomComponent, __tag: 'modal'
      },
      _react2.default.createElement(
        View,
        {
          slot: "header"
        },
        (0, _toString2.default)("标题单行")
      ),
      (0, _toString2.default)("说明当前状态、提示用户解决方案，最好不要超过两行。"),
      _react2.default.createElement(
        View,
        {
          slot: "footer"
        },
        (0, _toString2.default)("我知道了")
      )
    ),
    _react2.default.createElement(
      Modal,
      {
        show: data['modalOpened2'], onModalClick: $getComponentEventHandler(this, "onModalClick2"), onModalClose: $getComponentEventHandler(this, "onModalClose2"), topImage: "https://gw.alipayobjects.com/zos/rmsportal/yFeFExbGpDxvDYnKHcrs.png", topImageSize: "lg", closeType: "1", $isCustomComponent: this.$isCustomComponent, __tag: 'modal'
      },
      _react2.default.createElement(
        View,
        {
          slot: "header"
        },
        (0, _toString2.default)("标题单行")
      ),
      (0, _toString2.default)("说明当前状态、提示用户解决方案，最好不要超过两行。"),
      _react2.default.createElement(
        View,
        {
          slot: "footer"
        },
        (0, _toString2.default)("我知道了")
      )
    ),
    _react2.default.createElement(
      Modal,
      {
        show: data['modalOpened22'], onModalClick: $getComponentEventHandler(this, "onModalClick22"), onModalClose: $getComponentEventHandler(this, "onModalClose22"), topImage: "https://gw.alipayobjects.com/zos/rmsportal/yFeFExbGpDxvDYnKHcrs.png", topImageSize: "sm", $isCustomComponent: this.$isCustomComponent, __tag: 'modal'
      },
      _react2.default.createElement(
        View,
        {
          slot: "header"
        },
        (0, _toString2.default)("标题单行")
      ),
      (0, _toString2.default)("说明当前状态、提示用户解决方案，最好不要超过两行。"),
      _react2.default.createElement(
        View,
        {
          slot: "footer"
        },
        (0, _toString2.default)("我知道了")
      )
    ),
    _react2.default.createElement(
      Modal,
      {
        show: data['modalOpened222'], onModalClick: $getComponentEventHandler(this, "onModalClick222"), onModalClose: $getComponentEventHandler(this, "onModalClose222"), topImage: "https://gw.alipayobjects.com/zos/rmsportal/yFeFExbGpDxvDYnKHcrs.png", topImageSize: "md", $isCustomComponent: this.$isCustomComponent, __tag: 'modal'
      },
      _react2.default.createElement(
        View,
        {
          slot: "header"
        },
        (0, _toString2.default)("标题单行")
      ),
      (0, _toString2.default)("说明当前状态、提示用户解决方案，最好不要超过两行。"),
      _react2.default.createElement(
        View,
        {
          slot: "footer"
        },
        (0, _toString2.default)("我知道了")
      )
    ),
    _react2.default.createElement(
      Modal,
      {
        show: data['modalOpened'], onModalClick: $getComponentEventHandler(this, "onModalClick"), onModalClose: $getComponentEventHandler(this, "onModalClose"), $isCustomComponent: this.$isCustomComponent, __tag: 'modal'
      },
      _react2.default.createElement(
        View,
        {
          style: "margin: 20px 0 10px 0;"
        },
        (0, _toString2.default)("让员工用支付宝扫一扫，添加为店员")
      ),
      _ref15,
      (0, _toString2.default)("二维码每分钟自动更新"),
      _react2.default.createElement(
        View,
        {
          slot: "footer"
        },
        (0, _toString2.default)("我知道了")
      )
    ),
    _react2.default.createElement(
      Modal,
      {
        show: data['modalOpened3'], onModalClose: $getComponentEventHandler(this, "onModalClick3"), advice: true, $isCustomComponent: this.$isCustomComponent, __tag: 'modal'
      },
      _ref16
    ),
    _react2.default.createElement(
      Modal,
      {
        show: data['modalOpened4'], onModalClose: $getComponentEventHandler(this, "onModalClick4"), advice: true, $isCustomComponent: this.$isCustomComponent, __tag: 'modal'
      },
      _ref17
    ),
    _react2.default.createElement(
      Modal,
      {
        show: data['modalOpened5'], showClose: false, onButtonClick: $getComponentEventHandler(this, "onButtonClick5"), buttons: data['buttons5'], $isCustomComponent: this.$isCustomComponent, __tag: 'modal'
      },
      _react2.default.createElement(
        View,
        {
          slot: "header"
        },
        (0, _toString2.default)("标题单行")
      ),
      (0, _toString2.default)("说明当前状态、提示用户解决方案，最好不要超过两行。")
    ),
    _react2.default.createElement(
      Modal,
      {
        show: data['modalOpened6'], showClose: false, onButtonClick: $getComponentEventHandler(this, "onButtonClick6"), buttonsLayout: "vertical", buttons: data['buttons6'], $isCustomComponent: this.$isCustomComponent, __tag: 'modal'
      },
      _react2.default.createElement(
        View,
        {
          slot: "header"
        },
        (0, _toString2.default)("标题单行")
      ),
      (0, _toString2.default)("说明当前状态、提示用户解决方案，最好不要超过两行。")
    ),
    _react2.default.createElement(
      Modal,
      {
        show: data['modalOpened7'], onModalClose: $getComponentEventHandler(this, "onModalClose7"), onButtonClick: $getComponentEventHandler(this, "onButtonClick7"), buttons: data['buttons7'], topImage: "https://gw.alipayobjects.com/zos/rmsportal/yFeFExbGpDxvDYnKHcrs.png", topImageSize: "lg", $isCustomComponent: this.$isCustomComponent, __tag: 'modal'
      },
      _react2.default.createElement(
        View,
        {
          slot: "header"
        },
        (0, _toString2.default)("标题单行")
      ),
      (0, _toString2.default)("说明当前状态、提示用户解决方案，最好不要超过两行。")
    ),
    _react2.default.createElement(
      Modal,
      {
        show: data['modalOpened8'], showClose: false, onButtonClick: $getComponentEventHandler(this, "onButtonClick8"), buttons: data['buttons8'], $isCustomComponent: this.$isCustomComponent, __tag: 'modal'
      },
      _react2.default.createElement(
        View,
        {
          slot: "header"
        },
        (0, _toString2.default)("标题单行")
      ),
      (0, _toString2.default)("说明当前状态、提示用户解决方案，最好不要超过两行。")
    ),
    _react2.default.createElement(
      Modal,
      {
        show: data['modalOpened9'], showClose: false, $isCustomComponent: this.$isCustomComponent, __tag: 'modal'
      },
      _react2.default.createElement(
        View,
        {
          slot: "header"
        },
        (0, _toString2.default)("标题单行")
      ),
      _react2.default.createElement(
        View,
        null,
        (0, _toString2.default)("说明当前状态、提示用户解决方案，最好不要超过两行。")
      ),
      _ref18,
      _react2.default.createElement(
        Button,
        {
          type: "primary", onTap: $getEventHandler(this, "onModalClose9")
        },
        (0, _toString2.default)("主操作")
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "cXuR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("35mS");
/* harmony import */ var M_2_ = __webpack_require__("N+80");
/* harmony import */ var M_3_ = __webpack_require__("4mcr");
/* harmony import */ var M_4_ = __webpack_require__("JGVg");
/* harmony import */ var M_5_ = __webpack_require__("ABdi");
/* harmony import */ var M_6_ = __webpack_require__("Qa0D");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/guide/guide.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  
  stylesheet.imports(M_5_["default"]);
  
  stylesheet.imports(M_6_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "cYrN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("1dNF");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/websocket/websocket.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "cb7A":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("动画 API")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("my.createAnimation")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(View, {
          className: "animation-element", animation: data['animation']
        })
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-btns"
        },
        _react2.default.createElement(
          View,
          {
            type: "primary", onTap: $getEventHandler(this, "rotate")
          },
          (0, _toString2.default)("旋转")
        ),
        _react2.default.createElement(
          View,
          {
            type: "primary", onTap: $getEventHandler(this, "scale")
          },
          (0, _toString2.default)("缩放")
        ),
        _react2.default.createElement(
          View,
          {
            type: "primary", onTap: $getEventHandler(this, "translate")
          },
          (0, _toString2.default)("移动")
        )
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-btns"
        },
        _react2.default.createElement(
          View,
          {
            type: "primary", onTap: $getEventHandler(this, "skew")
          },
          (0, _toString2.default)("倾斜")
        ),
        _react2.default.createElement(
          View,
          {
            type: "primary", onTap: $getEventHandler(this, "rotateAndScale")
          },
          (0, _toString2.default)("旋转并缩放")
        ),
        _react2.default.createElement(
          View,
          {
            type: "primary", onTap: $getEventHandler(this, "rotateThenScale")
          },
          (0, _toString2.default)("旋转后缩放")
        )
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-btns"
        },
        _react2.default.createElement(
          View,
          {
            type: "primary", onTap: $getEventHandler(this, "all")
          },
          (0, _toString2.default)("同时展示全部")
        ),
        _react2.default.createElement(
          View,
          {
            type: "primary", onTap: $getEventHandler(this, "allInQueue")
          },
          (0, _toString2.default)("顺序展示全部")
        ),
        _react2.default.createElement(
          View,
          {
            type: "primary", onTap: $getEventHandler(this, "reset")
          },
          (0, _toString2.default)("还原")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "ccdJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("5AAy");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  M_1_["WorkerComponent"] && Object(M_1_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/search-bar/index",
    
    
    usingComponents: {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"},
    render: function () {
      return __webpack_require__("HR0s");
    },
  });
  
  

/***/ }),

/***/ "cjel":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("GoZH");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/container/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ck4Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("HceZ");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/request/request.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "clA1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "clhz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/choose-city/choose-city.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "cnLF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var LongPassword_ = $getComponentClass("/node_modules/mini-ali-ui/es/long-password/index");
var LongPassword = LongPassword_ || (0, _EmptyComponentFactory2.default)("long-password");


var $templates = {};

var _ref = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref2 = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _ref,
    _react2.default.createElement(
      View,
      {
        style: "padding: 0 10px;"
      },
      (0, _toString2.default)("长密码框")
    ),
    _ref2,
    _react2.default.createElement(LongPassword, {
      placeholder: "", value: data['longPassword'], clear: true, onInput: $getComponentEventHandler(this, "onInput"), onClear: $getComponentEventHandler(this, "onClear"), $isCustomComponent: this.$isCustomComponent, __tag: 'long-password'
    })
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "cntY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");
var AmIcon_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-icon/index");
var AmIcon = AmIcon_ || (0, _EmptyComponentFactory2.default)("am-icon");


var $templates = {};

var _ref = _react2.default.createElement(View, {
  className: "am-picker-line-bottom"
});

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "am-picker-item " + (data['last'] ? 'last' : '') + " " + data['className']
    },
    _react2.default.createElement(
      View,
      {
        className: "am-picker-line"
      },
      _react2.default.createElement(
        View,
        {
          className: "am-picker-layer " + (data['layer'] === 'vertical' ? 'am-picker-layer-vertical' : 'am-picker-layer-normal'), onTap: $getEventHandler(this, "onPickerTap")
        },
        (0, _getLooseDataMember2.default)([data['$slots'], "$default"]) ? _react2.default.createElement(
          View,
          {
            className: "am-picker-label " + data['labelCls']
          },
          (0, _renderSlot2.default)(data, "$default", null)
        ) : null,
        _react2.default.createElement(
          View,
          {
            className: "am-picker-wrapper"
          },
          _react2.default.createElement(
            Text,
            {
              className: "am-picker-content am-picker-text " + data['pickerCls'] + " " + ((0, _getLooseDataMember2.default)([data['value'], "length"]) > 0 ? 'am-picker-content-value' : 'am-picker-content-placeholder')
            },
            (0, _toString2.default)((0, _getLooseDataMember2.default)([data['value'], "length"]) > 0 ? data['value'] : data['placeholder'])
          )
        )
      ),
      _react2.default.createElement(AmIcon, {
        className: "am-picker-arrow", type: "right", size: "18", color: "#ccc", $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
      }),
      (0, _renderSlot2.default)(data, "extra", null),
      _ref
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "cpFc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");
var AmIcon_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-icon/index");
var AmIcon = AmIcon_ || (0, _EmptyComponentFactory2.default)("am-icon");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "am-collapse-item " + data['className'] + " " + (data['isActive'] ? data['activeClass'] : '') + " " + (data['disabled'] ? 'am-collapse-item--disabled' : ''), key: data['id']
    },
    _react2.default.createElement(
      View,
      {
        className: "am-collapse-item-title " + data['titleClass'] + " " + (data['isActive'] ? 'title--active' : ''), onTap: $getEventHandler(this, "onCollapseTap"), 'data-key': data['id'], 'data-title': data['title'], 'data-isActive': data['isActive']
      },
      _react2.default.createElement(
        View,
        {
          className: "am-collapse-item-title-container"
        },
        _react2.default.createElement(
          View,
          {
            className: "am-collapse-item-title-text-wrapper"
          },
          (0, _renderSlot2.default)(data, "am-collapse-item-title", _react2.default.createElement(
            Text,
            null,
            (0, _toString2.default)(data['header'])
          ))
        ),
        data['showArrow'] ? _react2.default.createElement(AmIcon, {
          className: "am-collapse-item-title-arrow", type: data['isActive'] ? 'down' : 'up', $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
        }) : null
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "am-collapse-item-content-wrapper", style: "max-height: " + data['contentHeight'] + "px"
      },
      _react2.default.createElement(
        View,
        {
          className: "am-collapse-item-content am-collapse-item-content-" + data['contentId'] + " " + data['contentClass']
        },
        (0, _renderSlot2.default)(data, "$default", null)
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "czzP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("ehcY");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/contact-button/contact-button.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "d2e3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("BOSx");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/amount-input/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "d3cq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".demo-popover {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;height:400px}.demo-popover-btn {width:100px;height:100px;line-height:100px;text-align:center;background-color:#fff;border:1px solid #dddddd;border-radius:2px}.demo-popover-test-btns {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.demo-popover-test-btn {width:45%}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "d5f/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "dSOX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var Footer_ = $getComponentClass("/node_modules/mini-ali-ui/es/footer/index");
var Footer = Footer_ || (0, _EmptyComponentFactory2.default)("footer");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)([_react2.default.createElement(Footer, {
    type: (0, _getLooseDataMember2.default)([data['footerInfo1'], "type"]), content: (0, _getLooseDataMember2.default)([data['footerInfo1'], "content"]), $isCustomComponent: this.$isCustomComponent, __tag: 'footer'
  }), _react2.default.createElement(Footer, {
    type: (0, _getLooseDataMember2.default)([data['footerInfo2'], "type"]), content: (0, _getLooseDataMember2.default)([data['footerInfo2'], "content"]), extend: (0, _getLooseDataMember2.default)([data['footerInfo2'], "extend"]), $isCustomComponent: this.$isCustomComponent, __tag: 'footer'
  }), _react2.default.createElement(Footer, {
    type: (0, _getLooseDataMember2.default)([data['footerInfo3'], "type"]), content: (0, _getLooseDataMember2.default)([data['footerInfo3'], "content"]), $isCustomComponent: this.$isCustomComponent, __tag: 'footer'
  }), _react2.default.createElement(Footer, {
    type: (0, _getLooseDataMember2.default)([data['footerInfo4'], "type"]), content: (0, _getLooseDataMember2.default)([data['footerInfo4'], "content"]), extend: (0, _getLooseDataMember2.default)([data['footerInfo4'], "extend"]), onBrandTap: $getComponentEventHandler(this, "brandClick"), $isCustomComponent: this.$isCustomComponent, __tag: 'footer'
  }), _react2.default.createElement(Footer, {
    type: (0, _getLooseDataMember2.default)([data['footerInfo5'], "type"]), content: (0, _getLooseDataMember2.default)([data['footerInfo5'], "content"]), extend: (0, _getLooseDataMember2.default)([data['footerInfo5'], "extend"]), onBrandTap: $getComponentEventHandler(this, "brandClick"), $isCustomComponent: this.$isCustomComponent, __tag: 'footer'
  }), _react2.default.createElement(Footer, {
    type: (0, _getLooseDataMember2.default)([data['footerInfo6'], "type"]), content: (0, _getLooseDataMember2.default)([data['footerInfo6'], "content"]), extend: (0, _getLooseDataMember2.default)([data['footerInfo6'], "extend"]), $isCustomComponent: this.$isCustomComponent, __tag: 'footer'
  }), _react2.default.createElement(Footer, {
    type: (0, _getLooseDataMember2.default)([data['footerInfo7'], "type"]), content: (0, _getLooseDataMember2.default)([data['footerInfo7'], "content"]), footerEndColor: (0, _getLooseDataMember2.default)([data['footerInfo7'], "footerEndColor"]), $isCustomComponent: this.$isCustomComponent, __tag: 'footer'
  }), _react2.default.createElement(Footer, {
    type: (0, _getLooseDataMember2.default)([data['footerInfo8'], "type"]), $isCustomComponent: this.$isCustomComponent, __tag: 'footer'
  }), _react2.default.createElement(Footer, {
    type: (0, _getLooseDataMember2.default)([data['footerInfo8'], "type"]), content: (0, _getLooseDataMember2.default)([data['footerInfo8'], "content"]), showEndIcon: (0, _getLooseDataMember2.default)([data['footerInfo8'], "showEndIcon"]), iconSize: (0, _getLooseDataMember2.default)([data['footerInfo8'], "iconSize"]), $isCustomComponent: this.$isCustomComponent, __tag: 'footer'
  })]);
};
module.exports = exports['default'];

/***/ }),

/***/ "dSpP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("ta/J");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/rich-text/rich-text.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "dUJK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  M_0_["WorkerComponent"] && Object(M_0_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/avatar/index",
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("M3sQ");
    },
  });
  
  

/***/ }),

/***/ "dUP7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var MovableArea = _afAppx.MovableArea || (0, _EmptyComponentFactory2.default)("movable-area");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");

var MovableView = _afAppx.MovableView || (0, _EmptyComponentFactory2.default)("movable-view");


var $templates = {};
function render(data) {
  var _this = this;

  return (0, _createRoot2.default)(!data['useV2'] ? _react2.default.createElement(
    View,
    {
      className: "am-swipe " + (data['swiping'] ? 'am-swiping' : '') + " " + data['className'], style: data['swipeWidth'] ? 'width: ' + data['swipeWidth'] + ';' : ''
    },
    (0, _getLooseDataMember2.default)([data['right'], "length"]) > 0 ? _react2.default.createElement(
      View,
      {
        className: "am-swipe-right am-swipe-right-" + data['$id'] + " " + (data['borderRadius'] ? 'am-swipe-right-radius' : ''), style: (data['borderRadius'] ? 'transform: translateX(-' + data['radiusItemSpace'] + ');' : 'transform: translateX(0);') + "\n                " + (data['leftPos'] < 0 ? 'right: 0;' : 'right: 1px;')
      },
      data['borderRadius'] ? _react2.default.createElement(View, {
        style: "width: " + data['radiusItemSpace'] + ";height: 100%;"
      }) : null,
      (0, _iterate2.default)(data['right'], function (item, index) {
        return _react2.default.createElement(
          View,
          {
            className: "am-swipe-btn am-swipe-btn-" + (0, _getLooseDataMember2.default)([item, "type"]), onTap: $getEventHandler(_this, "onItemClick"), 'data-index': index, key: "swipe-item-" + index, style: ((0, _getLooseDataMember2.default)([item, "bgColor"]) ? 'background-color:' + (0, _getLooseDataMember2.default)([item, "bgColor"]) + ';' : '') + " " + ((0, _getLooseDataMember2.default)([item, "fColor"]) ? 'color: ' + (0, _getLooseDataMember2.default)([item, "fColor"]) + ';' : '')
          },
          (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "text"]))
        );
      })
    ) : null,
    _react2.default.createElement(
      View,
      {
        className: "am-swipe-content", onTap: $getEventHandler(this, "onSwipeTap"), onTouchStart: $getEventHandler(this, "onSwipeStart"), onTouchEnd: $getEventHandler(this, "onSwipeEnd"), catchTouchMove: $getEventHandler(this, "onSwipeMove"), 'data-type': "content", style: "-webkit-transform: translateX(" + data['leftPos'] + "px); transform: translateX(" + data['leftPos'] + "px);"
      },
      (0, _renderSlot2.default)(data, "$default", null)
    )
  ) : _react2.default.createElement(
    View,
    {
      className: "am-swipe am-swipe-" + data['$id'] + " " + data['className'], style: "width: " + (data['swipeWidth'] ? data['swipeWidth'] : data['viewWidth'] + 'px') + "; " + (data['height'] ? 'height: ' + data['height'] + 'px;' : 'height: auto;'), key: data['$id']
    },
    _react2.default.createElement(
      MovableArea,
      {
        className: "am-swipe-movable-area", style: (data['swipeWidth'] ? 'width: calc(' + data['swipeWidth'] + ' + ' + data['actionWidth'] + 'px);' : 'width: ' + (data['viewWidth'] + data['actionWidth']) + 'px;') + "\n          " + (data['height'] ? 'height: ' + data['height'] + 'px;' : 'height: auto;') + "\n          transform: translateX(-" + data['actionWidth'] + "px);"
      },
      (0, _getLooseDataMember2.default)([data['right'], "length"]) > 0 ? _react2.default.createElement(
        View,
        {
          className: "am-swipe-right am-swipe-right-" + data['$id'] + " " + (data['borderRadius'] ? 'am-swipe-right-radius' : ''), style: "width: " + data['cellWidth'] + "px;\n              " + (data['borderRadius'] ? 'transform: translateX(-' + data['radiusItemSpace'] + ');' : 'transform: translateX(0);') + "\n              " + (data['x'] > 0 ? 'right: 1px;' : 'right: 0;')
        },
        data['borderRadius'] ? _react2.default.createElement(View, {
          style: "width: " + data['radiusItemSpace'] + ";height: 100%;"
        }) : null,
        (0, _iterate2.default)(data['right'], function (item, index) {
          return _react2.default.createElement(
            View,
            {
              className: "am-swipe-btn am-swipe-btn-" + (0, _getLooseDataMember2.default)([item, "type"]), onTap: $getEventHandler(_this, "onItemClick"), 'data-index': index, key: "swipe-item-" + index, style: ((0, _getLooseDataMember2.default)([item, "bgColor"]) ? 'background-color:' + (0, _getLooseDataMember2.default)([item, "bgColor"]) + ';' : '') + "\n                  " + ((0, _getLooseDataMember2.default)([item, "fColor"]) ? 'color: ' + (0, _getLooseDataMember2.default)([item, "fColor"]) + ';' : '')
            },
            _react2.default.createElement(
              Text,
              {
                className: "am-swipe-btn-text"
              },
              (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "text"]))
            )
          );
        })
      ) : null,
      _react2.default.createElement(
        MovableView,
        {
          className: "am-swipe-content", 'data-type': "content", style: "width: " + (data['swipeWidth'] ? data['swipeWidth'] : data['viewWidth'] + 'px') + ";\n            " + (data['height'] ? 'height: ' + data['height'] + 'px;' : 'height: auto;') + "\n            transition: " + data['transitionVal'] + ";", onChange: $getEventHandler(this, "onChange"), onChangeEnd: $getEventHandler(this, "onChangeEnd"), onTap: $getEventHandler(this, "onSwipeTap"), onTouchStart: $getEventHandler(this, "onSwipeStart"), x: data['x'], damping: "30", friction: "5", direction: "horizontal"
        },
        _react2.default.createElement(
          View,
          {
            className: "am-swipe-movable-area-" + data['$id']
          },
          (0, _renderSlot2.default)(data, "$default", null)
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "dWwm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("dmMj");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/avatar/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "dgKb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("dpOL");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/amount-input/amount-input.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "dhjY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/rsa/rsa.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "di2j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "dir/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/storage/storage",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("Lpx+");
    },
    stylesheet: function () {
      return __webpack_require__("RWEe");
    }
  });
  
  

/***/ }),

/***/ "dlFD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Video = _afAppx.Video || (0, _EmptyComponentFactory2.default)("video");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "video-page"
    },
    _react2.default.createElement(
      View,
      {
        className: "video-contain"
      },
      _react2.default.createElement(Video, {
        src: data['src'], className: "video", id: "video", poster: "https://zos.alipayobjects.com/rmsportal/SSWkSLDrrgsLFDfsjzTZ.png", autoplay: data['autoplay'], objectFit: data['objectFit'], loop: data['loop'], showFullscreenBtn: data['showFullscreenBtn'], showCenterPlayBtn: data['showCenterPlayBtn'], onPlay: $getEventHandler(this, "onPlay"), onPause: $getEventHandler(this, "onPause"), onEnded: $getEventHandler(this, "onEnded"), onTimeUpdate: $getEventHandler(this, "onTimeUpdate"), onLoading: $getEventHandler(this, "onLoading"), onStop: $getEventHandler(this, "onStop"), enableNative: true, muted: data['muted'], ref: $getRefHandler(this, "video")
      })
    ),
    _react2.default.createElement(
      View,
      {
        className: "operation-item", style: "background-color:lightblue"
      },
      [(0, _toString2.default)("\b"), (0, _toString2.default)(data['title'])]
    ),
    _react2.default.createElement(
      View,
      {
        className: "operation-item", onTap: $getEventHandler(this, "play")
      },
      (0, _toString2.default)("播放")
    ),
    _react2.default.createElement(
      View,
      {
        className: "operation-item", onTap: $getEventHandler(this, "pause")
      },
      (0, _toString2.default)("暂停")
    ),
    _react2.default.createElement(
      View,
      {
        className: "operation-item", onTap: $getEventHandler(this, "seek")
      },
      (0, _toString2.default)("跳到15s\b播放")
    ),
    _react2.default.createElement(
      View,
      {
        className: "operation-item", onTap: $getEventHandler(this, "mute")
      },
      (0, _toString2.default)("静音")
    ),
    _react2.default.createElement(
      View,
      {
        className: "operation-item", onTap: $getEventHandler(this, "playbackRate")
      },
      (0, _toString2.default)("倍速播放")
    ),
    _react2.default.createElement(
      View,
      {
        className: "operation-item", onTap: $getEventHandler(this, "requestFullScreen")
      },
      (0, _toString2.default)("全屏")
    ),
    _react2.default.createElement(
      View,
      {
        className: "operation-item", onTap: $getEventHandler(this, "exitFullScreen")
      },
      (0, _toString2.default)("退出全屏")
    ),
    _react2.default.createElement(
      View,
      {
        className: "operation-item", onTap: $getEventHandler(this, "showStatusBar")
      },
      (0, _toString2.default)("显示状态栏")
    ),
    _react2.default.createElement(
      View,
      {
        className: "operation-item", onTap: $getEventHandler(this, "hideStatusBar")
      },
      (0, _toString2.default)("隐藏状态栏")
    ),
    _react2.default.createElement(
      View,
      {
        className: "operation-item", onTap: $getEventHandler(this, "stop")
      },
      (0, _toString2.default)("停止播放")
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "dmMj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-avatar {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.am-avatar-img {width:52px;height:52px;border-radius:50vh}.am-avatar-img-sm {width:36px;height:36px}.am-avatar-img-md {width:52px;height:52px}.am-avatar-img-lg {width:60px;height:60px}.am-avatar-img-square {border-radius:0}.am-avatar-content {margin-left:12px}.am-avatar-name {font-size:17px;color:#333}.am-avatar-name-lg {font-size:18px}.am-avatar-desc {margin-top:4px;font-size:15px;color:#999}.am-avatar-desc-sm {display:none}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "dmMy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "dpEv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-list-item {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;background:var(--am-list-item-background,#fff)}.am-list-item-hover {-webkit-filter:brightness(.9);filter:brightness(.9)}.am-list-item-radius {margin:0 12px;margin:0 var(--am-list-item-outside-spacing,12px);border-radius:8px;border-radius:var(--am-list-item-border-radius,8px)}.am-list-prefix {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:12px;padding:var(--am-list-item-padding,12px);padding-right:0}.am-list-supporting {margin-right:12px;margin-right:var(--am-list-item-padding,12px);color:#999;color:var(--am-list-item-content-subtitle-color,#999);font-size:15px;font-size:var(--am-list-item-subtitle-size,15px);display:-webkit-box;display:-webkit-flex;display:flex}.am-list-thumb {width:30px;height:30px;margin-right:12px;margin-right:var(--am-list-item-padding,12px)}.am-list-line {position:relative;padding:12px;padding:var(--am-list-item-padding,12px);padding-left:0;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-self:stretch;align-self:stretch;overflow:hidden;max-width:100%}.am-list-line::after {content:'';position:absolute;background-color:#eee;display:block;top:auto;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.am-list-text-wrapper {margin-right:12px;margin-right:var(--am-list-item-padding,12px);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.am-list-content {-webkit-box-flex:3;-webkit-flex:3;flex:3;text-align:left;-webkit-align-self:stretch;align-self:stretch;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly;overflow:hidden;line-height:normal}.am-list-content-subtitle,.am-list-content-title {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.am-list-content-title {font-size:17px;font-size:var(--am-list-item-content-title-size,17px);color:#333;color:var(--am-list-item-content-color,#333);white-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex}.am-list-content-subtitle {font-size:15px;font-size:var(--am-list-item-subtitle-size,15px);color:#999;color:var(--am-list-item-content-subtitle-color,#999)}.am-list-content-subtitle-small {font-size:13px;font-size:var(--am-list-item-content-subtitle-size-small,13px)}.am-list-extra {color:#999;color:var(--am-list-item-extra-color,#999);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-align-self:stretch;align-self:stretch;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:12px;margin-left:var(--am-list-item-padding,12px);-webkit-box-flex:2;-webkit-flex:2;flex:2;overflow:hidden}.am-list-primary {color:#333;color:var(--am-list-item-content-color,#333);font-size:17px;font-size:var(--am-list-item-content-title-size,17px)}.am-list-wrap .am-list-content,.am-list-wrap .am-list-extra {white-space:normal;word-break:break-all}.am-list-arrow {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:12px;margin-left:var(--am-list-item-arrow-margin,12px);height:22px;height:var(--am-list-item-arrow-size,22px);width:22px;width:var(--am-list-item-arrow-size,22px)}.am-list-item.last .am-list-line-bottom::after {display:none}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "dpOL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("o8kU");
/* harmony import */ var M_2_ = __webpack_require__("d2e3");
/* harmony import */ var M_3_ = __webpack_require__("1A6R");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/amount-input/amount-input.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "drgx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/slider/slider",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("W5PT");
    },
    stylesheet: function () {
      return __webpack_require__("EA7e");
    }
  });
  
  

/***/ }),

/***/ "dszH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  M_0_["WorkerComponent"] && Object(M_0_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/tabs/tab-content/index",
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("YD9D");
    },
  });
  
  

/***/ }),

/***/ "dt7c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("wHbD");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/contact/contact.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "e9x9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("uRW+");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/swipe-action/swipe-action.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "eCuk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(Text, {
    className: "am-icon am-icon-" + data['type'] + " " + data['className'], style: (data['size'] ? '--am-icon-size: ' + data['size'] + data['valueUnit'] + ';' : '') + " " + (data['color'] ? '--am-icon-color:' + data['color'] + ';' : '')
  }));
};
module.exports = exports['default'];

/***/ }),

/***/ "eKRb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("KG3v");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/grid/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "eLoQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("2fwG");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/canvas/canvas.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "eOu4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("警告框 API")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("my.alert")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "alert")
          },
          (0, _toString2.default)("显示警告框")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "eS0/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var Mask_ = $getComponentClass("/node_modules/mini-ali-ui/es/mask/index");
var Mask = Mask_ || (0, _EmptyComponentFactory2.default)("mask");

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)([_react2.default.createElement(Mask, {
    type: data['type'], show: data['show'], maskZindex: data['maskZindex'], onMaskTap: $getComponentEventHandler(this, "maskClick"), $isCustomComponent: this.$isCustomComponent, __tag: 'mask'
  }), data['type'] === 'market' ? _react2.default.createElement(
    View,
    null,
    [(0, _toString2.default)("营销弹窗蒙层，type=\""), (0, _toString2.default)(data['type']), (0, _toString2.default)("\"")]
  ) : null, data['type'] === 'product' ? _react2.default.createElement(
    View,
    null,
    [(0, _toString2.default)("产品弹窗蒙层，type=\""), (0, _toString2.default)(data['type']), (0, _toString2.default)("\"")]
  ) : null]);
};
module.exports = exports['default'];

/***/ }),

/***/ "eS2D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("QOzl");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/am-switch/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "eYJu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("C55o");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/file/file.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ehHL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("jhiH");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/scroll-view/scroll-view.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ehcY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("2308");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/contact-button/contact-button.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ehzs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".animation-element {width:2rem;height:2rem;background-color:#108ee9;-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "eijA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/action-sheet/action-sheet",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("LK/N");
    },
    stylesheet: function () {
      return __webpack_require__("AgIu");
    }
  });
  
  

/***/ }),

/***/ "enpW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/navigator/navigator",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("5UbH");
    },
    stylesheet: function () {
      return __webpack_require__("SRiP");
    }
  });
  
  

/***/ }),

/***/ "f/6s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/switch/switch",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("UiF6");
    },
    stylesheet: function () {
      return __webpack_require__("BowB");
    }
  });
  
  

/***/ }),

/***/ "f3Ot":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".a-cover-image {position:absolute;left:20px;top:100px;height:50px;width:50px}.cover-view {position:absolute;top:calc(50% - 0.75rem);left:calc(50% - 1.5rem);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;background-color:rgba(0, 0, 0, 0)}.cover-view-item {width:1rem;height:1.5rem;font-size:0.26rem}.cover-view-item-1 {background-color:rgba(26, 173, 25, 0.7)}.cover-view-item-2 {background-color:rgba(39, 130, 215, 0.7)}.cover-view-item-3 {background-color:rgba(255, 255, 255, 0.7)}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "f3iH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("clhz");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/choose-city/choose-city.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "f3zr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("8Gu2");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/cover-view/cover-view.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "f6dK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".demo-steps-class {margin:20px 0;border-bottom:1px solid #e5e5e5}.demo-btn-container {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:20px}.demo-btn {width:47%}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "f9em":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("5l9B");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/tabBar/API/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "fFEr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-pageInfinite {position:relative;width:100%;box-sizing:border-box}.am-pageInfinite_content {position:absolute;top:0;left:0;width:100%}.am-pageInfiniteWrap {position:absolute;bottom:8px;left:0;right:0;width:100%;height:5px;z-index:2;pointer-events:none}.am-pageInfiniteArea {position:absolute;left:50%;height:9px;width:50px;overflow:hidden;-webkit-transform:translateX(-50%) scale(.5);transform:translateX(-50%) scale(.5);background-repeat:no-repeat}.am-pageInfiniteMove {position:absolute;bottom:0;left:50%;width:180px;height:180px;margin-left:-90px;-webkit-transition:all .1s linear;transition:all .1s linear;border-radius:50%}.am-pageInfiniteInner {position:absolute;bottom:0;left:50%;-webkit-transform:translateX(-100%);transform:translateX(-100%);height:9px;width:25px;background-repeat:no-repeat}.am-pager {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-transform:scale(.5);transform:scale(.5)}.am-pager-number {-webkit-box-flex:0;-webkit-flex:0 0 6px;flex:0 0 6px;height:6px;overflow:hidden;margin-right:6px;margin-bottom:8px;border-radius:50%;background-color:#ddd}.am-pager-number_white {background-color:rgba(255,255,255,.4)}.am-pager-current {width:24px;height:7px;margin-right:6px;background-repeat:no-repeat}.am-pager-lastChild {margin-right:0}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "fKPF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/get-title-color/get-title-color",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("n6fa");
    },
    stylesheet: function () {
      return __webpack_require__("pBG+");
    }
  });
  
  

/***/ }),

/***/ "fTEj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/alert/alert.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "fXHO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("n1Bx");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/animation/animation.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "feJL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("点击右上角开始自定义分享")
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "fgwm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("Qdyo");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/label/label.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "fi8D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTemplate; });
/* harmony import */ var M_0_ = __webpack_require__("cDcd");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};



function useTemplate(template, data, key, context) {
  var Component = template && template.Component;
  return Component ? M_0__default.a.createElement(Component, _extends({}, data, { $context: context, key: key })) : null;
}

/***/ }),

/***/ "fjAr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("KOyI");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr-vehicle-plate/ocr-vehicle-plate.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "fla4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("4mcr");
/* harmony import */ var M_2_ = __webpack_require__("Fh/U");
/* harmony import */ var M_3_ = __webpack_require__("vxXc");
/* harmony import */ var M_4_ = __webpack_require__("o8kU");
/* harmony import */ var M_5_ = __webpack_require__("D5gq");
/* harmony import */ var M_6_ = __webpack_require__("KCEN");
/* harmony import */ var M_7_ = __webpack_require__("7CIQ");
/* harmony import */ var M_8_ = __webpack_require__("YaE0");
/* harmony import */ var M_9_ = __webpack_require__("V21L");
/* harmony import */ var M_10_ = __webpack_require__("JGVg");
/* harmony import */ var M_11_ = __webpack_require__("PBO1");
/* harmony import */ var M_12_ = __webpack_require__("eS2D");
/* harmony import */ var M_13_ = __webpack_require__("+GnR");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/list-item/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  
  stylesheet.imports(M_5_["default"]);
  
  stylesheet.imports(M_6_["default"]);
  
  stylesheet.imports(M_7_["default"]);
  
  stylesheet.imports(M_8_["default"]);
  
  stylesheet.imports(M_9_["default"]);
  
  stylesheet.imports(M_10_["default"]);
  
  stylesheet.imports(M_11_["default"]);
  
  stylesheet.imports(M_12_["default"]);
  
  stylesheet.imports(M_13_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "flf3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("4mcr");
/* harmony import */ var M_2_ = __webpack_require__("JGVg");
/* harmony import */ var M_3_ = __webpack_require__("qgau");
/* harmony import */ var M_4_ = __webpack_require__("S1rA");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/network/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "fv+s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-picker-item {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;background:var(--am-picker-background,#fff);padding-left:12px;padding-left:var(--am-picker-padding-left,12px)}.am-picker-line {position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:12px;padding-right:var(--am-picker-line-padding-right,12px);min-height:48px;min-height:var(--am-picker-line-min-height,48px);overflow:hidden}.am-picker-label {-webkit-align-self:center;align-self:center;min-width:80px;min-width:var(--am-picker-label-min-width,80px);margin-right:2px;font-size:17px;font-size:var(--am-picker-label-font-size,17px);color:#333;color:var(--am-picker-label-color,#333)}.am-picker-wrapper {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:24px;height:var(--am-picker-wrapper-height,24px);-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:3px;overflow:hidden;font-size:17px;font-size:var(--am-picker-font-size,17px)}.am-picker-layer {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1}.am-picker-layer-vertical {-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:12px 0;padding:var(--am-picker-vlabel-paddingTB,12px) 0}.am-picker-layer-vertical .am-picker-label {-webkit-align-self:flex-start;align-self:flex-start;font-size:15px;font-size:var(--am-picker-vlabel-font-size,15px);color:#999;color:var(--am-picker-vlabel-color,#999)}.am-picker-layer-vertical .am-picker-wrapper {padding-left:0}.am-picker-content {-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#333;color:var(--am-picker-label-color,#333);text-align:left;overflow:hidden;white-space:nowrap;padding:0}.am-picker-clear {display:-webkit-box;display:-webkit-flex;display:flex}.am-picker-line-bottom::after {content:'';position:absolute;background-color:#eee;display:block;top:auto;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.am-picker-item.last .am-picker-line-bottom::after {display:none}.am-picker-content-placeholder {color:#ccc;color:var(--am-picker-placeholder-color,#ccc)}.am-picker-content-value {color:#333;color:var(--am-picker-content-value-color,#333)}.am-picker-arrow {display:block;margin-left:8px;margin-left:var(--am-picker-arrow-marginLeft,8px);line-height:1}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "g+Ng":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/websocket/websocket",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("5Wqv");
    },
    stylesheet: function () {
      return __webpack_require__("cYrN");
    }
  });
  
  

/***/ }),

/***/ "g4tL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("LXYc");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/option-menu/option-menu.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "gA9p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-collapse-item {background-color:#fff;background-color:var(--am-collapse-bgc,#fff)}.am-collapse-item-title-container {position:relative;display:-webkit-box;display:-webkit-flex;display:flex;text-align:justify;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%;color:#333;color:var(--am-collapse-title-fontSize,#333);font-size:17px;font-size:var(--am-collapse-title-fontSize,17px);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.am-collapse-item-title {position:relative;padding:12px 0;padding:var(--am-collapse-title-paddingTB,12px) 0;margin:0 12px;margin:0 var(--am-collapse-title-marginLR,12px)}.am-collapse-item-title::after {content:'';position:absolute;background-color:#eee;display:block;top:auto;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.am-collapse-item-title-arrow {font-size:18px;font-size:var(--am-collapse-arrow-size,18px);color:#ccc;color:var(--am-collapse-arrow-color,#ccc)}.am-collapse-item--disabled .am-collapse-item-title {opacity:.4;opacity:var(--am-collapse-disabled,.4)}.am-collapse-item-title-text-wrapper {padding-right:12px;padding-right:var(--am-collapse-title-arrow-spacing,12px)}.am-collapse-item-content-wrapper {overflow-y:hidden;box-sizing:border-box;will-change:max-height;-webkit-transition:max-height .3s ease-in-out;transition:max-height .3s ease-in-out}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "gEaO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("/4Xp");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/loading/loading.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "gFdw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "container"
    },
    _react2.default.createElement(
      Button,
      {
        onTap: $getEventHandler(this, "download")
      },
      (0, _toString2.default)("下载图片并显示")
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "gKul":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("qyXR");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/image/image.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "gKzT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("oHZe");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/canvas/canvas.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "gQG5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/navigator/navigator",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("L6J5");
    },
    stylesheet: function () {
      return __webpack_require__("aL+I");
    }
  });
  
  

/***/ }),

/***/ "gQto":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":["/page/API/ocr-template/ocr-template.acss"]}*/var internal_style;
/* require("/page/API/ocr-template/ocr-template.acss") */

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "gW2+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/watch-shake/watch-shake",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("Zg0C");
    },
    stylesheet: function () {
      return __webpack_require__("wQQA");
    }
  });
  
  

/***/ }),

/***/ "gWg8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/compress-image/compress-image.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "gc90":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var PageResult_ = $getComponentClass("/node_modules/mini-ali-ui/es/page-result/index");
var PageResult = PageResult_ || (0, _EmptyComponentFactory2.default)("page-result");


var $templates = {};

var _ref = _react2.default.createElement(View, {
  style: "height: 150px; margin: 10px; background: #dddddd;"
});

var _ref2 = _react2.default.createElement(View, {
  style: "height: 150px; margin: 10px; background: #dddddd;"
});

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _react2.default.createElement(PageResult, {
      type: "logoff", local: true, brief: "此用户已注销", $isCustomComponent: this.$isCustomComponent, __tag: 'page-result'
    }),
    _ref,
    _ref2
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "gcu8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var Filter_ = $getComponentClass("/node_modules/mini-ali-ui/es/filter/index");
var Filter = Filter_ || (0, _EmptyComponentFactory2.default)("filter");
var FilterItem_ = $getComponentClass("/node_modules/mini-ali-ui/es/filter/filter-item/index");
var FilterItem = FilterItem_ || (0, _EmptyComponentFactory2.default)("filter-item");


var $templates = {};
function render(data) {
  var _this = this;

  return (0, _createRoot2.default)(_react2.default.createElement(
    Filter,
    {
      show: data['show'], max: 1, equalRows: 2, $isCustomComponent: this.$isCustomComponent, __tag: 'filter'
    },
    (0, _iterate2.default)(data['items'], function (item, index) {
      return _react2.default.createElement(FilterItem, {
        value: (0, _getLooseDataMember2.default)([item, "value"]), subtitle: (0, _getLooseDataMember2.default)([item, "subtitle"]), rows: (0, _getLooseDataMember2.default)([item, "rows"]), id: (0, _getLooseDataMember2.default)([item, "id"]), onChange: $getComponentEventHandler(_this, "handleCallBack"), selected: (0, _getLooseDataMember2.default)([item, "selected"]), key: "filter-item-" + data['key'], $isCustomComponent: _this.$isCustomComponent, __tag: 'filter-item'
      });
    })
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "gfmo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("uC0I");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/list/alphabet/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ghh9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("hZKm");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/page-result/busy/index",
    
    
    
    usingComponents: {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"},
    render: function () {
      return __webpack_require__("Wuaa");
    },
    stylesheet: function () {
      return __webpack_require__("8TEx");
    }
  });
  
  

/***/ }),

/***/ "gkEG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("h6bj");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/radio/radio.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "gmL3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("hZKm");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/page-result/network/index",
    
    
    
    usingComponents: {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"},
    render: function () {
      return __webpack_require__("7khi");
    },
    stylesheet: function () {
      return __webpack_require__("Hr0D");
    }
  });
  
  

/***/ }),

/***/ "goUH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0ICq");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/switch-ali-ui/index",
    
    
    
    usingComponents: {"am-switch":"/node_modules/mini-ali-ui/es/am-switch/index"},
    render: function () {
      return __webpack_require__("GaL8");
    },
    stylesheet: function () {
      return __webpack_require__("nUBp");
    }
  });
  
  

/***/ }),

/***/ "gqBJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "gqI3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("IRoE");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/button/button.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "grS7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/get-image-info/get-image-info",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("FO/Y");
    },
    stylesheet: function () {
      return __webpack_require__("8amu");
    }
  });
  
  

/***/ }),

/***/ "gz0I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("CKQn");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/tabs/tabs.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "gzM0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");
var Popup_ = $getComponentClass("/node_modules/mini-ali-ui/es/popup/index");
var Popup = Popup_ || (0, _EmptyComponentFactory2.default)("popup");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _react2.default.createElement(
      View,
      {
        className: "btn-container"
      },
      _react2.default.createElement(
        Button,
        {
          onTap: $getEventHandler(this, "onTopBtnTap")
        },
        (0, _toString2.default)("上")
      ),
      _react2.default.createElement(
        Button,
        {
          onTap: $getEventHandler(this, "onButtomBtnTap")
        },
        (0, _toString2.default)("下")
      ),
      _react2.default.createElement(
        Button,
        {
          onTap: $getEventHandler(this, "onRightBtnTap")
        },
        (0, _toString2.default)("右 无mask")
      ),
      _react2.default.createElement(
        Button,
        {
          onTap: $getEventHandler(this, "onLeftBtnTap")
        },
        (0, _toString2.default)("左 无动画")
      )
    ),
    _react2.default.createElement(
      Popup,
      {
        show: data['showLeft'], animation: false, position: "left", onClose: $getComponentEventHandler(this, "onPopupClose"), $isCustomComponent: this.$isCustomComponent, __tag: 'popup'
      },
      _react2.default.createElement(
        View,
        {
          className: "box left"
        },
        (0, _toString2.default)("hello world")
      )
    ),
    _react2.default.createElement(
      Popup,
      {
        show: data['showRight'], position: "right", mask: false, onClose: $getComponentEventHandler(this, "onPopupClose"), $isCustomComponent: this.$isCustomComponent, __tag: 'popup'
      },
      _react2.default.createElement(
        View,
        {
          className: "box right", style: "display: flex; flex-direction: column;"
        },
        _react2.default.createElement(
          View,
          null,
          (0, _toString2.default)("hello world")
        ),
        _react2.default.createElement(
          View,
          {
            style: "margin-top: 20px;"
          },
          _react2.default.createElement(
            Button,
            {
              onTap: $getEventHandler(this, "onPopupClose"), style: "width: 100px;"
            },
            (0, _toString2.default)("关闭")
          )
        )
      )
    ),
    _react2.default.createElement(
      Popup,
      {
        show: data['showTop'], position: "top", onClose: $getComponentEventHandler(this, "onPopupClose"), $isCustomComponent: this.$isCustomComponent, __tag: 'popup'
      },
      _react2.default.createElement(
        View,
        {
          className: "box top"
        },
        (0, _toString2.default)("hello world")
      )
    ),
    _react2.default.createElement(
      Popup,
      {
        show: data['showBottom'], position: "bottom", onClose: $getComponentEventHandler(this, "onPopupClose"), $isCustomComponent: this.$isCustomComponent, __tag: 'popup'
      },
      _react2.default.createElement(
        View,
        {
          className: "box bottom"
        },
        (0, _toString2.default)("hello world")
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "h0l4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("Wadc");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/navigator/navigator.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "h1Hs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/lifestyle/lifestyle.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "h3PT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("14MH");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/icon/icon.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "h6bj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".radio {display:block;margin-bottom:0.2rem}.radio-text {line-height:1.8}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "hBAE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("kbGJ");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/flex/flex.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "hBaD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("+U1z");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/input-item/input-item.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "hITe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("i9xS");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr-train-ticket/ocr-train-ticket.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "hSDh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Navigator = _afAppx.Navigator || (0, _EmptyComponentFactory2.default)("navigator");


var $templates = {};
function render(data) {
  var _this = this;

  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "block-list-container " + data['className']
    },
    _react2.default.createElement(
      View,
      {
        className: "block-list"
      },
      (0, _iterate2.default)(data['listData'], function (item, index) {
        return (0, _getLooseDataMember2.default)([item, "url"]) ? _react2.default.createElement(
          Navigator,
          {
            url: (0, _getLooseDataMember2.default)([item, "url"])
          },
          _react2.default.createElement(
            View,
            {
              className: "block-item", onTap: $getEventHandler(_this, "onItemTap"), 'data-name': (0, _getLooseDataMember2.default)([item, "name"])
            },
            (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "name"]))
          )
        ) : _react2.default.createElement(
          View,
          {
            className: "block-item", onTap: $getEventHandler(_this, "onItemTap"), 'data-name': (0, _getLooseDataMember2.default)([item, "name"])
          },
          (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "name"]))
        );
      })
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "hWOB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("4LLb");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/local-empty/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "hZKm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("yclZ");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  M_1_["WorkerComponent"] && Object(M_1_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/page-result/index",
    
    
    usingComponents: {"button":"/node_modules/mini-ali-ui/es/button/index"},
    render: function () {
      return __webpack_require__("rHBQ");
    },
  });
  
  

/***/ }),

/***/ "hiDy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Navigator = _afAppx.Navigator || (0, _EmptyComponentFactory2.default)("navigator");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "btn-area"
      },
      _react2.default.createElement(
        Navigator,
        {
          className: "navigator", url: "../ocr-idcard-face/ocr-idcard-face"
        },
        (0, _toString2.default)("身份证识别")
      ),
      _react2.default.createElement(
        Navigator,
        {
          className: "navigator", url: "../ocr-vehicle/ocr-vehicle"
        },
        (0, _toString2.default)("行驶证识别")
      ),
      _react2.default.createElement(
        Navigator,
        {
          className: "navigator", url: "../ocr-driver-license/ocr-driver-license"
        },
        (0, _toString2.default)("驾驶证识别")
      ),
      _react2.default.createElement(
        Navigator,
        {
          className: "navigator", url: "../ocr-business-license/ocr-business-license"
        },
        (0, _toString2.default)("营业执照识别")
      ),
      _react2.default.createElement(
        Navigator,
        {
          className: "navigator", url: "../ocr-bank-card/ocr-bank-card"
        },
        (0, _toString2.default)("银行卡识别")
      ),
      _react2.default.createElement(
        Navigator,
        {
          className: "navigator", url: "../ocr-general/ocr-general"
        },
        (0, _toString2.default)("通用文字识别")
      ),
      _react2.default.createElement(
        Navigator,
        {
          className: "navigator", url: "../ocr-train-ticket/ocr-train-ticket"
        },
        (0, _toString2.default)("火车票识别")
      ),
      _react2.default.createElement(
        Navigator,
        {
          className: "navigator", url: "../ocr-passport/ocr-passport"
        },
        (0, _toString2.default)("护照识别")
      ),
      _react2.default.createElement(
        Navigator,
        {
          className: "navigator", url: "../ocr-vehicle-plate/ocr-vehicle-plate"
        },
        (0, _toString2.default)("车牌识别")
      ),
      _react2.default.createElement(
        Navigator,
        {
          className: "navigator", url: "../ocr-business-card/ocr-business-card"
        },
        (0, _toString2.default)("名片识别")
      ),
      _react2.default.createElement(
        Navigator,
        {
          className: "navigator", url: "../ocr-vin/ocr-vin"
        },
        (0, _toString2.default)("vin识别")
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "hifH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("lQ4d");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/popover/popover.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "hklT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("3Tt5");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/message/message.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "hn+S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "hnYF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "i+ti":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("L6t1");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/pagination/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "i33M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("b5iv");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/local-busy/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "i42U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("aAmk");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/progress/progress.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "i7No":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("K1z2");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/show-auth-guide/show-auth-guide.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "i9xS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("aiUx");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr-train-ticket/ocr-train-ticket.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "iAOM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var AmountInput_ = $getComponentClass("/node_modules/mini-ali-ui/es/amount-input/index");
var AmountInput = AmountInput_ || (0, _EmptyComponentFactory2.default)("amount-input");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _react2.default.createElement(AmountInput, {
      type: "digit", title: "转入金额", extra: "建议转入¥100以上金额", placeholder: "输入金额", value: data['value'], maxLength: "10", focus: true, btnText: "全部提现", onClear: $getComponentEventHandler(this, "onInputClear"), onInput: $getComponentEventHandler(this, "onInput"), onButtonClick: $getComponentEventHandler(this, "onButtonClick"), onConfirm: $getComponentEventHandler(this, "onInputConfirm"), onBlur: $getComponentEventHandler(this, "onInputBlur"), onFocus: $getComponentEventHandler(this, "onInputFocus"), $isCustomComponent: this.$isCustomComponent, __tag: 'amount-input'
    })
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "iFrC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".container {padding-bottom:50px}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "iGIk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("EXaP");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/button-ali-ui/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "iKq+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("EL+B");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/local-payment/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "iQkW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/option-menu/option-menu",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("nF4f");
    },
    stylesheet: function () {
      return __webpack_require__("g4tL");
    }
  });
  
  

/***/ }),

/***/ "iUNG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "iVYo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var Message_ = $getComponentClass("/node_modules/mini-ali-ui/es/message/index");
var Message = Message_ || (0, _EmptyComponentFactory2.default)("message");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");

var RadioGroup = _afAppx.RadioGroup || (0, _EmptyComponentFactory2.default)("radio-group");

var Label = _afAppx.Label || (0, _EmptyComponentFactory2.default)("label");
var Radio_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-radio/index");
var Radio = Radio_ || (0, _EmptyComponentFactory2.default)("radio");

var Input = _afAppx.Input || (0, _EmptyComponentFactory2.default)("input");

var Textarea = _afAppx.Textarea || (0, _EmptyComponentFactory2.default)("textarea");
var Checkbox_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-checkbox/index");
var Checkbox = Checkbox_ || (0, _EmptyComponentFactory2.default)("checkbox");


var $templates = {};
function render(data) {
  var _this = this;

  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _react2.default.createElement(
      Message,
      {
        title: data['title'], subTitle: data['subTitle'], type: data['type'], mainButton: data['mainButton'], subButton: data['subButton'], onTapMain: $getComponentEventHandler(this, "goBack"), $isCustomComponent: this.$isCustomComponent, __tag: 'message'
      },
      _react2.default.createElement(
        View,
        {
          slot: "tips"
        },
        (0, _toString2.default)("这里是通过"),
        _react2.default.createElement(
          Text,
          {
            style: "color: red;"
          },
          (0, _toString2.default)("slot")
        ),
        (0, _toString2.default)("插槽加入的内容，加入更多自定义内容。")
      )
    ),
    _react2.default.createElement(
      View,
      {
        style: "padding: 24rpx;"
      },
      _react2.default.createElement(
        RadioGroup,
        {
          className: "radio-group", onChange: $getEventHandler(this, "radioChange"), name: "lib"
        },
        (0, _iterate2.default)(data['items'], function (item, index) {
          return _react2.default.createElement(
            Label,
            {
              className: "radio", key: "label-" + index
            },
            _react2.default.createElement(Radio, {
              value: (0, _getLooseDataMember2.default)([item, "name"]), checked: (0, _getLooseDataMember2.default)([item, "checked"]), $isCustomComponent: _this.$isCustomComponent, __tag: 'radio'
            }),
            _react2.default.createElement(
              Text,
              {
                className: "radio-text"
              },
              (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "value"]))
            )
          );
        })
      ),
      _react2.default.createElement(
        View,
        {
          style: "padding:24rpx 0;font-weight: bold;"
        },
        (0, _toString2.default)("主标题")
      ),
      _react2.default.createElement(Input, {
        value: data['title'], onInput: $getEventHandler(this, "titleChange"), style: "padding: 8rpx 16rpx;font-size: 30rpx;border: 1px solid #eee;"
      }),
      _react2.default.createElement(
        View,
        {
          style: "padding:24rpx 0;font-weight: bold;"
        },
        (0, _toString2.default)("副标题")
      ),
      _react2.default.createElement(Textarea, {
        value: data['subTitle'], onInput: $getEventHandler(this, "subtitleChange"), style: "margin-bottom: 24rpx;padding: 16rpx 16rpx 50rpx;font-size: 30rpx;border: 1px solid #eee;"
      }),
      _react2.default.createElement(
        View,
        {
          className: "showBtn"
        },
        _react2.default.createElement(Checkbox, {
          onChange: $getComponentEventHandler(this, "onChange"), id: "showBtn", $isCustomComponent: this.$isCustomComponent, __tag: 'checkbox'
        }),
        _react2.default.createElement(
          Label,
          {
            'for': "showBtn", className: "btnLabel"
          },
          (0, _toString2.default)("显示按钮")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "iYxT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/file/file",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("lw+D");
    },
    stylesheet: function () {
      return __webpack_require__("COwE");
    }
  });
  
  

/***/ }),

/***/ "ihFp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("XkMr");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

var _ocrTemplate = __webpack_require__("4gaC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $templates = {};
$templates = (0, _extends3.default)({}, _ocrTemplate.$ownTemplates);
function render(data) {
  return (0, _createRoot2.default)((0, _useTemplate2.default)($templates["ocr-template"], {
    textArry: data['textArry'],
    imgUrl: data['imgUrl']
  }, undefined, this));
};
module.exports = exports["default"];

/***/ }),

/***/ "imUE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("o8kU");
/* harmony import */ var M_2_ = __webpack_require__("u4Qw");
/* harmony import */ var M_3_ = __webpack_require__("ZOIL");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/collapse/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ioxd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var Pagination_ = $getComponentClass("/node_modules/mini-ali-ui/es/pagination/index");
var Pagination = Pagination_ || (0, _EmptyComponentFactory2.default)("pagination");

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");
var AmIcon_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-icon/index");
var AmIcon = AmIcon_ || (0, _EmptyComponentFactory2.default)("am-icon");


var $templates = {};
function render(data) {
  var _this = this;

  return (0, _createRoot2.default)(data['columnNum'] === 5 && data['infinite'] && (0, _getLooseDataMember2.default)([data['list'], "length"]) > 5 ? _react2.default.createElement(
    Pagination,
    {
      pagerName: data['gridName'], infinite: "true", className: "am-grid-scroll", height: data['infiniteHeight'], $isCustomComponent: this.$isCustomComponent, __tag: 'pagination'
    },
    _react2.default.createElement(
      View,
      {
        className: "am-grid am-grid-" + data['columnNum']
      },
      (0, _iterate2.default)(data['list'], function (item, index) {
        return _react2.default.createElement(
          View,
          {
            className: "am-grid-item\n          am-grid-item-" + data['columnNum'], onTap: $getEventHandler(_this, "onGridItemClick"), 'data-index': index, key: "grid-item-" + index
          },
          (0, _renderSlot2.default)(data, "$default", _react2.default.createElement(
            View,
            {
              className: "am-grid-item-wrapper am-grid-item-wrapper-" + data['columnNum'], hoverStartTime: "0", hoverStayTime: "0", hoverClass: "am-grid-item__hover"
            },
            _react2.default.createElement(View, {
              className: "am-grid-icon\n                am-grid-icon-" + data['columnNum'] + "\n                " + (data['circular'] && data['columnNum'] >= 4 ? 'am-grid-icon-circular' : ''), style: "background-image: url(" + (0, _getLooseDataMember2.default)([item, "icon"]) + ");"
            }),
            _react2.default.createElement(
              View,
              {
                className: "am-grid-text-wrapper"
              },
              _react2.default.createElement(
                Text,
                {
                  className: "am-grid-text am-grid-text-" + data['columnNum']
                },
                (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "text"]))
              )
            )
          ), {
            item: item
          })
        );
      })
    )
  ) : _react2.default.createElement(
    View,
    {
      className: "am-grid am-grid-" + data['columnNum'] + "\n    " + (data['columnNum'] === 5 ? 'am-grid-5__overHide' : '') + "\n    " + (data['hasLine'] ? '' : 'am-grid-no-line')
    },
    (0, _iterate2.default)(data['list'], function (item, index) {
      return _react2.default.createElement(
        View,
        {
          className: "am-grid-item\n        am-grid-item-" + data['columnNum'] + "\n        " + (data['columnNum'] === 3 && (0, _getLooseDataMember2.default)([data['list'], "length"]) - index <= data['getColumnBorderIndex'] ? 'am-grid-item-3_noBorder' : ''), onTap: $getEventHandler(_this, "onGridItemClick"), 'data-index': index, key: "grid-item-" + index
        },
        (0, _renderSlot2.default)(data, "$default", _react2.default.createElement(
          View,
          {
            className: "am-grid-item-wrapper am-grid-item-wrapper-" + data['columnNum'], hoverStartTime: "0", hoverStayTime: "0", hoverClass: "am-grid-item__hover"
          },
          data['columnNum'] < 5 || data['columnNum'] === 5 && (0, _getLooseDataMember2.default)([data['list'], "length"]) <= 5 ? _react2.default.createElement(View, {
            className: "am-grid-icon\n              am-grid-icon-" + data['columnNum'] + "\n              " + (data['circular'] && data['columnNum'] >= 4 ? 'am-grid-icon-circular' : ''), style: "background-image: url(" + (0, _getLooseDataMember2.default)([item, "icon"]) + ");"
          }) : null,
          data['columnNum'] === 5 && (0, _getLooseDataMember2.default)([data['list'], "length"]) > 5 ? index === 4 ? _react2.default.createElement(
            View,
            {
              className: "am-grid-icon am-grid-icon-" + data['columnNum']
            },
            _react2.default.createElement(AmIcon, {
              type: "more-1", size: "28", color: "#999", $isCustomComponent: _this.$isCustomComponent, __tag: 'am-icon'
            })
          ) : _react2.default.createElement(View, {
            className: "am-grid-icon\n                am-grid-icon-" + data['columnNum'] + "\n                " + (data['circular'] && data['columnNum'] >= 4 ? 'am-grid-icon-circular' : ''), style: "background-image: url(" + (0, _getLooseDataMember2.default)([item, "icon"]) + ");"
          }) : null,
          _react2.default.createElement(
            View,
            {
              className: "am-grid-text-wrapper"
            },
            _react2.default.createElement(
              Text,
              {
                className: "am-grid-text am-grid-text-" + data['columnNum']
              },
              (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "text"]))
            ),
            (data['columnNum'] === 2 || data['columnNum'] === 3) && (0, _getLooseDataMember2.default)([item, "desc"]) && (0, _getLooseDataMember2.default)([item, "desc"]) !== '' ? _react2.default.createElement(
              Text,
              {
                className: "am-grid-desc am-grid-desc-" + data['columnNum']
              },
              (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "desc"]))
            ) : null
          )
        ), {
          item: item
        })
      );
    })
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "irZg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0i7T");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/terms/index",
    
    
    
    usingComponents: {"terms":"/node_modules/mini-ali-ui/es/terms/index"},
    render: function () {
      return __webpack_require__("ZMVt");
    },
    stylesheet: function () {
      return __webpack_require__("k4js");
    }
  });
  
  

/***/ }),

/***/ "isYb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/canvas/canvas",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("KBIi");
    },
    stylesheet: function () {
      return __webpack_require__("gKzT");
    }
  });
  
  

/***/ }),

/***/ "iu+z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("NSEQ");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  M_1_["WorkerComponent"] && Object(M_1_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/vtabs/index",
    
    
    usingComponents: {"badge":"/node_modules/mini-ali-ui/es/badge/index"},
    render: function () {
      return __webpack_require__("Nh68");
    },
  });
  
  

/***/ }),

/***/ "j/ZD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".a-button + .a-button {margin-top:0.2rem}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "j388":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-tips-plain-favorite {position:fixed;bottom:50px;left:50px;box-sizing:border-box;font-size:15px;font-size:var(--am-tips-plain-font-size,15px)}.am-tips-plain-favorite-wrap {position:relative;background:#333;background:var(--am-tips-plain-bg-color,#333);box-shadow:0 4px 10px 0 rgba(51,51,51,.2);border-radius:8px;border-radius:var(--am-tips-plain-border-radius,8px);color:#fff;color:var(--am-tips-plain-text-color,#fff);padding:6px 12px;padding:6px var(--am-tips-plain-padding,12px);min-height:10px}.am-tips-plain-favorite-content {line-height:1.5;line-height:var(--am-tips-plain-line-height,1.5);overflow:hidden}.am-tips-plain-favorite-action:active {background:#333;background:var(--am-tips-plain-bg-color,#333)}.am-tips-plain-favorite-wrap::before {content:'';position:absolute;bottom:-8px;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:9px solid #333;border-top:9px solid var(--am-tips-plain-bg-color,#333)}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "j3WX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-list-secondary {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;position:relative;height:100%;max-width:100%}.am-list-secondary-text {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;height:100%;max-width:100%;overflow:hidden}.am-list-secondary-title {font-size:17px;font-size:var(--am-list-secondary-title-size,17px);color:#333;color:var(--am-list-secondary-title-color,#333);white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:100%}.am-list-secondary-subtitle {font-size:15px;font-size:var(--am-list-secondary-subtitle-size,15px);color:#999;color:var(--am-list-secondary-subtitle-color,#999);white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:100%}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "j7w8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "j8uL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "jUqo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  M_0_["WorkerComponent"] && Object(M_0_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/filter/filter-item/index",
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("RfHw");
    },
  });
  
  

/***/ }),

/***/ "jZo3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Map = _afAppx.Map || (0, _EmptyComponentFactory2.default)("map");


var $templates = {};

var _ref = _react2.default.createElement(View, {
  className: "page-section-btns"
});

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(Map, {
          id: "map", longitude: data['longitude'], latitude: data['latitude'], scale: data['scale'], controls: data['controls'], onControlTap: $getEventHandler(this, "controltap"), markers: data['markers'], onMarkerTap: $getEventHandler(this, "markertap"), polyline: data['polyline'], polygon: data['polygon'], circles: data['circles'], onRegionChange: $getEventHandler(this, "regionchange"), onTap: $getEventHandler(this, "tap"), onCalloutTap: $getEventHandler(this, "callouttap"), showLocation: true, style: "width: 100%; height: 200px;", includePoints: data['includePoints'], groundOverlays: data['ground'] - data['overlays'], ref: $getRefHandler(this, "map")
        })
      )
    ),
    (0, _toString2.default)('\x1B'),
    _react2.default.createElement(
      View,
      {
        className: "page-section-btns"
      },
      _react2.default.createElement(
        View,
        {
          onTap: $getEventHandler(this, "demoResetMap")
        },
        (0, _toString2.default)("恢复")
      ),
      _react2.default.createElement(
        View,
        {
          onTap: $getEventHandler(this, "demoGetCenterLocation")
        },
        (0, _toString2.default)("获取中心点坐标")
      ),
      _react2.default.createElement(
        View,
        {
          onTap: $getEventHandler(this, "demoMoveToLocation")
        },
        (0, _toString2.default)("回到定位点")
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section-btns"
      },
      _react2.default.createElement(
        View,
        {
          onTap: $getEventHandler(this, "demoMarkerAnimation")
        },
        (0, _toString2.default)("Marker 动画")
      ),
      _react2.default.createElement(
        View,
        {
          onTap: $getEventHandler(this, "demoMarkerLabel")
        },
        (0, _toString2.default)("Label")
      ),
      _react2.default.createElement(
        View,
        {
          onTap: $getEventHandler(this, "demoMarkerCustomCallout")
        },
        (0, _toString2.default)("CustomCallout")
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section-btns"
      },
      _react2.default.createElement(
        View,
        {
          onTap: $getEventHandler(this, "demoMarkerAppendStr")
        },
        (0, _toString2.default)("文字Marker")
      ),
      _react2.default.createElement(
        View,
        {
          onTap: $getEventHandler(this, "demoTrafficOverlay")
        },
        (0, _toString2.default)("路况展示")
      ),
      _react2.default.createElement(
        View,
        {
          onTap: $getEventHandler(this, "demoShowRoute")
        },
        (0, _toString2.default)("步行路线规划")
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section-btns"
      },
      _react2.default.createElement(
        View,
        {
          onTap: $getEventHandler(this, "demoCompass")
        },
        (0, _toString2.default)("指南针")
      ),
      _react2.default.createElement(
        View,
        {
          onTap: $getEventHandler(this, "demoScale")
        },
        (0, _toString2.default)("比例尺")
      ),
      _react2.default.createElement(
        View,
        {
          onTap: $getEventHandler(this, "demoGesture")
        },
        (0, _toString2.default)("手势")
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section-btns"
      },
      _react2.default.createElement(
        View,
        {
          onTap: $getEventHandler(this, "demoPolyline")
        },
        (0, _toString2.default)("线")
      ),
      _react2.default.createElement(
        View,
        {
          onTap: $getEventHandler(this, "demoPolygon")
        },
        (0, _toString2.default)("多边形")
      ),
      _react2.default.createElement(
        View,
        {
          onTap: $getEventHandler(this, "demoCircle")
        },
        (0, _toString2.default)("圆")
      )
    ),
    _ref
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "jcCe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("35mS");
/* harmony import */ var M_2_ = __webpack_require__("o8kU");
/* harmony import */ var M_3_ = __webpack_require__("eKRb");
/* harmony import */ var M_4_ = __webpack_require__("DRjC");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/grid/4/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "jcnB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("5/Co");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/container/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "jhiH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("0b05");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/scroll-view/scroll-view.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "jjI5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("zicR");
/* harmony import */ var M_1_ = __webpack_require__("0MVh");
/* harmony import */ var M_2_ = __webpack_require__("vCWb");
/* harmony import */ var M_3_ = __webpack_require__("ju+b");
/* harmony import */ var M_3__default = /*#__PURE__*/__webpack_require__.n(M_3_);

  


    
  
  Object(M_3_["Page"])({
    pagePath: "page/tabBar/component/index",
    
    
    usingComponents: {"block-list":"/page/common/components/block-list/block-list","list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index"},
    tabIndex: 10,
    render: function () {
      return __webpack_require__("Wx6M");
    },
    stylesheet: function () {
      return __webpack_require__("RE0+");
    }
  });
  
  

/***/ }),

/***/ "jl5Q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(View, {
    className: "am-loading " + (data['className'] ? data['className'] : ''), style: "width: " + data['size'] + ";\n    height: " + data['size'] + ";\n    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20140%20140%22%3E%3Ccircle%20cx%3D%2270%22%20cy%3D%2270%22%20r%3D%2230%22%20stroke%3D%22" + data['color'] + "%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22%20transform%3D%22rotate\\(0%2070%2070\\)%22%3E%3CanimateTransform%20attributeName%3D%22transform%22%20type%3D%22rotate%22%20repeatCount%3D%22indefinite%22%20dur%3D%221.5s%22%20values%3D%22-90%2070%2070%3B%2015%2070%2070%3B270%2070%2070%22%20keyTimes%3D%220%3B0.5%3B1%22%3E%3C%2FanimateTransform%3E%3Canimate%20attributeName%3D%22stroke-dasharray%22%20repeatCount%3D%22indefinite%22%20dur%3D%221.5s%22%20values%3D%221%20200%3B50%20200%3B1%20200%22%20keyTimes%3D%220%3B0.5%3B1%22%3E%3C%2Fanimate%3E%3C%2Fcircle%3E%3Ccircle%20cx%3D%2270%22%20cy%3D%2270%22%20r%3D%2250%22%20stroke%3D%22" + data['color'] + "%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22%20transform%3D%22rotate\\(0%2070%2070\\)%22%3E%3CanimateTransform%20attributeName%3D%22transform%22%20type%3D%22rotate%22%20repeatCount%3D%22indefinite%22%20dur%3D%221.5s%22%20values%3D%22180%2070%2070%3B360%2070%2070%3B900%2070%2070%22%20keyTimes%3D%220%3B0.5%3B1%22%3E%3C%2FanimateTransform%3E%3Canimate%20attributeName%3D%22stroke-dasharray%22%20repeatCount%3D%22indefinite%22%20dur%3D%221.5s%22%20values%3D%2225%20500%3B70%20500%3B25%20500%22%20keyTimes%3D%220%3B0.5%3B1%22%3E%3C%2Fanimate%3E%3C%2Fcircle%3E%3C%2Fsvg%3E);"
  }));
};
module.exports = exports['default'];

/***/ }),

/***/ "jnXl":
/***/ (function(module, exports, __webpack_require__) {


  module.exports = function (engineIndex, cGlobal, callback) {
    __webpack_require__("7mqG");
    cGlobal.appXAppJson = {
  "app": {
    "$homepage": "page/tabBar/component/index",
    "preloadRule": {}
  },
  "page/API/option-menu/option-menu": {
    "optionMenu": {
      "icon": "https://gw.alipayobjects.com/zos/rmsportal/gNnidPxAGHizBQYKznaO.png"
    }
  }
};
    if (callback) {
      callback();
    }
  }
  

/***/ }),

/***/ "jois":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("te4j");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/steps/steps.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ju+b":
/***/ (function(module, exports) {

module.exports = globalThis.AFAppX;

/***/ }),

/***/ "juum":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("YmoJ");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr-bank-card/ocr-bank-card.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "jyVW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description", style: "text-align: center; margin-top: 200px;"
      },
      (0, _toString2.default)("我是一个新的页面")
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "k+Ls":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("Bv2q");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/local-network/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "k1SR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("tpJI");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr/ocr.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "k4js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("JX5b");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/terms/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "k6b0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("yTJ0");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/bluetooth/bluetooth.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "k74N":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var AmIcon_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-icon/index");
var AmIcon = AmIcon_ || (0, _EmptyComponentFactory2.default)("am-icon");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "am-tag " + (data['size'] === 'sm' ? 'am-tag-sm' : 'am-tag-lg') + " " + (data['iconType'] ? 'am-tag-with-icon' : '') + " " + data['className'] + " " + (data['iconType'] && !data['ghost'] ? (0, _getLooseDataMember2.default)([data['iconClass'], data['type']]) : data['ghost'] ? '' : 'am-tag-text-plain') + " " + (data['ghost'] ? (0, _getLooseDataMember2.default)([data['ghostClass'], data['type']]) + ' am-tag-ghost' : (0, _getLooseDataMember2.default)([data['bgClass'], data['type']]))
    },
    data['iconType'] ? _react2.default.createElement(AmIcon, {
      type: data['iconType'], size: data['size'] === 'sm' ? 10 : 12, className: "am-tag-icon", $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
    }) : null,
    _react2.default.createElement(
      View,
      {
        className: "am-tag-text "
      },
      (0, _renderSlot2.default)(data, "$default", null)
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "kAnD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");

var Image = _afAppx.Image || (0, _EmptyComponentFactory2.default)("image");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("压缩图片 API")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("my.generateImageFromCode")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "buttonClick"), hoverClass: "defaultTap"
          },
          (0, _toString2.default)("生成二维码")
        ),
        _react2.default.createElement(Image, {
          src: data['imageStr'], mode: data['mode']
        })
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "kDWH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("5S1z");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/radio-ali-ui/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "kEmX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "kOdV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".a-button + .a-button {margin-top:0.32rem}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "kSO6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Lifestyle = _afAppx.Lifestyle || (0, _EmptyComponentFactory2.default)("lifestyle");


var $templates = {};

var _ref = _react2.default.createElement(Lifestyle, {
  publicId: "2016021701146995"
});

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    data['canUse'] ? _ref : _react2.default.createElement(
      View,
      null,
      (0, _toString2.default)("请升级支付宝支持生活号跳转")
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "kZLp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("/nGC");
/* harmony import */ var M_1_ = __webpack_require__("yclZ");
/* harmony import */ var M_2_ = __webpack_require__("5AAy");
/* harmony import */ var M_3_ = __webpack_require__("vCWb");
/* harmony import */ var M_4_ = __webpack_require__("AnxE");
/* harmony import */ var M_5_ = __webpack_require__("ju+b");
/* harmony import */ var M_5__default = /*#__PURE__*/__webpack_require__.n(M_5_);

  




    
  
  Object(M_5_["Page"])({
    pagePath: "page/component/tips/1/index",
    
    
    
    usingComponents: {"tips-dialog":"/node_modules/mini-ali-ui/es/tips/tips-dialog/index","am-button":"/node_modules/mini-ali-ui/es/button/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index","input-item":"/node_modules/mini-ali-ui/es/input-item/index"},
    render: function () {
      return __webpack_require__("UvO/");
    },
    stylesheet: function () {
      return __webpack_require__("qy3x");
    }
  });
  
  

/***/ }),

/***/ "kapt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var AmCheckbox_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-checkbox/index");
var AmCheckbox = AmCheckbox_ || (0, _EmptyComponentFactory2.default)("am-checkbox");
var Button_ = $getComponentClass("/node_modules/mini-ali-ui/es/button/index");
var Button = Button_ || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "am-terms am-terms-" + (data['fixed'] ? 'fixed' : 'normal')
    },
    _react2.default.createElement(
      View,
      {
        className: "am-terms-header"
      },
      data['related'] ? _react2.default.createElement(AmCheckbox, {
        type: "circle", onChange: $getComponentEventHandler(this, "onChange"), checked: data['status'], $isCustomComponent: this.$isCustomComponent, __tag: 'am-checkbox'
      }) : null,
      (0, _renderSlot2.default)(data, "header", null)
    ),
    _react2.default.createElement(
      View,
      {
        className: "am-terms-body"
      },
      _react2.default.createElement(
        Button,
        {
          type: (0, _getLooseDataMember2.default)([data['agreeBtnAttr'], "type"]), shape: data['shape'], capsuleSize: data['capsuleSize'], capsuleMinWidth: data['capsuleMinWidth'], onTap: $getComponentEventHandler(this, "onTap"), dataName: (0, _getLooseDataMember2.default)([data['agreeBtnAttr'], "data"]), subtitle: (0, _getLooseDataMember2.default)([data['agreeBtnAttr'], "subtitle"]), disabled: data['showBtn'], $isCustomComponent: this.$isCustomComponent, __tag: 'button'
        },
        (0, _toString2.default)((0, _getLooseDataMember2.default)([data['agreeBtnAttr'], "title"]))
      ),
      (0, _getLooseDataMember2.default)([data['cancelBtnAttr'], "title"]) ? _react2.default.createElement(
        Button,
        {
          type: (0, _getLooseDataMember2.default)([data['cancelBtnAttr'], "type"]), shape: data['shape'], capsuleSize: data['capsuleSize'], capsuleMinWidth: data['capsuleMinWidth'], onTap: $getComponentEventHandler(this, "onTap"), dataName: (0, _getLooseDataMember2.default)([data['cancelBtnAttr'], "data"]), subtitle: (0, _getLooseDataMember2.default)([data['cancelBtnAttr'], "subtitle"]), $isCustomComponent: this.$isCustomComponent, __tag: 'button'
        },
        (0, _toString2.default)((0, _getLooseDataMember2.default)([data['cancelBtnAttr'], "title"]))
      ) : null
    ),
    data['hasDesc'] ? _react2.default.createElement(
      View,
      {
        className: "am-terms-footer"
      },
      (0, _renderSlot2.default)(data, "desc", null)
    ) : null
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "kbGJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("VI1H");
/* harmony import */ var M_2_ = __webpack_require__("54Bh");
/* harmony import */ var M_3_ = __webpack_require__("31Ql");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/flex/flex.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "kevw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("my8D");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/modal/modal",
    
    
    
    usingComponents: {"modal":"/node_modules/mini-ali-ui/es/modal/index"},
    render: function () {
      return __webpack_require__("cIJn");
    },
    stylesheet: function () {
      return __webpack_require__("90os");
    }
  });
  
  

/***/ }),

/***/ "kfu4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("4mcr");
/* harmony import */ var M_2_ = __webpack_require__("Fh/U");
/* harmony import */ var M_3_ = __webpack_require__("vxXc");
/* harmony import */ var M_4_ = __webpack_require__("o8kU");
/* harmony import */ var M_5_ = __webpack_require__("D5gq");
/* harmony import */ var M_6_ = __webpack_require__("35mS");
/* harmony import */ var M_7_ = __webpack_require__("eKRb");
/* harmony import */ var M_8_ = __webpack_require__("ouPZ");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/grid/grid.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  
  stylesheet.imports(M_5_["default"]);
  
  stylesheet.imports(M_6_["default"]);
  
  stylesheet.imports(M_7_["default"]);
  
  stylesheet.imports(M_8_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "kk0B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".favorite {padding:0 16px}.name {margin-top:24px;text-align:center;color:rgba(51, 51, 51, 0.49);font-size:16px}.name .a-text {position:relative}.name .a-text::after {position:absolute;left:50%;display:block;content:'';width:32px;height:1px;margin-top:5px;background-color:rgba(51, 51, 51, 0.49);-webkit-transform:scaleY(0.5) translateX(-50%);transform:scaleY(0.5) translateX(-50%)}.title {margin-top:37px;color:#999;line-height:18px;font-size:13px}.explanation {margin-top:12px;font-size:14px;line-height:20px;color:#999}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "kmlE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("WfCP");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/navigation-bar-loading/navigation-bar-loading.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "kolu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".demo-title {font-size:15px;font-weight:500;margin:0.24rem 0.16rem;padding-bottom:0.24rem;border-bottom:1px solid #ccc}.radio-group {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 0.24rem 0.24rem}.radio-text {margin-right:0.24rem}.a-input {margin:0 0 0.16rem 0.24rem;padding:0.08rem 0.16rem;font-size:0.3rem;border:1px solid #eee}.demo-item {margin-bottom:0.24rem}.nomore-notice {color:#999}.itemSize {width:30px;height:30px;margin-right:0.24rem;vertical-align:middle}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "kwRC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("6Xpz");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/picker-item/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "kyNo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("imUE");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/collapse/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "l8As":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("VexH");
/* harmony import */ var M_2_ = __webpack_require__("tj4d");
/* harmony import */ var M_3_ = __webpack_require__("n+dc");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/filter/alternative/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "lCTV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  M_0_["WorkerComponent"] && Object(M_0_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/list/alphabet/index",
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("HJjr");
    },
  });
  
  

/***/ }),

/***/ "lEmH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("nWIP");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/pull-down-refresh/pull-down-refresh.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "lIOQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/get-system-info/get-system-info",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("9ETg");
    },
    stylesheet: function () {
      return __webpack_require__("BKj0");
    }
  });
  
  

/***/ }),

/***/ "lJKG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("K33v");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/local-logoff/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "lJz3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("TCWI");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/input/input.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "lKvS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-verify-code-item {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;background:var(--am-verify-code-item-background,#fff);padding-left:12px;padding-left:var(--am-verify-code-item-padding-left,12px)}.am-verify-code-item .a-input-content {padding-left:2px}.am-verify-code-line {position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:12px;padding-right:var(--am-verify-code-line-padding-right,12px);min-height:48px;min-height:var(--am-verify-code-line-min-height,48px);overflow:hidden;font-size:17px;font-size:var(--am-verify-code-font-size,17px)}.am-verify-code-label {min-width:80px;min-width:var(--am-verify-code-label-min-width,80px);margin-right:2px;color:#333;color:var(--am-verify-code-item-label-color,#333)}.am-verify-code-content {-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;color:#333;color:var(--am-verify-code-item-label-color,#333);text-align:left;padding:0}.am-verify-code-content .a-input-wrap {-webkit-box-flex:1;-webkit-flex:1;flex:1}.am-verify-code-clear {display:-webkit-box;display:-webkit-flex;display:flex;height:22px;height:var(--am-verify-code-icon-size,22px);width:22px;width:var(--am-verify-code-icon-size,22px);-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:12px;margin-right:var(--am-verify-code-line-padding-right,12px)}.am-verify-code-clear-icon {line-height:1;line-height:var(--am-verify-code-icon-line-height,1)}.am-verify-code-clear.show {visibility:visible}.am-verify-code-clear.hidden {visibility:hidden;pointer-events:none}.am-verify-code-line-bottom::after {content:'';position:absolute;background-color:#eee;display:block;top:auto;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.am-verify-code-item.last .am-verify-code-line-bottom::after {display:none}.am-verify-code-action {border-left-width:1px;border-left-width:var(--am-verify-code-action-border-left-width,1px);border-left-style:solid;border-left-color:#ccc;border-left-color:var(--am-verify-code-action-border-left-color,#ccc);padding-left:12px;padding-left:var(--am-verify-code-action-padding-left,12px)}.am-verify-code-action.active {color:#1677ff;color:var(--am-verify-code-action-active-color,#1677ff)}.am-verify-code-action.inactive {color:#999;color:var(--am-verify-code-action-inactive-color,#999)}.am-verify-code-placeholder-base {color:#ccc;color:var(--am-verify-code-item-placeholder-color,#ccc)}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "lOCP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/pull-down-refresh/pull-down-refresh",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("n+Kq");
    },
    stylesheet: function () {
      return __webpack_require__("JxNG");
    }
  });
  
  

/***/ }),

/***/ "lQ4d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("sCgQ");
/* harmony import */ var M_2_ = __webpack_require__("o8kU");
/* harmony import */ var M_3_ = __webpack_require__("/l8T");
/* harmony import */ var M_4_ = __webpack_require__("qyym");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/popover/popover.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "lQL6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("md0V");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/log-off/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "lXEk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/icon/icon",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("WrIM");
    },
    stylesheet: function () {
      return __webpack_require__("vQnI");
    }
  });
  
  

/***/ }),

/***/ "lXew":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/events/events.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "lfwh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("o8kU");
/* harmony import */ var M_2_ = __webpack_require__("4nhB");
/* harmony import */ var M_3_ = __webpack_require__("6vaL");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/footer/footer.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "lo9R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-title {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 12px 12px;padding:0 var(--am-title-paddingLR,12px) var(--am-title-paddingB,12px);font-size:15px;font-size:var(--am-title-text-fontSize,15px);color:#333;color:var(--am-title-text-color,#333)}.am-title-line {position:relative;margin-bottom:12px;margin-bottom:var(--am-title-marginBottom,12px)}.am-title-line::after {content:'';position:absolute;background-color:#eee;display:block;top:auto;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.am-title-icon {width:24px;width:var(--am-title-icon-width,24px);height:24px;height:var(--am-title-icon-height,24px);overflow:hidden;margin-right:8px;margin-right:var(--am-title-icon-marginRight,8px);background-position:center;background-repeat:no-repeat;background-size:100% auto}.am-title-text {-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700}.am-title-operation {width:24px;width:var(--am-operation-icon-width,24px);height:24px;height:var(--am-operation-icon-height,24px);overflow:hidden;text-align:center;line-height:24px;line-height:var(--am-title-operation-lineHeight,24px);margin-left:8px;margin-left:var(--am-title-operation-marginLeft,8px)}.am-title-operation-icon {font-size:18px;font-size:var(--am-title-operation-icon-size,18px);color:#ccc;color:var(--am-title-operation-icon-color,#ccc)}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "lu5g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("uXlA");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/filter/filter.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "lw+D":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Image = _afAppx.Image || (0, _EmptyComponentFactory2.default)("image");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};

var _ref = _react2.default.createElement(View, {
  className: "image-plus-horizontal"
});

var _ref2 = _react2.default.createElement(View, {
  className: "image-plus-vertical"
});

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("文件 API")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("选择文件")
      ),
      data['tempFilePath'] != '' ? _react2.default.createElement(Image, {
        src: data['tempFilePath'], className: "image"
      }) : null,
      data['tempFilePath'] === '' && data['savedFilePath'] != '' ? _react2.default.createElement(Image, {
        src: data['savedFilePath'], className: "image"
      }) : null,
      data['tempFilePath'] === '' && data['savedFilePath'] === '' ? _react2.default.createElement(
        View,
        {
          className: "image-plus", onTap: $getEventHandler(this, "chooseImage")
        },
        _ref,
        _ref2
      ) : null,
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          Button,
          {
            className: "page-body-button", type: "primary", onTap: $getEventHandler(this, "saveFile")
          },
          (0, _toString2.default)("保存文件")
        ),
        _react2.default.createElement(
          Button,
          {
            className: "page-body-button", type: "primary", onTap: $getEventHandler(this, "getFileInfo")
          },
          (0, _toString2.default)("获取文件信息")
        ),
        _react2.default.createElement(
          Button,
          {
            className: "page-body-button", type: "primary", onTap: $getEventHandler(this, "getSavedFileInfo")
          },
          (0, _toString2.default)("获取保存的文件信息")
        ),
        _react2.default.createElement(
          Button,
          {
            className: "page-body-button", type: "primary", onTap: $getEventHandler(this, "getSavedFileList")
          },
          (0, _toString2.default)("获取保存的文件列表")
        ),
        _react2.default.createElement(
          Button,
          {
            className: "page-body-button", type: "primary", onTap: $getEventHandler(this, "removeSavedFile")
          },
          (0, _toString2.default)("移除保存的文件")
        ),
        _react2.default.createElement(
          Button,
          {
            className: "page-body-button", onTap: $getEventHandler(this, "clear")
          },
          (0, _toString2.default)("删除文件")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "lwzp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".block-list-container {width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#fff}.block-list {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:start;justify-content:start;-webkit-flex-wrap:wrap;flex-wrap:wrap;width:100%;padding-bottom:0.2rem}.block-item {height:0.5rem;margin-right:0.2rem;margin-bottom:0.2rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#333;font-size:0.24rem;background-color:rgba(245, 245, 245, 0.71);padding:0 0.18rem}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "lzGw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("hZKm");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/page-result/empty/index",
    
    
    
    usingComponents: {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"},
    render: function () {
      return __webpack_require__("N8lS");
    },
    stylesheet: function () {
      return __webpack_require__("pzGx");
    }
  });
  
  

/***/ }),

/***/ "m1U+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".clipboard-button {margin-left:5px}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "mCr/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("/XTH");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/grid/3/index",
    
    
    
    usingComponents: {"grid":"/node_modules/mini-ali-ui/es/grid/index"},
    render: function () {
      return __webpack_require__("7bHt");
    },
    stylesheet: function () {
      return __webpack_require__("mZ2U");
    }
  });
  
  

/***/ }),

/***/ "mEEi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/radio/radio",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("ruG3");
    },
    stylesheet: function () {
      return __webpack_require__("ueHU");
    }
  });
  
  

/***/ }),

/***/ "mGvU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/video/video",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("dlFD");
    },
    stylesheet: function () {
      return __webpack_require__("ZBMD");
    }
  });
  
  

/***/ }),

/***/ "mHLK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      id: "am-vtab-slide-" + data['anchor'], ref: $getRefHandler(this, "am-vtab-slide-" + data['anchor'])
    },
    (0, _renderSlot2.default)(data, "$default", null)
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "mLae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Picker = _afAppx.Picker || (0, _EmptyComponentFactory2.default)("picker");

var Image = _afAppx.Image || (0, _EmptyComponentFactory2.default)("image");


var $templates = {};

var _ref = _react2.default.createElement(Image, {
  className: "row-arrow", src: "/image/arrowright.png", mode: "aspectFill"
});

var _ref2 = _react2.default.createElement(Image, {
  className: "row-arrow", src: "/image/arrowright.png", mode: "aspectFill"
});

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("选择器")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        Picker,
        {
          onChange: $getEventHandler(this, "bindPickerChange"), value: data['index'], range: data['array']
        },
        _react2.default.createElement(
          View,
          {
            className: "row"
          },
          _react2.default.createElement(
            View,
            {
              className: "row-title"
            },
            (0, _toString2.default)("地区选择器")
          ),
          _react2.default.createElement(
            View,
            {
              className: "row-extra"
            },
            [(0, _toString2.default)("当前选择："), (0, _toString2.default)((0, _getLooseDataMember2.default)([data['array'], data['index']]))]
          ),
          _ref
        )
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        Picker,
        {
          onChange: $getEventHandler(this, "bindObjPickerChange"), value: data['arrIndex'], range: data['objectArray'], rangeKey: "name"
        },
        _react2.default.createElement(
          View,
          {
            className: "row"
          },
          _react2.default.createElement(
            View,
            {
              className: "row-title"
            },
            (0, _toString2.default)("ObjectArray")
          ),
          _react2.default.createElement(
            View,
            {
              className: "row-extra"
            },
            [(0, _toString2.default)("当前选择："), (0, _toString2.default)((0, _getLooseDataMember2.default)([data['objectArray'], data['arrIndex'], "name"]))]
          ),
          _ref2
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "mNQa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("4HN6");
/* harmony import */ var M_1_ = __webpack_require__("jUqo");
/* harmony import */ var M_2_ = __webpack_require__("ju+b");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

    
  
  Object(M_2_["Page"])({
    pagePath: "page/component/filter/single/index",
    
    
    
    usingComponents: {"filter":"/node_modules/mini-ali-ui/es/filter/index","filter-item":"/node_modules/mini-ali-ui/es/filter/filter-item/index"},
    render: function () {
      return __webpack_require__("gcu8");
    },
    stylesheet: function () {
      return __webpack_require__("u3JE");
    }
  });
  
  

/***/ }),

/***/ "mPqH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".dyt-list {margin-top:0}.dyt-list .am-list-item-thumb {border-radius:5px}.dyt-list .am-list-briefX {color:#909090;font-size:14px}.am-list-sticky {position:-webkit-sticky;position:sticky;top:0;z-index:2}.am-list-item .a-icon-success_no_circle {fill:#1677ff}.am-list-item .a-shared-checkbox {border:0}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "mXuQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-popup-content {position:fixed}.am-popup-mask {visibility:hidden;position:fixed;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.75);opacity:0}.am-popup-left {-webkit-transform:translateX(-100%);transform:translateX(-100%);left:0;top:0;bottom:0}.am-popup-right {-webkit-transform:translateX(100%);transform:translateX(100%);right:0;top:0;bottom:0}.am-popup-top {top:0;width:100vw;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.am-popup-bottom {bottom:0;width:100vw;-webkit-transform:translateY(100%);transform:translateY(100%)}.am-popup-show .am-popup-content {-webkit-transform:none;transform:none}.am-popup-show .am-popup-mask {visibility:visible;opacity:1}.am-popup.animation .am-popup-content {-webkit-transition:all .2s linear;transition:all .2s linear}.am-popup.animation .am-popup-mask {-webkit-transition:all .2s linear;transition:all .2s linear}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "mY68":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("HW5p");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/choose-location/choose-location.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "mZ2U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("n6e+");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/grid/3/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "md0V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "mdCZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/scan-code/scan-code",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("olqx");
    },
    stylesheet: function () {
      return __webpack_require__("TVln");
    }
  });
  
  

/***/ }),

/***/ "mfb8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/upload-file/upload-file",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("VpPl");
    },
    stylesheet: function () {
      return __webpack_require__("+wje");
    }
  });
  
  

/***/ }),

/***/ "mg/N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Yq+t");
/* harmony import */ var M_1_ = __webpack_require__("+uWv");
/* harmony import */ var M_2_ = __webpack_require__("yclZ");
/* harmony import */ var M_3_ = __webpack_require__("ju+b");
/* harmony import */ var M_3__default = /*#__PURE__*/__webpack_require__.n(M_3_);

  


    
  
  M_3_["WorkerComponent"] && Object(M_3_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/guide/index",
    
    
    usingComponents: {"pagination":"/node_modules/mini-ali-ui/es/pagination/index","mask":"/node_modules/mini-ali-ui/es/mask/index","button":"/node_modules/mini-ali-ui/es/button/index"},
    render: function () {
      return __webpack_require__("zw8Z");
    },
  });
  
  

/***/ }),

/***/ "mkSY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var MultiLiner_ = $getComponentClass("/node_modules/mini-ali-ui/es/multi-liner/index");
var MultiLiner = MultiLiner_ || (0, _EmptyComponentFactory2.default)("multi-liner");


var $templates = {};

var _ref = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref2 = _react2.default.createElement(View, {
  style: "margin: 10px;"
});

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _ref,
    _react2.default.createElement(
      View,
      {
        className: "title"
      },
      (0, _toString2.default)("多行输入")
    ),
    _react2.default.createElement(MultiLiner, {
      'data-field': "area", placeholder: "字数统计↘", type: "text", value: data['value'], onInput: $getComponentEventHandler(this, "onInput"), last: true, autoHeight: true, controlled: data['controlled'], $isCustomComponent: this.$isCustomComponent, __tag: 'multi-liner'
    }),
    _ref2
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "mqI5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("h1Hs");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/lifestyle/lifestyle.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "mtUt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Input = _afAppx.Input || (0, _EmptyComponentFactory2.default)("input");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("输入框")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "form-row"
        },
        _react2.default.createElement(
          View,
          {
            className: "form-row-label"
          },
          (0, _toString2.default)("密码键盘")
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row-content"
          },
          _react2.default.createElement(Input, {
            className: "input", password: true, type: "text", onInput: $getEventHandler(this, "bindHideKeyboard"), placeholder: "输入 123 自动收起键盘"
          })
        )
      ),
      _react2.default.createElement(
        View,
        {
          className: "form-row"
        },
        _react2.default.createElement(
          View,
          {
            className: "form-row-label"
          },
          (0, _toString2.default)("数字键盘")
        ),
        _react2.default.createElement(
          View,
          {
            className: "form-row-content"
          },
          _react2.default.createElement(Input, {
            className: "input", type: "digit", onInput: $getEventHandler(this, "bindHideKeyboard"), placeholder: "输入 123 自动收起键盘"
          })
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "mxG3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/ocr-bank-card/ocr-bank-card",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("ihFp");
    },
    stylesheet: function () {
      return __webpack_require__("SGQA");
    }
  });
  
  

/***/ }),

/***/ "my8D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("yclZ");
/* harmony import */ var M_1_ = __webpack_require__("5AAy");
/* harmony import */ var M_2_ = __webpack_require__("ju+b");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

    
  
  M_2_["WorkerComponent"] && Object(M_2_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/modal/index",
    
    
    usingComponents: {"button":"/node_modules/mini-ali-ui/es/button/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"},
    render: function () {
      return __webpack_require__("n48k");
    },
  });
  
  

/***/ }),

/***/ "myXe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("F0yS");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/redpacket/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "n+Kq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("下滑页面即可刷新")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-btns"
        },
        _react2.default.createElement(
          View,
          {
            type: "primary", onTap: $getEventHandler(this, "stopPullDownRefresh")
          },
          (0, _toString2.default)("停止刷新")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "n+dc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("KdVj");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/filter/alternative/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "n1Bx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("6Bb1");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/animation/animation.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "n2xt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("9nU3");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/amount-input/amount-input",
    
    
    
    usingComponents: {"amount-input":"/node_modules/mini-ali-ui/es/amount-input/index"},
    render: function () {
      return __webpack_require__("iAOM");
    },
    stylesheet: function () {
      return __webpack_require__("dgKb");
    }
  });
  
  

/***/ }),

/***/ "n40X":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Form = _afAppx.Form || (0, _EmptyComponentFactory2.default)("form");

var Input = _afAppx.Input || (0, _EmptyComponentFactory2.default)("input");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};

var _ref = _react2.default.createElement(
  View,
  {
    className: "page-section-demo"
  },
  _react2.default.createElement(Input, {
    className: "page-body-form-value", type: "text", placeholder: "标题", name: "title"
  }),
  _react2.default.createElement(Input, {
    className: "page-body-form-value", type: "text", placeholder: "导航栏背景色", name: "backgroundColor"
  }),
  _react2.default.createElement(Input, {
    className: "page-body-form-value", type: "text", placeholder: "导航栏底部边框颜色", name: "borderBottomColor"
  }),
  _react2.default.createElement(Input, {
    className: "page-body-form-value", type: "text", placeholder: "导航栏图片地址", name: "image"
  })
);

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("设置导航栏 API")
    ),
    _react2.default.createElement(
      Form,
      {
        onSubmit: $getEventHandler(this, "setNavigationBar"), style: "align-self:stretch"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section"
        },
        _ref,
        _react2.default.createElement(
          View,
          {
            className: "page-section-btns"
          },
          _react2.default.createElement(
            Button,
            {
              type: "primary", size: "mini", formType: "submit"
            },
            (0, _toString2.default)("设置")
          ),
          _react2.default.createElement(
            Button,
            {
              type: "primary", size: "mini", onTap: $getEventHandler(this, "resetNavigationBar")
            },
            (0, _toString2.default)("重置")
          )
        )
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "tips"
      },
      (0, _toString2.default)("tips:"),
      _react2.default.createElement(
        View,
        {
          className: "item"
        },
        (0, _toString2.default)("1. image:图片链接地址，必须 https，请使用一张3x高清图。若设置了 image，则 title 参数失效")
      ),
      _react2.default.createElement(
        View,
        {
          className: "item"
        },
        (0, _toString2.default)("2. backgroundColor: 导航栏背景色，支持 16 进制颜色值")
      ),
      _react2.default.createElement(
        View,
        {
          className: "item"
        },
        (0, _toString2.default)("3. borderBottomColor: 导航栏底部边框颜色，支持16进制颜色值。若设置了 backgroundColor，borderBottomColor 会不生效，默认会和 backgroundColor 颜色一样。")
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "n48k":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Image = _afAppx.Image || (0, _EmptyComponentFactory2.default)("image");
var AmIcon_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-icon/index");
var AmIcon = AmIcon_ || (0, _EmptyComponentFactory2.default)("am-icon");


var $templates = {};
function render(data) {
  var _this = this;

  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "am-modal-" + (data['show'] ? 'show' : 'hide'), disableScroll: data['disableScroll'], style: data['zIndex'] ? 'z-index: ' + data['zIndex'] + ';' : ''
    },
    data['mask'] ? _react2.default.createElement(View, {
      className: "am-modal-mask " + (data['advice'] === true ? 'am-modal-mask-advice' : '')
    }) : null,
    _react2.default.createElement(
      View,
      {
        className: "am-modal-document " + (data['advice'] === true ? 'am-modal-document-advice' : '')
      },
      _react2.default.createElement(
        View,
        {
          className: "am-modal " + data['className']
        },
        _react2.default.createElement(
          View,
          {
            className: "am-modal-content " + (data['topImageSize'] === 'lg' ? 'am-modal-content--fill' : '')
          },
          data['topImage'] ? _react2.default.createElement(
            View,
            {
              className: "am-modal-image am-modal-image-" + data['topImageSize']
            },
            _react2.default.createElement(Image, {
              className: "am-modal-image-element", src: data['topImage']
            })
          ) : null,
          (0, _getLooseDataMember2.default)([data['$slots'], "header"]) ? _react2.default.createElement(
            View,
            {
              className: "am-modal-header"
            },
            (0, _renderSlot2.default)(data, "header", null)
          ) : null,
          _react2.default.createElement(
            View,
            {
              className: "am-modal-body"
            },
            (0, _renderSlot2.default)(data, "$default", null)
          )
        ),
        (0, _getLooseDataMember2.default)([data['$slots'], "footer"]) ? _react2.default.createElement(
          View,
          {
            className: "am-modal-footer", hoverClass: "am-modal-footer-active", onTap: $getEventHandler(this, "_onModalClick")
          },
          (0, _renderSlot2.default)(data, "footer", null)
        ) : null,
        data['buttons'] ? _react2.default.createElement(
          View,
          {
            className: "am-modal-buttons " + (data['_buttonsLayout'] === 'vertical' ? 'am-modal-buttons--vertical' : 'am-modal-buttons--horizontal')
          },
          (0, _iterate2.default)(data['buttons'], function (button, index) {
            return _react2.default.createElement(
              View,
              {
                className: "am-modal-button " + (0, _getLooseDataMember2.default)([button, "extClass"]) + " " + (data['_buttonsLayout'] === 'vertical' ? 'am-modal-button--vertical' : 'am-modal-button--horizontal'), hoverClass: "am-modal-button-active", onTap: $getEventHandler(_this, "_onButtonClick"), 'data-index': index, 'data-item': button
              },
              (0, _toString2.default)((0, _getLooseDataMember2.default)([button, "text"]))
            );
          })
        ) : null,
        data['showClose'] || data['advice'] ? _react2.default.createElement(
          View,
          {
            className: "am-modal-close", hoverClass: "am-modal-close-active", onTap: $getEventHandler(this, "_onModalClose")
          },
          _react2.default.createElement(AmIcon, {
            type: data['advice'] ? 'close-circle' : 'close', size: data['advice'] ? data['adviceClose'] : data['normalClose'], color: data['closeType'] === '1' ? 'white' : '#999', $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
          })
        ) : null
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "n5OC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("dhjY");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/rsa/rsa.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "n6e+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("35mS");
/* harmony import */ var M_2_ = __webpack_require__("o8kU");
/* harmony import */ var M_3_ = __webpack_require__("eKRb");
/* harmony import */ var M_4_ = __webpack_require__("6fhi");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/grid/3/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "n6fa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");

var Input = _afAppx.Input || (0, _EmptyComponentFactory2.default)("input");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _react2.default.createElement(
      View,
      {
        className: "page-section-demo"
      },
      _react2.default.createElement(
        Text,
        null,
        (0, _toString2.default)("目前导航栏的背景色:")
      ),
      _react2.default.createElement(Input, {
        type: "text", disabled: true, value: (0, _getLooseDataMember2.default)([data['titleColor'], "color"])
      })
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section-btns"
      },
      _react2.default.createElement(
        View,
        {
          onTap: $getEventHandler(this, "getTitleColor")
        },
        (0, _toString2.default)("获取导航栏背景颜色")
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "n8Hr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("WA4c");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/long-password/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "nBGU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-footer {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.am-footer-content {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;font-size:13px;font-size:var(--am-footer-content-fontSize,13px);color:#ccc;color:var(--am-footer-content-color,#ccc)}.am-footer-end {width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 12px;padding:0 var(--am-footer-divider-paddingLR,12px);font-size:13px;font-size:var(--am-footer-content-fontSize,13px);color:#ccc;color:var(--am-footer-content-color,#ccc);box-sizing:border-box}.am-footer-end__divider {position:relative;-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;height:2px;box-sizing:border-box}.am-footer-end__divider::after {content:'';position:absolute;background-color:#eee;display:block;top:auto;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.am-footer-end__text {white-space:nowrap;padding:20px 12px;padding:var(--am-footer-divider-content-paddingTB,20px) var(--am-footer-divider-content-paddingLR,12px)}.am-footer-extend {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.am-footer-link {margin-bottom:8px;margin-bottom:var(--am-footer-link-marginBottom,8px);font-size:15px;font-size:var(--am-footer-link-fontSize,15px);color:#1677ff;color:var(--am-footer-link-color,#1677ff)}.am-footer-link__line {width:1px;height:12px;height:var(--am-footer-link-lineSize,12px);overflow:hidden;margin:0 12px 8px;margin:0 var(--am-footer-link-lineMarginLR,12px) var(--am-footer-link-lineMarginB,8px);font-size:0;background-color:#eee;background-color:var(--am-footer-link-lineColor,#eee)}.am-footer-link__hover {opacity:.6}.am-footer-guide {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:4px 12px;padding:var(--am-footer-guide-paddingTB,4px) var(--am-footer-guide-paddingLR,12px);margin-right:12px;margin-right:var(--am-footer-guide-marginRight,12px);margin-top:12px;margin-top:var(--am-footer-guide-marginTop,12px);font-size:12px;font-size:var(--am-footer-guide-fontSize,12px);border-radius:50vh;border-radius:var(--am-footer-guide-borderRadius,50vh);background-color:#f5f5f5;background-color:var(--am-footer-guide-bgc,#f5f5f5)}.am-footer-guide:last-child {margin-right:0}.am-footer-guide__text {color:#999;color:var(--am-footer-guide-color,#999)}.am-footer-guide__hover {-webkit-filter:brightness(.9);filter:brightness(.9)}.am-footer-guide__hover .am-footer-guide__text {opacity:.3}.am-footer-brand {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.am-footer-brand-logo {margin-right:12px;margin-right:var(--am-footer-brand-marginRight,12px);margin-bottom:8px;margin-bottom:var(--am-footer-brand-marginBottom,8px)}.am-footer-brand-logo:last-child {margin-right:0}.am-footer-brand-logo:active {-webkit-filter:brightness(.9);filter:brightness(.9)}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "nF4f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("设置 optionMenu 按钮")
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "nMhi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/options-select/options-select.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "nQsa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("lfwh");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/footer/footer.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "nU5s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "nUBp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("HRDH");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/switch-ali-ui/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "nWIP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("5uLW");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/pull-down-refresh/pull-down-refresh.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "nbTL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("eYJu");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/file/file.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "nedy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  M_0_["WorkerComponent"] && Object(M_0_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/multi-liner/index",
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("G6e7");
    },
  });
  
  

/***/ }),

/***/ "nhWK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-flexbox {display:-webkit-box;display:-webkit-flex;display:flex}.am-flexbox-dir-row {-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.am-flexbox-dir-row-reverse {-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.am-flexbox-dir-column {-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.am-flexbox-dir-column-reverse {-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;flex-direction:column-reverse}.am-flexbox-nowrap {-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.am-flexbox-wrap {-webkit-flex-wrap:wrap;flex-wrap:wrap}.am-flexbox-wrap-reverse {-webkit-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.am-flexbox-justify-start {-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.am-flexbox-justify-center {-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.am-flexbox-justify-end {-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.am-flexbox-justify-between {-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.am-flexbox-justify-around {-webkit-justify-content:space-around;justify-content:space-around}.am-flexbox-align-start {-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.am-flexbox-align-end {-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.am-flexbox-align-center {-webkit-box-align:center;-webkit-align-items:center;align-items:center}.am-flexbox-align-stretch {-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch}.am-flexbox-align-baseline {-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline}.am-flexbox-align-content-start {-webkit-align-content:flex-start;align-content:flex-start}.am-flexbox-align-content-end {-webkit-align-content:flex-end;align-content:flex-end}.am-flexbox-align-content-center {-webkit-align-content:center;align-content:center}.am-flexbox-align-content-between {-webkit-align-content:space-between;align-content:space-between}.am-flexbox-align-content-around {-webkit-align-content:space-around;align-content:space-around}.am-flexbox-align-content-stretch {-webkit-align-content:stretch;align-content:stretch}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "nhYY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/textarea/textarea",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("AuFq");
    },
    stylesheet: function () {
      return __webpack_require__("WgZJ");
    }
  });
  
  

/***/ }),

/***/ "nn2v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("3bQr");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/scan-code/scan-code.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "nofa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Map = _afAppx.Map || (0, _EmptyComponentFactory2.default)("map");

var CoverView = _afAppx.CoverView || (0, _EmptyComponentFactory2.default)("cover-view");

var CoverImage = _afAppx.CoverImage || (0, _EmptyComponentFactory2.default)("cover-image");


var $templates = {};

var _ref = _react2.default.createElement(
  CoverView,
  {
    className: "cover-view"
  },
  _react2.default.createElement(CoverView, {
    className: "cover-view-item cover-view-item-1"
  }),
  _react2.default.createElement(CoverView, {
    className: "cover-view-item cover-view-item-2"
  }),
  _react2.default.createElement(CoverView, {
    className: "cover-view-item cover-view-item-3"
  })
);

var _ref2 = _react2.default.createElement(CoverImage, {
  style: "", src: "/image/ant.png"
});

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("cover-view")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo", style: "position: relative;"
        },
        _react2.default.createElement(Map, {
          longitude: data['longitude'], latitude: data['latitude'], scale: data['scale'], style: "width: 100%; height: 200px;", includePoints: data['includePoints']
        }),
        _ref,
        _ref2
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "npiP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("z78H");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/picker/picker.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "nqXb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "nyvl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("NJJE");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/checkbox/checkbox.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "nzff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/text-risk-identification/text-risk-identification",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("ssFq");
    },
    stylesheet: function () {
      return __webpack_require__("BusE");
    }
  });
  
  

/***/ }),

/***/ "o+jn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-message {background-color:#fff;background-color:var(--am-message-background,#fff);padding:32px 12px;padding:var(--am-message-padding-h,32px) var(--am-message-padding-v,12px);text-align:center;line-height:normal;box-sizing:border-box;position:relative}.am-message::after {content:'';position:absolute;background-color:#eee;display:block;top:auto;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.am-message .am-icon {display:block;line-height:1;line-height:var(--am-message-icon-lineheight,1);font-size:64px;font-size:var(--am-message-icon-size,64px)}.am-message .icon-success {color:#1677ff;color:var(--am-message-success-color,#1677ff)}.am-message .icon-info {color:#1677ff;color:var(--am-message-info-color,#1677ff)}.am-message .icon-waiting {color:#00b578;color:var(--am-message-waiting-color,#00b578)}.am-message .icon-warn {color:#ff8f1f;color:var(--am-message-warn-color,#ff8f1f)}.am-message .icon-fail {color:#ff3b30;color:var(--am-message-fail-color,#ff3b30)}.am-message-main {font-size:18px;font-size:var(--am-message-title-size,18px);margin-top:20px;margin-top:var(--am-message-title-margin,20px);color:#333;color:var(--am-message-title-color,#333)}.am-message-sub {font-size:13px;font-size:var(--am-message-subtitle-size,13px);margin-top:8px;margin-top:var(--am-message-subtitle-margin,8px);color:#999;color:var(--am-message-subtitle-color,#999)}.am-message-button-wrap {margin-top:20px;margin-top:var(--am-message-margintop,20px);padding:0 12px;padding:0 var(--am-message-button-margin,12px)}.am-message-button-wrap .a-button {margin-bottom:12px;margin-bottom:var(--am-message-button-margin,12px)}.am-message-button-wrap .a-button:last-child {margin-bottom:0}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "o8kU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("B3DF");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/am-icon/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "oC31":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var AmIcon_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-icon/index");
var AmIcon = AmIcon_ || (0, _EmptyComponentFactory2.default)("am-icon");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "am-title " + (data['hasLine'] ? 'am-title-line' : '') + " " + data['className']
    },
    data['iconURL'] !== '' ? _react2.default.createElement(View, {
      className: "am-title-icon", style: data['iconURL'] ? 'background-image: url(' + data['iconURL'] + ');' : ''
    }) : null,
    _react2.default.createElement(
      View,
      {
        className: "am-title-text"
      },
      (0, _renderSlot2.default)(data, "$default", null)
    ),
    data['type'] === 'arrow' || data['type'] === 'close' || data['type'] === 'more' ? _react2.default.createElement(
      View,
      {
        className: "am-title-operation", onTap: $getEventHandler(this, "onClick")
      },
      _react2.default.createElement(AmIcon, {
        type: data['type'] === 'arrow' ? 'right' : data['type'], className: "am-title-operation-icon", $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
      })
    ) : null
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "oCMV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("pX8w");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/get-location/get-location.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "oCUz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");

var Image = _afAppx.Image || (0, _EmptyComponentFactory2.default)("image");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        data['hasUserInfo'] === false ? _react2.default.createElement(
          Text,
          null,
          (0, _toString2.default)("点击 [获取] 可获取用户头像及昵称")
        ) : null,
        data['hasUserInfo'] === true ? [_react2.default.createElement(
          View,
          {
            className: "userinfo-avatar"
          },
          _react2.default.createElement(Image, {
            className: "userinfo-avatar-img", src: (0, _getLooseDataMember2.default)([data['userInfo'], "avatar"])
          })
        ), _react2.default.createElement(
          View,
          {
            className: "userinfo-nickname"
          },
          (0, _toString2.default)((0, _getLooseDataMember2.default)([data['userInfo'], "nickName"]))
        )] : null
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-btns"
        },
        _react2.default.createElement(
          View,
          {
            onTap: $getEventHandler(this, "getUserInfo")
          },
          (0, _toString2.default)("获取")
        ),
        _react2.default.createElement(
          View,
          {
            onTap: $getEventHandler(this, "clear")
          },
          (0, _toString2.default)("清空")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "oDgw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("y1Kf");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/set-navigation-bar/set-navigation-bar.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "oFGT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var Input = _afAppx.Input || (0, _EmptyComponentFactory2.default)("input");

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var AmIcon_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-icon/index");
var AmIcon = AmIcon_ || (0, _EmptyComponentFactory2.default)("am-icon");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");


var $templates = {};
function render(data) {
  var _this = this;

  return (0, _createRoot2.default)([_react2.default.createElement(Input, {
    onInput: $getEventHandler(this, "searchIcon"), className: "searchInput", placeholder: "查找 icon"
  }), _react2.default.createElement(
    View,
    {
      className: "icon-list"
    },
    (0, _getLooseDataMember2.default)([data['searchIcon'], "length"]) > 0 ? _react2.default.createElement(
      View,
      null,
      (0, _iterate2.default)(data['searchIcon'], function (item, index) {
        return _react2.default.createElement(
          View,
          {
            className: "icon-item"
          },
          _react2.default.createElement(AmIcon, {
            type: item, size: "30", $isCustomComponent: _this.$isCustomComponent, __tag: 'am-icon'
          }),
          _react2.default.createElement(
            Text,
            {
              className: "icon-desc"
            },
            (0, _toString2.default)(item)
          )
        );
      })
    ) : _react2.default.createElement(
      View,
      null,
      (0, _iterate2.default)(data['iconTypes'], function (item, index) {
        return _react2.default.createElement(
          View,
          {
            className: "icon-item"
          },
          _react2.default.createElement(AmIcon, {
            type: item, size: "30", $isCustomComponent: _this.$isCustomComponent, __tag: 'am-icon'
          }),
          _react2.default.createElement(
            Text,
            {
              className: "icon-desc"
            },
            (0, _toString2.default)(item)
          )
        );
      })
    )
  )]);
};
module.exports = exports['default'];

/***/ }),

/***/ "oHZe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("bF0z");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/canvas/canvas.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "oLpq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "oN9p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":["/page/API/ocr-template/ocr-template.acss"]}*/var internal_style;
/* require("/page/API/ocr-template/ocr-template.acss") */

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "oRuj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("lCTV");
/* harmony import */ var M_1_ = __webpack_require__("5AAy");
/* harmony import */ var M_2_ = __webpack_require__("ju+b");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

    
  
  Object(M_2_["Page"])({
    pagePath: "page/component/alphabet/index",
    
    
    
    usingComponents: {"alphabet":"/node_modules/mini-ali-ui/es/list/alphabet/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"},
    render: function () {
      return __webpack_require__("+EL3");
    },
    stylesheet: function () {
      return __webpack_require__("aA1a");
    }
  });
  
  

/***/ }),

/***/ "obB4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/navigation-bar-loading/navigation-bar-loading",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("Ip6Z");
    },
    stylesheet: function () {
      return __webpack_require__("vFRM");
    }
  });
  
  

/***/ }),

/***/ "oiDP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/navigator/navigate",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("jyVW");
    },
    stylesheet: function () {
      return __webpack_require__("LXt9");
    }
  });
  
  

/***/ }),

/***/ "olpB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("kk0B");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/favorite/favorite.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "olqx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Form = _afAppx.Form || (0, _EmptyComponentFactory2.default)("form");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        Form,
        {
          onSubmit: $getEventHandler(this, "scanCode")
        },
        _react2.default.createElement(
          View,
          null,
          _react2.default.createElement(
            Button,
            {
              type: "primary", onTap: $getEventHandler(this, "scan")
            },
            (0, _toString2.default)("扫码")
          )
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "omCC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("gWg8");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/compress-image/compress-image.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "onjp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "ouCVQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "ouPZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("yhK8");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/grid/grid.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ovtC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var PageResult_ = $getComponentClass("/node_modules/mini-ali-ui/es/page-result/index");
var PageResult = PageResult_ || (0, _EmptyComponentFactory2.default)("page-result");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _react2.default.createElement(PageResult, {
      type: "redpacket", local: true, title: "什么都没有", brief: "红包已领空", $isCustomComponent: this.$isCustomComponent, __tag: 'page-result'
    })
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "p7Rj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("XkMr");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

var _ocrTemplate = __webpack_require__("4gaC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $templates = {};
$templates = (0, _extends3.default)({}, _ocrTemplate.$ownTemplates);
function render(data) {
  return (0, _createRoot2.default)((0, _useTemplate2.default)($templates["ocr-template"], {
    textArry: data['textArry'],
    imgUrl: data['imgUrl']
  }, undefined, this));
};
module.exports = exports["default"];

/***/ }),

/***/ "p9IQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/input/input",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("SU5v");
    },
    stylesheet: function () {
      return __webpack_require__("LrK+");
    }
  });
  
  

/***/ }),

/***/ "pBG+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("bIyI");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/get-title-color/get-title-color.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "pDAP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var PageResult_ = $getComponentClass("/node_modules/mini-ali-ui/es/page-result/index");
var PageResult = PageResult_ || (0, _EmptyComponentFactory2.default)("page-result");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _react2.default.createElement(PageResult, {
      type: "redpacket", title: "什么都没有", brief: "红包已领空", footer: data['footer'], $isCustomComponent: this.$isCustomComponent, __tag: 'page-result'
    })
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "pKej":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("mg/N");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/guide/guide",
    
    
    
    usingComponents: {"guide":"/node_modules/mini-ali-ui/es/guide/index"},
    render: function () {
      return __webpack_require__("E+ZE");
    },
    stylesheet: function () {
      return __webpack_require__("aFVz");
    }
  });
  
  

/***/ }),

/***/ "pUUD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("WZZ7");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/error/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "pX8w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".page-body-info {height:2.5rem}.page-body-text-small {font-size:0.24rem;color:#000;margin-bottom:1rem}.page-body-text-location {display:-webkit-box;display:-webkit-flex;display:flex;font-size:0.5rem}.page-body-text-location .a-text {margin:0.1rem}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "pZem":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("FgaX");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/label/label.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "pmjH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".container {padding:0.2rem}.container .a-button {margin-bottom:0.24rem}.title {padding-top:0.24rem;font-weight:bold}.inputItem {margin:0.16rem 0 0.24rem;padding:0.08rem 0.16rem;font-size:0.3rem;border:1px solid #eee}.radio-group {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:0.24rem}.radio {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:0.16rem}.changeItem {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:0.24rem}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "pn3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("puq/");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/payment/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "puq/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "pwXV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9YID");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/report-analytics/report-analytics.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "pzGx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("rkZK");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/empty/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "q1Kk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("BrvE");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/mask/mask.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "q245":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  M_0_["WorkerComponent"] && Object(M_0_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/flex/index",
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("MdhU");
    },
  });
  
  

/***/ }),

/***/ "q2NK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "q3wS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/report-analytics/report-analytics",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("tiII");
    },
    stylesheet: function () {
      return __webpack_require__("qrTL");
    }
  });
  
  

/***/ }),

/***/ "q74K":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var ScrollView = _afAppx.ScrollView || (0, _EmptyComponentFactory2.default)("scroll-view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("可滚动视图区域")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("vertical scroll")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          ScrollView,
          {
            scrollY: true, style: "height: 200px;", onScrollToUpper: $getEventHandler(this, "upper"), onScrollToLower: $getEventHandler(this, "lower"), onScroll: $getEventHandler(this, "scroll"), scrollIntoView: data['toView'], scrollTop: data['scrollTop']
          },
          _react2.default.createElement(View, {
            id: "blue", className: "scroll-view-item bc_blue", ref: $getRefHandler(this, "blue")
          }),
          _react2.default.createElement(View, {
            id: "red", className: "scroll-view-item bc_red", ref: $getRefHandler(this, "red")
          }),
          _react2.default.createElement(View, {
            id: "yellow", className: "scroll-view-item bc_yellow", ref: $getRefHandler(this, "yellow")
          }),
          _react2.default.createElement(View, {
            id: "green", className: "scroll-view-item bc_green", ref: $getRefHandler(this, "green")
          })
        )
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-btns"
        },
        _react2.default.createElement(
          View,
          {
            onTap: $getEventHandler(this, "tap")
          },
          (0, _toString2.default)("next")
        ),
        _react2.default.createElement(
          View,
          {
            onTap: $getEventHandler(this, "tapMove")
          },
          (0, _toString2.default)("move")
        ),
        _react2.default.createElement(
          View,
          {
            onTap: $getEventHandler(this, "scrollToTop")
          },
          (0, _toString2.default)("scrollToTop")
        )
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("horizontal scroll")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          ScrollView,
          {
            className: "scroll-view_H", scrollX: true, style: "width: 100%"
          },
          _react2.default.createElement(View, {
            id: "blue2", className: "scroll-view-item_H bc_blue", ref: $getRefHandler(this, "blue2")
          }),
          _react2.default.createElement(View, {
            id: "red2", className: "scroll-view-item_H bc_red", ref: $getRefHandler(this, "red2")
          }),
          _react2.default.createElement(View, {
            id: "yellow2", className: "scroll-view-item_H bc_yellow", ref: $getRefHandler(this, "yellow2")
          }),
          _react2.default.createElement(View, {
            id: "green2", className: "scroll-view-item_H bc_green", ref: $getRefHandler(this, "green2")
          })
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "q790":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("Sl/+");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/contact/contact.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "q8+8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("XQbu");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/create-inner-audiocontext/create-inner-audiocontext.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "q8Xj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var AmIcon_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-icon/index");
var AmIcon = AmIcon_ || (0, _EmptyComponentFactory2.default)("am-icon");
var Button_ = $getComponentClass("/node_modules/mini-ali-ui/es/button/index");
var Button = Button_ || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)([_react2.default.createElement(
    View,
    {
      className: "am-message " + data['className']
    },
    _react2.default.createElement(AmIcon, {
      className: "am-icon icon-" + data['type'], type: data['iconType'], $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
    }),
    _react2.default.createElement(
      View,
      {
        className: "am-message-main"
      },
      (0, _toString2.default)(data['title'])
    ),
    data['subTitle'] ? _react2.default.createElement(
      View,
      {
        className: "am-message-sub"
      },
      (0, _toString2.default)(data['subTitle'])
    ) : _react2.default.createElement(
      View,
      {
        className: "am-message-sub"
      },
      (0, _renderSlot2.default)(data, "tips", null)
    )
  ), data['mainButton'] || data['subButton'] ? _react2.default.createElement(
    View,
    {
      className: "am-message-button-wrap"
    },
    data['mainButton'] ? _react2.default.createElement(
      Button,
      {
        type: "primary", disabled: (0, _getLooseDataMember2.default)([data['mainButton'], "disabled"]), onTap: $getComponentEventHandler(this, "tapMain"), $isCustomComponent: this.$isCustomComponent, __tag: 'button'
      },
      (0, _toString2.default)((0, _getLooseDataMember2.default)([data['mainButton'], "buttonText"]))
    ) : null,
    data['subButton'] ? _react2.default.createElement(
      Button,
      {
        type: "default", disabled: (0, _getLooseDataMember2.default)([data['subButton'], "disabled"]), onTap: $getComponentEventHandler(this, "tapSub"), $isCustomComponent: this.$isCustomComponent, __tag: 'button'
      },
      (0, _toString2.default)((0, _getLooseDataMember2.default)([data['subButton'], "buttonText"]))
    ) : null
  ) : null]);
};
module.exports = exports['default'];

/***/ }),

/***/ "qEK9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("o8kU");
/* harmony import */ var M_2_ = __webpack_require__("2eFO");
/* harmony import */ var M_3_ = __webpack_require__("4mcr");
/* harmony import */ var M_4_ = __webpack_require__("JGVg");
/* harmony import */ var M_5_ = __webpack_require__("DnGP");
/* harmony import */ var M_6_ = __webpack_require__("xgtA");
/* harmony import */ var M_7_ = __webpack_require__("FeEb");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/coupon/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  
  stylesheet.imports(M_5_["default"]);
  
  stylesheet.imports(M_6_["default"]);
  
  stylesheet.imports(M_7_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "qGUU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("5AAy");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  M_1_["WorkerComponent"] && Object(M_1_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/popover/popover-item/index",
    
    
    usingComponents: {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"},
    render: function () {
      return __webpack_require__("bBKV");
    },
  });
  
  

/***/ }),

/***/ "qTQc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("q245");
/* harmony import */ var M_1_ = __webpack_require__("0U94");
/* harmony import */ var M_2_ = __webpack_require__("ju+b");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

    
  
  Object(M_2_["Page"])({
    pagePath: "page/component/flex/flex",
    
    
    
    usingComponents: {"flex":"/node_modules/mini-ali-ui/es/flex/index","flex-item":"/node_modules/mini-ali-ui/es/flex/flex-item/index"},
    render: function () {
      return __webpack_require__("2bkG");
    },
    stylesheet: function () {
      return __webpack_require__("hBAE");
    }
  });
  
  

/***/ }),

/***/ "qTq/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("zAK4");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/swipe-action/swipe-action.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "qVbC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("EkNM");
/* harmony import */ var M_2_ = __webpack_require__("3ZlR");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr-business-license/ocr-business-license.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "qapz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("OZd1");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/swipe-action/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "qb/a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/get-auth-code/get-auth-code",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("qpyU");
    },
    stylesheet: function () {
      return __webpack_require__("UhhF");
    }
  });
  
  

/***/ }),

/***/ "qbMp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":["/page/API/ocr-template/ocr-template.acss"]}*/var internal_style;
/* require("/page/API/ocr-template/ocr-template.acss") */

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "qbNF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".extra {background-image:url('https://gw.alipayobjects.com/zos/rmsportal/dOfSJfWQvYdvsZiJStvg.svg');background-size:contain;background-repeat:no-repeat;background-position:right center;opacity:0.2;height:20px;width:20px;padding-left:10px}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "qf2U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/text-risk-identification/text-risk-identification.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "qgau":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("ticb");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/page-result/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "qhUr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("XkMr");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

var _ocrTemplate = __webpack_require__("4gaC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $templates = {};
$templates = (0, _extends3.default)({}, _ocrTemplate.$ownTemplates);
function render(data) {
  return (0, _createRoot2.default)((0, _useTemplate2.default)($templates["ocr-template"], {
    textArry: data['textArry'],
    imgUrl: data['imgUrl']
  }, undefined, this));
};
module.exports = exports["default"];

/***/ }),

/***/ "qj41":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("收藏 API")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "isCollected")
          },
          (0, _toString2.default)("查询收藏")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "qnVq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("6lzm");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/get-server-time/get-server-time.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "qpRI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("npiP");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/picker/picker.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "qpyU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        null,
        (0, _toString2.default)("请不要一进入小程序就弹框授权，建议先了解小程序的服务内容")
      ),
      _react2.default.createElement(
        Button,
        {
          type: "primary", onTap: $getEventHandler(this, "getAuthCode")
        },
        (0, _toString2.default)("获取授权码")
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "qqx9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("+i+x");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/local-logoff/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "qrTL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("VqBC");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/report-analytics/report-analytics.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "qweL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  M_0_["WorkerComponent"] && Object(M_0_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/steps/index",
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("N5A3");
    },
  });
  
  

/***/ }),

/***/ "qy3x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("yka4");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/tips/1/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "qyTc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Image = _afAppx.Image || (0, _EmptyComponentFactory2.default)("image");
var Icon_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-icon/index");
var Icon = Icon_ || (0, _EmptyComponentFactory2.default)("icon");


var $templates = {};

var _ref = _react2.default.createElement(
  View,
  {
    className: "am-coupon-divider"
  },
  _react2.default.createElement(View, {
    className: "am-coupon-divider-upper-hole"
  }),
  _react2.default.createElement(
    View,
    {
      className: "am-coupon-divider-middle-blank"
    },
    _react2.default.createElement(View, {
      className: "am-coupon-divider-dashed-line"
    })
  ),
  _react2.default.createElement(View, {
    className: "am-coupon-divider-lower-hole"
  })
);

var _ref2 = _react2.default.createElement(View, {
  className: "am-coupon-used-tag"
});

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "am-coupon " + (data['used'] ? 'am-coupon-used' : ''), onTap: $getEventHandler(this, "onCouponClick"), 'data-used': data['used']
    },
    _react2.default.createElement(
      View,
      {
        className: "am-coupon-container"
      },
      data['extra'] ? _react2.default.createElement(
        View,
        {
          className: "am-coupon-thumb"
        },
        !(0, _getLooseDataMember2.default)([data['$slots'], "category"]) ? _react2.default.createElement(Image, {
          className: "am-coupon-thumb-image", src: data['thumb'], mode: "scaleToFill"
        }) : null,
        (0, _renderSlot2.default)(data, "category", null)
      ) : null,
      data['extra'] ? _ref : null,
      _react2.default.createElement(
        View,
        {
          className: "am-coupon-content " + (data['extra'] ? '' : 'am-coupon-content-no-extra')
        },
        _react2.default.createElement(
          View,
          {
            className: "am-coupon-content-text " + (data['extra'] ? '' : 'am-coupon-content-no-extra-text')
          },
          _react2.default.createElement(
            View,
            {
              className: "am-coupon-content-text-title"
            },
            (0, _toString2.default)(data['title'])
          ),
          _react2.default.createElement(
            View,
            {
              className: "am-coupon-content-text-subtitle"
            },
            (0, _toString2.default)(data['subtitle'])
          )
        ),
        _react2.default.createElement(
          View,
          {
            className: "am-coupon-content-action", catchTap: $getEventHandler(this, "catchActionTap")
          },
          (0, _renderSlot2.default)(data, "action", null)
        ),
        _react2.default.createElement(
          View,
          {
            className: "am-coupon-content-detail"
          },
          _react2.default.createElement(
            View,
            {
              className: "am-coupon-content-detail-date"
            },
            (0, _renderSlot2.default)(data, "date", null)
          ),
          !data['moreHide'] ? _react2.default.createElement(
            View,
            {
              className: "am-coupon-content-detail-more"
            },
            (0, _renderSlot2.default)(data, "detail", null)
          ) : null,
          (0, _getLooseDataMember2.default)([data['$slots'], "detail"]) ? _react2.default.createElement(
            View,
            {
              className: "am-coupon-content-detail-option " + (data['show'] ? 'am-coupon-content-detail-option__show' : ''), catchTap: $getEventHandler(this, "changeMoreState")
            },
            (0, _toString2.default)(data['moreBtn']),
            _react2.default.createElement(Icon, {
              type: !data['moreHide'] ? 'up' : 'down', className: "am-coupon-content-detail-option__arrow", $isCustomComponent: this.$isCustomComponent, __tag: 'icon'
            })
          ) : null
        )
      ),
      data['used'] ? _ref2 : null
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "qyXR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("7yPO");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/image/image.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "qyym":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("d3cq");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/popover/popover.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "r/Ks":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("0VFu");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr/ocr.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "r/pw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "r5Gr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  M_0_["WorkerComponent"] && Object(M_0_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/popover/index",
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("wT8c");
    },
  });
  
  

/***/ }),

/***/ "r5YD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("fla4");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/list-item/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "rBpJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("392b");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/make-phone-call/make-phone-call.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "rD9z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var AutoSizer_ = $getComponentClass("/node_modules/mini-ali-ui/es/list/auto-size-img/index");
var AutoSizer = AutoSizer_ || (0, _EmptyComponentFactory2.default)("auto-sizer");
var AmIcon_ = $getComponentClass("/node_modules/mini-ali-ui/es/am-icon/index");
var AmIcon = AmIcon_ || (0, _EmptyComponentFactory2.default)("am-icon");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "am-list-item " + (data['last'] ? 'last' : '') + " " + (data['borderRadius'] ? 'am-list-item-radius' : '') + " " + data['className'], hoverClass: data['disabled'] ? '' : 'am-list-item-hover', hoverStartTime: "0", hoverStayTime: "0", onTap: $getEventHandler(this, "onItemTap"), 'data-index': data['index']
    },
    _react2.default.createElement(
      View,
      {
        className: "am-list-prefix"
      },
      (0, _getLooseDataMember2.default)([data['$slots'], "supporting"]) ? _react2.default.createElement(
        View,
        {
          className: "am-list-supporting"
        },
        (0, _renderSlot2.default)(data, "supporting", null)
      ) : null,
      data['thumb'] ? _react2.default.createElement(AutoSizer, {
        src: data['thumb'], size: data['thumbSize'], $isCustomComponent: this.$isCustomComponent, __tag: 'auto-sizer'
      }) : null
    ),
    _react2.default.createElement(
      View,
      {
        className: "am-list-line " + (data['wrap'] ? 'am-list-wrap' : '')
      },
      _react2.default.createElement(
        View,
        {
          className: "am-list-content"
        },
        data['titlePosition'] === 'top' ? _react2.default.createElement(
          View,
          {
            className: "am-list-content-title"
          },
          _react2.default.createElement(
            View,
            {
              className: "am-list-text-wrapper"
            },
            (0, _renderSlot2.default)(data, "$default", null)
          ),
          (0, _renderSlot2.default)(data, "afterTitle", null)
        ) : null,
        data['upperSubtitle'] || (0, _getLooseDataMember2.default)([data['$slots'], "afterUpperSubtitle"]) ? _react2.default.createElement(
          View,
          {
            className: "am-list-content-subtitle " + (data['upperSubtitle'] && data['lowerSubtitle'] ? 'am-list-content-subtitle-small' : '') + " " + ((0, _getLooseDataMember2.default)([data['$slots'], "afterLowerSubtitle"]) && data['upperSubtitle'] ? 'am-list-content-subtitle-small' : '')
          },
          data['upperSubtitle'] ? _react2.default.createElement(
            View,
            {
              className: "am-list-text-wrapper"
            },
            (0, _toString2.default)(data['upperSubtitle'])
          ) : null,
          (0, _renderSlot2.default)(data, "afterUpperSubtitle", null)
        ) : null,
        data['titlePosition'] === 'middle' ? _react2.default.createElement(
          View,
          {
            className: "am-list-content-title"
          },
          _react2.default.createElement(
            View,
            {
              className: "am-list-text-wrapper"
            },
            (0, _renderSlot2.default)(data, "$default", null)
          ),
          (0, _renderSlot2.default)(data, "afterTitle", null)
        ) : null,
        data['lowerSubtitle'] || (0, _getLooseDataMember2.default)([data['$slots'], "afterLowerSubtitle"]) ? _react2.default.createElement(
          View,
          {
            className: "am-list-content-subtitle " + (data['upperSubtitle'] && data['lowerSubtitle'] ? 'am-list-content-subtitle-small' : '') + " " + (data['lowerSubtitle'] && (0, _getLooseDataMember2.default)([data['$slots'], "afterUpperSubtitle"]) ? 'am-list-content-subtitle-small' : '')
          },
          data['lowerSubtitle'] ? _react2.default.createElement(
            View,
            {
              className: "am-list-text-wrapper"
            },
            (0, _toString2.default)(data['lowerSubtitle'])
          ) : null,
          (0, _renderSlot2.default)(data, "afterLowerSubtitle", null)
        ) : null,
        data['titlePosition'] === 'bottom' ? _react2.default.createElement(
          View,
          {
            className: "am-list-content-title"
          },
          _react2.default.createElement(
            View,
            {
              className: "am-list-text-wrapper"
            },
            (0, _renderSlot2.default)(data, "$default", null)
          ),
          (0, _renderSlot2.default)(data, "afterTitle", null)
        ) : null
      ),
      (0, _getLooseDataMember2.default)([data['$slots'], "extra"]) ? _react2.default.createElement(
        View,
        {
          className: "am-list-extra"
        },
        (0, _renderSlot2.default)(data, "extra", null)
      ) : null,
      data['arrow'] ? _react2.default.createElement(
        View,
        {
          className: "am-list-arrow"
        },
        _react2.default.createElement(AmIcon, {
          type: "right", size: "18", color: "#ccc", $isCustomComponent: this.$isCustomComponent, __tag: 'am-icon'
        })
      ) : null
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "rHBQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var Button_ = $getComponentClass("/node_modules/mini-ali-ui/es/button/index");
var Button = Button_ || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};
function render(data) {
  var _this = this;

  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "am-page-result " + data['className'] + " " + (data['local'] ? 'am-local-page' : '')
    },
    _react2.default.createElement(View, {
      className: "am-page-result-pic page-" + data['type']
    }),
    !data['local'] ? _react2.default.createElement(
      View,
      {
        className: "am-page-result-title"
      },
      (0, _toString2.default)(data['title'] === data['undefined'] ? (0, _getLooseDataMember2.default)([data['defaultTitle'], data['type']]) : data['title'])
    ) : null,
    _react2.default.createElement(
      View,
      {
        className: "am-page-result-brief"
      },
      (0, _toString2.default)(data['brief'] === data['undefined'] ? (0, _getLooseDataMember2.default)([data['defaultBrief'], data['type']]) : data['brief'])
    ),
    (0, _renderSlot2.default)(data, "$default", data['footer'] ? _react2.default.createElement(
      View,
      {
        className: "am-page-result-button"
      },
      (0, _iterate2.default)(data['isCountDown'] ? (0, _getLooseDataMember2.default)([data['footer'], "slice"], 1)(0, 1) : (0, _getLooseDataMember2.default)([data['footer'], "slice"], 1)(0, 2), function (footerProps, footerIdx) {
        return _react2.default.createElement(
          Button,
          {
            shape: "capsule", type: "ghost", capsuleMinWidth: true, capsuleSize: data['local'] ? 'small' : 'medium', disabled: data['isCountDown'], className: footerIdx === 1 ? 'am-page-result-button-right' : '', onTap: $getComponentEventHandler(_this, footerIdx === 0 ? 'onLeftButton' : 'onRightButton'), $isCustomComponent: _this.$isCustomComponent, __tag: 'button'
          },
          (0, _toString2.default)(data['isCountDown'] ? data['countDownTitle'] : (0, _getLooseDataMember2.default)([footerProps, "text"]))
        );
      })
    ) : null)
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "rMSr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("8YEo");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/busy/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "rRIj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var List_ = $getComponentClass("/node_modules/mini-ali-ui/es/list/index");
var List = List_ || (0, _EmptyComponentFactory2.default)("list");
var ListItem_ = $getComponentClass("/node_modules/mini-ali-ui/es/list/list-item/index");
var ListItem = ListItem_ || (0, _EmptyComponentFactory2.default)("list-item");

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");


var $templates = {};
function render(data) {
  var _this = this;

  return (0, _createRoot2.default)(_react2.default.createElement(
    List,
    {
      $isCustomComponent: this.$isCustomComponent, __tag: 'list'
    },
    (0, _iterate2.default)(data['components'], function (item, index) {
      return _react2.default.createElement(
        ListItem,
        {
          arrow: "horizontal", multipleLine: true, key: "items-" + (0, _getLooseDataMember2.default)([item, "name"]), last: index === (0, _getLooseDataMember2.default)([data['components'], "length"]) - 1, onClick: $getComponentEventHandler(_this, "openPage"), 'data-url': (0, _getLooseDataMember2.default)([item, "path"]), $isCustomComponent: _this.$isCustomComponent, __tag: 'list-item'
        },
        _react2.default.createElement(
          View,
          null,
          (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "nameZN"]))
        )
      );
    })
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "rWt6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("XkMr");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

var _ocrTemplate = __webpack_require__("4gaC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $templates = {};
$templates = (0, _extends3.default)({}, _ocrTemplate.$ownTemplates);
function render(data) {
  return (0, _createRoot2.default)((0, _useTemplate2.default)($templates["ocr-template"], {
    textArry: data['textArry'],
    imgUrl: data['imgUrl']
  }, undefined, this));
};
module.exports = exports["default"];

/***/ }),

/***/ "rgz8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("FFH0");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/user-capture-screen/user-capture-screen.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "rjw+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var Loading_ = $getComponentClass("/node_modules/mini-ali-ui/es/loading/index");
var Loading = Loading_ || (0, _EmptyComponentFactory2.default)("loading");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    Button,
    {
      'data-name': data['dataName'], className: data['baseClass'] + " " + data['className'], hoverClass: data['hoverClass'], disabled: data['disabled'], subtitle: data['subtitle'], size: data['size'], loading: data['loading'], hoverStartTime: data['hoverStartTime'], hoverStayTime: data['hoverStayTime'], hoverStopPropagation: data['hoverStopPropagation'], formType: data['formType'], openType: data['openType'], scope: data['scope'], onTap: $getEventHandler(this, "onButtonTap"), appParameter: data['appParameter'], publicId: data['publicId']
    },
    _react2.default.createElement(
      View,
      {
        className: "am-button-content"
      },
      data['showLoading'] && data['shape'] !== 'capsule' ? _react2.default.createElement(Loading, {
        className: "am-button-loading", color: data['type'] === 'primary' || data['type'] === 'warn' ? '#fff' : data['type'] === 'warn-ghost' ? '#ff3b30' : '#1677ff', size: "24px", $isCustomComponent: this.$isCustomComponent, __tag: 'loading'
      }) : null,
      (0, _renderSlot2.default)(data, "$default", null)
    ),
    data['subtitle'] ? _react2.default.createElement(
      View,
      {
        className: "am-button-subtitle-subfont"
      },
      (0, _toString2.default)(data['subtitle'])
    ) : null
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "rkZK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("4mcr");
/* harmony import */ var M_2_ = __webpack_require__("JGVg");
/* harmony import */ var M_3_ = __webpack_require__("qgau");
/* harmony import */ var M_4_ = __webpack_require__("JC0U");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/empty/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "rlyR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("C9Oq");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/vibrate/vibrate.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "rmW9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("C0Az");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/tabBar/component/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "rpCv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("gKul");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/image/image.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ruG3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Form = _afAppx.Form || (0, _EmptyComponentFactory2.default)("form");

var RadioGroup = _afAppx.RadioGroup || (0, _EmptyComponentFactory2.default)("radio-group");

var Label = _afAppx.Label || (0, _EmptyComponentFactory2.default)("label");

var Radio = _afAppx.Radio || (0, _EmptyComponentFactory2.default)("radio");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("单选框")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "section section_gap"
        },
        _react2.default.createElement(
          Form,
          {
            onSubmit: $getEventHandler(this, "onSubmit"), onReset: $getEventHandler(this, "onReset")
          },
          _react2.default.createElement(
            View,
            {
              className: "page-section-demo"
            },
            _react2.default.createElement(
              RadioGroup,
              {
                className: "radio-group", onChange: $getEventHandler(this, "radioChange"), name: "lib"
              },
              (0, _iterate2.default)(data['items'], function (item, index) {
                return _react2.default.createElement(
                  Label,
                  {
                    className: "radio", key: "label-" + index
                  },
                  _react2.default.createElement(Radio, {
                    value: (0, _getLooseDataMember2.default)([item, "name"]), checked: (0, _getLooseDataMember2.default)([item, "checked"]), disabled: (0, _getLooseDataMember2.default)([item, "disabled"])
                  }),
                  _react2.default.createElement(
                    Text,
                    {
                      className: "radio-text"
                    },
                    (0, _toString2.default)((0, _getLooseDataMember2.default)([item, "value"]))
                  )
                );
              })
            )
          ),
          _react2.default.createElement(
            View,
            {
              className: "page-section-btns"
            },
            _react2.default.createElement(
              View,
              null,
              _react2.default.createElement(
                Button,
                {
                  size: "mini", type: "ghost", formType: "reset"
                },
                (0, _toString2.default)("reset")
              )
            ),
            _react2.default.createElement(
              View,
              null,
              _react2.default.createElement(
                Button,
                {
                  size: "mini", type: "primary", formType: "submit"
                },
                (0, _toString2.default)("submit")
              )
            )
          )
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "rzT2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/rich-text/rich-text",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("MoCb");
    },
    stylesheet: function () {
      return __webpack_require__("Mhjt");
    }
  });
  
  

/***/ }),

/***/ "sACq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "sCgQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("W15X");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/popover/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "sFkd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("51JM");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr-business-license/ocr-business-license.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "sHRk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "am-auto-sizer-container", style: 'width: ' + data['size'] + '; height: ' + data['size'] + ';'
    },
    _react2.default.createElement(View, {
      className: "am-auto-sizer-content", style: data['src'] ? 'background-image: url(\'' + data['src'] + '\'); background-color: transparent' : ''
    })
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "sPGX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/card-pack/card-pack",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("2lxz");
    },
    stylesheet: function () {
      return __webpack_require__("IFOm");
    }
  });
  
  

/***/ }),

/***/ "sY5+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("gqI3");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/button/button.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "samt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/navigator/reLaunch",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("Do4T");
    },
    stylesheet: function () {
      return __webpack_require__("VdRN");
    }
  });
  
  

/***/ }),

/***/ "sesZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var PickerView = _afAppx.PickerView || (0, _EmptyComponentFactory2.default)("picker-view");

var PickerViewColumn = _afAppx.PickerViewColumn || (0, _EmptyComponentFactory2.default)("picker-view-column");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("嵌入页面的滚动选择器")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          PickerView,
          {
            value: data['value'], onChange: $getEventHandler(this, "onChange"), className: "my-picker"
          },
          _react2.default.createElement(
            PickerViewColumn,
            null,
            _react2.default.createElement(
              View,
              null,
              (0, _toString2.default)("2011")
            ),
            _react2.default.createElement(
              View,
              null,
              (0, _toString2.default)("2012")
            ),
            _react2.default.createElement(
              View,
              null,
              (0, _toString2.default)("2013")
            ),
            _react2.default.createElement(
              View,
              null,
              (0, _toString2.default)("2014")
            ),
            _react2.default.createElement(
              View,
              null,
              (0, _toString2.default)("2015")
            ),
            _react2.default.createElement(
              View,
              null,
              (0, _toString2.default)("2016")
            ),
            _react2.default.createElement(
              View,
              null,
              (0, _toString2.default)("2017")
            ),
            _react2.default.createElement(
              View,
              null,
              (0, _toString2.default)("2018")
            )
          ),
          _react2.default.createElement(
            PickerViewColumn,
            null,
            _react2.default.createElement(
              View,
              null,
              (0, _toString2.default)("春")
            ),
            _react2.default.createElement(
              View,
              null,
              (0, _toString2.default)("夏")
            ),
            _react2.default.createElement(
              View,
              null,
              (0, _toString2.default)("秋")
            ),
            _react2.default.createElement(
              View,
              null,
              (0, _toString2.default)("冬")
            )
          )
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "sjAg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Yq+t");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/pagination/index",
    
    
    
    usingComponents: {"pagination":"/node_modules/mini-ali-ui/es/pagination/index"},
    render: function () {
      return __webpack_require__("29RC");
    },
    stylesheet: function () {
      return __webpack_require__("U1vu");
    }
  });
  
  

/***/ }),

/***/ "smeP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "so3C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/date-picker/date-picker",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("2/9d");
    },
    stylesheet: function () {
      return __webpack_require__("be5n");
    }
  });
  
  

/***/ }),

/***/ "sr+3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Input = _afAppx.Input || (0, _EmptyComponentFactory2.default)("input");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("setClipboard")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(Input, {
          onInput: $getEventHandler(this, "handleInput"), value: data['text']
        }),
        _react2.default.createElement(
          Button,
          {
            className: "clipboard-button", type: "primary", size: "mini", onTap: $getEventHandler(this, "handleCopy")
          },
          (0, _toString2.default)("复制")
        )
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("getClipboard")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(Input, {
          onInput: $getEventHandler(this, "bindInput"), value: data['copy'], disabled: true
        }),
        _react2.default.createElement(
          Button,
          {
            className: "clipboard-button", type: "default", size: "mini", onTap: $getEventHandler(this, "handlePaste")
          },
          (0, _toString2.default)("粘贴")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "srED":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".video-page {width:100%}.video-contain {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:24px}.video {width:320px;height:225px}.operation-item {height:48px;background-color:#54acee;margin:20px 40px 0 40px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:20px}.row {height:40px;background:white;margin:10px 20px 0 20px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 0 0 12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.row-extra {width:120px}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "ssFq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Textarea = _afAppx.Textarea || (0, _EmptyComponentFactory2.default)("textarea");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("\b文本风险识别 API")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("my.textRiskIdentification")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(Textarea, {
          placeholder: "输入文本内容", onInput: $getEventHandler(this, "handleInput"), name: "textarea"
        }),
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "textRiskIdentification")
          },
          (0, _toString2.default)("开始识别")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "stKQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("tcXN");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/badge/badge.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "t+CH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(View, {
    className: "am-mask " + (data['type'] === 'market' ? 'am-mask__m' : ''), style: (data['show'] ? '' : 'display: none;') + (data['maskZindex'] ? 'z-index: ' + data['maskZindex'] + ';' : ''), onTap: $getEventHandler(this, "onMaskClick")
  }));
};
module.exports = exports['default'];

/***/ }),

/***/ "t01T":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Text = _afAppx.Text || (0, _EmptyComponentFactory2.default)("text");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      _react2.default.createElement(
        View,
        {
          className: "text-demo-title"
        },
        _react2.default.createElement(
          Text,
          {
            className: "text-demo-text"
          },
          (0, _toString2.default)("这是一段文本。\\n"),
          _react2.default.createElement(
            Text,
            null,
            (0, _toString2.default)("\\")
          ),
          _react2.default.createElement(
            Text,
            null,
            (0, _toString2.default)("n")
          ),
          (0, _toString2.default)("可以换行。")
        )
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          Text,
          null,
          (0, _toString2.default)(data['text'])
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "t3Ot":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/confirm/confirm",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("/IVs");
    },
    stylesheet: function () {
      return __webpack_require__("tt1r");
    }
  });
  
  

/***/ }),

/***/ "t8Gl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("yXRd");
/* harmony import */ var M_1_ = __webpack_require__("yclZ");
/* harmony import */ var M_2_ = __webpack_require__("K0hz");
/* harmony import */ var M_3_ = __webpack_require__("EpPt");
/* harmony import */ var M_4_ = __webpack_require__("ju+b");
/* harmony import */ var M_4__default = /*#__PURE__*/__webpack_require__.n(M_4_);

  



    
  
  Object(M_4_["Page"])({
    pagePath: "page/component/coupon/index",
    
    
    
    usingComponents: {"coupon":"/node_modules/mini-ali-ui/es/coupon/index","button":"/node_modules/mini-ali-ui/es/button/index","am-checkbox":"/node_modules/mini-ali-ui/es/am-checkbox/index","stepper":"/node_modules/mini-ali-ui/es/stepper/index"},
    render: function () {
      return __webpack_require__("G8z7");
    },
    stylesheet: function () {
      return __webpack_require__("yVzR");
    }
  });
  
  

/***/ }),

/***/ "tNJM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/favorite/favorite",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("Z1MX");
    },
    stylesheet: function () {
      return __webpack_require__("XHUk");
    }
  });
  
  

/***/ }),

/***/ "tVAN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("pmjH");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/button-ali-ui/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ta/J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".wrapper {padding:0.2rem}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "tcXN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".list-like {display:-webkit-box;display:-webkit-flex;display:flex;background:#fff;padding:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:1px solid #eee}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "te4j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("Lmdj");
/* harmony import */ var M_2_ = __webpack_require__("Gubp");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/steps/steps.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "tiII":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("自定义分析 API")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("my.reportAnalytics")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          View,
          {
            className: "report", onTap: $getEventHandler(this, "reportAnalytics")
          },
          (0, _toString2.default)("\b自定义分析")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "tiOT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("ByUM");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/alphabet/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ticb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-page-result {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background:#fff;background:var(--am-result-background,#fff);height:100vh;overflow:hidden}.am-page-result-pic {width:168px;height:168px;margin:calc(50vh - 168px) auto 0;background-position:center bottom;background-repeat:no-repeat;background-size:contain}.am-page-result-title {margin:20px auto 0;margin:var(--am-result-margin-vertical,20px) auto 0;max-width:calc(100vw - 48px);max-width:calc(100vw - var(--am-result-title-h-spacing,48px));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;font-size:18px;font-size:var(--am-result-title-fontSize,18px);color:#333;color:var(--am-result-title-color,#333)}.am-page-result-brief {margin:0 auto;padding-top:12px;padding-top:var(--am-result-brief-margin-top,12px);font-size:13px;font-size:var(--am-result-brief-fontSize,13px);color:#999;color:var(--am-result-brief-color,#999);max-width:calc(100vw - 96px);overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;text-align:center}.am-page-result-button {margin:20px auto 0;margin:var(--am-result-margin-vertical,20px) auto 0}.am-page-result-button-right {margin-left:12px;margin-left:var(--am-result-button-margin-left,12px)}.am-local-page {height:100%;padding-bottom:20px;padding-bottom:var(--am-result-margin-vertical,20px)}.am-local-page .am-page-result-pic {width:100px;height:100px;margin:20px auto 0;margin:var(--am-result-margin-vertical,20px) auto 0;background-size:contain}.am-local-page .am-page-result-brief {font-size:15px;font-size:var(--am-result-local-brief-fontSize,15px)}.page-empty {background-image:url(\"https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XqqzSpaXRUcAAAAAAAAAAABkARQnAQ\")}.page-error {background-image:url(\"https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*oJZsRIB9TGYAAAAAAAAAAABkARQnAQ\")}.page-network {background-image:url(\"https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*tP6AQa0UANAAAAAAAAAAAABkARQnAQ\")}.page-busy {background-image:url(\"https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*hkCKTJY-nXMAAAAAAAAAAABkARQnAQ\")}.page-logoff {background-image:url(\"https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*kButSYpTAYUAAAAAAAAAAABkARQnAQ\")}.page-payment {background-image:url(\"https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*bp8aTomhW3YAAAAAAAAAAABkARQnAQ\")}.page-redpacket {background-image:url(\"https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*sb4TTqsZRMYAAAAAAAAAAABkARQnAQ\")}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "tiq8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("wahr");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/get-system-info/get-system-info.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "tj4d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("O3Wi");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/filter/filter-item/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "tmth":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("wHBU");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/calendar/calendar",
    
    
    
    usingComponents: {"calendar":"/node_modules/mini-ali-ui/es/calendar/index"},
    render: function () {
      return __webpack_require__("99WF");
    },
    stylesheet: function () {
      return __webpack_require__("/Sw3");
    }
  });
  
  

/***/ }),

/***/ "tpJI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("r/Ks");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr/ocr.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ts7A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".tab-content {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0.4rem;box-sizing:border-box}.radio-group {padding:0.3rem 0.4rem 0}.radio {margin-right:10px}.demo-title {margin:0.3rem 0.4rem 0;padding-bottom:10px;font-weight:bold;border-bottom:1px solid #ccc}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "tt1K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("hnYF");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/get-background-audio-manager/get-background-audio-manager.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "tt1r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("Qo7H");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/confirm/confirm.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ttvf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("bKiF");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/page-result.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "twH7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("35mS");
/* harmony import */ var M_2_ = __webpack_require__("o8kU");
/* harmony import */ var M_3_ = __webpack_require__("eKRb");
/* harmony import */ var M_4_ = __webpack_require__("MSgi");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/grid/2/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "u/4Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("XkMr");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

var _ocrTemplate = __webpack_require__("4gaC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $templates = {};
$templates = (0, _extends3.default)({}, _ocrTemplate.$ownTemplates);
function render(data) {
  return (0, _createRoot2.default)((0, _useTemplate2.default)($templates["ocr-template"], {
    textArry: data['textArry'],
    imgUrl: data['imgUrl']
  }, undefined, this));
};
module.exports = exports["default"];

/***/ }),

/***/ "u3JE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("7mBJ");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/filter/single/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "u4Qw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("gA9p");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/collapse/collapse-item/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "uC0I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-alphabet {position:absolute;right:0;top:0;height:100%;z-index:99;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.am-alphabet-letter {text-align:center;font-size:11px;font-size:var(--am-alphabet-letter-font-size,11px);color:#999;color:var(--am-alphabet-letter-color,#999);height:16px;height:var(--am-alphabet-letter-size,16px);width:16px;width:var(--am-alphabet-letter-size,16px);border-radius:50vh;border-radius:var(--am-alphabet-letter-border-radius,50vh);position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.am-alphabet-letter-chosen {background:#1677ff;background:var(--am-alphabet-letter-chosen-background,#1677ff);color:#fff;color:var(--am-alphabet-letter-chosen-text-color,#fff)}.am-alphabet-bubble {color:#fff;color:var(--am-alphabet-bubble-color,#fff);position:absolute;right:48px;height:47px;width:47px;border-radius:50vh;background:#ccc;background:var(--am-alphabet-bubble-background,#ccc);top:-17px;font-size:27px;font-size:var(--am-alphabet-bubble-font-size,27px);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-family:PingFangSC-Medium}.am-alphabet-item {min-height:48px;min-height:var(--am-alphabet-min-height,48px)}.am-alphabet-line {position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-self:stretch;align-self:stretch;overflow:hidden}.am-alphabet-content {padding:20px 0;width:95px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "uG4f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("U+sf");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/get-user-info/get-user-info.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "uGW+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("d5f/");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/page-result.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "uIIB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("AP9N");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr-idcard-face/ocr-idcard-face.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "uRRt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".extra {background-image:url('https://gw.alipayobjects.com/zos/rmsportal/dOfSJfWQvYdvsZiJStvg.svg');background-size:contain;background-repeat:no-repeat;background-position:right center;opacity:0.2;height:20px;width:20px;padding-left:10px}.title {font-size:16px;font-weight:400;margin:15px 0 10px;padding:0 7px}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "uRW+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("4mcr");
/* harmony import */ var M_2_ = __webpack_require__("Fh/U");
/* harmony import */ var M_3_ = __webpack_require__("vxXc");
/* harmony import */ var M_4_ = __webpack_require__("o8kU");
/* harmony import */ var M_5_ = __webpack_require__("D5gq");
/* harmony import */ var M_6_ = __webpack_require__("qapz");
/* harmony import */ var M_7_ = __webpack_require__("qTq/");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/swipe-action/swipe-action.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  
  stylesheet.imports(M_5_["default"]);
  
  stylesheet.imports(M_6_["default"]);
  
  stylesheet.imports(M_7_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "uUrv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("gQto");
/* harmony import */ var M_2_ = __webpack_require__("3ZlR");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr-business-card/ocr-business-card.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "uXlA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("4mcr");
/* harmony import */ var M_2_ = __webpack_require__("Fh/U");
/* harmony import */ var M_3_ = __webpack_require__("vxXc");
/* harmony import */ var M_4_ = __webpack_require__("o8kU");
/* harmony import */ var M_5_ = __webpack_require__("D5gq");
/* harmony import */ var M_6_ = __webpack_require__("uitX");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/filter/filter.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  
  stylesheet.imports(M_5_["default"]);
  
  stylesheet.imports(M_6_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ueHU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("77N5");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/radio/radio.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ufhH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("4HN6");
/* harmony import */ var M_1_ = __webpack_require__("jUqo");
/* harmony import */ var M_2_ = __webpack_require__("ju+b");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

    
  
  Object(M_2_["Page"])({
    pagePath: "page/component/filter/single_1/index",
    
    
    
    usingComponents: {"filter":"/node_modules/mini-ali-ui/es/filter/index","filter-item":"/node_modules/mini-ali-ui/es/filter/filter-item/index"},
    render: function () {
      return __webpack_require__("v0Xa");
    },
    stylesheet: function () {
      return __webpack_require__("ZPmF");
    }
  });
  
  

/***/ }),

/***/ "uitX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("zW1u");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/filter/filter.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ukGD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("kfu4");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/grid/grid.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "uoZJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/generate-image-from-code/generate-image-from-code",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("kAnD");
    },
    stylesheet: function () {
      return __webpack_require__("OWmp");
    }
  });
  
  

/***/ }),

/***/ "upFf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("P0Br");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/container/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "uucw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("4HN6");
/* harmony import */ var M_1_ = __webpack_require__("jUqo");
/* harmony import */ var M_2_ = __webpack_require__("ju+b");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

    
  
  Object(M_2_["Page"])({
    pagePath: "page/component/filter/alternative/index",
    
    
    
    usingComponents: {"filter":"/node_modules/mini-ali-ui/es/filter/index","filter-item":"/node_modules/mini-ali-ui/es/filter/filter-item/index"},
    render: function () {
      return __webpack_require__("DvCh");
    },
    stylesheet: function () {
      return __webpack_require__("QnFH");
    }
  });
  
  

/***/ }),

/***/ "uvfw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".video-page {width:100%}.video-contain {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:24px}.video {width:320px;height:225px}.operation-item {height:48px;background-color:#54acee;margin:20px 40px 0 40px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:20px}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "v+V5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("4mcr");
/* harmony import */ var M_2_ = __webpack_require__("JGVg");
/* harmony import */ var M_3_ = __webpack_require__("qgau");
/* harmony import */ var M_4_ = __webpack_require__("lQL6");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/log-off/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "v0Xa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var Filter_ = $getComponentClass("/node_modules/mini-ali-ui/es/filter/index");
var Filter = Filter_ || (0, _EmptyComponentFactory2.default)("filter");
var FilterItem_ = $getComponentClass("/node_modules/mini-ali-ui/es/filter/filter-item/index");
var FilterItem = FilterItem_ || (0, _EmptyComponentFactory2.default)("filter-item");


var $templates = {};
function render(data) {
  var _this = this;

  return (0, _createRoot2.default)(_react2.default.createElement(
    Filter,
    {
      show: data['show'], max: 1, equalRows: 3, $isCustomComponent: this.$isCustomComponent, __tag: 'filter'
    },
    (0, _iterate2.default)(data['items'], function (item, index) {
      return _react2.default.createElement(FilterItem, {
        value: (0, _getLooseDataMember2.default)([item, "value"]), subtitle: (0, _getLooseDataMember2.default)([item, "subtitle"]), id: (0, _getLooseDataMember2.default)([item, "id"]), onChange: $getComponentEventHandler(_this, "handleCallBack"), selected: (0, _getLooseDataMember2.default)([item, "selected"]), key: "filter-item-" + data['key'], $isCustomComponent: _this.$isCustomComponent, __tag: 'filter-item'
      });
    })
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "v13U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".container {padding-bottom:50px}.coupon_rule .a-text {display:block;margin-bottom:0.08rem}.categoryDemo {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-content:center;align-content:center;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;-webkit-align-self:flex-start;align-self:flex-start}.categoryDemo .price {font-size:0.6rem;color:#FF6010}.categoryDemo .unit {padding-left:0.04rem;font-weight:bold;font-size:0.26rem;color:#FF6010}.categoryDemo .type {-webkit-box-flex:1;-webkit-flex:1 1 100%;flex:1 1 100%;text-align:center;font-size:0.22rem;color:#999}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "v6LH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("nedy");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/multi-liner/index",
    
    
    
    usingComponents: {"multi-liner":"/node_modules/mini-ali-ui/es/multi-liner/index"},
    render: function () {
      return __webpack_require__("mkSY");
    },
    stylesheet: function () {
      return __webpack_require__("N3mn");
    }
  });
  
  

/***/ }),

/***/ "v8WY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/favorite/favorite.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "vCWb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("bywP");
/* harmony import */ var M_1_ = __webpack_require__("5AAy");
/* harmony import */ var M_2_ = __webpack_require__("ju+b");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

    
  
  M_2_["WorkerComponent"] && Object(M_2_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/list/list-item/index",
    
    
    usingComponents: {"auto-sizer":"/node_modules/mini-ali-ui/es/list/auto-size-img/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"},
    render: function () {
      return __webpack_require__("rD9z");
    },
  });
  
  

/***/ }),

/***/ "vFRM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("y9AW");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/navigation-bar-loading/navigation-bar-loading.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "vHkS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-hor-steps {padding:20px 56px;background-color:#fff;background-color:var(--am-steps-bg-color,#fff);overflow:hidden;white-space:nowrap}.am-hor-step {display:inline-block;white-space:normal;text-align:center;vertical-align:top;line-height:normal}.am-hor-step-line {position:relative;margin:6px 0;height:1px;background-color:#e5e5e5;background-color:var(--am-steps-bg-color,#e5e5e5)}.am-hor-step-line.is-active {background-color:#1677ff;background-color:var(--am-steps-color,#1677ff)}.am-hor-step-line.is-last {background-color:transparent}.am-hor-step-icon {position:absolute;top:50%;left:0;width:8px;height:8px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:50vh;border-radius:var(--am-steps-icon-border-radius,50vh);background-color:#e5e5e5;background-color:var(--am-steps-bg-color,#e5e5e5)}.am-hor-step-icon.is-active {background-color:#1677ff;background-color:var(--am-steps-color,#1677ff)}.am-hor-step-text {margin-top:12px;padding:0 5px;max-width:90px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.am-hor-step-title {font-size:12px;font-size:var(--am-steps-horizontal-title-size,12px);color:#333;color:var(--am-steps-title-color,#333)}.am-hor-step-description {margin-top:2px;font-size:12px;font-size:var(--am-steps-horizontal-description-size,12px);color:#999;color:var(--am-steps-description-color,#999)}.am-vertical-steps {padding:20px 30px 20px 30px;background-color:#fff;background-color:var(--am-steps-bg-color,#fff)}.am-vertical-step {display:-webkit-box;display:-webkit-flex;display:flex}.am-vertical-step-left {position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:24px;margin-right:20px}.am-vertical-step-line {position:relative;top:10px;width:1px;background-color:#e5e5e5;background-color:var(--am-steps-bg-color,#e5e5e5)}.am-vertical-step-line-top {-webkit-box-flex:1;-webkit-flex:1;flex:1}.am-vertical-step-line-bottom {height:30px;width:1px;background-color:#e5e5e5;background-color:var(--am-steps-bg-color,#e5e5e5)}.am-vertical-step-line.is-active {background-color:#1677ff;background-color:var(--am-steps-color,#1677ff)}.am-vertical-step-icon {position:absolute;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-radius:50vh;border-radius:var(--am-steps-icon-border-radius,50vh)}.am-vertical-step-active-image,.am-vertical-step-image {width:24px;border-radius:50vh;border-radius:var(--am-steps-icon-border-radius,50vh)}.am-vertical-step-active-image {background-color:#1677ff;background-color:var(--am-steps-color,#1677ff)}.am-vertical-step-image {background-color:#e5e5e5;background-color:var(--am-steps-bg-color,#e5e5e5)}.am-vertical-step-icon.is-normal {top:5px;background-color:#e5e5e5;background-color:var(--am-steps-bg-color,#e5e5e5);width:8px;height:8px}.am-vertical-step-icon.is-active,.am-vertical-step-icon.is-fail {display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;background-color:var(--am-steps-bg-color,#fff)}.am-vertical-step-right {-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-bottom:12px}.am-vertical-step-right-last {margin-bottom:0}.am-vertical-step-title {margin-bottom:4px;font-size:17px;font-size:var(--am-steps-vertical-title-size,17px);color:#333;color:var(--am-steps-title-color,#333)}.am-vertical-step-title.is-active {color:#1677ff;color:var(--am-steps-vertical-title-active-color,#1677ff)}.am-vertical-step-title.is-fail {color:#ff3b30;color:var(--am-steps-vertical-warning-color,#ff3b30)}.am-vertical-step-description {font-size:15px;font-size:var(--am-steps-vertical-description-size,15px);color:#999;color:var(--am-steps-description-color,#999)}.am-vertical-placeholder {height:20px}.am-vertical-placeholder-line {position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);height:100%;width:1px;background-color:#e5e5e5;background-color:var(--am-steps-bg-color,#e5e5e5)}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "vQB9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("m1U+");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/clipboard/clipboard.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "vQnI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("h3PT");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/icon/icon.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "vQow":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("qbMp");
/* harmony import */ var M_2_ = __webpack_require__("3ZlR");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr-passport/ocr-passport.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "vX8u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("Z+xR");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/watch-shake/watch-shake.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "vZjD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var Grid_ = $getComponentClass("/node_modules/mini-ali-ui/es/grid/index");
var Grid = Grid_ || (0, _EmptyComponentFactory2.default)("grid");


var $templates = {};

var _ref = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref2 = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref3 = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

var _ref4 = _react2.default.createElement(View, {
  style: "margin-top: 10px;"
});

function render(data) {
  return (0, _createRoot2.default)([_ref, _react2.default.createElement(Grid, {
    onGridItemClick: $getComponentEventHandler(this, "onItemClick"), columnNum: 5, list: data['list55'], infinite: true, $isCustomComponent: this.$isCustomComponent, __tag: 'grid'
  }), _ref2, _react2.default.createElement(
    View,
    {
      style: "padding-bottom:10px;color: red;"
    },
    (0, _toString2.default)("下面这个分页的高度是重置过的……")
  ), _react2.default.createElement(Grid, {
    onGridItemClick: $getComponentEventHandler(this, "onItemClick"), columnNum: 5, list: data['list55'], infinite: true, gridName: "newGridName", circular: true, infiniteHeight: "240rpx", $isCustomComponent: this.$isCustomComponent, __tag: 'grid'
  }), _ref3, _react2.default.createElement(Grid, {
    onGridItemClick: $getComponentEventHandler(this, "onItemClick"), columnNum: 5, list: data['list5'], $isCustomComponent: this.$isCustomComponent, __tag: 'grid'
  }), _ref4, _react2.default.createElement(Grid, {
    onGridItemClick: $getComponentEventHandler(this, "onItemClick"), columnNum: 5, list: data['list55'], $isCustomComponent: this.$isCustomComponent, __tag: 'grid'
  })]);
};
module.exports = exports['default'];

/***/ }),

/***/ "vavO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("o8kU");
/* harmony import */ var M_2_ = __webpack_require__("KrWq");
/* harmony import */ var M_3_ = __webpack_require__("4JkW");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/card/card.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "vdyW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("Qv90");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/image/image.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "vfPE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/map/map.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "vmQL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("Q8XB");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/share/share.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "vxXc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("OSXc");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/list/auto-size-img/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "w2PO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("YRMo");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/get-network-type/get-network-type.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "w40a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("a/Qv");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/notice/notice.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "w7Pd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("o+jn");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/message/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "wAj+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":["/page/API/ocr-template/ocr-template.acss"]}*/var internal_style;
/* require("/page/API/ocr-template/ocr-template.acss") */

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "wBHi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("w2PO");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/get-network-type/get-network-type.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "wGii":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/picker/picker",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("mLae");
    },
    stylesheet: function () {
      return __webpack_require__("qpRI");
    }
  });
  
  

/***/ }),

/***/ "wHBU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("5AAy");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  M_1_["WorkerComponent"] && Object(M_1_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/calendar/index",
    
    
    usingComponents: {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"},
    render: function () {
      return __webpack_require__("6zO/");
    },
  });
  
  

/***/ }),

/***/ "wHbD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "wQQA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("SXxA");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/watch-shake/watch-shake.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "wT8c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "am-popover " + data['className']
    },
    (0, _renderSlot2.default)(data, "$default", null),
    data['show'] ? _react2.default.createElement(
      View,
      {
        className: "am-popover-container"
      },
      data['showMask'] ? _react2.default.createElement(View, {
        className: "am-popover-mask", onTap: $getEventHandler(this, "onMaskClick")
      }) : null,
      _react2.default.createElement(
        View,
        {
          className: "am-popover-content am-popover-placement-" + data['position'] + " border-" + !data['showMask']
        },
        _react2.default.createElement(View, {
          className: "am-popover-arrow border-" + !data['showMask']
        }),
        _react2.default.createElement(
          View,
          {
            className: "am-popover-inner"
          },
          (0, _renderSlot2.default)(data, "items", null)
        )
      )
    ) : null
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "wTGe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":["/page/API/ocr-template/ocr-template.acss"]}*/var internal_style;
/* require("/page/API/ocr-template/ocr-template.acss") */

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "wZPD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-radio {position:relative;height:18px;height:var(--am-radio-size,18px);width:18px;width:var(--am-radio-size,18px);display:inline-block;line-height:1}.am-radio-value {position:absolute;z-index:1;opacity:0}.am-radio .am-radio-synthetic {position:absolute;opacity:0;z-index:2;line-height:1;pointer-events:none;top:0;left:0;height:100%;width:100%;font-size:18px;font-size:var(--am-radio-size,18px);text-align:center;color:#1677ff;color:var(--am-radio-color,#1677ff)}.am-radio-value.a-radio-checked+.am-radio-synthetic {opacity:1}.am-radio-value.a-radio-checked.a-radio-disabled+.am-radio-synthetic {opacity:.4}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "wahr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("XXHl");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/get-system-info/get-system-info.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "weHn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("D02S");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/navigator/navigator.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "wgdR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("lXew");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/events/events.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "wn78":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("mXuQ");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/popup/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "wqJE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/text/text",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("t01T");
    },
    stylesheet: function () {
      return __webpack_require__("K+rZ");
    }
  });
  
  

/***/ }),

/***/ "wx3b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-tips-dialog {position:relative;width:100%;padding:0 8px;padding:0 var(--am-tips-dialog-container-spacing,8px);box-sizing:border-box;font-size:15px;font-size:var(--am-tips-dialog-font-size,15px)}.am-tips-dialog .am-button {box-shadow:none}.am-tips-dialog-wrap {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.75);position:relative;box-shadow:0 4px 10px 0 rgba(51,51,51,.2);border-radius:8px;border-radius:var(--am-tips-dialog-border-radius,8px);padding:8px 12px;padding:var(--am-tips-dialog-v-spacing,8px) var(--am-tips-dialog-spacing,12px);height:100%}.am-tips-dialog-arrow {position:absolute;width:15px;height:8px}.am-tips-dialog-arrow-bottom-left {bottom:-8px;left:26px}.am-tips-dialog-arrow-bottom-right {bottom:-8px;right:26px}.am-tips-dialog-arrow-bottom-center {bottom:-8px;left:50%;margin-left:-8px}.am-tips-dialog-arrow-top-left {top:-8px;left:26px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.am-tips-dialog-arrow-top-right {top:-8px;right:26px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.am-tips-dialog-arrow-top-center {top:-8px;left:50%;margin-left:-8px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.am-tips-dialog-arrow-left {top:50%;left:-11px;margin-top:-4px;-webkit-transform:rotate(90deg) translateY(6%);transform:rotate(90deg) translateY(6%)}.am-tips-dialog-arrow-right {top:50%;right:-11px;margin-top:-4px;-webkit-transform:rotate(-90deg) translateY(6%);transform:rotate(-90deg) translateY(6%)}.am-tips-dialog-wrap .am-tips-dialog-rectangle {padding:0 16px 0 6px}.am-tips-dialog-wrap::before .am-tips-dialog-rectangle {display:none}.am-tips-dialog-close {margin-left:12px;margin-left:var(--am-tips-dialog-h-spacing,12px);-webkit-align-self:flex-start;align-self:flex-start;height:22px;height:var(--am-tips-dialog-icon-size,22px);width:22px;width:var(--am-tips-dialog-icon-size,22px)}.am-tips-dialog-close:before {-webkit-transform:rotate(45deg);transform:rotate(45deg)}.am-tips-dialog-close:after {-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.am-tips-dialog-close-container {margin-left:12px;margin-left:var(--am-tips-dialog-close-btn-spacing,12px);padding-top:6px;box-sizing:border-box;position:relative;height:100%;-webkit-align-self:stretch;align-self:stretch}.am-tips-dialog-icon {background-color:#fff;background-color:var(--am-tips-dialog-icon-bg-color,#fff);border-radius:4px;border-radius:var(--am-tips-dialog-border-radiu,4px);margin-right:12px;margin-right:var(--am-tips-dialog-h-spacing,12px)}.am-tips-dialog-icon .a-image {height:36px;height:var(--am-tips-dialog-image-size,36px);width:36px;width:var(--am-tips-dialog-image-size,36px)}.am-tips-dialog-content {-webkit-box-flex:1;-webkit-flex:1;flex:1}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "x+K3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("yZSy");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/memory-warning/memory-warning.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "x/3T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".title {text-align:center;display:block;width:100%;margin:20px 0}.a-page {padding:24px  12px}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "x/dc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/component/contact-button/contact-button",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("7Dy9");
    },
    stylesheet: function () {
      return __webpack_require__("8JZw");
    }
  });
  
  

/***/ }),

/***/ "x1Gx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("o8kU");
/* harmony import */ var M_2_ = __webpack_require__("YaE0");
/* harmony import */ var M_3_ = __webpack_require__("QBjP");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/title/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "x3SR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var Switch = _afAppx.Switch || (0, _EmptyComponentFactory2.default)("switch");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(Switch, {
    className: "am-switch " + data['checkedCls'], name: data['name'], checked: data['checked'], disabled: data['disabled'], color: data['color'], onChange: $getEventHandler(this, "onChange"), controlled: data['controlled']
  }));
};
module.exports = exports['default'];

/***/ }),

/***/ "xAsO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "xCZf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("支付宝代扣 API")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("my.paySignCenter")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "paySignCenter")
          },
          (0, _toString2.default)("支付宝代扣")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "xF5q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("eLoQ");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/canvas/canvas.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "xKi4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toString; });
function toString(str) {
  if (str == null) {
    return str;
  }
  return str + '';
}

/***/ }),

/***/ "xOv5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/ocr-train-ticket/ocr-train-ticket",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("7fnr");
    },
    stylesheet: function () {
      return __webpack_require__("hITe");
    }
  });
  
  

/***/ }),

/***/ "xXVZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");
var PageResult_ = $getComponentClass("/node_modules/mini-ali-ui/es/page-result/index");
var PageResult = PageResult_ || (0, _EmptyComponentFactory2.default)("page-result");


var $templates = {};

var _ref = _react2.default.createElement(View, {
  style: "height: 150px; margin: 10px; background: #dddddd;"
});

var _ref2 = _react2.default.createElement(View, {
  style: "height: 150px; margin: 10px; background: #dddddd;"
});

function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    null,
    _react2.default.createElement(PageResult, {
      type: "network", local: true, brief: "网络不给力", $isCustomComponent: this.$isCustomComponent, __tag: 'page-result'
    }),
    _ref,
    _ref2
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "xg+c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  M_0_["WorkerComponent"] && Object(M_0_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/swipe-action/index",
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("dUP7");
    },
  });
  
  

/***/ }),

/***/ "xgtA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("bUA4");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/stepper/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "xiBy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("Ymux");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/badge/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "xlLS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "xopB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("/XTH");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/grid/2/index",
    
    
    
    usingComponents: {"grid":"/node_modules/mini-ali-ui/es/grid/index"},
    render: function () {
      return __webpack_require__("J8Xj");
    },
    stylesheet: function () {
      return __webpack_require__("SBpR");
    }
  });
  
  

/***/ }),

/***/ "xpMZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".api {font-family:-apple-system-font,Helvetica Neue,Helvetica,sans-serif;font-size:0.28rem;padding:0.32rem}.container {padding-top:0.48rem}.photo-bg {height:6rem;width:100%;text-align:center}.card {width:6rem;height:6rem;vertical-align:middle}.content {padding:0 0.2rem;background:#fff}.content .fn {display:block;height:0.8rem;line-height:0.8rem;color:#8f8f8f;font-size:0.25rem}.list {position:relative;box-sizing:border-box;padding:0.2rem 0;margin-bottom:5px;border:#dee8f0 solid 1px}.list:last-child {margin:0}.fn-left {display:inline-block;position:absolute;top:30%;width:1.5rem;margin-left:0.23rem}.fn-right {box-sizing:border-box;display:inline-block;width:5.2rem;padding-left:0.23rem;margin-left:1.7rem;color:#335c92;border-left:#dee8f0 solid 1px}.btn-con {width:100%;overflow:hidden;padding:0.2rem 0;background:#fff}.photo-submit {margin:0 auto;width:90%;height:1rem;line-height:1rem;font-size:0.35rem}.foot {height:1.2rem;line-height:1.2rem;text-align:center;font-size:0.25rem;color:#6f6f6f;font-family:PingFangSC-Regular}.ali-cloud {width:75px;height:16px;vertical-align:middle}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "xv0M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("Toast API")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("my.showToast")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-btns"
        },
        _react2.default.createElement(
          View,
          {
            type: "primary", onTap: $getEventHandler(this, "showToastSuccess")
          },
          (0, _toString2.default)("显示 success 提示")
        ),
        _react2.default.createElement(
          View,
          {
            type: "primary", onTap: $getEventHandler(this, "showToastFail")
          },
          (0, _toString2.default)("显示 fail 提示")
        )
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-btns"
        },
        _react2.default.createElement(
          View,
          {
            type: "primary", onTap: $getEventHandler(this, "showToastException")
          },
          (0, _toString2.default)("显示 exception 提示")
        ),
        _react2.default.createElement(
          View,
          {
            type: "primary", onTap: $getEventHandler(this, "showToastNone")
          },
          (0, _toString2.default)("显示 none 弱提示")
        )
      )
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("my.hideToast")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-btns"
        },
        _react2.default.createElement(
          View,
          {
            onTap: $getEventHandler(this, "hideToast")
          },
          (0, _toString2.default)("隐藏弱提示")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "xwEj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Button = _afAppx.Button || (0, _EmptyComponentFactory2.default)("button");

var Input = _afAppx.Input || (0, _EmptyComponentFactory2.default)("input");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-description"
      },
      (0, _toString2.default)("蓝牙 API")
    ),
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("本机蓝牙开关状态")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "openBluetoothAdapter")
          },
          (0, _toString2.default)("初始化蓝牙")
        ),
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "closeBluetoothAdapter")
          },
          (0, _toString2.default)("关闭本机蓝牙")
        ),
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "getBluetoothAdapterState")
          },
          (0, _toString2.default)("获取蓝牙状态")
        )
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("扫描蓝牙设备")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "startBluetoothDevicesDiscovery")
          },
          (0, _toString2.default)("开始搜索")
        ),
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "getBluetoothDevices")
          },
          (0, _toString2.default)("所有搜索到的设备")
        ),
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "getConnectedBluetoothDevices")
          },
          (0, _toString2.default)("所有已连接的设备")
        ),
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "stopBluetoothDevicesDiscovery")
          },
          (0, _toString2.default)("停止搜索")
        )
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("连接设备")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(Input, {
          className: "input", onInput: $getEventHandler(this, "bindKeyInput"), type: data['text'], placeholder: "输入要连接的设备的deviceId"
        }),
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "connectBLEDevice")
          },
          (0, _toString2.default)("连接设备")
        ),
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "getBLEDeviceServices")
          },
          (0, _toString2.default)("获取设备服务")
        ),
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "getBLEDeviceCharacteristics")
          },
          (0, _toString2.default)("获取读写特征")
        ),
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "disconnectBLEDevice")
          },
          (0, _toString2.default)("断开设备连接")
        )
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("读写数据")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "notifyBLECharacteristicValueChange")
          },
          (0, _toString2.default)("监听特征值数据变化")
        ),
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "readBLECharacteristicValue")
          },
          (0, _toString2.default)("读取数据")
        ),
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "writeBLECharacteristicValue")
          },
          (0, _toString2.default)("写入数据")
        ),
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "offBLECharacteristicValueChange")
          },
          (0, _toString2.default)("取消特征值监听")
        )
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("其他事件")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-demo"
        },
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "bluetoothAdapterStateChange")
          },
          (0, _toString2.default)("本机蓝牙状态变化")
        ),
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "offBluetoothAdapterStateChange")
          },
          (0, _toString2.default)("取消本机蓝牙状态监听")
        ),
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "BLEConnectionStateChanged")
          },
          (0, _toString2.default)("蓝牙连接状态变化")
        ),
        _react2.default.createElement(
          Button,
          {
            type: "primary", onTap: $getEventHandler(this, "offBLEConnectionStateChanged")
          },
          (0, _toString2.default)("取消蓝牙连接状态监听")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "xwtk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/page-scroll-to/page-scroll-to.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "y1Kf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("Ecw0");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/set-navigation-bar/set-navigation-bar.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "y5rJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".am-button {position:relative;box-sizing:border-box;height:auto;line-height:normal;padding:12px;padding:var(--am-button-padding,12px);border-radius:4px;border-radius:var(--am-button-corner-radius,4px);color:#333;color:var(--am-button-color,#333);border:0 none;box-shadow:inset 0 0 0 1px #e5e5e5;box-shadow:inset 0 0 0 var(--am-button-border-size,1px) var(--am-button-border-color,#e5e5e5);background-color:#fff;background-color:var(--am-button-background,#fff);font-size:18px;font-size:var(--am-button-title-size,18px)}.am-button-content {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.am-button-loading {margin-right:12px}.am-button.am-button-disabled {opacity:.4;opacity:var(--am-button-disabled-opacity,.4);color:#333;color:var(--am-button-color,#333);background-color:#fff;background-color:var(--am-button-background,#fff)}.am-button-active {-webkit-filter:brightness(.9);filter:brightness(.9)}.am-button-active>:nth-child(1n+1) {opacity:.7}.am-button-text.am-button-active>:nth-child(1n+1) {opacity:.6}.am-button-subtitle {font-size:17px;font-size:var(--am-button-doubleline-title-size,17px)}.am-button-subtitle-subfont {font-size:12px;font-size:var(--am-button-subtitle-size,12px);opacity:.6}.am-button-primary,.am-button-primary.am-button-disabled {background-color:#1677ff;background-color:var(--am-button-primary-background,#1677ff);color:#fff;color:var(--am-button-primary-color,#fff);box-shadow:0 0}.am-button-ghost,.am-button-ghost.am-button-disabled {background-color:transparent;color:#1677ff;color:var(--am-button-ghost-color,#1677ff);box-shadow:inset 0 0 0 1px #1677ff;box-shadow:inset 0 0 0 var(--am-button-border-size,1px) var(--am-button-ghost-border-color,#1677ff)}.am-button-warn,.am-button-warn.am-button-disabled {background-color:#ff3b30;background-color:var(--am-button-warn-background,#ff3b30);color:#fff;color:var(--am-button-warn-color,#fff);box-shadow:0 0}.am-button-warn-ghost,.am-button-warn-ghost.am-button-disabled {background-color:transparent;color:#ff3b30;color:var(--am-button-warn-ghost-color,#ff3b30);box-shadow:inset 0 0 0 1px #ff3b30;box-shadow:inset 0 0 0 var(--am-button-border-size,1px) var(--am-button-ghost-border-color,#ff3b30)}.am-button-light,.am-button-light.am-button-disabled {background-color:#e7f1ff;background-color:var(--am-button-light-background,#e7f1ff);color:#1677ff;color:var(--am-button-light-color,#1677ff);box-shadow:0 0}.am-button-text,.am-button-text.am-button-disabled {display:inline-block;background-color:transparent;color:#1677ff;color:var(--am-button-text-color,#1677ff);border:0;padding:0;box-shadow:0 0}.am-button-capsule {display:inline-block;border-radius:50vh;border-radius:var(--am-button-capsule-corner,50vh);padding:4px 12px;padding:var(--am-button-capsule-padding-v,4px) var(--am-button-capsule-padding-h,12px)}.am-button-capsule-large {font-size:15px;font-size:var(--am-button-capsule-size-l,15px)}.am-button-capsule-large-minwidth {min-width:84px}.am-button-capsule-medium {font-size:13px;font-size:var(--am-button-capsule-size-m,13px)}.am-button-capsule-medium-minwidth {min-width:76px}.am-button-capsule-small {font-size:12px;font-size:var(--am-button-capsule-size-s,12px)}.am-button-capsule-small-minwidth {min-width:72px}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "y9AW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("kmlE");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/navigation-bar-loading/navigation-bar-loading.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "yFVK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("qweL");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/steps/steps",
    
    
    
    usingComponents: {"steps":"/node_modules/mini-ali-ui/es/steps/index"},
    render: function () {
      return __webpack_require__("T9FB");
    },
    stylesheet: function () {
      return __webpack_require__("jois");
    }
  });
  
  

/***/ }),

/***/ "yFqx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("uIIB");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/ocr-idcard-face/ocr-idcard-face.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "yTJ0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("3Z64");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/bluetooth/bluetooth.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "yVzR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("qEK9");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/coupon/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "yXRd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("5AAy");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  M_1_["WorkerComponent"] && Object(M_1_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/coupon/index",
    
    
    usingComponents: {"icon":"/node_modules/mini-ali-ui/es/am-icon/index"},
    render: function () {
      return __webpack_require__("qyTc");
    },
  });
  
  

/***/ }),

/***/ "yY/I":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function $sjs_toIntArray($sjs_v) {
  var $sjs_ret = [];
  var $sjs_version = $sjs_v.$sjs_split('.');

  for (var $sjs_i = 0; $sjs_i < $sjs_version.$sjs_length; $sjs_i++) {
    $sjs_ret.$sjs_push($sjs_parseInt($sjs_version[_$sjs_p($sjs_i)], 10));
  }

  return $sjs_ret;
}

var $sjs_calcScrollLeft = function $sjs_calcScrollLeft($sjs_windowWidth, $sjs_tabWidth, $sjs_current) {
  var $sjs_scrollInit = $sjs_current * $sjs_windowWidth * $sjs_tabWidth;

  if ($sjs_current <= 2) {
    $sjs_scrollInit = 0;
  } else {
    $sjs_scrollInit = ($sjs_current - 2) * $sjs_windowWidth * $sjs_tabWidth;
  }

  return $sjs_scrollInit;
};

var $sjs_compareVersion = function $sjs_compareVersion($sjs_v) {
  var $sjs_targetVersion = $sjs_toIntArray('1.10.0');
  var $sjs_version = $sjs_toIntArray($sjs_v);
  var $sjs_ret = 0;

  for (var $sjs_i = 0, $sjs_n1, $sjs_n2; $sjs_i < $sjs_version.$sjs_length; $sjs_i++) {
    $sjs_n1 = $sjs_targetVersion[_$sjs_p($sjs_i)];
    $sjs_n2 = $sjs_version[_$sjs_p($sjs_i)];

    if ($sjs_n1 > $sjs_n2) {
      $sjs_ret = -1;
      break;
    }

    if ($sjs_n1 < $sjs_n2) {
      $sjs_ret = 1;
      break;
    }
  }

  return $sjs_ret;
};

exports.default = {
  $sjs_calcScrollLeft: $sjs_calcScrollLeft,
  $sjs_compareVersion: $sjs_compareVersion
};
module.exports = exports['default'];

/***/ }),

/***/ "yZSy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "yclZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Au/O");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  M_1_["WorkerComponent"] && Object(M_1_["WorkerComponent"])({
    is: "/node_modules/mini-ali-ui/es/button/index",
    
    
    usingComponents: {"loading":"/node_modules/mini-ali-ui/es/loading/index"},
    render: function () {
      return __webpack_require__("rjw+");
    },
  });
  
  

/***/ }),

/***/ "ydqn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("x/3T");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/terms/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "yhK8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "yka4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("o8kU");
/* harmony import */ var M_2_ = __webpack_require__("52hq");
/* harmony import */ var M_3_ = __webpack_require__("4mcr");
/* harmony import */ var M_4_ = __webpack_require__("JGVg");
/* harmony import */ var M_5_ = __webpack_require__("vxXc");
/* harmony import */ var M_6_ = __webpack_require__("D5gq");
/* harmony import */ var M_7_ = __webpack_require__("V21L");
/* harmony import */ var M_8_ = __webpack_require__("J1WL");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/tips/1/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  
  stylesheet.imports(M_5_["default"]);
  
  stylesheet.imports(M_6_["default"]);
  
  stylesheet.imports(M_7_["default"]);
  
  stylesheet.imports(M_8_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "ymbM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/create-inner-audiocontext/create-inner-audiocontext",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("BKBe");
    },
    stylesheet: function () {
      return __webpack_require__("z67j");
    }
  });
  
  

/***/ }),

/***/ "yxQJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  Object(M_0_["Page"])({
    pagePath: "page/API/ocr-idcard-face/ocr-idcard-face",
    
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("PME2");
    },
    stylesheet: function () {
      return __webpack_require__("yFqx");
    }
  });
  
  

/***/ }),

/***/ "z+UW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("Cm9n");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/calendar/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "z4OG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("4mcr");
/* harmony import */ var M_2_ = __webpack_require__("Fh/U");
/* harmony import */ var M_3_ = __webpack_require__("vxXc");
/* harmony import */ var M_4_ = __webpack_require__("o8kU");
/* harmony import */ var M_5_ = __webpack_require__("D5gq");
/* harmony import */ var M_6_ = __webpack_require__("C5NA");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/tips/tips.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  
  stylesheet.imports(M_5_["default"]);
  
  stylesheet.imports(M_6_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "z4SO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("4mcr");
/* harmony import */ var M_2_ = __webpack_require__("JGVg");
/* harmony import */ var M_3_ = __webpack_require__("qgau");
/* harmony import */ var M_4_ = __webpack_require__("pn3g");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/page-result/payment/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  
  stylesheet.imports(M_3_["default"]);
  
  stylesheet.imports(M_4_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "z4Ye":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = ".page-body-info {height:2rem}.page-body-text-network-type {font-size:0.8rem;font-family:Helvetica}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "z67j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("q8+8");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/create-inner-audiocontext/create-inner-audiocontext.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "z78H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("AA3O");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/picker/picker.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "z9ec":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(_react2.default.createElement(
    View,
    {
      className: "page"
    },
    _react2.default.createElement(
      View,
      {
        className: "page-section"
      },
      _react2.default.createElement(
        View,
        {
          className: "page-section-title"
        },
        (0, _toString2.default)("my.makePhoneCall")
      ),
      _react2.default.createElement(
        View,
        {
          className: "page-section-btns"
        },
        _react2.default.createElement(
          View,
          {
            onTap: $getEventHandler(this, "makePhoneCall")
          },
          (0, _toString2.default)("打电话")
        )
      )
    )
  ));
};
module.exports = exports['default'];

/***/ }),

/***/ "zAK4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "zFMp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("v8WY");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/favorite/favorite.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "zW1u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

/***/ }),

/***/ "zicR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
    
  
  M_0_["WorkerComponent"] && Object(M_0_["WorkerComponent"])({
    is: "/page/common/components/block-list/block-list",
    
    
    usingComponents: {},
    render: function () {
      return __webpack_require__("hSDh");
    },
  });
  
  

/***/ }),

/***/ "zits":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/API/keyboard/keyboard.acss",
  });
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "zm5a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("hZKm");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
    
  
  Object(M_1_["Page"])({
    pagePath: "page/component/page-result/error/index",
    
    
    
    usingComponents: {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"},
    render: function () {
      return __webpack_require__("bn83");
    },
    stylesheet: function () {
      return __webpack_require__("pUUD");
    }
  });
  
  

/***/ }),

/***/ "znDD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("9jmo");
/* harmony import */ var M_2_ = __webpack_require__("Zyd+");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "page/component/verify-code/index.acss",
  });
  
  
  stylesheet.imports(M_1_["default"]);
  
  stylesheet.imports(M_2_["default"]);
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "zrY6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
/* harmony import */ var M_1_ = __webpack_require__("ZPri");

  
  var stylesheet = new M_0_["StyleSheet"]({
    stylePath: "node_modules/mini-ali-ui/es/modal/index.acss",
  });
    
    stylesheet.exports(M_1_["default"]);
  
  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


/***/ }),

/***/ "zw8Z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _EmptyComponentFactory = __webpack_require__("7WHb");

var _EmptyComponentFactory2 = _interopRequireDefault(_EmptyComponentFactory);

var _afAppx = __webpack_require__("ju+b");

var _iterate = __webpack_require__("BDY0");

var _iterate2 = _interopRequireDefault(_iterate);

var _createRoot = __webpack_require__("A8RD");

var _createRoot2 = _interopRequireDefault(_createRoot);

var _createBlock = __webpack_require__("XgXe");

var _createBlock2 = _interopRequireDefault(_createBlock);

var _useTemplate = __webpack_require__("fi8D");

var _useTemplate2 = _interopRequireDefault(_useTemplate);

var _createTemplate = __webpack_require__("/xra");

var _createTemplate2 = _interopRequireDefault(_createTemplate);

var _renderSlot = __webpack_require__("0sLu");

var _renderSlot2 = _interopRequireDefault(_renderSlot);

var _resolveScopedSlots = __webpack_require__("Yi8l");

var _resolveScopedSlots2 = _interopRequireDefault(_resolveScopedSlots);

var _getSJSMember = __webpack_require__("CrQg");

var _getSJSMember2 = _interopRequireDefault(_getSJSMember);

var _toString = __webpack_require__("xKi4");

var _toString2 = _interopRequireDefault(_toString);

var _getLooseDataMember = __webpack_require__("2yZK");

var _getLooseDataMember2 = _interopRequireDefault(_getLooseDataMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $createReactElement = _react2.default && _react2.default.createElement;
var $getComponentEventHandler = function $getComponentEventHandler(instance, name) {
  return instance.$getComponentEventHandler && instance.$getComponentEventHandler(name);
};
var $getEventHandler = function $getEventHandler(instance, name) {
  return instance.$getEventHandler(name);
};
var $getRefHandler = function $getRefHandler(instance, name) {
  return instance.$getRefHandler(name);
};
var $getComRefHandler = function $getComRefHandler(instance, name) {
  return instance.$getComRefHandler && instance.$getComRefHandler(name);
};

var $getComponentClass = function $getComponentClass(name) {
  return _afAppx.getComponentClass && (0, _afAppx.getComponentClass)(name);
};

var View = _afAppx.View || (0, _EmptyComponentFactory2.default)("view");

var Image = _afAppx.Image || (0, _EmptyComponentFactory2.default)("image");
var Pagination_ = $getComponentClass("/node_modules/mini-ali-ui/es/pagination/index");
var Pagination = Pagination_ || (0, _EmptyComponentFactory2.default)("pagination");
var Button_ = $getComponentClass("/node_modules/mini-ali-ui/es/button/index");
var Button = Button_ || (0, _EmptyComponentFactory2.default)("button");
var Mask_ = $getComponentClass("/node_modules/mini-ali-ui/es/mask/index");
var Mask = Mask_ || (0, _EmptyComponentFactory2.default)("mask");


var $templates = {};
function render(data) {
  return (0, _createRoot2.default)(data['show'] ? data['hasJump'] ? _react2.default.createElement(
    View,
    {
      className: "am-guide", style: data['guideZindex'] ? 'z-index: ' + data['guideZindex'] + ';' : 'z-index: 1000;'
    },
    _react2.default.createElement(
      View,
      {
        className: "am-guide-content " + (data['guideNumber'] > 1 ? 'am-guide-content-pager' : '')
      },
      _react2.default.createElement(Image, {
        src: (0, _getLooseDataMember2.default)([data['showGuideList'], "url"]), className: "am-guide-img", style: ((0, _getLooseDataMember2.default)([data['showGuideList'], "x"]) ? 'left: ' + (0, _getLooseDataMember2.default)([data['showGuideList'], "x"]) + ';' : 'left: 0;') + "\n        " + ((0, _getLooseDataMember2.default)([data['showGuideList'], "y"]) ? 'top: ' + (0, _getLooseDataMember2.default)([data['showGuideList'], "y"]) + ';' : 'top: 0;') + "\n        " + ((0, _getLooseDataMember2.default)([data['showGuideList'], "width"]) ? 'width: ' + (0, _getLooseDataMember2.default)([data['showGuideList'], "width"]) + ';' : '') + "\n        " + ((0, _getLooseDataMember2.default)([data['showGuideList'], "height"]) ? 'height: ' + (0, _getLooseDataMember2.default)([data['showGuideList'], "height"]) + ';' : '')
      }),
      data['guideNumber'] > 1 ? _react2.default.createElement(Pagination, {
        currentPage: data['guideNumber'] - data['guideCurrent'] + 1, max: data['guideNumber'], white: "true", className: "am-guide-pager", $isCustomComponent: this.$isCustomComponent, __tag: 'pagination'
      }) : null,
      _react2.default.createElement(
        View,
        {
          className: "am-guide-btn"
        },
        data['guideCurrent'] > 1 ? [_react2.default.createElement(
          Button,
          {
            shape: "capsule", type: "ghost", className: "am-guide-btn-item", onTap: $getComponentEventHandler(this, "onGuideClick"), $isCustomComponent: this.$isCustomComponent, __tag: 'button'
          },
          (0, _toString2.default)(data['btn_jump'])
        ), _react2.default.createElement(
          Button,
          {
            shape: "capsule", className: "am-guide-btn-item", onTap: $getComponentEventHandler(this, "onBtnClick"), $isCustomComponent: this.$isCustomComponent, __tag: 'button'
          },
          (0, _toString2.default)(data['btn_next'])
        )] : _react2.default.createElement(
          Button,
          {
            shape: "capsule", className: "am-guide-btn-item", onTap: $getComponentEventHandler(this, "onGuideClick"), $isCustomComponent: this.$isCustomComponent, __tag: 'button'
          },
          (0, _toString2.default)(data['btn_over'])
        )
      )
    ),
    _react2.default.createElement(Mask, {
      show: data['hasJump'] && data['show'], $isCustomComponent: this.$isCustomComponent, __tag: 'mask'
    })
  ) : _react2.default.createElement(
    View,
    {
      className: "am-guide", style: data['guideZindex'] ? 'z-index: ' + data['guideZindex'] + ';' : 'z-index: 1000;'
    },
    _react2.default.createElement(
      View,
      {
        className: "am-guide-content"
      },
      _react2.default.createElement(Image, {
        src: (0, _getLooseDataMember2.default)([data['showGuideList'], "url"]), className: "am-guide-img", style: ((0, _getLooseDataMember2.default)([data['showGuideList'], "x"]) ? 'left: ' + (0, _getLooseDataMember2.default)([data['showGuideList'], "x"]) + ';' : 'left: 0;') + "\n        " + ((0, _getLooseDataMember2.default)([data['showGuideList'], "y"]) ? 'top: ' + (0, _getLooseDataMember2.default)([data['showGuideList'], "y"]) + ';' : 'top: 0;') + "\n        " + ((0, _getLooseDataMember2.default)([data['showGuideList'], "width"]) ? 'width: ' + (0, _getLooseDataMember2.default)([data['showGuideList'], "width"]) + ';' : '') + "\n        " + ((0, _getLooseDataMember2.default)([data['showGuideList'], "height"]) ? 'height: ' + (0, _getLooseDataMember2.default)([data['showGuideList'], "height"]) + ';' : '')
      }),
      _react2.default.createElement(
        View,
        {
          className: "am-guide-btn"
        },
        data['guideCurrent'] > 1 ? _react2.default.createElement(
          Button,
          {
            shape: "capsule", type: "ghost", className: "am-guide-btn-item", onTap: $getComponentEventHandler(this, "onBtnClick"), $isCustomComponent: this.$isCustomComponent, __tag: 'button'
          },
          (0, _toString2.default)(data['btn_next'])
        ) : _react2.default.createElement(
          Button,
          {
            shape: "capsule", type: "ghost", className: "am-guide-btn-item", onTap: $getComponentEventHandler(this, "onGuideClick"), $isCustomComponent: this.$isCustomComponent, __tag: 'button'
          },
          (0, _toString2.default)(data['btn_over'])
        )
      )
    ),
    _react2.default.createElement(Mask, {
      show: !data['hasJump'] && data['show'], $isCustomComponent: this.$isCustomComponent, __tag: 'mask'
    })
  ) : null);
};
module.exports = exports['default'];

/***/ })

/******/ });
var __scriptTimeEnd4Bundle = Date && Date.now && Date.now();
//# sourceMappingURL=index.js.map

	}


}

layer1();