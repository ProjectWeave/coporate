webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _pages_Join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Join */ "./pages/Join.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Join__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Join */ "./components/Join.js");
var _jsxFileName = "C:\\Users\\\uC774\uADC0\uC601\\Documents\\coporate\\weave\\src\\ch1\\front\\components\\Login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import Link from 'next/link';




 // import IndexPage from './IndexPage';



const Login = () => {
  const [id, onChangeId] = Object(_pages_Join__WEBPACK_IMPORTED_MODULE_3__["useInput"])();
  const [password, onChangePassword] = Object(_pages_Join__WEBPACK_IMPORTED_MODULE_3__["useInput"])();
  const {
    isLoggingIn
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])(); //const [ mode, setMode ] = useState(false); //초기값

  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_IN_REQUEST"],
      data: {
        id,
        password
      }
    });
  }, [id, password]); // const onChangePage =((e) => {
  //       alert('회원가입페이지로 이동합니다.');
  //       Router.push("/join");
  // });
  // const onChangeForm = ((e)=>{
  //   e.preventDefault();
  //   return(
  //     <>
  //       <Join />
  //     </>
  //   );
  // });

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("article", {
    className: "rLg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), __jsx("div", {
    className: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("h2", {
    className: "bld",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "\uB85C\uADF8\uC778"), __jsx("form", {
    className: "lgform",
    action: "create_process",
    method: "post",
    onSubmit: onSubmitForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("div", {
    className: "lg_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "\uC9C0\uAE08 \uBC14\uB85C \uAC00\uC785\uD558\uC138\uC694!"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "user-id",
    className: "bld",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "\uC544\uC774\uB514"), __jsx("input", {
    name: "user-id",
    value: id,
    onChange: onChangeId,
    placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD558\uC138\uC694.",
    className: "tbox",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "user-password",
    value: password,
    onChange: onChangePassword,
    className: "bld",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("input", {
    name: "user-pasword",
    type: "password",
    placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.",
    className: "tbox",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  })), __jsx("div", {
    className: "btngroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("button", {
    htmlType: "submit",
    className: "btn",
    loading: isLoggingIn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "\uB85C\uADF8\uC778"), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/join",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("button", {
    className: "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "\uD68C\uC6D0\uAC00\uC785"))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/join",
    component: _Join__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
false,

/***/ "./node_modules/core-js/library/fn/map.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.map.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false

})
//# sourceMappingURL=index.js.270a364c1632b6d9975a.hot-update.js.map