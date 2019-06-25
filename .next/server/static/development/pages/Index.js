module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Global.jsx":
/*!*******************************!*\
  !*** ./components/Global.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Global = _interopRequireDefault(__webpack_require__(/*! ../components/layouts/Global */ "./components/layouts/Global.jsx"));

var _Default = _interopRequireDefault(__webpack_require__(/*! ../components/layouts/Default */ "./components/layouts/Default.jsx"));

var _jsxFileName = "/Users/kunc/CodeLabs/next-weather-app/components/Global.jsx";

var _default = function _default(props) {
  return _react.default.createElement(_Global.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, _react.default.createElement(_Default.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.children));
};

exports.default = _default;

/***/ }),

/***/ "./components/Global.scss":
/*!********************************!*\
  !*** ./components/Global.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultExport = new String("{/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */}html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button;}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto;}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}button{font-family:inherit;font-size:inherit;}img,video,canvas{display:block;}:focus,:active{outline:none;}.app-bar-logo{width:35px;height:35px;}body{font-family:\"Raleway\",sans-serif;color:#2d3436;text-align:center;width:100%;}.main-icon,.big-data h2{font-size:6em;border-radius:50%;padding:20px;margin:20px 0 20px 0;display:inline-block;border-top:20px;}.big-data h2{border-left:1px solid #2d3436;border-radius:0;}.big-data h2,.main-city,.main-description{font-weight:400;}.main-content{display:contents;}.main-description{font-size:2.5em;}.main-city{font-size:2em;}.boiling{background:#ff7675;}.hot{background:#fab1a0;}.warm{background:#fce498;}.perfect{background:#6ac3a4;}.cool{background:#67c6bb;}.freezing{background:#80bcf8;}.boiling-forecast{background:#d63031;}.hot-forecast{background:#e17055;}.warm-forecast{background:#fdcb6e;}.perfect-forecast{background:#15a57a;}.cool-forecast{background:#22a39c;}.freezing-forecast{background:#278fdf;}.horiz-menu{height:150px;margin:0 auto;margin-bottom:20px;}.forecast-cell{height:150px;display:block !important;padding:4 10px !important;text-align:center !important;}.forecast-area{width:100%;}.forecast-cell>i{font-size:3em;padding:15px 0;}.forecast-cell>p{font-size:0.7em;margin:0;}.temp-text{font-size:1.5em;}.forecast-cell h5{display:block;margin:0;}.app-bar-logo{width:70px;height:70px;margin-left:-5px;}.menu{padding:0 !important;font-family:\"Raleway\",sans-serif !important;font-weight:400;}.location-button{min-width:25% !important;}.cell-data{text-align:right !important;}.weather-details{font-family:\"Raleway\",sans-serif !important;}.weather-details>tbody>tr>td{color:#2d3436 !important;font-size:1.2em;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;}.whole-details-area{padding:20px 2% 80px;font-weight:400;}.whole-details-area h4{font-size:2em;margin:10px auto;}button.add-button{position:absolute;right:0px;}svg.MuiSvgIcon-root-103{color:black;}");

_defaultExport.__hash = "4262246542";
var _default = _defaultExport;
exports.default = _default;

/***/ }),

/***/ "./components/layouts/Default.jsx":
/*!****************************************!*\
  !*** ./components/layouts/Default.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _taggedTemplateLiteral2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/taggedTemplateLiteral.js"));

var _core = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "styled-components"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");

var _Header = _interopRequireDefault(__webpack_require__(/*! ../parts/Header */ "./components/parts/Header.jsx"));

var _jsxFileName = "/Users/kunc/CodeLabs/next-weather-app/components/layouts/Default.jsx";

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// import Footer from "../parts/Footer";
var DefaultLayout = _styledComponents.default.div(_templateObject());

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2)
    },
    footer: {
      padding: theme.spacing(2),
      marginTop: "auto",
      backgroundColor: "white"
    }
  };
});

var _default = function _default(props) {
  var classes = useStyles();
  return _react.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, _react.default.createElement(_core.Grid, {
    container: true,
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, _react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, _react.default.createElement(DefaultLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, _react.default.createElement(_Header.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), props.children))));
};

exports.default = _default;

/***/ }),

/***/ "./components/layouts/Global.jsx":
/*!***************************************!*\
  !*** ./components/layouts/Global.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _taggedTemplateLiteral2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/taggedTemplateLiteral.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! next-server/head */ "next-server/head"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "styled-components"));

var _Global = _interopRequireDefault(__webpack_require__(/*! ../Global.scss */ "./components/Global.scss"));

