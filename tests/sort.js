function layer1() {

  var tab = [];

  var loop_count = 20000;

  var a = 1, b = 2;

  for (var i = 0; i < loop_count; i++) {
    tab[i] = function () {
      x = 1;
      y = 2;
      return a + b + x + y;
    }
  }

  for (var i = 0; i < loop_count; i++) {
    tab[i]();
  }

  console.log(1);

  function layer2() {
		// build:0.63.4 */var __scriptTimeBegin4Bundle = Date && Date.now && Date.now();var __scriptName4Bundle = "index.js";
/*! 
[PositionForClientEntryCodeBegin]*/ !(function () {/**! __CODEPLACEHOLDER_START__ */ /*[PositionForClientEntryCodeBegin]*/ /**! __CODEPLACEHOLDER_END__ */ })(); /*
 */
/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
          /******/
        }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
          /******/
        };
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
        /******/
      }
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
          /******/
        }
        /******/
      };
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
          /******/
        }
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
        /******/
      };
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
        /******/
      };
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
        /******/
      };
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
      /******/
    })
/************************************************************************/
/******/({

/***/ "+33g":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = ".btn-container {width:100%;height:100vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.btn-container .a-button {width:250px}.box.top, .box.bottom {height:200px}.box.left, .box.right {width:200px;height:100%}.box {background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "+5UK":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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



          /***/
        }),

/***/ "+C45":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),


/***/ "W8Nt":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0MVh");
/* harmony import */ var M_1_ = __webpack_require__("vCWb");
/* harmony import */ var M_2_ = __webpack_require__("NSEQ");
/* harmony import */ var M_3_ = __webpack_require__("ju+b");
/* harmony import */ var M_3__default = /*#__PURE__*/__webpack_require__.n(M_3_);






          Object(M_3_["Page"])({
            pagePath: "page/component/badge/badge",



            usingComponents: { "list": "/node_modules/mini-ali-ui/es/list/index", "list-item": "/node_modules/mini-ali-ui/es/list/list-item/index", "badge": "/node_modules/mini-ali-ui/es/badge/index" },
            render: function () {
              return __webpack_require__("a2Ge");
            },
            stylesheet: function () {
              return __webpack_require__("037v");
            }
          });



          /***/
        }),

/***/ "WA4c":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = ".am-long-password-item {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;background:var(--am-long-password-item-background,#fff);padding-left:12px;padding-left:var(--am-long-password-item-padding-left,12px)}.am-long-password-item .a-input-content {padding-left:2px}.am-long-password-line {position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:12px;padding-right:var(--am-long-password-line-padding-right,12px);min-height:48px;min-height:var(--am-long-password-line-min-height,48px);overflow:hidden;font-size:17px;font-size:var(--am-long-password-font-size,17px)}.am-long-password-content {-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;color:#333;color:var(--am-long-password-content-color,#333);text-align:left;padding:0}.am-long-password-content .a-input-wrap {-webkit-box-flex:1;-webkit-flex:1;flex:1}.am-long-password-clear {display:-webkit-box;display:-webkit-flex;display:flex;height:22px;height:var(--am-long-password-icon-size,22px);width:22px;width:var(--am-long-password-icon-size,22px);-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:12px;margin-left:var(--am-long-password-eye-spacing,12px)}.am-long-password-clear-icon {line-height:1;line-height:var(--am-long-password-icon-line-height,1)}.am-long-password-clear.show {visibility:visible}.am-long-password-clear.hidden {visibility:hidden;pointer-events:none}.am-long-password-line-bottom::after {content:'';position:absolute;background-color:#eee;display:block;top:auto;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.am-long-password-item.last .am-input-line-bottom::after {display:none}.am-long-password-placeholder-base {color:#ccc;color:var(--am-long-password-placeholder-color,#ccc)}.am-long-password-eye {margin-left:12px;margin-left:var(--am-long-password-eye-spacing,12px);height:22px;height:var(--am-long-password-icon-size,22px);width:22px;width:var(--am-long-password-icon-size,22px);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.am-long-password-eye-icon {line-height:1;line-height:var(--am-long-password-icon-line-height,1)}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "WEC4":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "WIiS":
/***/ (function (module, exports, __webpack_require__) {

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

          /***/
        }),

/***/ "Wuaa":
/***/ (function (module, exports, __webpack_require__) {

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

          /***/
        }),

