webpackHotUpdate("static/development/pages/Index.js",{

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

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));

var _jsxFileName = "/Users/kunc/CodeLabs/next-weather-app/components/sections/Forecast.jsx";

var Forecast = function Forecast(_ref) {
  var forecast = _ref.forecast,
      tempClass = _ref.tempClass;
  return _react.default.createElement("div", {
    className: "forecast ",
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

/***/ })

})
//# sourceMappingURL=Index.js.9201ce5a1c9d5808e8a8.hot-update.js.map