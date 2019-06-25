webpackHotUpdate("static/development/pages/Index.js",{

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

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _taggedTemplateLiteral2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/taggedTemplateLiteral.js"));

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

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
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, _react.default.createElement(_core.Grid, {
    container: true,
    justify: "center",
    alignItems: "center",
    className: classes.main,
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
      lineNumber: 37
    },
    __self: this
  }, _react.default.createElement(DefaultLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, _react.default.createElement(_Header.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), props.children))));
};

exports.default = _default;

/***/ }),

/***/ "./components/parts/Footer.jsx":
false

})
//# sourceMappingURL=Index.js.e94b82e9e5f79b29c660.hot-update.js.map