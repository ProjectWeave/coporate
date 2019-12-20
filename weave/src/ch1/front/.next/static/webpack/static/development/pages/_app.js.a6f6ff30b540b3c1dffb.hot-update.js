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
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home */ "./components/Home.js");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.css */ "./components/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\\uC774\uADC0\uC601\\Documents\\coporate\\weave\\src\\ch1\\front\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 //import Toggle from './Toggle';

const Header = () => {
  const {
    isLoggedOut
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const {
    0: clickBtn,
    1: setClickBtn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    on: 'false'
  });

  const handleClick = e => {
    e.preventDefault();
    setClickBtn({
      isToggleOn: !e.target.on
    });
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
        lineNumber: 33
      },
      __self: undefined
    }, __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/mygroup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, "\uB0B4 \uADF8\uB8F9"))), __jsx("li", {
      onClick: logout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }, "\uB85C\uADF8\uC544\uC6C3")));
  };

  return __jsx("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("div", {
    className: "logo_w",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("span", {
    className: "bld",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "\uB85C\uACE0")))), __jsx("div", {
    className: "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("button", {
    htmltype: "button",
    className: "pfBtn",
    value: clickBtn,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, clickBtn.isToggleOn && __jsx(Toggle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }))), __jsx("div", {
    className: "srcbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    placeholder: "\uAC80\uC0C9\uD574\uBCF4\uC138\uC694.",
    className: "txtbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx("input", {
    type: "submit",
    value: "Search",
    className: "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header); // export default class Toggle extends Component{
//   state = {
//     on : false,
//   }
// }
// toggle=()=>{
//   this.ListeningStateChangedEvent({
//     on: !this.state.on
//   })
// }
// render(){
//   return(
//     <div>
//       {this. state.on&& <Toggle /> }
//       <button onClick={this.toggle}>토글버튼</button>
//     </div>
//   )
// }

/***/ })

})
//# sourceMappingURL=_app.js.a6f6ff30b540b3c1dffb.hot-update.js.map