var _jsxFileName = "/Users/kunc/CodeLabs/next-weather-app/components/layouts/Global.jsx";

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var GlobalLayoutStyled = _styledComponents.default.div(_templateObject());

var defaultMetadata = {
  title: "Next Weather",
  description: "The next city weather",
  image: "/assets/logos/weather-climate-logo.png",
  keywords: "city weather",
  url: "",
  type: "blog"
};

var HomeLayout =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(HomeLayout, _React$Component);

  function HomeLayout() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, HomeLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(HomeLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "render", function () {
      var _this$props = _this.props,
          children = _this$props.children,
          _this$props$metadata = _this$props.metadata,
          metadata = _this$props$metadata === void 0 ? defaultMetadata : _this$props$metadata,
          _this$props$scripts = _this$props.scripts,
          scripts = _this$props$scripts === void 0 ? [] : _this$props$scripts;
      return _react.default.createElement(_react.default.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, _react.default.createElement(_head.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, _react.default.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), _react.default.createElement("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), _react.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), _react.default.createElement("link", {
        rel: "icon",
        href: "/assets/favicon/favicon.ico",
        type: "image/x-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), _react.default.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.5/css/weather-icons.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), _react.default.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css",
        integrity: "sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), _react.default.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), _react.default.createElement("link", {
        rel: "icon",
        type: "image/png",
        href: "/assets/icons/logo_16x16.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), _react.default.createElement("meta", {
        name: "msapplication-TileColor",
        content: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), _react.default.createElement("meta", {
        name: "msapplication-TileImage",
        content: "/assets/icons/logo_16x16.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), _react.default.createElement("meta", {
        name: "theme-color",
        content: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), _react.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, metadata.title), _react.default.createElement("meta", {
        name: "description",
        content: metadata.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), _react.default.createElement("meta", {
        name: "keywords",
        content: metadata.keywords,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), _react.default.createElement("meta", {
        property: "og:title",
        content: metadata.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), _react.default.createElement("meta", {
        property: "og:type",
        content: metadata.type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), _react.default.createElement("meta", {
        property: "og:url",
        content: metadata.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), _react.default.createElement("meta", {
        property: "og:image",
        content: metadata.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), _react.default.createElement("meta", {
        property: "og:description",
        content: metadata.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), _react.default.createElement("meta", {
        name: "twitter:card",
        content: "summary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), _react.default.createElement("meta", {
        name: "twitter:site",
        content: "@nextweather",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), _react.default.createElement("meta", {
        name: "twitter:title",
        content: metadata.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), _react.default.createElement("meta", {
        name: "twitter:description",
        content: metadata.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), _react.default.createElement("meta", {
        name: "twitter:image",
        content: metadata.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), scripts.length > 0 ? scripts.map(function (n, key) {
        return _react.default.createElement("script", {
          src: n.src,
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        });
      }) : null, _react.default.createElement(_style.default, {
        id: _Global.default.__hash,
        __self: this
      }, _Global.default)), _react.default.createElement(GlobalLayoutStyled, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, children));
    });
    return _this;
  }

  return HomeLayout;
}(_react.default.Component);

exports.default = HomeLayout;

/***/ }),

/***/ "./components/navigations/AppBar.jsx":
/*!*******************************************!*\
  !*** ./components/navigations/AppBar.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _MoreVert = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert"));

var _Add = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add"));

var _core = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");

var _routes = __webpack_require__(/*! ../../routes */ "./routes.js");

var _jsxFileName = "/Users/kunc/CodeLabs/next-weather-app/components/navigations/AppBar.jsx";
var ITEM_HEIGHT = 45;
var URL_LOGO = "/assets/logos/weather-climate-logo.png";

var ApplicationBar =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ApplicationBar, _Component);

  function ApplicationBar() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ApplicationBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ApplicationBar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      anchorEl: null,
      user: null
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOpen", function (event) {
      _this.setState({
        anchorEl: event.currentTarget
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClose", function () {
      _this.setState({
        anchorEl: null
      });
    });
    return _this;
  }

  (0, _createClass2.default)(ApplicationBar, [{
    key: "setUser",
    value: function setUser(user) {
      this.setState({
        user: user
      });
    }
  }, {
    key: "render",
    value: function render() {
      var anchorEl = this.state.anchorEl;
      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, _react.default.createElement(_core.Toolbar, {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, _react.default.createElement(_core.IconButton, {
        "aria-owns": anchorEl ? "simple-menu" : null,
        onClick: this.handleOpen,
        "aria-label": "More",
        "aria-haspopup": "true",
        color: "inherit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, _react.default.createElement(_MoreVert.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), _react.default.createElement(_core.Menu, {
        id: "simple-menu",
        anchorEl: anchorEl,
        open: Boolean(anchorEl),
        onClose: this.handleClose,
        PaperProps: {
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, _react.default.createElement(_core.MenuItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, _react.default.createElement(_routes.Link, {
        route: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, _react.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Home"))), _react.default.createElement(_core.MenuItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, _react.default.createElement(_routes.Link, {
        route: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, _react.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "About"))), _react.default.createElement(_core.MenuItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, _react.default.createElement(_routes.Link, {
        route: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, _react.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Profile"))))));
    }
  }]);
  return ApplicationBar;
}(_react.Component);

var _default = ApplicationBar;
exports.default = _default;

/***/ }),

/***/ "./components/parts/Header.jsx":
/*!*************************************!*\
  !*** ./components/parts/Header.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _taggedTemplateLiteral2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/taggedTemplateLiteral.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "styled-components"));

var _AppBar = _interopRequireDefault(__webpack_require__(/*! ../navigations/AppBar */ "./components/navigations/AppBar.jsx"));

var _jsxFileName = "/Users/kunc/CodeLabs/next-weather-app/components/parts/Header.jsx";

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var HeaderWrapperStyle = _styledComponents.default.header(_templateObject());

var Header =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Header, _React$Component);

  function Header() {
    (0, _classCallCheck2.default)(this, Header);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Header).apply(this, arguments));
  }

  (0, _createClass2.default)(Header, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(HeaderWrapperStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, _react.default.createElement(_AppBar.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }));
    }
  }]);
  return Header;
}(_react.default.Component);

