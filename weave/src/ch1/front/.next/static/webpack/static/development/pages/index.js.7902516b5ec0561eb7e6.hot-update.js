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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _pages_Join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Join */ "./pages/Join.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _IndexPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IndexPage */ "./components/IndexPage.js");
var _jsxFileName = "C:\\Users\\\uC774\uADC0\uC601\\Documents\\coporate\\weave\\src\\ch1\\front\\components\\Login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Login = () => {
  const [id, onChangeId] = Object(_pages_Join__WEBPACK_IMPORTED_MODULE_3__["useInput"])();
  const [password, onChangePassword] = Object(_pages_Join__WEBPACK_IMPORTED_MODULE_3__["useInput"])();
  const {
    isLoggingIn
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_IN_REQUEST"],
      data: {
        id,
        password
      }
    });
  }, [id, password]);

  const onChangePage = () => {
    const [mode, setMode] = useState('goJoinPage');
    alert('회원가입페이지로 이동합니다.');
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/join");
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("article", {
    className: "rLg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx("div", {
    className: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("h2", {
    className: "bld",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "\uB85C\uADF8\uC778"), __jsx("form", {
    className: "lgform",
    action: "create_process",
    method: "post",
    onSubmit: onSubmitForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    className: "lg_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "\uC9C0\uAE08 \uBC14\uB85C \uAC00\uC785\uD558\uC138\uC694!"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "user-id",
    className: "bld",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
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
      lineNumber: 46
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "user-password",
    value: password,
    onChange: onChangePassword,
    className: "bld",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
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
      lineNumber: 48
    },
    __self: undefined
  })), __jsx("div", {
    className: "btngroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("button", {
    htmlType: "submit",
    className: "btn",
    loading: isLoggingIn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "\uB85C\uADF8\uC778"), __jsx("a", {
    href: "/join",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("button", {
    className: "btn",
    onClick: onChangePage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "\uD68C\uC6D0\uAC00\uC785")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=index.js.7902516b5ec0561eb7e6.hot-update.js.map