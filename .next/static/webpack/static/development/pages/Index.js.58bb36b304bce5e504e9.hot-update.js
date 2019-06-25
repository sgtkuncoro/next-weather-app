webpackHotUpdate("static/development/pages/Index.js",{

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

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

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
    className: "main-content",
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

/***/ })

})
//# sourceMappingURL=Index.js.58bb36b304bce5e504e9.hot-update.js.map