var _default = Header;
exports.default = _default;

/***/ }),

/***/ "./components/sections/CurrentWeather.jsx":
/*!************************************************!*\
  !*** ./components/sections/CurrentWeather.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _core = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");

var _jsxFileName = "/Users/kunc/CodeLabs/next-weather-app/components/sections/CurrentWeather.jsx";

var CurrentWeather = function CurrentWeather(_ref) {
  var temp = _ref.temp,
      description = _ref.description,
      city = _ref.city,
      iconId = _ref.iconId,
      loading = _ref.loading;
  return _react.default.createElement(_core.Grid, {
    item: true,
    xl: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, loading ? _react.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Loading...") : _react.default.createElement("div", {
    className: "big-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, _react.default.createElement("i", {
    className: "wi wi-owm-".concat(iconId, " main-icon"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), _react.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, Math.round(temp), "\xB0")), _react.default.createElement("h2", {
    className: "main-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, description), _react.default.createElement("h1", {
    className: "main-city",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, city));
};

var _default = CurrentWeather;
exports.default = _default;

/***/ }),

/***/ "./components/sections/DetailInfo.jsx":
/*!********************************************!*\
  !*** ./components/sections/DetailInfo.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _core = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");

var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "moment"));

var _jsxFileName = "/Users/kunc/CodeLabs/next-weather-app/components/sections/DetailInfo.jsx";

var DetailedInfo = function DetailedInfo(_ref) {
  var high = _ref.high,
      low = _ref.low,
      humidity = _ref.humidity,
      windSpeed = _ref.windSpeed,
      time = _ref.time,
      sunrise = _ref.sunrise,
      sunset = _ref.sunset;
  return _react.default.createElement("div", {
    className: "whole-details-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, _react.default.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Weather Details"), _react.default.createElement(_core.Table, {
    className: "weather-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, _react.default.createElement(_core.TableBody, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, _react.default.createElement(_core.TableRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, _react.default.createElement(_core.TableCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "High Temperature"), _react.default.createElement(_core.TableCell, {
    className: "cell-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, high, "\xB0")), _react.default.createElement(_core.TableRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, _react.default.createElement(_core.TableCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Low Temperature"), _react.default.createElement(_core.TableCell, {
    className: "cell-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, low, "\xB0")), _react.default.createElement(_core.TableRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, _react.default.createElement(_core.TableCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Humidity"), _react.default.createElement(_core.TableCell, {
    className: "cell-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, humidity, "%")), _react.default.createElement(_core.TableRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, _react.default.createElement(_core.TableCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Wind Speed"), _react.default.createElement(_core.TableCell, {
    className: "cell-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, windSpeed)), _react.default.createElement(_core.TableRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, _react.default.createElement(_core.TableCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Sunrise"), _react.default.createElement(_core.TableCell, {
    className: "cell-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, _moment.default.unix(sunrise).format("h:mA"))), _react.default.createElement(_core.TableRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, _react.default.createElement(_core.TableCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Sunset"), _react.default.createElement(_core.TableCell, {
    className: "cell-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, _moment.default.unix(sunset).format("h:mA"))), _react.default.createElement(_core.TableRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, _react.default.createElement(_core.TableCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Date"), _react.default.createElement(_core.TableCell, {
    className: "cell-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, _moment.default.unix(time).format("ddd, h:mA"))))));
};

var _default = DetailedInfo;
exports.default = _default;

/***/ }),

