/* build:0.63.4 */var __scriptTimeBegin4Bundle = Date && Date.now && Date.now();var __scriptName4Bundle = "index.worker.js";
/*! 
[PositionForHostEntryCodeBegin]*/ !(function(){/**! __CODEPLACEHOLDER_START__ */ /*[PositionForHostEntryCodeBegin]*/ /**! __CODEPLACEHOLDER_END__ */})(); /*
 */

console.log("checkpoint 1");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "++dR":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "+95A":
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

$global.$addPageConfig({
  pagePath: "page/component/switch/switch",
  usingComponents: __webpack_require__("BaC8")

});
Page({
  data: {
    switch1: true
  },
  switch1Change: function switch1Change(e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value);
    this.setData({
      switch1: e.detail.value
    });
  },
  switch2Change: function switch2Change(e) {
    console.log('switch2 发生 change 事件，携带值为', e.detail.value);
  }
});

/***/ }),

/***/ "+AE8":
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "+B7z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("8oR3");
/* harmony import */ var M_1_ = __webpack_require__("dPo+");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "+C9x":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "+UUW":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "+VyT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0ryc");
/* harmony import */ var M_1_ = __webpack_require__("gfSV");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "+YOP":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "+maN":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/list/list-secondary/index",
  usingComponents: __webpack_require__("PTcL")

});
Component({
  props: {
    title: '',
    subtitle: '',
    thumb: ''
  },
  didMount: function didMount() {
    var _this$props = this.props,
        _this$props$title = _this$props.title,
        title = _this$props$title === void 0 ? '' : _this$props$title,
        _this$props$subtitle = _this$props.subtitle,
        subtitle = _this$props$subtitle === void 0 ? '' : _this$props$subtitle;
    var thumbPlaceholder = title.slice(0, 1) + subtitle.slice(0, 1);
    this.setData({
      // thumbPlaceholder: thumbPlaceholder.slice(1),
      thumbPlaceholder: thumbPlaceholder
    });
  }
});

/***/ }),

/***/ "+uZA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtEvent = __webpack_require__("G+tX");

var _fmtEvent2 = _interopRequireDefault(_fmtEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/popover/popover-item/index",
  usingComponents: __webpack_require__("wv/R")

});

Component({
  props: {
    className: ''
  },
  methods: {
    onItemClick: function onItemClick(e) {
      if (this.props.onItemClick && typeof this.props.onItemClick === 'function') {
        var event = (0, _fmtEvent2.default)(this.props, e);
        this.props.onItemClick(event);
      }
    }
  }
});

/***/ }),

/***/ "+v5t":
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

$global.$addPageConfig({
  pagePath: "page/component/modal/modal",
  usingComponents: __webpack_require__("/CRA")

});
Page({
  data: {
    modalOpened: false,
    modalOpened2: false,
    modalOpened21: false,
    modalOpened22: false,
    modalOpened222: false,
    modalOpened23: false,
    modalOpened3: false,
    modalOpened4: false,
    modalOpened5: false,
    modalOpened6: false,
    buttons5: [{ text: '取消' }, { text: '主操作', extClass: 'buttonBold' }],
    buttons6: [{ text: '主操作', extClass: 'buttonBold' }, { text: '取消' }],
    buttons7: [{ text: '取消', extClass: 'cancelBtn' }, { text: '删除', extClass: 'deleteBtn' }],
    buttons8: [{ text: '主操作', extClass: 'buttonBold' }, { text: '更多' }, { text: '取消' }]
  },
  /* 通用modal */
  openModal: function openModal() {
    this.setData({
      modalOpened: true
    });
  },
  onModalClick: function onModalClick() {
    this.setData({
      modalOpened: false
    });
  },
  onModalClose: function onModalClose() {
    this.setData({
      modalOpened: false
    });
  },

  /* 带图弹窗-大图 */
  openModal2: function openModal2() {
    this.setData({
      modalOpened2: true
    });
  },
  onModalClick2: function onModalClick2() {
    this.setData({
      modalOpened2: false
    });
  },
  onModalClose2: function onModalClose2() {
    this.setData({
      modalOpened2: false
    });
  },

  /* 带图弹窗 */
  openModal21: function openModal21() {
    this.setData({
      modalOpened21: true
    });
  },
  onModalClick21: function onModalClick21() {
    this.setData({
      modalOpened21: false
    });
  },
  onModalClose21: function onModalClose21() {
    this.setData({
      modalOpened21: false
    });
  },

  /* 带图弹窗-小图 */
  openModal22: function openModal22() {
    this.setData({
      modalOpened22: true
    });
  },
  onModalClick22: function onModalClick22() {
    this.setData({
      modalOpened22: false
    });
  },
  onModalClose22: function onModalClose22() {
    this.setData({
      modalOpened22: false
    });
  },

  /* 带图弹窗-中图 */
  openModal222: function openModal222() {
    this.setData({
      modalOpened222: true
    });
  },
  onModalClick222: function onModalClick222() {
    this.setData({
      modalOpened222: false
    });
  },
  onModalClose222: function onModalClose222() {
    this.setData({
      modalOpened222: false
    });
  },

  /* 带图弹框-关闭icon */
  openModal23: function openModal23() {
    this.setData({
      modalOpened23: true
    });
  },
  onModalClick23: function onModalClick23() {
    this.setData({
      modalOpened23: false
    });
  },
  onModalClose23: function onModalClose23() {
    this.setData({
      modalOpened23: false
    });
  },

  /* 运营活动弹框-大 */
  openModal3: function openModal3() {
    this.setData({
      modalOpened3: true
    });
  },
  onModalClick3: function onModalClick3() {
    this.setData({
      modalOpened3: false
    });
  },

  /* 运营活动弹框-小 */
  openModal4: function openModal4() {
    this.setData({
      modalOpened4: true
    });
  },
  onModalClick4: function onModalClick4() {
    this.setData({
      modalOpened4: false
    });
  },

  /* 双按钮弹框 */
  openModal5: function openModal5() {
    this.setData({
      modalOpened5: true
    });
  },
  onButtonClick5: function onButtonClick5(e) {
    var dataset = e.target.dataset;

    this.setData({
      modalOpened5: false
    });
    my.alert({
      title: "\u70B9\u51FB\u4E86\uFF1A" + JSON.stringify(dataset),
      buttonText: '关闭'
    });
  },

  /* 双按钮弹框-竖排 */
  openModal6: function openModal6() {
    this.setData({
      modalOpened6: true
    });
  },
  onButtonClick6: function onButtonClick6(e) {
    var dataset = e.target.dataset;

    this.setData({
      modalOpened6: false
    });
    my.alert({
      title: "\u70B9\u51FB\u4E86\uFF1A" + JSON.stringify(dataset),
      buttonText: '关闭'
    });
  },

  /* 弹框自定义按钮样式 */
  openModal7: function openModal7() {
    this.setData({
      modalOpened7: true
    });
  },
  onModalClose7: function onModalClose7() {
    this.setData({
      modalOpened7: false
    });
  },
  onButtonClick7: function onButtonClick7(e) {
    var dataset = e.target.dataset;

    this.setData({
      modalOpened7: false
    });
    my.alert({
      title: "\u70B9\u51FB\u4E86\uFF1A" + JSON.stringify(dataset),
      buttonText: '关闭'
    });
  },

  /* 三按钮弹框 */
  openModal8: function openModal8() {
    this.setData({
      modalOpened8: true
    });
  },
  onButtonClick8: function onButtonClick8(e) {
    var dataset = e.target.dataset;

    this.setData({
      modalOpened8: false
    });
    my.alert({
      title: "\u70B9\u51FB\u4E86\uFF1A" + JSON.stringify(dataset),
      buttonText: '关闭'
    });
  },

  /* 自定义弹框内容 */
  openModal9: function openModal9() {
    this.setData({
      modalOpened9: true
    });
  },
  onModalClose9: function onModalClose9() {
    this.setData({
      modalOpened9: false
    });
  }
});

/***/ }),

/***/ "+v8P":
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

$global.$addPageConfig({
  pagePath: "page/API/get-network-type/get-network-type",
  usingComponents: __webpack_require__("96Hw")

});
Page({
  data: {
    hasNetworkType: false
  },
  onLoad: function onLoad() {
    this.onChange = this.onChange.bind(this);
    // my.onNetworkChange(this.onChange);
  },
  onChange: function onChange(res) {
    console.log('onNetworkChange', res);
    this.setData({
      hasNetworkType: true,
      networkType: res.networkType
    });
  },
  onUnload: function onUnload() {
    // my.offNetworkChange(this.onChange);
  },
  getNetworkType: function getNetworkType() {
    var _this = this;

    my.getNetworkType({
      success: function success(res) {
        _this.setData({
          hasNetworkType: true,
          networkType: res.networkType
        });
      }
    });
  },
  clear: function clear() {
    this.setData({
      hasNetworkType: false,
      networkType: ''
    });
  }
});

/***/ }),

/***/ "/CB0":
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

$global.$addPageConfig({
  pagePath: "page/API/contact/contact",
  usingComponents: __webpack_require__("no+l")

});
Page({
  data: {
    "photoFilePath": "/sdcard/DCIM/Camera/a.jpg",
    "nickName": "七月流火",
    "lastName": "Last",
    "middleName": "Middle",
    "firstName": "First",
    "remark": "这里是备注",
    "mobilePhoneNumber": "13800000000",
    "homePhoneNumber": "11111115",
    "workPhoneNumber": "11111112",
    "homeFaxNumber": "11111114",
    "workFaxNumber": "11111111",
    "hostNumber": "11111113",
    "weChatNumber": "liuhuo",
    "alipayAccount": "alipay@alipay.com",
    "addressCountry": "US",
    "addressState": "California",
    "addressCity": "San Francisco",
    "addressStreet": "Mountain View",
    "addressPostalCode": "94016",
    "workAddressCountry": "China",
    "workAddressState": "Zhejiang",
    "workAddressCity": "Hangzhou",
    "workAddressStreet": "Tianmushan Road",
    "workAddressPostalCode": "361005",
    "homeAddressCountry": "Canada",
    "homeAddressState": "Ontairo",
    "homeAddressCity": "Toronto",
    "homeAddressStreet": "No.234 Road",
    "homeAddressPostalCode": "123456",
    "organization": "AntFin",
    "title": "Developer",
    "email": "liuhuo01@sina.com",
    "url": "www.alipay.com",
    success: function success(res) {
      my.alert({
        content: 'addPhoneContact response: ' + JSON.stringify(res)
      });
    },
    fail: function fail(res) {
      my.alert({
        content: 'addPhoneContact response: ' + JSON.stringify(res)
      });
    }
  },
  choosePhoneContact: function choosePhoneContact() {
    my.choosePhoneContact({
      success: function success(res) {
        my.alert({
          content: 'choosePhoneContact response: ' + JSON.stringify(res)
        });
      },
      fail: function fail(res) {
        my.alert({
          content: 'choosePhoneContact response: ' + JSON.stringify(res)
        });
      }
    });
  },
  chooseAlipayContact: function chooseAlipayContact() {
    my.chooseAlipayContact({
      count: 2,
      success: function success(res) {
        my.alert({
          content: 'chooseAlipayContact response: ' + JSON.stringify(res)
        });
      },
      fail: function fail(res) {
        my.alert({
          content: 'chooseAlipayContact response: ' + JSON.stringify(res)
        });
      }
    });
  },
  chooseContact: function chooseContact() {
    my.chooseContact({
      chooseType: 'multi', // 多选模式
      includeMe: true, // 包含自己
      includeMobileContactMode: 'known', //仅包含双向手机通讯录联系人，也即双方手机通讯录都存有对方号码的联系人
      multiChooseMax: 3, // 最多能选择三个联系人
      multiChooseMaxTips: '超过选择的最大人数了',
      success: function success(res) {
        my.alert({
          content: 'chooseContact : ' + JSON.stringify(res)
        });
      },
      fail: function fail(res) {
        my.alert({
          content: 'chooseContact : ' + JSON.stringify(res)
        });
      }
    });
  },
  onInput: function onInput(e) {
    this.data[e.currentTarget.id] = e.detail.value;
  },
  addPhoneContact: function addPhoneContact() {
    if (my.canIUse('addPhoneContact')) {
      my.addPhoneContact(this.data);
    } else {
      my.alert({
        title: '客户端版本过低',
        content: 'my.addPhoneContact() 需要 10.1.32 及以上版本'
      });
    }
  }
});

/***/ }),

/***/ "/CRA":
/***/ (function(module, exports) {

module.exports = {"modal":"/node_modules/mini-ali-ui/es/modal/index"}

/***/ }),

/***/ "/Kis":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0iQm");
/* harmony import */ var M_1_ = __webpack_require__("Y61U");
/* harmony import */ var M_2_ = __webpack_require__("GwvB");
/* harmony import */ var M_3_ = __webpack_require__("/OTZ");
/* harmony import */ var M_3__default = /*#__PURE__*/__webpack_require__.n(M_3_);

  


  
  

/***/ }),

/***/ "/OTZ":
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

$global.$addPageConfig({
  pagePath: "page/component/input-item/input-item",
  usingComponents: __webpack_require__("bGC3")

});
Page({
  data: {
    cardNo: '1234****',
    name: '',
    layerShow1: '',
    layerShow2: '垂直输入框的布局',
    layerShow3: 'disabled 状态的 input'
  },
  onExtraTap: function onExtraTap() {
    my.alert({
      content: 'extra tapped'
    });
  },
  onItemInput: function onItemInput(e) {
    var _setData;

    this.setData((_setData = {}, _setData[e.target.dataset.field] = e.detail.value, _setData));
  },
  onItemFocus: function onItemFocus() {},
  onItemBlur: function onItemBlur() {},
  onItemConfirm: function onItemConfirm() {},
  onClear: function onClear(e) {
    var _setData2;

    this.setData((_setData2 = {}, _setData2[e.target.dataset.field] = '', _setData2));
  },
  onSend: function onSend() {
    my.alert({
      title: 'verify code sent'
    });
  }
});

/***/ }),

/***/ "/QP9":
/***/ (function(module, exports) {

module.exports = {"avatar":"/node_modules/mini-ali-ui/es/avatar/index"}

/***/ }),

/***/ "/TvH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("iC5P");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "/cKz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GUIp");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "/ccz":
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

$global.$addPageConfig({
  pagePath: "page/component/switch-ali-ui/index",
  usingComponents: __webpack_require__("le+c")

});
Page({
  switch1Change: function switch1Change(e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value);
  }
});

/***/ }),

/***/ "/dcX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("S3L8");
/* harmony import */ var M_1_ = __webpack_require__("+v5t");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "/hvP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("h9Pb");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "/hwr":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "/lU1":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/guide/index",
  usingComponents: __webpack_require__("Ve/A")

});
Component({
  props: {
    btn_next: '下一步',
    btn_jump: '跳过',
    btn_over: '知道了',
    hasJump: false,
    show: false,
    guideList: [],
    onGuideOver: function onGuideOver() {}
  },
  data: {
    guideNumber: 1,
    guideCurrent: 1,
    guideLast: 1,
    showGuideList: []
  },
  didMount: function didMount() {
    var guideList = this.props.guideList;
    this.setData({
      guideNumber: guideList.length,
      guideCurrent: guideList.length,
      showGuideList: guideList[this.data.guideNumber - this.data.guideCurrent]
    });
  },
  didUpdate: function didUpdate() {
    var guideList = this.props.guideList;

    if (this.data.guideCurrent - 1 >= 0) {
      this.setData({
        guideCurrent: this.data.guideCurrent,
        showGuideList: guideList[this.data.guideNumber - this.data.guideCurrent]
      });
    }
  },
  methods: {
    onBtnClick: function onBtnClick() {
      if (this.data.guideCurrent > this.data.guideLast) {
        this.setData({
          guideCurrent: this.data.guideCurrent - 1
        });
      } else {
        this.props.show = false;
      }
    },
    onGuideClick: function onGuideClick(e) {
      this.props.show = false;
      var onGuideOver = this.props.onGuideOver;

      if (onGuideOver !== '' && typeof onGuideOver === 'function') {
        onGuideOver(e);
      }
    }
  }
});

/***/ }),

/***/ "/uFj":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {


module.exports = __webpack_require__("EW39");


/***/ }),

/***/ "01hP":
/***/ (function(module, exports) {

module.exports = {"message":"/node_modules/mini-ali-ui/es/message/index","checkbox":"/node_modules/mini-ali-ui/es/am-checkbox/index","radio":"/node_modules/mini-ali-ui/es/am-radio/index"}

/***/ }),

/***/ "05ie":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("v0bc");
/* harmony import */ var M_1_ = __webpack_require__("PmPC");
/* harmony import */ var M_2_ = __webpack_require__("RkHl");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);
  

/***/ }),

/***/ "0BCK":
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

$global.$addPageConfig({
  pagePath: "page/API/zm-credit-borrow/zm-credit-borrow",
  usingComponents: __webpack_require__("AWkT")

});
Page({
  zmCreditBorrow: function zmCreditBorrow() {
    var vNow = new Date();
    var sNow = '';
    sNow += String(vNow.getFullYear());
    sNow += String(vNow.getMonth() + 1);
    sNow += String(vNow.getDate());
    sNow += String(vNow.getHours());
    sNow += String(vNow.getMinutes());
    sNow += String(vNow.getSeconds());
    sNow += String(vNow.getMilliseconds());
    my.zmCreditBorrow({
      out_order_no: sNow,
      product_code: 'w1010100000000002858',
      credit_biz: 'ZMRT171102175151',
      invoke_type: 'TINYAPP',
      goods_name: encodeURIComponent('串珠玩具租借'),
      rent_unit: 'DAY_YUAN',
      rent_amount: '0.01',
      deposit_amount: '1.00',
      deposit_state: 'Y',
      invoke_state: '{"user_name":"' + encodeURIComponent('天使之翼II') + '"}',
      success: function success(res) {
        my.alert({
          content: JSON.stringify(res)
        });
      }
    });
  }
});

/***/ }),

/***/ "0IKO":
/***/ (function(module, exports) {

module.exports = {"auto-sizer":"/node_modules/mini-ali-ui/es/list/auto-size-img/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "0KBx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("wro7");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "0LoN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("yGyr");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "0PA7":
/***/ (function(module, exports) {

module.exports = {"flex":"/node_modules/mini-ali-ui/es/flex/index","flex-item":"/node_modules/mini-ali-ui/es/flex/flex-item/index"}

/***/ }),

/***/ "0g6y":
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

$global.$addPageConfig({
  pagePath: "page/component/form/form",
  usingComponents: __webpack_require__("BHhq")

});

Page({
  data: {},
  onSubmit: function onSubmit(e) {
    my.alert({
      content: "\u6570\u636E\uFF1A" + JSON.stringify(e.detail.value)
    });
  },
  onReset: function onReset() {}
});

/***/ }),

/***/ "0iQm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("EF3x");
/* harmony import */ var M_1_ = __webpack_require__("DgiU");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "0ryc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("HXyD");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "0vjv":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "1/rC":
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

$global.$addPageConfig({
  pagePath: "page/API/clipboard/clipboard",
  usingComponents: __webpack_require__("rcva")

});
Page({
  data: {
    text: '3.1415926',
    copy: ''
  },

  handleInput: function handleInput(e) {
    this.setData({
      text: e.detail.value
    });
  },
  handleCopy: function handleCopy() {
    my.setClipboard({
      text: this.data.text
    });
  },
  handlePaste: function handlePaste() {
    var _this = this;

    my.getClipboard({
      success: function success(_ref) {
        var text = _ref.text;

        _this.setData({ copy: text });
      }
    });
  }
});

/***/ }),

/***/ "11X4":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "1GiG":
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

$global.$addPageConfig({
  pagePath: "page/API/bluetooth/bluetooth",
  usingComponents: __webpack_require__("lpke")

});
Page({
  data: {
    devid: '0D9C82AD-1CC0-414D-9526-119E08D28124',
    serid: 'FEE7',
    notifyId: '36F6',
    writeId: '36F5',
    charid: '',
    alldev: [{ deviceId: '' }]
  },
  //获取本机蓝牙开关状态
  openBluetoothAdapter: function openBluetoothAdapter() {
    my.openBluetoothAdapter({
      success: function success(res) {
        if (!res.isSupportBLE) {
          my.alert({ content: '抱歉，您的手机蓝牙暂不可用' });
          return;
        }
        my.alert({ content: '初始化成功！' });
      },
      fail: function fail(error) {
        my.alert({ content: JSON.stringify(error) });
      }
    });
  },
  closeBluetoothAdapter: function closeBluetoothAdapter() {
    my.closeBluetoothAdapter({
      success: function success() {
        my.alert({ content: '关闭蓝牙成功！' });
      },
      fail: function fail(error) {
        my.alert({ content: JSON.stringify(error) });
      }
    });
  },
  getBluetoothAdapterState: function getBluetoothAdapterState() {
    my.getBluetoothAdapterState({
      success: function success(res) {
        if (!res.available) {
          my.alert({ content: '抱歉，您的手机蓝牙暂不可用' });
          return;
        }
        my.alert({ content: JSON.stringify(res) });
      },
      fail: function fail(error) {
        my.alert({ content: JSON.stringify(error) });
      }
    });
  },

  //扫描蓝牙设备
  startBluetoothDevicesDiscovery: function startBluetoothDevicesDiscovery() {
    var _this = this;

    my.startBluetoothDevicesDiscovery({
      allowDuplicatesKey: false,
      success: function success() {
        my.onBluetoothDeviceFound({
          success: function success(res) {
            // my.alert({content:'监听新设备'+JSON.stringify(res)});
            var deviceArray = res.devices;
            for (var i = deviceArray.length - 1; i >= 0; i--) {
              var deviceObj = deviceArray[i];
              //通过设备名称或者广播数据匹配目标设备，然后记录deviceID后面使用
              if (deviceObj.name == _this.data.name) {
                my.alert({ content: '目标设备被找到' });
                my.offBluetoothDeviceFound();
                _this.setData({
                  deviceId: deviceObj.deviceId
                });
                break;
              }
            }
          },
          fail: function fail(error) {
            my.alert({ content: '监听新设备失败' + JSON.stringify(error) });
          }
        });
      },
      fail: function fail(error) {
        my.alert({ content: '启动扫描失败' + JSON.stringify(error) });
      }
    });
  },

  //停止扫描
  stopBluetoothDevicesDiscovery: function stopBluetoothDevicesDiscovery() {
    my.stopBluetoothDevicesDiscovery({
      success: function success(res) {
        my.offBluetoothDeviceFound();
        my.alert({ content: '操作成功！' });
      },
      fail: function fail(error) {
        my.alert({ content: JSON.stringify(error) });
      }
    });
  },

  //获取正在连接中的设备
  getConnectedBluetoothDevices: function getConnectedBluetoothDevices() {
    my.getConnectedBluetoothDevices({
      success: function success(res) {
        if (res.devices.length === 0) {
          my.alert({ content: '没有在连接中的设备！' });
          return;
        }
        my.alert({ content: JSON.stringify(res) });
        devid = res.devices[0].deviceId;
      },
      fail: function fail(error) {
        my.alert({ content: JSON.stringify(error) });
      }
    });
  },


  //获取所有搜索到的设备
  getBluetoothDevices: function getBluetoothDevices() {
    my.getBluetoothDevices({
      success: function success(res) {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: function fail(error) {
        my.alert({ content: JSON.stringify(error) });
      }
    });
  },
  bindKeyInput: function bindKeyInput(e) {
    this.setData({
      devid: e.detail.value
    });
  },


  //连接设备
  connectBLEDevice: function connectBLEDevice() {
    my.connectBLEDevice({
      deviceId: this.data.devid,
      success: function success(res) {
        my.alert({ content: '连接成功' });
      },
      fail: function fail(error) {
        my.alert({ content: JSON.stringify(error) });
      }
    });
  },

  //断开连接
  disconnectBLEDevice: function disconnectBLEDevice() {
    my.disconnectBLEDevice({
      deviceId: this.data.devid,
      success: function success() {
        my.alert({ content: '断开连接成功！' });
      },
      fail: function fail(error) {
        my.alert({ content: JSON.stringify(error) });
      }
    });
  },

  //获取连接设备的server，必须要再连接状态状态之下才能获取
  getBLEDeviceServices: function getBLEDeviceServices() {
    var _this2 = this;

    my.getConnectedBluetoothDevices({
      success: function success(res) {
        if (res.devices.length === 0) {
          my.alert({ content: '没有已连接的设备' });
          return;
        }
        my.getBLEDeviceServices({
          deviceId: _this2.data.devid,
          success: function success(res) {
            my.alert({ content: JSON.stringify(res) });
            _this2.setData({
              serid: res.services[0].serviceId
            });
          },
          fail: function fail(error) {
            my.alert({ content: JSON.stringify(error) });
          }
        });
      }
    });
  },

  //获取连接设备的charid，必须要再连接状态状态之下才能获取（这里分别筛选出读写特征字）
  getBLEDeviceCharacteristics: function getBLEDeviceCharacteristics() {
    var _this3 = this;

    my.getConnectedBluetoothDevices({
      success: function success(res) {
        if (res.devices.length === 0) {
          my.alert({ content: '没有已连接的设备' });
          return;
        }
        _this3.setData({
          devid: res.devices[0].deviceId
        });
        my.getBLEDeviceCharacteristics({
          deviceId: _this3.data.devid,
          serviceId: _this3.data.serid,
          success: function success(res) {
            my.alert({ content: JSON.stringify(res) });
            //特征字对象属性见文档，根据属性匹配读写特征字并记录，然后后面读写使用
            _this3.setData({
              charid: res.characteristics[0].characteristicId
            });
          },
          fail: function fail(error) {
            my.alert({ content: JSON.stringify(error) });
          }
        });
      }
    });
  },

  //读写数据
  readBLECharacteristicValue: function readBLECharacteristicValue() {
    var _this4 = this;

    my.getConnectedBluetoothDevices({
      success: function success(res) {
        if (res.devices.length === 0) {
          my.alert({ content: '没有已连接的设备' });
          return;
        }
        _this4.setData({
          devid: res.devices[0].deviceId
        });
        my.readBLECharacteristicValue({
          deviceId: _this4.data.devid,
          serviceId: _this4.data.serid,
          characteristicId: _this4.data.notifyId,
          //1、安卓读取服务
          // serviceId:'0000180d-0000-1000-8000-00805f9b34fb',
          // characteristicId:'00002a38-0000-1000-8000-00805f9b34fb',
          success: function success(res) {
            my.alert({ content: JSON.stringify(res) });
          },
          fail: function fail(error) {
            my.alert({ content: '读取失败' + JSON.stringify(error) });
          }
        });
      }
    });
  },
  writeBLECharacteristicValue: function writeBLECharacteristicValue() {
    var _this5 = this;

    my.getConnectedBluetoothDevices({
      success: function success(res) {
        if (res.devices.length === 0) {
          my.alert({ content: '没有已连接的设备' });
          return;
        }
        _this5.setData({
          devid: res.devices[0].deviceId
        });

        my.writeBLECharacteristicValue({
          deviceId: _this5.data.devid,
          serviceId: _this5.data.serid,
          characteristicId: _this5.data.charid,
          //安卓写入服务
          //serviceId:'0000180d-0000-1000-8000-00805f9b34fb',
          //characteristicId:'00002a39-0000-1000-8000-00805f9b34fb',
          value: 'ABCD',
          success: function success(res) {
            my.alert({ content: '写入数据成功！' });
          },
          fail: function fail(error) {
            my.alert({ content: JSON.stringify(error) });
          }
        });
      }
    });
  },
  notifyBLECharacteristicValueChange: function notifyBLECharacteristicValueChange() {
    var _this6 = this;

    my.getConnectedBluetoothDevices({
      success: function success(res) {
        if (res.devices.length === 0) {
          my.alert({ content: '没有已连接的设备' });
          return;
        }
        _this6.setData({
          devid: res.devices[0].deviceId
        });

        my.notifyBLECharacteristicValueChange({
          state: true,
          deviceId: _this6.data.devid,
          serviceId: _this6.data.serid,
          characteristicId: _this6.data.notifyId,
          success: function success() {
            //监听特征值变化的事件
            my.onBLECharacteristicValueChange({
              success: function success(res) {
                //  my.alert({content: '特征值变化：'+JSON.stringify(res)});
                my.alert({ content: '得到响应数据 = ' + res.value });
              }
            });
            my.alert({ content: '监听成功' });
          },
          fail: function fail(error) {
            my.alert({ content: '监听失败' + JSON.stringify(error) });
          }
        });
      }
    });
  },
  offBLECharacteristicValueChange: function offBLECharacteristicValueChange() {
    my.offBLECharacteristicValueChange();
  },

  //其他事件
  bluetoothAdapterStateChange: function bluetoothAdapterStateChange() {
    my.onBluetoothAdapterStateChange(this.getBind('onBluetoothAdapterStateChange'));
  },
  onBluetoothAdapterStateChange: function onBluetoothAdapterStateChange() {
    if (res.error) {
      my.alert({ content: JSON.stringify(error) });
    } else {
      my.alert({ content: '本机蓝牙状态变化：' + JSON.stringify(res) });
    }
  },
  offBluetoothAdapterStateChange: function offBluetoothAdapterStateChange() {
    my.offBluetoothAdapterStateChange(this.getBind('onBluetoothAdapterStateChange'));
  },
  getBind: function getBind(name) {
    if (!this["bind" + name]) {
      this["bind" + name] = this[name].bind(this);
    }
    return this["bind" + name];
  },
  BLEConnectionStateChanged: function BLEConnectionStateChanged() {
    my.onBLEConnectionStateChanged(this.getBind('onBLEConnectionStateChanged'));
  },
  onBLEConnectionStateChanged: function onBLEConnectionStateChanged(res) {
    if (res.error) {
      my.alert({ content: JSON.stringify(error) });
    } else {
      my.alert({ content: '连接状态变化：' + JSON.stringify(res) });
    }
  },
  offBLEConnectionStateChanged: function offBLEConnectionStateChanged() {
    my.offBLEConnectionStateChanged(this.getBind('onBLEConnectionStateChanged'));
  },
  onUnload: function onUnload() {
    this.offBLEConnectionStateChanged();
    this.offBLECharacteristicValueChange();
    this.offBluetoothAdapterStateChange();
    this.closeBluetoothAdapter();
  }
});

/***/ }),

/***/ "1NO0":
/***/ (function(module, exports) {

module.exports = {"list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index","alphabet":"/node_modules/mini-ali-ui/es/list/alphabet/index","list-secondary":"/node_modules/mini-ali-ui/es/list/list-secondary/index","tag":"/node_modules/mini-ali-ui/es/tag/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index","am-switch":"/node_modules/mini-ali-ui/es/am-switch/index","am-radio":"/node_modules/mini-ali-ui/es/am-radio/index","button":"/node_modules/mini-ali-ui/es/button/index"}

/***/ }),

/***/ "1P6b":
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

$global.$addPageConfig({
  pagePath: "page/API/get-background-audio-manager/get-background-audio-manager",
  usingComponents: __webpack_require__("XS21")

});
Page({
  onReady: function onReady(e) {
    this.backgroundAudioManager = my.getBackgroundAudioManager();
    //this.backgroundAudioManager.src = '';
    //this.backgroundAudioManager.startTime = 10000;
    this.backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';

    this.backgroundAudioManager.onPlay(function () {
      console.log("back onPlay");
      my.alert({
        content: '开始播放'
      });
    });
    this.backgroundAudioManager.onPause(function () {
      console.log("back onPause");
      my.alert({
        content: '暂停播放'
      });
    });
    this.backgroundAudioManager.onCanplay(function () {
      console.log("back onCanplay");
      my.alert({
        content: '音频进入可以播放状态'
      });
    });
    this.backgroundAudioManager.onStop(function () {
      console.log("back onStop");
      my.alert({
        content: '背景音频停止事件'
      });
    });
    this.backgroundAudioManager.onEnded(function () {
      console.log("back onEnded");
      my.alert({
        content: '背景音频自然播放结束事件'
      });
    });
    this.backgroundAudioManager.onTimeUpdate(function () {
      console.log("onTimeUpdate");
      /*my.alert({
        content:'背景音频播放进度更新事件'
      });*/
    });
    this.backgroundAudioManager.onPrev(function () {
      console.log("back onPrev");
      my.alert({
        content: '点击上一曲事件'
      });
    });
    this.backgroundAudioManager.onNext(function () {
      console.log("back onNext");
      my.alert({
        content: '点击下一曲事件'
      });
    });
    this.backgroundAudioManager.onError(function () {
      console.log("back onError");
      my.alert({
        content: '背景音频播放错误事件'
      });
    });
    this.backgroundAudioManager.onWaiting(function () {
      console.log("back onWaiting");
    });
  },


  audioPlay: function audioPlay() {
    console.log("call play");
    this.backgroundAudioManager.play();
    console.log("call play end");
  },
  audioPause: function audioPause() {
    console.log("call pause");
    this.backgroundAudioManager.pause();
  },
  audioStop: function audioStop() {
    console.log("call stop");
    this.backgroundAudioManager.stop();
  },
  audio14: function audio14() {
    console.log("call seek 14");
    this.backgroundAudioManager.seek(14);
  },
  audioStart: function audioStart() {
    console.log("call seek 0");
    this.backgroundAudioManager.seek(0);
  },

  getAllProps: function getAllProps() {
    var result = {
      duration: this.backgroundAudioManager.duration,
      currentTime: this.backgroundAudioManager.currentTime,
      paused: this.backgroundAudioManager.paused,
      startTime: this.backgroundAudioManager.startTime,
      buffered: this.backgroundAudioManager.buffered,
      src: this.backgroundAudioManager.src
    };
    my.alert({ content: JSON.stringify(result) });
  }
});

/***/ }),

/***/ "1SpY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("WMUa");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "1UR/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fmtClass; });
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
var hasOwn = {}.hasOwnProperty;
/* eslint-disable no-continue, prefer-spread */

function fmtClass() {
  var classes = [];

  for (var i = 0; i < arguments.length; i++) {
    var arg = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (!arg) continue;
    var argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      var inner = fmtClass.apply(null, arg);

      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}

/***/ }),

/***/ "1bbv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("PmPC");
/* harmony import */ var M_1_ = __webpack_require__("Lxwb");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "1ktA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("1P6b");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "1mJz":
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

$global.$addPageConfig({
  pagePath: "page/component/grid/3/index",
  usingComponents: __webpack_require__("3lU5")

});
Page({
  data: {
    list1: [{
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字标题文字标题文字标题文字标题文字标题文字标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }],
    list3: [{
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字标题文字标题文字标题文字标题文字标题文字',
      desc: '描述信息'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字',
      desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字',
      desc: ''
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字',
      desc: '描述信息'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字',
      desc: '描述信息'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字',
      desc: '描述信息'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字',
      desc: '描述信息'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字',
      desc: '描述信息'
    }]
  },
  onItemClick: function onItemClick(ev) {
    my.alert({
      content: ev.detail.index
    });
  }
});

/***/ }),

/***/ "26kx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("OKc4");
/* harmony import */ var M_1_ = __webpack_require__("GwvB");
/* harmony import */ var M_2_ = __webpack_require__("UMXY");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "2BFI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Xokm");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "2Eqn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("c1eU");
/* harmony import */ var M_1_ = __webpack_require__("x/8G");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "2Whd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("nv5s");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "2gCX":
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

$global.$addPageConfig({
  pagePath: "page/component/long-password/index",
  usingComponents: __webpack_require__("E46x")

});
Page({
  data: {
    longPassword: ''
  },
  onInput: function onInput(e) {
    this.setData({
      longPassword: e.detail.value
    });
  },
  onClear: function onClear() {
    this.setData({
      longPassword: ''
    });
  }
});

/***/ }),

/***/ "2khE":
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

$global.$addPageConfig({
  pagePath: "page/component/amount-input/amount-input",
  usingComponents: __webpack_require__("PSdR")

});
Page({
  data: {
    value: 200
  },
  onInputClear: function onInputClear() {
    this.setData({
      value: ''
    });
  },
  onInputConfirm: function onInputConfirm(e) {
    console.log(e);
    my.alert({
      content: 'confirmed'
    });
  },
  onInput: function onInput(e) {
    console.log(e);
    var value = e.detail.value;

    this.setData({
      value: value
    });
  },
  onButtonClick: function onButtonClick() {
    my.alert({
      content: 'button clicked'
    });
  },
  onInputFocus: function onInputFocus(e) {
    console.log(e);
  },
  onInputBlur: function onInputBlur(e) {
    console.log(e);
  }
});

/***/ }),

/***/ "2thk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("TGP9");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "2zds":
/***/ (function(module, exports) {

module.exports = {"icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "31m6":
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

$global.$addPageConfig({
    pagePath: "page/API/ocr-general/ocr-general",
    usingComponents: __webpack_require__("8Ibh")

});
Page({
    data: {
        textArry: [],
        imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/OgNRRkBjbyUSSGoqvKDZ.jpg"
    },
    onLoad: function onLoad() {
        this.callFn(this.data.imgUrl);
    },
    callFn: function callFn(url) {
        var _this = this;

        my.showLoading({
            content: '加载中...',
            delay: 100
        });
        this.data.textArry = [];
        my.ocr({
            ocrType: 'ocr_general',
            path: url,
            success: function success(res) {
                var data = res.result.text;
                for (var i = 0; i < data.length; i++) {
                    _this.data.textArry.push({ title: i + 1, message: data[i] });
                }
                _this.setData({
                    imgUrl: url,
                    textArry: _this.data.textArry
                });
                my.hideLoading();
            },
            fail: function fail(res) {
                my.hideLoading();
                my.alert({
                    title: 'fail',
                    content: JSON.stringify(res)
                });
            }

        });
    },
    photoSubmit: function photoSubmit() {
        var _this2 = this;

        //点击上传
        my.chooseImage({
            count: 1,
            success: function success(res) {
                _this2.callFn(res.apFilePaths[0]);
            }
        });
    },
    imageLoad: function imageLoad(e) {},
    imageError: function imageError(e) {}
});

/***/ }),

/***/ "3Apm":
/***/ (function(module, exports) {

module.exports = {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "3Btm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("7vcU");
/* harmony import */ var M_1_ = __webpack_require__("n+wN");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "3Jry":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("MSFD");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "3PC2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("JjAg");
/* harmony import */ var M_1_ = __webpack_require__("9Ig+");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "3RDK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
var example = {};

example.rotate = function (context) {
  context.save();
  context.beginPath();
  context.rotate(10 * Math.PI / 180);
  context.rect(225, 75, 20, 10);
  context.setFillStyle('#108ee9');
  context.fill();
  context.restore();
};

example.scale = function (context) {
  context.save();
  context.beginPath();
  context.setStrokeStyle('#108ee9');
  context.rect(25, 25, 50, 50);
  context.stroke();

  context.scale(2, 2);

  context.beginPath();
  context.rect(25, 25, 50, 50);
  context.stroke();
  context.restore();
};

example.reset = function (context) {
  context.save();
  context.beginPath();

  context.setFillStyle('#108ee9');
  context.setStrokeStyle('#108ee9');
  context.setFontSize(10);

  context.setShadow(0, 0, 0, 'rgba(0, 0, 0, 0)');

  context.setLineCap('butt');
  context.setLineJoin('miter');
  context.setLineWidth(1);
  context.setMiterLimit(10);
  context.restore();
};

example.translate = function (context) {
  context.save();
  context.beginPath();
  context.setFillStyle('#108ee9');
  context.rect(10, 10, 100, 50);
  context.fill();

  context.translate(70, 70);

  context.beginPath();
  context.fill();
  context.restore();
};

example.save = function (context) {
  context.save();
  context.beginPath();
  context.setStrokeStyle('#108ee9');
  context.save();

  context.scale(2, 2);
  context.setStrokeStyle('#108ee9');
  context.rect(0, 0, 100, 100);
  context.stroke();
  context.restore();

  context.rect(0, 0, 50, 50);
  context.stroke();
  context.restore();
};

example.restore = function (context) {
  context.save();
  [3, 2, 1].forEach(function (item) {
    context.beginPath();
    context.setStrokeStyle('#108ee9');
    context.save();
    context.scale(item, item);
    context.rect(10, 10, 100, 100);
    context.stroke();
    context.restore();
  });
  context.restore();
};

example.drawImage = function (context) {
  context.save();
  //example.rotate(context);
  context.drawImage('/image/ant.png', 0, 0);
  //example.fillText(context);
  context.restore();
};

example.fillText = function (context) {
  context.save();
  context.beginPath();
  context.setStrokeStyle('#108ee9');
  context.moveTo(0, 10);
  context.lineTo(300, 10);
  context.stroke();

  // context.save();
  // context.scale(1.5, 1.5);
  // context.translate(20, 20);
  context.setFontSize(10);
  context.fillText('Hello Alipay', 0, 30);
  context.setFontSize(20);
  context.fillText('Hello Alipay', 200, 30);

  // context.restore();

  context.beginPath();
  context.moveTo(0, 30);
  context.lineTo(300, 30);
  context.stroke();
  context.restore();
};

example.fill = function (context) {
  context.save();
  context.beginPath();
  context.setFillStyle('#108ee9');
  context.rect(20, 20, 150, 100);
  context.fill();
  context.restore();
};

example.stroke = function (context) {
  context.save();
  context.beginPath();
  context.setStrokeStyle('#108ee9');
  context.moveTo(20, 20);
  context.lineTo(20, 100);
  context.lineTo(70, 100);

  context.stroke();
  context.restore();
};

example.clearRect = function (context) {
  context.save();
  context.beginPath();
  context.setFillStyle('#108ee9');
  context.rect(0, 0, 300, 150);
  context.fill();
  context.clearRect(20, 20, 100, 50);
  context.restore();
};

example.beginPath = function (context) {
  context.save();
  context.beginPath();
  context.setLineWidth(5);
  context.setStrokeStyle('#108ee9');
  context.moveTo(0, 75);
  context.lineTo(250, 75);
  context.stroke();

  context.beginPath();
  context.setStrokeStyle('#108ee9');
  context.moveTo(50, 0);
  context.lineTo(150, 130);
  context.stroke();
  context.restore();
};

example.closePath = function (context) {
  context.save();
  context.beginPath();
  context.setStrokeStyle('#108ee9');
  context.moveTo(20, 20);
  context.lineTo(20, 100);
  context.lineTo(70, 100);
  context.closePath();
  context.stroke();
  context.restore();
};

example.moveTo = function (context) {
  context.save();
  context.beginPath();
  context.setStrokeStyle('#108ee9');
  context.moveTo(0, 0);
  context.lineTo(300, 150);
  context.stroke();
  context.restore();
};

example.lineTo = function (context) {
  context.save();
  context.beginPath();
  context.setStrokeStyle('#108ee9');
  context.moveTo(20, 20);
  context.lineTo(20, 100);
  context.lineTo(70, 100);
  context.stroke();
  context.restore();
};

example.rect = function (context) {
  context.save();
  context.beginPath();
  context.setStrokeStyle('#108ee9');
  context.rect(20, 20, 150, 100);
  context.stroke();
  context.restore();
};

example.arc = function (context) {
  context.save();
  context.beginPath();
  context.setStrokeStyle('#108ee9');
  context.arc(75, 75, 50, 0, Math.PI * 2, true);
  context.moveTo(110, 75);
  context.arc(75, 75, 35, 0, Math.PI, false);
  context.moveTo(65, 65);
  context.arc(60, 65, 5, 0, Math.PI * 2, true);
  context.moveTo(95, 65);
  context.arc(90, 65, 5, 0, Math.PI * 2, true);
  context.stroke();
  context.restore();
};

example.quadraticCurveTo = function (context) {
  context.save();
  context.beginPath();
  context.setStrokeStyle('#108ee9');
  context.moveTo(20, 20);
  context.quadraticCurveTo(20, 100, 200, 20);
  context.stroke();
  context.restore();
};

example.bezierCurveTo = function (context) {
  context.save();
  context.beginPath();
  context.setStrokeStyle('#108ee9');
  context.moveTo(20, 20);
  context.bezierCurveTo(20, 100, 200, 100, 200, 20);
  context.stroke();
  context.restore();
};

example.setFillStyle = function (context) {
  context.save();
  ['rgb(183, 218, 243)', 'rgb(39, 156, 240)', 'rgb(67, 168, 240)', 'rgb(119, 194, 247)'].forEach(function (item, index) {
    context.setFillStyle(item);
    context.beginPath();
    context.rect(0 + 75 * index, 0, 50, 50);
    context.fill();
  });
  context.restore();
};

example.gradient = function (ctx) {
  ctx.save();
  var grd = ctx.createCircularGradient(90, 60, 50);
  grd.addColorStop(0, 'blue');
  grd.addColorStop(1, 'red');
  ctx.setFillStyle(grd);
  ctx.fillRect(20, 20, 250, 180);
  ctx.restore();
};

example.createPattern = function (ctx) {
  ctx.save();
  var grd = ctx.createPattern('https://gw.alipayobjects.com/zos/rmsportal/CuyuyNQuuJvOYOsYvPYd.png', 'repeat');
  ctx.setFillStyle(grd);
  ctx.fillRect(20, 20, 250, 180);
  ctx.restore();
};

example.setStrokeStyle = function (context) {
  context.save();
  ['rgb(183, 218, 243)', 'rgb(39, 156, 240)', 'rgb(67, 168, 240)', 'rgb(119, 194, 247)'].forEach(function (item, index) {
    context.setStrokeStyle(item);
    context.beginPath();
    context.rect(0 + 75 * index, 0, 50, 50);
    context.stroke();
  });
  context.restore();
};

example.setGlobalAlpha = function (context) {
  context.save();
  context.setFillStyle('#108ee9');
  [1, 0.5, 0.1].forEach(function (item, index) {
    context.setGlobalAlpha(item);
    context.beginPath();
    context.rect(0 + 75 * index, 0, 50, 50);
    context.fill();
  });
  context.restore();
};

example.setShadow = function (context) {
  context.save();
  context.beginPath();
  context.setFillStyle('#108ee9');
  context.setShadow(10, 10, 10, 'rgb(183, 218, 243)');
  context.rect(10, 10, 100, 100);
  context.fill();
  context.restore();
};

example.setFontSize = function (context) {
  context.save();
  [10, 20, 30, 40].forEach(function (item, index) {
    context.setFontSize(item);
    context.fillText('Hello, world', 20, 20 + 40 * index);
  });
  context.restore();
};

example.setLineCap = function (context) {
  context.save();
  context.setLineWidth(10);
  ['butt', 'round', 'square'].forEach(function (item, index) {
    context.beginPath();
    context.setStrokeStyle('#108ee9');
    context.setLineCap(item);
    context.moveTo(20, 20 + 20 * index);
    context.lineTo(100, 20 + 20 * index);
    context.stroke();
  });
  context.restore();
};

example.setLineJoin = function (context) {
  context.save();
  context.setLineWidth(10);
  ['bevel', 'round', 'miter'].forEach(function (item, index) {
    context.beginPath();
    context.setStrokeStyle('#108ee9');
    context.setLineJoin(item);
    context.moveTo(20 + 80 * index, 20);
    context.lineTo(100 + 80 * index, 50);
    context.lineTo(20 + 80 * index, 100);
    context.stroke();
  });
  context.restore();
};

example.setLineWidth = function (context) {
  context.save();
  [2, 4, 6, 8, 10].forEach(function (item, index) {
    context.beginPath();
    context.setStrokeStyle('#108ee9');
    context.setLineWidth(item);
    context.moveTo(20, 20 + 20 * index);
    context.lineTo(100, 20 + 20 * index);
    context.stroke();
  });
  context.restore();
};

example.setMiterLimit = function (context) {
  context.save();
  context.setLineWidth(4);

  [2, 4, 6, 8, 10].forEach(function (item, index) {
    context.beginPath();
    context.setStrokeStyle('#108ee9');
    context.setMiterLimit(item);
    context.moveTo(20 + 80 * index, 20);
    context.lineTo(100 + 80 * index, 50);
    context.lineTo(20 + 80 * index, 100);
    context.stroke();
  });
  context.restore();
};

example.measureText = function (context) {
  context.save();
  context.font = 'italic bold 50px cursive';

  var _context$measureText = context.measureText('hello world'),
      width = _context$measureText.width;

  console.log(width);
  context.fillText('hello world', 20, 60);
  context.restore();
};

example.setLineDash = function (context) {
  context.save();

  context.setLineDash([10, 20], 5);
  context.beginPath();
  context.moveTo(0, 100);
  context.lineTo(400, 100);
  context.stroke();

  context.restore();
};

exports.default = example;
module.exports = exports['default'];

/***/ }),

/***/ "3ZNG":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "3dzv":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "3ewE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Jymt");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "3hBH":
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

$global.$addPageConfig({
  pagePath: "page/component/tips/1/index",
  usingComponents: __webpack_require__("xECI")

});
Page({
  data: {
    showRectangle: true,
    showDialog: true,
    arrowPositions: ['bottom-left', 'bottom-center', 'bottom-right', 'top-left', 'top-center', 'top-right', 'left', 'right'],
    arrowPosIndex: 3,
    useButton: true
  },
  onCloseTap: function onCloseTap() {
    this.setData({
      showRectangle: false
    });
  },
  onRectangleTap: function onRectangleTap() {
    my.alert({
      content: 'do something'
    });
  },
  onDialogTap: function onDialogTap() {
    this.setData({
      showDialog: false
    });
  },
  setInfo: function setInfo(e) {
    var _setData;

    var dataset = e.target.dataset;
    var name = dataset.name;

    this.setData((_setData = {}, _setData[name] = e.detail.value, _setData));
  }
});

/***/ }),

/***/ "3iiv":
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

$global.$addPageConfig({
  pagePath: "page/component/filter/single_1/index",
  usingComponents: __webpack_require__("Ck8m")

});
Page({
  data: {
    show: true,
    items: [{ id: 1, value: '衣服啊', selected: true }, { id: 1, value: '橱柜' }, { id: 1, value: '衣服' }, { id: 1, value: '橱柜' }, { id: 1, value: '衣服' }, { id: 1, value: '橱柜' }, { id: 1, value: '衣服' }, { id: 1, value: '橱柜' }, { id: 1, value: '橱柜' }]
  },
  handleCallBack: function handleCallBack(data) {
    my.alert({
      content: data
    });
  },
  toggleFilter: function toggleFilter() {
    this.setData({
      show: !this.data.show
    });
  }
});

/***/ }),

/***/ "3jWO":
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

$global.$addPageConfig({
  pagePath: "page/component/navigator/reLaunch",
  usingComponents: __webpack_require__("d7Dd")

});
Page({
  index: function index() {
    my.reLaunch({
      url: '/page/tabBar/component/index'
    });
  }
});

/***/ }),

/***/ "3lU5":
/***/ (function(module, exports) {

module.exports = {"grid":"/node_modules/mini-ali-ui/es/grid/index"}

/***/ }),

/***/ "3mWn":
/***/ (function(module, exports) {

module.exports = {"block-list":"/page/common/components/block-list/block-list","list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index"}

/***/ }),

/***/ "3mz4":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "3pB3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("6DBY");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "3vBn":
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

$global.$addPageConfig({
  pagePath: "page/component/badge/badge",
  usingComponents: __webpack_require__("lJuP")

});
Page({
  data: {
    items: [{
      dot: true,
      text: '',
      isWrap: true,
      intro: 'Dot Badge'
    }, {
      dot: false,
      text: 1,
      isWrap: true,
      intro: 'Text Badge'
    }, {
      dot: false,
      text: 99,
      isWrap: false,
      intro: '数字'
    }, {
      dot: false,
      text: 100,
      overflowCount: 99,
      isWrap: false,
      intro: '数字超过overflowCount'
    }, {
      dot: false,
      text: 'new',
      isWrap: false,
      intro: '文字'
    }, {
      dot: false,
      text: '22222222222222',
      isWrap: false,
      intro: '箭头中',
      withArrow: true,
      direction: 'middle'
    }, {
      dot: false,
      text: 'left arrow',
      isWrap: false,
      intro: '箭头左',
      withArrow: true,
      direction: 'left'
    }, {
      dot: false,
      text: 'right arrow',
      isWrap: false,
      intro: '箭头右',
      withArrow: true,
      direction: 'right'
    }]
  }
});

/***/ }),

/***/ "4/f6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("dpDf");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "40Ut":
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

$global.$addPageConfig({
  pagePath: "page/API/get-title-color/get-title-color",
  usingComponents: __webpack_require__("Crkb")

});
Page({
  data: {
    titleColor: {}
  },
  getTitleColor: function getTitleColor() {
    var _this = this;

    my.getTitleColor({
      success: function success(res) {
        _this.setData({
          titleColor: res
        });
      }
    });
  }
});

/***/ }),

/***/ "46rZ":
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

$global.$addPageConfig({
  pagePath: "page/API/pay-sign-center/pay-sign-center",
  usingComponents: __webpack_require__("JzIF")

});
Page({
  paySignCenter: function paySignCenter() {
    my.paySignCenter({
      signStr: 'biz_content%3d%257B%2522access_params%2522%253A%257B%2522channel%2522%253A%2522ALIPAYAPP%2522%257D%252C%2522external_agreement_no%2522%253A%2522yufa11111%2522%252C%2522personal_product_code%2522%253A%2522GENERAL_WITHHOLDING_P%2522%252C%2522product_code%2522%253A%2522GENERAL_WITHHOLDING%2522%252C%2522sign_scene%2522%253A%2522INDUSTRY%257CCARRENTAL%2522%252C%2522third_party_type%2522%253A%2522PARTNER%2522%257D%26sign%3dJ9ysCCt7MaYcL1d%252Bt89jTxYyT4FNVt5gdRzNJ5P4WUfV2xM%252FZ2vg14sAC%252FXLyaA4PIw%252B2yCA5zA1UQtqwOuO7Q7Dlzeyg0yZTVrjw55CalNBnhFKcyEHXDXHmO%252F2kWO9mWlI8VFdgtYmK6FX%252FOB%252F2vmoM9DYqWsRkqiT6%252Bnd90o%253D%26timestamp%3d2017-09-22%2b14%253A45%253A04%26sign_type%3dRSA%26charset%3dUTF-8%26app_id%3d2017060807451366%26method%3dalipay.user.agreement.page.sign%26version%3d1.0',
      success: function success(res) {
        my.alert({
          title: 'success', // alert 框的标题
          content: JSON.stringify(res)
        });
      },
      fail: function fail(res) {
        my.alert({
          title: 'fail', // alert 框的标题
          content: JSON.stringify(res)
        });
      }
    });
  }
});

/***/ }),

/***/ "4AqP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("VelM");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "4TVp":
/***/ (function(module, exports) {

module.exports = {"grid":"/node_modules/mini-ali-ui/es/grid/index"}

/***/ }),

/***/ "4UC9":
/***/ (function(module, exports) {

module.exports = {"guide":"/node_modules/mini-ali-ui/es/guide/index"}

/***/ }),

/***/ "4kSd":
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

$global.$addPageConfig({
  pagePath: "page/component/popover/popover",
  usingComponents: __webpack_require__("5n+6")

});
var position = ['top', 'topRight', 'rightTop', 'right', 'rightBottom', 'bottomRight', 'bottom', 'bottomLeft', 'leftBottom', 'left', 'leftTop', 'topLeft'];
Page({
  data: {
    position: position[0],
    show: false,
    showMask: true,
    showIcon: true
  },
  onShowPopoverTap: function onShowPopoverTap() {
    this.setData({
      show: !this.data.show
    });
  },
  onNextPositionTap: function onNextPositionTap() {
    var index = position.indexOf(this.data.position);
    index = index >= position.length - 1 ? 0 : index + 1;
    this.setData({
      show: true,
      position: position[index]
    });
  },
  onMaskChangeTap: function onMaskChangeTap() {
    this.setData({
      showMask: !this.data.showMask
    });
  },
  onIconChangeTap: function onIconChangeTap() {
    this.setData({
      showIcon: !this.data.showIcon
    });
  },
  onMaskClick: function onMaskClick() {
    this.setData({
      show: false
    });
  },
  itemTap1: function itemTap1(e) {
    my.alert({
      content: "\u70B9\u51FB_" + e.currentTarget.dataset.direction
    });
  },
  itemTap2: function itemTap2(e) {
    my.alert({
      content: "\u70B9\u51FB_" + e.currentTarget.dataset.index
    });
  }
});

/***/ }),

/***/ "4oCf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("j88e");
/* harmony import */ var M_1_ = __webpack_require__("GwvB");
/* harmony import */ var M_2_ = __webpack_require__("Ys9G");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "4wPn":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/avatar/index",
  usingComponents: __webpack_require__("ngOa")

});
Component({
  props: {
    className: '',
    shape: 'circle',
    size: 'md',
    src: 'https://gw.alipayobjects.com/mdn/rms_349abe/afts/img/A*5VvARpvk39QAAAAAAAAAAABkARQnAQ',
    name: '',
    desc: ''
  },
  didMount: function didMount() {
    var _this$props = this.props,
        name = _this$props.name,
        desc = _this$props.desc;

    if (!name && desc) {
      console.error('Avatar: 不允许设置 desc 但不定义 name');
    }
  },
  methods: {
    // 图片加载失败
    _onError: function _onError(e) {
      var onError = this.props.onError;

      if (onError) {
        onError(e);
      }
    }
  }
});

/***/ }),

/***/ "4yps":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("Lw0p");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "5/gU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("u/z4");
/* harmony import */ var M_1_ = __webpack_require__("0iQm");
/* harmony import */ var M_2_ = __webpack_require__("cyyQ");
/* harmony import */ var M_3_ = __webpack_require__("LRCr");
/* harmony import */ var M_3__default = /*#__PURE__*/__webpack_require__.n(M_3_);

  


  
  

/***/ }),

/***/ "57M5":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/list/list-item/index",
  usingComponents: __webpack_require__("0IKO")

});
Component({
  props: {
    className: '',
    align: false,
    disabled: false,
    multipleLine: false,
    wrap: false,
    enforceExtra: false,
    titlePosition: 'top'
  },
  didMount: function didMount() {
    this._updateDataSet();
  },
  didUpdate: function didUpdate() {
    this._updateDataSet();
  },
  methods: {
    _updateDataSet: function _updateDataSet() {
      this.dataset = {};

      for (var key in this.props) {
        if (/data-/gi.test(key)) {
          this.dataset[key.replace(/data-/gi, '')] = this.props[key];
        }
      }
    },
    onItemTap: function onItemTap(ev) {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled;

      if (onClick && !disabled) {
        onClick({
          index: ev.target.dataset.index,
          target: {
            dataset: this.dataset
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "58TC":
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

$global.$addPageConfig({
  pagePath: "page/component/filter/filter",
  usingComponents: __webpack_require__("l9cn")

});
Page({
  openPage: function openPage(e) {
    my.navigateTo({
      url: e.target.dataset.url
    });
  }
});

/***/ }),

/***/ "5DNE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lifecycle = __webpack_require__("U+PM");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/filter/filter-item/index",
  usingComponents: __webpack_require__("KWpK")

});

Component({
  mixins: [_lifecycle2.default],
  data: {
    confirmStyle: ''
  },
  props: {
    className: '',
    item: '',
    id: '',
    value: '',
    selected: false,
    subtitle: '',
    onChange: function onChange() {}
  },
  didMount: function didMount() {
    var _this$data = this.data,
        results = _this$data.results,
        items = _this$data.items;
    var _this$props = this.props,
        selected = _this$props.selected,
        id = _this$props.id,
        value = _this$props.value;

    if (selected) {
      results.push({
        id: id,
        value: value
      });
      items.push({
        id: id,
        value: value,
        setData: this.setData
      });
      this.setData({
        confirmStyle: true
      });
    }
  },
  methods: {
    handleClick: function handleClick() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          value = _this$props2.value,
          onChange = _this$props2.onChange;
      var confirmStyle = this.data.confirmStyle;
      var _this$data2 = this.data,
          results = _this$data2.results,
          items = _this$data2.items,
          commonProps = _this$data2.commonProps;

      if (commonProps.max === 1) {
        if (confirmStyle === '') {
          items.forEach(function (element) {
            element.setData({
              confirmStyle: ''
            });
          });
          results.splice(0, results.length);
          confirmStyle = true;
          results.push({
            id: id,
            value: value
          });
          items.push({
            id: id,
            value: value,
            setData: this.setData
          });
          onChange(results);
        }

        this.setData({
          confirmStyle: confirmStyle
        });
        return;
      }

      if (confirmStyle === '' && results.length < commonProps.max) {
        confirmStyle = true;
        results.push({
          id: id,
          value: value
        });
        items.push({
          id: id,
          value: value,
          setData: this.setData
        });
      } else {
        confirmStyle = '';
        results.some(function (key, index) {
          if (JSON.stringify(key) === JSON.stringify({
            id: id,
            value: value
          })) {
            results.splice(index, 1);
            return true;
          } else {
            return false;
          }
        });
      }

      this.setData({
        confirmStyle: confirmStyle
      });
    }
  }
});

/***/ }),

/***/ "5IhY":
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

$global.$addPageConfig({
  pagePath: "page/component/stepper/stepper",
  usingComponents: __webpack_require__("BIKn")

});
Page({
  data: {
    value: 8
  },
  callBackFn: function callBackFn(value) {
    console.log(value);
  },
  modifyValue: function modifyValue() {
    this.setData({
      value: 9
    });
  }
});

/***/ }),

/***/ "5KCK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0iQm");
/* harmony import */ var M_1_ = __webpack_require__("/hvP");
/* harmony import */ var M_2_ = __webpack_require__("G9k7");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "5NCm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("snrh");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "5XHo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ovTO");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "5ZjG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GoG2");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "5bQI":
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

$global.$addPageConfig({
  pagePath: "page/component/cover-view/cover-view",
  usingComponents: __webpack_require__("7c6C")

});
Page({
  data: {
    scale: 14,
    longitude: 120.10675,
    latitude: 30.266786,
    includePoints: [{
      latitude: 30.266786,
      longitude: 120.10675
    }]
  }
});

/***/ }),

/***/ "5by9":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "5fAs":
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

$global.$addPageConfig({
  pagePath: "page/API/scan-code/scan-code",
  usingComponents: __webpack_require__("5by9")

});
Page({
  scan: function scan() {
    my.scan({
      type: 'qr',
      success: function success(res) {
        my.alert({ title: res.code });
      }
    });
  }
});

/***/ }),

/***/ "5n+6":
/***/ (function(module, exports) {

module.exports = {"popover":"/node_modules/mini-ali-ui/es/popover/index","popover-item":"/node_modules/mini-ali-ui/es/popover/popover-item/index"}

/***/ }),

/***/ "5plw":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/tag/index",
  usingComponents: __webpack_require__("8w4V")

});
Component({
  props: {
    type: 'primary',
    iconType: '',
    className: '',
    size: 'lg'
  },
  data: {
    bgClass: {
      primary: 'am-tag-bg-primary',
      warning: 'am-tag-bg-warning',
      success: 'am-tag-bg-success',
      danger: 'am-tag-bg-danger'
    },
    iconClass: {
      primary: 'am-tag-icon-primary',
      warning: 'am-tag-icon-warning',
      success: 'am-tag-icon-success',
      danger: 'am-tag-icon-danger'
    },
    ghostClass: {
      primary: 'am-tag-ghost-primary',
      warning: 'am-tag-ghost-warning',
      success: 'am-tag-ghost-success',
      danger: 'am-tag-ghost-danger'
    }
  },
  didMount: function didMount() {},
  didUpdate: function didUpdate() {},
  didUnmount: function didUnmount() {}
});

/***/ }),

/***/ "5pwj":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "5qd4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray2 = __webpack_require__("m44C");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _debounce = __webpack_require__("HdMn");

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addPageConfig({
  pagePath: "page/common/search/search",
  usingComponents: __webpack_require__("kvET")

});


var componentList = [{ name: '金额输入', thumb: '/image/icon/amount-input.png', path: '/page/component/amount-input/amount-input', suggestion: 'amountinput金额输入' }, { name: '按钮', thumb: '/image/icon/button.png', path: '/page/component/button/button', suggestion: 'button按钮' }, { name: '日历', thumb: '/image/icon/calendar.png', path: '/page/component/calendar/calendar', suggestion: 'calendar日历' }, { name: '卡片', thumb: '/image/icon/card.png', path: '/page/component/card/card', suggestion: 'card卡片' }, { name: '复选框', thumb: '/image/icon/checkbox.png', path: '/page/component/checkbox/checkbox', suggestion: 'checkbox复选框' }, { name: '单选框', thumb: '/image/icon/radio.png', path: '/page/component/radio/radio', suggestion: 'radio单选框' }, { name: '云客服', thumb: '/image/icon/contact-button.png', path: '/page/component/contact-button/contact-button', suggestion: 'contactbutton云客服' }, { name: '画布', thumb: '/image/icon/canvas.png', path: '/page/component/canvas/canvas', suggestion: 'canvas画布' }, { name: '筛选', thumb: '/image/icon/filter.png', path: '/page/component/filter/filter', suggestion: 'filter筛选' }, { name: '页脚', thumb: '/image/icon/footer.png', path: '/page/component/footer/footer', suggestion: 'footer页脚' }, { name: '表单', thumb: '/image/icon/form.png', path: '/page/component/form/form', suggestion: 'form表单' }, { name: '宫格', thumb: '/image/icon/grid.png', path: '/page/component/grid/grid', suggestion: 'grid宫格' }, { name: '图标', thumb: '/image/icon/icon.png', path: '/page/component/icon/icon', suggestion: 'icon图标' }, { name: '图标', thumb: '/image/icon/icon.png', path: '/page/component/am-icon/am-icon', suggestion: 'icon图标' }, { name: '图片', thumb: '/image/icon/image.png', path: '/page/component/image/image', suggestion: 'image图片媒体' }, { name: '文本输入', thumb: '/image/icon/input.png', path: '/page/component/input-item/input-item', suggestion: 'inputitem文本输入' }, { name: '标签', thumb: '/image/icon/label.png', path: '/page/component/label/label', suggestion: 'label标签' }, { name: '跳转生活号', thumb: '/image/icon/lifestyle.png', path: '/page/component/lifestyle/lifestyle', suggestion: 'lifestyle跳转生活号' }, { name: '列表', thumb: '/image/icon/form.png', path: '/page/component/list/list', suggestion: 'list列表' }, { name: '地图', thumb: '/image/icon/map.png', path: '/page/component/map/map', suggestion: 'map地图' }, { name: '结果页', thumb: '/image/icon/message.png', path: '/page/component/message/massage', suggestion: 'message结果页' }, { name: '对话框', thumb: '/image/icon/modal.png', path: '/page/component/modal/modal', suggestion: 'modal对话框' }, { name: '导航', thumb: '/image/icon/navigator.png', path: '/page/component/navigator/navigator', suggestion: 'navigator导航' }, { name: '通告栏', thumb: '/image/icon/notice.png', path: '/page/component/notice/notice', suggestion: 'notice通告栏' }, { name: '徽标', thumb: '/image/icon/view.png', path: '/page/component/badge/badge', suggestion: 'badge徽标' }, { name: '异常页', thumb: '/image/icon/page-result.png', path: '/page/component/page-result/page-result', suggestion: 'pageresult局部异常页面' }, { name: '选择器', thumb: '/image/icon/picker.png', path: '/page/component/picker/picker', suggestion: 'picker选择器' }, { name: '选择器视图', thumb: '/image/icon/picker-view.png', path: '/page/component/picker-view/picker-view', suggestion: 'pickerview选择器视图' }, { name: '气泡', thumb: '/image/icon/popover.png', path: '/page/component/popover/popover', suggestion: 'popover气泡' }, { name: '弹出菜单', thumb: '/image/icon/popup.png', path: '/page/component/popup/popup', suggestion: 'popup弹出菜单' }, { name: '进度条', thumb: '/image/icon/progress.png', path: '/page/component/progress/progress', suggestion: 'progress进度条' }, { name: '搜索框', thumb: '/image/icon/search-bar.png', path: '/page/component/search-bar/search-bar', suggestion: 'searchbar搜索框' }, { name: '滑动条', thumb: '/image/icon/slider.png', path: '/page/component/slider/slider', suggestion: 'slider滑动条' }, { name: '步进器', thumb: '/image/icon/stepper.png', path: '/page/component/stepper/stepper', suggestion: 'stepper步进器' }, { name: '步骤条', thumb: '/image/icon/steps.png', path: '/page/component/steps/steps', suggestion: 'steps步骤条' }, { name: '可滑动单元格', thumb: '/image/icon/swipe-action.png', path: '/page/component/swipe-action/swipe-action', suggestion: 'swipeaction可滑动单元格手势' }, { name: '开关', thumb: '/image/icon/switch.png', path: '/page/component/switch/switch', suggestion: 'switch开关' }, { name: '顶部选项卡', thumb: '/image/icon/tabs.png', path: '/page/component/tabs/tabs', suggestion: 'tabs顶部选项卡' }, { name: '多行输入框', thumb: '/image/icon/textarea.png', path: '/page/component/textarea/textarea', suggestion: 'textarea多行输入框' }, { name: '引导', thumb: '/image/icon/tips.png', path: '/page/component/tips/tips', suggestion: 'tips提示引导' }, { name: '纵向选项卡', thumb: '/image/icon/vtabs.png', path: '/page/component/vtabs/vtabs', suggestion: 'vtabs纵向选项卡' }, { name: '内嵌webview', thumb: '/image/icon/webview.png', path: '/page/component/webview/webview', suggestion: 'webview内嵌webview' }, { name: '基础视图', thumb: '/image/icon/view.png', path: '/page/component/view/view', suggestion: 'view视图容器' }, { name: '滑动视图', thumb: '/image/icon/swiper.png', path: '/page/component/swiper/swiper', suggestion: 'swiper滑动视图容器' }, { name: '滚动视图', thumb: '/image/icon/scroll-view.png', path: '/page/component/scroll-view/scroll-view', suggestion: 'scrollview滚动视图' }, { name: '输入框', thumb: '/image/icon/input.png', path: '/page/component/input/input', suggestion: 'input输入框文本输入' }, { name: '文字', thumb: '/image/icon/text.png', path: '/page/component/text/text', suggestion: 'text文本文字' }, { name: '容器', thumb: '/image/icon/container.png', path: '/page/component/container/index', suggestion: 'container容器' }, { name: '模块标题', thumb: '/image/icon/navigator.png', path: '/page/component/title/index', suggestion: 'title标题' }, { name: '列表元素', thumb: '/image/icon/list-item.png', path: '/page/component/list-item/index', suggestion: 'list-item列表元素' }, { name: '票券', thumb: '/image/icon/coupon.png', path: '/page/component/coupon/index', suggestion: 'coupon票券优惠券' }, { name: '协议', thumb: '/image/icon/terms.png', path: '/page/component/terms/index', suggestion: 'terms协议条款' }, { name: '折叠面板', thumb: '/image/icon/collapse.png', path: '/page/component/collapse/index', suggestion: 'collapse折叠更多手风琴' }, { name: '标签', thumb: '/image/icon/tag.png', path: '/page/component/tag/index', suggestion: 'tag标签' }, { name: '背景蒙层', thumb: '/image/icon/mask.png', path: '/page/component/mask/mask', suggestion: 'mask遮罩背景蒙层' }, { name: '遮罩引导', thumb: '/image/icon/guide.png', path: '/page/component/guide/guide', suggestion: 'guide遮罩引导新手指引' }, { name: '头像', thumb: '/image/icon/avatar.png', path: '/page/component/avatar/index', suggestion: 'avatar用户头像' }, { name: '验证码输入', thumb: '/image/icon/verifycode.png', path: '/page/component/verify-code/index', suggestion: 'verify-code验证码输入框' }, { name: '选择输入', thumb: '/image/icon/picker.png', path: '/page/component/picker-item/index', suggestion: 'picker-item选择输入' }, { name: '长密码框', thumb: '/image/icon/longpassword.png', path: '/page/component/long-password/index', suggestion: 'long-password长密码输入框' }, { name: '多行输入', thumb: '/image/icon/textarea.png', path: '/page/component/multi-liner/index', suggestion: 'multi-liner多行输入textarea' }, { name: '按钮', thumb: '/image/icon/button.png', path: '/page/component/button-ali-ui/index', suggestion: 'button按钮' }, { name: '开关', thumb: '/image/icon/switch.png', path: '/page/component/switch-ali-ui/index', suggestion: 'switch开关' }, { name: '单选', thumb: '/image/icon/radio-aliui.png', path: '/page/component/radio-ali-ui/index', suggestion: 'radio单选' }, { name: '分页符', thumb: '/image/icon/pagination.png', path: '/page/component/pagination/index', suggestion: 'pagination分页符' }, { name: '字母索引表', thumb: '/image/icon/alphabet.png', path: '/page/component/alphabet/index', suggestion: 'alphabet字母索引表' }, { name: '加载', thumb: '/image/icon/loading.png', path: '/page/component/loading/loading', suggestion: 'loading加载动画' }];

var apiList = [{ name: '获取授权码', path: '/page/API/get-auth-code/get-auth-code', suggestion: 'getauthcode获取授权码' }, { name: '获取授信息', path: '/page/API/get-user-info/get-user-info', suggestion: 'getuserinfo获取用户信息' }, { name: '发起支付', path: '/page/API/request-payment/request-payment', suggestion: 'requestpayment发起支付' }, { name: '支付宝卡包', path: '/page/API/card-pack/card-pack', suggestion: 'cardpack支付宝卡包' }, { name: '芝麻信用借还', path: '/page/API/zm-credit-borrow/zm-credit-borrow', suggestion: 'zmcreditborrow芝麻信用借还' }, { name: '文本风险识别', path: '/page/API/text-risk-identification/text-risk-identification', suggestion: 'textriskidentification风险文本识别' }, { name: '警告框', path: '/page/API/alert/alert', suggestion: 'alert警告框' }, { name: '确认框', path: '/page/API/confirm/confirm', suggestion: 'confirm确认框' }, { name: '弱提示', path: '/page/API/toast/toast', suggestion: 'toast弱提示' }, { name: '加载提示', path: '/page/API/loading/loading', suggestion: 'loading加载提示' }, { name: '操作菜单', path: '/page/API/action-sheet/action-sheet', suggestion: 'actionsheet操作菜单' }, { name: '设置界面导航栏', path: '/page/API/set-navigation-bar/set-navigation-bar', suggestion: 'setnavigationbar设置界面导航栏' }, { name: '设置optionMenu', path: '/page/API/option-menu/option-menu', suggestion: 'optionmenu设置optionmenu' }, { name: '页面跳转', path: '/page/API/navigator/navigator', suggestion: 'navigator页面跳转' }, { name: '下拉刷新', path: '/page/API/pull-down-refresh/pull-down-refresh', suggestion: 'pulldownrefresh下拉刷新' }, { name: '创建动画', path: '/page/API/animation/animation', suggestion: 'animation创建动画' }, { name: '创建绘画', path: '/page/API/canvas/canvas', suggestion: 'canvas创建绘画画布' }, { name: '选择日期', path: '/page/API/date-picker/date-picker', suggestion: 'datepicker选择日期选择' }, { name: '滚动页面', path: '/page/API/page-scroll-to/page-scroll-to', suggestion: 'pagescrollto滚动页面' }, { name: '节点查询', path: '/page/API/create-selector-query/create-selector-query', suggestion: 'createselectorquery节点查询' }, { name: '联系人', path: '/page/API/contact/contact', suggestion: 'contact联系人' }, { name: '标题栏加载动画', path: '/page/API/navigation-bar-loading/navigation-bar-loading', suggestion: 'navigationbarloading标题栏加载动画' }, { name: '选择城市', path: '/page/API/choose-city/choose-city', suggestion: 'choosecity选择城市选择' }, { name: '隐藏键盘', path: '/page/API/keyboard/keyboard', suggestion: 'hidekeyboard隐藏键盘' }, { name: '级联选择', path: '/page/API/multi-level-select/multi-level-select', suggestion: 'multilevelselect级联选择' }, { name: '选项选择', path: '/page/API/options-select/options-select', suggestion: 'multilevelselect级联选择' }, { name: '获取手机网络状态', path: '/page/API/get-network-type/get-network-type', suggestion: 'getnetworktype获取手机网络状态' }, { name: '获取手机系统信息', path: '/page/API/get-system-info/get-system-info', suggestion: 'getsysteminfo获取手机系统信息' }, { name: '振动', path: '/page/API/vibrate/vibrate', suggestion: 'vibrate振动' }, { name: '剪贴板', path: '/page/API/clipboard/clipboard', suggestion: 'clipboard剪贴板' }, { name: '获取基础库版本', path: '/page/API/sdk-version/sdk-version', suggestion: 'sdkversion获取基础库版本' }, { name: '屏幕亮度', path: '/page/API/screen/screen', suggestion: 'screen屏幕亮度' }, { name: '摇一摇', path: '/page/API/watch-shake/watch-shake', suggestion: 'watchshake摇一摇' }, { name: '拨打电话', path: '/page/API/make-phone-call/make-phone-call', suggestion: 'makephonecall拨打电话' }, { name: '用户截屏事件', path: '/page/API/user-capture-screen/user-capture-screen', suggestion: 'usercapturescreen用户截屏事件' }, { name: '获取服务器时间', path: '/page/API/get-server-time/get-server-time', suggestion: 'getservertime获取服务器时间' }, { name: '内存不足警告', path: '/page/API/memory-warning//memory-warning', suggestion: 'memorywarning内存不足警告' }, { name: '发起HTTP请求', path: '/page/API/request/request', suggestion: 'request发起请求发起http请求网络' }, { name: '上传文件', path: '/page/API/upload-file/upload-file', suggestion: 'uploadfile上传文件网络' }, { name: '下载文件', path: '/page/API/download-file/download-file', suggestion: 'downloadfile下载文件网络' }, { name: 'Websocket', path: '/page/API/websocket/websocket', suggestion: 'websocket网络' }, { name: '图片', path: '/page/API/image/image', suggestion: 'image图片多媒体' }, { name: '获取图片信息', path: '/page/API/get-image-info/get-image-info', suggestion: 'getimageinfo获取图片信息' }, { name: '压缩图片', path: '/page/API/compress-image/compress-image', suggestion: 'compressimage压缩图片' }, { name: '获取当前位置', path: '/page/API/get-location/get-location', suggestion: 'getlocation获取当前位置地图' }, { name: '使用原生地图查看位置', path: '/page/API/open-location/open-location', suggestion: 'openlocation使用原生地图查看位置' }, { name: '打开地图选择位置', path: '/page/API/choose-location/choose-location', suggestion: 'chooselocation打开地图选择位置' }, { name: '缓存', path: '/page/API/storage/storage', suggestion: 'storage缓存' }, { name: '扫码 Scan', path: '/page/API/scan-code/scan-code', suggestion: 'scan-code扫码' }, { name: '自定义分享', path: '/page/API/share/share', suggestion: 'share自定义分享' }, { name: '文件', path: '/page/API/file/file', suggestion: 'file文件' }, { name: '蓝牙', path: '/page/API/bluetooth/bluetooth', suggestion: 'bluetooth蓝牙' }, { name: '数据安全', path: '/page/API/rsa/rsa', suggestion: 'rsa数据安全' }, { name: '自定义分析', path: '/page/API/report-analytics/report-analytics', suggestion: 'reportanalytics数据分析' }, { name: '容器事件', path: '/page/API/events/events', suggestion: 'events容器事件' }, { name: 'OCR', path: '/page/API/ocr/ocr', suggestion: 'ocr' }, { name: '收藏', path: '/page/API/favorite/favorite', suggestion: 'favorite' }];

Page({
  data: {
    value: '',
    history: my.getStorageSync({ key: 'searchHistory' }).data || [],
    hot: [{ name: 'ScrollView', url: '/page/component/scroll-view/scroll-view' }, { name: '地图', url: '/page/component/map/map' }, { name: 'Icon', url: '/page/component/icon/icon' }, { name: 'Card', url: '/page/component/card/card' }, { name: '获取授权码', url: '/page/API/get-auth-code/get-auth-code' }, { name: 'Popup', url: '/page/component/popup/popup' }, { name: '发起HTTP请求', url: '/page/API/request/request' }, { name: '画布', url: '/page/component/canvas/canvas' }, { name: '导航', url: '/page/API/navigator/navigator' }],
    componentSuggestions: [],
    apiSuggestions: []
  },
  onLoad: function onLoad() {
    this.setData({
      history: my.getStorageSync({ key: 'searchHistory' }).data
    });
    console.log(my.getStorageSync({ key: 'searchHistory' }).data);
    this.onInput = (0, _debounce2.default)(this.onInput.bind(this), 400);
    my.setNavigationBar({
      borderBottomColor: '#fff'
    });
  },
  clear: function clear() {
    var _this = this;

    my.confirm({
      content: '确定删除相关历史？',
      success: function success(res) {
        if (res.confirm) {
          my.clearStorage();
          _this.setData({
            history: []
          });
        }
      }
    });
  },
  onInput: function onInput(keyword) {
    this.setData({
      value: keyword
    });
    var regExp = /[A-Za-z]/;
    if (keyword === '' || regExp.test(keyword) && keyword.length === 1) {
      this.setData({
        componentSuggestions: [],
        apiSuggestions: []
      });
      return;
    }
    var componentSuggestions = [];
    var apiSuggestions = [];
    for (var i = 0; i < componentList.length; i++) {
      if (componentList[i].suggestion.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) != -1) {
        componentSuggestions.push(componentList[i]);
      }
    }

    for (var _i = 0; _i < apiList.length; _i++) {
      if (apiList[_i].suggestion.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) != -1) {
        apiSuggestions.push(apiList[_i]);
      }
    }
    this.setData({ componentSuggestions: componentSuggestions, apiSuggestions: apiSuggestions });
  },
  onClear: function onClear() {
    this.setData({
      value: ''
    });
  },
  onCancel: function onCancel() {
    this.setData({
      componentSuggestions: [],
      apiSuggestions: [],
      value: ''
    });
    my.navigateBack();
  },
  onItemTap: function onItemTap(_ref) {
    var name = _ref.name;

    this.setData({
      value: name
    });

    this.onInput(name);
  },
  onListItemTap: function onListItemTap(e) {
    var _e$target$dataset = e.target.dataset,
        name = _e$target$dataset.name,
        url = _e$target$dataset.url;

    this.addToHistory(name);
    console.log(url);
    my.navigateTo({ url: url });
  },
  addToHistory: function addToHistory(keyword) {
    var searchHistory = my.getStorageSync({ key: 'searchHistory' }).data || [];
    var index = -1;

    for (var i = 0; i < searchHistory.length; i++) {
      if (searchHistory[i].name === keyword) {
        index = i;
        break;
      }
    }

    var history = [];

    if (searchHistory.length >= 8) {
      if (index === -1) {
        history = [{ name: keyword }].concat((0, _toConsumableArray3.default)(searchHistory.slice(0, 7)));
      } else {
        searchHistory.splice(index, 1).slice(0, 7);
        history = [{ name: keyword }].concat((0, _toConsumableArray3.default)(searchHistory));
      }
    } else {
      if (index === -1) {
        history = [{ name: keyword }].concat((0, _toConsumableArray3.default)(searchHistory));
      } else {
        searchHistory.splice(index, 1);
        history = [{ name: keyword }].concat((0, _toConsumableArray3.default)(searchHistory));
      }
    }

    my.setStorageSync({
      key: 'searchHistory',
      data: history
    });

    this.setData({
      history: history
    });
  }
});

/***/ }),

/***/ "5rsO":
/***/ (function(module, exports) {

module.exports = {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "5wjx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("KHtY");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "63Or":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtUnit = __webpack_require__("K4/D");

var _fmtUnit2 = _interopRequireDefault(_fmtUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/am-icon/index",
  usingComponents: __webpack_require__("Cnt7")

});

Component({
  props: {
    type: '',
    size: (0, _fmtUnit2.default)(17),
    color: '',
    className: ''
  },
  data: {
    valueUnit: (0, _fmtUnit2.default)('px')
  }
});

/***/ }),

/***/ "6DBY":
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

$global.$addPageConfig({
  pagePath: "page/component/lifestyle/lifestyle",
  usingComponents: __webpack_require__("vwRh")

});
Page({
  data: {
    canUse: my.canIUse('lifestyle')
  }
});

/***/ }),

/***/ "6Ox8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("fkyn");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "6kNw":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/badge/index",
  usingComponents: __webpack_require__("XC66")

});
Component({
  props: {
    className: '',
    overflowCount: 99,
    text: '',
    dot: false,
    withArrow: false,
    direction: 'middle',
    stroke: false
  }
});

/***/ }),

/***/ "6kdK":
/***/ (function(module, exports) {

module.exports = {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "6kkV":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/steps/index",
  usingComponents: __webpack_require__("mk0q")

});
Component({
  props: {
    className: '',
    activeIndex: 1,
    failIndex: 0,
    size: 0,
    direction: 'horizontal',
    items: []
  }
});

/***/ }),

/***/ "6mwo":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "6y5Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("7xtz");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "7/gm":
/***/ (function(module, exports) {

module.exports = {"filter":"/node_modules/mini-ali-ui/es/filter/index","filter-item":"/node_modules/mini-ali-ui/es/filter/filter-item/index"}

/***/ }),

/***/ "77+I":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("m+eR").document;
module.exports = document && document.documentElement;

/***/ }),

/***/ "7E6T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("26kx");
/* harmony import */ var M_1_ = __webpack_require__("MUBa");
/* harmony import */ var M_2_ = __webpack_require__("ZwnL");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "7Fnl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("lWnu");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "7HHc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Ioxh");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "7LnK":
/***/ (function(module, exports) {

module.exports = {"grid":"/node_modules/mini-ali-ui/es/grid/index"}

/***/ }),

/***/ "7Nrc":
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

$global.$addPageConfig({
  pagePath: "page/component/image/image",
  usingComponents: __webpack_require__("wMdJ")

});
Page({
  data: {
    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }, {
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
    }, {
      mode: 'aspectFill',
      text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
    }, {
      mode: 'widthFix',
      text: 'widthFix：宽度不变，高度自动变化，保持原图宽高比不变'
    }, {
      mode: 'top',
      text: 'top：不缩放图片，只显示图片的顶部区域'
    }, {
      mode: 'bottom',
      text: 'bottom：不缩放图片，只显示图片的底部区域'
    }, {
      mode: 'center',
      text: 'center：不缩放图片，只显示图片的中间区域'
    }, {
      mode: 'left',
      text: 'left：不缩放图片，只显示图片的左边区域'
    }, {
      mode: 'right',
      text: 'right：不缩放图片，只显示图片的右边边区域'
    }, {
      mode: 'top left',
      text: 'top left：不缩放图片，只显示图片的左上边区域'
    }, {
      mode: 'top right',
      text: 'top right：不缩放图片，只显示图片的右上边区域'
    }, {
      mode: 'bottom left',
      text: 'bottom left：不缩放图片，只显示图片的左下边区域'
    }, {
      mode: 'bottom right',
      text: 'bottom right：不缩放图片，只显示图片的右下边区域'
    }],
    src: '/image/ant.png'
  },
  imageError: function imageError(e) {
    console.log('image 发生 error 事件，携带值为', e.detail.errMsg);
  },
  onTap: function onTap(e) {
    console.log('image 发生 tap 事件', e);
  },
  imageLoad: function imageLoad(e) {
    console.log('image 加载成功', e);
  }
});

/***/ }),

/***/ "7NyK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("r0Qs");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "7Ocm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("eutE");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "7Ouh":
/***/ (function(module, exports) {

module.exports = {"steps":"/node_modules/mini-ali-ui/es/steps/index"}

/***/ }),

/***/ "7PrY":
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

$global.$addPageConfig({
  pagePath: "page/API/ocr/ocr",
  usingComponents: __webpack_require__("inZ6")

});
Page({});

/***/ }),

/***/ "7aEC":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("AH5w");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "7c6C":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "7ftD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("uilR");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "7g8k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("8nJh");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "7l4u":
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

$global.$addPageConfig({
  pagePath: "page/component/page-result/local-busy/index",
  usingComponents: __webpack_require__("bEpO")

});
Page({});

/***/ }),

/***/ "7o9n":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtUnit = __webpack_require__("K4/D");

var _fmtUnit2 = _interopRequireDefault(_fmtUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/swipe-action/index",
  usingComponents: __webpack_require__("PcdY")

});


var _my$getSystemInfoSync = my.getSystemInfoSync(),
    windowWidth = _my$getSystemInfoSync.windowWidth;

var isV2 = my.canIUse('movable-view.onTouchStart');
Component({
  data: {
    leftPos: 0,
    swiping: false,
    holdSwipe: true,
    viewWidth: windowWidth,
    x: 0,
    actionWidth: 0,
    transitionVal: 'none',
    radiusItemSpace: (0, _fmtUnit2.default)('12px')
  },
  props: {
    className: '',
    right: [],
    restore: false,
    borderRadius: false,
    index: null,
    swipeitem: null,
    height: 0,
    enableNew: true,
    swipeWidth: ''
  },
  didMount: function didMount() {
    var _this$props = this.props,
        enableNew = _this$props.enableNew,
        swipeWidth = _this$props.swipeWidth;
    var useV2 = isV2 && enableNew;
    this.setData({
      useV2: useV2
    });

    if (swipeWidth.match(/%/)) {
      this.setData({
        swipeWidth: ''
      });
    }

    this.setBtnWidth();
    this.getSwipeHeight();
  },
  didUpdate: function didUpdate(_prevProps, prevData) {
    var restore = this.props.restore;
    var _this$data = this.data,
        holdSwipe = _this$data.holdSwipe,
        useV2 = _this$data.useV2;

    if (restore === true && _prevProps.restore !== restore || prevData.holdSwipe === true && holdSwipe === false) {
      this.setData({
        leftPos: 0,
        swiping: false,
        cellWidth: this.btnWidth,
        x: this.btnWidth // V2

      });
    }

    this.getSwipeHeight();

    if (!useV2) {
      this.setBtnWidth();
      this.getSwipeHeight();
    }
  },
  methods: {
    setBtnWidth: function setBtnWidth() {
      var _this = this;

      my.createSelectorQuery().select(".am-swipe-right-" + this.$id).boundingClientRect().exec(function (ret) {
        _this.btnWidth = ret && ret[0] && ret[0].width || 0;

        if (isV2 && _this.props.enableNew) {
          _this.setData({
            actionWidth: _this.btnWidth,
            x: _this.btnWidth,
            cellWidth: _this.btnWidth,
            lastWidth: _this.btnWidth
          });
        }
      });
    },
    getSwipeHeight: function getSwipeHeight() {
      var _this2 = this;

      var enableNew = this.props.enableNew;
      var useV2 = isV2 && enableNew;

      if (useV2) {
        my.createSelectorQuery().select(".am-swipe-movable-area-" + this.$id).boundingClientRect().exec(function (ret) {
          _this2.setData({
            height: parseInt(ret[0].height, 0)
          });
        });
      }
    },
    onSwipeTap: function onSwipeTap() {
      this.setData({
        cellWidth: this.data.lastWidth
      });

      if (!this.data.swiping && this.data.x < 0 || this.data.leftPos !== 0) {
        this.setData({
          leftPos: 0,
          swiping: false,
          x: 0
        });
      }
    },
    onSwipeStart: function onSwipeStart(e) {
      this.touchObject = {
        startX: e.touches[0].pageX,
        startY: e.touches[0].pageY
      };
      var _this$props2 = this.props,
          index = _this$props2.index,
          onSwipeStart = _this$props2.onSwipeStart;

      if (onSwipeStart) {
        onSwipeStart({
          index: index
        });
      }
    },
    onSwipeMove: function onSwipeMove(e) {
      var touchObject = this.touchObject;
      var touchePoint = e.touches[0];
      var leftPos = this.data.leftPos;
      touchObject.endX = touchePoint.pageX; // 首次触发时，计算滑动角度

      if (touchObject.direction === undefined) {
        var direction = 0;
        var xDist = touchObject.startX - touchePoint.pageX || 0;
        var yDist = touchObject.startY - touchePoint.pageY || 0;
        var r = Math.atan2(yDist, xDist);
        var swipeAngle = Math.round(r * 180 / Math.PI);

        if (swipeAngle < 0) {
          swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if (swipeAngle <= 45 && swipeAngle >= 0) {
          direction = 1;
        }

        if (swipeAngle <= 360 && swipeAngle >= 315) {
          direction = 1;
        }

        if (swipeAngle >= 135 && swipeAngle <= 225) {
          direction = -1;
        }

        touchObject.direction = direction;
      } // 通过角度判断是左右方向


      if (touchObject.direction !== 0) {
        var newLeftPos = leftPos; // 滑动距离

        var distance = touchObject.endX - touchObject.startX; // 左划

        if (distance < 0) {
          newLeftPos = Math.max(distance, -this.btnWidth); // 右划
        } else {
          newLeftPos = 0;
        }

        if (Math.abs(distance) > 10) {
          this.setData({
            leftPos: newLeftPos,
            swiping: distance < 0
          });
        }
      }
    },
    onSwipeEnd: function onSwipeEnd(e) {
      var touchObject = this.touchObject;

      if (touchObject.direction !== 0) {
        var touchePoint = e.changedTouches[0];
        touchObject.endX = touchePoint.pageX;
        var leftPos = this.data.leftPos;
        var distance = touchObject.endX - touchObject.startX;
        var newLeftPos = leftPos;

        if (distance < 0) {
          if (Math.abs(distance + leftPos) > this.btnWidth * 0.7) {
            newLeftPos = -this.btnWidth;
          } else {
            newLeftPos = 0;
          }
        }

        this.setData({
          leftPos: newLeftPos,
          swiping: false
        });
      }
    },
    onChange: function onChange() {
      if (!this.data.swiping) {
        this.setData({
          swiping: true,
          transitionVal: 'transform 100ms linear'
        });
      }
    },
    onChangeEnd: function onChangeEnd(e) {
      var _this3 = this;

      var actionWidth = this.data.actionWidth;
      var x = e.detail.x;
      this.setData({
        x: x < actionWidth / 2 ? -1 : actionWidth - 1,
        swiping: false
      }, function () {
        _this3.setData({
          x: _this3.data.x === -1 ? 0 : actionWidth
        });
      });
    },
    done: function done() {
      var _this4 = this;

      this.setData({
        holdSwipe: true
      }, function () {
        _this4.setData({
          holdSwipe: false
        });
      });
    },
    onItemClick: function onItemClick(e) {
      var _this5 = this;

      var onRightItemClick = this.props.onRightItemClick;
      var holdSwipe = this.data.holdSwipe;

      if (onRightItemClick) {
        var index = e.target.dataset.index;
        onRightItemClick({
          index: index,
          extra: this.props.extra,
          detail: this.props.right[index],
          done: this.done.bind(this)
        });
      }

      if (!this.data.swiping && holdSwipe === false) {
        setTimeout(function () {
          _this5.setData({
            leftPos: 0,
            swiping: false,
            x: 0
          });
        }, 300);
      }
    }
  }
});

/***/ }),

/***/ "7t1q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Amj4");
/* harmony import */ var M_1_ = __webpack_require__("mCBd");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "7tWQ":
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

$global.$addPageConfig({
  pagePath: "page/API/generate-image-from-code/generate-image-from-code",
  usingComponents: __webpack_require__("T4t5")

});
Page({
  data: {
    imageStr: '',
    mode: 'aspectFit'
  },
  buttonClick: function buttonClick() {
    var _this = this;

    my.generateImageFromCode({
      code: 'https://www.alipay.com',
      format: 'QRCODE',
      width: 200,
      correctLevel: 'H',
      success: function success(data) {
        console.log(data);
        _this.setData({
          imageStr: data.image
        });
      }
    });
  }
});

/***/ }),

/***/ "7v3T":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "7vcU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("9Ft0");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "7xtz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _debounce = __webpack_require__("HdMn");

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addPageConfig({
  pagePath: "page/component/scroll-view/scroll-view",
  usingComponents: __webpack_require__("+UUW")

});


var order = ['blue', 'red', 'green', 'yellow'];

Page({
  data: {
    toView: 'red',
    scrollTop: 100
  },
  onLoad: function onLoad() {
    this.scroll = (0, _debounce2.default)(this.scroll.bind(this), 100);
  },
  upper: function upper(e) {
    console.log(e);
  },
  lower: function lower(e) {
    console.log(e);
  },
  scroll: function scroll(e) {
    this.setData({
      scrollTop: e.detail.scrollTop
    });
  },
  scrollEnd: function scrollEnd() {},
  scrollToTop: function scrollToTop(e) {
    console.log(e);
    this.setData({
      scrollTop: 0
    });
  },
  tap: function tap(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        var next = (i + 1) % order.length;
        this.setData({
          toView: order[next],
          scrollTop: next * 200
        });
        break;
      }
    }
  },
  tapMove: function tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    });
  }
});

/***/ }),

/***/ "83VP":
/***/ (function(module, exports) {

module.exports = true;

/***/ }),

/***/ "8Bro":
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

$global.$addPageConfig({
  pagePath: "page/component/coupon/index",
  usingComponents: __webpack_require__("fHZM")

});
Page({
  data: {
    thumb: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*b-kqQ4RZgsYAAAAAAAAAAABkARQnAQ'
  },
  onCouponClick: function onCouponClick(e) {
    if (e.currentTarget.dataset.used) {
      return false;
    } else {
      my.alert({
        content: '可用票券，票券点击事件'
      });
    }
  },
  onButtonTap: function onButtonTap() {
    my.alert({
      content: '胶囊按钮点击事件'
    });
  }
});

/***/ }),

/***/ "8Hzp":
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

$global.$addPageConfig({
  pagePath: "page/component/tips/tips",
  usingComponents: __webpack_require__("UIh0")

});
Page({
  openPage: function openPage(e) {
    my.navigateTo({
      url: e.target.dataset.url
    });
  }
});

/***/ }),

/***/ "8Ibh":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "8Rhk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtEvent = __webpack_require__("G+tX");

var _fmtEvent2 = _interopRequireDefault(_fmtEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/am-radio/index",
  usingComponents: __webpack_require__("SJeW")

});

Component({
  props: {
    value: '',
    checked: false,
    disabled: false,
    onChange: function onChange() {},
    id: ''
  },
  methods: {
    onChange: function onChange(e) {
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onChange(event);
    }
  }
});

/***/ }),

/***/ "8S6Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Da9Z");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "8nJh":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/search-bar/index",
  usingComponents: __webpack_require__("tTY1")

});
Component({
  props: {
    className: '',
    placeholder: '',
    focus: false,
    showVoice: false
  },
  data: {
    _value: '',
    focus: false
  },
  didMount: function didMount() {
    this.setData({
      _value: 'value' in this.props ? this.props.value : '',
      focus: this.props.focus
    });
  },
  didUpdate: function didUpdate() {
    if ('value' in this.props && this.props.value !== this.data._value) {
      this.setData({
        _value: this.props.value
      });
    }
  },
  methods: {
    handleInput: function handleInput(e) {
      var value = e.detail.value;

      if (!('value' in this.props)) {
        this.setData({
          _value: value
        });
      }

      if (this.props.onInput) {
        this.props.onInput(value);
      }
    },
    handleClear: function handleClear() {
      var _this = this;

      // this.setData({
      //   focus: true,
      // });
      setTimeout(function () {
        _this.handleFocus();
      }, 100);

      if (!('value' in this.props)) {
        this.setData({
          _value: ''
        });
      }

      this.doClear();
    },
    doClear: function doClear() {
      if (this.props.onClear) {
        this.props.onClear('');
      }

      if (this.props.onChange) {
        this.props.onChange('');
      }
    },
    handleFocus: function handleFocus() {
      this.setData({
        focus: true
      });

      if (this.props.onFocus) {
        this.props.onFocus();
      }
    },
    handleBlur: function handleBlur() {
      this.setData({
        focus: false
      });

      if (this.props.onBlur) {
        this.props.onBlur();
      }
    },
    handleCancel: function handleCancel() {
      if (!('value' in this.props)) {
        this.setData({
          _value: ''
        });
      }

      if (this.props.onCancel) {
        this.props.onCancel();
      } else {
        this.doClear();
      }
    },
    handleConfirm: function handleConfirm(e) {
      var value = e.detail.value;

      if (this.props.onSubmit) {
        this.props.onSubmit(value);
      }
    },
    handleVoice: function handleVoice() {
      if (this.props.onVoiceClick) {
        this.props.onVoiceClick();
      }
    }
  }
});

/***/ }),

/***/ "8oR3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("4wPn");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "8w4V":
/***/ (function(module, exports) {

module.exports = {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "8yqs":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "9/hv":
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

$global.$addPageConfig({
  pagePath: "page/component/message/message",
  usingComponents: __webpack_require__("01hP")

});
Page({
  data: {
    title: '操作成功',
    subTitle: '内容详情可折行，建议不超过两内容。也可以通过 slot="tips" 插入更具有功能性的提示。',
    type: 'success',
    items: [{ name: 'success', value: 'success', checked: true }, { name: 'fail', value: 'fail' }, { name: 'info', value: 'info' }, { name: 'warn', value: 'warn' }, { name: 'waiting', value: 'waiting' }]
  },
  onLoad: function onLoad() {},
  goBack: function goBack() {
    my.navigateBack();
  },
  radioChange: function radioChange(e) {
    this.setData({
      type: e.detail.value
    });
  },
  titleChange: function titleChange(e) {
    this.setData({
      title: e.detail.value
    });
  },
  subtitleChange: function subtitleChange(e) {
    this.setData({
      subTitle: e.detail.value
    });
  },
  onChange: function onChange(e) {
    if (e.detail.value) {
      this.setData({
        mainButton: {
          buttonText: '主要操作'
        },
        subButton: {
          buttonText: '辅助操作'
        }
      });
    } else {
      this.setData({
        mainButton: null,
        subButton: null
      });
    }
  }
});

/***/ }),

/***/ "96Hw":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "97BB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _example = __webpack_require__("3RDK");

var _example2 = _interopRequireDefault(_example);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addPageConfig({
  pagePath: "page/API/canvas/canvas",
  usingComponents: __webpack_require__("IApJ")

});


var imageData = void 0;
Page({
  onLoad: function onLoad() {
    this.context = my.createCanvasContext('canvas');

    var methods = Object.keys(_example2.default);
    this.setData({
      methods: methods
    });

    var that = this;
    methods.forEach(function (method) {
      that[method] = function () {
        _example2.default[method](that.context);
        that.context.draw();
      };
    });
  },
  log: function log(e) {
    console.log('canvas', e);
  },
  toTempFilePath: function toTempFilePath() {
    this.context.toTempFilePath({
      success: function success(res) {
        my.previewImage({
          urls: [res.apFilePath]
        });
      },
      fail: function fail(res) {
        my.alert({
          title: 'toTempFilePath',
          content: "error: " + res.error
        });
      }
    });
  },
  preloadCanvasImage: function preloadCanvasImage() {
    if (my.canIUse('preloadCanvasImage')) {
      var img;
      var that = this;
      my.preloadCanvasImage({
        urls: ['/image/ant.png'],
        success: function success(res) {
          img = res.loaded["/image/ant.png"];
          that.context.drawImage(img, 0, 0);
          that.context.draw();
        }
      });
    }
  },
  getImageData: function getImageData() {
    var _this = this;

    this.context.setFillStyle('red');
    this.context.fillRect(10, 10, 150, 100);
    this.context.draw(false, function () {
      _this.context.getImageData({
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        fail: function fail(error) {
          console.log(error);
        },
        success: function success(res) {
          console.log(res.width); // 100
          console.log(res.height); // 100
          console.log(res.data instanceof Uint8ClampedArray); // true
          console.log(res.data.length); // 100 * 100 * 4
          imageData = res.data;
        }
      });
    });
  },
  putImageData: function putImageData() {
    var _this2 = this;

    this.context.clearRect(0, 0, 100, 100);
    this.context.draw(true, function () {
      setTimeout(function () {
        _this2.context.putImageData({
          x: 0,
          y: 0,
          width: 100,
          data: imageData,
          fail: function fail(error) {
            console.log(error);
          },
          success: function success(xx) {
            console.log('canvasPutImageData', xx);
          }
        });
      }, 2000);
    });
  }
});

/***/ }),

/***/ "9D0o":
/***/ (function(module, exports) {

module.exports = {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "9DmD":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "9Ft0":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/tips/tips-plain/index",
  usingComponents: __webpack_require__("kSt1")

});
Component({
  data: {
    show: true
  },
  props: {
    className: '',
    time: 5000,
    onClose: function onClose() {}
  },
  didMount: function didMount() {
    var _this = this;

    var time = this.props.time;
    this._timer = setTimeout(function () {
      _this.setData({
        show: false
      });
    }, time);
  },
  didUnmount: function didUnmount() {
    clearTimeout(this._timer);
  },
  methods: {
    onClose: function onClose() {
      this.setData({
        show: false
      });
      this.props.onClose();
    }
  }
});

/***/ }),

/***/ "9Ig+":
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

$global.$addPageConfig({
  pagePath: "page/component/popup/popup",
  usingComponents: __webpack_require__("i9pA")

});
Page({
  data: {
    showLeft: false,
    showRight: false,
    showTop: false,
    showBottom: false
  },
  onTopBtnTap: function onTopBtnTap() {
    this.setData({
      showTop: true
    });
  },
  onRightBtnTap: function onRightBtnTap() {
    this.setData({
      showRight: true
    });
  },
  onLeftBtnTap: function onLeftBtnTap() {
    this.setData({
      showLeft: true
    });
  },
  onButtomBtnTap: function onButtomBtnTap() {
    this.setData({
      showBottom: true
    });
  },
  onPopupClose: function onPopupClose() {
    this.setData({
      showLeft: false,
      showRight: false,
      showTop: false,
      showBottom: false
    });
  }
});

/***/ }),

/***/ "9K/H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("WeMs");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "9cRf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("hw1v");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "9iOq":
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

$global.$addPageConfig({
  pagePath: "page/component/text/text",
  usingComponents: __webpack_require__("UFUG")

});
Page({
  data: {
    text: "\u652F\u4ED8\u5B9D\u662F\u4E00\u4E2A\u5927\u578B\u751F\u6D3B\u670D\u52A1\u7C7B\u7684\u5E73\u53F0\uFF0C\u7528\u6237\u7FA4\u975E\u5E38\u5E7F\u6CDB\uFF0C\u4E0A\u81F3\u4E94\u516D\u5341\u5C81\uFF0C\u4E0B\u81F3\u5341\u51E0\u5C81\u3002\n      \u8FD9\u91CC\u4E0D\u4EC5\u6709\u5B98\u65B9\u81EA\u8425\u5E94\u7528\uFF0C\u8FD8\u6709\u7B2C\u4E09\u65B9\u63A5\u5165\u5E94\u7528\uFF0C\u7528\u6237\u7684\u9009\u62E9\u5F88\u591A\u3002\n      \u53EA\u6709\u4F60\u7684\u4EA7\u54C1\u505A\u5F97\u8DB3\u591F\u7B80\u5355\uFF0C\u624D\u80FD\u8BA9\u66F4\u591A\u7684\u7528\u6237\u4F7F\u7528\u3002\u800C\u66F4\u591A\u4EBA\u7684\u4F7F\u7528\uFF0C\u4E5F\u610F\u5473\u7740\u4F60\u66F4\u5927\u7684\u6536\u76CA\u3002\n\n:)\n    "
  }
});

/***/ }),

/***/ "A2y1":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "AAa1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("tc+Q");
/* harmony import */ var M_1_ = __webpack_require__("/ccz");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "AH5w":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "AWkT":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "AYOb":
/***/ (function(module, exports) {

module.exports = {"list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index","swipe-action":"/node_modules/mini-ali-ui/es/swipe-action/index"}

/***/ }),

/***/ "Amj4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("rm7d");
/* harmony import */ var M_1_ = __webpack_require__("f/Fx");
/* harmony import */ var M_2_ = __webpack_require__("GwvB");
/* harmony import */ var M_3_ = __webpack_require__("zgU7");
/* harmony import */ var M_3__default = /*#__PURE__*/__webpack_require__.n(M_3_);

  


  
  

/***/ }),

/***/ "AvbC":
/***/ (function(module, exports) {

module.exports = {"badge":"/node_modules/mini-ali-ui/es/badge/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "AyNx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("u211");
/* harmony import */ var M_1_ = __webpack_require__("rm7d");
/* harmony import */ var M_2_ = __webpack_require__("f/Fx");
/* harmony import */ var M_3_ = __webpack_require__("3Jry");
/* harmony import */ var M_4_ = __webpack_require__("8Bro");
/* harmony import */ var M_4__default = /*#__PURE__*/__webpack_require__.n(M_4_);

  



  
  

/***/ }),

/***/ "B41P":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "B7LD":
/***/ (function(module, exports) {

module.exports = {"verify-code":"/node_modules/mini-ali-ui/es/verify-code/index"}

/***/ }),

/***/ "B8RV":
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

$global.$addPageConfig({
  pagePath: "page/component/button/button",
  usingComponents: __webpack_require__("TB3p")

});
Page({
  data: {},
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: 'view page',
      path: 'page/component/view/view'
    };
  },
  onSubmit: function onSubmit() {
    my.alert({ title: 'You click submit' });
  },
  onReset: function onReset() {
    my.alert({ title: 'You click reset' });
  }
});

/***/ }),

/***/ "B9JD":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "BEHt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("/cKz");
/* harmony import */ var M_1_ = __webpack_require__("wdmQ");
/* harmony import */ var M_2_ = __webpack_require__("RLhq");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "BHhq":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "BIKn":
/***/ (function(module, exports) {

module.exports = {"stepper":"/node_modules/mini-ali-ui/es/stepper/index","list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index"}

/***/ }),

/***/ "BZW3":
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

$global.$addPageConfig({
  pagePath: "page/component/page-result/network/index",
  usingComponents: __webpack_require__("VEdZ")

});
Page({
  data: {
    footer: [{
      text: '修复'
    }, {
      text: '刷新'
    }]
  },

  onTapLeft: function onTapLeft(e) {
    console.log(e, 'onTapLeft');
  },
  onTapRight: function onTapRight(e) {
    console.log(e, 'onTapRight');
  }
});

/***/ }),

/***/ "BaC8":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "Batu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("oYL7");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "Bgag":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("+95A");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "BpEc":
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

$global.$addPageConfig({
  pagePath: "page/component/page-result/log-off/index",
  usingComponents: __webpack_require__("JeuR")

});
Page({});

/***/ }),

/***/ "C2mS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("97BB");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "C5aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("v0bc");
/* harmony import */ var M_1_ = __webpack_require__("1mJz");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "CChD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("PmPC");
/* harmony import */ var M_1_ = __webpack_require__("c1eU");
/* harmony import */ var M_2_ = __webpack_require__("rm7d");
/* harmony import */ var M_3_ = __webpack_require__("/lU1");
/* harmony import */ var M_3__default = /*#__PURE__*/__webpack_require__.n(M_3_);

  


  
  

/***/ }),

/***/ "CPAQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Zk7X");

/***/ }),

/***/ "CXVZ":
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

$global.$addPageConfig({
  pagePath: "page/tabBar/component/index",
  usingComponents: __webpack_require__("3mWn"),
  tabIndex: 10

});
var basicContainers = [{
  name: '基础视图',
  thumb: '/image/icon/view.png',
  nameEn: 'View',
  path: '/page/component/view/view'
}, {
  name: '滚动视图',
  thumb: '/image/icon/scroll-view.png',
  nameEn: 'ScrollView',
  path: '/page/component/scroll-view/scroll-view'
}, {
  name: '滑动视图',
  thumb: '/image/icon/swiper.png',
  nameEn: 'Swiper',
  path: '/page/component/swiper/swiper'
}, {
  name: '可移动视图',
  thumb: '/image/icon/movable-view.png',
  nameEn: 'MovableView',
  path: '/page/component/movable-view/movable-view'
}, {
  name: '原生视图',
  thumb: '/image/icon/cover-view.png',
  nameEn: 'CoverView',
  path: '/page/component/cover-view/cover-view'
}];

var basicBasics = [{
  name: '文字',
  thumb: '/image/icon/text.png',
  nameEn: 'Text',
  path: '/page/component/text/text'
}, {
  name: '图标',
  thumb: '/image/icon/icon.png',
  nameEn: 'Icon',
  path: '/page/component/icon/icon'
}, {
  name: '富文本',
  thumb: '/image/icon/form.png',
  nameEn: 'RichText',
  path: '/page/component/rich-text/rich-text'
}];

var basicFeedBacks = [{
  name: '进度条',
  thumb: '/image/icon/progress.png',
  nameEn: 'Progress',
  path: '/page/component/progress/progress'
}];

var basicForms = [{
  name: '按钮',
  thumb: '/image/icon/button.png',
  nameEn: 'Button',
  path: '/page/component/button/button'
}, {
  name: '表单',
  thumb: '/image/icon/form.png',
  nameEn: 'Form',
  path: '/page/component/form/form'
}, {
  name: '标签',
  thumb: '/image/icon/label.png',
  nameEn: 'Label',
  path: '/page/component/label/label'
}, {
  name: '输入框',
  thumb: '/image/icon/input.png',
  nameEn: 'Input',
  path: '/page/component/input/input'
}, {
  name: '多行输入框',
  thumb: '/image/icon/textarea.png',
  nameEn: 'Textarea',
  path: '/page/component/textarea/textarea'
}, {
  name: '单选框',
  thumb: '/image/icon/radio.png',
  nameEn: 'Radio',
  path: '/page/component/radio/radio'
}, {
  name: '复选框',
  thumb: '/image/icon/checkbox.png',
  nameEn: 'Checkbox',
  path: '/page/component/checkbox/checkbox'
}, {
  name: '开关',
  thumb: '/image/icon/switch.png',
  nameEn: 'Switch',
  path: '/page/component/switch/switch'
}, {
  name: '滑动条',
  thumb: '/image/icon/slider.png',
  nameEn: 'Slider',
  path: '/page/component/slider/slider'
}, {
  name: '选择器视图',
  thumb: '/image/icon/picker-view.png',
  nameEn: 'PickerView',
  path: '/page/component/picker-view/picker-view'
}, {
  name: '选择器',
  thumb: '/image/icon/picker.png',
  nameEn: 'Picker',
  path: '/page/component/picker/picker'
}];

var basicNavigators = [{
  name: '导航',
  thumb: '/image/icon/navigator.png',
  nameEn: 'Navigator',
  path: '/page/component/navigator/navigator'
}];

var basicMedias = [{
  name: '图片',
  thumb: '/image/icon/image.png',
  nameEn: 'Image',
  path: '/page/component/image/image'
}];

var basicMaps = [{
  name: '地图',
  thumb: '/image/icon/map.png',
  nameEn: 'Map',
  path: '/page/component/map/map'
}];

var basicCanvas = [{
  name: '画布',
  thumb: '/image/icon/canvas.png',
  nameEn: 'Canvas',
  path: '/page/component/canvas/canvas'
}];

var basicOpens = [{
  name: '内嵌webview',
  thumb: '/image/icon/webview.png',
  nameEn: 'Webview',
  path: '/page/component/webview/webview'
}, {
  name: '关注生活号',
  thumb: '/image/icon/lifestyle.png',
  nameEn: 'Lifestyle',
  path: '/page/component/lifestyle/lifestyle'
}, {
  name: '智能客服',
  thumb: '/image/icon/contact-button.png',
  nameEn: 'contact-button',
  path: '/page/component/contact-button/contact-button'
}, {
  name: '收藏',
  thumb: '/image/icon/favorite.png',
  nameEn: 'Favorite',
  path: '/page/component/favorite/favorite'
}];

var basicComponentList = [{
  type: '视图容器',
  list: basicContainers
}, {
  type: '基础组件',
  list: basicBasics
}, {
  type: '反馈',
  list: basicFeedBacks
}, {
  type: '表单',
  list: basicForms
}, {
  type: '导航',
  list: basicNavigators
}, {
  type: '媒体',
  list: basicMedias
}, {
  type: '画布',
  list: basicCanvas
}];

if (my.ap) {
  basicComponentList = basicComponentList.concat([{
    type: '地图',
    list: basicMaps
  }, {
    type: '开放组件',
    list: basicOpens
  }]);
}

var extContainers = [{
  name: '容器',
  thumb: '/image/icon/container.png',
  nameEn: 'Container',
  path: '/page/component/container/index'
}, {
  name: '模块标题',
  thumb: '/image/icon/navigator.png',
  nameEn: 'Title',
  path: '/page/component/title/index'
}, {
  name: '列表',
  thumb: '/image/icon/form.png',
  nameEn: 'List',
  path: '/page/component/list/list'
}, {
  name: '列表元素',
  thumb: '/image/icon/list-item.png',
  nameEn: 'List-item',
  path: '/page/component/list-item/index'
}, {
  name: '顶部选项卡',
  thumb: '/image/icon/tabs.png',
  nameEn: 'Tabs',
  path: '/page/component/tabs/tabs'
}, {
  name: '纵向选项卡',
  thumb: '/image/icon/vtabs.png',
  nameEn: 'Vtabs',
  path: '/page/component/vtabs/vtabs'
}, {
  name: '卡片',
  thumb: '/image/icon/card.png',
  nameEn: 'Card',
  path: '/page/component/card/card'
}, {
  name: '票券',
  thumb: '/image/icon/coupon.png',
  nameEn: 'Coupon',
  path: '/page/component/coupon/index'
}, {
  name: '宫格',
  thumb: '/image/icon/grid.png',
  nameEn: 'Grid',
  path: '/page/component/grid/grid'
}, {
  name: '步骤条',
  thumb: '/image/icon/steps.png',
  nameEn: 'Steps',
  path: '/page/component/steps/steps'
}, {
  name: '页脚',
  thumb: '/image/icon/footer.png',
  nameEn: 'Footer',
  path: '/page/component/footer/footer'
}, {
  name: '协议',
  thumb: '/image/icon/terms.png',
  nameEn: 'Terms',
  path: '/page/component/terms/index'
}, {
  name: 'Flex 布局',
  thumb: '/image/icon/view.png',
  nameEn: 'Flex',
  path: '/page/component/flex/flex'
}, {
  name: '折叠面板',
  thumb: '/image/icon/collapse.png',
  nameEn: 'Collapse',
  path: '/page/component/collapse/index'
}];

var pops = [{
  name: '气泡',
  thumb: '/image/icon/popover.png',
  nameEn: 'Popover',
  path: '/page/component/popover/popover'
}, {
  name: '筛选',
  thumb: '/image/icon/filter.png',
  nameEn: 'Filter',
  path: '/page/component/filter/filter'
}, {
  name: '对话框',
  thumb: '/image/icon/modal.png',
  nameEn: 'Modal',
  path: '/page/component/modal/modal'
}, {
  name: '弹出菜单',
  thumb: '/image/icon/popup.png',
  nameEn: 'Popup',
  path: '/page/component/popup/popup'
}];

var extForms = [{
  name: '文本输入',
  thumb: '/image/icon/input.png',
  nameEn: 'Input-item',
  path: '/page/component/input-item/input-item'
}, {
  name: '验证码框',
  thumb: '/image/icon/verifycode.png',
  nameEn: 'Verify-code',
  path: '/page/component/verify-code/index'
}, {
  name: '选择输入',
  thumb: '/image/icon/picker.png',
  nameEn: 'Picker-item',
  path: '/page/component/picker-item/index'
}, {
  name: '长密码框',
  thumb: '/image/icon/longpassword.png',
  nameEn: 'Long-password',
  path: '/page/component/long-password/index'
}, {
  name: '多行输入',
  thumb: '/image/icon/textarea.png',
  nameEn: 'Multi-liner',
  path: '/page/component/multi-liner/index'
}, {
  name: '金额输入',
  thumb: '/image/icon/amount-input.png',
  nameEn: 'Amount-input',
  path: '/page/component/amount-input/amount-input'
}, {
  name: '按钮',
  thumb: '/image/icon/button.png',
  nameEn: 'Button',
  path: '/page/component/button-ali-ui/index'
}, {
  name: '开关',
  thumb: '/image/icon/switch.png',
  nameEn: 'Am-switch',
  path: '/page/component/switch-ali-ui/index'
}, {
  name: '复选框',
  thumb: '/image/icon/checkbox-aliui.png',
  nameEn: 'Am-checkbox',
  path: '/page/component/am-checkbox/am-checkbox'
}, {
  name: '单选框',
  thumb: '/image/icon/radio-aliui.png',
  nameEn: 'Am-radio',
  path: '/page/component/radio-ali-ui/index'
}, {
  name: '搜索框',
  thumb: '/image/icon/search-bar.png',
  nameEn: 'Search-bar',
  path: '/page/component/search-bar/search-bar'
}];

var results = [{
  name: '异常页',
  thumb: '/image/icon/page-result.png',
  nameEn: 'Page-result',
  path: '/page/component/page-result/page-result'
}, {
  name: '结果页',
  thumb: '/image/icon/message.png',
  nameEn: 'Message',
  path: '/page/component/message/message'
}];

var tips = [{
  name: '引导',
  thumb: '/image/icon/tips.png',
  nameEn: 'Tips',
  path: '/page/component/tips/tips'
}, {
  name: '通告栏',
  thumb: '/image/icon/notice.png',
  nameEn: 'Notice',
  path: '/page/component/notice/notice'
}, {
  name: '徽标',
  thumb: '/image/icon/view.png',
  nameEn: 'Badge',
  path: '/page/component/badge/badge'
}, {
  name: '标签',
  thumb: '/image/icon/tag.png',
  nameEn: 'Tag',
  path: '/page/component/tag/index'
}, {
  name: '背景蒙层',
  thumb: '/image/icon/mask.png',
  nameEn: 'Mask',
  path: '/page/component/mask/mask'
}, {
  name: '遮罩引导',
  thumb: '/image/icon/guide.png',
  nameEn: 'Guide',
  path: '/page/component/guide/guide'
}, {
  name: '头像',
  thumb: '/image/icon/avatar.png',
  nameEn: 'Avatar',
  path: '/page/component/avatar/index'
}];

var gestures = [{
  name: '可滑动单元格',
  thumb: '/image/icon/swipe-action.png',
  nameEn: 'Swipe-action',
  path: '/page/component/swipe-action/swipe-action'
}];

var inputs = [];

var others = [{
  name: '分页符',
  thumb: '/image/icon/pagination.png',
  nameEn: 'Pagination',
  path: '/page/component/pagination/index'
}, {
  name: '字母检索表',
  thumb: '/image/icon/alphabet.png',
  nameEn: 'Alphabet',
  path: '/page/component/alphabet/index'
}, {
  name: '步进器',
  thumb: '/image/icon/stepper.png',
  nameEn: 'Stepper',
  path: '/page/component/stepper/stepper'
}, {
  name: '日历',
  thumb: '/image/icon/calendar.png',
  nameEn: 'Calendar',
  path: '/page/component/calendar/calendar'
}, {
  name: '图标',
  thumb: '/image/icon/icon.png',
  nameEn: 'Am-icon',
  path: '/page/component/am-icon/am-icon'
}, {
  name: 'loading 加载',
  thumb: '/image/icon/loading.png',
  nameEn: 'Loading',
  path: '/page/component/loading/loading'
}];

var extComponentList = [{
  type: '布局导航',
  list: extContainers
}, {
  type: '操作浮层',
  list: pops
}, {
  type: '结果类',
  list: results
}, {
  type: '提示引导',
  list: tips
}, {
  type: '表单类',
  list: extForms
}, {
  type: '手势类',
  list: gestures
}, {
  type: '其他',
  list: others
}];

Page({
  data: {
    top: 0,
    hot: [{ name: 'ScrollView', url: '/page/component/scroll-view/scroll-view' }, { name: '地图', url: '/page/component/map/map' }, { name: 'Icon', url: '/page/component/icon/icon' }, { name: 'Card', url: '/page/component/card/card' }, { name: '获取授权码', url: '/page/API/get-auth-code/get-auth-code' }, { name: 'Popup', url: '/page/component/popup/popup' }, { name: '发起HTTP请求', url: '/page/API/request/request' }, { name: '画布', url: '/page/component/canvas/canvas' }, { name: '导航', url: '/page/API/navigator/navigator' }],
    tabs: ['基础组件', '扩展组件'],
    activeTab: 0,
    basicComponentList: basicComponentList,
    extComponentList: extComponentList,
    titleOpacity: 1,
    shadow: false
  },
  onPageScroll: function onPageScroll(e) {
    var scrollTop = e.scrollTop;

    var titleOpacity = 1 - scrollTop * 0.02;
    var shadow = false;

    if (titleOpacity < 0) {
      titleOpacity = 0;
    }

    if (titleOpacity > 1) {
      titleOpacity = 1;
    }

    if (scrollTop > 80) {
      my.setNavigationBar({
        title: '小程序官方示例'
      });
    } else {
      my.setNavigationBar({
        title: ' '
      });
    }

    if (scrollTop > 320) {
      shadow = true;
    } else {
      shadow = false;
    }

    this.setData({
      shadow: shadow,
      titleOpacity: titleOpacity
    });
  },
  onSearchBarTap: function onSearchBarTap() {
    my.navigateTo({
      url: '/page/common/search/search'
    });
  },
  onTabBarTap: function onTabBarTap(e) {
    var index = e.target.dataset.index;

    this.setData({
      activeTab: index
    });
  },
  onLoad: function onLoad() {
    var _this = this;

    my.getSystemInfo({
      success: function success(res) {
        if (res.statusBarHeight && res.titleBarHeight) {
          _this.setData({
            top: res.statusBarHeight + res.titleBarHeight
          });
        }
      }
    });
  },
  goDevCenter: function goDevCenter() {
    my.navigateToMiniProgram({
      appId: '2018082061148052',
      path: 'pages/discover/discover',
      extraData: {
        "from": "miniDemo"
      }
    });
  },
  openPage: function openPage(e) {
    my.navigateTo({
      url: e.target.dataset.url
    });
  }
});

/***/ }),

/***/ "CYqV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("H7Gw");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "Cg+T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("PGiW");
/* harmony import */ var M_1_ = __webpack_require__("x46k");
/* harmony import */ var M_2_ = __webpack_require__("4kSd");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "Ck8m":
/***/ (function(module, exports) {

module.exports = {"filter":"/node_modules/mini-ali-ui/es/filter/index","filter-item":"/node_modules/mini-ali-ui/es/filter/filter-item/index"}

/***/ }),

/***/ "ClNr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("5wjx");
/* harmony import */ var M_1_ = __webpack_require__("Qdjk");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "Cnt7":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "CoHa":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("7aEC");
var dPs = __webpack_require__("z3vv");
var enumBugKeys = __webpack_require__("B41P");
var IE_PROTO = __webpack_require__("VBQa")('IE_PROTO');
var Empty = function Empty() {/* empty */};
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("sQok")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("77+I").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),

/***/ "Crkb":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "CuQL":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "CuaX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("mQ0p");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "D+jx":
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

$global.$addPageConfig({
  pagePath: "page/component/footer/footer",
  usingComponents: __webpack_require__("epEI")

});
Page({
  data: {
    footerInfo1: {
      type: 'normal',
      content: '底部文案置底说明'
    },
    footerInfo2: {
      type: 'guide',
      content: '没找到需要的？搜一下试试',
      extend: [{
        link: '/page/tabBar/component/index',
        text: '蚂蚁借呗'
      }, {
        link: '/page/tabBar/component/index',
        text: '备用金'
      }, {
        link: '/page/tabBar/component/index',
        text: '花呗收钱'
      }]
    },
    footerInfo3: {
      type: 'copyright',
      content: '© 2004-2020 Alipay.com. All rights reserved.'
    },
    footerInfo4: {
      type: 'brand',
      content: '过往业绩不预示产品未来表现，市场有风险，投资需谨慎',
      extend: [{
        logo: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
        width: '30px',
        height: '30px',
        link: '/page/tabBar/component/index'
      }, {
        logo: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*gWo-TLFGp38AAAAAAAAAAABkARQnAQ',
        width: '420rpx',
        height: '116rpx'
      }]
    },
    footerInfo5: {
      type: 'link',
      content: '© 2004-2020 Alipay.com. All rights reserved.',
      extend: [{
        link: '/page/tabBar/component/index',
        text: '底部链接'
      }]
    },
    footerInfo6: {
      type: 'link',
      content: '© 2004-2020 Alipay.com. All rights reserved.',
      extend: [{
        link: '/page/tabBar/component/index',
        text: '底部链接'
      }, {
        link: '/page/tabBar/component/index',
        text: '底部链接'
      }]
    },
    footerInfo7: {
      type: 'end',
      content: '自定义的没有更多内容的底线',
      footerEndColor: 'red'
    },
    footerInfo8: {
      type: 'end',
      showEndIcon: true,
      iconSize: 50
    }
  },
  brandClick: function brandClick() {
    my.alert({
      content: '这个品牌 logo 没有链接，可通过 js 自定义点击事件。'
    });
  }
});

/***/ }),

/***/ "Da9Z":
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

$global.$addPageConfig({
  pagePath: "page/component/picker-view/picker-view",
  usingComponents: __webpack_require__("eY34")

});
Page({
  data: {},
  onChange: function onChange(e) {
    console.log(e.detail.value);
    this.setData({
      value: e.detail.value
    });
  }
});

/***/ }),

/***/ "DgiU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtUnit = __webpack_require__("K4/D");

var _fmtUnit2 = _interopRequireDefault(_fmtUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/list/index",
  usingComponents: __webpack_require__("bPUD")

});

Component({
  props: {
    className: '',
    loadMore: false,
    loadContent: ['', ''],
    loadingSize: (0, _fmtUnit2.default)('16px')
  },
  data: {
    loadContent: ['加载更多...', '-- 数据加载完了 --']
  },
  didMount: function didMount() {
    var loadTxt = this.props.loadContent[0] ? this.props.loadContent[0] : this.data.loadContent[0];
    var overTxt = this.props.loadContent[1] ? this.props.loadContent[1] : this.data.loadContent[1];
    this.setData({
      loadContent: [loadTxt, overTxt]
    });
  },
  didUpdate: function didUpdate() {
    var loadTxt = this.props.loadContent[0] ? this.props.loadContent[0] : this.data.loadContent[0];
    var overTxt = this.props.loadContent[1] ? this.props.loadContent[1] : this.data.loadContent[1];

    if (loadTxt !== this.data.loadContent[0] || overTxt !== this.data.loadContent[1]) {
      this.setData({
        loadContent: [loadTxt, overTxt]
      });
    }
  }
});

/***/ }),

/***/ "DqlL":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "E46x":
/***/ (function(module, exports) {

module.exports = {"long-password":"/node_modules/mini-ali-ui/es/long-password/index"}

/***/ }),

/***/ "E6EL":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "EBRW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__("83VP");
var $export = __webpack_require__("J5LZ");
var redefine = __webpack_require__("CPAQ");
var hide = __webpack_require__("Zk7X");
var Iterators = __webpack_require__("+AE8");
var $iterCreate = __webpack_require__("YJxO");
var setToStringTag = __webpack_require__("qtuz");
var getPrototypeOf = __webpack_require__("pnMr");
var ITERATOR = __webpack_require__("mMCp")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),

/***/ "EE10":
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

$global.$addPageConfig({
  pagePath: "page/component/textarea/textarea",
  usingComponents: __webpack_require__("6mwo")

});
Page({
  data: {
    height: 20,
    focus: false
  },
  bindButtonTap: function bindButtonTap() {
    this.onFocus();
  },
  onFocus: function onFocus() {
    this.setData({
      focus: true
    });
  },
  onBlur: function onBlur() {
    this.setData({
      focus: false
    });
  },
  bindTextAreaBlur: function bindTextAreaBlur(e) {
    console.log(e.detail.value);
  },
  bindFormSubmit: function bindFormSubmit(e) {
    my.alert({
      content: e.detail.value.textarea
    });
  }
});

/***/ }),

/***/ "EF3x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("z/D6");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "ELbk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtEvent = __webpack_require__("G+tX");

var _fmtEvent2 = _interopRequireDefault(_fmtEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/input-item/index",
  usingComponents: __webpack_require__("s6wR")

});

Component({
  props: {
    className: '',
    labelCls: '',
    inputCls: '',
    last: false,
    value: '',
    name: '',
    type: 'text',
    password: false,
    placeholder: '',
    placeholderClass: '',
    placeholderStyle: '',
    disabled: false,
    maxlength: 140,
    focus: false,
    clear: true,
    // 默认有清除功能
    syncInput: false,
    enableNative: false,
    // 兼容安卓input的输入bug
    onInput: function onInput() {},
    onConfirm: function onConfirm() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onClear: function onClear() {},
    layer: '',
    // 表单排列位置，当为空时默认横向排列， vertical 为竖向排列
    controlled: false
  },
  data: {
    _focus: false
  },
  didMount: function didMount() {
    this.setData({
      _focus: this.props.focus
    });
  },
  methods: {
    onBlur: function onBlur(e) {
      this.setData({
        _focus: false
      });
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onBlur(event);
    },
    onConfirm: function onConfirm(e) {
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onConfirm(event);
    },
    onFocus: function onFocus(e) {
      this.setData({
        _focus: true
      });
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onFocus(event);
    },
    onInput: function onInput(e) {
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onInput(event);
    },
    onClear: function onClear(e) {
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onClear(event);
    }
  }
});

/***/ }),

/***/ "EUVD":
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

$global.$addPageConfig({
  pagePath: "page/component/verify-code/index",
  usingComponents: __webpack_require__("B7LD")

});
Page({
  data: {
    verifyCode: ''
  },
  onSend: function onSend() {
    my.alert({
      title: 'verify code sent'
    });
  },
  onInput: function onInput(e) {
    this.setData({
      verifyCode: e.detail.value
    });
  },
  onClear: function onClear() {}
});

/***/ }),

/***/ "EW39":
/***/ (function(module, exports, __webpack_require__) {


  (function (hostGlobal) {
    if (!hostGlobal.__appxInited) {
      if (hostGlobal.importScripts) {
        if(!hostGlobal.Map || !hostGlobal.Set || !hostGlobal.Symbol) {
          importScripts('https://gw.alipayobjects.com/as/g/appx_release/deps/1.0.3/es6-set-map-symbol.js');
        }
        if (!hostGlobal.AFAppX) {
          importScripts("./index.worker.min.js");
        }
      }
      hostGlobal.__appxInited = 1;
      var callback = function () {
        __webpack_require__("GfhN");
__webpack_require__("RGkL");
__webpack_require__("5/gU");
__webpack_require__("dfKd");
__webpack_require__("g/bL");
__webpack_require__("xMQo");
__webpack_require__("4AqP");
__webpack_require__("W/Td");
__webpack_require__("eDtu");
__webpack_require__("C2mS");
__webpack_require__("7NyK");
__webpack_require__("CYqV");
__webpack_require__("KiJc");
__webpack_require__("xxCk");
__webpack_require__("jAyS");
__webpack_require__("htOt");
__webpack_require__("xQ33");
__webpack_require__("7HHc");
__webpack_require__("obH/");
__webpack_require__("eh3U");
__webpack_require__("yOWb");
__webpack_require__("rqji");
__webpack_require__("9cRf");
__webpack_require__("RJQV");
__webpack_require__("PpwP");
__webpack_require__("el+C");
__webpack_require__("syIm");
__webpack_require__("7Fnl");
__webpack_require__("iy3N");
__webpack_require__("Nkn+");
__webpack_require__("aYgn");
__webpack_require__("iyiF");
__webpack_require__("CuaX");
__webpack_require__("S6l4");
__webpack_require__("pI1P");
__webpack_require__("f/sb");
__webpack_require__("yNjr");
__webpack_require__("7Ocm");
__webpack_require__("lE49");
__webpack_require__("IYr+");
__webpack_require__("dYpx");
__webpack_require__("R6e4");
__webpack_require__("Fmr0");
__webpack_require__("KdZH");
__webpack_require__("ham1");
__webpack_require__("3ewE");
__webpack_require__("tbKk");
__webpack_require__("eC2Z");
__webpack_require__("RUlS");
__webpack_require__("ouCV");
__webpack_require__("Vc71");
__webpack_require__("KliJ");
__webpack_require__("FIrF");
__webpack_require__("Tvld");
__webpack_require__("w7H+");
__webpack_require__("5XHo");
__webpack_require__("fli/");
__webpack_require__("REwq");
__webpack_require__("Nozw");
__webpack_require__("1SpY");
__webpack_require__("wer/");
__webpack_require__("XVtX");
__webpack_require__("R7NN");
__webpack_require__("wLGm");
__webpack_require__("7ftD");
__webpack_require__("JL8F");
__webpack_require__("j+OB");
__webpack_require__("br1U");
__webpack_require__("vL9j");
__webpack_require__("0KBx");
__webpack_require__("4/f6");
__webpack_require__("9K/H");
__webpack_require__("Batu");
__webpack_require__("HPag");
__webpack_require__("dLlc");
__webpack_require__("cwUD");
__webpack_require__("1ktA");
__webpack_require__("H/2P");
__webpack_require__("U7B8");
__webpack_require__("lJ9y");
__webpack_require__("2Whd");
__webpack_require__("EtWs");
__webpack_require__("jElC");
__webpack_require__("Hsae");
__webpack_require__("c68h");
__webpack_require__("k+xx");
__webpack_require__("TNof");
__webpack_require__("d03/");
__webpack_require__("/TvH");
__webpack_require__("X989");
__webpack_require__("IjBb");
__webpack_require__("6Ox8");
__webpack_require__("8S6Q");
__webpack_require__("5ZjG");
__webpack_require__("m/eg");
__webpack_require__("6y5Z");
__webpack_require__("Ohnn");
__webpack_require__("5NCm");
__webpack_require__("Bgag");
__webpack_require__("rnNP");
__webpack_require__("s8Y5");
__webpack_require__("oCu6");
__webpack_require__("3pB3");
__webpack_require__("vHdn");
__webpack_require__("gAAq");
__webpack_require__("ySfb");
__webpack_require__("tV4T");
__webpack_require__("J/uM");
__webpack_require__("7E6T");
__webpack_require__("zs5F");
__webpack_require__("Gkbj");
__webpack_require__("x9So");
__webpack_require__("mwF2");
__webpack_require__("zp25");
__webpack_require__("oi3f");
__webpack_require__("Cg+T");
__webpack_require__("/dcX");
__webpack_require__("3PC2");
__webpack_require__("FW0h");
__webpack_require__("mLCK");
__webpack_require__("RzZj");
__webpack_require__("mEgK");
__webpack_require__("ClNr");
__webpack_require__("cVg2");
__webpack_require__("IlTp");
__webpack_require__("quDQ");
__webpack_require__("kGLg");
__webpack_require__("Pw9l");
__webpack_require__("HPxP");
__webpack_require__("/Kis");
__webpack_require__("RRiE");
__webpack_require__("Inko");
__webpack_require__("2thk");
__webpack_require__("TDS0");
__webpack_require__("os5u");
__webpack_require__("BEHt");
__webpack_require__("YKQd");
__webpack_require__("JZRo");
__webpack_require__("AyNx");
__webpack_require__("zIca");
__webpack_require__("C5aj");
__webpack_require__("Nvw5");
__webpack_require__("05ie");
__webpack_require__("7t1q");
__webpack_require__("YLMP");
__webpack_require__("SCYW");
__webpack_require__("N8T4");
__webpack_require__("ElXh");
__webpack_require__("wgHU");
__webpack_require__("chAR");
__webpack_require__("WsWr");
__webpack_require__("WqJo");
__webpack_require__("sQL1");
__webpack_require__("LtJz");
__webpack_require__("xP0Q");
__webpack_require__("zxdz");
__webpack_require__("kaaR");
__webpack_require__("VhlL");
__webpack_require__("UEdv");
__webpack_require__("xeO/");
__webpack_require__("IRnL");
__webpack_require__("FT6D");
__webpack_require__("gNCP");
__webpack_require__("trVe");
__webpack_require__("3Btm");
__webpack_require__("G+2A");
__webpack_require__("2Eqn");
__webpack_require__("fXfe");
__webpack_require__("+B7z");
__webpack_require__("bzE+");
__webpack_require__("5KCK");
__webpack_require__("b9Q3");
__webpack_require__("+VyT");
__webpack_require__("VFvq");
__webpack_require__("AAa1");
__webpack_require__("fYNj");
__webpack_require__("1bbv");
__webpack_require__("4oCf");
__webpack_require__("IvJx")
      }
      
        var appCallback = function () {
          __webpack_require__("GfhN");
        };
        var pageRequestPaths = [
          "page/tabBar/component/index",
"page/tabBar/API/index",
"page/common/search/search",
"page/API/events/events",
"page/API/share/share",
"page/API/action-sheet/action-sheet",
"page/API/alert/alert",
"page/API/animation/animation",
"page/API/canvas/canvas",
"page/API/card-pack/card-pack",
"page/API/choose-city/choose-city",
"page/API/favorite/favorite",
"page/API/choose-location/choose-location",
"page/API/confirm/confirm",
"page/API/contact/contact",
"page/API/date-picker/date-picker",
"page/API/option-menu/option-menu",
"page/API/download-file/download-file",
"page/API/file/file",
"page/API/ocr/ocr",
"page/API/ocr-idcard-face/ocr-idcard-face",
"page/API/ocr-business-card/ocr-business-card",
"page/API/ocr-vehicle/ocr-vehicle",
"page/API/ocr-driver-license/ocr-driver-license",
"page/API/ocr-business-license/ocr-business-license",
"page/API/ocr-bank-card/ocr-bank-card",
"page/API/ocr-train-ticket/ocr-train-ticket",
"page/API/ocr-passport/ocr-passport",
"page/API/ocr-general/ocr-general",
"page/API/ocr-vehicle-plate/ocr-vehicle-plate",
"page/API/ocr-vin/ocr-vin",
"page/API/get-auth-code/get-auth-code",
"page/API/get-location/get-location",
"page/API/get-network-type/get-network-type",
"page/API/get-system-info/get-system-info",
"page/API/get-server-time/get-server-time",
"page/API/get-user-info/get-user-info",
"page/API/get-image-info/get-image-info",
"page/API/get-title-color/get-title-color",
"page/API/image/image",
"page/API/keyboard/keyboard",
"page/API/loading/loading",
"page/API/make-phone-call/make-phone-call",
"page/API/memory-warning/memory-warning",
"page/API/multi-level-select/multi-level-select",
"page/API/options-select/options-select",
"page/API/navigation-bar-loading/navigation-bar-loading",
"page/API/navigator/navigator",
"page/API/open-location/open-location",
"page/API/pull-down-refresh/pull-down-refresh",
"page/API/pay-sign-center/pay-sign-center",
"page/API/request/request",
"page/API/request-payment/request-payment",
"page/API/scan-code/scan-code",
"page/API/set-navigation-bar/set-navigation-bar",
"page/API/show-auth-guide/show-auth-guide",
"page/API/storage/storage",
"page/API/toast/toast",
"page/API/upload-file/upload-file",
"page/API/vibrate/vibrate",
"page/API/watch-shake/watch-shake",
"page/API/clipboard/clipboard",
"page/API/bluetooth/bluetooth",
"page/API/rsa/rsa",
"page/API/page-scroll-to/page-scroll-to",
"page/API/websocket/websocket",
"page/API/zm-credit-borrow/zm-credit-borrow",
"page/API/create-selector-query/create-selector-query",
"page/API/sdk-version/sdk-version",
"page/API/user-capture-screen/user-capture-screen",
"page/API/screen/screen",
"page/API/compress-image/compress-image",
"page/API/report-analytics/report-analytics",
"page/API/text-risk-identification/text-risk-identification",
"page/API/create-inner-audiocontext/create-inner-audiocontext",
"page/API/get-background-audio-manager/get-background-audio-manager",
"page/API/generate-image-from-code/generate-image-from-code",
"page/component/button/button",
"page/component/canvas/canvas",
"page/component/checkbox/checkbox",
"page/component/form/form",
"page/component/icon/icon",
"page/component/image/image",
"page/component/input/input",
"page/component/label/label",
"page/component/map/map",
"page/component/navigator/navigate",
"page/component/navigator/redirect",
"page/component/navigator/reLaunch",
"page/component/navigator/navigator",
"page/component/picker/picker",
"page/component/picker-view/picker-view",
"page/component/progress/progress",
"page/component/radio/radio",
"page/component/scroll-view/scroll-view",
"page/component/slider/slider",
"page/component/swiper/swiper",
"page/component/switch/switch",
"page/component/text/text",
"page/component/textarea/textarea",
"page/component/view/view",
"page/component/lifestyle/lifestyle",
"page/component/contact-button/contact-button",
"page/component/webview/webview",
"page/component/cover-view/cover-view",
"page/component/movable-view/movable-view",
"page/component/list/list",
"page/component/tabs/tabs",
"page/component/card/card",
"page/component/vtabs/vtabs",
"page/component/grid/grid",
"page/component/steps/steps",
"page/component/footer/footer",
"page/component/favorite/favorite",
"page/component/popover/popover",
"page/component/modal/modal",
"page/component/popup/popup",
"page/component/filter/filter",
"page/component/page-result/page-result",
"page/component/message/message",
"page/component/tips/tips",
"page/component/notice/notice",
"page/component/swipe-action/swipe-action",
"page/component/amount-input/amount-input",
"page/component/badge/badge",
"page/component/search-bar/search-bar",
"page/component/calendar/calendar",
"page/component/stepper/stepper",
"page/component/input-item/input-item",
"page/component/am-checkbox/am-checkbox",
"page/component/video/video",
"page/component/am-icon/am-icon",
"page/component/flex/flex",
"page/component/rich-text/rich-text",
"page/component/container/index",
"page/component/title/index",
"page/component/list-item/index",
"page/component/coupon/index",
"page/component/grid/2/index",
"page/component/grid/3/index",
"page/component/grid/4/index",
"page/component/grid/5/index",
"page/component/terms/index",
"page/component/collapse/index",
"page/component/filter/alternative/index",
"page/component/filter/single/index",
"page/component/filter/single_1/index",
"page/component/filter/single_2/index",
"page/component/page-result/network/index",
"page/component/page-result/local-network/index",
"page/component/page-result/busy/index",
"page/component/page-result/local-busy/index",
"page/component/page-result/error/index",
"page/component/page-result/local-error/index",
"page/component/page-result/log-off/index",
"page/component/page-result/local-logoff/index",
"page/component/page-result/empty/index",
"page/component/page-result/local-empty/index",
"page/component/page-result/payment/index",
"page/component/page-result/local-payment/index",
"page/component/page-result/redpacket/index",
"page/component/page-result/local-redpacket/index",
"page/component/tips/1/index",
"page/component/tips/2/index",
"page/component/tag/index",
"page/component/mask/mask",
"page/component/guide/guide",
"page/component/avatar/index",
"page/component/verify-code/index",
"page/component/picker-item/index",
"page/component/long-password/index",
"page/component/multi-liner/index",
"page/component/button-ali-ui/index",
"page/component/switch-ali-ui/index",
"page/component/radio-ali-ui/index",
"page/component/pagination/index",
"page/component/alphabet/index",
"page/component/loading/loading"
        ];
        var pageRequests = {
          "page/tabBar/component/index": function () {
                __webpack_require__("RGkL");
              },
"page/tabBar/API/index": function () {
                __webpack_require__("5/gU");
              },
"page/common/search/search": function () {
                __webpack_require__("dfKd");
              },
"page/API/events/events": function () {
                __webpack_require__("g/bL");
              },
"page/API/share/share": function () {
                __webpack_require__("xMQo");
              },
"page/API/action-sheet/action-sheet": function () {
                __webpack_require__("4AqP");
              },
"page/API/alert/alert": function () {
                __webpack_require__("W/Td");
              },
"page/API/animation/animation": function () {
                __webpack_require__("eDtu");
              },
"page/API/canvas/canvas": function () {
                __webpack_require__("C2mS");
              },
"page/API/card-pack/card-pack": function () {
                __webpack_require__("7NyK");
              },
"page/API/choose-city/choose-city": function () {
                __webpack_require__("CYqV");
              },
"page/API/favorite/favorite": function () {
                __webpack_require__("KiJc");
              },
"page/API/choose-location/choose-location": function () {
                __webpack_require__("xxCk");
              },
"page/API/confirm/confirm": function () {
                __webpack_require__("jAyS");
              },
"page/API/contact/contact": function () {
                __webpack_require__("htOt");
              },
"page/API/date-picker/date-picker": function () {
                __webpack_require__("xQ33");
              },
"page/API/option-menu/option-menu": function () {
                __webpack_require__("7HHc");
              },
"page/API/download-file/download-file": function () {
                __webpack_require__("obH/");
              },
"page/API/file/file": function () {
                __webpack_require__("eh3U");
              },
"page/API/ocr/ocr": function () {
                __webpack_require__("yOWb");
              },
"page/API/ocr-idcard-face/ocr-idcard-face": function () {
                __webpack_require__("rqji");
              },
"page/API/ocr-business-card/ocr-business-card": function () {
                __webpack_require__("9cRf");
              },
"page/API/ocr-vehicle/ocr-vehicle": function () {
                __webpack_require__("RJQV");
              },
"page/API/ocr-driver-license/ocr-driver-license": function () {
                __webpack_require__("PpwP");
              },
"page/API/ocr-business-license/ocr-business-license": function () {
                __webpack_require__("el+C");
              },
"page/API/ocr-bank-card/ocr-bank-card": function () {
                __webpack_require__("syIm");
              },
"page/API/ocr-train-ticket/ocr-train-ticket": function () {
                __webpack_require__("7Fnl");
              },
"page/API/ocr-passport/ocr-passport": function () {
                __webpack_require__("iy3N");
              },
"page/API/ocr-general/ocr-general": function () {
                __webpack_require__("Nkn+");
              },
"page/API/ocr-vehicle-plate/ocr-vehicle-plate": function () {
                __webpack_require__("aYgn");
              },
"page/API/ocr-vin/ocr-vin": function () {
                __webpack_require__("iyiF");
              },
"page/API/get-auth-code/get-auth-code": function () {
                __webpack_require__("CuaX");
              },
"page/API/get-location/get-location": function () {
                __webpack_require__("S6l4");
              },
"page/API/get-network-type/get-network-type": function () {
                __webpack_require__("pI1P");
              },
"page/API/get-system-info/get-system-info": function () {
                __webpack_require__("f/sb");
              },
"page/API/get-server-time/get-server-time": function () {
                __webpack_require__("yNjr");
              },
"page/API/get-user-info/get-user-info": function () {
                __webpack_require__("7Ocm");
              },
"page/API/get-image-info/get-image-info": function () {
                __webpack_require__("lE49");
              },
"page/API/get-title-color/get-title-color": function () {
                __webpack_require__("IYr+");
              },
"page/API/image/image": function () {
                __webpack_require__("dYpx");
              },
"page/API/keyboard/keyboard": function () {
                __webpack_require__("R6e4");
              },
"page/API/loading/loading": function () {
                __webpack_require__("Fmr0");
              },
"page/API/make-phone-call/make-phone-call": function () {
                __webpack_require__("KdZH");
              },
"page/API/memory-warning/memory-warning": function () {
                __webpack_require__("ham1");
              },
"page/API/multi-level-select/multi-level-select": function () {
                __webpack_require__("3ewE");
              },
"page/API/options-select/options-select": function () {
                __webpack_require__("tbKk");
              },
"page/API/navigation-bar-loading/navigation-bar-loading": function () {
                __webpack_require__("eC2Z");
              },
"page/API/navigator/navigator": function () {
                __webpack_require__("RUlS");
              },
"page/API/open-location/open-location": function () {
                __webpack_require__("ouCV");
              },
"page/API/pull-down-refresh/pull-down-refresh": function () {
                __webpack_require__("Vc71");
              },
"page/API/pay-sign-center/pay-sign-center": function () {
                __webpack_require__("KliJ");
              },
"page/API/request/request": function () {
                __webpack_require__("FIrF");
              },
"page/API/request-payment/request-payment": function () {
                __webpack_require__("Tvld");
              },
"page/API/scan-code/scan-code": function () {
                __webpack_require__("w7H+");
              },
"page/API/set-navigation-bar/set-navigation-bar": function () {
                __webpack_require__("5XHo");
              },
"page/API/show-auth-guide/show-auth-guide": function () {
                __webpack_require__("fli/");
              },
"page/API/storage/storage": function () {
                __webpack_require__("REwq");
              },
"page/API/toast/toast": function () {
                __webpack_require__("Nozw");
              },
"page/API/upload-file/upload-file": function () {
                __webpack_require__("1SpY");
              },
"page/API/vibrate/vibrate": function () {
                __webpack_require__("wer/");
              },
"page/API/watch-shake/watch-shake": function () {
                __webpack_require__("XVtX");
              },
"page/API/clipboard/clipboard": function () {
                __webpack_require__("R7NN");
              },
"page/API/bluetooth/bluetooth": function () {
                __webpack_require__("wLGm");
              },
"page/API/rsa/rsa": function () {
                __webpack_require__("7ftD");
              },
"page/API/page-scroll-to/page-scroll-to": function () {
                __webpack_require__("JL8F");
              },
"page/API/websocket/websocket": function () {
                __webpack_require__("j+OB");
              },
"page/API/zm-credit-borrow/zm-credit-borrow": function () {
                __webpack_require__("br1U");
              },
"page/API/create-selector-query/create-selector-query": function () {
                __webpack_require__("vL9j");
              },
"page/API/sdk-version/sdk-version": function () {
                __webpack_require__("0KBx");
              },
"page/API/user-capture-screen/user-capture-screen": function () {
                __webpack_require__("4/f6");
              },
"page/API/screen/screen": function () {
                __webpack_require__("9K/H");
              },
"page/API/compress-image/compress-image": function () {
                __webpack_require__("Batu");
              },
"page/API/report-analytics/report-analytics": function () {
                __webpack_require__("HPag");
              },
"page/API/text-risk-identification/text-risk-identification": function () {
                __webpack_require__("dLlc");
              },
"page/API/create-inner-audiocontext/create-inner-audiocontext": function () {
                __webpack_require__("cwUD");
              },
"page/API/get-background-audio-manager/get-background-audio-manager": function () {
                __webpack_require__("1ktA");
              },
"page/API/generate-image-from-code/generate-image-from-code": function () {
                __webpack_require__("H/2P");
              },
"page/component/button/button": function () {
                __webpack_require__("U7B8");
              },
"page/component/canvas/canvas": function () {
                __webpack_require__("lJ9y");
              },
"page/component/checkbox/checkbox": function () {
                __webpack_require__("2Whd");
              },
"page/component/form/form": function () {
                __webpack_require__("EtWs");
              },
"page/component/icon/icon": function () {
                __webpack_require__("jElC");
              },
"page/component/image/image": function () {
                __webpack_require__("Hsae");
              },
"page/component/input/input": function () {
                __webpack_require__("c68h");
              },
"page/component/label/label": function () {
                __webpack_require__("k+xx");
              },
"page/component/map/map": function () {
                __webpack_require__("TNof");
              },
"page/component/navigator/navigate": function () {
                __webpack_require__("d03/");
              },
"page/component/navigator/redirect": function () {
                __webpack_require__("/TvH");
              },
"page/component/navigator/reLaunch": function () {
                __webpack_require__("X989");
              },
"page/component/navigator/navigator": function () {
                __webpack_require__("IjBb");
              },
"page/component/picker/picker": function () {
                __webpack_require__("6Ox8");
              },
"page/component/picker-view/picker-view": function () {
                __webpack_require__("8S6Q");
              },
"page/component/progress/progress": function () {
                __webpack_require__("5ZjG");
              },
"page/component/radio/radio": function () {
                __webpack_require__("m/eg");
              },
"page/component/scroll-view/scroll-view": function () {
                __webpack_require__("6y5Z");
              },
"page/component/slider/slider": function () {
                __webpack_require__("Ohnn");
              },
"page/component/swiper/swiper": function () {
                __webpack_require__("5NCm");
              },
"page/component/switch/switch": function () {
                __webpack_require__("Bgag");
              },
"page/component/text/text": function () {
                __webpack_require__("rnNP");
              },
"page/component/textarea/textarea": function () {
                __webpack_require__("s8Y5");
              },
"page/component/view/view": function () {
                __webpack_require__("oCu6");
              },
"page/component/lifestyle/lifestyle": function () {
                __webpack_require__("3pB3");
              },
"page/component/contact-button/contact-button": function () {
                __webpack_require__("vHdn");
              },
"page/component/webview/webview": function () {
                __webpack_require__("gAAq");
              },
"page/component/cover-view/cover-view": function () {
                __webpack_require__("ySfb");
              },
"page/component/movable-view/movable-view": function () {
                __webpack_require__("tV4T");
              },
"page/component/list/list": function () {
                __webpack_require__("J/uM");
              },
"page/component/tabs/tabs": function () {
                __webpack_require__("7E6T");
              },
"page/component/card/card": function () {
                __webpack_require__("zs5F");
              },
"page/component/vtabs/vtabs": function () {
                __webpack_require__("Gkbj");
              },
"page/component/grid/grid": function () {
                __webpack_require__("x9So");
              },
"page/component/steps/steps": function () {
                __webpack_require__("mwF2");
              },
"page/component/footer/footer": function () {
                __webpack_require__("zp25");
              },
"page/component/favorite/favorite": function () {
                __webpack_require__("oi3f");
              },
"page/component/popover/popover": function () {
                __webpack_require__("Cg+T");
              },
"page/component/modal/modal": function () {
                __webpack_require__("/dcX");
              },
"page/component/popup/popup": function () {
                __webpack_require__("3PC2");
              },
"page/component/filter/filter": function () {
                __webpack_require__("FW0h");
              },
"page/component/page-result/page-result": function () {
                __webpack_require__("mLCK");
              },
"page/component/message/message": function () {
                __webpack_require__("RzZj");
              },
"page/component/tips/tips": function () {
                __webpack_require__("mEgK");
              },
"page/component/notice/notice": function () {
                __webpack_require__("ClNr");
              },
"page/component/swipe-action/swipe-action": function () {
                __webpack_require__("cVg2");
              },
"page/component/amount-input/amount-input": function () {
                __webpack_require__("IlTp");
              },
"page/component/badge/badge": function () {
                __webpack_require__("quDQ");
              },
"page/component/search-bar/search-bar": function () {
                __webpack_require__("kGLg");
              },
"page/component/calendar/calendar": function () {
                __webpack_require__("Pw9l");
              },
"page/component/stepper/stepper": function () {
                __webpack_require__("HPxP");
              },
"page/component/input-item/input-item": function () {
                __webpack_require__("/Kis");
              },
"page/component/am-checkbox/am-checkbox": function () {
                __webpack_require__("RRiE");
              },
"page/component/video/video": function () {
                __webpack_require__("Inko");
              },
"page/component/am-icon/am-icon": function () {
                __webpack_require__("2thk");
              },
"page/component/flex/flex": function () {
                __webpack_require__("TDS0");
              },
"page/component/rich-text/rich-text": function () {
                __webpack_require__("os5u");
              },
"page/component/container/index": function () {
                __webpack_require__("BEHt");
              },
"page/component/title/index": function () {
                __webpack_require__("YKQd");
              },
"page/component/list-item/index": function () {
                __webpack_require__("JZRo");
              },
"page/component/coupon/index": function () {
                __webpack_require__("AyNx");
              },
"page/component/grid/2/index": function () {
                __webpack_require__("zIca");
              },
"page/component/grid/3/index": function () {
                __webpack_require__("C5aj");
              },
"page/component/grid/4/index": function () {
                __webpack_require__("Nvw5");
              },
"page/component/grid/5/index": function () {
                __webpack_require__("05ie");
              },
"page/component/terms/index": function () {
                __webpack_require__("7t1q");
              },
"page/component/collapse/index": function () {
                __webpack_require__("YLMP");
              },
"page/component/filter/alternative/index": function () {
                __webpack_require__("SCYW");
              },
"page/component/filter/single/index": function () {
                __webpack_require__("N8T4");
              },
"page/component/filter/single_1/index": function () {
                __webpack_require__("ElXh");
              },
"page/component/filter/single_2/index": function () {
                __webpack_require__("wgHU");
              },
"page/component/page-result/network/index": function () {
                __webpack_require__("chAR");
              },
"page/component/page-result/local-network/index": function () {
                __webpack_require__("WsWr");
              },
"page/component/page-result/busy/index": function () {
                __webpack_require__("WqJo");
              },
"page/component/page-result/local-busy/index": function () {
                __webpack_require__("sQL1");
              },
"page/component/page-result/error/index": function () {
                __webpack_require__("LtJz");
              },
"page/component/page-result/local-error/index": function () {
                __webpack_require__("xP0Q");
              },
"page/component/page-result/log-off/index": function () {
                __webpack_require__("zxdz");
              },
"page/component/page-result/local-logoff/index": function () {
                __webpack_require__("kaaR");
              },
"page/component/page-result/empty/index": function () {
                __webpack_require__("VhlL");
              },
"page/component/page-result/local-empty/index": function () {
                __webpack_require__("UEdv");
              },
"page/component/page-result/payment/index": function () {
                __webpack_require__("xeO/");
              },
"page/component/page-result/local-payment/index": function () {
                __webpack_require__("IRnL");
              },
"page/component/page-result/redpacket/index": function () {
                __webpack_require__("FT6D");
              },
"page/component/page-result/local-redpacket/index": function () {
                __webpack_require__("gNCP");
              },
"page/component/tips/1/index": function () {
                __webpack_require__("trVe");
              },
"page/component/tips/2/index": function () {
                __webpack_require__("3Btm");
              },
"page/component/tag/index": function () {
                __webpack_require__("G+2A");
              },
"page/component/mask/mask": function () {
                __webpack_require__("2Eqn");
              },
"page/component/guide/guide": function () {
                __webpack_require__("fXfe");
              },
"page/component/avatar/index": function () {
                __webpack_require__("+B7z");
              },
"page/component/verify-code/index": function () {
                __webpack_require__("bzE+");
              },
"page/component/picker-item/index": function () {
                __webpack_require__("5KCK");
              },
"page/component/long-password/index": function () {
                __webpack_require__("b9Q3");
              },
"page/component/multi-liner/index": function () {
                __webpack_require__("+VyT");
              },
"page/component/button-ali-ui/index": function () {
                __webpack_require__("VFvq");
              },
"page/component/switch-ali-ui/index": function () {
                __webpack_require__("AAa1");
              },
"page/component/radio-ali-ui/index": function () {
                __webpack_require__("fYNj");
              },
"page/component/pagination/index": function () {
                __webpack_require__("1bbv");
              },
"page/component/alphabet/index": function () {
                __webpack_require__("4oCf");
              },
"page/component/loading/loading": function () {
                __webpack_require__("IvJx");
              }
        }

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

/***/ "EbMY":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "Ebqv":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "EiqG":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "ElXh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("zZkM");
/* harmony import */ var M_1_ = __webpack_require__("lQK1");
/* harmony import */ var M_2_ = __webpack_require__("3iiv");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "Em6C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("zbfS");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "ErnP":
/***/ (function(module, exports) {

module.exports = {"collapse":"/node_modules/mini-ali-ui/es/collapse/index","collapse-item":"/node_modules/mini-ali-ui/es/collapse/collapse-item/index"}

/***/ }),

/***/ "EtWs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0g6y");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "FIrF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("bfDU");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "FPKP":
/***/ (function(module, exports) {

module.exports = {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "FT6D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Vnk/");
/* harmony import */ var M_1_ = __webpack_require__("gGI1");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "FW0h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0iQm");
/* harmony import */ var M_1_ = __webpack_require__("cyyQ");
/* harmony import */ var M_2_ = __webpack_require__("58TC");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "FZCA":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "FgHi":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "Fmr0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("T3sa");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "Fw/U":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "FweV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtEvent = __webpack_require__("G+tX");

var _fmtEvent2 = _interopRequireDefault(_fmtEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/verify-code/index",
  usingComponents: __webpack_require__("cyDR")

});

Component({
  props: {
    className: '',
    labelCls: '',
    label: '验证码',
    inputCls: '',
    last: false,
    value: '',
    name: '',
    type: 'text',
    password: false,
    placeholder: '请输入验证码',
    placeholderClass: '',
    placeholderStyle: '',
    disabled: false,
    maxlength: 140,
    focus: false,
    clear: true,
    // 默认有清除功能
    syncInput: false,
    enableNative: false,
    // 兼容安卓input的输入bug
    countDown: 60,
    isInitialActive: true,
    onInput: function onInput() {},
    onConfirm: function onConfirm() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onClear: function onClear() {},
    onSend: function onSend() {}
  },
  data: {
    _focus: false,
    _actionActive: true,
    _countDown: 60,
    resent: false
  },
  didMount: function didMount() {
    this.setData({
      _focus: this.props.focus,
      _actionActive: this.props.isInitialActive,
      _countDown: this.props.countDown,
      actedBefore: false
    });
  },
  didUnmount: function didUnmount() {
    clearInterval(this._timeout);
  },
  methods: {
    onBlur: function onBlur(e) {
      this.setData({
        _focus: false
      });
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onBlur(event);
    },
    onConfirm: function onConfirm(e) {
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onConfirm(event);
    },
    onFocus: function onFocus(e) {
      this.setData({
        _focus: true
      });
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onFocus(event);
    },
    onInput: function onInput(e) {
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onInput(event);
    },
    onClear: function onClear(e) {
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onClear(event);
    },
    onTapSend: function onTapSend(e) {
      var _this = this;

      this.setData({
        _actionActive: false
      });
      this._timeout = setInterval(function () {
        var subOne = _this.data._countDown - 1;

        if (subOne <= 0) {
          clearInterval(_this._timeout);

          _this.setData({
            _actionActive: true,
            resend: true,
            _countDown: _this.props.countDown,
            actedBefore: true
          });
        } else {
          _this.setData({
            _countDown: subOne
          });
        }
      }, 1000);
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onSend(event);
    }
  }
});

/***/ }),

/***/ "G+2A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("rxtH");
/* harmony import */ var M_1_ = __webpack_require__("cyyQ");
/* harmony import */ var M_2_ = __webpack_require__("tc+Q");
/* harmony import */ var M_3_ = __webpack_require__("R58G");
/* harmony import */ var M_3__default = /*#__PURE__*/__webpack_require__.n(M_3_);

  


  
  

/***/ }),

/***/ "G+tX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fmtEvent; });
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
function fmtEvent(props, e) {
  var dataset = {};

  for (var key in props) {
    if (/data-/gi.test(key)) {
      dataset[key.replace(/data-/gi, '')] = props[key];
    }
  }

  return Object.assign({}, e, {
    currentTarget: {
      dataset: dataset
    },
    target: {
      dataset: dataset,
      targetDataset: dataset
    }
  });
}

/***/ }),

/***/ "G9k7":
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

$global.$addPageConfig({
  pagePath: "page/component/picker-item/index",
  usingComponents: __webpack_require__("ikd/")

});
var banks = ['网商银行', '建设银行', '工商银行', '浦发银行'];

Page({
  data: {
    bank: ''
  },
  onPickerTap: function onPickerTap() {
    var _this = this;

    my.showActionSheet({
      title: '选择发卡银行',
      items: banks,
      success: function success(res) {
        _this.setData({
          bank: banks[res.index]
        });
      }
    });
  }
});

/***/ }),

/***/ "GKXa":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "GNlg":
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

$global.$addPageConfig({
  pagePath: "page/API/memory-warning/memory-warning",
  usingComponents: __webpack_require__("9DmD")

});
Page({
  onLoad: function onLoad() {
    this.callback = function (res) {
      var levelString = 'iOS 设备, 无 level 传入.';
      switch (res.level) {
        case 10:
          levelString = 'Android 设备, level = TRIM_MEMORY_RUNNING_LOW';
          break;
        case 15:
          levelString = 'Android 设备, level = TRIM_MEMORY_RUNNING_CRITICAL';
          break;
      }
      my.alert({
        title: '收到内存不足告警',
        content: levelString
      });
    };
    this.isApiAvailable = my.canIUse('onMemoryWarning');
  },
  onMemoryWarning: function onMemoryWarning() {
    if (this.isApiAvailable) {
      my.onMemoryWarning(this.callback);
    } else {
      my.alert({
        title: '客户端版本过低',
        content: 'my.onMemoryWarning() 和 my.offMemoryWarning() 需要 10.1.35 及以上版本'
      });
    }
  },
  onUnload: function onUnload() {
    if (this.isApiAvailable) {
      my.offMemoryWarning(this.callback);
    }
  }
});

/***/ }),

/***/ "GTY8":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "GUIp":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/container/index",
  usingComponents: __webpack_require__("pQdU")

});
Component({
  mixins: [],
  data: {},
  props: {
    className: '',
    type: 'line'
  },
  didMount: function didMount() {},
  didUpdate: function didUpdate() {},
  didUnmount: function didUnmount() {},
  methods: {}
});

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

/***/ "Gjwv":
/***/ (function(module, exports) {

module.exports = {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"}

/***/ }),

/***/ "Gkbj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("yxQw");
/* harmony import */ var M_1_ = __webpack_require__("kyFI");
/* harmony import */ var M_2_ = __webpack_require__("QYM4");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "GlFR":
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

$global.$addPageConfig({
  pagePath: "page/component/canvas/canvas",
  usingComponents: __webpack_require__("eVeF")

});
Page({
  onReady: function onReady() {
    this.point = {
      x: Math.random() * 590,
      y: Math.random() * 590,
      dx: Math.random() * 10,
      dy: Math.random() * 10,
      r: Math.round(Math.random() * 255 | 0),
      g: Math.round(Math.random() * 255 | 0),
      b: Math.round(Math.random() * 255 | 0)
    };

    this.interval = setInterval(this.draw.bind(this), 17);
    this.ctx = my.createCanvasContext('canvas');
  },
  draw: function draw() {
    var ctx = this.ctx;

    ctx.setFillStyle('#FFF');
    ctx.fillRect(0, 0, 610, 610);

    ctx.beginPath();
    ctx.arc(this.point.x, this.point.y, 20, 0, 2 * Math.PI);
    ctx.setFillStyle('rgb(' + this.point.r + ', ' + this.point.g + ', ' + this.point.b + ')');
    ctx.fill();
    ctx.draw();

    this.point.x += this.point.dx;
    this.point.y += this.point.dy;
    if (this.point.x <= 10 || this.point.x >= 590) {
      this.point.dx = -this.point.dx;
      this.point.r = Math.round(Math.random() * 255 | 0);
      this.point.g = Math.round(Math.random() * 255 | 0);
      this.point.b = Math.round(Math.random() * 255 | 0);
    }

    if (this.point.y <= 10 || this.point.y >= 590) {
      this.point.dy = -this.point.dy;
      this.point.r = Math.round(Math.random() * 255 | 0);
      this.point.g = Math.round(Math.random() * 255 | 0);
      this.point.b = Math.round(Math.random() * 255 | 0);
    }
  },
  drawBall: function drawBall() {},
  log: function log(e) {
    if (e.touches && e.touches[0]) {
      console.log(e.type, e.touches[0].x, e.touches[0].y);
    } else {
      console.log(e.type);
    }
  },
  onUnload: function onUnload() {
    clearInterval(this.interval);
  }
});

/***/ }),

/***/ "Gn9S":
/***/ (function(module, exports) {

module.exports = {"multi-liner":"/node_modules/mini-ali-ui/es/multi-liner/index"}

/***/ }),

/***/ "GoG2":
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

$global.$addPageConfig({
  pagePath: "page/component/progress/progress",
  usingComponents: __webpack_require__("DqlL")

});
Page({});

/***/ }),

/***/ "GwvB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("63Or");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "H+t+":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "H/2P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("7tWQ");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "H4mh":
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

$global.$addPageConfig({
  pagePath: "page/component/grid/2/index",
  usingComponents: __webpack_require__("7LnK")

});
Page({
  data: {
    list1: [{
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字',
      desc: '描述文字最多一行描述文字最多一行描述文字最多一行描述文字最多一行'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字标题文字标题文字标题文字',
      desc: '描述文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字标题文字标题文字标题文字',
      desc: '描述文字最多一行描述文字最多一行描述文字最多一行描述文字最多一行描述文字最多一行'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字',
      desc: '描述文字最多一行'
    }],
    list2: [{
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字标题文字标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字标题文字标题文字标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字'
    }]
  },
  onItemClick: function onItemClick(ev) {
    my.alert({
      content: ev.detail.index
    });
  }
});

/***/ }),

/***/ "H7Gw":
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

$global.$addPageConfig({
  pagePath: "page/API/choose-city/choose-city",
  usingComponents: __webpack_require__("dE0g")

});
Page({
  chooseCity: function chooseCity() {
    my.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      success: function success(res) {
        my.alert({
          title: 'chooseCity response: ' + JSON.stringify(res)
        });
      }
    });
  },
  setLocatedCity: function setLocatedCity() {
    my.onLocatedComplete({
      success: function success(res) {
        my.setLocatedCity({
          locatedCityId: res.locatedCityId, //res.locatedCityId
          locatedCityName: '修改后的城市名',
          success: function success(res) {
            my.alert({ content: '修改当前定位城市成功' + JSON.stringify(res) });
          },
          fail: function fail(error) {
            my.alert({ content: '修改当前定位城市失败' + JSON.stringify(error) });
          }
        });
      },
      fail: function fail(error) {
        my.alert({ content: 'onLocatedComplete失败' + JSON.stringify(error) });
      }
    });
    my.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      setLocatedCity: true,
      success: function success(res) {
        my.alert({
          title: 'chooseCity response: ' + JSON.stringify(res)
        });
      }
    });
  }
});

/***/ }),

/***/ "H8c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lifecycle = __webpack_require__("U+PM");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/filter/index",
  usingComponents: __webpack_require__("c/UB")

});

Component({
  mixins: [_lifecycle2.default],
  data: {
    maxHeight: 0
  },
  props: {
    className: '',
    onChange: function onChange() {},
    max: 10000,
    equalRows: 0
  },
  didMount: function didMount() {
    var commonProps = this.data.commonProps;
    var max = this.props.max;
    commonProps.max = max;
  },
  methods: {
    resetFn: function resetFn() {
      var _this$data = this.data,
          items = _this$data.items,
          results = _this$data.results;
      items.forEach(function (element) {
        element.setData({
          confirmStyle: ''
        });
      });
      results.splice(0, results.length);
    },
    confirmFn: function confirmFn() {
      var onChange = this.props.onChange;
      var results = this.data.results;
      onChange(results);
    },
    maskTap: function maskTap() {
      if (this.props.onMaskTap) {
        this.props.onMaskTap();
      }
    }
  }
});

/***/ }),

/***/ "HEzK":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "HIzF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtEvent = __webpack_require__("G+tX");

var _fmtEvent2 = _interopRequireDefault(_fmtEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/am-checkbox/index",
  usingComponents: __webpack_require__("HaeW")

});

/**
 * 对齐 ant design checkbox 的设计，增加 ctrlChecked 属性
 * 当 props 中有 checked 传入时，am-checkbox 是非受控组件
 * 当 props 中不传入 checked 而使用 ctrlChecked 时，am-checkbox 是受控组件
 */

Component({
  props: {
    value: '',
    checked: false,
    ctrlChecked: undefined,
    disabled: false,
    onChange: function onChange() {},
    id: ''
  },
  data: {
    // 组件内维护的 chackbox 勾选状态
    _checked: false
  },
  onInit: function onInit() {
    var checked = this.props.checked;
    this.setData({
      _checked: checked
    });
  },
  // props 改变时
  deriveDataFromProps: function deriveDataFromProps(nextProps) {
    var _checked = this.data._checked;
    var oldChecked = this.props.ctrlChecked;
    var ctrlChecked = nextProps.ctrlChecked; // oldChecked===undefined 说明未传入 checked 属性，am-checkbox 将成为不受控组件
    // oldChecked 有传入值 _checked 受外部 checked 属性控制

    if (_checked !== ctrlChecked && oldChecked !== undefined) {
      this.setData({
        _checked: ctrlChecked
      });
    }
  },
  methods: {
    onChange: function onChange(e) {
      var _e$detail = e.detail,
          detail = _e$detail === void 0 ? {} : _e$detail;
      var value = detail.value;
      this.setData({
        _checked: value
      });
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onChange(event);
    }
  }
});

/***/ }),

/***/ "HPag":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("PZ3u");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "HPxP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("3Jry");
/* harmony import */ var M_1_ = __webpack_require__("0iQm");
/* harmony import */ var M_2_ = __webpack_require__("cyyQ");
/* harmony import */ var M_3_ = __webpack_require__("5IhY");
/* harmony import */ var M_3__default = /*#__PURE__*/__webpack_require__.n(M_3_);

  


  
  

/***/ }),

/***/ "HXyD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtEvent = __webpack_require__("G+tX");

var _fmtEvent2 = _interopRequireDefault(_fmtEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/multi-liner/index",
  usingComponents: __webpack_require__("xtxV")

});

Component({
  props: {
    className: '',
    labelCls: '',
    inputCls: '',
    last: false,
    value: '',
    name: '',
    type: 'text',
    password: false,
    placeholder: '',
    placeholderClass: '',
    placeholderStyle: '',
    disabled: false,
    maxlength: 140,
    showCount: true,
    autoHeight: false,
    focus: false,
    syncInput: false,
    enableNative: false,
    // 兼容安卓input的输入bug
    onInput: function onInput() {},
    onConfirm: function onConfirm() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onClear: function onClear() {}
  },
  data: {
    _focus: false
  },
  didMount: function didMount() {
    this.setData({
      _focus: this.props.focus
    });
  },
  methods: {
    onBlur: function onBlur(e) {
      this.setData({
        _focus: false
      });
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onBlur(event);
    },
    onConfirm: function onConfirm(e) {
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onConfirm(event);
    },
    onFocus: function onFocus(e) {
      this.setData({
        _focus: true
      });
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onFocus(event);
    },
    onInput: function onInput(e) {
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onInput(event);
    },
    onClear: function onClear(e) {
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onClear(event);
    }
  }
});

/***/ }),

/***/ "HaeW":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "Hcll":
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

$global.$addPageConfig({
  pagePath: "page/API/toast/toast",
  usingComponents: __webpack_require__("ntW1")

});
Page({
  showToastSuccess: function showToastSuccess() {
    my.showToast({
      type: 'success',
      content: '操作成功',
      duration: 3000,
      success: function success() {
        my.alert({
          title: 'toast 消失了'
        });
      }
    });
  },
  showToastFail: function showToastFail() {
    my.showToast({
      type: 'fail',
      content: '操作失败',
      duration: 3000,
      success: function success() {
        my.alert({
          title: 'toast 消失了'
        });
      }
    });
  },
  showToastException: function showToastException() {
    my.showToast({
      type: 'exception',
      content: '网络异常',
      duration: 3000,
      success: function success() {
        my.alert({
          title: 'toast 消失了'
        });
      }
    });
  },
  showToastNone: function showToastNone() {
    my.showToast({
      type: 'none',
      content: '提醒',
      duration: 3000,
      success: function success() {
        my.alert({
          title: 'toast 消失了'
        });
      }
    });
  },
  hideToast: function hideToast() {
    my.hideToast();
  }
});

/***/ }),

/***/ "HdMn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;
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
function debounce(fn, wait) {
  var timeout;
  return function () {
    var ctx = this,
        args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn.apply(ctx, args);
    }, wait);
  };
}
module.exports = exports["default"];

/***/ }),

/***/ "Hhgm":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "HncH":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "Ho7M":
/***/ (function(module, exports) {

module.exports = {"button":"/node_modules/mini-ali-ui/es/button/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "HrCQ":
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

$global.$addPageConfig({
  pagePath: "page/API/confirm/confirm",
  usingComponents: __webpack_require__("XULc")

});
Page({
  comfirm: function comfirm() {
    my.confirm({
      title: '温馨提示',
      content: '您是否想查询快递单号：\n1234567890',
      confirmButtonText: '马上查询',
      cancelButtonText: '暂不需要',
      success: function success(result) {
        my.alert({
          title: "" + result.confirm
        });
      }
    });
  }
});

/***/ }),

/***/ "Hsae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("7Nrc");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "I0ji":
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

$global.$addPageConfig({
  pagePath: "page/component/calendar/calendar",
  usingComponents: __webpack_require__("iG7C")

});
Page({
  data: {
    tagData: [{ date: '2020-02-14', tag: '颜色 1', tagColor: 1 }, { date: '2020-02-28', tag: '公积金', tagColor: 2 }, { date: '2020-02-24', tag: '颜色 3', tagColor: 3 }, { date: '2020-02-18', tag: '颜色 4', tagColor: 4 }, { date: '2020-02-4', tag: '还房贷', tagColor: 5 }, { date: '2020-02-10', tag: '公积金', disable: true }]
  },
  onLoad: function onLoad() {
    var getDate = new Date();
    var getYear = getDate.getFullYear();
    var getMonth = getDate.getMonth();
    var m = getMonth + 1;
    if (m.toString().length === 1) {
      m = '0' + m;
    }
    this.setData({
      tagData: [{ date: getYear + '-' + m + '-14', tag: '颜色 1', tagColor: 1 }, { date: getYear + '-' + m + '-28', tag: '公积金', tagColor: 2 }, { date: getYear + '-' + m + '-24', tag: '颜色 3', tagColor: 3 }, { date: getYear + '-' + m + '-18', tag: '颜色 4', tagColor: 4 }, { date: getYear + '-' + m + '-4', tag: '还房贷', tagColor: 5 }, { date: getYear + '-' + m + '-10', tag: '公积金', disable: true }]
    });
  },
  handleSelect: function handleSelect() {},
  onMonthChange: function onMonthChange() {},
  onYearChange: function onYearChange() {},
  onSelectHasDisableDate: function onSelectHasDisableDate() {
    my.alert({
      content: 'SelectHasDisableDate'
    });
  }
});

/***/ }),

/***/ "I8in":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtEvent = __webpack_require__("G+tX");

var _fmtEvent2 = _interopRequireDefault(_fmtEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/amount-input/index",
  usingComponents: __webpack_require__("itF+")

});

Component({
  props: {
    type: 'number',
    className: '',
    focus: false,
    placeholder: '',
    value: '',
    controlled: false
  },
  data: {
    _focus: false
  },
  didMount: function didMount() {
    this.setData({
      _focus: this.props.focus
    });
  },
  didUpdate: function didUpdate(prevProps) {
    var prevFocus = prevProps.focus;
    var nowFocus = this.props.focus;

    if (prevFocus !== nowFocus) {
      this.setData({
        _focus: nowFocus
      });
    }
  },
  methods: {
    onInput: function onInput(e) {
      var event = (0, _fmtEvent2.default)(this.props, e);

      if (this.props.onInput) {
        this.props.onInput(event);
      }
    },
    onConfirm: function onConfirm(e) {
      var event = (0, _fmtEvent2.default)(this.props, e);

      if (this.props.onConfirm) {
        this.props.onConfirm(event);
      }
    },
    onButtonClick: function onButtonClick() {
      if (this.onButtonClick) {
        this.props.onButtonClick();
      }
    },
    onFocus: function onFocus(e) {
      this.setData({
        _focus: true
      });
      var event = (0, _fmtEvent2.default)(this.props, e);

      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
    },
    onBlur: function onBlur(e) {
      this.setData({
        _focus: false
      }); // my.alert({ content: '_focus: ' + this.data._focus });

      var event = (0, _fmtEvent2.default)(this.props, e);

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    },
    onClearTap: function onClearTap() {
      // my.alert({ content: 'manually focus' });
      this.setData({
        _focus: true
      });

      if (this.props.onClear) {
        this.props.onClear();
      }
    }
  }
});

/***/ }),

/***/ "IApJ":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "ICMH":
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

$global.$addPageConfig({
  pagePath: "page/API/websocket/websocket",
  usingComponents: __webpack_require__("vjr+")

});
// 获取应用实例
var app = getApp();

Page({
  data: {
    appid: 'aaaaaaaa',
    websocketServer: '开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名',
    sendMessageAbility: false,
    toSendMessage: 'test',
    closeLinkAbility: false,
    log: ''
  },

  onLoad: function onLoad() {
    var _this = this;

    // 注意： 回调方法的注册在整个小程序启动阶段只要做一次，调多次会有多次回调
    my.onSocketClose(function (res) {
      my.alert({ content: '连接已关闭！' });
      _this.setData({
        sendMessageAbility: false,
        closeLinkAbility: false
      });
    });
    // 注意： 回调方法的注册在整个小程序启动阶段只要做一次，调多次会有多次回调
    my.onSocketOpen(function (res) {
      my.alert({ content: '连接已打开！' });
      _this.setData({
        sendMessageAbility: true,
        closeLinkAbility: true
      });
    });

    my.onSocketError(function (res) {
      my.alert('WebSocket 连接打开失败，请检查！' + res);
    });

    // 注意： 回调方法的注册在整个小程序启动阶段只要做一次，调多次会有多次回调
    my.onSocketMessage(function (res) {
      my.alert({ content: '收到数据！' + JSON.stringify(res) });
    });
  },
  onServerAddressComplete: function onServerAddressComplete(e) {
    this.setData({
      websocketServer: e.detail.value
    });
  },
  onSendMessageReady: function onSendMessageReady(e) {
    this.setData({
      toSendMessage: e.detail.value
    });
  },
  connect_start: function connect_start() {
    my.connectSocket({
      url: this.data.websocketServer, // 开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名
      success: function success(res) {
        my.showToast({
          content: 'success' // 文字内容
        });
      },
      fail: function fail() {
        my.showToast({
          content: 'fail' // 文字内容
        });
      }
    });
  },
  send_start: function send_start() {
    var _this2 = this;

    my.sendSocketMessage({
      data: this.data.toSendMessage, // 需要发送的内容
      success: function success(res) {
        my.alert({ content: '数据发送！' + _this2.data.toSendMessage });
      }
    });
  },
  close_start: function close_start() {
    my.closeSocket();
  }
});

/***/ }),

/***/ "IO+c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("rm7d");
/* harmony import */ var M_1_ = __webpack_require__("GwvB");
/* harmony import */ var M_2_ = __webpack_require__("w92s");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "IRnL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Vnk/");
/* harmony import */ var M_1_ = __webpack_require__("hMQ1");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "IXub":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "IYr+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("40Ut");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "IjBb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("jj4B");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "IjIf":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/mask/index",
  usingComponents: __webpack_require__("HEzK")

});
Component({
  props: {
    maskZindex: '',
    // product: 产品弹窗蒙层；market：营销弹窗蒙层；
    type: 'product',
    onMaskTap: function onMaskTap() {},
    show: true
  },
  methods: {
    onMaskClick: function onMaskClick() {
      var onMaskTap = this.props.onMaskTap;

      if (onMaskTap !== '' && typeof onMaskTap === 'function') {
        onMaskTap();
      }
    }
  }
});

/***/ }),

/***/ "IlTp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("d0TM");
/* harmony import */ var M_1_ = __webpack_require__("2khE");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "ImiU":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("L5X3");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "Inko":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("qB4A");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "Ioxh":
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

$global.$addPageConfig({
  pagePath: "page/API/option-menu/option-menu",
  usingComponents: __webpack_require__("gcOw")

});
Page({
  onOptionMenuClick: function onOptionMenuClick(e) {
    my.alert({
      content: "click option menu with index: " + JSON.stringify(e.data.index)
    });
  }
});

/***/ }),

/***/ "IvJx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("EF3x");
/* harmony import */ var M_1_ = __webpack_require__("Vlff");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "Iz24":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("+AE8");
var ITERATOR = __webpack_require__("mMCp")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),

/***/ "J/uM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0iQm");
/* harmony import */ var M_1_ = __webpack_require__("cyyQ");
/* harmony import */ var M_2_ = __webpack_require__("j88e");
/* harmony import */ var M_3_ = __webpack_require__("lSSr");
/* harmony import */ var M_4_ = __webpack_require__("rxtH");
/* harmony import */ var M_5_ = __webpack_require__("GwvB");
/* harmony import */ var M_6_ = __webpack_require__("tc+Q");
/* harmony import */ var M_7_ = __webpack_require__("LL8X");
/* harmony import */ var M_8_ = __webpack_require__("rm7d");
/* harmony import */ var M_9_ = __webpack_require__("L4qf");
/* harmony import */ var M_9__default = /*#__PURE__*/__webpack_require__.n(M_9_);

  








  
  

/***/ }),

/***/ "J5LZ":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("m+eR");
var core = __webpack_require__("LhLs");
var ctx = __webpack_require__("daId");
var hide = __webpack_require__("Zk7X");
var has = __webpack_require__("cYqa");
var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();
            case 1:
              return new C(a);
            case 2:
              return new C(a, b);
          }return new C(a, b, c);
        }return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
      // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

/***/ }),

/***/ "JL8F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("t6vw");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "JMLp":
/***/ (function(module, exports) {


  module.exports = function (engineIndex, hostGlobal, callback) {
    
    var appXAppJson = hostGlobal.appXAppJson = {
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
    var ua = typeof navigator !== 'undefined' ? navigator.swuserAgent || navigator.userAgent || '' : '';
    if (ua && (ua.indexOf('LyraVM') > 0 || ua.indexOf('AlipayIDE') > 0)) {
      var AFAppX = hostGlobal.AFAppX.getAppContext ? hostGlobal.AFAppX.getAppContext().AFAppX : hostGlobal.AFAppX;
    } else {
      var AFAppX = hostGlobal.AFAppX;
    }
    
    hostGlobal.getCurrentPages = AFAppX.getCurrentPages;
    hostGlobal.getApp = AFAppX.getApp;
    hostGlobal.Page = AFAppX.Page;
    hostGlobal.App = AFAppX.App;
    hostGlobal.my = AFAppX.bridge || AFAppX.abridge;
    hostGlobal.abridge = hostGlobal.my;
    hostGlobal.Component = AFAppX.WorkerComponent || function () {};
    var $global = hostGlobal.$global = AFAppX.$global || (AFAppX.$global = {});
    if (hostGlobal.global === undefined) { hostGlobal.global = hostGlobal; }
    var addPageConfig = function () {
      var config = arguments[engineIndex];
      $global.currentPageConfig = config;
    };
    var addComponentConfig = function () {
      var config = arguments[engineIndex];
      $global.currentComponentConfig = config;
    }
    hostGlobal.$global.$addPageConfig = addPageConfig;
    hostGlobal.$global.$addComponentConfig = addComponentConfig;
    hostGlobal.requirePlugin = AFAppX.requirePlugin;
    if(AFAppX.registerApp) {
      AFAppX.registerApp({
        appJSON: appXAppJson,
      });
    }
    
      var success = function () {
        /*! 
[PositionForHostUserCodeBegin]*/ !(function(){/**! __CODEPLACEHOLDER_START__ */ /*[PositionForHostUserCodeBegin]*/ /**! __CODEPLACEHOLDER_END__ */})(); /*
 */
        callback();
      }
      hostGlobal.bootstrapApp ? hostGlobal.bootstrapApp({ success: success }) : success();
      
  }
  

/***/ }),

/***/ "JNOu":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "JSOC":
/***/ (function(module, exports) {

module.exports = {"filter":"/node_modules/mini-ali-ui/es/filter/index","filter-item":"/node_modules/mini-ali-ui/es/filter/filter-item/index"}

/***/ }),

/***/ "JUyQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtClass2 = __webpack_require__("1UR/");

var _fmtClass3 = _interopRequireDefault(_fmtClass2);

var _fmtEvent = __webpack_require__("G+tX");

var _fmtEvent2 = _interopRequireDefault(_fmtEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/button/index",
  usingComponents: __webpack_require__("a1/B")

});

var SUPPORT_COMPONENT2 = my.canIUse('component2');
var prefixCls = 'am-button';

var noop = function noop() {};

Component({
  mixins: [],
  data: {
    baseClass: prefixCls
  },
  props: {
    className: '',
    type: '',
    dataName: '',
    disabled: false,
    subtitle: '',
    onTap: noop,
    capsuleMinWidth: false,
    showLoading: false
  },
  onInit: function onInit() {
    if (!this.props.hoverClass) {
      this.props.hoverClass = 'am-button-active';

      if (this.props.type === 'text') {
        this.props.hoverClass = 'am-button-active-text';
      }
    }

    this.setData({
      baseClass: this.wrapBaseCls(this.props),
      hoverClass: this.props.hoverClass
    });
  },
  deriveDataFromProps: function deriveDataFromProps(nextProps) {
    if (this.propsChange(this.props, nextProps)) {
      this.setData({
        baseClass: this.wrapBaseCls(nextProps)
      });
    }
  },
  didMount: function didMount() {
    if (!SUPPORT_COMPONENT2) {
      if (!this.props.hoverClass) {
        this.props.hoverClass = 'am-button-active';

        if (this.props.type === 'text') {
          this.props.hoverClass = 'am-button-active-text';
        }
      }

      this.setData({
        baseClass: this.wrapBaseCls(this.props),
        hoverClass: this.props.hoverClass
      });
    }
  },
  didUpdate: function didUpdate(prevProps) {
    if (!SUPPORT_COMPONENT2 && this.propsChange(prevProps, this.props)) {
      this.setData({
        baseClass: this.wrapBaseCls(this.props)
      });
    }
  },
  didUnmount: function didUnmount() {},
  methods: {
    wrapBaseCls: function wrapBaseCls(props) {
      var _fmtClass;

      var type = props.type,
          disabled = props.disabled,
          subtitle = props.subtitle,
          shape = props.shape,
          _props$capsuleSize = props.capsuleSize,
          capsuleSize = _props$capsuleSize === void 0 ? 'medium' : _props$capsuleSize,
          capsuleMinWidth = props.capsuleMinWidth;
      var capsuleMinWidthCls = '';

      if (capsuleMinWidth) {
        capsuleMinWidthCls = prefixCls + "-capsule-" + capsuleSize + "-minwidth";
      }

      var ret = (0, _fmtClass3.default)((_fmtClass = {}, _fmtClass["" + prefixCls] = true, _fmtClass[prefixCls + "-primary"] = type === 'primary', _fmtClass[prefixCls + "-ghost"] = type === 'ghost', _fmtClass[prefixCls + "-warn"] = type === 'warn', _fmtClass[prefixCls + "-warn-ghost"] = type === 'warn-ghost', _fmtClass[prefixCls + "-text"] = type === 'text', _fmtClass[prefixCls + "-light"] = type === 'light', _fmtClass[prefixCls + "-capsule " + prefixCls + "-capsule-" + capsuleSize + " " + capsuleMinWidthCls] = shape === 'capsule', _fmtClass[prefixCls + "-disabled"] = disabled, _fmtClass[prefixCls + "-subtitle"] = subtitle, _fmtClass));
      return ret;
    },
    onButtonTap: function onButtonTap(e) {
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onTap(event);
    },
    propsChange: function propsChange(prevProps, nextProps) {
      var pProps = Object.getOwnPropertyNames(prevProps);
      var nProps = Object.getOwnPropertyNames(nextProps);

      if (pProps.length !== nProps.length) {
        return true;
      }

      for (var i = 0; i < pProps.length; i++) {
        var propName = pProps[i];

        if (prevProps[propName] !== nextProps[propName]) {
          return true;
        }
      }

      return false;
    }
  }
});

/***/ }),

/***/ "JZRo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0iQm");
/* harmony import */ var M_1_ = __webpack_require__("cyyQ");
/* harmony import */ var M_2_ = __webpack_require__("lSSr");
/* harmony import */ var M_3_ = __webpack_require__("rxtH");
/* harmony import */ var M_4_ = __webpack_require__("GwvB");
/* harmony import */ var M_5_ = __webpack_require__("wdmQ");
/* harmony import */ var M_6_ = __webpack_require__("Y61U");
/* harmony import */ var M_7_ = __webpack_require__("rm7d");
/* harmony import */ var M_8_ = __webpack_require__("LL8X");
/* harmony import */ var M_9_ = __webpack_require__("tc+Q");
/* harmony import */ var M_10_ = __webpack_require__("OyqK");
/* harmony import */ var M_10__default = /*#__PURE__*/__webpack_require__.n(M_10_);

  









  
  

/***/ }),

/***/ "JeuR":
/***/ (function(module, exports) {

module.exports = {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"}

/***/ }),

/***/ "JjAg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("q4PB");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "JuBZ":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "Jymt":
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

$global.$addPageConfig({
    pagePath: "page/API/multi-level-select/multi-level-select",
    usingComponents: __webpack_require__("GTY8")

});
Page({
    openMultiLevelSelect: function openMultiLevelSelect() {
        my.multiLevelSelect({
            title: '多级联选择器', //级联选择标题
            list: [{
                name: "杭州市", //条目名称
                subList: [{
                    name: "西湖区",
                    subList: [{
                        name: "古翠街道"
                    }, {
                        name: "文新街道"
                    }]
                }, {
                    name: "上城区",
                    subList: [{
                        name: "延安街道"
                    }, {
                        name: "龙翔桥街道"
                    }]
                }] //级联子数据列表
            }], //级联数据列表
            success: function success(res) {
                my.alert({ title: JSON.stringify(res) });
            }
        });
    }
});

/***/ }),

/***/ "JzIF":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "K/+A":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "K4/D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fmtUnit; });
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
var jsUnitRpx = 'false';
/* eslint-disable no-continue, prefer-spread */

function fmtUnit(oldUnit) {
  var getUnit = oldUnit;

  if (jsUnitRpx === 'true') {
    if (typeof getUnit === 'string' && getUnit === 'px') {
      getUnit = 'rpx';
    } else if (typeof getUnit === 'number') {
      getUnit *= 2;
    } else if (typeof getUnit === 'string') {
      getUnit = oldUnit.match(/(\d+|\d+\.\d+)(px)/)[1] * 2 + 'rpx';
    }
  }

  return getUnit;
}

/***/ }),

/***/ "K6dJ":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/list/alphabet/index",
  usingComponents: __webpack_require__("NVCl")

});
Component({
  props: {
    alphabet: []
  },
  data: {
    current: -1
  },
  didMount: function didMount() {
    this._updateDataSet();
  },
  didUpdate: function didUpdate() {
    this._updateDataSet();
  },
  methods: {
    _updateDataSet: function _updateDataSet() {
      this.dataset = {};

      for (var key in this.props) {
        if (/data-/gi.test(key)) {
          this.dataset[key.replace(/data-/gi, '')] = this.props[key];
        }
      }
    },
    onItemTap: function onItemTap(ev) {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled;

      if (onClick && !disabled) {
        onClick({
          data: ev.target.dataset,
          target: {
            dataset: this.dataset
          }
        });
      }
    },
    onTouchStart: function onTouchStart(ev) {
      var disabled = this.props.disabled;

      if (!disabled) {
        this.setData({
          current: ev.target.dataset.index
        });
      }
    },
    onTouchEnd: function onTouchEnd() {
      this.setData({
        current: -1
      });
    }
  }
});

/***/ }),

/***/ "KHtY":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/notice/index",
  usingComponents: __webpack_require__("i4cD")

});
var noop = function noop() {};

var canIUseTransitionEnd = my.canIUse('view.onTransitionEnd');
Component({
  props: {
    className: '',
    mode: '',
    // closable,link
    action: '',
    // 文本按钮
    actionLeft: '',
    // 文本按钮
    show: true,
    // 是否显示
    enableMarquee: false,
    // 是否开启marquee
    onClick: function onClick() {},
    onClickLeft: function onClickLeft() {},
    marqueeProps: {
      loop: false,
      leading: 500,
      trailing: 800,
      fps: 40
    },
    capsuleItem: [],
    showIcon: true,
    type: 'normal',
    // 通告栏类型： normal/error/active
    capsule: false,
    // 是否为胶囊型通告栏
    transparent: false
  },
  data: {
    animatedWidth: 0,
    overflowWidth: 0,
    duration: 0,
    marqueeStyle: '',
    canIUseTransitionEnd: canIUseTransitionEnd,
    showShadow: true
  },
  didMount: function didMount() {
    if (this.props.enableMarquee) {
      if (!canIUseTransitionEnd) {
        this._measureText();

        this._startAnimation();
      } else {
        this._measureText(this.startMarquee.bind(this));
      }
    }

    if (this.props.type === 'active' && this.props.transparent) {
      this.setData({
        showShadow: false
      });
    } else {
      this.setData({
        showShadow: true
      });
    }
  },
  didUpdate: function didUpdate() {
    if (this.props.type === 'active' && this.props.transparent) {
      this.setData({
        showShadow: false
      });
    } else {
      this.setData({
        showShadow: true
      });
    } // 这里更新处理的原因是防止notice内容在动画过程中发生改变。


    if (!canIUseTransitionEnd) {
      this._measureText();
    }

    if (this.props.enableMarquee && !this._marqueeTimer && !canIUseTransitionEnd) {
      this._measureText();

      this._startAnimation();
    } else {
      // 当通过脚本切换 show 的值时（true or false），导致跑马灯动画效果失效的 bug 处理
      if (!this.props.show) {
        this.setData({
          marqueeStyle: ''
        });
      }

      this._measureText(this.startMarquee.bind(this));
    }
  },
  didUnmount: function didUnmount() {
    if (this._marqueeTimer) {
      clearTimeout(this._marqueeTimer);
      this._marqueeTimer = null;
    }
  },
  methods: {
    resetMarquee: function resetMarquee() {
      var marqueeStyle = 'transform: translateX(0px); transition: 0s all linear;';
      this.setData({
        marqueeStyle: marqueeStyle
      });
    },
    startMarquee: function startMarquee() {
      var _this$props$marqueePr = this.props.marqueeProps.leading,
          leading = _this$props$marqueePr === void 0 ? 500 : _this$props$marqueePr;
      var _this$data = this.data,
          duration = _this$data.duration,
          overflowWidth = _this$data.overflowWidth;
      var marqueeStyle = "transform: translateX(" + -overflowWidth + "px); transition: " + duration + "s all linear " + (typeof leading === 'number' ? leading / 1000 + "s" : '0s') + ";";
      this.setData({
        marqueeStyle: marqueeStyle
      });
    },
    onTransitionEnd: function onTransitionEnd() {
      var _this = this;

      var _this$props$marqueePr2 = this.props.marqueeProps,
          _this$props$marqueePr3 = _this$props$marqueePr2.loop,
          loop = _this$props$marqueePr3 === void 0 ? false : _this$props$marqueePr3,
          _this$props$marqueePr4 = _this$props$marqueePr2.trailing,
          trailing = _this$props$marqueePr4 === void 0 ? 800 : _this$props$marqueePr4;

      if (loop) {
        setTimeout(function () {
          _this.resetMarquee();

          _this._measureText(_this.startMarquee.bind(_this));
        }, typeof trailing === 'number' ? trailing : 0);
      }
    },
    _measureText: function _measureText(callback) {
      var _this2 = this;

      if (callback === void 0) {
        callback = noop;
      }

      var _this$props$marqueePr5 = this.props.marqueeProps.fps,
          fps = _this$props$marqueePr5 === void 0 ? 40 : _this$props$marqueePr5; // 计算文本所占据的宽度，计算需要滚动的宽度

      my.createSelectorQuery().select(".am-notice-marquee-" + this.$id).boundingClientRect().select(".am-notice-content-" + this.$id).boundingClientRect().exec(function (ret) {
        var overflowWidth = ret && ret[0] && ret[1] && ret[0].width - ret[1].width || 0;

        if (overflowWidth > 0) {
          _this2.setData({
            overflowWidth: overflowWidth,
            duration: overflowWidth / fps
          });

          callback();
        }
      });
    },
    _startAnimation: function _startAnimation() {
      var _this3 = this;

      if (this._marqueeTimer) {
        clearTimeout(this._marqueeTimer);
      }

      var _this$props$marqueePr6 = this.props.marqueeProps,
          _this$props$marqueePr7 = _this$props$marqueePr6.loop,
          loop = _this$props$marqueePr7 === void 0 ? false : _this$props$marqueePr7,
          _this$props$marqueePr8 = _this$props$marqueePr6.leading,
          leading = _this$props$marqueePr8 === void 0 ? 500 : _this$props$marqueePr8,
          _this$props$marqueePr9 = _this$props$marqueePr6.trailing,
          trailing = _this$props$marqueePr9 === void 0 ? 800 : _this$props$marqueePr9,
          _this$props$marqueePr10 = _this$props$marqueePr6.fps,
          fps = _this$props$marqueePr10 === void 0 ? 40 : _this$props$marqueePr10;
      var TIMEOUT = 1 / fps * 1000;
      var isLeading = this.data.animatedWidth === 0;
      var timeout = isLeading ? leading : TIMEOUT;

      var animate = function animate() {
        var overflowWidth = _this3.data.overflowWidth;
        var animatedWidth = _this3.data.animatedWidth + 1;
        var isRoundOver = animatedWidth > overflowWidth;

        if (isRoundOver) {
          if (loop) {
            animatedWidth = 0;
          } else {
            return;
          }
        }

        if (isRoundOver && trailing) {
          _this3._marqueeTimer = setTimeout(function () {
            _this3.setData({
              animatedWidth: animatedWidth
            });

            _this3._marqueeTimer = setTimeout(animate, TIMEOUT);
          }, trailing);
        } else {
          _this3.setData({
            animatedWidth: animatedWidth
          });

          _this3._marqueeTimer = setTimeout(animate, TIMEOUT);
        }
      };

      if (this.data.overflowWidth !== 0) {
        this._marqueeTimer = setTimeout(animate, timeout);
      }
    },
    onNoticeTap: function onNoticeTap() {
      var _this$props = this.props,
          capsule = _this$props.capsule,
          mode = _this$props.mode,
          action = _this$props.action,
          actionLeft = _this$props.actionLeft,
          onClick = _this$props.onClick;

      if (capsule && typeof onClick === 'function' || mode === 'link' && actionLeft === '' && action === '' && typeof onClick === 'function') {
        onClick();
      }
    },
    onOperationTap: function onOperationTap() {
      var _this$props2 = this.props,
          mode = _this$props2.mode,
          action = _this$props2.action,
          onClick = _this$props2.onClick;

      if ((mode || action !== '') && typeof onClick === 'function') {
        onClick();
      }
    },
    onActionLeftTap: function onActionLeftTap() {
      var _this$props3 = this.props,
          actionLeft = _this$props3.actionLeft,
          onClickLeft = _this$props3.onClickLeft;

      if (actionLeft !== '' && typeof onClickLeft === 'function') {
        onClickLeft();
      }
    }
  }
});

/***/ }),

/***/ "KQsT":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "KWpK":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "KX0W":
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

$global.$addPageConfig({
  pagePath: "page/component/view/view",
  usingComponents: __webpack_require__("+C9x")

});
Page({
  data: {
    pageName: 'component/view'
  },
  onLoad: function onLoad() {
    this.setData({
      returnIndex: getCurrentPages().length === 1
    });
  },
  returnIndex: function returnIndex() {
    my.switchTab({ url: '/page/tabBar/component/index' });
  }
});

/***/ }),

/***/ "KZoE":
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

$global.$addPageConfig({
  pagePath: "page/API/share/share",
  usingComponents: __webpack_require__("hZzL")

});
Page({
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: '分享 View 组件',
      desc: 'View 组件很通用',
      path: 'page/component/view/view'
    };
  }
});

/***/ }),

/***/ "KcKR":
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

$global.$addPageConfig({
  pagePath: "page/component/steps/steps",
  usingComponents: __webpack_require__("7Ouh")

});
Page({
  data: {
    activeIndex: 1,
    failIndex: 0,
    size: 0,
    items: [{
      title: '步骤1'
    }, {
      title: '步骤2'
    }, {
      title: '步骤3'
    }],
    items2: [{
      title: '步骤1',
      description: '这是步骤1的描述文档，文字足够多的时候会换行，设置了成功的icon',
      activeIcon: 'https://i.alipayobjects.com/common/favicon/favicon.ico',
      size: 20
    }, {
      title: '步骤2 如果标题足够长的话也会换行的',
      description: '这是步骤2，同时设置了两种状态的icon',
      icon: 'https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*lVojToO-qZIAAAAAAAAAAABjAQAAAQ/original',
      activeIcon: 'https://i.alipayobjects.com/common/favicon/favicon.ico'
    }, {
      title: '步骤3',
      description: '这是步骤3'
    }, {
      title: '步骤4',
      description: '不超过六个字'
    }]
  },
  nextStep: function nextStep() {
    this.setData({
      activeIndex: this.data.activeIndex + 1
    });
  },
  preStep: function preStep() {
    this.setData({
      activeIndex: this.data.activeIndex - 1
    });
  },
  setFailIndex: function setFailIndex() {
    this.setData({
      failIndex: 3
    });
  },
  cancelFailIndex: function cancelFailIndex() {
    this.setData({
      failIndex: 0
    });
  },
  setIconSizeAdd: function setIconSizeAdd() {
    this.setData({
      size: this.data.size < 30 && this.data.size > 14 ? this.data.size + 1 : 15
    });
  },
  setIconSizeReduce: function setIconSizeReduce() {
    this.setData({
      size: this.data.size > 15 ? this.data.size - 1 : 15
    });
  }
});

/***/ }),

/***/ "KdZH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("msZj");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "Kfmk":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "KiJc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("jPRL");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "KliJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("46rZ");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "L4qf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends3 = __webpack_require__("XkMr");

var _extends4 = _interopRequireDefault(_extends3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addPageConfig({
  pagePath: "page/component/list/list",
  usingComponents: __webpack_require__("1NO0")

});
// const imgUrl = '';
var newitems = [{
  thumb: 'https://gw.alipayobjects.com/zos/rmsportal/KXDIRejMrRdKlSEcLseB.png',
  title: '固定到头部',
  arrow: true,
  sticky: true
}, {
  title: '标题文字不换行很长很长很长很长很长很长很长很长很长很长',
  arrow: true
}, {
  title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
  arrow: true,
  textMode: 'wrap'
}, {
  title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
  extra: '没有箭头',
  textMode: 'wrap'
}, {
  title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
  extra: '子元素垂直对齐',
  textMode: 'wrap',
  align: 'top'
}, {
  title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
  arrow: true,
  textMode: 'wrap'
}, {
  title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
  extra: '没有箭头',
  textMode: 'wrap'
}, {
  title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
  extra: '子元素垂直对齐',
  textMode: 'wrap',
  align: 'top'
}, {
  title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
  arrow: true,
  textMode: 'wrap'
}, {
  title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
  extra: '没有箭头',
  textMode: 'wrap'
}, {
  title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
  extra: '子元素垂直对齐',
  textMode: 'wrap',
  align: 'top'
}, {
  title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
  arrow: true,
  textMode: 'wrap'
}, {
  title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
  extra: '没有箭头',
  textMode: 'wrap'
}, {
  title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
  extra: '子元素垂直对齐',
  textMode: 'wrap',
  align: 'top'
}];
Page({
  data: {
    items: [{
      title: '单行列表1',
      extra: '详细信息',
      arrow: true
    }, {
      title: '单行列表2',
      extra: '+20.08',
      arrow: true,
      enforceExtra: true
    }, {
      title: '单行开关3',
      actionType: 'switch',
      index: 'switch',
      lineTouchable: false
    }, {
      title: '单行选项4',
      actionType: 'check',
      // actionValue: false,
      index: 'check'
    }, {
      title: '单行列表5',
      actionType: 'capsule',
      capsuleContent: '胶囊按钮'
    }],
    items2: [{
      title: '列表组',
      arrow: true
    }, {
      title: '列表组'
    }, {
      title: '列表组'
    }, {
      title: '列表组'
    }, {
      title: '列表组'
    }],
    items3: [{
      title: '双行列表',
      brief: '描述信息',
      arrow: true
    }],
    items4: [{
      title: '三行列表',
      upperSubtitle: '上副标题',
      lowerSubtitle: '下副标题',
      titlePosition: 'top',
      arrow: true
    }, {
      title: '三行列表',
      upperSubtitle: '上副标题',
      lowerSubtitle: '下副标题',
      titlePosition: 'middle',
      arrow: true
    }, {
      title: '三行列表',
      upperSubtitle: '上副标题',
      lowerSubtitle: '下副标题',
      titlePosition: 'bottom',
      arrow: true
    }],
    itemsThumb: [{
      thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
      title: '标题文字',
      extra: '描述文字',
      arrow: true
    }, {
      thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
      title: '标题文字',
      arrow: true
    }, {
      thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
      title: '标题文字',
      arrow: true
    }],
    itemsThumbMultiple: [{
      thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
      title: '标题文字',
      brief: '描述信息',
      arrow: true
    }, {
      thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
      title: '标题文字'
    }, {
      thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
      title: '标题文字'
    }],
    items5: [{
      thumb: 'https://gw.alipayobjects.com/zos/rmsportal/KXDIRejMrRdKlSEcLseB.png',
      title: '固定到头部',
      brief: '描述信息',
      arrow: true,
      sticky: true
    }, {
      title: '标题文字不换行很长很长很长很长很长很长很长很长很长很长',
      arrow: true,
      align: 'middle'
    }, {
      title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
      arrow: true,
      align: 'top'
    }, {
      title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
      extra: '没有箭头',
      align: 'bottom'
    }, {
      title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
      extra: '子元素垂直对齐',
      align: 'top'
    }, {
      title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
      arrow: true
    }, {
      title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
      extra: '没有箭头'
    }, {
      title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
      extra: '子元素垂直对齐',
      align: 'top'
    }, {
      title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
      arrow: true
    }, {
      title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
      extra: '没有箭头'
    }, {
      title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
      extra: '子元素垂直对齐',
      align: 'top'
    }, {
      title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
      arrow: true
    }, {
      title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
      extra: '没有箭头'
    }, {
      title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
      extra: '子元素垂直对齐',
      align: 'middle'
    }],
    loadMore: '',
    loadContent: ['马不停蹄加载更多数据中...', '-- 已经到底了，加不了咯 --'],
    maxList: 5,
    switchValues: {
      // switch: true,
      // check: false,
    },
    checkValues: {},
    thumb: 'https://gw-office.alipayobjects.com/basement_prod/47775269-5c8e-40b8-bcda-43380022f311.jpg',
    changeCheckbox: true,
    changeSwitch: true
  },
  onLoad: function onLoad() {
    var charCode = 65;
    var charList = [];
    for (var i = 0; i < 26; i++) {
      charList.push(String.fromCharCode(charCode + i));
    }
    this.setData({
      alphabet: charList
    });
  },
  onItemClick: function onItemClick(ev) {
    if (ev.detail && ev.index === 'check') {
      var _extends2;

      this.setData({
        actionValues: (0, _extends4.default)({}, this.data.actionValues, (_extends2 = {}, _extends2[ev.index] = ev.detail.value, _extends2))
      });
    } else {
      my.alert({
        content: "\u70B9\u51FB\u4E86\u7B2C" + ev.index + "\u884C"
      });
    }
  },
  onSwitchClick: function onSwitchClick() {
    this.setData({
      changeSwitch: !this.data.changeSwitch
    });
    my.alert({
      content: 'switch changed'
    });
  },
  onCheckClick: function onCheckClick() {
    this.setData({
      changeCheckbox: !this.data.changeCheckbox
    });
    my.alert({
      content: 'checkbox changed'
    });
  },
  onCapsuleClick: function onCapsuleClick() {
    my.alert({
      content: 'capsule button click'
    });
  },
  onScrollToLower: function onScrollToLower() {
    this.setData({
      loadMore: 'load'
    });
    var items5 = this.data.items5;
    // 加入 maxList 用于判断“假设”数据加载完毕后的情况

    if (this.data.maxList > 0) {
      var newItems = items5.concat(newitems);
      var MAXList = this.data.maxList - 1;
      this.setData({
        items5: newItems,
        maxList: MAXList
      });
    } else {
      // 数据加载完毕之后，改变 loadMore 为 over 即可
      this.setData({
        loadMore: 'over'
      });
    }
  },
  onAlphabetClick: function onAlphabetClick(ev) {
    my.alert({
      content: JSON.stringify(ev.data)
    });
  }
});

/***/ }),

/***/ "L5X3":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "L7nx":
/***/ (function(module, exports) {

module.exports = {"list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index"}

/***/ }),

/***/ "LL8X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("8Rhk");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "LLji":
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

$global.$addPageConfig({
    pagePath: "page/API/show-auth-guide/show-auth-guide",
    usingComponents: __webpack_require__("sbh2")

});
Page({
    showAuthGuide: function showAuthGuide() {
        my.showAuthGuide({
            bizType: 'AppletPG',
            authType: 'LBS',
            success: function success(res) {
                //shown为true时表示会显示权限引导弹窗，为false时表示用户已经授权
                my.alert({ content: '调用成功：' + JSON.stringify(res) });
            },
            fail: function fail(error) {
                my.alert({ content: '调用失败：' + JSON.stringify(error) });
            }
        });
    }
});

/***/ }),

/***/ "LRCr":
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

$global.$addPageConfig({
  pagePath: "page/tabBar/API/index",
  usingComponents: __webpack_require__("wBon"),
  tabIndex: 11

});
var openAPIList = [{
  name: '获取授权码',
  path: '/page/API/get-auth-code/get-auth-code'
}];

if (my.ap) {
  openAPIList = openAPIList.concat([{
    name: '获取用户信息',
    path: '/page/API/get-user-info/get-user-info'
  }, {
    name: '发起支付',
    path: '/page/API/request-payment/request-payment'
  }, {
    name: '支付宝卡包',
    path: '/page/API/card-pack/card-pack'
  }, {
    name: '芝麻信用借还',
    path: '/page/API/zm-credit-borrow/zm-credit-borrow'
  }]);

  if (my.canIUse('isCollected')) {
    openAPIList = openAPIList.concat([{
      name: '收藏',
      path: '/page/API/favorite/favorite'
    }]);
  }

  if (my.canIUse('textRiskIdentification')) {
    openAPIList = openAPIList.concat([{
      name: '文本风险识别',
      path: '/page/API/text-risk-identification/text-risk-identification'
    }]);
  }
  if (my.canIUse('generateImageFromCode')) {
    openAPIList = openAPIList.concat([{
      name: '生成二维码',
      path: '/page/API/generate-image-from-code/generate-image-from-code'
    }]);
  }
}

var interfaceList = [{
  name: '警告框',
  path: '/page/API/alert/alert'
}, {
  name: '确认框',
  path: '/page/API/confirm/confirm'
}, {
  name: '弱提示',
  path: '/page/API/toast/toast'
}, {
  name: '加载提示',
  path: '/page/API/loading/loading'
}, {
  name: '操作菜单',
  path: '/page/API/action-sheet/action-sheet'
}, {
  name: '设置界面导航栏',
  path: '/page/API/set-navigation-bar/set-navigation-bar'
}, {
  name: '设置optionMenu',
  path: '/page/API/option-menu/option-menu'
}, {
  name: '页面跳转',
  path: '/page/API/navigator/navigator'
}, {
  name: '下拉刷新',
  path: '/page/API/pull-down-refresh/pull-down-refresh'
}, {
  name: '创建动画',
  path: '/page/API/animation/animation'
}, {
  name: '创建绘画',
  path: '/page/API/canvas/canvas'
}, {
  name: '选择日期',
  path: '/page/API/date-picker/date-picker'
}, {
  name: '滚动页面',
  path: '/page/API/page-scroll-to/page-scroll-to'
}, {
  name: '节点查询',
  path: '/page/API/create-selector-query/create-selector-query'
}];

if (my.ap) {
  interfaceList = interfaceList.concat([{
    name: '联系人',
    path: '/page/API/contact/contact'
  }, {
    name: '标题栏加载动画',
    path: '/page/API/navigation-bar-loading/navigation-bar-loading'
  }, {
    name: '选择城市',
    path: '/page/API/choose-city/choose-city'
  }, {
    name: '隐藏键盘',
    path: '/page/API/keyboard/keyboard'
  }]);

  if (my.canIUse('multiLevelSelect')) {
    interfaceList = interfaceList.concat([{
      name: '级联选择',
      path: '/page/API/multi-level-select/multi-level-select'
    }]);
  }

  if (my.canIUse('optionsSelect')) {
    interfaceList = interfaceList.concat([{
      name: '选项选择器',
      path: '/page/API/options-select/options-select'
    }]);
  }

  if (my.canIUse('getTitleColor')) {
    interfaceList = interfaceList.concat([{
      name: '获取导航栏背景颜色',
      path: '/page/API/get-title-color/get-title-color'
    }]);
  }
}

var deviceAPIList = [{
  name: '获取手机网络状态',
  path: '/page/API/get-network-type/get-network-type'
}, {
  name: '获取手机系统信息',
  path: '/page/API/get-system-info/get-system-info'
}, {
  name: '振动',
  path: '/page/API/vibrate/vibrate'
}, {
  name: '剪贴板',
  path: '/page/API/clipboard/clipboard'
}];

if (my.ap) {
  deviceAPIList = deviceAPIList.concat([{
    name: '获取基础版本库',
    path: '/page/API/sdk-version/sdk-version'
  }, {
    name: '屏幕亮度',
    path: '/page/API/screen/screen'
  }, {
    name: '摇一摇',
    path: '/page/API/watch-shake/watch-shake'
  }, {
    name: '拨打电话',
    path: '/page/API/make-phone-call/make-phone-call'
  }, {
    name: '用户截屏事件',
    path: '/page/API/user-capture-screen/user-capture-screen'
  }, {
    name: '获取服务器时间',
    path: '/page/API/get-server-time/get-server-time'
  }, {
    name: '内存不足告警',
    path: '/page/API/memory-warning/memory-warning'
  }]);
}

var networkAPIList = [{
  name: '发起HTTP请求',
  path: '/page/API/request/request'
}, {
  name: '上传文件',
  path: '/page/API/upload-file/upload-file'
}, {
  name: '下载文件',
  path: '/page/API/download-file/download-file'
}, {
  name: 'Websocket',
  path: '/page/API/websocket/websocket'
}];

var mediaAPIList = [{
  name: '图片',
  path: '/page/API/image/image'
}, {
  name: '获取图片信息',
  path: '/page/API/get-image-info/get-image-info'
}, {
  name: '压缩图片',
  path: '/page/API/compress-image/compress-image'
}];

var locationAPIList = [{
  name: '获取当前位置',
  path: '/page/API/get-location/get-location'
}, {
  name: '使用原生地图查看位置',
  path: '/page/API/open-location/open-location'
}, {
  name: '打开地图选择位置',
  path: '/page/API/choose-location/choose-location'
}];

var otherAPIList = [{
  name: '缓存',
  path: '/page/API/storage/storage'
}, {
  name: '扫码 Scan',
  path: '/page/API/scan-code/scan-code'
}, {
  name: '自定义分享',
  path: '/page/API/share/share'
}];

if (my.ap) {
  otherAPIList = otherAPIList.concat([{
    name: '文件',
    path: '/page/API/file/file'
  }, {
    name: '蓝牙',
    path: '/page/API/bluetooth/bluetooth'
  }, {
    name: '数据安全',
    path: '/page/API/rsa/rsa'
  }, {
    name: '自定义分析',
    path: '/page/API/report-analytics/report-analytics'
  }]);

  if (my.canIUse('on')) {
    otherAPIList = otherAPIList.concat([{
      name: '容器事件',
      path: '/page/API/events/events'
    }]);
  }

  if (my.canIUse('ocr')) {
    otherAPIList = otherAPIList.concat([{
      name: 'OCR',
      path: '/page/API/ocr/ocr'
    }]);
  }
}

var APIList = [{
  type: '开放接口',
  list: openAPIList
}, {
  type: '界面',
  list: interfaceList
}, {
  type: '设备',
  list: deviceAPIList
}, {
  type: '网络',
  list: networkAPIList
}, {
  type: '多媒体',
  list: mediaAPIList
}, {
  type: '位置',
  list: locationAPIList
}, {
  type: '其他',
  list: otherAPIList
}];

Page({
  data: {
    APIList: APIList
  },
  onSearchBarTap: function onSearchBarTap() {
    my.navigateTo({
      url: '/page/common/search/search'
    });
  },
  openPage: function openPage(e) {
    my.navigateTo({
      url: e.target.dataset.url
    });
  }
});

/***/ }),

/***/ "Lffu":
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

$global.$addPageConfig({
  pagePath: "page/component/flex/flex",
  usingComponents: __webpack_require__("0PA7")

});
Page({});

/***/ }),

/***/ "LhLs":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "Lnpd":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "LtJz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Vnk/");
/* harmony import */ var M_1_ = __webpack_require__("uzu+");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "LuSL":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("rZc7");
var ITERATOR = __webpack_require__("mMCp")('iterator');
var Iterators = __webpack_require__("+AE8");
module.exports = __webpack_require__("LhLs").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ "Lw0p":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtUnit = __webpack_require__("K4/D");

var _fmtUnit2 = _interopRequireDefault(_fmtUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/footer/index",
  usingComponents: __webpack_require__("mVrO")

});

Component({
  props: {
    className: '',
    // normal: 基础样式；
    // guide：文案加引导；
    // copyright：声明；
    // brand：带品牌；
    // link：带链接
    // end: 没有更多
    type: 'normal',
    content: '',
    extend: [],
    onBrandTap: function onBrandTap() {},
    showEndIcon: false,
    iconName: 'selected'
  },
  data: {
    defaultSize: (0, _fmtUnit2.default)(18),
    maxSize: (0, _fmtUnit2.default)(22),
    valueUnit: (0, _fmtUnit2.default)('px')
  },
  methods: {
    onBrandClick: function onBrandClick(e) {
      var brandLink = e.currentTarget.dataset.url;
      var _this$props = this.props,
          onBrandTap = _this$props.onBrandTap,
          extend = _this$props.extend;

      if (onBrandTap !== '' && brandLink) {
        my.navigateTo({
          url: brandLink
        });
      }

      if (onBrandTap !== '' && !brandLink && typeof onBrandTap === 'function') {
        onBrandTap(extend[e.currentTarget.dataset.index]);
      }
    }
  }
});

/***/ }),

/***/ "Lxwb":
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

$global.$addPageConfig({
  pagePath: "page/component/pagination/index",
  usingComponents: __webpack_require__("no/F")

});
Page({});

/***/ }),

/***/ "MEoJ":
/***/ (function(module, exports) {

module.exports = {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "MNuM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("FweV");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "MSFD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtUnit = __webpack_require__("K4/D");

var _fmtUnit2 = _interopRequireDefault(_fmtUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/stepper/index",
  usingComponents: __webpack_require__("9D0o")

});

Component({
  data: {
    opaReduce: 1,
    opaAdd: 1
  },
  props: {
    className: '',
    min: 0,
    max: 100000,
    disabled: false,
    value: 10,
    readOnly: false,
    showNumber: false,
    inputWidth: (0, _fmtUnit2.default)('36px'),
    step: 1,
    onChange: function onChange() {}
  },
  didMount: function didMount() {
    var _this$props = this.props,
        value = _this$props.value,
        min = _this$props.min,
        max = _this$props.max;
    this.setData({
      value: Math.min(Math.max(min, value), max)
    });
  },
  didUpdate: function didUpdate(preProps) {
    var _this$props2 = this.props,
        value = _this$props2.value,
        min = _this$props2.min,
        max = _this$props2.max;

    if (preProps.value !== value) {
      var newValue = Math.min(Math.max(min, value), max);
      this.setData({
        value: newValue
      });
      this.resetFn(newValue);
    }
  },
  methods: {
    changeFn: function changeFn(ev) {
      var _this$props3 = this.props,
          min = _this$props3.min,
          max = _this$props3.max,
          onChange = _this$props3.onChange,
          disabled = _this$props3.disabled,
          step = _this$props3.step;
      var evType = ev.target.dataset.type;
      var _this$data = this.data,
          opaReduce = _this$data.opaReduce,
          opaAdd = _this$data.opaAdd,
          value = _this$data.value;

      if (!disabled) {
        if (evType === 'reduce') {
          if (value > min) {
            opaAdd = 1;
            value = Math.max(min, this.getCalculateValue('reduce', +value, +step));
            opaReduce = value === min ? 0.4 : 1;
          }
        } else {
          /* eslint-disable no-lonely-if */
          if (value < max) {
            opaReduce = 1;
            value = Math.min(this.getCalculateValue('add', +value, +step), max);
            opaAdd = value === max ? 0.4 : 1;
          }
        }

        this.setData({
          value: value,
          opaAdd: opaAdd,
          opaReduce: opaReduce
        });
        onChange(value);
      }
    },
    onInput: function onInput(e) {
      var max = this.props.max;
      var value = e.detail.value;

      if (value >= max) {
        e.detail.value = max;
        this.setData({
          value: max
        });
      }

      this.resetFn(value);
    },
    onBlur: function onBlur(event) {
      var value = event.detail.value;
      var max = this.props.max;

      if (value >= max) {
        event.detail.value = max;
        this.setData({
          value: max
        });
      }

      this.resetFn(value);
    },
    resetFn: function resetFn(value) {
      var _this$props4 = this.props,
          max = _this$props4.max,
          min = _this$props4.min,
          onChange = _this$props4.onChange;
      var calculatedVal = value;
      var opaAdd = 1;
      var opaReduce = 1;

      if (value >= max) {
        calculatedVal = max;
        opaAdd = 0.4;
      } else if (value <= min) {
        calculatedVal = min;
        opaReduce = 0.4;
      }

      this.setData({
        value: calculatedVal,
        opaAdd: opaAdd,
        opaReduce: opaReduce
      });
      onChange(calculatedVal);
    },
    getCalculateValue: function getCalculateValue(type, arg1, arg2) {
      var numFloat = arg1.toString().split('.')[1] || '';
      var num2Float = arg2.toString().split('.')[1] || '';
      var length = Math.max(numFloat.length, num2Float.length);
      var times = Math.pow(10, length);
      return type === 'reduce' ? ((+arg1 * times - +arg2 * times) / times).toFixed(length) : ((+arg1 * times + +arg2 * times) / times).toFixed(length);
    }
  }
});

/***/ }),

/***/ "MUBa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("lRlK");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "MuGI":
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

$global.$addPageConfig({
  pagePath: "page/component/swipe-action/swipe-action",
  usingComponents: __webpack_require__("AYOb")

});
Page({
  data: {
    swipeIndex: null,
    list: [{ right: [{ type: 'delete', text: '删除', fColor: 'black' }], content: '更换文字颜色' }, { right: [{ type: 'edit', text: '取消收藏', fColor: 'rgba(0,0,0,.5)' }, { type: 'delete', text: '删除', fColor: 'yellow' }, { type: 'other', text: '新增一个' }], content: '改变文字颜色' }, { right: [{ type: 'edit', text: '取消收藏', bgColor: '#333' }, { type: 'delete', text: '删除' }], content: '其中一个背景色变化' }, { right: [{ type: 'edit', text: '取消收藏', bgColor: '#ccc', fColor: '#f00' }, { type: 'delete', text: '删除', bgColor: '#0ff', fColor: '#333' }], content: '文字和背景色同时改变' }, { right: [{ type: 'edit', text: '取消收藏取消收藏取消' }, { type: 'delete', text: '删除删除删除删除' }], content: '默认颜色样式' }, { right: [{ type: 'edit', text: '取消关注' }, { type: 'other', text: '免打扰' }, { type: 'delete', text: '删除' }], content: '三个选项的卡片' }, { right: [{ type: 'edit', text: '取消关注' }, { type: 'other', text: '免打扰' }, { type: 'delete', text: '删除' }], content: '三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片' }]
  },
  onRightItemClick: function onRightItemClick(e) {
    var type = e.detail.type;

    my.confirm({
      title: '温馨提示',
      content: e.index + "-" + e.extra + "-" + JSON.stringify(e.detail),
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: function success(result) {
        // const { list } = this.data;
        if (result.confirm) {
          if (type === 'delete') {
            // list.splice(this.data.swipeIndex, 1);
            my.showToast({
              content: '确认 => 可进行删除数据操作'
            });
          }
          e.done();
        } else {
          my.showToast({
            content: '取消 => 滑动删除状态保持不变'
          });
        }
      }
    });
  },
  onItemClick: function onItemClick(e) {
    my.alert({
      content: "dada" + e.index
    });
  },
  onSwipeStart: function onSwipeStart(e) {
    this.setData({
      swipeIndex: e.index
    });
  }
});

/***/ }),

/***/ "N4o8":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("LhLs");
var global = __webpack_require__("m+eR");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("83VP") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "N6hZ":
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

$global.$addPageConfig({
    pagePath: "page/API/ocr-driver-license/ocr-driver-license",
    usingComponents: __webpack_require__("0vjv")

});
Page({
    data: {
        textArry: [],
        imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/VSYVmTFPyVyNlxYvRGBJ.jpg"
    },
    onLoad: function onLoad() {
        this.callFn(this.data.imgUrl);
    },
    callFn: function callFn(url) {
        var _this = this;

        my.showLoading({
            content: '加载中...',
            delay: 100
        });
        my.ocr({
            ocrType: 'ocr_driver_license',
            side: 'face',
            path: url,
            success: function success(res) {
                var data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
                var num = data.num,
                    name = data.name,
                    sex = data.sex,
                    addr = data.addr,
                    start_date = data.start_date,
                    vehicle_type = data.vehicle_type,
                    end_date = data.end_date;

                _this.setData({
                    imgUrl: url,
                    textArry: [{ title: '证号', message: num }, { title: '姓名', message: name }, { title: '性别', message: sex }, { title: '地址', message: addr }, { title: '准驾车型', message: vehicle_type }, { title: '起始日期', message: _this.reData(start_date) }, { title: '有效日期', message: end_date }]
                });
                my.hideLoading();
            },
            fail: function fail(res) {
                my.hideLoading();

                my.alert({
                    title: 'fail',
                    content: JSON.stringify(res)
                });
            }

        });
    },
    photoSubmit: function photoSubmit() {
        var _this2 = this;

        //点击上传
        my.chooseImage({
            count: 1,
            success: function success(res) {
                _this2.callFn(res.apFilePaths[0]);
            }
        });
    },
    reData: function reData(data) {
        return data.substring(0, 4) + '年' + data.substring(4, 6) + '月' + data.substring(6, 8) + '日';
    },
    imageLoad: function imageLoad(e) {},
    imageError: function imageError(e) {}
});

/***/ }),

/***/ "N8T4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("zZkM");
/* harmony import */ var M_1_ = __webpack_require__("lQK1");
/* harmony import */ var M_2_ = __webpack_require__("q5mS");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "NMIG":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "NVCl":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "Ndfz":
/***/ (function(module, exports) {

module.exports = {"button":"/node_modules/mini-ali-ui/es/button/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "Nhj+":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/title/index",
  usingComponents: __webpack_require__("ewbR")

});
Component({
  props: {
    // title component have boder-bottom line
    hasLine: false,
    // type: arrow、close、more、'';
    type: '',
    // if type="arrow", need to write path
    iconURL: '',
    onActionTap: function onActionTap() {},
    // developer can use class for style
    className: ''
  },
  data: {},
  didMount: function didMount() {},
  didUpdate: function didUpdate() {},
  didUnmount: function didUnmount() {},
  methods: {
    onClick: function onClick() {
      var _this$props = this.props,
          type = _this$props.type,
          onActionTap = _this$props.onActionTap;

      if ((type === 'arrow' || type === 'more' || type === 'close') && typeof onActionTap === 'function') {
        onActionTap();
      }
    }
  }
});

/***/ }),

/***/ "Njrr":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "Nkn+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("31m6");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "Nozw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Hcll");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "Nvw5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("v0bc");
/* harmony import */ var M_1_ = __webpack_require__("zCbi");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "O1il":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtEvent = __webpack_require__("G+tX");

var _fmtEvent2 = _interopRequireDefault(_fmtEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/am-switch/index",
  usingComponents: __webpack_require__("3ZNG")

});

Component({
  props: {
    checked: false,
    disabled: false,
    onChange: function onChange() {},
    id: '',
    name: '',
    controlled: false
  },
  data: {
    checkedCls: ''
  },
  methods: {
    onChange: function onChange(e) {
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onChange(event);
    }
  }
});

/***/ }),

/***/ "OKc4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("6kNw");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "OOvw":
/***/ (function(module, exports) {

module.exports = {"button":"/node_modules/mini-ali-ui/es/button/index"}

/***/ }),

/***/ "OTTx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("cafp") && !__webpack_require__("SF+C")(function () {
  return Object.defineProperty(__webpack_require__("sQok")('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),

/***/ "Ohnn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("f3Yl");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "Oix4":
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

$global.$addPageConfig({
  pagePath: "page/component/grid/grid",
  usingComponents: __webpack_require__("beWc")

});
Page({
  openPage: function openPage(e) {
    my.navigateTo({
      url: e.target.dataset.url
    });
  }
});

/***/ }),

/***/ "OlxY":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "Onos":
/***/ (function(module, exports) {

module.exports = {"notice":"/node_modules/mini-ali-ui/es/notice/index"}

/***/ }),

/***/ "OqFT":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "OrNS":
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

$global.$addPageConfig({
    pagePath: "page/API/ocr-business-license/ocr-business-license",
    usingComponents: __webpack_require__("JuBZ")

});
Page({
    data: {
        textArry: [],
        imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/CLaHUdhxQUlVRnlFPisN.jpg"
    },
    onLoad: function onLoad() {
        this.callFn(this.data.imgUrl);
    },
    callFn: function callFn(url) {
        var _this = this;

        my.showLoading({
            content: '加载中...',
            delay: 100
        });
        my.ocr({
            ocrType: 'ocr_business_license',
            path: url,
            success: function success(res) {
                var data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
                var reg_num = data.reg_num,
                    person = data.person,
                    business = data.business,
                    captial = data.captial,
                    establish_date = data.establish_date,
                    name = data.name,
                    address = data.address,
                    valid_period = data.valid_period;

                _this.setData({
                    imgUrl: url,
                    textArry: [{ title: '注册号', message: reg_num }, { title: '法人', message: person }, { title: '公司名称', message: name }, { title: '地址', message: address }, { title: '注册时间', message: _this.reData(establish_date) }, { title: '营业期限', message: _this.reData(valid_period) }, { title: '注册资本', message: captial }, { title: '经营范围', message: business }]
                });
                my.hideLoading();
            },
            fail: function fail(res) {
                my.hideLoading();

                my.alert({
                    title: 'fail',
                    content: JSON.stringify(res)
                });
            }

        });
    },
    reData: function reData(data) {
        return data.substring(0, 4) + '年' + data.substring(4, 6) + '月' + data.substring(6, 8) + '日';
    },
    photoSubmit: function photoSubmit() {
        var _this2 = this;

        //点击上传
        my.chooseImage({
            count: 1,
            success: function success(res) {
                _this2.callFn(res.apFilePaths[0]);
            }
        });
    },
    imageLoad: function imageLoad(e) {},
    imageError: function imageError(e) {}
});

/***/ }),

/***/ "OwDM":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/tips/tips-dialog/index",
  usingComponents: __webpack_require__("3Apm")

});
Component({
  props: {
    show: true,
    className: '',
    type: 'dialog',
    iconSize: 20,
    arrowPosition: 'bottom-left'
  },
  data: {
    arrowColor: '000'
  },
  methods: {
    onCloseTap: function onCloseTap() {
      var onCloseTap = this.props.onCloseTap;

      if (onCloseTap) {
        onCloseTap();
      }
    }
  }
});

/***/ }),

/***/ "OyqK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends3 = __webpack_require__("XkMr");

var _extends4 = _interopRequireDefault(_extends3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addPageConfig({
  pagePath: "page/component/list-item/index",
  usingComponents: __webpack_require__("vzpQ")

});
var thumb = 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ';
Page({
  data: {
    title: '单行列表1',
    extra: '详细信息',
    arrow: true,
    upperSubtitle: '上副标题',
    lowerSubtitle: '',
    thumb: thumb,
    borderRadius: false,
    useThumb: true,
    thumbSize: 40,
    primarySlotTypes: ['无内容', '标签', '问号图标'],
    supSlotTypes: ['无内容', '标签', '问号图标', '勾图标', '文字内容'],
    secSlotTypes: ['无内容', '文字内容', '标签', '问号图标', '勾图标', '开关', '胶囊按钮', 'list-secondary'],
    supSlotIndex: 0,
    secSlotIndex: 0,
    titleSlotIndex: 0,
    upperSlotIndex: 0,
    lowerSlotIndex: 0,
    titleTagText: '标签',
    upperTagText: '标签',
    lowerTagText: '标签',
    supTagText: '标签',
    supText: '文字内容',
    secTagText: '标签',
    secText: '详细信息',
    titleIconSize: 17,
    upperIconSize: 17,
    lowerIconSize: 17,
    supIconSize: 17,
    secIconSize: 17,
    titlePositions: ['top', 'middle', 'bottom'],
    titlePosIndex: 0,
    secondary: {
      title: '次要信息',
      subtitle: '次要辅助信息',
      thumb: thumb,
      useThumb: false,
      thumbSize: undefined
    }
  },
  setInfo: function setInfo(e) {
    var dataset = e.target.dataset;
    var name = dataset.name;

    if (name) {
      var _setData;

      this.setData((_setData = {}, _setData[name] = e.detail.value, _setData));
    }
  },
  setSecInfo: function setSecInfo(e) {
    var dataset = e.target.dataset;
    var name = dataset.name;

    if (name) {
      var _extends2;

      this.setData({
        secondary: (0, _extends4.default)({}, this.data.secondary, (_extends2 = {}, _extends2[name] = e.detail.value, _extends2))
      });
    }
  }
});

/***/ }),

/***/ "PGiW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("YCWs");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "PN3v":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "PSdR":
/***/ (function(module, exports) {

module.exports = {"amount-input":"/node_modules/mini-ali-ui/es/amount-input/index"}

/***/ }),

/***/ "PTcL":
/***/ (function(module, exports) {

module.exports = {"auto-sizer":"/node_modules/mini-ali-ui/es/list/auto-size-img/index"}

/***/ }),

/***/ "PZ3u":
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

$global.$addPageConfig({
  pagePath: "page/API/report-analytics/report-analytics",
  usingComponents: __webpack_require__("bMs7")

});
Page({
  reportAnalytics: function reportAnalytics() {
    my.reportAnalytics('demo_click', {});
    my.alert({
      content: '数据上报成功，请到小程序管理后台-数据分析中查看'
    });
  }
});

/***/ }),

/***/ "PZ8K":
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

$global.$addPageConfig({
    pagePath: "page/API/create-inner-audiocontext/create-inner-audiocontext",
    usingComponents: __webpack_require__("IXub")

});
Page({
    data: {
        src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        //src : '&*()E$$$1',
        title: 'initial',
        autoplay: false,
        loop: 'false',
        startTime: 0,
        volume: 0.5,
        obeyMuteSwitch: 'false',
        seek: 0,
        callbackArr: ['offCanplay', 'offPlay', 'offPause', 'offStop', 'offEnded', 'offTimeUpdate', 'offError', 'offWaiting', 'offSeeking', 'offSeeked'],
        callbackIndex: 0,
        callback: 'offCanplay'
    },

    onReady: function onReady(e) {
        this.innerAudioContext = my.createInnerAudioContext();
        //this.innerAudioContext.autoplay = true
        //this.innerAudioContext.src="http://www.ytmp3.cn/down/50564.mp3";
        this.innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';

        console.log("onReady over");
        this.onCanplay = this.onCanplay.bind(this);
        this.innerAudioContext.onCanplay(this.onCanplay);

        this.onPlay = this.onPlay.bind(this);
        this.innerAudioContext.onPlay(this.onPlay);

        this.onPause = this.onPause.bind(this);
        this.innerAudioContext.onPause(this.onPause);

        this.onStop = this.onStop.bind(this);
        this.innerAudioContext.onStop(this.onStop);

        this.onError = this.onError.bind(this);
        this.innerAudioContext.onError(this.onError);

        this.onEnded = this.onEnded.bind(this);
        this.innerAudioContext.onEnded(this.onEnded);

        this.onTimeUpdate = this.onTimeUpdate.bind(this);
        this.innerAudioContext.onTimeUpdate(this.onTimeUpdate);

        this.onWaiting = this.onWaiting.bind(this);
        this.innerAudioContext.onWaiting(this.onWaiting);

        this.onSeeking = this.onSeeking.bind(this);
        this.innerAudioContext.onSeeking(this.onSeeking);

        this.onSeeked = this.onSeeked.bind(this);
        this.innerAudioContext.onSeeked(this.onSeeked);

        this.innerAudioContext2 = my.createInnerAudioContext();
        console.log("--------" + JSON.stringify(this.data));
        //this.innerAudioContext2.autoplay = true;
        this.innerAudioContext2.src = 'http://sc1.111ttt.cn/2018/1/03/13/396131153555.mp3';
        this.innerAudioContext2.onPlay(function () {
            console.log('开始播放2');
        });
        this.innerAudioContext2.onPause(function () {
            console.log('停止播放2');
        });
    },
    play: function play(res) {
        console.log("call play");
        this.innerAudioContext.play();
        console.log("finish call play");
        //my.alert({ content: '开始播放：' + JSON.stringify(res) });
    },
    play2: function play2(res) {
        console.log("call play2");
        this.innerAudioContext2.play();
        console.log("finish call play2");
        //my.alert({ content: '开始播放：' + JSON.stringify(res) });
    },
    pause2: function pause2() {
        console.log("call pause2");
        this.innerAudioContext2.pause();
        console.log("finish call pause2");
    },
    pause: function pause() {
        console.log("call pause");
        this.innerAudioContext.pause();
        console.log("finish call pause");
    },
    stop: function stop() {
        console.log("call stop");
        this.innerAudioContext.stop();
        console.log("finish call stop");
    },
    seek: function seek() {
        console.log("call seek");
        var seekVal = this.data.seek;
        console.log("seek to: " + seekVal);
        this.innerAudioContext.seek(380);
        console.log("finish call seek");
    },
    destroy: function destroy() {
        console.log("call destroy");
        this.innerAudioContext.destroy();
        console.log("finish call destroy");
    },
    onCanplay: function onCanplay() {
        var _this = this;

        this.innerAudioContext.onCanplay(function () {
            _this.setData({ title: 'onCanplay' });
            console.log('onCanplay');
        });
    },
    onPlay: function onPlay() {
        this.setData({ title: 'onPlay' });
        console.log('onPlay');
    },
    onPause: function onPause() {
        this.setData({ title: 'onPause' });
        console.log('onPause');
    },
    onEnded: function onEnded() {
        this.setData({ title: 'onEnded' });
        console.log('onEnded');
    },
    onTimeUpdate: function onTimeUpdate() {
        this.setData({ title: 'onTimeUpdate' });
        console.log('onTimeUpdate');
    },
    onError: function onError() {
        this.setData({ title: 'onError' });
        console.log('onError');
    },
    onStop: function onStop() {
        this.setData({ title: 'onStop' });
        console.log('onStop');
    },
    onWaiting: function onWaiting() {
        this.setData({ title: 'onWaiting' });
        console.log('onWaiting');
    },
    onSeeking: function onSeeking() {
        this.setData({ title: 'onSeeking' });
        console.log('onSeeking');
    },
    onSeeked: function onSeeked() {
        this.setData({ title: 'onSeeked' });
        console.log('onSeeked');
    },
    offCallback: function offCallback(e) {
        var index = e.detail.value;
        var callbackArr = this.data.callbackArr;


        this.setData({
            callback: callbackArr[index]
        });

        var item = callbackArr[index];

        switch (callbackArr[index]) {
            case 'offCanplay':
                this.innerAudioContext.offCanplay(this.onCanplay);
                console.log('offCanplay');
                break;
            case 'offPlay':
                console.log('offPlay--------1');
                this.onPlay();
                console.log('offPlay');
                this.innerAudioContext.offPlay(this.onPlay);
                console.log('offPlay--------2');
                break;
            case 'offPause':
                this.innerAudioContext.offPause(this.onPause);
                console.log('offPause');
                break;
            case 'offStop':
                this.innerAudioContext.offStop(this.onStop);
                console.log('offStop');
                break;
            case 'offEnded':
                this.innerAudioContext.offEnded(this.onEnded);
                console.log('offEnded');
                break;
            case 'offTimeUpdate':
                this.innerAudioContext.offTimeUpdate(this.onTimeUpdate);
                console.log('offTimeUpdate');
                break;
            case 'offError':
                this.innerAudioContext.offError(this.onError);
                console.log('offError');
                break;
            case 'offWaiting':
                this.innerAudioContext.offWaiting(this.onWaiting);
                break;
            case 'offSeeking':
                this.innerAudioContext.offSeeking(this.onSeeking);
                console.log('offSeeking');
                break;
            case 'offSeeked':

                this.innerAudioContext.offSeeked(this.onSeeked);
                console.log('offSeeked');
                break;
            default:
                break;
        }
    },
    getAllProps: function getAllProps() {
        var src = this.innerAudioContext.src;
        var startTime = this.innerAudioContext.startTime;
        var autoplay = this.innerAudioContext.autoplay;
        var loop = this.innerAudioContext.loop;
        var obeyMuteSwitch = this.innerAudioContext.obeyMuteSwitch;
        var duration = this.innerAudioContext.duration;
        var currentTime = this.innerAudioContext.currentTime;
        var paused = this.innerAudioContext.paused;
        var buffered = this.innerAudioContext.buffered;
        var volume = this.innerAudioContext.volume;
        var result = "src: " + src + "\n" + "startTime: " + startTime + "\n" + "autoplay: " + autoplay + "\n" + "loop: " + loop + "\n" + "obeyMuteSwitch: " + obeyMuteSwitch + "\n" + "duration: " + duration + "\n" + "currentTime: " + currentTime + "\n" + "paused: " + paused + "\n" + "buffered: " + buffered + "\n" + "volume: " + volume + "\n";
        my.alert({ content: '音频属性：' + result });
        console.log(result);
    },
    getAllProps2: function getAllProps2() {
        var src = this.innerAudioContext2.src;
        var startTime = this.innerAudioContext2.startTime;
        var autoplay = this.innerAudioContext2.autoplay;
        var loop = this.innerAudioContext2.loop;
        var obeyMuteSwitch = this.innerAudioContext2.obeyMuteSwitch;
        var duration = this.innerAudioContext2.duration;
        var currentTime = this.innerAudioContext2.currentTime;
        var paused = this.innerAudioContext2.paused;
        var buffered = this.innerAudioContext2.buffered;
        var volume = this.innerAudioContext2.volume;
        var result = "src: " + src + "\n" + "startTime: " + startTime + "\n" + "autoplay: " + autoplay + "\n" + "loop: " + loop + "\n" + "obeyMuteSwitch: " + obeyMuteSwitch + "\n" + "duration: " + duration + "\n" + "currentTime: " + currentTime + "\n" + "paused: " + paused + "\n" + "buffered: " + buffered + "\n" + "startTime: " + startTime + "\n" + "volume: " + volume + "\n";
        my.alert({ content: '音频属性：' + result });
        console.log(result);
    }
});

/***/ }),

/***/ "PcdY":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "Pd5l":
/***/ (function(module, exports) {

module.exports = {"icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "PkKQ":
/***/ (function(module, exports) {

module.exports = {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"}

/***/ }),

/***/ "PkTS":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "PkyD":
/***/ (function(module, exports) {

module.exports = {"terms":"/node_modules/mini-ali-ui/es/terms/index"}

/***/ }),

/***/ "PmPC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("g3u8");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "PpXW":
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

$global.$addPageConfig({
  pagePath: "page/component/button-ali-ui/index",
  usingComponents: __webpack_require__("yL1k")

});
Page({
  data: {
    title: '按钮操作 Normal',
    subtitle: '',
    disabled: false,
    dataName: '1',
    type: '',
    shape: 'default',
    capsuleSize: 'medium',
    capsuleMinWidth: false,
    showLoading: false,
    types: [{ name: 'default', value: 'default', checked: true }, { name: 'primary', value: 'primary' }, { name: 'ghost', value: 'ghost' }, { name: 'text', value: 'text' }, { name: 'warn', value: 'warn' }, { name: 'warn-ghost', value: 'warn-ghost' }, { name: 'light', value: 'light' }],
    shapes: [{ name: 'default', value: 'default', checked: true }, { name: 'capsule', value: 'capsule' }],
    capsuleSizes: [{ name: 'small', value: 'small' }, { name: 'medium', value: 'medium', checked: true }, { name: 'large', value: 'large' }]
  },
  onLoad: function onLoad() {},
  typeChange: function typeChange(e) {
    this.setData({
      type: e.detail.value
    });
  },
  shapeChange: function shapeChange(e) {
    this.setData({
      shape: e.detail.value
    });
  },
  sizeChange: function sizeChange(e) {
    this.setData({
      capsuleSize: e.detail.value
    });
  },
  titleChange: function titleChange(e) {
    this.setData({
      title: e.detail.value
    });
  },
  subtitleChange: function subtitleChange(e) {
    this.setData({
      subtitle: e.detail.value
    });
  },
  onDisableChange: function onDisableChange(e) {
    this.setData({
      disabled: e.detail.value
    });
  },
  onMinWidthChange: function onMinWidthChange(e) {
    this.setData({
      capsuleMinWidth: e.detail.value
    });
  },
  onTest: function onTest() {
    // e.target.dataset.name
  },
  onLoadingChange: function onLoadingChange(e) {
    this.setData({
      showLoading: e.detail.value
    });
  }
});

/***/ }),

/***/ "PpwP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("N6hZ");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "PtWY":
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

$global.$addPageConfig({
  pagePath: "page/API/get-image-info/get-image-info",
  usingComponents: __webpack_require__("zeeg")

});
Page({
  data: {
    src: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg'
  },
  getImageInfo: function getImageInfo() {
    my.getImageInfo({
      src: this.data.src,
      success: function success(res) {
        my.alert({
          content: JSON.stringify(res)
        });
      }
    });
  }
});

/***/ }),

/***/ "PteG":
/***/ (function(module, exports) {

module.exports = {"am-checkbox":"/node_modules/mini-ali-ui/es/am-checkbox/index","list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index","button":"/node_modules/mini-ali-ui/es/button/index"}

/***/ }),

/***/ "Pw9l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("sMtO");
/* harmony import */ var M_1_ = __webpack_require__("I0ji");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "Q/KD":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "QYM4":
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

$global.$addPageConfig({
  pagePath: "page/component/vtabs/vtabs",
  usingComponents: __webpack_require__("SSW1")

});
Page({
  data: {
    activeTab: 2,
    tabs: [{ title: '选项二', anchor: 'a', number: '6' }, { title: '选项', anchor: 'b', number: '66' }, { title: '不超过五字', anchor: 'c', number: '99+' }, { title: '选项四选项四选项四选项四', anchor: 'd' }, { title: '选项五', anchor: 'e' }, { title: '选项六', anchor: 'f' }]
  },
  handleChange: function handleChange(index) {
    this.setData({
      activeTab: index
    });
  },
  onChange: function onChange(index) {
    this.setData({
      activeTab: index
    });
  }
});

/***/ }),

/***/ "Qdjk":
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

$global.$addPageConfig({
  pagePath: "page/component/notice/notice",
  usingComponents: __webpack_require__("Onos")

});
Page({
  data: {
    closeShow: true,
    closeActionShow: true,
    marqueeProps: {
      loop: true,
      leading: 1000,
      trailing: 800,
      fps: 40
    },
    capsuleItem: [],
    capsuleItemList: [{
      name: 'https://img.alicdn.com/tfs/TB1yTvnfQY2gK0jSZFgXXc5OFXa-145-145.png',
      value: 'https://img.alicdn.com/tfs/TB1yTvnfQY2gK0jSZFgXXc5OFXa-145-145.png'
    }, {
      name: 'https://img.alicdn.com/tfs/TB1egTmfNz1gK0jSZSgXXavwpXa-145-145.png',
      value: 'https://img.alicdn.com/tfs/TB1egTmfNz1gK0jSZSgXXavwpXa-145-145.png'
    }, {
      name: 'https://img.alicdn.com/tfs/TB1l36mfQP2gK0jSZPxXXacQpXa-145-145.png',
      value: 'https://img.alicdn.com/tfs/TB1l36mfQP2gK0jSZPxXXacQpXa-145-145.png'
    }, {
      name: 'https://img.alicdn.com/tfs/TB1uCUdfND1gK0jSZFyXXciOVXa-151-164.png',
      value: 'https://img.alicdn.com/tfs/TB1uCUdfND1gK0jSZFyXXciOVXa-151-164.png'
    }],
    type: [{ name: 'normal', value: 'normal', checked: true }, { name: 'error', value: 'error' }, { name: 'active', value: 'active' }, { name: 'transparent', value: 'transparent' }],
    noticeType: 'normal',
    mode: [{ name: '', value: '无', checked: true }, { name: 'link', value: '箭头' }, { name: 'closable', value: '关闭' }],
    noticeMode: '',
    actionText: '',
    actionLeftText: ''
  },
  capsuleItemChange: function capsuleItemChange(e) {
    this.setData({
      capsuleItem: e.detail.value
    });
  },
  getContent: function getContent(e) {
    this.setData({
      noticeContent: e.detail.value
    });
  },
  typeChange: function typeChange(e) {
    this.setData({
      noticeType: e.detail.value
    });
  },
  modeChange: function modeChange(e) {
    this.setData({
      noticeMode: e.detail.value
    });
    if (e.detail.value !== '') {
      this.setData({
        actionText: ''
      });
    } else {
      this.setData({
        actionText: '',
        actionLeftText: ''
      });
    }
  },
  getRightText: function getRightText(e) {
    this.setData({
      actionText: e.detail.value
    });
  },
  getLeftText: function getLeftText(e) {
    this.setData({
      actionLeftText: e.detail.value
    });
  },
  linkActionClick: function linkActionClick() {
    my.showToast({
      content: '左侧操作区被点击了',
      duration: 1000
    });
  },
  actionClick: function actionClick() {
    my.showToast({
      content: '你点击了右侧操作区',
      duration: 1000
    });
  }
});

/***/ }),

/***/ "R58G":
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

$global.$addPageConfig({
  pagePath: "page/component/tag/index",
  usingComponents: __webpack_require__("T35s")

});
Page({
  data: {},
  onLoad: function onLoad() {},
  titleGo: function titleGo() {
    my.showToast({
      content: '点击箭头，可设置跳转'
    });
  },
  titleMore: function titleMore() {
    my.showToast({
      content: '点击更多，展开气泡菜单'
    });
  },
  titleClose: function titleClose() {
    my.showToast({
      content: '点击关闭，可设置关闭'
    });
  },
  setInfo: function setInfo(e) {
    var _setData;

    var dataset = e.target.dataset;
    var name = dataset.name;

    console.log(e.detail.value);
    this.setData((_setData = {}, _setData[name] = e.detail.value, _setData));
  }
});

/***/ }),

/***/ "R6e4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("pKjj");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "R7NN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("1/rC");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "REwq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("rDf7");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "RGkL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("u/z4");
/* harmony import */ var M_1_ = __webpack_require__("0iQm");
/* harmony import */ var M_2_ = __webpack_require__("cyyQ");
/* harmony import */ var M_3_ = __webpack_require__("CXVZ");
/* harmony import */ var M_3__default = /*#__PURE__*/__webpack_require__.n(M_3_);

  


  
  

/***/ }),

/***/ "RJQV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("mJIO");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);
  

/***/ }),

/***/ "RJR6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (r, p) {
  var e = p.AFAppX,
      o = p.$AppxFramework;return !(!e || e.$AppxFramework || o);
};

/***/ }),

/***/ "RLhK":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "RLhq":
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

$global.$addPageConfig({
  pagePath: "page/component/container/index",
  usingComponents: __webpack_require__("bxy5")

});
Page({
  data: {},
  onLoad: function onLoad() {}
});

/***/ }),

/***/ "RRiE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("f/Fx");
/* harmony import */ var M_1_ = __webpack_require__("0iQm");
/* harmony import */ var M_2_ = __webpack_require__("cyyQ");
/* harmony import */ var M_3_ = __webpack_require__("rm7d");
/* harmony import */ var M_4_ = __webpack_require__("n7cI");
/* harmony import */ var M_4__default = /*#__PURE__*/__webpack_require__.n(M_4_);

  



  
  

/***/ }),

/***/ "RUlS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("y7cw");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "Rjwe":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("vyWN");
__webpack_require__("x3H5");
module.exports = __webpack_require__("LhLs").Array.from;

/***/ }),

/***/ "RkHl":
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

$global.$addPageConfig({
  pagePath: "page/component/grid/5/index",
  usingComponents: __webpack_require__("WhMg")

});
Page({
  data: {
    list5: [{
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }],
    list55: [{
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '6标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }]
  },
  onItemClick: function onItemClick(ev) {
    my.alert({
      content: ev.detail.index
    });
  }
});

/***/ }),

/***/ "RzZj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("IO+c");
/* harmony import */ var M_1_ = __webpack_require__("f/Fx");
/* harmony import */ var M_2_ = __webpack_require__("LL8X");
/* harmony import */ var M_3_ = __webpack_require__("9/hv");
/* harmony import */ var M_3__default = /*#__PURE__*/__webpack_require__.n(M_3_);

  


  
  

/***/ }),

/***/ "S++R":
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

$global.$addPageConfig({
  pagePath: "page/API/image/image",
  usingComponents: __webpack_require__("NMIG")

});
Page({
  chooseImage: function chooseImage() {
    my.chooseImage({
      sourceType: ['camera', 'album'],
      count: 2,
      success: function success(res) {
        my.alert({
          content: JSON.stringify(res)

        });
      },
      fail: function fail() {
        my.showToast({
          content: 'fail' // 文字内容
        });
      }
    });
  },
  previewImage: function previewImage() {
    my.previewImage({
      current: 2,
      urls: ['https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg', 'https://img.alicdn.com/tps/TB1pfG4IFXXXXc6XXXXXXXXXXXX.jpg', 'https://img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg']
    });
  },
  saveImage: function saveImage() {
    my.saveImage({
      url: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
      showActionSheet: true,
      success: function success() {
        my.alert({
          title: '保存成功'
        });
      }
    });
  }
});

/***/ }),

/***/ "S3L8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("rm7d");
/* harmony import */ var M_1_ = __webpack_require__("GwvB");
/* harmony import */ var M_2_ = __webpack_require__("Vbuv");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "S6l4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("pKnb");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "SCYW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("zZkM");
/* harmony import */ var M_1_ = __webpack_require__("lQK1");
/* harmony import */ var M_2_ = __webpack_require__("VYs5");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "SF+C":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "SJeW":
/***/ (function(module, exports) {

module.exports = {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "SSW1":
/***/ (function(module, exports) {

module.exports = {"vtabs":"/node_modules/mini-ali-ui/es/vtabs/index","vtab-content":"/node_modules/mini-ali-ui/es/vtabs/vtab-content/index"}

/***/ }),

/***/ "ScW/":
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

$global.$addPageConfig({
    pagePath: "page/API/ocr-passport/ocr-passport",
    usingComponents: __webpack_require__("zlu3")

});
Page({
    data: {
        textArry: [{ title: '签发机关', message: '公安部出入境管理局' }, { title: '生日', message: '2020年12月27日' }, { title: '出生地', message: '四川' }, { title: '国籍', message: 'CHN' }, { title: '到期日期', message: '2044年04月08日' }, { title: '发证日期', message: '2024年04月09日' }, { title: '发证地址', message: '四川' }, { title: '姓名英文', message: 'ZHIXIAOBAO' }, { title: '姓名中文', message: '支小宝' }, { title: '护照号码', message: 'E09222222' }, { title: '身份ID', message: 'MCNONCNF<<<<A9' }, { title: '性别', message: 'F' }, { title: '国家', message: 'CHN' }],
        imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/JUcFsOCCRzlYpEHkKczj.jpg"
    },
    onLoad: function onLoad() {
        this.callFn(this.data.imgUrl);
    },
    callFn: function callFn(url) {
        var _this = this;

        my.showLoading({
            content: '加载中...',
            delay: 100
        });
        my.ocr({
            ocrType: 'ocr_passport',
            path: url,
            success: function success(res) {
                var data = JSON.parse(res.result.outputs[0].outputValue.dataValue);

                var authority = data.authority,
                    birth_date = data.birth_date,
                    birth_place = data.birth_place,
                    country = data.country,
                    expiry_date = data.expiry_date,
                    issue_date = data.issue_date,
                    issue_place = data.issue_place,
                    name = data.name,
                    name_cn = data.name_cn,
                    passport_no = data.passport_no,
                    person_id = data.person_id,
                    sex = data.sex,
                    src_country = data.src_country;

                _this.setData({
                    imgUrl: url,
                    textArry: [{ title: '签发机关', message: authority }, { title: '生日', message: _this.reData(birth_date) }, { title: '出生地', message: birth_place }, { title: '国籍', message: country }, { title: '到期日期', message: _this.reData(expiry_date) }, { title: '发证日期', message: _this.reData(issue_date) }, { title: '发证地址', message: issue_place }, { title: '姓名英文', message: name }, { title: '姓名中文', message: name_cn }, { title: '护照号码', message: passport_no }, { title: '身份ID', message: person_id }, { title: '性别', message: sex }, { title: '国家', message: src_country }]
                });
                my.hideLoading();
            },
            fail: function fail(res) {
                my.hideLoading();

                my.alert({
                    title: 'fail',
                    content: JSON.stringify(res)
                });
            }

        });
    },
    photoSubmit: function photoSubmit() {
        var _this2 = this;

        //点击上传
        my.chooseImage({
            count: 1,
            success: function success(res) {
                _this2.callFn(res.apFilePaths[0]);
            }
        });
    },
    reData: function reData(data) {
        return data.substring(0, 4) + '年' + data.substring(4, 6) + '月' + data.substring(6, 8) + '日';
    },
    imageLoad: function imageLoad(e) {},
    imageError: function imageError(e) {}
});

/***/ }),

/***/ "Sw68":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "T27l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtUnit = __webpack_require__("K4/D");

var _fmtUnit2 = _interopRequireDefault(_fmtUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/vtabs/index",
  usingComponents: __webpack_require__("qVvQ")

});

Component({
  data: {
    tabTop: 0,
    wrapScrollTop: 0,
    besideRadius: (0, _fmtUnit2.default)('8px')
  },
  props: {
    activeTab: 0,
    className: '',
    tabs: [],
    animated: false,
    swipeable: true,
    tabBarActiveTextColor: '#1677FF',
    tabBarInactiveTextColor: '#333333',
    tabBarActiveBgColor: '#ffffff',
    tabBarInactiveBgColor: '#f5f5f5',
    tabBarlineColor: '#1677FF',
    sameFontSize: true,
    tabBarlineShow: true,
    onTabClick: function onTabClick() {},
    onScrollBar: function onScrollBar() {}
  },
  didMount: function didMount() {
    this.isScrolling = false;
    this.timerId = null;
    this.calcHeight();
  },
  didUpdate: function didUpdate(prevProps) {
    var activeTab = this.props.activeTab;

    if (this.props.tabs.length !== prevProps.tabs.length || activeTab !== prevProps.activeTab) {
      this.calcHeight();
    }
  },
  didUnmount: function didUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  },
  methods: {
    calcHeight: function calcHeight() {
      var _this = this;

      var _this$props = this.props,
          tabs = _this$props.tabs,
          activeTab = _this$props.activeTab;
      this.anchorMap = {};
      this.indexMap = {};
      this.wrapHeight = 0;
      this.scrollWrapHeight = 0;
      my.createSelectorQuery().select(".am-vtabs-slides-" + this.$id).boundingClientRect().exec(function (ret) {
        _this.wrapHeight = ret[0].height;
      });
      var cacheHeight = 0;

      var _loop = function _loop(i) {
        var anchor = tabs[i].anchor;
        /* eslint-disable no-loop-func */

        my.createSelectorQuery().select("#am-vtab-slide-" + anchor).boundingClientRect().exec(function (ret) {
          _this.anchorMap[anchor] = cacheHeight;
          _this.indexMap[i] = cacheHeight;

          if (activeTab === i) {
            _this.setData({
              wrapScrollTop: _this.indexMap[i]
            });
          }

          cacheHeight += ret[0].height;
          _this.scrollWrapHeight = cacheHeight;
        });
      };

      for (var i = 0; i < tabs.length; i++) {
        _loop(i);
      }
    },
    handleTabClick: function handleTabClick(e) {
      var _e$target$dataset = e.target.dataset,
          anchor = _e$target$dataset.anchor,
          index = _e$target$dataset.index;

      if (!this.isScrolling || !this.props.swipeable) {
        if (this.props.activeTab !== index) {
          this.props.onTabClick(index);
        }

        this.setData({
          wrapScrollTop: this.anchorMap[anchor]
        });
        this.moveScrollBar(index);
      }
    },
    moveScrollBar: function moveScrollBar(current) {
      var tabTop;

      if (current < 6) {
        tabTop = 0;
      } else {
        tabTop = (current - 5) * 55;
      }

      if (this.props.activeTab !== current) {
        if (this.props.onChange) {
          this.props.onChange(current);
        } else {
          this.props.onScrollBar(current);
        }
      }

      this.setData({
        tabTop: tabTop,
        current: current,
        currentBefore: current - 1,
        currentAfter: current + 1
      });
    },
    onScroll: function onScroll(e) {
      var _this2 = this;

      var scrollTop = e.detail.scrollTop;
      var keys = Object.keys(this.anchorMap);

      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }

      this.timerId = setTimeout(function () {
        _this2.isScrolling = false;
      }, 300);
      var anchorLength = keys.length;

      for (var i = 0; i < anchorLength; i++) {
        if (i === anchorLength - 1) {
          // 如果是最后一个只需满足scrollTop高于当前vtab-content的高度
          if (scrollTop >= this.anchorMap[keys[i]]) {
            this.moveScrollBar(i);
            break;
          }
        }

        if (scrollTop >= Math.floor(this.anchorMap[keys[i]]) && scrollTop < Math.floor(this.anchorMap[keys[i + 1]])) {
          // 如果没个vtab-content高度小于scroll-view高度，到达底部后就不需要根据scrollTop再去判断左侧的选择项
          if (scrollTop + this.wrapHeight < this.scrollWrapHeight) {
            this.moveScrollBar(i);
          }

          break;
        }
      }
    },
    onWrapTouchMove: function onWrapTouchMove() {
      if (this.props.swipeable) {
        this.isScrolling = true;
      }
    }
  }
});

/***/ }),

/***/ "T35s":
/***/ (function(module, exports) {

module.exports = {"tag":"/node_modules/mini-ali-ui/es/tag/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index","am-switch":"/node_modules/mini-ali-ui/es/am-switch/index"}

/***/ }),

/***/ "T3sa":
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

$global.$addPageConfig({
  pagePath: "page/API/loading/loading",
  usingComponents: __webpack_require__("Kfmk")

});
Page({
  showLoading: function showLoading() {
    my.showLoading({
      content: '加载中...',
      delay: '1000'
    });
    setTimeout(function () {
      my.hideLoading();
    }, 5000);
  }
});

/***/ }),

/***/ "T4t5":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "T7Kn":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "TB3p":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "TD4M":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "TDS0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("e1vt");
/* harmony import */ var M_1_ = __webpack_require__("2BFI");
/* harmony import */ var M_2_ = __webpack_require__("Lffu");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "TGP9":
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

$global.$addPageConfig({
  pagePath: "page/component/am-icon/am-icon",
  usingComponents: __webpack_require__("6kdK")

});
Page({
  data: {
    iconTypes: ['qr', 'share', 'picture', 'add-square', 'file', 'text', 'minus-square', 'barcode', 'wallet', 'scan-code', 'receipt', 'down-circle', 'bill-note', 'trash', 'bill', 'scan', 'content', 'circle', 'play', 'limit', 'money', 'link', 'zoom-in', 'koubei', 'location', 'capslock', 'time-5', 'warn', 'help', 'close-circle', 'selected', 'search', 'net', 'chat', 'contacts', 'appx', 'question', 'person-setting', 'setting', 'like', 'ant', 'add', 'more', 'more-1', 'zoom-out', 'money-circle', 'collect', 'voice', 'good', 'voice-limit', 'people', 'person-add', 'download', 'sad', 'left', 'right', 'eye-close', 'eye', 'koubei_', 'star_', 'check', 'chat_', 'help_', 'key_', 'lock_', 'people_', 'voice-limit_', 'location_', 'phone_', 'logo-alipay_', 'person-delete_', 'wait_', 'apps_', 'microphone_', 'pen_', 'close_', 'question_', 'down_', 'certified-check_', 'certified-warn_', 'sad_', 'ant_', 'time-5_', 'warn_', 'person-circle_', 'time-3_', 'check_', 'logo-alipays', 'like_', 'home', 'eye_', 'edit_', 'mail_', 'forbid_', 'eye-limit_', 'delete-person_', 'close', 'address-book_', 'person', 'gift', 'add-message', 'alipay', 'phone-book_', 'delete_', 'down', 'up'],
    searchIcon: []
  },
  searchIcon: function searchIcon(e) {
    var inputValue = e.detail.value;
    var _this = this;
    var searchIcon = [];
    this.data.iconTypes.forEach(function (evalue) {
      if (evalue.match(inputValue)) {
        searchIcon.push(evalue);
        _this.setData({
          searchIcon: searchIcon
        });
      }
    });
  }
});

/***/ }),

/***/ "TNof":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("XhCN");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "Tf4m":
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

$global.$addPageConfig({
  pagePath: "page/component/radio-ali-ui/index",
  usingComponents: __webpack_require__("qeJa")

});
Page({
  data: {
    items: [{ checked: true, disabled: false, value: 'a', desc: '单选框-默认选中', id: 'checkbox1' }, { checked: false, disabled: false, value: 'b', desc: '单选框-默认未选中', id: 'checkbox2' }],
    items1: [{ checked: true, disabled: true, value: 'c', desc: '单选框-默认选中disabled', id: 'checkbox3' }]
  },
  onSubmit: function onSubmit(e) {
    my.alert({
      content: e.detail.value.lib
    });
  },
  onReset: function onReset() {},
  radioChange: function radioChange() {}
});

/***/ }),

/***/ "TiK1":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("sJ/N");
var toLength = __webpack_require__("ImiU");
var toAbsoluteIndex = __webpack_require__("VGHi");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "Tvld":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("tNKo");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "U+PM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    results: [],
    items: [],
    commonProps: {
      max: 10000
    }
  },
  didUnmount: function didUnmount() {
    var _this$data = this.data,
        items = _this$data.items,
        results = _this$data.results;
    results.splice(0, results.length);
    items.splice(0, items.length);
  }
});

/***/ }),

/***/ "U7B8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("B8RV");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "UEdv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Vnk/");
/* harmony import */ var M_1_ = __webpack_require__("po3g");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "UFUG":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "UIh0":
/***/ (function(module, exports) {

module.exports = {"list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index"}

/***/ }),

/***/ "UMXY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtUnit = __webpack_require__("K4/D");

var _fmtUnit2 = _interopRequireDefault(_fmtUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/tabs/index",
  usingComponents: __webpack_require__("AvbC")

});


var _my$getSystemInfoSync = my.getSystemInfoSync(),
    windowWidth = _my$getSystemInfoSync.windowWidth;

Component({
  props: {
    className: '',
    // tabbar激活的 tab 样式 class
    activeCls: '',
    // tabbar的自定义样式class
    tabBarCls: '',
    // 选中选项卡下划线颜色
    tabBarUnderlineColor: '#1677FF',
    // 选中选项卡字体颜色
    tabBarActiveTextColor: '#1677FF',
    // 胶囊选中选项卡字体颜色
    capsuleTabBarActiveTextColor: '#ffffff',
    // 未选中选项卡字体颜色
    tabBarInactiveTextColor: '#333333',
    // 未选中描述字体颜色
    tabBarSubTextColor: '#999999',
    // 选中描述字体颜色
    tabBarActiveSubTextColor: '#ffffff',
    // 选项卡背景颜色
    tabBarBackgroundColor: '#ffffff',
    showPlus: false,
    // tabs 内容区是否可拖动，true 可拖动，内容区固定高度 false 不可拖动，内容区自适应高度
    swipeable: true,
    // 当前激活tab id
    activeTab: 0,
    animation: true,
    duration: 500,
    // 是否为胶囊形式 tab
    capsule: false,
    // 是否有副标题
    hasSubTitle: false,
    elevator: false,
    floorNumber: [],
    elevatorTop: '0px',
    showBadge: false,
    // 选中选项卡下划线宽度
    tabBarUnderlineWidth: '',
    // 选中选项卡下划线高度
    tabBarUnderlineHeight: '',
    // 电梯组件 tab-content 距离顶部高度
    elevatorContentTop: 0
  },
  data: {
    windowWidth: windowWidth,
    tabWidth: 0.25,
    autoplay: false,
    animation: false,
    showLeftShadow: false,
    version: my.SDKVersion,
    viewScrollLeft: 0,
    tabViewNum: 0,
    hideRightShadow: false,
    boxWidth: 0,
    elWidth: 0,
    tabFontSize15: (0, _fmtUnit2.default)('15px'),
    tabFontSize13: (0, _fmtUnit2.default)('13px')
  },
  didMount: function didMount() {
    var _this = this;

    var _this$props = this.props,
        tabs = _this$props.tabs,
        animation = _this$props.animation,
        hasSubTitle = _this$props.hasSubTitle,
        elevator = _this$props.elevator;

    if (hasSubTitle) {
      this.setData({
        capsule: true
      });
    }

    this.setData({
      tabWidth: tabs.length > 3 ? 0.25 : 1 / tabs.length,
      animation: animation,
      autoplay: true
    });

    if (elevator) {
      this.setData({
        swipeable: false
      });

      var _loop = function _loop(i) {
        my.createSelectorQuery().select("#am-tabs-elevator-pane-" + i).boundingClientRect().select('.am-tabs-bar-sticky').boundingClientRect().exec(function (ret) {
          var _this$props2 = _this.props,
              elevatorTop = _this$props2.elevatorTop,
              elevatorContentTop = _this$props2.elevatorContentTop;
          var tabContentDistance = 0;

          if (elevatorTop.match(/\d+px/)) {
            tabContentDistance = parseInt(elevatorTop, 10);
          } else {
            tabContentDistance = parseInt(elevatorContentTop, 10);
          }

          _this.props.floorNumber[i] = ret[0].top - ret[1].height - tabContentDistance;

          _this.setData({
            floorNumber: _this.props.floorNumber
          });
        });
      };

      for (var i = 0; i < tabs.length; i++) {
        _loop(i);
      }

      setTimeout(function () {
        _this.$page.data.floorNumber = _this.data.floorNumber;
      }, 100);
    }
  },
  didUpdate: function didUpdate(prevProps, prevData) {
    var _this$props3 = this.props,
        tabs = _this$props3.tabs,
        elevator = _this$props3.elevator;

    if (prevProps.tabs.length !== tabs.length) {
      this.setData({
        tabWidth: tabs.length > 3 ? 0.25 : 1 / tabs.length
      });
    }

    if (elevator) {
      this.$page.data.floorNumber = this.data.floorNumber;

      if (this.$page.data.getFloorNumber >= 0) {
        this.setData({
          tabViewNum: this.$page.data.getFloorNumber,
          prevTabViewNum: prevData.tabViewNum
        });
      }
    }
  },
  methods: {
    handleSwiperChange: function handleSwiperChange(e) {
      var current = e.detail.current;
      var tabsName = e.target.dataset.tabsName;
      this.setData({
        tabViewNum: current
      });

      if (this.props.onChange) {
        this.props.onChange({
          index: current,
          tabsName: tabsName
        });
      }
    },
    handleTabClick: function handleTabClick(e) {
      var _this2 = this;

      var _e$target$dataset = e.target.dataset,
          index = _e$target$dataset.index,
          tabsName = _e$target$dataset.tabsName,
          floor = _e$target$dataset.floor;
      var boxWidth = 0;
      var elWidth = 0;
      my.createSelectorQuery().select("#" + e.currentTarget.id).boundingClientRect().exec(function (ret) {
        elWidth = ret[0].width;

        _this2.setData({
          elWidth: elWidth
        });
      });
      my.createSelectorQuery().select("#am-tabs-bar-" + tabsName + "-content").boundingClientRect().exec(function (ret) {
        boxWidth = ret[0].width;

        _this2.setData({
          boxWidth: boxWidth
        });

        if (_this2.data.elWidth > _this2.data.boxWidth / 2) {
          setTimeout(function () {
            _this2.setData({
              viewScrollLeft: e.currentTarget.offsetLeft - 40
            });
          }, 300);
        } else {
          setTimeout(function () {
            _this2.setData({
              viewScrollLeft: e.currentTarget.offsetLeft - Math.floor(_this2.data.boxWidth / 2)
            });
          }, 300);
        }
      });

      if (this.props.onTabClick) {
        this.props.onTabClick({
          index: index,
          tabsName: tabsName
        });
      }

      if (this.props.onTabClick && this.props.elevator) {
        this.setData({
          tabViewNum: this.data.prevTabViewNum
        });
        setTimeout(function () {
          _this2.props.onTabClick({
            index: index,
            tabsName: tabsName
          });
        }, 300);
        my.pageScrollTo({
          scrollTop: Math.ceil(floor),
          duration: 1
        });
      }
    },
    handlePlusClick: function handlePlusClick() {
      if (this.props.onPlusClick) {
        this.props.onPlusClick();
      }
    },
    showLeftShadow: function showLeftShadow(e) {
      if (e.detail.scrollLeft > 0) {
        this.setData({
          showLeftShadow: true
        });
      } else {
        this.setData({
          showLeftShadow: false
        });
      }
    }
  }
});

/***/ }),

/***/ "UQUr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("OwDM");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "V8QI":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/flex/index",
  usingComponents: __webpack_require__("hyIb")

});
Component({
  props: {
    className: '',
    direction: 'row',
    wrap: 'nowrap',
    justify: 'start',
    align: 'center',
    alignContent: 'stretch'
  }
});

/***/ }),

/***/ "VBQa":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("N4o8")('keys');
var uid = __webpack_require__("bS8I");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "VEdZ":
/***/ (function(module, exports) {

module.exports = {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"}

/***/ }),

/***/ "VFvq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("rm7d");
/* harmony import */ var M_1_ = __webpack_require__("/cKz");
/* harmony import */ var M_2_ = __webpack_require__("LL8X");
/* harmony import */ var M_3_ = __webpack_require__("f/Fx");
/* harmony import */ var M_4_ = __webpack_require__("PpXW");
/* harmony import */ var M_4__default = /*#__PURE__*/__webpack_require__.n(M_4_);

  



  
  

/***/ }),

/***/ "VGHi":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("L5X3");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ "VYs5":
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

$global.$addPageConfig({
  pagePath: "page/component/filter/alternative/index",
  usingComponents: __webpack_require__("JSOC")

});
Page({
  data: {
    show: true,
    items: [{ id: 1, value: '衣服', selected: true }, { id: 1, value: '橱柜' }, { id: 1, value: '衣架' }, { id: 3, value: '数码产品' }, { id: 4, value: '防盗门' }, { id: 5, value: '椅子' }, { id: 7, value: '显示器' }, { id: 6, value: '某最新款电子产品' }, { id: 8, value: '某某某某某牌电视游戏底座' }]
  },
  handleCallBack: function handleCallBack(data) {
    my.alert({
      content: data
    });
  },
  toggleFilter: function toggleFilter() {
    this.setData({
      show: !this.data.show
    });
  }
});

/***/ }),

/***/ "Vbuv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtUnit = __webpack_require__("K4/D");

var _fmtUnit2 = _interopRequireDefault(_fmtUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/modal/index",
  usingComponents: __webpack_require__("Ndfz")

});

Component({
  data: {
    _buttonsLayout: '',
    adviceClose: (0, _fmtUnit2.default)(26),
    normalClose: (0, _fmtUnit2.default)(18)
  },
  props: {
    className: '',
    topImageSize: 'md',
    showClose: false,
    closeType: '0',
    mask: true,
    buttonsLayout: 'horizontal',
    disableScroll: true
  },
  didMount: function didMount() {
    var _this$props = this.props,
        buttons = _this$props.buttons,
        buttonsLayout = _this$props.buttonsLayout; // button数目大于 2 个，则强制使用竖排结构

    if (buttons && buttons.length > 2) {
      this.setData({
        _buttonsLayout: 'vertical'
      });
    } else {
      this.setData({
        _buttonsLayout: buttonsLayout
      });
    }
  },
  methods: {
    // footer点击
    _onModalClick: function _onModalClick() {
      var onModalClick = this.props.onModalClick;

      if (onModalClick) {
        onModalClick();
      }
    },
    // buttons点击
    _onButtonClick: function _onButtonClick(e) {
      var onButtonClick = this.props.onButtonClick;

      if (onButtonClick) {
        onButtonClick(e);
      }
    },
    // 关闭按钮点击
    _onModalClose: function _onModalClose() {
      var onModalClose = this.props.onModalClose;

      if (onModalClose) {
        onModalClose();
      }
    }
  }
});

/***/ }),

/***/ "Vc71":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("fGvS");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "Ve/A":
/***/ (function(module, exports) {

module.exports = {"pagination":"/node_modules/mini-ali-ui/es/pagination/index","mask":"/node_modules/mini-ali-ui/es/mask/index","button":"/node_modules/mini-ali-ui/es/button/index"}

/***/ }),

/***/ "VelM":
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

$global.$addPageConfig({
  pagePath: "page/API/action-sheet/action-sheet",
  usingComponents: __webpack_require__("bIa9")

});
Page({
  showActionSheet: function showActionSheet() {
    my.showActionSheet({
      title: '支付宝-ActionSheet',
      items: ['菜单一', '菜单二', '菜单三'],
      cancelButtonText: '取消好了',
      success: function success(res) {
        var btn = res.index === -1 ? '取消' : '第' + res.index + '个';
        my.alert({
          title: "\u4F60\u70B9\u4E86" + btn + "\u6309\u94AE"
        });
      }
    });
  }
});

/***/ }),

/***/ "VhlL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Vnk/");
/* harmony import */ var M_1_ = __webpack_require__("xv+P");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "Vlff":
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

$global.$addPageConfig({
  pagePath: "page/component/loading/loading",
  usingComponents: __webpack_require__("k54z")

});
Page({
  data: {
    loadSize: '180rpx'
  },
  onLoad: function onLoad() {}
});

/***/ }),

/***/ "Vnk/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("rm7d");
/* harmony import */ var M_1_ = __webpack_require__("ewG0");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "VsAR":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("Rjwe"), __esModule: true };

/***/ }),

/***/ "W/Td":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("doTE");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "W2ui":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "WMUa":
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

$global.$addPageConfig({
  pagePath: "page/API/upload-file/upload-file",
  usingComponents: __webpack_require__("r8SB")

});
Page({
  uploadFile: function uploadFile() {
    my.chooseImage({
      chooseImage: 1,
      success: function success(res) {
        var path = res.apFilePaths[0];
        console.log(path);
        my.uploadFile({
          url: 'http://httpbin.org/post',
          fileType: 'image',
          fileName: 'file',
          filePath: path,
          success: function success(res) {
            my.alert({ title: '上传成功' });
          },
          fail: function fail(res) {
            my.alert({ title: '上传失败' });
          }
        });
      }
    });
  }
});

/***/ }),

/***/ "WeMs":
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

$global.$addPageConfig({
  pagePath: "page/API/screen/screen",
  usingComponents: __webpack_require__("Wkh2")

});
Page({
  data: {
    status: false,
    brightness: 1
  },
  onLoad: function onLoad() {
    var _this = this;

    my.getScreenBrightness({
      success: function success(res) {
        _this.setData({
          brightness: res.brightness
        });
      }
    });
  },
  sliderChange: function sliderChange(e) {
    var _this2 = this;

    my.setScreenBrightness({
      brightness: e.detail.value,
      success: function success(res) {
        _this2.setData({
          brightness: e.detail.value
        });
      }
    });
  },
  switchKeepScreenOn: function switchKeepScreenOn(e) {
    var _this3 = this;

    my.setKeepScreenOn({
      keepScreenOn: e.detail.value,
      success: function success(res) {
        _this3.setData({
          status: e.detail.value
        });
      }
    });
  },
  getBrightness: function getBrightness() {
    my.getScreenBrightness({
      success: function success(res) {
        my.alert({
          content: "\u5F53\u524D\u5C4F\u5E55\u4EAE\u5EA6\uFF1A" + res.brightness
        });
      }
    });
  }
});

/***/ }),

/***/ "WhMg":
/***/ (function(module, exports) {

module.exports = {"grid":"/node_modules/mini-ali-ui/es/grid/index","pagination":"/node_modules/mini-ali-ui/es/pagination/index"}

/***/ }),

/***/ "Wkh2":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "WqJo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Vnk/");
/* harmony import */ var M_1_ = __webpack_require__("e8Nh");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "WsWr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Vnk/");
/* harmony import */ var M_1_ = __webpack_require__("q1m1");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "X989":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("3jWO");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "XC66":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "XS21":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "XULc":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "XVtX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("kScr");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "Xa7E":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/vtabs/vtab-content/index",
  usingComponents: __webpack_require__("eKUv")

});
Component({});

/***/ }),

/***/ "XhCN":
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

$global.$addPageConfig({
  pagePath: "page/component/map/map",
  usingComponents: __webpack_require__("KQsT")

});
var markers = [{
  id: 0,
  latitude: 30.266786,
  longitude: 120.10675,
  width: 19,
  height: 31,
  iconPath: '/image/mark_bs.png',
  callout: {
    content: 'callout'
  }
}];

var animMarker = [{
  id: 1,
  latitude: 30.266786,
  longitude: 120.10675,
  width: 19,
  height: 31,

  iconPath: '/image/mark_bs.png',

  fixedPoint: {
    originX: 200,
    originY: 150
  },
  markerLevel: 2
}];

var labelMarker = [{
  id: 2,
  latitude: 30.266786,
  longitude: 120.10675,
  width: 19,
  height: 31,
  iconPath: '/image/mark_bs.png',
  label: {
    content: "Hello Label",
    color: "#00FF00",
    fontSize: 14,
    borderRadius: 3,
    bgColor: "#ffffff",
    padding: 10
  },
  markerLevel: 2
}];
var customCalloutMarker = [{
  id: 3,
  latitude: 30.266786,
  longitude: 120.10675,
  width: 19,
  height: 31,
  iconPath: '/image/mark_bs.png',
  "customCallout": {
    "type": 2,
    "descList": [{
      "desc": "预计",
      "descColor": "#333333"
    }, {
      "desc": "5分钟",
      "descColor": "#108EE9"
    }, {
      "desc": "到达",
      "descColor": "#333333"
    }],
    "isShow": 1
  },
  markerLevel: 2
}];

var iconAppendStrMarker = [{
  id: 34,
  latitude: 30.266786,
  longitude: 120.10675,
  width: 19,
  height: 31,
  iconAppendStr: "iconAppendStr",
  markerLevel: 2
}];

var myTrafficEnabled = 0;
var myCompassEnabled = 0;
var myScaleEnabled = 0;
var myGestureEnabled = 0;

var longitude = 120.10675;
var latitude = 30.266786;
var includePoints = [{
  latitude: 30.266786,
  longitude: 120.10675
}];

Page({
  data: {
    scale: 14,
    longitude: longitude,
    latitude: latitude,
    includePoints: includePoints
  },
  onReady: function onReady() {
    // 使用 my.createMapContext 获取 map 上下文
    this.mapCtx = my.createMapContext('map');
  },
  demoResetMap: function demoResetMap() {
    this.setData({
      scale: 14,
      longitude: longitude,
      latitude: latitude,
      includePoints: includePoints,
      'ground-overlays': [],
      circles: [],
      polygon: [],
      polyline: []
    });
    this.mapCtx.clearRoute();
  },
  demoGetCenterLocation: function demoGetCenterLocation() {
    this.mapCtx.getCenterLocation({
      success: function success(res) {
        my.alert({
          content: 'longitude:' + res.longitude + '\nlatitude:' + res.latitude + '\nscale:' + res.scale
        });
        console.log(res.longitude);
        console.log(res.latitude);
        console.log(res.scale);
      }
    });
  },
  demoMoveToLocation: function demoMoveToLocation() {
    this.mapCtx.moveToLocation();
  },
  demoMarkerAnimation: function demoMarkerAnimation() {
    if (!my.canIUse('createMapContext.return.updateComponents')) {
      my.alert({
        title: '客户端版本过低',
        content: 'this.mapCtx.updateComponents 需要 10.1.35 及以上版本'
      });
      return;
    }
    this.mapCtx.updateComponents({
      'markers': animMarker
    });
    this.mapCtx.updateComponents({
      command: {
        markerAnim: [{ markerId: 1, type: 0 }]
      }
    });
  },
  demoMarkerLabel: function demoMarkerLabel() {
    if (!my.canIUse('createMapContext.return.updateComponents')) {
      my.alert({
        title: '客户端版本过低',
        content: 'this.mapCtx.updateComponents 需要 10.1.35 及以上版本'
      });
      return;
    }
    this.mapCtx.updateComponents({
      scale: 14,
      longitude: longitude,
      latitude: latitude,
      includePoints: includePoints,
      'markers': labelMarker
    });
  },
  demoMarkerCustomCallout: function demoMarkerCustomCallout() {
    this.mapCtx.updateComponents({
      scale: 14,
      longitude: longitude,
      latitude: latitude,
      includePoints: includePoints,
      'markers': customCalloutMarker
    });
  },
  demoMarkerAppendStr: function demoMarkerAppendStr() {
    this.mapCtx.updateComponents({
      scale: 14,
      longitude: longitude,
      latitude: latitude,
      includePoints: includePoints,
      'markers': iconAppendStrMarker
    });
  },
  demoTrafficOverlay: function demoTrafficOverlay() {
    if (!my.canIUse('createMapContext.return.updateComponents')) {
      my.alert({
        title: '客户端版本过低',
        content: 'this.mapCtx.updateComponents 需要 10.1.35 及以上版本'
      });
      return;
    }
    myTrafficEnabled = (myTrafficEnabled + 1) % 2;
    this.mapCtx.updateComponents({ setting: { trafficEnabled: myTrafficEnabled } });
  },
  demoShowRoute: function demoShowRoute() {
    this.mapCtx.showRoute({
      startLat: 30.257839,
      startLng: 120.062726,
      endLat: 30.256718,
      endLng: 120.059985,
      zIndex: 4,
      routeColor: '#FFB90F',
      iconPath: "/image/map_alr.png",
      iconWidth: 10,
      routeWidth: 10
    });
  },
  demoCompass: function demoCompass() {
    myCompassEnabled = (myCompassEnabled + 1) % 2;
    this.mapCtx.showsCompass({ isShowsCompass: myCompassEnabled });
  },
  demoScale: function demoScale() {
    myScaleEnabled = (myScaleEnabled + 1) % 2;
    this.mapCtx.showsScale({ isShowsScale: myScaleEnabled });
  },
  demoGesture: function demoGesture() {
    myGestureEnabled = (myGestureEnabled + 1) % 2;
    this.mapCtx.gestureEnable({ isGestureEnable: myGestureEnabled });
  },
  demoPolyline: function demoPolyline() {
    this.setData({
      scale: 16,
      longitude: longitude,
      latitude: latitude,
      polyline: [{
        points: [{ // 右上
          latitude: 30.264786,
          longitude: 120.10775
        }, { // 左下
          latitude: 30.268786,
          longitude: 120.10575
        }],
        color: '#FF0000DD',
        width: 10,
        dottedLine: false,
        iconPath: "/image/map_alr.png",
        iconWidth: 10
      }]
    });
  },
  demoPolygon: function demoPolygon() {
    this.setData({
      scale: 16,
      longitude: longitude,
      latitude: latitude,
      polygon: [{
        points: [{ // 右上
          latitude: 30.264786,
          longitude: 120.10775
        }, { // 右下
          latitude: 30.268786,
          longitude: 120.10775
        }, { // 左下
          latitude: 30.268786,
          longitude: 120.10575
        }, { // 左上
          latitude: 30.264786,
          longitude: 120.10575
        }],
        fillColor: '#BB0000DD',
        width: 5
      }]
    });
  },
  demoCircle: function demoCircle() {
    this.setData({
      scale: 16,
      longitude: longitude,
      latitude: latitude,
      circles: [{
        longitude: longitude,
        latitude: latitude,
        color: '#BB76FF88',
        fillColor: '#BB76FF33',
        radius: 100,
        strokeWidth: 3
      }]
    });
  },
  regionchange: function regionchange(e) {
    console.log('regionchange', e);
  },
  markertap: function markertap(e) {
    console.log('marker tap', e);
  },
  controltap: function controltap(e) {
    console.log('control tap', e);
  },
  tap: function tap() {
    console.log('tap');
  },
  callouttap: function callouttap(e) {
    console.log('callout tap', e);
  }
});

/***/ }),

/***/ "XhUc":
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

$global.$addPageConfig({
  pagePath: "page/component/input/input",
  usingComponents: __webpack_require__("JNOu")

});
Page({
  data: {
    focus: false,
    inputValue: ''
  },

  bindButtonTap: function bindButtonTap() {
    var _this = this;

    // blur 事件和这个冲突
    setTimeout(function () {
      _this.onFocus();
    }, 100);
  },
  onFocus: function onFocus() {
    this.setData({
      focus: true
    });
  },
  onBlur: function onBlur() {
    this.setData({
      focus: false
    });
  },
  bindKeyInput: function bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  bindHideKeyboard: function bindHideKeyboard(e) {
    if (e.detail.value === '123') {
      // 收起键盘
      my.hideKeyboard();
    }
  },
  handleSearch: function handleSearch(e) {
    console.log('search', e.detail.value);
    this.setData({
      search: e.detail.value
    });
  },
  doneSearch: function doneSearch() {
    console.log('doneSearch', this.data.search);
    my.hideKeyboard();
  },
  clearSearch: function clearSearch() {
    console.log('clear search', this.data.search);
    this.setData({
      search: ''
    });
  }
});

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

/***/ "Xokm":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/flex/flex-item/index",
  usingComponents: __webpack_require__("FZCA")

});
Component({});

/***/ }),

/***/ "Y10e":
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

$global.$addPageConfig({
  pagePath: "page/component/page-result/local-redpacket/index",
  usingComponents: __webpack_require__("Gjwv")

});
Page({});

/***/ }),

/***/ "Y5Zq":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "Y61U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("ELbk");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "YCWs":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/popover/index",
  usingComponents: __webpack_require__("ZVxp")

});
Component({
  props: {
    show: false,
    className: '',
    showMask: true,
    position: 'bottomRight'
  },
  methods: {
    onMaskClick: function onMaskClick() {
      if (this.props.onMaskClick && typeof this.props.onMaskClick === 'function') {
        this.props.onMaskClick();
      }
    }
  }
});

/***/ }),

/***/ "YGLm":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "YIJG":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "YJxO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__("CoHa");
var descriptor = __webpack_require__("aurx");
var setToStringTag = __webpack_require__("qtuz");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("Zk7X")(IteratorPrototype, __webpack_require__("mMCp")('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),

/***/ "YK0M":
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

$global.$addPageConfig({
  pagePath: "page/component/icon/icon",
  usingComponents: __webpack_require__("YIJG")

});
Page({
  data: {
    iconSize: [20, 30, 40, 50, 60],
    iconColor: ['red', 'yellow', 'blue', 'green'],
    iconType: ['success', 'info', 'warn', 'waiting', 'clear', 'success_no_circle', 'download', 'cancel', 'search']
  }
});

/***/ }),

/***/ "YKQd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("wdmQ");
/* harmony import */ var M_1_ = __webpack_require__("rScs");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "YLMP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ZipT");
/* harmony import */ var M_1_ = __webpack_require__("mhmn");
/* harmony import */ var M_2_ = __webpack_require__("ckQ5");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "Ys9G":
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

$global.$addPageConfig({
  pagePath: "page/component/alphabet/index",
  usingComponents: __webpack_require__("sjhm")

});
Page({
  data: {
    alphabet: []
  },
  onLoad: function onLoad() {
    var charCode = 65;
    var charList = [];
    for (var i = 0; i < 26; i++) {
      charList.push(String.fromCharCode(charCode + i));
    }
    this.setData({
      alphabet: charList
    });
  },
  onAlphabetClick: function onAlphabetClick(ev) {
    my.alert({
      content: JSON.stringify(ev.data)
    });
  }
});

/***/ }),

/***/ "YuDG":
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

$global.$addPageConfig({
    pagePath: "page/API/ocr-vehicle-plate/ocr-vehicle-plate",
    usingComponents: __webpack_require__("B9JD")

});
Page({
    data: {
        textArry: [],
        imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/uvBjLdgIbHlADgSmobOU.jpg"
    },
    onLoad: function onLoad() {
        this.callFn(this.data.imgUrl);
    },
    callFn: function callFn(url) {
        var _this = this;

        my.ocr({
            ocrType: 'ocr_vehicle_plate',
            path: url,
            success: function success(res) {
                var data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
                _this.setData({
                    imgUrl: url,
                    textArry: [{ title: '车牌号', message: data.plates[0].txt }]
                });
                my.hideLoading();
            },
            fail: function fail(res) {
                my.hideLoading();

                my.alert({
                    title: 'fail',
                    content: JSON.stringify(res)
                });
            }

        });
    },
    photoSubmit: function photoSubmit() {
        var _this2 = this;

        //点击上传
        my.chooseImage({
            count: 1,
            success: function success(res) {
                _this2.callFn(res.apFilePaths[0]);
            }
        });
    },
    imageLoad: function imageLoad(e) {},
    imageError: function imageError(e) {}
});

/***/ }),

/***/ "ZHlu":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "ZVxp":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "ZeGA":
/***/ (function(module, exports) {

module.exports = {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"}

/***/ }),

/***/ "Zfow":
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

$global.$addPageConfig({
  pagePath: "page/API/open-location/open-location",
  usingComponents: __webpack_require__("g8VS")

});
Page({
  data: {
    longitude: '120.126293',
    latitude: '30.274653',
    name: '黄龙万科中心',
    address: '学院路77号'
  },

  openLocation: function openLocation() {
    my.openLocation({
      longitude: this.data.longitude,
      latitude: this.data.latitude,
      name: this.data.name,
      address: this.data.address
    });
  }
});

/***/ }),

/***/ "ZipT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("nBum");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "Zk7X":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("fJad");
var createDesc = __webpack_require__("aurx");
module.exports = __webpack_require__("cafp") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "ZwnL":
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

$global.$addPageConfig({
  pagePath: "page/component/tabs/tabs",
  usingComponents: __webpack_require__("kif3")

});
Page({
  data: {
    tabs: [{
      title: '选项',
      subTitle: '描述文案',
      number: '6',
      showBadge: true,
      badge: {
        arrow: true,
        stroke: true
      }
    }, {
      title: '选项二',
      subTitle: '描述文案描述',
      number: '66',
      showBadge: true,
      badge: {
        arrow: false,
        stroke: true
      }
    }, {
      title: '3 Tab',
      subTitle: '描述',
      number: '99+',
      showBadge: true,
      badge: {
        arrow: true
      }
    }, { title: '4 Tab',
      subTitle: '描述',
      showBadge: true,
      number: 0
    }, { title: '5 Tab',
      subTitle: '描述描述',
      number: '99+',
      showBadge: false
    }, { title: '3 Tab',
      subTitle: '描述',
      showBadge: false
    }, { title: '4 Tab',
      subTitle: '描述'
    }, { title: '15 Tab',
      subTitle: '描述'
    }],
    activeTab: 0,
    type: [{ name: 'normal', value: '普通', checked: true }, { name: 'capsule', value: '胶囊' }, { name: 'hasSubTitle', value: '带描述' }],
    typeCapsule: false,
    typeHasSubTitle: false,
    plus: [{ name: 'has', value: '是', checked: true }, { name: 'hasnt', value: '否' }],
    hasPlus: true,
    contentHeight: [{ name: 'has', value: '是' }, { name: 'hasnt', value: '否', checked: true }],
    // hasContentHeight: false,
    tabsNumber: [{ name: '1', value: '一条' }, { name: '2', value: '两条' }, { name: '3', value: '三条' }, { name: '-1', value: '很多', checked: true }]
  },
  tabsNumberChange: function tabsNumberChange(e) {
    if (e.detail.value === '1') {
      this.setData({
        tabs: [{
          title: '选项',
          subTitle: '描述文案',
          number: '6'
        }]
      });
    } else if (e.detail.value === '2') {
      this.setData({
        tabs: [{
          title: '选项',
          subTitle: '描述文案',
          number: '6',
          showBadge: true,
          badge: {
            arrow: true,
            stroke: true
          }
        }, {
          title: '选项二',
          subTitle: '描述文案描述',
          number: '66',
          showBadge: true
        }]
      });
    } else if (e.detail.value === '3') {
      this.setData({
        tabs: [{
          title: '选项',
          subTitle: '描述文案',
          number: '6',
          showBadge: true,
          badge: {
            arrow: true,
            stroke: true
          }
        }, {
          title: '选项二',
          subTitle: '描述文案描述',
          number: '66',
          showBadge: true
        }, {
          title: 'Tab',
          subTitle: '描述',
          number: '99+',
          showBadge: true,
          badge: {
            arrow: true,
            stroke: false
          }
        }]
      });
    } else {
      this.setData({
        tabs: [{
          title: '选项',
          subTitle: '描述文案',
          number: '6',
          showBadge: true,
          badge: {
            arrow: true,
            stroke: true
          }
        }, {
          title: '选项二',
          subTitle: '描述文案描述',
          number: '66',
          showBadge: true,
          badge: {
            arrow: false,
            stroke: true
          }
        }, {
          title: '3 Tab',
          subTitle: '描述',
          number: '99+',
          showBadge: true,
          badge: {
            arrow: true
          }
        }, { title: '4 Tab',
          subTitle: '描述',
          showBadge: true,
          number: 0
        }, { title: '5 Tab',
          subTitle: '描述描述',
          number: '99+',
          showBadge: false
        }, { title: '3 Tab',
          subTitle: '描述',
          showBadge: false
        }, { title: '4 Tab',
          subTitle: '描述'
        }, { title: '15 Tab',
          subTitle: '描述'
        }]
      });
    }
  },
  typeChange: function typeChange(e) {
    if (e.detail.value === 'hasSubTitle') {
      this.setData({
        typeCapsule: true,
        typeHasSubTitle: true
      });
    } else if (e.detail.value === 'capsule') {
      this.setData({
        typeCapsule: true,
        typeHasSubTitle: false
      });
    } else {
      this.setData({
        typeCapsule: false,
        typeHasSubTitle: false
      });
    }
  },
  plusChange: function plusChange(e) {
    if (e.detail.value === 'hasnt') {
      this.setData({
        hasPlus: false
      });
    } else {
      this.setData({
        hasPlus: true
      });
    }
  },

  // heightChange(e) {
  //   if (e.detail.value === 'hasnt') {
  //     this.setData({
  //       hasContentHeight: false,
  //     });
  //   } else {
  //     this.setData({
  //       hasContentHeight: true,
  //     });
  //   }
  // },
  handleTabClick: function handleTabClick(_ref) {
    var _setData;

    var index = _ref.index,
        tabsName = _ref.tabsName;

    this.setData((_setData = {}, _setData[tabsName] = index, _setData));
  },
  handleTabChange: function handleTabChange(_ref2) {
    var _setData2;

    var index = _ref2.index,
        tabsName = _ref2.tabsName;

    this.setData((_setData2 = {}, _setData2[tabsName] = index, _setData2));
  },
  handlePlusClick: function handlePlusClick() {
    my.alert({
      content: 'plus clicked'
    });
  }
});

/***/ }),

/***/ "ZzIO":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "a1/B":
/***/ (function(module, exports) {

module.exports = {"loading":"/node_modules/mini-ali-ui/es/loading/index"}

/***/ }),

/***/ "aTv0":
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

$global.$addPageConfig({
  pagePath: "page/component/guide/guide",
  usingComponents: __webpack_require__("4UC9")

});
Page({
  data: {
    list: [{
      url: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
      x: '150rpx',
      y: '200rpx',
      width: '200px',
      height: '200px'
    }, {
      url: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*whN9RZGSym8AAAAAAAAAAABkARQnAQ',
      x: '250rpx',
      y: '150rpx',
      width: '200px',
      height: '100px'
    }, {
      url: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
      x: '350rpx',
      y: '300rpx',
      width: '100px',
      height: '100px'
    }, {
      url: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*whN9RZGSym8AAAAAAAAAAABkARQnAQ',
      x: '400rpx',
      y: '400rpx',
      width: '200rpx',
      height: '300rpx'
    }],
    guideShow: false,
    guideJump: true
  },
  onLoad: function onLoad() {},
  closeGuide: function closeGuide() {
    this.setData({
      guideShow: false
    });
  },
  onShowJumpGuide: function onShowJumpGuide() {
    this.setData({
      guideShow: true,
      guideJump: true
    });
  },
  onShowGuide: function onShowGuide() {
    this.setData({
      guideShow: true,
      guideJump: false
    });
  }
});

/***/ }),

/***/ "aYgn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("YuDG");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "aurx":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "b9Q3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("yTKl");
/* harmony import */ var M_1_ = __webpack_require__("2gCX");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "bEpO":
/***/ (function(module, exports) {

module.exports = {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"}

/***/ }),

/***/ "bGC3":
/***/ (function(module, exports) {

module.exports = {"list":"/node_modules/mini-ali-ui/es/list/index","input-item":"/node_modules/mini-ali-ui/es/input-item/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "bIa9":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "bJdy":
/***/ (function(module, exports) {

module.exports = {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"}

/***/ }),

/***/ "bMs7":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "bPUD":
/***/ (function(module, exports) {

module.exports = {"loading":"/node_modules/mini-ali-ui/es/loading/index"}

/***/ }),

/***/ "bQWg":
/***/ (function(module, exports) {

module.exports = {"mask":"/node_modules/mini-ali-ui/es/mask/index"}

/***/ }),

/***/ "bS8I":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "bSCT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("6kkV");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "bYYR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtUnit = __webpack_require__("K4/D");

var _fmtUnit2 = _interopRequireDefault(_fmtUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/grid/index",
  usingComponents: __webpack_require__("mO6b")

});

Component({
  data: {
    getColumnBorderIndex: 0
  },
  props: {
    columnNum: 3,
    circular: false,
    list: [],
    onGridItemClick: function onGridItemClick() {},
    hasLine: true,
    infinite: false,
    infiniteHeight: (0, _fmtUnit2.default)('90px'),
    gridName: ''
  },
  didMount: function didMount() {
    this.clearBorder();
    this.createGridName();
  },
  didUpdate: function didUpdate() {
    this.clearBorder();
    this.createGridName();
  },
  methods: {
    onGridItemClick: function onGridItemClick(e) {
      this.props.onGridItemClick({
        detail: {
          index: e.target.dataset.index
        }
      });
    },
    clearBorder: function clearBorder() {
      var _this$props = this.props,
          list = _this$props.list,
          columnNum = _this$props.columnNum;

      if (columnNum === 3) {
        var rows = list.length % columnNum;
        this.setData({
          getColumnBorderIndex: rows === 0 ? 3 : rows
        });
      }
    },
    createGridName: function createGridName() {
      var _this$props2 = this.props,
          infinite = _this$props2.infinite,
          gridName = _this$props2.gridName;

      if (infinite) {
        if (gridName === '' && !gridName) {
          this.props.gridName = "grid" + Math.floor(Math.random() * 100000);
          this.setData({
            gridName: this.props.gridName
          });
        }
      }
    }
  }
});

/***/ }),

/***/ "beWc":
/***/ (function(module, exports) {

module.exports = {"list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index","grid":"/node_modules/mini-ali-ui/es/grid/index"}

/***/ }),

/***/ "bfDU":
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

$global.$addPageConfig({
  pagePath: "page/API/request/request",
  usingComponents: __webpack_require__("vAAL")

});
Page({
  httpRequest: function httpRequest() {
    my.httpRequest({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        from: '支付宝',
        production: 'AlipayJSAPI'
      },
      dataType: 'json',
      success: function success(res) {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: function fail(res) {
        my.alert({ content: JSON.stringify(res) });
      },
      complete: function complete(res) {
        // my.alert({title: 'complete'});
      }
    });
  },
  request: function request() {
    my.request({
      url: 'https://httpbin.org/post',
      method: 'POST',
      data: {
        from: '支付宝',
        production: 'AlipayJSAPI'
      },
      dataType: 'json',
      success: function success(res) {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: function fail(res) {
        my.alert({ content: JSON.stringify(res) });
      },
      complete: function complete(res) {
        // my.alert({title: 'complete'});
      }
    });
  },
  requestAndAbort: function requestAndAbort() {
    var task = my.request({
      url: 'https://httpbin.org/post',
      method: 'POST',
      data: {
        from: '支付宝',
        production: 'AlipayJSAPI'
      },
      dataType: 'json',
      success: function success(res) {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: function fail(res) {
        my.alert({ content: JSON.stringify(res) });
      },
      complete: function complete(res) {
        // my.alert({title: 'complete'});
      }
    });
    task.abort();
  }
});

/***/ }),

/***/ "blBR":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "br1U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0BCK");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "bxy5":
/***/ (function(module, exports) {

module.exports = {"container":"/node_modules/mini-ali-ui/es/container/index","title":"/node_modules/mini-ali-ui/es/title/index"}

/***/ }),

/***/ "bzE+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("MNuM");
/* harmony import */ var M_1_ = __webpack_require__("EUVD");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "c/UB":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "c1eU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("IjIf");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "c68h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("XhUc");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "cOYJ":
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

$global.$addPageConfig({
  pagePath: "page/API/navigation-bar-loading/navigation-bar-loading",
  usingComponents: __webpack_require__("blBR")

});
Page({
  showNavigationBarLoading: function showNavigationBarLoading() {
    my.showNavigationBarLoading();
  },
  hideNavigationBarLoading: function hideNavigationBarLoading() {
    my.hideNavigationBarLoading();
  }
});

/***/ }),

/***/ "cVg2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0iQm");
/* harmony import */ var M_1_ = __webpack_require__("cyyQ");
/* harmony import */ var M_2_ = __webpack_require__("rcyF");
/* harmony import */ var M_3_ = __webpack_require__("MuGI");
/* harmony import */ var M_3__default = /*#__PURE__*/__webpack_require__.n(M_3_);

  


  
  

/***/ }),

/***/ "cYqa":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "cafp":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("SF+C")(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),

/***/ "cfBN":
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

$global.$addPageConfig({
  pagePath: "page/component/rich-text/rich-text",
  usingComponents: __webpack_require__("Lnpd")

});
Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'wrapper',
        style: 'color: orange;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }]
  },
  tap: function tap() {
    console.log('tap');
  }
});

/***/ }),

/***/ "chAR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Vnk/");
/* harmony import */ var M_1_ = __webpack_require__("BZW3");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "chCh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $defineProperty = __webpack_require__("fJad");
var createDesc = __webpack_require__("aurx");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
};

/***/ }),

/***/ "ckQ5":
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

$global.$addPageConfig({
  pagePath: "page/component/collapse/index",
  usingComponents: __webpack_require__("ErnP")

});
Page({
  data: {
    randomLine: 0
  },
  onShow: function onShow() {
    this.setData({
      randomLine: parseInt(Math.random() * 20 + 1, 0)
    });
  },
  onChange: function onChange(e) {
    console.log('collapse change', e);
  }
});

/***/ }),

/***/ "coKe":
/***/ (function(module, exports) {

module.exports = {"tips-plain":"/node_modules/mini-ali-ui/es/tips/tips-plain/index"}

/***/ }),

/***/ "cwUD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("PZ8K");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "cyDR":
/***/ (function(module, exports) {

module.exports = {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "cyyQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Em6C");
/* harmony import */ var M_1_ = __webpack_require__("GwvB");
/* harmony import */ var M_2_ = __webpack_require__("57M5");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "d03/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("wrQP");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "d0TM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("I8in");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "d7Dd":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "dE0g":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "dLlc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("enOV");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "dPo+":
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

$global.$addPageConfig({
  pagePath: "page/component/avatar/index",
  usingComponents: __webpack_require__("/QP9")

});
Page({
  data: {},
  handleError: function handleError(e) {
    console.log(e);
  }
});

/***/ }),

/***/ "dYpx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("S++R");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "daId":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("qUWl");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "dfKd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("7g8k");
/* harmony import */ var M_1_ = __webpack_require__("u/z4");
/* harmony import */ var M_2_ = __webpack_require__("0iQm");
/* harmony import */ var M_3_ = __webpack_require__("cyyQ");
/* harmony import */ var M_4_ = __webpack_require__("5qd4");
/* harmony import */ var M_4__default = /*#__PURE__*/__webpack_require__.n(M_4_);

  



  
  

/***/ }),

/***/ "doTE":
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

$global.$addPageConfig({
  pagePath: "page/API/alert/alert",
  usingComponents: __webpack_require__("FgHi")

});
Page({
  alert: function alert() {
    my.alert({
      title: '亲',
      content: '您本月的账单已出',
      buttonText: '我知道了',
      success: function success() {
        my.alert({
          title: '用户点击了「我知道了」'
        });
      }
    });
  }
});

/***/ }),

/***/ "dpDf":
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

$global.$addPageConfig({
  pagePath: "page/API/user-capture-screen/user-capture-screen",
  usingComponents: __webpack_require__("eIYv")

});
Page({
  data: {
    condition: false
  },
  onReady: function onReady() {
    my.onUserCaptureScreen(function () {
      my.alert({
        content: '收到用户截图'
      });
    });
  },
  offUserCaptureScreen: function offUserCaptureScreen() {
    my.offUserCaptureScreen();
    this.setData({
      condition: false
    });
  },
  onUserCaptureScreen: function onUserCaptureScreen() {
    my.onUserCaptureScreen(function () {
      my.alert({
        content: '收到用户截图'
      });
    });
    this.setData({
      condition: true
    });
  }
});

/***/ }),

/***/ "dyTD":
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

$global.$addPageConfig({
  pagePath: "page/component/filter/single_2/index",
  usingComponents: __webpack_require__("n86A")

});
Page({
  data: {
    show: true,
    items: [{ id: 1, value: '衣服', subtitle: '子标题', selected: true }, { id: 1, value: '橱柜', subtitle: '子标题' }]
  },
  handleCallBack: function handleCallBack(data) {
    my.alert({
      content: data
    });
  },
  toggleFilter: function toggleFilter() {
    this.setData({
      show: !this.data.show
    });
  }
});

/***/ }),

/***/ "e1vt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("V8QI");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "e8Nh":
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

$global.$addPageConfig({
  pagePath: "page/component/page-result/busy/index",
  usingComponents: __webpack_require__("wLnV")

});
Page({
  data: {
    footer: [{
      text: '刷新'
    }]
  }
});

/***/ }),

/***/ "eC2Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("cOYJ");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "eDtu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("fPMY");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "eIFX":
/***/ (function(module, exports) {

module.exports = {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"}

/***/ }),

/***/ "eIYv":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "eKUv":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "eN5X":
/***/ (function(module, exports) {

module.exports = {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"}

/***/ }),

/***/ "eVeF":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "eY34":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "ebdR":
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

$global.$addPageConfig({
  pagePath: "page/component/page-result/local-logoff/index",
  usingComponents: __webpack_require__("eIFX")

});
Page({});

/***/ }),

/***/ "eh3U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("plMW");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "el+C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("OrNS");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "enOV":
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

$global.$addPageConfig({
  pagePath: "page/API/text-risk-identification/text-risk-identification",
  usingComponents: __webpack_require__("H+t+")

});
Page({
  data: {
    value: ''
  },
  handleInput: function handleInput(event) {
    this.setData({
      value: event.detail.value
    });
  },
  textRiskIdentification: function textRiskIdentification() {
    var _this = this;

    my.textRiskIdentification({
      content: this.data.value,
      type: ['keyword', '0', '1', '2', '3'],
      success: function success(res) {
        my.alert({
          title: _this.data.value,
          content: JSON.stringify(res)
        });
      }
    });
  }
});

/***/ }),

/***/ "epEI":
/***/ (function(module, exports) {

module.exports = {"footer":"/node_modules/mini-ali-ui/es/footer/index"}

/***/ }),

/***/ "eutE":
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

$global.$addPageConfig({
  pagePath: "page/API/get-user-info/get-user-info",
  usingComponents: __webpack_require__("oyC2")

});
var app = getApp();
Page({
  data: {
    hasUserInfo: false
  },
  getUserInfo: function getUserInfo() {
    var _this = this;

    my.getAuthCode({
      scopes: 'auth_user',
      fail: function fail(error) {
        console.error('getAuthCode', error);
      },
      success: function success() {
        // do login...
        // then
        my.getAuthUserInfo({
          fail: function fail(error) {
            console.error('getAuthUserInfo', error);
          },
          success: function success(userInfo) {
            console.log("userInfo:", userInfo);
            _this.setData({
              userInfo: userInfo,
              hasUserInfo: true
            });
            abridge.alert({
              title: JSON.stringify(userInfo) // alert 框的标题
            });
          }
        });
      }
    });
  },
  clear: function clear() {
    this.setData({
      hasUserInfo: false,
      userInfo: {}
    });
  }
});

/***/ }),

/***/ "ewG0":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/page-result/index",
  usingComponents: __webpack_require__("OOvw")

});
var defaultEvent = function defaultEvent() {};

var COUNT_DOWN_TIMES = 10;
Component({
  props: {
    className: '',
    type: 'network',
    local: false,
    footer: null,
    onTapLeft: defaultEvent,
    onTapRight: defaultEvent,
    isCountDown: false,
    countDownText: '重新刷新'
  },
  data: {
    defaultTitle: {
      network: '网络不给力',
      error: '页面遇到一些小问题',
      busy: '请稍等哦，马上出来',
      empty: '什么都没有',
      logoff: '此用户已注销',
      payment: '付款没成功',
      redpacket: '什么都没有'
    },
    defaultBrief: {
      network: '世界上最遥远的距离莫过于此',
      error: '请稍后刷新',
      busy: '前面还有很多朋友在排队',
      empty: '前不见古人，后不见来者',
      logoff: '',
      payment: '请重新付款',
      redpacket: '红包已领空'
    },
    countDownTitle: ''
  },
  didMount: function didMount() {
    var _this = this;

    var _this$props = this.props,
        countDownText = _this$props.countDownText,
        isCountDown = _this$props.isCountDown;

    if (!isCountDown) {
      return;
    }

    var countDownTimes = COUNT_DOWN_TIMES;
    this._timer = null;

    var execCountDown = function execCountDown() {
      _this.setData({
        countDownTitle: countDownTimes + " \u79D2\u540E" + countDownText
      });

      countDownTimes -= 1;

      if (countDownTimes < 0) {
        clearTimeout(_this._timer);

        _this.setData({
          isCountDown: false
        });
      } else {
        _this._timer = setTimeout(execCountDown, 1000);
      }
    };

    execCountDown();
  },
  didUnmount: function didUnmount() {
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  },
  methods: {
    onDefaultTap: function onDefaultTap(propName) {
      if (this.props.footer && this.props[propName]) {
        var _this$props2;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        (_this$props2 = this.props)[propName].apply(_this$props2, args);
      } else {
        defaultEvent();
      }
    },
    onLeftButton: function onLeftButton() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.onDefaultTap.apply(this, ['onTapLeft'].concat(args));
    },
    onRightButton: function onRightButton() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.onDefaultTap.apply(this, ['onTapRight'].concat(args));
    }
  }
});

/***/ }),

/***/ "ewOp":
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

$global.$addPageConfig({
  pagePath: "page/component/radio/radio",
  usingComponents: __webpack_require__("Njrr")

});
Page({
  data: {
    items: [{ name: 'angular', value: 'AngularJS' }, { name: 'react', value: 'React', checked: true }, { name: 'polymer', value: 'Polymer' }, { name: 'vue', value: 'Vue.js' }, { name: 'ember', value: 'Ember.js' }, { name: 'backbone', value: 'Backbone.js', disabled: true }]
  },
  onSubmit: function onSubmit(e) {
    my.alert({
      content: e.detail.value.lib
    });
    console.log('onSubmit', e.detail);
  },
  onReset: function onReset(e) {
    console.log('onReset', e);
  },
  radioChange: function radioChange(e) {
    console.log('你选择的框架是：', e.detail.value);
  }
});

/***/ }),

/***/ "ewbR":
/***/ (function(module, exports) {

module.exports = {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "f/Fx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("HIzF");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "f/sb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("iQ0z");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "f3Yl":
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

$global.$addPageConfig({
  pagePath: "page/component/slider/slider",
  usingComponents: __webpack_require__("uy9u")

});
var pageData = {};

for (var i = 1; i < 5; ++i) {
  (function (index) {
    pageData['slider' + index + 'change'] = function (e) {
      console.log('slider' + index + '发生change事件，携带值为', e.detail.value);
    };
  })(i);
}
Page(pageData);

/***/ }),

/***/ "fGvS":
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

$global.$addPageConfig({
  pagePath: "page/API/pull-down-refresh/pull-down-refresh",
  usingComponents: __webpack_require__("YGLm")

});
Page({
  onPullDownRefresh: function onPullDownRefresh() {
    console.log('onPullDownRefresh', new Date());
  },
  stopPullDownRefresh: function stopPullDownRefresh() {
    my.stopPullDownRefresh({
      complete: function complete(res) {
        console.log(res, new Date());
      }
    });
  }
});

/***/ }),

/***/ "fHZM":
/***/ (function(module, exports) {

module.exports = {"coupon":"/node_modules/mini-ali-ui/es/coupon/index","button":"/node_modules/mini-ali-ui/es/button/index","am-checkbox":"/node_modules/mini-ali-ui/es/am-checkbox/index","stepper":"/node_modules/mini-ali-ui/es/stepper/index"}

/***/ }),

/***/ "fJad":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("7aEC");
var IE8_DOM_DEFINE = __webpack_require__("OTTx");
var toPrimitive = __webpack_require__("tueE");
var dP = Object.defineProperty;

exports.f = __webpack_require__("cafp") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "fPMY":
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

$global.$addPageConfig({
  pagePath: "page/API/animation/animation",
  usingComponents: __webpack_require__("TD4M")

});
Page({
  onReady: function onReady() {
    this.animation = my.createAnimation();
  },
  rotate: function rotate() {
    this.animation.rotate(Math.random() * 720 - 360).step();
    this.setData({ animation: this.animation.export() });
  },
  scale: function scale() {
    this.animation.scale(Math.random() * 2).step();
    this.setData({ animation: this.animation.export() });
  },
  translate: function translate() {
    this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step();
    this.setData({ animation: this.animation.export() });
  },
  skew: function skew() {
    this.animation.skew(Math.random() * 90, Math.random() * 90).step();
    this.setData({ animation: this.animation.export() });
  },
  rotateAndScale: function rotateAndScale() {
    this.animation.rotate(Math.random() * 720 - 360).scale(Math.random() * 2).step();
    this.setData({ animation: this.animation.export() });
  },
  rotateThenScale: function rotateThenScale() {
    this.animation.rotate(Math.random() * 720 - 360).step().scale(Math.random() * 2).step();
    this.setData({ animation: this.animation.export() });
  },
  all: function all() {
    this.animation.rotate(Math.random() * 720 - 360).scale(Math.random() * 2).translate(Math.random() * 100 - 50, Math.random() * 100 - 50).skew(Math.random() * 90, Math.random() * 90).step();
    this.setData({ animation: this.animation.export() });
  },
  allInQueue: function allInQueue() {
    this.animation.rotate(Math.random() * 720 - 360).step().scale(Math.random() * 2).step().translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step().skew(Math.random() * 90, Math.random() * 90).step();
    this.setData({ animation: this.animation.export() });
  },
  reset: function reset() {
    this.animation.rotate3d(0, 0, 0, 0).rotateX(0).rotateY(0).rotateZ(0).scale(1).translate(0, 0).skew(0, 0).step({ duration: 0 });
    this.setData({ animation: this.animation.export() });
  }
});

/***/ }),

/***/ "fXfe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("CChD");
/* harmony import */ var M_1_ = __webpack_require__("aTv0");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "fYNj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("LL8X");
/* harmony import */ var M_1_ = __webpack_require__("0iQm");
/* harmony import */ var M_2_ = __webpack_require__("cyyQ");
/* harmony import */ var M_3_ = __webpack_require__("Tf4m");
/* harmony import */ var M_3__default = /*#__PURE__*/__webpack_require__.n(M_3_);

  


  
  

/***/ }),

/***/ "fkyn":
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

$global.$addPageConfig({
  pagePath: "page/component/picker/picker",
  usingComponents: __webpack_require__("kUbB")

});
Page({
  data: {
    array: ['中国', '美国', '巴西', '日本'],
    objectArray: [{
      id: 0,
      name: '美国'
    }, {
      id: 1,
      name: '中国'
    }, {
      id: 2,
      name: '巴西'
    }, {
      id: 3,
      name: '日本'
    }],
    arrIndex: 0,
    index: 0
  },
  bindPickerChange: function bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value
    });
  },
  bindObjPickerChange: function bindObjPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      arrIndex: e.detail.value
    });
  }
});

/***/ }),

/***/ "fli/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("LLji");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "fwJe":
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

$global.$addPageConfig({
  pagePath: "page/API/options-select/options-select",
  usingComponents: __webpack_require__("7v3T")

});
Page({
  openOne: function openOne() {
    my.optionsSelect({
      title: "还款日选择",
      optionsOne: ["每周一", "每周二", "每周三", "每周四", "每周五", "每周六", "每周日"],
      selectedOneIndex: 2,
      success: function success(res) {
        my.alert({
          content: JSON.stringify(res, null, 2)
        });
      }
    });
  },
  openTwo: function openTwo() {
    my.optionsSelect({
      title: "出生年月选择",
      optionsOne: ["2014年", "2013年", "2012年", "2011年", "2010年", "2009年", "2008年"],
      optionsTwo: ["一月", '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      selectedOneIndex: 3,
      selectedTwoIndex: 5,
      success: function success(res) {
        my.alert({
          content: JSON.stringify(res, null, 2)
        });
      }
    });
  }
});

/***/ }),

/***/ "g/bL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("pskS");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "g3EX":
/***/ (function(module, exports) {

module.exports = {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "g3u8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtUnit = __webpack_require__("K4/D");

var _fmtUnit2 = _interopRequireDefault(_fmtUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/pagination/index",
  usingComponents: __webpack_require__("pigB")

});

Component({
  props: {
    infinite: false,
    className: '',
    fillColor: '#ddd',
    frontColor: '#006EFF',
    pagerName: '',
    height: (0, _fmtUnit2.default)('100px'),
    white: false,
    max: 5,
    currentPage: 1
  },
  methods: {
    clacWidth: function clacWidth(pagerName) {
      var _this = this;

      my.createSelectorQuery().select("#" + pagerName).boundingClientRect().exec(function (ret) {
        _this.wrapWidth = ret[0].width;
      });
      return this.wrapWidth;
    },
    onScroll: function onScroll(e) {
      var infinitePageNumber = {};
      var _e$detail = e.detail,
          scrollLeft = _e$detail.scrollLeft,
          scrollWidth = _e$detail.scrollWidth;
      var viewWidth = this.clacWidth(e.currentTarget.dataset.id);
      infinitePageNumber[e.currentTarget.dataset.id] = {
        pageDeg: Math.round(scrollLeft / (scrollWidth - viewWidth) * 16) > 16 ? 16 : Math.round(scrollLeft / (scrollWidth - viewWidth) * 16)
      };
      this.setData({
        pageDeg: infinitePageNumber[e.currentTarget.dataset.id].pageDeg
      });
    }
  }
});

/***/ }),

/***/ "g6MZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtEvent = __webpack_require__("G+tX");

var _fmtEvent2 = _interopRequireDefault(_fmtEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/long-password/index",
  usingComponents: __webpack_require__("g3EX")

});

Component({
  props: {
    className: '',
    inputCls: '',
    last: false,
    value: '',
    name: '',
    type: 'text',
    // password: false,
    // placeholder: '',
    placeholderClass: '',
    placeholderStyle: '',
    disabled: false,
    maxlength: 140,
    focus: false,
    clear: true,
    // 默认有清除功能
    syncInput: false,
    enableNative: false,
    // 兼容安卓input的输入bug
    onInput: function onInput() {},
    onConfirm: function onConfirm() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onClear: function onClear() {}
  },
  data: {
    _focus: false,
    visible: false
  },
  didMount: function didMount() {
    this.setData({
      _focus: this.props.focus
    });
  },
  methods: {
    onBlur: function onBlur(e) {
      this.setData({
        _focus: false
      });
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onBlur(event);
    },
    onConfirm: function onConfirm(e) {
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onConfirm(event);
    },
    onFocus: function onFocus(e) {
      this.setData({
        _focus: true
      });
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onFocus(event);
    },
    onInput: function onInput(e) {
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onInput(event);
    },
    onClear: function onClear(e) {
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onClear(event);
    },
    onSwitchVisible: function onSwitchVisible() {
      this.setData({
        visible: !this.data.visible
      });
    }
  }
});

/***/ }),

/***/ "g8VS":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "gAAq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("o+Xk");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "gGI1":
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

$global.$addPageConfig({
  pagePath: "page/component/page-result/redpacket/index",
  usingComponents: __webpack_require__("bJdy")

});
Page({
  data: {
    footer: [{
      text: '操作1'
    }, {
      text: '操作2'
    }]
  }
});

/***/ }),

/***/ "gHiM":
/***/ (function(module, exports) {

module.exports = {"search-bar":"/node_modules/mini-ali-ui/es/search-bar/index"}

/***/ }),

/***/ "gM15":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("yQnl");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "gNCP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Vnk/");
/* harmony import */ var M_1_ = __webpack_require__("Y10e");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "gPTu":
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

$global.$addPageConfig({
  pagePath: "page/API/create-selector-query/create-selector-query",
  usingComponents: __webpack_require__("Sw68")

});
Page({
  createSelectorQuery: function createSelectorQuery() {
    my.createSelectorQuery().select('#non-exists').boundingClientRect().select('#one').boundingClientRect().selectAll('.all').boundingClientRect().select('#scroll').scrollOffset().selectViewport().boundingClientRect().selectViewport().scrollOffset().exec(function (ret) {
      console.log(ret);
      my.alert({
        content: JSON.stringify(ret, null, 2)
      });
    });
  }
});

/***/ }),

/***/ "gRlN":
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

$global.$addPageConfig({
    pagePath: "page/API/ocr-bank-card/ocr-bank-card",
    usingComponents: __webpack_require__("Y5Zq")

});
Page({
    data: {
        textArry: [],
        imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/HRJifiDxDoDRnmrIzFQn.jpg"
    },
    onLoad: function onLoad() {
        this.callFn(this.data.imgUrl);
    },
    callFn: function callFn(url) {
        var _this = this;

        my.showLoading({
            content: '加载中...',
            delay: 100
        });
        my.ocr({
            ocrType: 'ocr_bank_card',
            path: url,
            success: function success(res) {
                var data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
                var card_num = data.card_num;

                _this.setData({
                    imgUrl: url,
                    textArry: [{ title: '卡号', message: card_num }]
                });
                my.hideLoading();
            },
            fail: function fail(res) {
                my.hideLoading();

                my.alert({
                    title: 'fail',
                    content: JSON.stringify(res)
                });
            }

        });
    },
    photoSubmit: function photoSubmit() {
        var _this2 = this;

        //点击上传
        my.chooseImage({
            count: 1,
            success: function success(res) {
                _this2.callFn(res.apFilePaths[0]);
            }
        });
    },
    imageLoad: function imageLoad(e) {},
    imageError: function imageError(e) {}
});

/***/ }),

/***/ "gVp1":
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

$global.$addPageConfig({
  pagePath: "page/API/date-picker/date-picker",
  usingComponents: __webpack_require__("wZDM")

});
Page({
  datePicker: function datePicker() {
    my.datePicker({
      currentDate: '2016-10-10',
      startDate: '2016-10-9',
      endDate: '2017-10-9',
      success: function success(res) {
        my.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      }
    });
  },
  datePickerHMS: function datePickerHMS() {
    my.datePicker({
      format: 'HH:mm:ss',
      currentDate: '12:12:12',
      startDate: '11:11:11',
      endDate: '13:13:13',
      success: function success(res) {
        my.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      }
    });
  },
  datePickerYMDHMS: function datePickerYMDHMS() {
    my.datePicker({
      format: 'yyyy-MM-dd HH:mm:ss',
      currentDate: '2012-01-09 11:11:11',
      startDate: '2012-01-01 11:11:11',
      endDate: '2012-01-10 11:11:11',
      success: function success(res) {
        my.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      }
    });
  }
});

/***/ }),

/***/ "gcOw":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "gfSV":
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

$global.$addPageConfig({
  pagePath: "page/component/multi-liner/index",
  usingComponents: __webpack_require__("Gn9S")

});
Page({
  data: {
    value: '内容',
    controlled: true
  },
  onInput: function onInput(e) {
    this.setData({
      value: e.detail.value
    });
  }
});

/***/ }),

/***/ "grjx":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/calendar/index",
  usingComponents: __webpack_require__("FPKP")

});
/* eslint-disable complexity, no-param-reassign */

/* eslint max-depth: [2, 7] */
var leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var commonYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var FIRST_MONTH = 0;
var LAST_MONTH = 11;
var DAYS_PER_ROW = 7;
var COLOR_MAP = {
  1: '#ff6010',
  2: '#00b578',
  3: '#ff8f1f',
  4: '#1677ff',
  5: '#999'
}; // 获取某月第某天是星期几

function getDay(month, year, index) {
  return new Date(year, month, index).getDay();
} // 获取某月有几天


function getMonthLength(month, year) {
  if (year % 400 === 0 || year % 100 !== 0 && year % 4 === 0) {
    return leapYear[month];
  } else {
    return commonYear[month];
  }
} // 数字补位 1 -> 01


function prefixNum(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return "" + num;
  }
}

Component({
  data: {
    selectedYear: 0,
    selectedMonth: 0,
    currentDate: null,
    dates: [],
    blockType: 1 // 1.没有待办纯数字 2.有待办 用于区分不同类型日期块的样式。

  },
  props: {
    className: '',
    tagData: [],
    type: 'single',
    haveYear: false,
    prevMonthDisable: false,
    prevYearDisable: false,
    nextvMonthDisable: false,
    nextYearDisable: false
  },
  didMount: function didMount() {
    this.tapTimes = 1;
    var date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    var year = date.getFullYear();
    var month = date.getMonth();
    this.setData({
      selectedYear: year,
      selectedMonth: month,
      currentDate: date
    });
    this.refreshdates(month, year);
  },
  didUpdate: function didUpdate() {
    var dates = this.data.dates;
    var blockType = 1;

    for (var i = 0; i < dates.length; i++) {
      for (var j = 0; j < dates[i].length; j++) {
        if (this.hasTag(dates[i][j])) {
          blockType = 2;
        }
      }
    }

    this.setData({
      dates: dates,
      blockType: blockType
    });
  },
  methods: {
    onPrevYearTap: function onPrevYearTap() {
      var _this$data = this.data,
          selectedMonth = _this$data.selectedMonth,
          selectedYear = _this$data.selectedYear;
      var prevYearDisable = this.props.prevYearDisable;

      if (!prevYearDisable) {
        var year = selectedYear;
        var month = selectedMonth;
        year = selectedYear - 1;

        if (this.props.onYearChange) {
          this.props.onYearChange(year, selectedYear);
        }

        this.setData({
          selectedYear: year
        });
        this.refreshdates(month, year);
      }
    },
    onNextYearTap: function onNextYearTap() {
      var _this$data2 = this.data,
          selectedMonth = _this$data2.selectedMonth,
          selectedYear = _this$data2.selectedYear;
      var nextYearDisable = this.props.nextYearDisable;

      if (!nextYearDisable) {
        var year = selectedYear;
        var month = selectedMonth;
        year = selectedYear + 1;

        if (this.props.onYearChange) {
          this.props.onYearChange(year, selectedYear);
        }

        this.setData({
          selectedYear: year
        });
        this.refreshdates(month, year);
      }
    },
    onPrevMonthTap: function onPrevMonthTap() {
      var _this$data3 = this.data,
          selectedMonth = _this$data3.selectedMonth,
          selectedYear = _this$data3.selectedYear;
      var prevMonthDisable = this.props.prevMonthDisable;

      if (!prevMonthDisable) {
        var year = selectedYear;
        var month = selectedMonth; // 如果当前选中是一月份，前一月是去年的12月

        if (selectedMonth === FIRST_MONTH) {
          year = selectedYear - 1;
          month = LAST_MONTH;
        } else {
          month = selectedMonth - 1;
        }

        if (this.props.onMonthChange) {
          this.props.onMonthChange(month, selectedMonth);
        }

        this.setData({
          selectedYear: year,
          selectedMonth: month
        });
        this.refreshdates(month, year);
      }
    },
    onNextMonthTap: function onNextMonthTap() {
      var _this$data4 = this.data,
          selectedMonth = _this$data4.selectedMonth,
          selectedYear = _this$data4.selectedYear;
      var nextvMonthDisable = this.props.nextvMonthDisable;

      if (!nextvMonthDisable) {
        var year = selectedYear;
        var month = selectedMonth; // 如果当前选中是十二月份，下一月是去年的12月

        if (selectedMonth === LAST_MONTH) {
          year = selectedYear + 1;
          month = FIRST_MONTH;
        } else {
          month = selectedMonth + 1;
        }

        if (this.props.onMonthChange) {
          this.props.onMonthChange(month, selectedMonth);
        }

        this.setData({
          selectedYear: year,
          selectedMonth: month
        });
        this.refreshdates(month, year);
      }
    },
    refreshdates: function refreshdates(month, year) {
      this.tapTimes = 1;
      var _this$data5 = this.data,
          selectedYear = _this$data5.selectedYear,
          selectedMonth = _this$data5.selectedMonth,
          currentDate = _this$data5.currentDate;
      var firstDay = getDay(month, year, 1);
      var days = getMonthLength(month, year);
      var datesArray = [];
      var currentDateTimeStamp = +currentDate;
      var num = 0;

      for (var i = 0; i < firstDay; i++) {
        num += 1; // 如果当前选中的是一月份，前一个月是去年的12月

        var _year = selectedYear;
        var _month = selectedMonth;

        if (selectedMonth === 0) {
          _year = selectedYear - 1;
          _month = LAST_MONTH;
        } else {
          _year = selectedYear;
          _month = selectedMonth - 1;
        }

        var date = getMonthLength(_month, _year) - i;
        datesArray.unshift({
          year: _year,
          month: _month,
          date: date,
          isToday: false,
          isGray: true,
          isSelected: false,
          tag: ''
        });
      }

      for (var _i = 0; _i < days; _i++) {
        num += 1;

        var _date = _i + 1;

        var dateTimeStamp = +new Date(selectedYear, selectedMonth, _date);
        datesArray.push({
          year: selectedYear,
          month: selectedMonth,
          date: _date,
          isToday: dateTimeStamp === currentDateTimeStamp,
          isGray: false,
          isSelected: dateTimeStamp === currentDateTimeStamp,
          tag: ''
        });
      }

      var nextDate = 0;
      var daysPerPage = 35;

      if (num > 35) {
        daysPerPage = 42;
      }

      for (var _i2 = 0; _i2 < daysPerPage - days - firstDay; _i2++) {
        // 如果是12月，下月是第二年的1月份
        nextDate += 1;
        var _year2 = selectedYear;
        var _month2 = selectedMonth;

        if (selectedMonth === LAST_MONTH) {
          _year2 = selectedYear + 1;
          _month2 = FIRST_MONTH;
        } else {
          _year2 = selectedYear;
          _month2 = selectedMonth + 1;
        }

        datesArray.push({
          year: _year2,
          month: _month2,
          date: nextDate,
          isToday: false,
          isGray: true,
          isSelected: false,
          tag: ''
        });
      }

      var blockType = 1;

      for (var _i3 = 0; _i3 < datesArray.length; _i3++) {
        if (this.hasTag(datesArray[_i3])) {
          blockType = 2;
        }
      }

      var dates = [];
      var weekDates = [];

      for (var _i4 = 0; _i4 < datesArray.length; _i4++) {
        weekDates.push(datesArray[_i4]);

        if ((_i4 + 1) % DAYS_PER_ROW === 0) {
          dates.push([].concat(weekDates));
          weekDates = [];
        }
      }

      this.setData({
        dates: dates,
        blockType: blockType
      });
    },
    hasTag: function hasTag(dateObj) {
      var tagData = this.props.tagData; // 去重由调用者处理

      if (tagData.length === 0) {
        dateObj.tag = '';
        return false;
      }

      return tagData.some(function (item) {
        var dateArr = item.date.split('-');
        var dateStr = []; // 兼容ios下new Date('2018-1-1')格式返回invalid Date的问题

        for (var i = 0; i < dateArr.length; i++) {
          dateStr.push(dateArr[i].length > 1 ? dateArr[i] : "0" + dateArr[i]);
        }

        var date = new Date(dateStr.join('-'));

        if (dateObj.year === date.getFullYear() && dateObj.month === date.getMonth() && dateObj.date === date.getDate()) {
          dateObj.tag = item.tag;
          dateObj.color = COLOR_MAP[item.tagColor];
          dateObj.disable = item.disable;
          return true;
        } else {
          dateObj.tag = '';
          return false;
        }
      });
    },
    getDateGap: function getDateGap(day1, day2) {
      var date1 = +new Date(day1.year, prefixNum(day1.month), prefixNum(day1.date));
      var date2 = +new Date(day2.year, prefixNum(day2.month), prefixNum(day2.date));
      return (date1 - date2) / (24 * 3600 * 1000);
    },
    makeDate: function makeDate(dateObj) {
      return new Date(dateObj.year + "-" + prefixNum(dateObj.month + 1) + "-" + prefixNum(dateObj.date));
    },
    onDateTap: function onDateTap(event) {
      var dates = this.data.dates;
      var _event$currentTarget$ = event.currentTarget.dataset,
          year = _event$currentTarget$.year,
          month = _event$currentTarget$.month,
          date = _event$currentTarget$.date;
      var type = this.props.type;

      if (type === 'range') {
        if (this.tapTimes % 2 === 0) {
          this.tapTimes += 1;
          this.endDate = {
            year: year,
            month: month,
            date: date
          };
          var dateGap = this.getDateGap(this.startDate, this.endDate);

          if (dateGap > 0) {
            var _ref = [this.endDate, this.startDate];
            this.startDate = _ref[0];
            this.endDate = _ref[1];
          }

          var hasDisable = false;

          for (var i = 0; i < dates.length; i++) {
            for (var j = 0; j < dates[i].length; j++) {
              var dateObj = dates[i][j];
              dateObj.isStart = false;
              dateObj.isMiddle = false;
              dateObj.isEnd = false;
              var startDateGap = this.getDateGap(dateObj, this.startDate);
              var endDateGap = this.getDateGap(dateObj, this.endDate);

              if (dateObj.year === year && dateObj.month === month && dateObj.date === date && dateObj.disable) {
                hasDisable = true;
              }

              if (startDateGap > 0 && endDateGap < 0) {
                if (dateObj.disable) {
                  hasDisable = true;
                }

                if (dateGap !== 0) {
                  if (j === 0) {
                    dateObj.isStart = true;
                  } else if (j === 6) {
                    dateObj.isEnd = true;
                  } else {
                    dateObj.isMiddle = true;
                  }
                } else {
                  dateObj.isSelected = true;
                }
              }

              if (this.startDate.year === dateObj.year && this.startDate.month === dateObj.month && this.startDate.date === dateObj.date && dateGap !== 0) {
                if (j === 6) {
                  dateObj.isSelected = true;
                } else {
                  dateObj.isStart = true;
                }
              }

              if (this.endDate.year === dateObj.year && this.endDate.month === dateObj.month && this.endDate.date === dateObj.date && dateGap !== 0) {
                if (j === 0) {
                  dateObj.isSelected = true;
                } else {
                  dateObj.isEnd = true;
                }
              }
            }
          }

          if (hasDisable) {
            this.props.onSelectHasDisableDate([this.makeDate(this.startDate), this.makeDate(this.endDate)]);
            return;
          }

          if (this.props.onSelect) {
            this.props.onSelect([this.makeDate(this.startDate), this.makeDate(this.endDate)]);
          }
        } else {
          var isDisable = false;

          for (var _i5 = 0; _i5 < dates.length; _i5++) {
            for (var _j = 0; _j < dates[_i5].length; _j++) {
              var _dateObj = dates[_i5][_j];

              if (_dateObj.year === year && _dateObj.month === month && _dateObj.date === date) {
                if (_dateObj.disable) {
                  // console.log(1111);
                  isDisable = true;
                  _dateObj.isSelected = false;
                } else {
                  _dateObj.isSelected = true;
                }

                _dateObj.isStart = false;
                _dateObj.isMiddle = false;
                _dateObj.isEnd = false;
              } else {
                _dateObj.isSelected = false;
                _dateObj.isStart = false;
                _dateObj.isMiddle = false;
                _dateObj.isEnd = false;
              }
            }
          }

          if (!isDisable) {
            this.tapTimes += 1;
          }

          this.startDate = {
            year: year,
            month: month,
            date: date
          };
        }

        this.setData({
          dates: dates
        });
      } else {
        var _isDisable = false;

        for (var _i6 = 0; _i6 < dates.length; _i6++) {
          for (var _j2 = 0; _j2 < dates[_i6].length; _j2++) {
            var _dateObj2 = dates[_i6][_j2];

            if (_dateObj2.year === year && _dateObj2.month === month && _dateObj2.date === date) {
              _dateObj2.isSelected = true;

              if (_dateObj2.disable) {
                _isDisable = true;
              }
            } else {
              _dateObj2.isSelected = false;
            }
          }
        }

        if (_isDisable) {
          return;
        }

        this.setData({
          dates: dates
        });

        if (this.props.onSelect) {
          this.props.onSelect([this.makeDate({
            year: year,
            month: month,
            date: date
          }), undefined]);
        }
      }
    }
  }
});

/***/ }),

/***/ "gy/j":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "h0HB":
/***/ (function(module, exports) {

module.exports = {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"}

/***/ }),

/***/ "h7Fz":
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

$global.$addPageConfig({
  pagePath: "page/API/choose-location/choose-location",
  usingComponents: __webpack_require__("PkTS")

});
Page({
  data: {
    longitude: '120.126293',
    latitude: '30.274653',
    name: '黄龙万科中心',
    address: '学院路77号'
  },
  chooseLocation: function chooseLocation() {
    var that = this;
    my.chooseLocation({
      success: function success(res) {
        console.log(JSON.stringify(res));
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          name: res.name,
          address: res.address
        });
      },
      fail: function fail(error) {
        my.alert({ content: '调用失败：' + JSON.stringify(error) });
      }
    });
  }
});

/***/ }),

/***/ "h9Pb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtEvent = __webpack_require__("G+tX");

var _fmtEvent2 = _interopRequireDefault(_fmtEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/picker-item/index",
  usingComponents: __webpack_require__("5rsO")

});

Component({
  props: {
    className: '',
    value: '',
    placeholder: '',
    onSelect: function onSelect() {},
    labelCls: '',
    pickerCls: '',
    layer: '' // 表单排列位置，当为空时默认横向排列， vertical 为竖向排列

  },
  methods: {
    onPickerTap: function onPickerTap(e) {
      var event = (0, _fmtEvent2.default)(this.props, e);
      this.props.onPickerTap(event);
    }
  }
});

/***/ }),

/***/ "hFRF":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("7aEC");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),

/***/ "hMQ1":
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

$global.$addPageConfig({
  pagePath: "page/component/page-result/local-payment/index",
  usingComponents: __webpack_require__("yE9Z")

});
Page({
  data: {
    footer: [{
      text: '返回'
    }]
  }
});

/***/ }),

/***/ "hZzL":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "haiF":
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

$global.$addPageConfig({
  pagePath: "page/component/contact-button/contact-button",
  usingComponents: __webpack_require__("/uFj")

});
Page({
  data: {
    src: '/image/ant.png'
  }
});

/***/ }),

/***/ "hakM":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "ham1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GNlg");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "htOt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("/CB0");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "hw1v":
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

$global.$addPageConfig({
    pagePath: "page/API/ocr-business-card/ocr-business-card",
    usingComponents: __webpack_require__("Q/KD")

});
Page({
    data: {
        textArry: [],
        imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/ELiPtNKfHIGlpjOotpoC.jpg"
    },
    onLoad: function onLoad() {
        this.callFn(this.data.imgUrl);
    },
    callFn: function callFn(url) {
        var _this = this;

        my.showLoading({
            content: '加载中...',
            delay: 100
        });
        my.ocr({
            ocrType: 'ocr_business_card',
            path: url,
            success: function success(res) {
                var data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
                var name = data.name,
                    company = data.company,
                    department = data.department,
                    title = data.title,
                    tel_cell = data.tel_cell,
                    tel_work = data.tel_work,
                    addr = data.addr,
                    email = data.email;

                _this.setData({
                    imgUrl: url,
                    textArry: [{ title: '姓名', message: name }, { title: '公司', message: company }, { title: '部门', message: department }, { title: '职位', message: title }, { title: '手机号码', message: tel_cell }, { title: '电话号码', message: tel_work }, { title: '地址', message: addr }, { title: '邮箱', message: email }]
                });
                my.hideLoading();
            },
            fail: function fail(res) {
                my.hideLoading();

                my.alert({
                    title: 'fail',
                    content: JSON.stringify(res)
                });
            }

        });
    },
    photoSubmit: function photoSubmit() {
        var _this2 = this;

        //点击上传
        my.chooseImage({
            count: 1,
            success: function success(res) {
                _this2.callFn(res.apFilePaths[0]);
            }
        });
    },
    imageLoad: function imageLoad(e) {},
    imageError: function imageError(e) {}
});

/***/ }),

/***/ "hyIb":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "i4cD":
/***/ (function(module, exports) {

module.exports = {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "i9pA":
/***/ (function(module, exports) {

module.exports = {"popup":"/node_modules/mini-ali-ui/es/popup/index"}

/***/ }),

/***/ "iB5W":
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

$global.$addPageConfig({
  pagePath: "page/API/vibrate/vibrate",
  usingComponents: __webpack_require__("s5kE")

});
Page({
  vibrate: function vibrate() {
    my.vibrate({
      success: function success() {
        my.alert({ title: '振动起来了' });
      }
    });
  },
  vibrateLong: function vibrateLong() {
    if (my.canIUse('vibrateLong')) {
      my.vibrateLong(function (res) {});
    } else {
      my.alert({
        title: '客户端版本过低',
        content: 'my.vibrateLong() 需要 10.1.35 及以上版本'
      });
    }
  },
  vibrateShort: function vibrateShort() {
    if (my.canIUse('vibrateShort')) {
      my.vibrateShort(function (res) {});
    } else {
      my.alert({
        title: '客户端版本过低',
        content: 'my.vibrateShort() 需要 10.1.35 及以上版本'
      });
    }
  }
});

/***/ }),

/***/ "iC5P":
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

$global.$addPageConfig({
  pagePath: "page/component/navigator/redirect",
  usingComponents: __webpack_require__("wFTM")

});
Page({
  onLoad: function onLoad(options) {
    console.log(options);
    this.setData({
      title: options.title
    });
  }
});

/***/ }),

/***/ "iG7C":
/***/ (function(module, exports) {

module.exports = {"calendar":"/node_modules/mini-ali-ui/es/calendar/index"}

/***/ }),

/***/ "iQ0z":
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

$global.$addPageConfig({
  pagePath: "page/API/get-system-info/get-system-info",
  usingComponents: __webpack_require__("zDvU")

});
Page({
  data: {
    systemInfo: {}
  },
  getSystemInfo: function getSystemInfo() {
    var _this = this;

    my.getSystemInfo({
      success: function success(res) {
        _this.setData({
          systemInfo: res
        });
      }
    });
  },
  getSystemInfoSync: function getSystemInfoSync() {
    this.setData({
      systemInfo: my.getSystemInfoSync()
    });
  }
});

/***/ }),

/***/ "ikd/":
/***/ (function(module, exports) {

module.exports = {"list":"/node_modules/mini-ali-ui/es/list/index","picker-item":"/node_modules/mini-ali-ui/es/picker-item/index"}

/***/ }),

/***/ "inZ6":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "isJS":
/***/ (function(module, exports) {

module.exports = {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"}

/***/ }),

/***/ "itF+":
/***/ (function(module, exports) {

module.exports = {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "iy3N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ScW/");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "iyiF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("uSe5");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "j+OB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ICMH");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "j88e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("K6dJ");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "jAyS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("HrCQ");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "jElC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("YK0M");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "jHPy":
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

$global.$addPageConfig({
  pagePath: "page/component/favorite/favorite",
  usingComponents: __webpack_require__("lcuu")

});
Page({});

/***/ }),

/***/ "jPRL":
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

$global.$addPageConfig({
  pagePath: "page/API/favorite/favorite",
  usingComponents: __webpack_require__("zAeA")

});
Page({
  data: {},
  onLoad: function onLoad() {},


  // 检查是否收藏
  isCollected: function isCollected() {
    if (my.canIUse('isCollected')) {
      my.isFaisCollectedvorite({
        success: function success(res) {
          my.showToast({
            title: '查询结果',
            content: JSON.stringify(res)
          });
        },
        fail: function fail(error) {
          my.showToast({ content: 'fail' + JSON.stringify(error) });
        }
      });
    } else {
      my.alert({
        title: '版本过低',
        content: 'my.isCollected() 客户端10.1.65开始支持'
      });
    }
  }
});

/***/ }),

/***/ "jbmm":
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

$global.$addPageConfig({
  pagePath: "page/API/download-file/download-file",
  usingComponents: __webpack_require__("+YOP")

});
Page({
  download: function download() {
    my.downloadFile({
      url: 'http://img.alicdn.com/tfs/TB1x669SXXXXXbdaFXXXXXXXXXX-520-280.jpg',
      success: function success(_ref) {
        var apFilePath = _ref.apFilePath;

        my.previewImage({
          urls: [apFilePath]
        });
      },
      fail: function fail(res) {
        my.alert({
          content: res.errorMessage || res.error
        });
      }
    });
  }
});

/***/ }),

/***/ "jj4B":
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

$global.$addPageConfig({
  pagePath: "page/component/navigator/navigator",
  usingComponents: __webpack_require__("5pwj")

});
Page({});

/***/ }),

/***/ "jzDW":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/coupon/index",
  usingComponents: __webpack_require__("2zds")

});
Component({
  props: {
    title: '',
    used: false,
    onCouponClick: function onCouponClick() {},
    // 票券的扩展类型
    extra: true,
    moreBtn: '规则详情',
    moreHide: true
  },
  methods: {
    onCouponClick: function onCouponClick(e) {
      var onCouponClick = this.props.onCouponClick;
      onCouponClick(e);
    },
    catchActionTap: function catchActionTap() {},
    changeMoreState: function changeMoreState() {
      var moreHide = this.props.moreHide;
      this.props.moreHide = !moreHide;
      this.setData({
        moreHide: !moreHide
      });
    }
  }
});

/***/ }),

/***/ "k+xx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("wgtC");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "k54z":
/***/ (function(module, exports) {

module.exports = {"loading":"/node_modules/mini-ali-ui/es/loading/index"}

/***/ }),

/***/ "kGLg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("7g8k");
/* harmony import */ var M_1_ = __webpack_require__("nrjA");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "kScr":
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

$global.$addPageConfig({
  pagePath: "page/API/watch-shake/watch-shake",
  usingComponents: __webpack_require__("E6EL")

});
Page({
  watchShake: function watchShake() {
    my.watchShake({
      success: function success() {
        console.log('动起来了');
        my.alert({ title: '动起来了 o.o' });
      }
    });
  }
});

/***/ }),

/***/ "kSt1":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "kUbB":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "kaaR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Vnk/");
/* harmony import */ var M_1_ = __webpack_require__("ebdR");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "kif3":
/***/ (function(module, exports) {

module.exports = {"tabs":"/node_modules/mini-ali-ui/es/tabs/index","tab-content":"/node_modules/mini-ali-ui/es/tabs/tab-content/index"}

/***/ }),

/***/ "kvET":
/***/ (function(module, exports) {

module.exports = {"search-bar":"/node_modules/mini-ali-ui/es/search-bar/index","block-list":"/page/common/components/block-list/block-list","list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index"}

/***/ }),

/***/ "kyFI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Xa7E");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "l9cn":
/***/ (function(module, exports) {

module.exports = {"list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index"}

/***/ }),

/***/ "lE49":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("PtWY");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "lIxC":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("L5X3");
var defined = __webpack_require__("3mz4");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),

/***/ "lJ9y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GlFR");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "lJuP":
/***/ (function(module, exports) {

module.exports = {"list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index","badge":"/node_modules/mini-ali-ui/es/badge/index"}

/***/ }),

/***/ "lQK1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("5DNE");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "lRlK":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/tabs/tab-content/index",
  usingComponents: __webpack_require__("paRN")

});
Component({
  props: {
    tabId: '',
    activeTab: ''
  }
});

/***/ }),

/***/ "lSSr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Em6C");
/* harmony import */ var M_1_ = __webpack_require__("+maN");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "lWnu":
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

$global.$addPageConfig({
    pagePath: "page/API/ocr-train-ticket/ocr-train-ticket",
    usingComponents: __webpack_require__("lj6+")

});
Page({
    data: {
        textArry: [],
        imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/bQcotnJacNoSYPeNfAjZ.jpg"
    },
    onLoad: function onLoad() {
        this.callFn(this.data.imgUrl);
    },
    callFn: function callFn(url) {
        var _this = this;

        my.showLoading({
            content: '加载中...',
            delay: 100
        });
        my.ocr({
            ocrType: 'ocr_train_ticket',
            path: url,
            success: function success(res) {
                var data = res.result;
                var date = data.date,
                    destination = data.destination,
                    origin = data.origin,
                    level = data.level,
                    number = data.number,
                    place = data.place,
                    price = data.price;

                _this.setData({
                    imgUrl: url,
                    textArry: [{ title: '乘坐时间', message: date }, { title: '目的地', message: destination }, { title: '出发地', message: origin }, { title: '车型', message: level }, { title: '车次', message: number }, { title: '座位', message: place }, { title: '票价', message: price }]
                });
                my.hideLoading();
            },
            fail: function fail(res) {
                my.hideLoading();

                my.alert({
                    title: 'fail',
                    content: JSON.stringify(res)
                });
            }

        });
    },
    photoSubmit: function photoSubmit() {
        var _this2 = this;

        //点击上传
        my.chooseImage({
            count: 1,
            success: function success(res) {
                _this2.callFn(res.apFilePaths[0]);
            }
        });
    },
    imageLoad: function imageLoad(e) {},
    imageError: function imageError(e) {}
});

/***/ }),

/***/ "lcuu":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "le+c":
/***/ (function(module, exports) {

module.exports = {"am-switch":"/node_modules/mini-ali-ui/es/am-switch/index"}

/***/ }),

/***/ "lj6+":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "lpke":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "m+eR":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
// eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "m/eg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("ewOp");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "m44C":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__("VsAR");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "mA0+":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "mCBd":
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

$global.$addPageConfig({
  pagePath: "page/component/terms/index",
  usingComponents: __webpack_require__("PkyD")

});
var cfg = {
  c1: {
    related: false,
    agreeBtn: {
      title: '同意协议并开通'
    },
    cancelBtn: {
      title: '暂不开通，仅手动缴费'
    },
    hasDesc: false
  },
  c2: {
    related: false,
    agreeBtn: {
      title: '同意协议并开通'
    },
    hasDesc: true
  },
  c3: {
    related: true,
    agreeBtn: {
      checked: true,
      title: '提交'
    }
  },
  c4: {
    related: true,
    agreeBtn: {
      title: '提交'
    }
  },
  c5: {
    related: false,
    agreeBtn: {
      title: '同意协议并提交'
    }
  },
  c6: {
    related: true,
    fixed: true,
    agreeBtn: {
      checked: true,
      title: '提交'
    }
  }
};

Page({
  data: cfg,
  onLoad: function onLoad() {},
  onSelect: function onSelect(e) {
    var selectedData = e.currentTarget.dataset.name || '';
    selectedData && my.alert({
      title: 'Terms Btns',
      content: selectedData
    });
  }
});

/***/ }),

/***/ "mEgK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0iQm");
/* harmony import */ var M_1_ = __webpack_require__("cyyQ");
/* harmony import */ var M_2_ = __webpack_require__("8Hzp");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "mGzO":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("mMCp")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () {
    SAFE_CLOSING = true;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {/* empty */}

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () {
      return { done: safe = true };
    };
    arr[ITERATOR] = function () {
      return iter;
    };
    exec(arr);
  } catch (e) {/* empty */}
  return safe;
};

/***/ }),

/***/ "mJIO":
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

$global.$addPageConfig({
    pagePath: "page/API/ocr-vehicle/ocr-vehicle",
    usingComponents: __webpack_require__("EbMY")

});
Page({
    data: {
        textArry: [{ title: '车牌号码', message: '浙BC9188' }, { title: '车辆类型', message: '小型轿车' }, { title: '所有人', message: '支小宝' }, { title: '地址', message: '浙江省宁波市江东区园丁街88弄' }, { title: '使用性质', message: '出租转非' }, { title: '品牌型号', message: '桑塔纳牌SVW7180LE1' }, { title: '识别代码', message: 'LSVAU033661234567' }, { title: '发动机号', message: '0009827' }, { title: '注册日期', message: '2006年07月21日' }, { title: '发证日期', message: '2013年07月08日' }],
        imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/xyWhFGfKPgIlwMtztXnf.jpg"
    },
    onLoad: function onLoad() {
        this.callFn(this.data.imgUrl);
    },
    callFn: function callFn(url) {
        var _this = this;

        my.showLoading({
            content: '加载中...',
            delay: 100
        });
        my.ocr({
            ocrType: 'ocr_vehicle',
            path: url,
            success: function success(res) {
                console.log('res', res);
                var data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
                var plate_num = data.plate_num,
                    addr = data.addr,
                    vehicle_type = data.vehicle_type,
                    owner = data.owner,
                    use_character = data.use_character,
                    model = data.model,
                    vin = data.vin,
                    engine_num = data.engine_num,
                    register_date = data.register_date,
                    issue_date = data.issue_date;

                _this.setData({
                    imgUrl: url,
                    textArry: [{ title: '车牌号码', message: plate_num }, { title: '车辆类型', message: vehicle_type }, { title: '所有人', message: owner }, { title: '地址', message: addr }, { title: '使用性质', message: use_character }, { title: '品牌型号', message: model }, { title: '识别代码', message: vin }, { title: '发动机号', message: engine_num }, { title: '注册日期', message: _this.reData(register_date) }, { title: '发证日期', message: _this.reData(issue_date) }]
                });
                my.hideLoading();
            },
            fail: function fail(res) {
                my.hideLoading();

                my.alert({
                    title: 'fail',
                    content: JSON.stringify(res)
                });
            }

        });
    },
    photoSubmit: function photoSubmit() {
        var _this2 = this;

        //点击上传
        my.chooseImage({
            count: 1,
            success: function success(res) {
                _this2.callFn(res.apFilePaths[0]);
            }
        });
    },
    reData: function reData(data) {
        return data.substring(0, 4) + '年' + data.substring(4, 6) + '月' + data.substring(6, 8) + '日';
    },
    imageLoad: function imageLoad(e) {},
    imageError: function imageError(e) {}
});

/***/ }),

/***/ "mLCK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0iQm");
/* harmony import */ var M_1_ = __webpack_require__("cyyQ");
/* harmony import */ var M_2_ = __webpack_require__("tugM");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "mMCp":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("N4o8")('wks');
var uid = __webpack_require__("bS8I");
var Symbol = __webpack_require__("m+eR").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),

/***/ "mO6b":
/***/ (function(module, exports) {

module.exports = {"pagination":"/node_modules/mini-ali-ui/es/pagination/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "mQ0p":
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

$global.$addPageConfig({
  pagePath: "page/API/get-auth-code/get-auth-code",
  usingComponents: __webpack_require__("W2ui")

});
Page({
  onLoad: function onLoad() {},

  data: {},
  getAuthCode: function getAuthCode() {
    my.getAuthCode({
      scopes: 'auth_user',
      success: function success(_ref) {
        var authCode = _ref.authCode;

        my.alert({
          content: authCode
        });
      }
    });
  }
});

/***/ }),

/***/ "mVrO":
/***/ (function(module, exports) {

module.exports = {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "mfLs":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "mhmn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("xTN5");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "mk0q":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "msZj":
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

$global.$addPageConfig({
  pagePath: "page/API/make-phone-call/make-phone-call",
  usingComponents: __webpack_require__("npNe")

});
Page({
  makePhoneCall: function makePhoneCall() {
    my.makePhoneCall({ number: '95888' });
  }
});

/***/ }),

/***/ "mwF2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("bSCT");
/* harmony import */ var M_1_ = __webpack_require__("KcKR");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "n+wN":
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

$global.$addPageConfig({
  pagePath: "page/component/tips/2/index",
  usingComponents: __webpack_require__("coKe")

});
Page({
  data: {
    content: '我知道了(2秒后消失)',
    time: 2000
  },
  onClose: function onClose() {
    my.alert({
      title: '12321'
    });
  }
});

/***/ }),

/***/ "n7cI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__("XkMr");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addPageConfig({
  pagePath: "page/component/am-checkbox/am-checkbox",
  usingComponents: __webpack_require__("PteG")

});
Page({
  data: {
    items: [{ value: 'a', title: '复选框-默认未选中', id: 'checkbox1' }, { checked: true, value: 'b', title: '复选框-默认选中', id: 'checkbox2' }, { checked: true, disabled: true, value: 'c', title: '复选框-默认选中disabled', id: 'checkbox3' }],
    items1: [{ ctrlChecked: false, disabled: false, value: 'd', title: '复选框-默认未选中', id: 'checkbox4' }, { ctrlChecked: true, disabled: true, value: 'e', title: '复选框-默认未选中disabled', id: 'checkbox5' }, { ctrlChecked: true, value: 'f', title: '复选框-默认选中', id: 'checkbox6' }]
  },
  onChange: function onChange(e) {
    var id = e.currentTarget.dataset.id;
    var value = e.detail.value;
    var items1 = this.data.items1;
    var length = items1.length;

    for (var index = 0; index < length; index += 1) {
      if (items1[index].id === id) {
        var _setData;

        this.setData((_setData = {}, _setData["items1[" + index + "].ctrlChecked"] = value, _setData));
        break;
      }
    }
  },

  // 全选
  checkedON: function checkedON() {
    this.checkedAll(true);
  },

  // 全不选
  checkedOFF: function checkedOFF() {
    this.checkedAll(false);
  },
  checkedAll: function checkedAll(status) {
    var items1 = this.data.items1.map(function (element) {
      return (0, _extends3.default)({}, element, {
        ctrlChecked: status
      });
    });
    this.setData({
      items1: items1
    });
  }
});

/***/ }),

/***/ "n86A":
/***/ (function(module, exports) {

module.exports = {"filter":"/node_modules/mini-ali-ui/es/filter/index","filter-item":"/node_modules/mini-ali-ui/es/filter/filter-item/index"}

/***/ }),

/***/ "nBum":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/collapse/index",
  usingComponents: __webpack_require__("Ebqv")

});
var noop = function noop() {};

var prefixKey = function prefixKey(prefix) {
  return function (key) {
    return prefix + "-" + key;
  };
};

var collapsePrefix = prefixKey('am-collapse');
Component({
  data: {
    id: '',
    activeArr: []
  },
  props: {
    activeKey: [],
    accordion: false,
    onChange: noop,
    openAnimation: {},
    collapseKey: '',
    className: ''
  },
  didMount: function didMount() {
    this.initData();
  },
  didUnmount: function didUnmount() {
    // clear cache in page when didUnmount
    delete this.$page[collapsePrefix("ids-" + this.props.collapseKey)];
    delete this.$page[collapsePrefix("updates-" + this.props.collapseKey)];
  },
  methods: {
    initData: function initData() {
      var _this$props = this.props,
          accordion = _this$props.accordion,
          activeKey = _this$props.activeKey,
          collapseKey = _this$props.collapseKey;
      var activeArr = [];
      this.$page[collapsePrefix("handleItemTap-" + collapseKey)] = this.handleItemTap.bind(this);

      if (accordion) {
        if (typeof activeKey === 'string') {
          activeArr = [activeKey];
        } else {
          activeArr = [this.$page[collapsePrefix("ids-" + collapseKey)] && this.$page[collapsePrefix("ids-" + collapseKey)][0]];
        }
      } else if (typeof activeKey === 'string') {
        activeArr = [activeKey];
      } else if (activeKey instanceof Array) {
        activeArr = activeKey;
      }

      this.updateItems(activeArr);
    },
    handleItemTap: function handleItemTap(key) {
      var activeArr = this.data.activeArr;

      if (this.props.accordion) {
        if (activeArr.indexOf(key) === -1) {
          this.updateItems([key]);
        } else {
          this.updateItems([]);
        }
      } else {
        var index = activeArr.indexOf(key);

        if (index !== -1) {
          activeArr.splice(index, 1);
        } else {
          activeArr.push(key);
        }

        this.updateItems(activeArr);
      }
    },
    updateItems: function updateItems(activeArr) {
      var _this = this;

      var collapseKey = this.props.collapseKey;
      this.setData({
        activeArr: activeArr
      });
      this.props.onChange(activeArr);
      this.$page[collapsePrefix("updates-" + collapseKey)].forEach(function (update) {
        if (typeof update === 'function') {
          update({
            activeKey: _this.data.activeArr
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "ngOa":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "njUI":
/***/ (function(module, exports) {

module.exports = {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"}

/***/ }),

/***/ "no+l":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "no/F":
/***/ (function(module, exports) {

module.exports = {"pagination":"/node_modules/mini-ali-ui/es/pagination/index"}

/***/ }),

/***/ "npNe":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "nrjA":
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

$global.$addPageConfig({
  pagePath: "page/component/search-bar/search-bar",
  usingComponents: __webpack_require__("gHiM")

});
Page({
  data: {
    value: '',
    showVoice: false
  },
  handleInput: function handleInput(value) {
    this.setData({
      value: value
    });
  },
  handleClear: function handleClear() {
    this.setData({
      value: ''
    });
  },
  handleFocus: function handleFocus() {},
  handleBlur: function handleBlur() {},
  handleCancel: function handleCancel() {
    this.setData({
      value: ''
    });
  },
  handleSubmit: function handleSubmit(value) {
    my.alert({
      content: value
    });
  },
  onChange: function onChange(e) {
    this.setData({
      showVoice: e.detail.value
    });
  }
});

/***/ }),

/***/ "ntW1":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "nv5s":
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

$global.$addPageConfig({
  pagePath: "page/component/checkbox/checkbox",
  usingComponents: __webpack_require__("RLhK")

});
Page({
  data: {
    items: [{ name: 'angular', value: 'AngularJS' }, { name: 'react', value: 'React', checked: true }, { name: 'polymer', value: 'Polymer' }, { name: 'vue', value: 'Vue.js' }, { name: 'ember', value: 'Ember.js' }, { name: 'backbone', value: 'Backbone.js', disabled: true }]
  },
  onSubmit: function onSubmit(e) {
    console.log('onSubmit', e);
    my.alert({
      content: "\u4F60\u9009\u62E9\u7684\u6846\u67B6\u662F " + e.detail.value.libs.join(', ')
    });
  },
  onReset: function onReset(e) {
    console.log('onReset', e);
  },
  onChange: function onChange(e) {
    console.log(e);
  }
});

/***/ }),

/***/ "o+Xk":
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

$global.$addPageConfig({
  pagePath: "page/component/webview/webview",
  usingComponents: __webpack_require__("11X4")

});
Page({
  data: {},
  onShareAppMessage: function onShareAppMessage(options) {
    my.alert({ content: JSON.stringify(options.webViewUrl) });
    return {
      title: '分享 web-View 组件',
      desc: 'View 组件很通用',
      path: 'page/component/component-pages/webview/baidu',
      'web-view': options.webViewUrl
    };
  },
  onmessage: function onmessage(e) {
    my.alert({
      content: '拿到数据' + JSON.stringify(e) // alert 框的标题
    });
  }
});

/***/ }),

/***/ "oCu6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("KX0W");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "oYL7":
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

$global.$addPageConfig({
  pagePath: "page/API/compress-image/compress-image",
  usingComponents: __webpack_require__("Hhgm")

});
Page({
  data: {
    compressedSrc: '',
    mode: 'aspectFit'
  },
  selectImage: function selectImage() {
    var _this = this;

    my.chooseImage({
      count: 1,
      success: function success(res) {
        my.compressImage({
          apFilePaths: res.apFilePaths,
          level: 1,
          success: function success(data) {
            console.log(data);
            _this.setData({
              compressedSrc: data.apFilePaths[0]
            });
          }
        });
      }
    });
  }
});

/***/ }),

/***/ "obH/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("jbmm");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "oi3f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("jHPy");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "os5u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("cfBN");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "ouCV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Zfow");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "ovTO":
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

$global.$addPageConfig({
  pagePath: "page/API/set-navigation-bar/set-navigation-bar",
  usingComponents: __webpack_require__("EiqG")

});
Page({
  setNavigationBar: function setNavigationBar(e) {
    var title = e.detail.value.title;
    var backgroundColor = e.detail.value.backgroundColor;
    var borderBottomColor = e.detail.value.borderBottomColor;
    var image = e.detail.value.image;
    console.log(title);
    my.setNavigationBar({
      title: title,
      backgroundColor: backgroundColor,
      borderBottomColor: borderBottomColor,
      image: image
    });
  },
  resetNavigationBar: function resetNavigationBar() {
    my.setNavigationBar({
      reset: true,
      title: '重置导航栏样式'
    });
  }
});

/***/ }),

/***/ "oyC2":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "pI1P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("+v8P");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "pKjj":
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

$global.$addPageConfig({
  pagePath: "page/API/keyboard/keyboard",
  usingComponents: __webpack_require__("qPUu")

});
Page({
  bindHideKeyboard: function bindHideKeyboard(e) {
    if (e.detail.value === "123") {
      // 收起键盘
      my.hideKeyboard();
    }
  }
});

/***/ }),

/***/ "pKnb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _formatLocation = __webpack_require__("r5UJ");

var _formatLocation2 = _interopRequireDefault(_formatLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addPageConfig({
  pagePath: "page/API/get-location/get-location",
  usingComponents: __webpack_require__("K/+A")

});


Page({
  data: {
    hasLocation: false
  },
  getLocation: function getLocation() {
    var that = this;
    my.showLoading();
    my.getLocation({
      success: function success(res) {
        my.hideLoading();
        console.log(res);
        that.setData({
          hasLocation: true,
          location: (0, _formatLocation2.default)(res.longitude, res.latitude)
        });
      },
      fail: function fail() {
        my.hideLoading();
        my.alert({ title: '定位失败' });
      }
    });
  },
  clear: function clear() {
    this.setData({
      hasLocation: false
    });
  }
});

/***/ }),

/***/ "pQdU":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "paRN":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "pigB":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "plMW":
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

$global.$addPageConfig({
  pagePath: "page/API/file/file",
  usingComponents: __webpack_require__("HncH")

});
Page({
  data: {
    tempFilePath: '',
    savedFilePath: ''
  },
  onLoad: function onLoad() {
    var _this = this;

    my.getStorage({
      key: 'savedFilePath', // 缓存数据的 key
      success: function success(res) {
        _this.setData({
          savedFilePath: res.data ? res.data : ''
        });
      }
    });
  },
  chooseImage: function chooseImage() {
    var _this2 = this;

    my.chooseImage({
      count: 1,
      success: function success(res) {
        console.log('chooseImage', res);
        _this2.setData({
          tempFilePath: res.apFilePaths[0]
        });
      }
    });
  },
  saveFile: function saveFile() {
    if (this.data.tempFilePath.length > 0) {
      var that = this;
      my.saveFile({
        apFilePath: this.data.tempFilePath,
        success: function success(res) {
          console.log('saveFile', res);
          that.setData({
            savedFilePath: res.apFilePath
          });
          my.setStorage({ key: 'savedFilePath', data: res.apFilePath });
          my.alert({
            title: '保存成功', // alert 框的标题
            content: "\u4E0B\u6B21\u8FDB\u5165\u5E94\u7528\u65F6\uFF0C\u6B64\u6587\u4EF6\u4ECD\u53EF\u7528:" + JSON.stringify(res)
          });
        }
      });
    }
  },
  getFileInfo: function getFileInfo() {
    my.getFileInfo({
      apFilePath: this.data.tempFilePath,
      digestAlgorithm: 'sha1',
      success: function success(res) {
        my.alert({
          title: '文件信息',
          content: JSON.stringify(res)
        });
        console.log(JSON.stringify(res));
      }
    });
  },
  getSavedFileInfo: function getSavedFileInfo() {
    my.getSavedFileInfo({
      apFilePath: this.data.savedFilePath,
      success: function success(res) {
        my.alert({
          title: '文件信息',
          content: JSON.stringify(res)
        });
        console.log(JSON.stringify(res));
      }
    });
  },
  getSavedFileList: function getSavedFileList() {
    my.getSavedFileList({
      success: function success(res) {
        my.alert({
          title: '已保存文件列表',
          content: JSON.stringify(res)
        });
        console.log(JSON.stringify(res));
      }
    });
  },
  removeSavedFile: function removeSavedFile() {
    my.getSavedFileList({
      success: function success(res) {
        my.removeSavedFile({
          apFilePath: res.fileList[0].apFilePath,
          success: function success(res) {
            my.alert({
              title: '移除文件成功',
              content: JSON.stringify(res)
            });
            console.log('remove success');
          }
        });
      }
    });
  },
  openDocument: function openDocument() {
    my.showLoading({
      content: '文件下载中...',
      delay: '0'
    });
    //首先download file
    my.downloadFile({
      url: 'https://gw.alipayobjects.com/os/basement_prod/1ce3efc7-a8e0-4111-83e5-4cc8de73170e.pdf',
      success: function success(_ref) {
        var apFilePath = _ref.apFilePath;

        if (my.canIUse('openDocument')) {
          my.hideLoading();
          my.openDocument({
            filePath: apFilePath,
            fileType: 'pdf',
            success: function success(res) {
              console.log('open document success');
            }
          });
        } else {
          my.alert({
            title: '客户端版本过低',
            content: 'my.openDocument() 需要 10.1.50 及以上版本'
          });
        }
      }
    });
  },
  clear: function clear() {
    my.setStorage({ key: 'savedFilePath', data: '' });
    this.setData({
      tempFilePath: '',
      savedFilePath: ''
    });
  }
});

/***/ }),

/***/ "pnMr":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("cYqa");
var toObject = __webpack_require__("y7ys");
var IE_PROTO = __webpack_require__("VBQa")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto : null;
};

/***/ }),

/***/ "po3g":
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

$global.$addPageConfig({
  pagePath: "page/component/page-result/local-empty/index",
  usingComponents: __webpack_require__("PkKQ")

});
Page({});

/***/ }),

/***/ "pskS":
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

$global.$addPageConfig({
    pagePath: "page/API/events/events",
    usingComponents: __webpack_require__("A2y1")

});
Page({
    onLoad: function onLoad() {
        this.titleClick = my.on('titleClick', function () {
            console.log('title clicked');
            my.alert({
                title: '亲',
                content: '您刚刚点击了标题',
                buttonText: '我知道了'
            });
        });
    },
    onUnload: function onUnload() {
        this.titleClick.remove();
    }
});

/***/ }),

/***/ "q1m1":
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

$global.$addPageConfig({
  pagePath: "page/component/page-result/local-network/index",
  usingComponents: __webpack_require__("njUI")

});
Page({});

/***/ }),

/***/ "q4PB":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/popup/index",
  usingComponents: __webpack_require__("Fw/U")

});
Component({
  props: {
    className: '',
    show: false,
    position: 'bottom',
    mask: true,
    animation: true,
    disableScroll: true
  },
  methods: {
    onMaskTap: function onMaskTap() {
      var _this$props = this.props,
          onClose = _this$props.onClose,
          animation = _this$props.animation;

      if (onClose) {
        if (animation) {
          onClose();
        } else {
          setTimeout(function () {
            onClose();
          }, 200);
        }
      }
    }
  }
});

/***/ }),

/***/ "q5mS":
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

$global.$addPageConfig({
  pagePath: "page/component/filter/single/index",
  usingComponents: __webpack_require__("7/gm")

});
Page({
  data: {
    show: true,
    items: [{ id: 1, value: '衣服', selected: true }, { id: 1, value: '橱柜' }]
  },
  handleCallBack: function handleCallBack(data) {
    my.alert({
      content: data
    });
  },
  toggleFilter: function toggleFilter() {
    this.setData({
      show: !this.data.show
    });
  }
});

/***/ }),

/***/ "qB4A":
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

$global.$addPageConfig({
    pagePath: "page/component/video/video",
    usingComponents: __webpack_require__("mA0+")

});
Page({
    data: {
        src: "http://flv.bn.netease.com/tvmrepo/2012/7/C/7/E868IGRC7-mobile.mp4",
        //src:"https://youtu.be/J_WcqN1Hipg",
        title: 'initial',
        autoplay: 'false',
        objectFit: 'contain',
        showFullscreenBtn: 'false',
        showCenterPlayBtn: 'false',
        muted: 'false',
        loop: 'false'
        // extraInfo:{
        //     stoken:'%2bqEaZgO9Tt6Bg7c1%2bbS3H2r%2b8dWgk4m74sV3mlJZD5XfovsPuOxsinYham66Lua6sOZFRrlBRrjBPK%2fgkZOFfTYPP01UptHg%2b4SAxwKMUVvhxjUhs%2fg58428lInm7seis8F6lf2bmpxrAM6Ia4qOeA%3d%3d',
        //     ptoken:'eRt41ih0ieHGso2Mse3aUGjGrXzTSj70kgqyHLwTfNh%2fKz0bsH1Go4ChZjwlM1PrDO1nq3RW7CarxaUnKOq5M25BfHH9aGvdCOHcce89uJfrLqLOk6NEwR%2fY5LsLSYNSnzl5YSYl359xKGL3cHvfcw%3d%3d',
        //     stoken:'2TTH0S/OBuQoBthtlNtu/df4zKuh2qkavbd1QRtmM5X1RT3YehRjKmFoEmnsjv9dp3GWrzEcG8y5qHJr8Mwm76aYwWqKnIY9YCRE6l606ySYgfiohgBsA199EjHwI0XG6x2OC0Q9FzgqGDkD0Z+sow==',
        //     ptoken:'iPqLrZnna90HCdsypMibpVz2eNdYBDqQmoAL89BiKVJFa/lS9zpSv2PsQgLTJYSc9uhHuYeEClEB4xeMiYyMmnG8UQQKyIPXqxfSwrQmDL72Yt1yCgvDze3DeQesjpNYKo9YruJ99nSqvmPLvjIpGA==',
        //     isYouku: false, // 是否优酷小程序，据此设置ccode
        //     srcType: 0, // 0是vid，1是showId
        // }
    },

    //extrainfo:{
    //会员
    //stoken:'%2bqEaZgO9Tt6Bg7c1%2bbS3H2r%2b8dWgk4m74sV3mlJZD5XfovsPuOxsinYham66Lua6sOZFRrlBRrjBPK%2fgkZOFfTYPP01UptHg%2b4SAxwKMUVvhxjUhs%2fg58428lInm7seis8F6lf2bmpxrAM6Ia4qOeA%3d%3d',
    //ptoken:'eRt41ih0ieHGso2Mse3aUGjGrXzTSj70kgqyHLwTfNh%2fKz0bsH1Go4ChZjwlM1PrDO1nq3RW7CarxaUnKOq5M25BfHH9aGvdCOHcce89uJfrLqLOk6NEwR%2fY5LsLSYNSnzl5YSYl359xKGL3cHvfcw%3d%3d',
    //stoken:'+qEaZgO9Tt6Bg7c1+bS3H2r+8dWgk4m74sV3mlJZD5XfovsPuOxsinYham66Lua6sOZFRrlBRrjBPK/gkZOFfTYPP01UptHg+4SAxwKMUVvhxjUhs/g58428lInm7seis8F6lf2bmpxrAM6Ia4qOeA==',
    //ptoken:'eRt41ih0ieHGso2Mse3aUGjGrXzTSj70kgqyHLwTfNh/Kz0bsH1Go4ChZjwlM1PrDO1nq3RW7CarxaUnKOq5M25BfHH9aGvdCOHcce89uJfrLqLOk6NEwR/Y5LsLSYNSnzl5YSYl359xKGL3cHvfcw==',
    //非会员
    //stoken:'2TTH0S/OBuQoBthtlNtu/df4zKuh2qkavbd1QRtmM5X1RT3YehRjKmFoEmnsjv9dp3GWrzEcG8y5qHJr8Mwm76aYwWqKnIY9YCRE6l606ySYgfiohgBsA199EjHwI0XG6x2OC0Q9FzgqGDkD0Z+sow==',
    //ptoken:'iPqLrZnna90HCdsypMibpVz2eNdYBDqQmoAL89BiKVJFa/lS9zpSv2PsQgLTJYSc9uhHuYeEClEB4xeMiYyMmnG8UQQKyIPXqxfSwrQmDL72Yt1yCgvDze3DeQesjpNYKo9YruJ99nSqvmPLvjIpGA==',
    //isYouku: true,
    //srcType :0
    //}
    onShow: function onShow() {
        this.videoContext = my.createVideoContext('video');
        this.muted = this.data.muted === 'true';
    },
    onPlay: function onPlay() {
        console.log('onPlay');
        this.setData({ title: 'onPlay' });
    },
    onPause: function onPause() {
        console.log('onPause');
        this.setData({ title: 'onPause' });
    },
    onEnded: function onEnded() {
        console.log('onEnded');
        this.setData({ title: 'onEnded' });
    },
    onTimeUpdate: function onTimeUpdate() {
        console.log('onTimeUpdate');
        this.setData({ title: 'onTimeUpdate' });
    },
    onLoading: function onLoading(res) {
        my.alert({ content: '加载中！' + JSON.stringify(res) });
        console.log('onLoading');
        this.setData({ title: 'onLoading' });
    },
    onStop: function onStop() {
        console.log('onStop');
        this.setData({ title: 'onStop' });
    },
    play: function play() {
        this.videoContext.play();
        this.videoContext.mute(this.muted);
    },
    pause: function pause() {
        this.videoContext.pause();
    },
    seek: function seek() {
        this.videoContext.seek(15);
    },
    mute: function mute() {
        this.videoContext.mute(!this.muted);
        this.muted = !this.muted;
    },
    stop: function stop() {
        this.videoContext.stop();
        this.setData({ muted: this.muted.toString() });
    },
    playbackRate: function playbackRate(res) {
        this.videoContext.playbackRate(1.5), my.alert({ content: '倍速播放中！' + JSON.stringify(res) });
    },
    requestFullScreen: function requestFullScreen() {
        this.videoContext.requestFullScreen({ direction: 90 });
        // setTimeout(() => { this.videoContext.exitFullScreen()},2000)
    },
    exitFullScreen: function exitFullScreen() {
        var _this = this;

        this.videoContext.requestFullScreen();
        setTimeout(function () {
            _this.videoContext.exitFullScreen();
        }, 2000);
    },
    showStatusBar: function showStatusBar() {
        var _this2 = this;

        this.videoContext.requestFullScreen();
        setTimeout(function () {
            _this2.videoContext.showStatusBar();
        }, 2000);
    },
    hideStatusBar: function hideStatusBar() {
        var _this3 = this;

        this.videoContext.requestFullScreen();
        setTimeout(function () {
            _this3.videoContext.hideStatusBar();
        }, 2000);
    }
});

/***/ }),

/***/ "qPUu":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "qUWl":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "qVvQ":
/***/ (function(module, exports) {

module.exports = {"badge":"/node_modules/mini-ali-ui/es/badge/index"}

/***/ }),

/***/ "qeJa":
/***/ (function(module, exports) {

module.exports = {"am-radio":"/node_modules/mini-ali-ui/es/am-radio/index","list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index"}

/***/ }),

/***/ "qtuz":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("fJad").f;
var has = __webpack_require__("cYqa");
var TAG = __webpack_require__("mMCp")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

/***/ }),

/***/ "quDQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0iQm");
/* harmony import */ var M_1_ = __webpack_require__("cyyQ");
/* harmony import */ var M_2_ = __webpack_require__("OKc4");
/* harmony import */ var M_3_ = __webpack_require__("3vBn");
/* harmony import */ var M_3__default = /*#__PURE__*/__webpack_require__.n(M_3_);

  


  
  

/***/ }),

/***/ "qv8X":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ugdc");
var enumBugKeys = __webpack_require__("B41P");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "r0Qs":
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

$global.$addPageConfig({
  pagePath: "page/API/card-pack/card-pack",
  usingComponents: __webpack_require__("gy/j")

});
Page({
  data: {},
  onLoad: function onLoad() {},


  //-----------卡/券/票 列表页JSAPI:   只有success  fail等回调入参
  openCardList: function openCardList() {
    my.openCardList({
      success: function success(res) {
        my.showToast({ content: '调用成功：' + JSON.stringify(res) });
      },
      fail: function fail(error) {
        my.alert({ content: '调用失败：' + JSON.stringify(error) });
      },
      complete: function complete(res) {
        my.alert({ content: 'complete回调！' });
      }
    });
  },
  openVoucherList: function openVoucherList() {
    my.openVoucherList({
      success: function success(res) {
        my.showToast({ content: '调用成功：' + JSON.stringify(res) });
      },
      fail: function fail(error) {
        my.alert({ content: '调用失败：' + JSON.stringify(error) });
      },
      complete: function complete(e) {
        my.showToast({ content: 'complete回调！' });
      }
    });
  },
  openTicketList: function openTicketList() {
    my.openTicketList({
      success: function success(res) {
        my.showToast({ content: '调用成功：' + JSON.stringify(res) });
      },
      fail: function fail(error) {
        my.alert({ content: '调用失败：' + JSON.stringify(error) });
      },
      complete: function complete(e) {
        my.showToast({ content: 'complete回调！' });
      }
    });
  },


  //---------卡/券/票 详情页JSAPI:   passId 或者 partnerId + serialNumber  二选一的入参
  openCardDetail: function openCardDetail() {
    my.openCardDetail({ //卡   不支持partnerId方式
      passId: '12339004637',
      success: function success(res) {
        my.showToast({ content: '调用成功：' + JSON.stringify(res) });
      },
      fail: function fail(error) {
        my.alert({ content: '调用失败：' + JSON.stringify(error) });
      },
      complete: function complete(res) {
        my.showToast({ content: 'complete回调！' });
      }
    });
  },
  openVoucherDetail: function openVoucherDetail() {
    my.openVoucherDetail({
      passId: '15153594937', //
      //partnerId:'2088521411242352',
      // serialNumber:'20170904000730023708007XVP2W',
      //开发环境
      //passId:"7001350165",
      // partnerId:'2088302084359231',
      // serialNumber:'2017060218522661677653862',
      success: function success(res) {
        my.showToast({ content: '调用成功：' + JSON.stringify(res) });
      },
      fail: function fail(error) {
        my.alert({ content: '调用失败：' + JSON.stringify(error) });
      },
      complete: function complete(e) {
        my.showToast({ content: 'complete回调！' });
      }
    });
  },
  openTicketDetail: function openTicketDetail() {
    my.openTicketDetail({
      passId: "11688279837",
      //partnerId:'2013080800000754',
      //serialNumber:'T150P4607471458101261',
      //passId:"7001020065",
      //partnerId:'2088101162864452',
      //serialNumber:'2017033120573899567387727',
      success: function success(res) {
        my.showToast({ content: '调用成功：' + JSON.stringify(res) });
      },
      fail: function fail(error) {
        my.alert({ content: '调用失败：' + JSON.stringify(error) });
      },
      complete: function complete(e) {
        my.showToast({ content: 'complete回调！' });
      }
    });
  },


  //打开口碑券详情
  openKBVoucherDetail: function openKBVoucherDetail() {
    my.openKBVoucherDetail({
      passId: '13813142037',
      //partnerId:'2088912612862076',
      //serialNumber:'201708010007300237080079G88A',

      // passId:'7001430265',
      // partnerId:'2088102147297014',
      // serialNumber:'201708250007300265750000AWST',
      success: function success(res) {
        my.showToast({ content: '调用成功：' + JSON.stringify(res) });
      },
      fail: function fail(error) {
        my.alert({ content: '调用失败：' + JSON.stringify(error) });
      },
      complete: function complete(e) {
        my.showToast({ content: 'complete回调！' });
      }
    });
  },

  //口碑客劵详情页
  gotoDetail: function gotoDetail() {
    my.navigateToCouponDetail({
      itemId: '2017072010076000000015900884',
      chInfo: 'ch_cainiao__spmid_a13.b579',
      success: function success(res) {
        my.alert({
          title: 'success',
          content: JSON.stringify(res)
        });
      },
      fail: function fail(res) {
        my.alert({
          title: 'fail',
          content: JSON.stringify(res)
        });
      },
      complete: function complete(res) {
        my.showToast({ content: 'complete回调！' });
      }
    });
  },


  //--------------------卡/券/票 单商户列表页:    partnerId  入参
  openMerchantCardList: function openMerchantCardList() {
    my.openMerchantCardList({
      partnerId: '2088621202286735',
      success: function success(res) {
        my.showToast({ content: '调用成功：' + JSON.stringify(res) });
      },
      fail: function fail(error) {
        my.alert({ content: '调用失败：' + JSON.stringify(error) });
      },
      complete: function complete(e) {
        my.showToast({ content: 'complete回调！' });
      }
    });
  },
  openMerchantVoucherList: function openMerchantVoucherList() {
    my.openMerchantVoucherList({
      partnerId: '2088521411242352',
      success: function success(res) {
        my.showToast({ content: '调用成功：' + JSON.stringify(res) });
      },
      fail: function fail(error) {
        my.alert({ content: '调用失败：' + JSON.stringify(error) });
      },
      complete: function complete(e) {
        my.showToast({ content: 'complete回调！' });
      }
    });
  },
  openMerchantTicketList: function openMerchantTicketList() {
    my.openMerchantTicketList({
      partnerId: '2013080800000754',
      success: function success(res) {
        my.showToast({ content: '调用成功：' + JSON.stringify(res) });
      },
      fail: function fail(error) {
        my.alert({ content: '调用失败：' + JSON.stringify(error) });
      },
      complete: function complete(e) {
        my.showToast({ content: 'complete回调！' });
      }
    });
  }
});

/***/ }),

/***/ "r4nF":
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

$global.$addComponentConfig({
  is: "/page/common/components/block-list/block-list",
  usingComponents: __webpack_require__("hakM")

});
Component({
  methods: {
    onItemTap: function onItemTap(e) {
      var onItemTap = this.props.onItemTap;
      var name = e.target.dataset.name;

      if (onItemTap) {
        onItemTap({ name: name });
      }
    }
  }
});

/***/ }),

/***/ "r5UJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
function formatLocation(longitude, latitude) {
  longitude = Number(longitude).toFixed(2);
  latitude = Number(latitude).toFixed(2);

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  };
}

exports.default = formatLocation;
module.exports = exports['default'];

/***/ }),

/***/ "r8SB":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "rDf7":
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

$global.$addPageConfig({
  pagePath: "page/API/storage/storage",
  usingComponents: __webpack_require__("OlxY")

});
Page({
  data: {
    key: '',
    data: '',
    keySync: '',
    dataSync: ''
  },

  keyChange: function keyChange(e) {
    console.log(e);
    this.setData({
      key: e.detail.value
    });
  },
  dataChange: function dataChange(e) {
    this.setData({
      data: e.detail.value
    });
  },
  keyChangeSync: function keyChangeSync(e) {
    console.log(e);
    this.setData({
      keySync: e.detail.value
    });
  },
  dataChangeSync: function dataChangeSync(e) {
    this.setData({
      dataSync: e.detail.value
    });
  },
  getStorage: function getStorage() {
    var key = this.data.key;
    var data = this.data.data;
    console.log('data: ', this.data);
    if (key.length === 0) {
      this.setData({
        key: key,
        data: data
      });

      my.alert({
        title: '读取数据失败',
        content: 'key 不能为空'
      });
    } else {
      var that = this;
      my.getStorage({
        key: key,
        success: function success(res) {
          my.alert({
            title: '读取数据成功',
            content: "data: '" + JSON.stringify(res.data) + "'"
          });
        }
      });
      console.log('读取数据成功', my.getStorageSync({ key: key }).data);
    }
  },
  setStorage: function setStorage() {
    var key = this.data.key;
    var data = this.data.data;
    if (key.length === 0) {
      this.setData({
        key: key,
        data: data
      });

      my.alert({
        title: '保存数据失败',
        content: 'key 不能为空'
      });
    } else {
      var that = this;
      my.setStorage({
        key: key,
        data: data,
        success: function success() {
          that.setData({
            key: key,
            data: data
          });

          my.alert({
            title: '存储数据成功',
            content: key + ": " + data
          });
        }
      });
    }
  },
  removeStorage: function removeStorage() {
    var that = this;
    my.removeStorage({
      key: that.data.key,
      success: function success() {
        that.setData({
          key: '',
          data: ''
        });

        my.alert({
          title: '删除数据成功',
          content: ''
        });
      }
    });
  },
  clearStorage: function clearStorage() {
    var that = this;
    my.clearStorage({
      key: that.data.key,
      success: function success() {
        that.setData({
          key: '',
          data: ''
        });

        my.alert({
          title: '清除数据成功',
          content: ''
        });
      }
    });
  },
  getStorageInfo: function getStorageInfo() {
    var that = this;
    my.getStorageInfo({
      success: function success(res) {
        my.alert({
          content: JSON.stringify({
            keys: res.keys,
            currentSize: res.currentSize,
            limitSize: res.limitSize
          })
        });
      }
    });
  },
  getStorageSync: function getStorageSync() {
    var key = this.data.keySync;
    var data = this.data.dataSync;
    console.log('data: ', this.data);
    if (key.length === 0) {
      this.setData({
        keySync: key,
        dataSync: data
      });

      my.alert({
        title: '同步读取数据失败',
        content: 'key 不能为空'
      });
    } else {
      var res = my.getStorageSync({ key: key });
      if (!res.error) {
        my.alert({
          title: '同步读取数据成功',
          content: "data: '" + JSON.stringify(res.data) + "'"
        });
      }
    }
  },
  setStorageSync: function setStorageSync() {
    var key = this.data.keySync;
    var data = this.data.dataSync;
    if (key.length === 0) {
      this.setData({
        keySync: key,
        dataSync: data
      });

      my.alert({
        title: '同步保存数据失败',
        content: 'key 不能为空'
      });
    } else {
      var res = my.setStorageSync({ key: key, data: data });
      if (!res.error) {
        this.setData({
          keySync: key,
          dataSync: data
        });

        my.alert({
          title: '同步存储数据成功',
          content: key + ": " + data
        });
      }
    }
  },
  removeStorageSync: function removeStorageSync() {
    var res = my.removeStorageSync({ key: this.data.keySync });
    if (!res.error) {
      this.setData({
        keySync: '',
        dataSync: ''
      });

      my.alert({
        title: '同步删除数据成功',
        content: ''
      });
    }
  },
  clearStorageSync: function clearStorageSync() {
    var res = my.clearStorageSync();
    if (!res.error) {
      this.setData({
        keySync: '',
        dataSync: ''
      });

      my.alert({
        title: '同步清除数据成功',
        content: ''
      });
    }
  },
  getStorageInfoSync: function getStorageInfoSync() {
    var res = my.getStorageInfoSync();
    if (!res.error) {
      my.alert({
        content: JSON.stringify({
          keys: res.keys,
          currentSize: res.currentSize,
          limitSize: res.limitSize
        })
      });
    }
  }
});

/***/ }),

/***/ "rDvb":
/***/ (function(module, exports) {

module.exports = {"card":"/node_modules/mini-ali-ui/es/card/index"}

/***/ }),

/***/ "rScs":
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

$global.$addPageConfig({
  pagePath: "page/component/title/index",
  usingComponents: __webpack_require__("zddX")

});
Page({
  data: {},
  onLoad: function onLoad() {},
  titleGo: function titleGo() {
    my.showToast({
      content: '点击箭头，可设置跳转'
    });
  },
  titleMore: function titleMore() {
    my.showToast({
      content: '点击更多，展开气泡菜单'
    });
  },
  titleClose: function titleClose() {
    my.showToast({
      content: '点击关闭，可设置关闭'
    });
  }
});

/***/ }),

/***/ "rZc7":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("yQnl");
var TAG = __webpack_require__("mMCp")('toStringTag');
// ES3 wrong here
var ARG = cof(function () {
  return arguments;
}()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {/* empty */}
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
  // builtinTag case
  : ARG ? cof(O)
  // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),

/***/ "ran9":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "rcva":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "rcyF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("7o9n");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "rm7d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("EF3x");
/* harmony import */ var M_1_ = __webpack_require__("JUyQ");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "rnNP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("9iOq");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "rqji":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("uiSI");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "rxtH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("5plw");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "s5kE":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "s6wR":
/***/ (function(module, exports) {

module.exports = {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "s8Y5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("EE10");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "sJ/N":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("gM15");
var defined = __webpack_require__("3mz4");
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),

/***/ "sMtO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("grjx");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "sQL1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Vnk/");
/* harmony import */ var M_1_ = __webpack_require__("7l4u");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "sQok":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("AH5w");
var document = __webpack_require__("m+eR").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "sbh2":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "sjhm":
/***/ (function(module, exports) {

module.exports = {"alphabet":"/node_modules/mini-ali-ui/es/list/alphabet/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "snrh":
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

$global.$addPageConfig({
  pagePath: "page/component/swiper/swiper",
  usingComponents: __webpack_require__("PN3v")

});
Page({
  data: {
    background: ['blue', 'red', 'yellow'],
    indicatorDots: true,
    autoplay: false,
    vertical: false,
    interval: 1000,
    circular: false
  },
  onLoad: function onLoad() {},
  changeIndicatorDots: function changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    });
  },
  changeVertical: function changeVertical() {
    this.setData({
      vertical: !this.data.vertical
    });
  },
  changeCircular: function changeCircular(e) {
    this.setData({
      circular: !this.data.circular
    });
  },
  changeAutoplay: function changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    });
  },
  intervalChange: function intervalChange(e) {
    this.setData({
      interval: e.detail.value
    });
  }
});

/***/ }),

/***/ "syIm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("gRlN");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "t1Cn":
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

$global.$addPageConfig({
  pagePath: "page/component/card/card",
  usingComponents: __webpack_require__("rDvb")

});
Page({
  data: {
    thumb: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
    expand3rd: false
  },
  onCardClick: function onCardClick(ev) {
    my.alert({
      content: ev.info
    });
  },
  onActionClick: function onActionClick() {
    my.alert({
      content: 'action clicked'
    });
  },
  onExtraActionClick: function onExtraActionClick() {
    my.alert({
      content: 'extra action clicked'
    });
  },
  toggle: function toggle() {
    this.setData({
      expand3rd: !this.data.expand3rd
    });
  }
});

/***/ }),

/***/ "t6vw":
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

$global.$addPageConfig({
  pagePath: "page/API/page-scroll-to/page-scroll-to",
  usingComponents: __webpack_require__("mfLs")

});
Page({
  data: {
    scrollTop: 0
  },
  scrollTopChange: function scrollTopChange(e) {
    this.setData({
      scrollTop: e.detail.value
    });
  },
  onPageScroll: function onPageScroll(_ref) {
    var scrollTop = _ref.scrollTop;

    console.log('onPageScroll', scrollTop);
  },
  scrollTo: function scrollTo() {
    my.pageScrollTo({
      scrollTop: parseInt(this.data.scrollTop)
    });
  }
});

/***/ }),

/***/ "tNKo":
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

$global.$addPageConfig({
  pagePath: "page/API/request-payment/request-payment",
  usingComponents: __webpack_require__("/hwr")

});
Page({
  data: {},
  tradePay: function tradePay() {
    my.tradePay({
      orderStr: 'xxx', //完整的支付参数拼接成的字符串，从服务端获取，具体是方法请参考小程序开发文档
      success: function success(res) {
        my.alert({
          title: res.resultCode
        });
      },
      fail: function fail(res) {
        my.alert({
          content: JSON.stringify(res)
        });
      }
    });
  }
});

/***/ }),

/***/ "tTY1":
/***/ (function(module, exports) {

module.exports = {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "tV4T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("w2LO");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "tbKk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("fwJe");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "tc+Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("O1il");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "trVe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("UQUr");
/* harmony import */ var M_1_ = __webpack_require__("rm7d");
/* harmony import */ var M_2_ = __webpack_require__("GwvB");
/* harmony import */ var M_3_ = __webpack_require__("cyyQ");
/* harmony import */ var M_4_ = __webpack_require__("Y61U");
/* harmony import */ var M_5_ = __webpack_require__("3hBH");
/* harmony import */ var M_5__default = /*#__PURE__*/__webpack_require__.n(M_5_);

  




  
  

/***/ }),

/***/ "tueE":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("AH5w");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "tugM":
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

$global.$addPageConfig({
  pagePath: "page/component/page-result/page-result",
  usingComponents: __webpack_require__("L7nx")

});
Page({
  data: {
    components: [{
      name: 'network',
      nameZN: '网络',
      path: './network/index'
    }, {
      name: 'local-network',
      nameZN: '局部网络',
      path: './local-network/index'
    }, {
      name: 'busy',
      nameZN: '服务繁忙',
      path: './busy/index'
    }, {
      name: 'local-busy',
      nameZN: '局部服务繁忙',
      path: './local-busy/index'
    }, {
      name: 'error',
      nameZN: '系统错误',
      path: './error/index'
    }, {
      name: 'local-error',
      nameZN: '局部系统错误',
      path: './local-error/index'
    }, {
      name: 'logoff',
      nameZN: '用户已注销',
      path: './log-off/index'
    }, {
      name: 'local-logoff',
      nameZN: '局部用户已注销',
      path: './local-logoff/index'
    }, {
      name: 'empty',
      nameZN: '页面空状态',
      path: './empty/index'
    }, {
      name: 'local-empty',
      nameZN: '局部空状态',
      path: './local-empty/index'
    }, {
      name: 'payment',
      nameZN: '付款失败',
      path: './payment/index'
    }, {
      name: 'local-payment',
      nameZN: '局部付款失败',
      path: './local-payment/index'
    }, {
      name: 'redpacket',
      nameZN: '红包领空',
      path: './redpacket/index'
    }, {
      name: 'local-redpacket',
      nameZN: '局部红包领空',
      path: './local-redpacket/index'
    }]
  },
  openPage: function openPage(e) {
    my.navigateTo({
      url: e.target.dataset.url
    });
  }
});

/***/ }),

/***/ "u/z4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("r4nF");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "u211":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("jzDW");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "uSe5":
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

$global.$addPageConfig({
    pagePath: "page/API/ocr-vin/ocr-vin",
    usingComponents: __webpack_require__("8yqs")

});
Page({
    data: {
        textArry: [],
        imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/GPbtvSnPedYahofahAKX.jpg"
    },
    onLoad: function onLoad() {
        this.callFn(this.data.imgUrl);
    },
    callFn: function callFn(url) {
        var _this = this;

        my.ocr({
            ocrType: 'ocr_vin',
            path: url,
            success: function success(res) {
                var data = res.result.vin;
                _this.setData({
                    imgUrl: url,
                    textArry: [{ title: '车架号', message: data }]
                });
                my.hideLoading();
            },
            fail: function fail(res) {
                my.hideLoading();
                my.alert({
                    title: 'fail',
                    content: JSON.stringify(res)
                });
            }

        });
    },
    photoSubmit: function photoSubmit() {
        var _this2 = this;

        //点击上传
        my.chooseImage({
            count: 1,
            success: function success(res) {
                _this2.callFn(res.apFilePaths[0]);
            }
        });
    },
    imageLoad: function imageLoad(e) {},
    imageError: function imageError(e) {}
});

/***/ }),

/***/ "ugdc":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("cYqa");
var toIObject = __webpack_require__("sJ/N");
var arrayIndexOf = __webpack_require__("TiK1")(false);
var IE_PROTO = __webpack_require__("VBQa")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

/***/ }),

/***/ "uiSI":
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

$global.$addPageConfig({
    pagePath: "page/API/ocr-idcard-face/ocr-idcard-face",
    usingComponents: __webpack_require__("ran9")

});
Page({
    data: {
        textArry: [],
        imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/bqeolZyhDKKJwGsgeHtm.jpg"
    },
    onLoad: function onLoad() {
        this.callFn(this.data.imgUrl);
    },
    callFn: function callFn(url) {
        var _this = this;

        my.showLoading({
            content: '加载中...',
            delay: 100
        });
        my.ocr({
            ocrType: 'ocr_idcard',
            side: 'face',
            path: url,
            success: function success(res) {
                var data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
                var name = data.name,
                    sex = data.sex,
                    nationality = data.nationality,
                    birth = data.birth,
                    address = data.address,
                    num = data.num;

                _this.setData({
                    imgUrl: url,
                    textArry: [{ title: '姓名', message: name }, { title: '性别', message: sex }, { title: '民族', message: nationality }, { title: '出生', message: _this.reData(birth) }, { title: '地址', message: address }, { title: '身份号码', message: num }]
                });
                my.hideLoading();
            },
            fail: function fail(res) {
                my.hideLoading();

                my.alert({
                    title: 'fail',
                    content: JSON.stringify(res)
                });
            }

        });
    },
    photoSubmit: function photoSubmit() {
        var _this2 = this;

        //点击上传
        my.chooseImage({
            count: 1,
            success: function success(res) {
                _this2.callFn(res.apFilePaths[0]);
            }
        });
    },
    reData: function reData(data) {
        return data.substring(0, 4) + '年' + data.substring(4, 6) + '月' + data.substring(6, 8) + '日';
    },
    imageLoad: function imageLoad(e) {},
    imageError: function imageError(e) {}
});

/***/ }),

/***/ "uilR":
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

$global.$addPageConfig({
  pagePath: "page/API/rsa/rsa",
  usingComponents: __webpack_require__("zhtC")

});
Page({
  data: {
    inputValue: '',
    outputValue: ''
  },
  onInput: function onInput(e) {
    this.setData({ inputValue: e.detail.value });
  },
  onEncrypt: function onEncrypt() {
    var _this = this;

    my.rsa({
      action: 'encrypt',
      text: this.data.inputValue,
      key: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDKmi0dUSVQ04hL6GZGPMFK8+d6\n' + 'GzulagP27qSUBYxIJfE04KT+OHVeFFb6K+8nWDea5mkmZrIgp022zZVDgdWPNM62\n' + '3ouBwHlsfm2ekey8PpQxfXaj8lhM9t8rJlC4FEc0s8Qp7Q5/uYrowQbT9m6t7BFK\n' + '3egOO2xOKzLpYSqfbQIDAQAB',
      success: function success(result) {
        _this.setData({ outputValue: result.text });
      },
      fail: function fail(e) {
        my.alert({
          content: e.errorMessage || e.error
        });
      }
    });
  },
  onDecrypt: function onDecrypt() {
    var _this2 = this;

    my.rsa({
      action: 'decrypt',
      text: this.data.inputValue,
      key: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMqaLR1RJVDTiEvo\n' + 'ZkY8wUrz53obO6VqA/bupJQFjEgl8TTgpP44dV4UVvor7ydYN5rmaSZmsiCnTbbN\n' + 'lUOB1Y80zrbei4HAeWx+bZ6R7Lw+lDF9dqPyWEz23ysmULgURzSzxCntDn+5iujB\n' + 'BtP2bq3sEUrd6A47bE4rMulhKp9tAgMBAAECgYBjsfRLPdfn6v9hou1Y2KKg+F5K\n' + 'ZsY2AnIK+6l+sTAzfIAx7e0ir7OJZObb2eyn5rAOCB1r6RL0IH+MWaN+gZANNG9g\n' + 'pXvRgcZzFY0oqdMZDuSJjpMTj7OEUlPyoGncBfvjAg0zdt9QGAG1at9Jr3i0Xr4X\n' + '6WrFhtfVlmQUY1VsoQJBAPK2Qj/ClkZNtrSDfoD0j083LcNICqFIIGkNQ+XeuTwl\n' + '+Gq4USTyaTOEe68MHluiciQ+QKvRAUd4E1zeZRZ02ikCQQDVscINBPTtTJt1JfAo\n' + 'wRfTzA0Lvgig136xLLeQXREcgq1lzgkf+tGyUGYoy9BXsV0mOuYAT9ldja4jhJeq\n' + 'cEulAkEAuSJ5KjV9dyb0RIFAz5C8d8o5KAodwaRIxJkPv5nCZbT45j6t9qbJxDg8\n' + 'N+vghDlHI4owvl5wwVlAO8iQBy8e8QJBAJe9CVXFV0XJR/n/XnER66FxGzJjVi0f\n' + '185nOlFARI5CHG5VxxT2PUCo5mHBl8ctIj+rQvalvGs515VQ6YEVDCECQE3S0AU2\n' + 'BKyFVNtTpPiTyRUWqig4EbSXwjXdr8iBBJDLsMpdWsq7DCwv/ToBoLg+cQ4Crc5/\n5DChU8P30EjOiEo=',
      success: function success(result) {
        _this2.setData({ outputValue: result.text });
      },
      fail: function fail(e) {
        my.alert({
          content: e.errorMessage || e.error
        });
      }
    });
  }
});

/***/ }),

/***/ "uy9u":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "uzu+":
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

$global.$addPageConfig({
  pagePath: "page/component/page-result/error/index",
  usingComponents: __webpack_require__("eN5X")

});
Page({
  data: {
    footer: [{ text: '刷新' }]
  }
});

/***/ }),

/***/ "v0bc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("PmPC");
/* harmony import */ var M_1_ = __webpack_require__("GwvB");
/* harmony import */ var M_2_ = __webpack_require__("bYYR");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "vAAL":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "vHdn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("haiF");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "vL9j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("gPTu");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "vjr+":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "vwRh":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "vyWN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__("lIxC")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("EBRW")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

/***/ }),

/***/ "vzpQ":
/***/ (function(module, exports) {

module.exports = {"list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index","list-secondary":"/node_modules/mini-ali-ui/es/list/list-secondary/index","tag":"/node_modules/mini-ali-ui/es/tag/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index","title":"/node_modules/mini-ali-ui/es/title/index","input-item":"/node_modules/mini-ali-ui/es/input-item/index","am-button":"/node_modules/mini-ali-ui/es/button/index","am-radio":"/node_modules/mini-ali-ui/es/am-radio/index","am-switch":"/node_modules/mini-ali-ui/es/am-switch/index"}

/***/ }),

/***/ "w2LO":
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

$global.$addPageConfig({
  pagePath: "page/component/movable-view/movable-view",
  usingComponents: __webpack_require__("3dzv")

});
Page({
  data: {
    x: 0,
    y: 0
  },
  onButtonTap: function onButtonTap() {
    var _data = this.data,
        x = _data.x,
        y = _data.y;

    if (x === 30) {
      this.setData({
        x: x + 1,
        y: y + 1
      });
    } else {
      this.setData({
        x: 30,
        y: 30
      });
    }
  }
});

/***/ }),

/***/ "w7H+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("5fAs");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "w92s":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/message/index",
  usingComponents: __webpack_require__("Ho7M")

});
var SUPPORT_COMPONENT2 = my.canIUse('component2');
var TYPE_MAP = {
  success: 'check_',
  fail: 'close_',
  info: 'help_',
  warn: 'warn_',
  waiting: 'time-5_'
};
Component({
  props: {
    className: '',
    type: 'success',
    title: '',
    onTapMain: function onTapMain() {},
    onTapSub: function onTapSub() {}
  },
  data: {
    iconType: 'check_'
  },
  onInit: function onInit() {
    this.setType(this.props.type);
  },
  didMount: function didMount() {
    if (!SUPPORT_COMPONENT2) {
      this.setType(this.props.type);
    }
  },
  didUpdate: function didUpdate(prevProps) {
    if (!SUPPORT_COMPONENT2 && this.props.type !== prevProps.type) {
      this.setType(this.props.type);
    }
  },
  deriveDataFromProps: function deriveDataFromProps(nextProps) {
    if (this.props.type !== nextProps.type) {
      this.setType(nextProps.type);
    }
  },
  methods: {
    tapMain: function tapMain() {
      this.props.onTapMain();
    },
    tapSub: function tapSub() {
      this.props.onTapSub();
    },
    setType: function setType(type) {
      var realType = TYPE_MAP[type] || 'check_';
      this.setData({
        iconType: realType
      });
    }
  }
});

/***/ }),

/***/ "wBon":
/***/ (function(module, exports) {

module.exports = {"block-list":"/page/common/components/block-list/block-list","list":"/node_modules/mini-ali-ui/es/list/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index"}

/***/ }),

/***/ "wFTM":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "wLGm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("1GiG");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "wLnV":
/***/ (function(module, exports) {

module.exports = {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"}

/***/ }),

/***/ "wMdJ":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "wZDM":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "wdiA":
/***/ (function(module, exports) {

module.exports = {"button":"/node_modules/mini-ali-ui/es/button/index","am-checkbox":"/node_modules/mini-ali-ui/es/am-checkbox/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "wdmQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("Nhj+");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "wer/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("iB5W");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "wgHU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("zZkM");
/* harmony import */ var M_1_ = __webpack_require__("lQK1");
/* harmony import */ var M_2_ = __webpack_require__("dyTD");
/* harmony import */ var M_2__default = /*#__PURE__*/__webpack_require__.n(M_2_);

  

  
  

/***/ }),

/***/ "wgtC":
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

$global.$addPageConfig({
  pagePath: "page/component/label/label",
  usingComponents: __webpack_require__("ZzIO")

});

Page({
  data: {}
});

/***/ }),

/***/ "wrQP":
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

$global.$addPageConfig({
  pagePath: "page/component/navigator/navigate",
  usingComponents: __webpack_require__("T7Kn")

});
Page({
  onLoad: function onLoad(options) {
    console.log(options);
    this.setData({
      title: options.title
    });
  }
});

/***/ }),

/***/ "wro7":
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

$global.$addPageConfig({
  pagePath: "page/API/sdk-version/sdk-version",
  usingComponents: __webpack_require__("OqFT")

});
Page({
  getSDKVersion: function getSDKVersion() {
    my.alert({
      content: my.SDKVersion
    });
  }
});

/***/ }),

/***/ "wv/R":
/***/ (function(module, exports) {

module.exports = {"am-icon":"/node_modules/mini-ali-ui/es/am-icon/index"}

/***/ }),

/***/ "x/8G":
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

$global.$addPageConfig({
  pagePath: "page/component/mask/mask",
  usingComponents: __webpack_require__("bQWg")

});
Page({
  data: {
    type: 'market',
    maskZindex: 10
  },
  maskClick: function maskClick() {
    if (this.data.type === 'market') {
      this.setData({
        type: 'product'
      });
    } else {
      this.setData({
        type: '',
        show: false
      });
    }
  }
});

/***/ }),

/***/ "x3H5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__("daId");
var $export = __webpack_require__("J5LZ");
var toObject = __webpack_require__("y7ys");
var call = __webpack_require__("hFRF");
var isArrayIter = __webpack_require__("Iz24");
var toLength = __webpack_require__("ImiU");
var createProperty = __webpack_require__("chCh");
var getIterFn = __webpack_require__("LuSL");

$export($export.S + $export.F * !__webpack_require__("mGzO")(function (iter) {
  Array.from(iter);
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

/***/ }),

/***/ "x46k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("+uZA");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "x9So":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0iQm");
/* harmony import */ var M_1_ = __webpack_require__("cyyQ");
/* harmony import */ var M_2_ = __webpack_require__("v0bc");
/* harmony import */ var M_3_ = __webpack_require__("Oix4");
/* harmony import */ var M_3__default = /*#__PURE__*/__webpack_require__.n(M_3_);

  


  
  

/***/ }),

/***/ "xCqd":
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

$global.$addPageConfig({
  pagePath: "page/API/get-server-time/get-server-time",
  usingComponents: __webpack_require__("CuQL")

});
Page({
  getServerTime: function getServerTime() {
    my.getServerTime({
      success: function success(res) {
        my.alert({
          content: res.time
        });
      }
    });
  }
});

/***/ }),

/***/ "xECI":
/***/ (function(module, exports) {

module.exports = {"tips-dialog":"/node_modules/mini-ali-ui/es/tips/tips-dialog/index","am-button":"/node_modules/mini-ali-ui/es/button/index","am-icon":"/node_modules/mini-ali-ui/es/am-icon/index","list-item":"/node_modules/mini-ali-ui/es/list/list-item/index","input-item":"/node_modules/mini-ali-ui/es/input-item/index"}

/***/ }),

/***/ "xMQo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("KZoE");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "xP0Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Vnk/");
/* harmony import */ var M_1_ = __webpack_require__("yHCF");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "xQ33":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("gVp1");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "xTN5":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/collapse/collapse-item/index",
  usingComponents: __webpack_require__("MEoJ")

});
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

var noop = function noop() {};

function collectArr(arr, ele) {
  var resArr = arr;

  if (arr instanceof Array) {
    resArr.push(ele);
  } else {
    resArr = [ele];
  }

  return resArr;
}

var prefixKey = function prefixKey(prefix) {
  return function (key) {
    return prefix + "-" + key;
  };
};

var collapsePrefix = prefixKey('am-collapse');
Component({
  data: {
    isActive: false,
    contentHeight: 0,
    contentId: '',
    id: '',
    activeKey: []
  },
  props: {
    itemKey: '',
    // 默认随机数
    header: '',
    isOpen: false,
    showArrow: true,
    activeClass: '',
    className: '',
    titleClass: '',
    contentClass: '',
    defaultContentHeight: 0,
    disabled: false,
    collapseKey: ''
  },
  didMount: function didMount() {
    this.initItems();
  },
  methods: {
    initItems: function initItems() {
      var _this$props = this.props,
          itemKey = _this$props.itemKey,
          isOpen = _this$props.isOpen,
          defaultContentHeight = _this$props.defaultContentHeight,
          collapseKey = _this$props.collapseKey;
      this.setData({
        isActive: isOpen,
        contentHeight: defaultContentHeight,
        contentId: this.$id,
        id: itemKey || this.$id
      });
      this.updateStyle({
        isActive: isOpen
      });
      var bindedMethod = this.handleItemDataUpdate.bind(this);
      this.$page[collapsePrefix("updates-" + collapseKey)] = collectArr(this.$page[collapsePrefix("updates-" + collapseKey)], bindedMethod);
      this.$page[collapsePrefix("ids-" + collapseKey)] = collectArr(this.$page[collapsePrefix("ids-" + collapseKey)], this.data.id);
    },
    handleItemDataUpdate: function handleItemDataUpdate(data) {
      this.setData(_extends({}, data));
      var _this$data = this.data,
          activeKey = _this$data.activeKey,
          id = _this$data.id;
      var isActive = activeKey.indexOf(id) !== -1;
      this.setData({
        isActive: isActive
      });
      this.updateStyle({
        isActive: isActive
      });
    },
    onCollapseTap: function onCollapseTap(evt) {
      var collapseKey = this.props.collapseKey;

      if (!this.props.disabled) {
        var dataset = evt.currentTarget.dataset;
        this.$page[collapsePrefix("handleItemTap-" + collapseKey)](dataset.key);
      }
    },
    updateStyle: function updateStyle(_ref) {
      var _this = this;

      var isActive = _ref.isActive,
          _ref$callback = _ref.callback,
          callback = _ref$callback === void 0 ? noop : _ref$callback;

      if (!isActive) {
        this.setData({
          isActive: isActive,
          contentHeight: 0
        });
        callback();
      } else {
        this.calcContentHeight(".am-collapse-item-content." + ("am-collapse-item-content-" + this.$id)).then(function (height) {
          _this.setData({
            isActive: isActive,
            contentHeight: height
          });

          callback();
        });
      }
    },
    calcContentHeight: function calcContentHeight(selector) {
      if (selector === void 0) {
        selector = '';
      }

      return new Promise(function (resolve, reject) {
        my.createSelectorQuery().select(selector).boundingClientRect().exec(function (res) {
          if (res && res[0]) {
            resolve(res[0].height);
          } else {
            reject(res);
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "xeO/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Vnk/");
/* harmony import */ var M_1_ = __webpack_require__("zV3S");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "xtxV":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "xv+P":
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

$global.$addPageConfig({
  pagePath: "page/component/page-result/empty/index",
  usingComponents: __webpack_require__("isJS")

});
Page({});

/***/ }),

/***/ "xxCk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("h7Fz");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "y7cw":
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

$global.$addPageConfig({
  pagePath: "page/API/navigator/navigator",
  usingComponents: __webpack_require__("GKXa")

});
Page({
  navigateTo: function navigateTo() {
    my.navigateTo({ url: '../get-user-info/get-user-info' });
  },
  navigateBack: function navigateBack() {
    my.navigateBack();
  },
  redirectTo: function redirectTo() {
    my.redirectTo({ url: '../get-user-info/get-user-info' });
  },
  navigateToMiniProgram: function navigateToMiniProgram() {
    if (my.canIUse('navigateToMiniProgram')) {
      my.navigateToMiniProgram({
        appId: '2017072607907880',
        extraData: {
          "data1": "test"
        },
        success: function success(res) {
          console.log(JSON.stringify(res));
        },
        fail: function fail(res) {
          console.log(JSON.stringify(res));
        }
      });
    }
  },
  navigateBackMiniProgram: function navigateBackMiniProgram() {
    if (my.canIUse('navigateBackMiniProgram')) {
      my.navigateBackMiniProgram({
        extraData: {
          "data1": "test"
        },
        success: function success(res) {
          console.log(JSON.stringify(res));
        },
        fail: function fail(res) {
          console.log(JSON.stringify(res));
        }
      });
    }
  },
  switchTab: function switchTab() {
    my.switchTab({
      url: '/page/tabBar/component/index',
      success: function success() {
        my.showToast({
          content: '成功',
          type: 'success',
          duration: 4000
        });
      }
    });
  }
});

/***/ }),

/***/ "y7ys":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("3mz4");
module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),

/***/ "yE9Z":
/***/ (function(module, exports) {

module.exports = {"page-result":"/node_modules/mini-ali-ui/es/page-result/index"}

/***/ }),

/***/ "yGyr":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/card/index",
  usingComponents: __webpack_require__("Pd5l")

});
Component({
  props: {
    title: '',
    onCardClick: function onCardClick() {},
    info: ''
  },
  methods: {
    onCardClick: function onCardClick() {
      var _this$props = this.props,
          info = _this$props.info,
          onCardClick = _this$props.onCardClick;
      onCardClick({
        info: info
      });
    },
    onActionClick: function onActionClick() {
      var _this$props2 = this.props,
          info = _this$props2.info,
          onActionClick = _this$props2.onActionClick;

      if (onActionClick) {
        onActionClick({
          info: info
        });
      }
    },
    onExtraActionClick: function onExtraActionClick() {
      var _this$props3 = this.props,
          info = _this$props3.info,
          onExtraActionClick = _this$props3.onExtraActionClick;

      if (onExtraActionClick) {
        onExtraActionClick({
          info: info
        });
      }
    }
  }
});

/***/ }),

/***/ "yHCF":
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

$global.$addPageConfig({
  pagePath: "page/component/page-result/local-error/index",
  usingComponents: __webpack_require__("ZeGA")

});
Page({});

/***/ }),

/***/ "yL1k":
/***/ (function(module, exports) {

module.exports = {"button":"/node_modules/mini-ali-ui/es/button/index","container":"/node_modules/mini-ali-ui/es/container/index","radio":"/node_modules/mini-ali-ui/es/am-radio/index","checkbox":"/node_modules/mini-ali-ui/es/am-checkbox/index"}

/***/ }),

/***/ "yNjr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("xCqd");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "yOWb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("7PrY");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "yQnl":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "ySfb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("5bQI");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "yTKl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("GwvB");
/* harmony import */ var M_1_ = __webpack_require__("g6MZ");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "yxQw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("OKc4");
/* harmony import */ var M_1_ = __webpack_require__("T27l");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "z/D6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtUnit = __webpack_require__("K4/D");

var _fmtUnit2 = _interopRequireDefault(_fmtUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/loading/index",
  usingComponents: __webpack_require__("ZHlu")

});

Component({
  props: {
    size: (0, _fmtUnit2.default)('100px'),
    className: '',
    color: '#1677ff'
  }
});

/***/ }),

/***/ "z3vv":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("fJad");
var anObject = __webpack_require__("7aEC");
var getKeys = __webpack_require__("qv8X");

module.exports = __webpack_require__("cafp") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }return O;
};

/***/ }),

/***/ "zAeA":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "zCbi":
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

$global.$addPageConfig({
  pagePath: "page/component/grid/4/index",
  usingComponents: __webpack_require__("4TVp")

});
Page({
  data: {
    list4: [{
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字标题文字标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }],
    list42: [{
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字'
    }, {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      text: '标题文字标题文'
    }]
  },
  onItemClick: function onItemClick(ev) {
    my.alert({
      content: ev.detail.index
    });
  }
});

/***/ }),

/***/ "zDvU":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "zIca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("v0bc");
/* harmony import */ var M_1_ = __webpack_require__("H4mh");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "zV3S":
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

$global.$addPageConfig({
  pagePath: "page/component/page-result/payment/index",
  usingComponents: __webpack_require__("h0HB")

});
Page({
  data: {
    footer: [{
      text: '返回'
    }]
  },
  onTapLeft: function onTapLeft() {
    my.reLaunch({
      url: '/pages/page-result/index'
    });
  }
});

/***/ }),

/***/ "zZkM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("H8c5");
/* harmony import */ var M_0__default = /*#__PURE__*/__webpack_require__.n(M_0_);

  
  
  

/***/ }),

/***/ "zbfS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmtUnit = __webpack_require__("K4/D");

var _fmtUnit2 = _interopRequireDefault(_fmtUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/list/auto-size-img/index",
  usingComponents: __webpack_require__("++dR")

});

Component({
  props: {
    size: (0, _fmtUnit2.default)('40px')
  }
});

/***/ }),

/***/ "zddX":
/***/ (function(module, exports) {

module.exports = {"title":"/node_modules/mini-ali-ui/es/title/index"}

/***/ }),

/***/ "zeeg":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "zgU7":
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

$global.$addComponentConfig({
  is: "/node_modules/mini-ali-ui/es/terms/index",
  usingComponents: __webpack_require__("wdiA")

});
Component({
  props: {
    fixed: false,
    related: true,
    capsuleSize: 'large',
    shape: 'default',
    agreeBtn: null,
    cancelBtn: null,
    capsuleMinWidth: false,
    hasDesc: false
  },
  data: {
    showBtn: true,
    status: 0,
    agreeBtnAttr: {},
    cancelBtnAttr: {}
  },
  didMount: function didMount() {
    var _this$props = this.props,
        agreeBtn = _this$props.agreeBtn,
        cancelBtn = _this$props.cancelBtn,
        related = _this$props.related;
    var agreeBtnCfg = agreeBtn ? Object.assign({
      title: '',
      subtitle: '',
      type: 'primary',
      data: 1,
      checked: false
    }, agreeBtn) : {};
    var cancelBtnCfg = cancelBtn ? Object.assign({
      title: '',
      subtitle: '',
      type: 'default',
      data: 2
    }, cancelBtn) : {};

    if (agreeBtnCfg.checked && related || !related) {
      this.setData({
        showBtn: false,
        status: 1,
        agreeBtnAttr: agreeBtnCfg,
        cancelBtnAttr: cancelBtnCfg
      });
    } else {
      this.setData({
        showBtn: true,
        status: 0,
        agreeBtnAttr: agreeBtnCfg,
        cancelBtnAttr: cancelBtnCfg
      });
    }
  },
  methods: {
    onTap: function onTap(e) {
      var onSelect = this.props.onSelect;
      onSelect && onSelect(e);
    },
    onChange: function onChange(e) {
      var related = this.props.related;
      var isSeleted = e.detail.value;

      if (related && isSeleted) {
        this.setData({
          showBtn: false,
          status: 1
        });
      } else {
        this.setData({
          showBtn: true,
          status: 0
        });
      }
    }
  }
});

/***/ }),

/***/ "zhtC":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "zlu3":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "zp25":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("4yps");
/* harmony import */ var M_1_ = __webpack_require__("D+jx");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "zs5F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("0LoN");
/* harmony import */ var M_1_ = __webpack_require__("t1Cn");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ }),

/***/ "zxdz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var M_0_ = __webpack_require__("Vnk/");
/* harmony import */ var M_1_ = __webpack_require__("BpEc");
/* harmony import */ var M_1__default = /*#__PURE__*/__webpack_require__.n(M_1_);

  
  
  

/***/ })

/******/ });
var __scriptTimeEnd4Bundle = Date && Date.now && Date.now();
//# sourceMappingURL=index.worker.js.map

console.log("checkpoint 2");