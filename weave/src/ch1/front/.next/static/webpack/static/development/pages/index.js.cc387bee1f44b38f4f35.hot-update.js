webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/GroupBox.js":
/*!********************************!*\
  !*** ./components/GroupBox.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _GroupItem_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupItem.css */ "./components/GroupItem.css");
/* harmony import */ var _GroupItem_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_GroupItem_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\uC774\uADC0\uC601\\Documents\\coporate\\weave\\src\\ch1\\front\\components\\GroupBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const GroupBox = ({
  gpost
}) => {
  const {
    GroupPosts
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.gpost); // const { grouptit, grouptext } = this.props;

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(Link, {
    href: "/cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: "contbox000000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "group_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, " ", gpost.id, " "), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, gpost.content)))));
}; // GroupBox.propTypes={
//     gpost: PropTypes.shape({
//         User: PropTypes.object,
//         content: PropTypes.string,
//         img: PropTypes.string,
//     }),
// };


/* harmony default export */ __webpack_exports__["default"] = (GroupBox);

/***/ })

})
//# sourceMappingURL=index.js.cc387bee1f44b38f4f35.hot-update.js.map