/***/ "./components/sections/Forecast.jsx":
/*!******************************************!*\
  !*** ./components/sections/Forecast.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parseInt2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _core = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");

var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "moment"));

var _jsxFileName = "/Users/kunc/CodeLabs/next-weather-app/components/sections/Forecast.jsx";

var Forecast = function Forecast(_ref) {
  var forecast = _ref.forecast,
      tempClass = _ref.tempClass;
  return _react.default.createElement("div", {
    className: "forecast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, _react.default.createElement("div", {
    className: "horiz-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, _react.default.createElement(_core.Toolbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, _react.default.createElement(_core.Tabs, {
    scrollable: true,
    scrollButtons: "auto",
    className: "forecast-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, forecast.map(function (day, index) {
    var dayNight = "";

    if ((0, _parseInt2.default)((0, _moment.default)(day.dt_txt).format("HH")) <= 6 || (0, _parseInt2.default)((0, _moment.default)(day.dt_txt).format("HH")) >= 19) {
      dayNight = "night";
    } else {
      dayNight = "day";
    }

    return _react.default.createElement(_core.ListItem, {
      key: index,
      className: "forecast-cell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, _react.default.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, (0, _moment.default)(day.dt_txt).format("ddd, hA")), dayNight === "night" ? _react.default.createElement("i", {
      className: "wi wi-owm-night-".concat(day.weather[0].id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }) : _react.default.createElement("i", {
      className: "wi wi-owm-".concat(day.weather[0].id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), _react.default.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, _react.default.createElement("strong", {
      className: "temp-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, Math.round(day.main.temp), "\xB0")));
  })))));
};

var _default = Forecast;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/taggedTemplateLiteral.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/taggedTemplateLiteral.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperties = __webpack_require__(/*! ../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");

var _Object$freeze = __webpack_require__(/*! ../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _Object$freeze(_Object$defineProperties(strings, {
    raw: {
      value: _Object$freeze(raw)
    }
  }));
}

module.exports = _taggedTemplateLiteral;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/Index.jsx":
/*!*************************!*\
  !*** ./pages/Index.jsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "axios"));

var _head = _interopRequireDefault(__webpack_require__(/*! next-server/head */ "next-server/head"));

var _Global = _interopRequireDefault(__webpack_require__(/*! ../components/Global */ "./components/Global.jsx"));

var _CurrentWeather = _interopRequireDefault(__webpack_require__(/*! ../components/sections/CurrentWeather */ "./components/sections/CurrentWeather.jsx"));

var _Forecast = _interopRequireDefault(__webpack_require__(/*! ../components/sections/Forecast */ "./components/sections/Forecast.jsx"));

var _DetailInfo = _interopRequireDefault(__webpack_require__(/*! ../components/sections/DetailInfo */ "./components/sections/DetailInfo.jsx"));

var _jsxFileName = "/Users/kunc/CodeLabs/next-weather-app/pages/Index.jsx";

__webpack_require__(/*! dotenv */ "dotenv").config();

var WEATHER_API_KEY = "7610e105f1323323010f6c8eab669138";
var WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