/***/ "Wx6M":
/***/ (function (module, exports, __webpack_require__) {

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

          /***/
        }),

/***/ "WyLO":
/***/ (function (module, exports, __webpack_require__) {

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

          /***/
        }),

/***/ "X1k0":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "X6Nz":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "XB03":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);


          var stylesheet = new M_0_["StyleSheet"]({
            stylePath: "page/API/get-image-info/get-image-info.acss",
          });

  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


          /***/
        }),

/***/ "XDV1":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = ".am-input-item {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;background:var(--am-input-item-background,#fff);padding-left:12px;padding-left:var(--am-input-item-padding-left,12px)}.am-input-item-extra {margin-left:12px;margin-left:var(--am-input-item-padding-left,12px)}.am-input-line {position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:12px;padding-right:var(--am-input-line-padding-right,12px);min-height:48px;min-height:var(--am-input-line-min-height,48px);overflow:hidden}.am-input-label {-webkit-align-self:center;align-self:center;min-width:80px;min-width:var(--am-input-label-min-width,80px);margin-right:2px;font-size:17px;font-size:var(--am-input-label-font-size,17px);color:#333;color:var(--am-input-item-label-color,#333)}.am-input-layer {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1}.am-input-layer-vertical {-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:12px 0;padding:var(--am-input-vlabel-paddingTB,12px) 0}.am-input-layer-vertical .am-input-label {-webkit-align-self:flex-start;align-self:flex-start;font-size:15px;font-size:var(--am-input-vlabel-font-size,15px);color:#999;color:var(--am-input-vlabel-color,#999)}.am-input-layer-vertical .a-input-placeholder {margin-left:-3px}.am-input-content {-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;padding:0;font-size:17px;font-size:var(--am-input-font-size,17px);text-align:left;color:#333;color:var(--am-input-item-color,#333)}.am-input-content .a-input-wrap {-webkit-box-flex:1;-webkit-flex:1;flex:1}.am-input-clear {display:-webkit-box;display:-webkit-flex;display:flex;height:22px;height:var(--am-input-icon-size,22px);width:22px;width:var(--am-input-icon-size,22px);-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.am-input-clear-icon {line-height:1;line-height:var(--am-input-icon-line-height,1)}.am-input-clear.show {visibility:visible}.am-input-clear.hidden {visibility:hidden;pointer-events:none}.am-input-line-bottom::after {content:'';position:absolute;background-color:#eee;display:block;top:auto;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.am-input-item.last .am-input-line-bottom::after {display:none}.am-input-placeholder-base {color:#ccc;color:var(--am-input-item-placeholder-color,#ccc)}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "XGJZ":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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



          /***/
        }),

/***/ "XHUk":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "XI/p":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("NapD");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);




          Object(M_1_["Page"])({
            pagePath: "page/component/tips/2/index",



            usingComponents: { "tips-plain": "/node_modules/mini-ali-ui/es/tips/tips-plain/index" },
            render: function () {
              return __webpack_require__("Vdi9");
            },
            stylesheet: function () {
              return __webpack_require__("X1k0");
            }
          });



          /***/
        }),

/***/ "XOTE":
/***/ (function (module, exports, __webpack_require__) {

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

          /***/
        }),

/***/ "XQbu":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "XQdC":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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



          /***/
        }),

/***/ "XRCa":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "XXHl":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "Xczx":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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



          /***/
        }),



/***/ "dlFD":
/***/ (function (module, exports, __webpack_require__) {

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

          /***/
        }),

