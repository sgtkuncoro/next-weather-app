webpackHotUpdate("static/development/pages/About.js",{

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

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _MoreVert = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js"));

var _Add = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js"));

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

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

/***/ })

})
//# sourceMappingURL=About.js.e9657765dd07c76d8bbb.hot-update.js.map