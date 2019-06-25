webpackHotUpdate("static/development/pages/About.js",{

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

var _Footer = _interopRequireDefault(__webpack_require__(/*! ../parts/Footer */ "./components/parts/Footer.jsx"));

var _jsxFileName = "/Users/kunc/CodeLabs/next-weather-app/components/layouts/Default.jsx";

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

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
  }), props.children, _react.default.createElement(_Footer.default, {
    classes: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })))));
};

exports.default = _default;

/***/ })

})
//# sourceMappingURL=About.js.ce915ee6c77c668ce1eb.hot-update.js.map