/***/ "dmMj":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = ".am-avatar {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.am-avatar-img {width:52px;height:52px;border-radius:50vh}.am-avatar-img-sm {width:36px;height:36px}.am-avatar-img-md {width:52px;height:52px}.am-avatar-img-lg {width:60px;height:60px}.am-avatar-img-square {border-radius:0}.am-avatar-content {margin-left:12px}.am-avatar-name {font-size:17px;color:#333}.am-avatar-name-lg {font-size:18px}.am-avatar-desc {margin-top:4px;font-size:15px;color:#999}.am-avatar-desc-sm {display:none}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "dmMy":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "dpEv":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = ".am-list-item {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;background:var(--am-list-item-background,#fff)}.am-list-item-hover {-webkit-filter:brightness(.9);filter:brightness(.9)}.am-list-item-radius {margin:0 12px;margin:0 var(--am-list-item-outside-spacing,12px);border-radius:8px;border-radius:var(--am-list-item-border-radius,8px)}.am-list-prefix {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:12px;padding:var(--am-list-item-padding,12px);padding-right:0}.am-list-supporting {margin-right:12px;margin-right:var(--am-list-item-padding,12px);color:#999;color:var(--am-list-item-content-subtitle-color,#999);font-size:15px;font-size:var(--am-list-item-subtitle-size,15px);display:-webkit-box;display:-webkit-flex;display:flex}.am-list-thumb {width:30px;height:30px;margin-right:12px;margin-right:var(--am-list-item-padding,12px)}.am-list-line {position:relative;padding:12px;padding:var(--am-list-item-padding,12px);padding-left:0;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-self:stretch;align-self:stretch;overflow:hidden;max-width:100%}.am-list-line::after {content:'';position:absolute;background-color:#eee;display:block;top:auto;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.am-list-text-wrapper {margin-right:12px;margin-right:var(--am-list-item-padding,12px);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.am-list-content {-webkit-box-flex:3;-webkit-flex:3;flex:3;text-align:left;-webkit-align-self:stretch;align-self:stretch;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly;overflow:hidden;line-height:normal}.am-list-content-subtitle,.am-list-content-title {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.am-list-content-title {font-size:17px;font-size:var(--am-list-item-content-title-size,17px);color:#333;color:var(--am-list-item-content-color,#333);white-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex}.am-list-content-subtitle {font-size:15px;font-size:var(--am-list-item-subtitle-size,15px);color:#999;color:var(--am-list-item-content-subtitle-color,#999)}.am-list-content-subtitle-small {font-size:13px;font-size:var(--am-list-item-content-subtitle-size-small,13px)}.am-list-extra {color:#999;color:var(--am-list-item-extra-color,#999);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-align-self:stretch;align-self:stretch;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:12px;margin-left:var(--am-list-item-padding,12px);-webkit-box-flex:2;-webkit-flex:2;flex:2;overflow:hidden}.am-list-primary {color:#333;color:var(--am-list-item-content-color,#333);font-size:17px;font-size:var(--am-list-item-content-title-size,17px)}.am-list-wrap .am-list-content,.am-list-wrap .am-list-extra {white-space:normal;word-break:break-all}.am-list-arrow {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:12px;margin-left:var(--am-list-item-arrow-margin,12px);height:22px;height:var(--am-list-item-arrow-size,22px);width:22px;width:var(--am-list-item-arrow-size,22px)}.am-list-item.last .am-list-line-bottom::after {display:none}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "dpOL":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "drgx":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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



          /***/
        }),

/***/ "dszH":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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



          /***/
        }),

/***/ "dt7c":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "e9x9":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "eCuk":
/***/ (function (module, exports, __webpack_require__) {

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

          /***/
        }),

/***/ "eKRb":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "eLoQ":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "eOu4":
/***/ (function (module, exports, __webpack_require__) {

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

          /***/
        }),

/***/ "eS0/":
/***/ (function (module, exports, __webpack_require__) {

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

          /***/
        }),

/***/ "eS2D":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "eYJu":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "ehHL":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "ehcY":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "ehzs":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = ".animation-element {width:2rem;height:2rem;background-color:#108ee9;-webkit-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1)}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "eijA":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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



          /***/
        }),

/***/ "enpW":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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



          /***/
        }),

/***/ "f/6s":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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



          /***/
        }),

