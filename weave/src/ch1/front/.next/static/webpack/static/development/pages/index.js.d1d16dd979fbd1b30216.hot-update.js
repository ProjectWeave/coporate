webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home */ "./components/Home.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_IndexPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/IndexPage */ "./components/IndexPage.js");
/* harmony import */ var _components_First_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/First.css */ "./components/First.css");
/* harmony import */ var _components_First_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_First_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\\uC774\uADC0\uC601\\Documents\\coporate\\weave\\src\\ch1\\front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import React from 'react';
// import Information from '../components/Information';
// import Login from '../components/Login';
// import '../components/First.css';
// const HomePage = () => {
//     return (
//         <div>
//             <Information />
//             <Login />
//         </div>
//     );
// };
// export default HomePage;







const HomePage = () => {
  const {
    isLoggedIn
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const {
    mainPosts
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, isLoggedIn && __jsx(_components_IndexPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), mainPosts.map(c => {
    return __jsx("div", {
      key: c,
      post: c,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.d1d16dd979fbd1b30216.hot-update.js.map