var Index =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      activeCity: "Jakarta",
      user: null,
      forecast: [],
      temperatureUnits: "metric",
      temperatureClass: "",
      savedCities: null,
      loading: false
    });
    return _this;
  }

  (0, _createClass2.default)(Index, [{
    key: "componentDidMount",

    /** Mount original city  */
    value: function () {
      var _componentDidMount = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.apiRequest(this.state.activeCity);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
    /** Yahoo! Weather API request  */

  }, {
    key: "apiRequest",
    value: function () {
      var _apiRequest = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(cityName) {
        var _this2 = this;

        var locationUrl, forecastUrl;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  loading: true
                });
                locationUrl = "".concat(WEATHER_API_URL, "/weather?q=").concat(cityName, "&units=").concat(this.state.temperatureUnits, "&appid=").concat(WEATHER_API_KEY);
                _context2.next = 4;
                return _axios.default.get(locationUrl).then(function (result) {
                  var currentConditions = result.data;

                  _this2.setState({
                    cityName: currentConditions.name,
                    temp: currentConditions.main.temp,
                    iconId: currentConditions.weather[0].id,
                    description: currentConditions.weather[0].main,
                    humidity: currentConditions.main.humidity,
                    time: currentConditions.dt,
                    high: currentConditions.main.temp_max,
                    low: currentConditions.main.temp_min,
                    sunrise: currentConditions.sys.sunrise,
                    sunset: currentConditions.sys.sunset,
                    windSpeed: "".concat(currentConditions.wind.speed, " ").concat(_this2.state.temperatureUnits === "metric" ? "m/s" : "mph")
                  });

                  _this2.setTemperatureClass();
                }).catch(function (err) {
                  _this2.setState({
                    loading: false
                  });

                  console.log(err);
                });

              case 4:
                forecastUrl = "".concat(WEATHER_API_URL, "/forecast?q=").concat(cityName, "&units=").concat(this.state.temperatureUnits, "&appid=").concat(WEATHER_API_KEY);

                _axios.default.get(forecastUrl).then(function (result) {
                  _this2.setState({
                    forecast: result.data.list,
                    loading: false
                  });
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function apiRequest(_x) {
        return _apiRequest.apply(this, arguments);
      }

      return apiRequest;
    }()
    /** App city search bar functions  */

  }, {
    key: "handleChange",
    value: function handleChange(e) {
      e.preventDefault();
      this.setState({
        activeCity: e.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.apiRequest(this.state.activeCity);
    }
    /** Set temperature class for color combos  */

  }, {
    key: "convertTemperature",
    value: function convertTemperature() {
      if (this.state.temperatureUnits === "metric") {
        return this.state.temp * 9 / 5 + 32;
      } else {
        return this.state.temp;
      }
    }
  }, {
    key: "setTemperatureClass",
    value: function setTemperatureClass() {
      var temp = this.convertTemperature();

      if (temp >= 100) {
        this.setState({
          temperatureClass: "boiling"
        });
      }

      if (temp < 100 && temp >= 85) {
        this.setState({
          temperatureClass: "hot"
        });
      }

      if (temp < 85 && temp >= 65) {
        this.setState({
          temperatureClass: "warm"
        });
      }

      if (temp < 65 && temp >= 50) {
        this.setState({
          temperatureClass: "perfect"
        });
      }

      if (temp < 50 && temp >= 32) {
        this.setState({
          temperatureClass: "cool"
        });
      }

      if (temp < 32) {
        this.setState({
          temperatureClass: "freezing"
        });
      }
    }
    /** Toggle Celsius and Fahrenheit */

  }, {
    key: "changeUnits",
    value: function changeUnits() {
      var _this3 = this;

      setTimeout(function () {
        _this3.state.temperatureUnits === "imperial" ? _this3.setState({
          temperatureUnits: "metric"
        }) : _this3.setState({
          temperatureUnits: "imperial"
        });

        _this3.apiRequest(_this3.state.activeCity);
      });
    }
    /** Add city to database */

  }, {
    key: "handleAddCity",
    value: function handleAddCity(e) {
      e.preventDefault();

      if (this.state.user != null) {
        this.citiesRef.push({
          city: this.state.activeCity,
          user: this.state.user.email
        });
      }

      this.handleSavedCities();
    }
  }, {
    key: "handleCityClick",
    value: function handleCityClick(city) {
      this.setState({
        activeCity: city
      });
      this.apiSearch(city);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_Global.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, _react.default.createElement(_head.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, _react.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Next Weather")), _react.default.createElement(_CurrentWeather.default, {
        city: this.state.cityName,
        temp: this.state.temp,
        iconId: this.state.iconId,
        description: this.state.description,
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), _react.default.createElement(_Forecast.default, {
        forecast: this.state.forecast,
        tempClass: this.state.temperatureClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }), _react.default.createElement(_DetailInfo.default, {
        high: this.state.high,
        low: this.state.low,
        sunrise: this.state.sunrise,
        sunset: this.state.sunset,
        windSpeed: this.state.windSpeed,
        humidity: this.state.humidity,
        time: this.state.time,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }));
    }
  }]);
  return Index;
}(_react.default.Component);

exports.default = Index;

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nextRoutes = __webpack_require__(/*! next-routes */ "next-routes");

var routes = module.exports = nextRoutes();
routes.add("index", "/", "Index");
routes.add("about", "/about", "About");

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/Index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kunc/CodeLabs/next-weather-app/pages/Index.jsx */"./pages/Index.jsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=Index.js.map