/***/ "f3Ot":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = ".a-cover-image {position:absolute;left:20px;top:100px;height:50px;width:50px}.cover-view {position:absolute;top:calc(50% - 0.75rem);left:calc(50% - 1.5rem);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;background-color:rgba(0, 0, 0, 0)}.cover-view-item {width:1rem;height:1.5rem;font-size:0.26rem}.cover-view-item-1 {background-color:rgba(26, 173, 25, 0.7)}.cover-view-item-2 {background-color:rgba(39, 130, 215, 0.7)}.cover-view-item-3 {background-color:rgba(255, 255, 255, 0.7)}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "f3iH":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "f3zr":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "f6dK":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = ".demo-steps-class {margin:20px 0;border-bottom:1px solid #e5e5e5}.demo-btn-container {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:20px}.demo-btn {width:47%}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "f9em":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "fFEr":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = ".am-pageInfinite {position:relative;width:100%;box-sizing:border-box}.am-pageInfinite_content {position:absolute;top:0;left:0;width:100%}.am-pageInfiniteWrap {position:absolute;bottom:8px;left:0;right:0;width:100%;height:5px;z-index:2;pointer-events:none}.am-pageInfiniteArea {position:absolute;left:50%;height:9px;width:50px;overflow:hidden;-webkit-transform:translateX(-50%) scale(.5);transform:translateX(-50%) scale(.5);background-repeat:no-repeat}.am-pageInfiniteMove {position:absolute;bottom:0;left:50%;width:180px;height:180px;margin-left:-90px;-webkit-transition:all .1s linear;transition:all .1s linear;border-radius:50%}.am-pageInfiniteInner {position:absolute;bottom:0;left:50%;-webkit-transform:translateX(-100%);transform:translateX(-100%);height:9px;width:25px;background-repeat:no-repeat}.am-pager {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-transform:scale(.5);transform:scale(.5)}.am-pager-number {-webkit-box-flex:0;-webkit-flex:0 0 6px;flex:0 0 6px;height:6px;overflow:hidden;margin-right:6px;margin-bottom:8px;border-radius:50%;background-color:#ddd}.am-pager-number_white {background-color:rgba(255,255,255,.4)}.am-pager-current {width:24px;height:7px;margin-right:6px;background-repeat:no-repeat}.am-pager-lastChild {margin-right:0}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "fKPF":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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



          /***/
        }),

/***/ "fTEj":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);


          var stylesheet = new M_0_["StyleSheet"]({
            stylePath: "page/API/alert/alert.acss",
          });

  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


          /***/
        }),

/***/ "fXHO":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "feJL":
/***/ (function (module, exports, __webpack_require__) {

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

          /***/
        }),

/***/ "fgwm":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "fi8D":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return useTemplate; });
/* harmony import */ var M_0_ = __webpack_require__("cDcd");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
          var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i]; for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            } return target;
          };



          function useTemplate(template, data, key, context) {
            var Component = template && template.Component;
            return Component ? M_0__default.a.createElement(Component, _extends({}, data, { $context: context, key: key })) : null;
          }

          /***/
        }),

/***/ "fjAr":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "fla4":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "flf3":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "fv+s":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = ".am-picker-item {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;background:var(--am-picker-background,#fff);padding-left:12px;padding-left:var(--am-picker-padding-left,12px)}.am-picker-line {position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:12px;padding-right:var(--am-picker-line-padding-right,12px);min-height:48px;min-height:var(--am-picker-line-min-height,48px);overflow:hidden}.am-picker-label {-webkit-align-self:center;align-self:center;min-width:80px;min-width:var(--am-picker-label-min-width,80px);margin-right:2px;font-size:17px;font-size:var(--am-picker-label-font-size,17px);color:#333;color:var(--am-picker-label-color,#333)}.am-picker-wrapper {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:24px;height:var(--am-picker-wrapper-height,24px);-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:3px;overflow:hidden;font-size:17px;font-size:var(--am-picker-font-size,17px)}.am-picker-layer {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1}.am-picker-layer-vertical {-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:12px 0;padding:var(--am-picker-vlabel-paddingTB,12px) 0}.am-picker-layer-vertical .am-picker-label {-webkit-align-self:flex-start;align-self:flex-start;font-size:15px;font-size:var(--am-picker-vlabel-font-size,15px);color:#999;color:var(--am-picker-vlabel-color,#999)}.am-picker-layer-vertical .am-picker-wrapper {padding-left:0}.am-picker-content {-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#333;color:var(--am-picker-label-color,#333);text-align:left;overflow:hidden;white-space:nowrap;padding:0}.am-picker-clear {display:-webkit-box;display:-webkit-flex;display:flex}.am-picker-line-bottom::after {content:'';position:absolute;background-color:#eee;display:block;top:auto;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.am-picker-item.last .am-picker-line-bottom::after {display:none}.am-picker-content-placeholder {color:#ccc;color:var(--am-picker-placeholder-color,#ccc)}.am-picker-content-value {color:#333;color:var(--am-picker-content-value-color,#333)}.am-picker-arrow {display:block;margin-left:8px;margin-left:var(--am-picker-arrow-marginLeft,8px);line-height:1}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "g+Ng":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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



          /***/
        }),

