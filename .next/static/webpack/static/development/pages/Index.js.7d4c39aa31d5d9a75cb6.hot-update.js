webpackHotUpdate("static/development/pages/Index.js",{

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

var _head = _interopRequireDefault(__webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

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

/***/ })

})
//# sourceMappingURL=Index.js.7d4c39aa31d5d9a75cb6.hot-update.js.map