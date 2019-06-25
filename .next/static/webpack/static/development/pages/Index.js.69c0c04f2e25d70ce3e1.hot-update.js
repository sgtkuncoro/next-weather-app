webpackHotUpdate("static/development/pages/Index.js",{

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
          lineNumber: 155
        },
        __self: this
      }, _react.default.createElement(_head.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, _react.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
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
          lineNumber: 159
        },
        __self: this
      }), _react.default.createElement(DetailedInfo, {
        high: this.state.high,
        low: this.state.low,
        sunrise: this.state.sunrise,
        sunset: this.state.sunset,
        windSpeed: this.state.windSpeed,
        humidity: this.state.humidity,
        time: this.state.time,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
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
//# sourceMappingURL=Index.js.69c0c04f2e25d70ce3e1.hot-update.js.map