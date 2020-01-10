webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.css */ "./components/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\\uC774\uADC0\uC601\\Documents\\coporate\\weave\\src\\ch1\\front\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Header = () => {
  const {
    isLoggedOut
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const {
    0: clickBtn,
    1: setClickBtn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    isToggleOn: false
  });

  const handleClick = e => {
    e.preventDefault();
    setClickBtn(!clickBtn);
  };

  const handleProfile = () => {
    alert("프로필페이지로 이동합니다.");
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(me => {
      if (me) {
        alert('프로필페이지로 이동합니다.');
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/profile");
      }
    }, [me && me.id]);
  };

  const logout = () => {
    alert('로그아웃 하시겠습니까?'); //     useEffect((me) => {
    //       if(me){
    //         alert('로그인했으니 메인페이지로 이동합니다.');
    //         Router.push("/indexpage");
    //     }
    // }, [me && me.id]);(isLoggedOut);
  }; //프로필창클릭시 내려오는 박스


  const Toggle = e => {
    return __jsx("div", {
      className: "toggleBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/mygroup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }, "\uB0B4 \uADF8\uB8F9"))), __jsx("li", {
      onClick: logout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: undefined
    }, "\uB85C\uADF8\uC544\uC6C3")));
  };

  return __jsx("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("div", {
    className: "logo_w",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("span", {
    className: "bld",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "\uB85C\uACE0")))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("div", {
    className: "profile",
    onClick: handleProfile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx("button", {
    htmltype: "button",
    className: "pfBtn",
    value: clickBtn,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, !clickBtn && __jsx(Toggle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }))), __jsx("div", {
    className: "srcbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    placeholder: "\uAC80\uC0C9\uD574\uBCF4\uC138\uC694.",
    className: "txtbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), __jsx("input", {
    type: "submit",
    value: "Search",
    className: "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.fb5913857d6a1285a88a.hot-update.js.map