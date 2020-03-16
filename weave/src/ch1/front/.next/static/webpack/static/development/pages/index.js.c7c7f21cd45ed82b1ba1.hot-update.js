webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/IndexPage.js":
/*!*********************************!*\
  !*** ./components/IndexPage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Plus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Plus */ "./components/Plus.js");
/* harmony import */ var _GroupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GroupForm */ "./components/GroupForm.js");
/* harmony import */ var _Contents_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Contents.css */ "./components/Contents.css");
/* harmony import */ var _Contents_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Contents_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Templete_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Templete.css */ "./components/Templete.css");
/* harmony import */ var _Templete_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Templete_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _GroupItem_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GroupItem.css */ "./components/GroupItem.css");
/* harmony import */ var _GroupItem_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_GroupItem_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _GroupBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GroupBox */ "./components/GroupBox.js");
var _jsxFileName = "C:\\Users\\\uC774\uADC0\uC601\\Documents\\coporate\\weave\\src\\ch1\\front\\components\\IndexPage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import { useSelector } from 'react-redux';
// import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';









const IndexPage = () => {
  // const { GroupPosts } = useSelector(state => state.gpost);
  const {
    addedGroupPost
  } = useSelector(state => state.user);
  const {
    gimg,
    grouptit,
    grouptext
  } = useSelector(state => state.user);
  return __jsx("div", {
    className: "groupitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(_Plus__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    className: "contbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    className: "dogimg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, " \uB315\uB315\uC774\uC9D1\uC0AC \uADF8\uB8F9"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "\uC138\uC824\uC608 \uB315\uB315\uC774\uB4E4 \uBAA8\uC5EC\uB77C~!")))), __jsx("div", {
    className: "contbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("div", {
    className: "travelimg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "\uC138\uACC4\uB300\uD0D0\uBC29\uADF8\uB8F9"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "\uC5F4\uC2EC\uD788 \uC77C\uD55C \uB2F9\uC2E0, \uB5A0\uB098\uB77C. \uC5F4\uC2EC\uD788 \uB178\uB294 \uB2F9\uC2E0, \uB2F9\uC2E0\uB3C4 \uB5A0\uB098\uB77C.")), __jsx("div", {
    className: "contbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("div", {
    className: "foodimg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, " \uBA39\uBD80\uB9BC \uADF8\uB8F9"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "\uBBF8\uC2DD\uAC00 \uC5EC\uB7EC\uBD84 \uD658\uC601\uD569\uB2C8\uB2E4~!")), addedGroupPost && GroupPosts.map(c => {
    return __jsx(_GroupBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: c,
      gpost: c,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: undefined
    }) // <div className="contbox" key={c} gpost={c}> 
    //     <div className="group_img" > 
    //         <img src={gpost.img} style={{width:"100%"}} /> 
    //     </div>
    //     <h1>{c.content}</h1>
    //     <p>
    //         {c.gtext}
    //     </p>
    // </div>
    ;
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage); // {GroupPosts.map((v)=>{
//     return(
//         <div className="contbox">
//             <div className="foodimg"></div>
//             <h1></h1> {/* {grouptit} */}
//             <p>
//                 {/* {grouptext} */}
//             </p>
//         </div>
//     );
// })
// }

/***/ })

})
//# sourceMappingURL=index.js.c7c7f21cd45ed82b1ba1.hot-update.js.map