/***/ "g4tL":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "gA9p":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = ".am-collapse-item {background-color:#fff;background-color:var(--am-collapse-bgc,#fff)}.am-collapse-item-title-container {position:relative;display:-webkit-box;display:-webkit-flex;display:flex;text-align:justify;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%;color:#333;color:var(--am-collapse-title-fontSize,#333);font-size:17px;font-size:var(--am-collapse-title-fontSize,17px);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.am-collapse-item-title {position:relative;padding:12px 0;padding:var(--am-collapse-title-paddingTB,12px) 0;margin:0 12px;margin:0 var(--am-collapse-title-marginLR,12px)}.am-collapse-item-title::after {content:'';position:absolute;background-color:#eee;display:block;top:auto;right:0;bottom:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.am-collapse-item-title-arrow {font-size:18px;font-size:var(--am-collapse-arrow-size,18px);color:#ccc;color:var(--am-collapse-arrow-color,#ccc)}.am-collapse-item--disabled .am-collapse-item-title {opacity:.4;opacity:var(--am-collapse-disabled,.4)}.am-collapse-item-title-text-wrapper {padding-right:12px;padding-right:var(--am-collapse-title-arrow-spacing,12px)}.am-collapse-item-content-wrapper {overflow-y:hidden;box-sizing:border-box;will-change:max-height;-webkit-transition:max-height .3s ease-in-out;transition:max-height .3s ease-in-out}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "gEaO":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "gFdw":
/***/ (function (module, exports, __webpack_require__) {

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

          /***/
        }),

/***/ "gKul":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "gKzT":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "gQG5":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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



          /***/
        }),

/***/ "gQto":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":["/page/API/ocr-template/ocr-template.acss"]}*/var internal_style;
          /* require("/page/API/ocr-template/ocr-template.acss") */

          internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),


/***/ "y1Kf":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "y5rJ":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = ".am-button {position:relative;box-sizing:border-box;height:auto;line-height:normal;padding:12px;padding:var(--am-button-padding,12px);border-radius:4px;border-radius:var(--am-button-corner-radius,4px);color:#333;color:var(--am-button-color,#333);border:0 none;box-shadow:inset 0 0 0 1px #e5e5e5;box-shadow:inset 0 0 0 var(--am-button-border-size,1px) var(--am-button-border-color,#e5e5e5);background-color:#fff;background-color:var(--am-button-background,#fff);font-size:18px;font-size:var(--am-button-title-size,18px)}.am-button-content {display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.am-button-loading {margin-right:12px}.am-button.am-button-disabled {opacity:.4;opacity:var(--am-button-disabled-opacity,.4);color:#333;color:var(--am-button-color,#333);background-color:#fff;background-color:var(--am-button-background,#fff)}.am-button-active {-webkit-filter:brightness(.9);filter:brightness(.9)}.am-button-active>:nth-child(1n+1) {opacity:.7}.am-button-text.am-button-active>:nth-child(1n+1) {opacity:.6}.am-button-subtitle {font-size:17px;font-size:var(--am-button-doubleline-title-size,17px)}.am-button-subtitle-subfont {font-size:12px;font-size:var(--am-button-subtitle-size,12px);opacity:.6}.am-button-primary,.am-button-primary.am-button-disabled {background-color:#1677ff;background-color:var(--am-button-primary-background,#1677ff);color:#fff;color:var(--am-button-primary-color,#fff);box-shadow:0 0}.am-button-ghost,.am-button-ghost.am-button-disabled {background-color:transparent;color:#1677ff;color:var(--am-button-ghost-color,#1677ff);box-shadow:inset 0 0 0 1px #1677ff;box-shadow:inset 0 0 0 var(--am-button-border-size,1px) var(--am-button-ghost-border-color,#1677ff)}.am-button-warn,.am-button-warn.am-button-disabled {background-color:#ff3b30;background-color:var(--am-button-warn-background,#ff3b30);color:#fff;color:var(--am-button-warn-color,#fff);box-shadow:0 0}.am-button-warn-ghost,.am-button-warn-ghost.am-button-disabled {background-color:transparent;color:#ff3b30;color:var(--am-button-warn-ghost-color,#ff3b30);box-shadow:inset 0 0 0 1px #ff3b30;box-shadow:inset 0 0 0 var(--am-button-border-size,1px) var(--am-button-ghost-border-color,#ff3b30)}.am-button-light,.am-button-light.am-button-disabled {background-color:#e7f1ff;background-color:var(--am-button-light-background,#e7f1ff);color:#1677ff;color:var(--am-button-light-color,#1677ff);box-shadow:0 0}.am-button-text,.am-button-text.am-button-disabled {display:inline-block;background-color:transparent;color:#1677ff;color:var(--am-button-text-color,#1677ff);border:0;padding:0;box-shadow:0 0}.am-button-capsule {display:inline-block;border-radius:50vh;border-radius:var(--am-button-capsule-corner,50vh);padding:4px 12px;padding:var(--am-button-capsule-padding-v,4px) var(--am-button-capsule-padding-h,12px)}.am-button-capsule-large {font-size:15px;font-size:var(--am-button-capsule-size-l,15px)}.am-button-capsule-large-minwidth {min-width:84px}.am-button-capsule-medium {font-size:13px;font-size:var(--am-button-capsule-size-m,13px)}.am-button-capsule-medium-minwidth {min-width:76px}.am-button-capsule-small {font-size:12px;font-size:var(--am-button-capsule-size-s,12px)}.am-button-capsule-small-minwidth {min-width:72px}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "y9AW":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "yFVK":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("qweL");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);




          Object(M_1_["Page"])({
            pagePath: "page/component/steps/steps",



            usingComponents: { "steps": "/node_modules/mini-ali-ui/es/steps/index" },
            render: function () {
              return __webpack_require__("T9FB");
            },
            stylesheet: function () {
              return __webpack_require__("jois");
            }
          });



          /***/
        }),

