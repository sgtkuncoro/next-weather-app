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
    className: "forecast ".concat("".concat(tempClass, "-forecast")),
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "./node_modules/core-js/library/fn/parse-int.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/fn/parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/core-js/library/modules/es6.parse-int.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").parseInt;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/library/modules/_string-trim.js").trim;
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-trim.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-trim.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-ws.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-ws.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.parse-int.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.parse-int.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/library/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


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

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js"));

var _Global = _interopRequireDefault(__webpack_require__(/*! ../components/Global */ "./components/Global.jsx"));

var _CurrentWeather = _interopRequireDefault(__webpack_require__(/*! ../components/sections/CurrentWeather */ "./components/sections/CurrentWeather.jsx"));

var _Forecast = _interopRequireDefault(__webpack_require__(/*! ../components/sections/Forecast */ "./components/sections/Forecast.jsx"));

var _DetailInfo = _interopRequireDefault(__webpack_require__(/*! ../components/sections/DetailInfo */ "./components/sections/DetailInfo.jsx"));

var _jsxFileName = "/Users/kunc/CodeLabs/next-weather-app/pages/Index.jsx";

__webpack_require__(/*! dotenv */ "./node_modules/dotenv/lib/main.js").config();

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

/***/ })

})
//# sourceMappingURL=Index.js.978432230d287e185b90.hot-update.js.map