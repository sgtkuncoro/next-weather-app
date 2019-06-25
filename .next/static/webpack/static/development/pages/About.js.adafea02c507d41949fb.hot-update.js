webpackHotUpdate("static/development/pages/About.js",{

/***/ "./components/parts/Footer.jsx":
/*!*************************************!*\
  !*** ./components/parts/Footer.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StickyFooter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _CssBaseline = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Container = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js"));

var _Link = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js"));

var _jsxFileName = "/Users/kunc/CodeLabs/next-weather-app/components/parts/Footer.jsx";

function MadeWithLove() {
  return _react.default.createElement(_Typography.default, {
    variant: "body2",
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Built with love by the ", _react.default.createElement(_Link.default, {
    color: "inherit",
    href: "https://material-ui.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Kunc"), " team.");
}

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

function StickyFooter() {
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, _react.default.createElement(_CssBaseline.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), _react.default.createElement(_Container.default, {
    component: "main",
    className: classes.main,
    maxWidth: "sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, _react.default.createElement(_Typography.default, {
    variant: "h2",
    component: "h1",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Sticky footer"), _react.default.createElement(_Typography.default, {
    variant: "h5",
    component: "h2",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Pin a footer to the bottom of the viewport.", "The footer will move as the main element of the page grows."), _react.default.createElement(_Typography.default, {
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Sticky footer placeholder.")), _react.default.createElement("footer", {
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, _react.default.createElement(_Container.default, {
    maxWidth: "sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, _react.default.createElement(_Typography.default, {
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "My sticky footer can be found here."), _react.default.createElement(MadeWithLove, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=About.js.adafea02c507d41949fb.hot-update.js.map