/***/ "yFqx":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "yTJ0":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "yVzR":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "yXRd":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("5AAy");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);




          M_1_["WorkerComponent"] && Object(M_1_["WorkerComponent"])({
            is: "/node_modules/mini-ali-ui/es/coupon/index",


            usingComponents: { "icon": "/node_modules/mini-ali-ui/es/am-icon/index" },
            render: function () {
              return __webpack_require__("qyTc");
            },
          });



          /***/
        }),

/***/ "yY/I":
/***/ (function (module, exports, __webpack_require__) {

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

          /***/
        }),

/***/ "yZSy":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "yclZ":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Au/O");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);




          M_1_["WorkerComponent"] && Object(M_1_["WorkerComponent"])({
            is: "/node_modules/mini-ali-ui/es/button/index",


            usingComponents: { "loading": "/node_modules/mini-ali-ui/es/loading/index" },
            render: function () {
              return __webpack_require__("rjw+");
            },
          });



          /***/
        }),

/***/ "ydqn":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "yhK8":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "yka4":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "ymbM":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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



          /***/
        }),

/***/ "yxQJ":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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



          /***/
        }),

/***/ "z+UW":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "z4OG":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "z4SO":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "z4Ye":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = ".page-body-info {height:2rem}.page-body-text-network-type {font-size:0.8rem;font-family:Helvetica}";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "z67j":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "z78H":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "z9ec":
/***/ (function (module, exports, __webpack_require__) {

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

          /***/
        }),

/***/ "zAK4":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "zFMp":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "zW1u":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/*ACSSCompileContext:{"atImports":[]}*/var internal_style;

          internal_style = "";
/* harmony default export */ __webpack_exports__["default"] = (internal_style);

          /***/
        }),

/***/ "zicR":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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



          /***/
        }),

/***/ "zits":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ju+b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);


          var stylesheet = new M_0_["StyleSheet"]({
            stylePath: "page/API/keyboard/keyboard.acss",
          });

  /* harmony default export */ __webpack_exports__["default"] = (stylesheet);


          /***/
        }),

/***/ "zm5a":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

          "use strict";
          __webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("hZKm");
/* harmony import */ var M_1_ = __webpack_require__("ju+b");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);




          Object(M_1_["Page"])({
            pagePath: "page/component/page-result/error/index",



            usingComponents: { "page-result": "/node_modules/mini-ali-ui/es/page-result/index" },
            render: function () {
              return __webpack_require__("bn83");
            },
            stylesheet: function () {
              return __webpack_require__("pUUD");
            }
          });



          /***/
        }),

/***/ "znDD":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "zrY6":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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


          /***/
        }),

/***/ "zw8Z":
/***/ (function (module, exports, __webpack_require__) {

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

          /***/
        })

      /******/
    });
    var __scriptTimeEnd4Bundle = Date && Date.now && Date.now();
    //# sourceMappingURL=index.js.map

  }


}

layer1();