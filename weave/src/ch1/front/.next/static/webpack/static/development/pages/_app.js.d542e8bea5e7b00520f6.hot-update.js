webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu */ "./components/Menu.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Home */ "./components/Home.js");
/* harmony import */ var _IndexPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IndexPage */ "./components/IndexPage.js");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header.css */ "./components/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\\uC774\uADC0\uC601\\Documents\\coporate\\weave\\src\\ch1\\front\\components\\AppLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import React from 'react';
// import './Header.css';
// import Link from 'next/link';
// import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import Login from '../components/Login';
// import Dog from '../components/Dog';
// //임의로만든데이터객체
// const dummy={
//     nickname:'두리안', 
//     Post:[],
//     Followings:[],
//     Followers:[],
//     isLoggedIn:false,
// };
// const AppLayout = ({children}) => {
//   const { isLoggedIn } = useSelector(state => state.user);
//     return (
//         <div className="header">
//           <Link href="/home" className="logo_w" activeClassName="active"><a></a></Link>
//           {/* 프로필이미지 */}
//           <div className="profile">
//             {/* 더보기란 */}
//             <button className="pfBtn"></button>
//           </div>
//           <div className="srcbox">
//               <input type="text" placeholder="검색해보세요." className="txtbox"></input>  
//               <input type="submit" value="Search" className="search"></input>
//           </div>
//           {isLoggedIn ? <Dog /> : <Login />}
//           {children}
//         </div>
//     );
// };
// export default AppLayout;










const AppLayout = ({
  children
}) => {
  const {
    isLoggedIn
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), isLoggedIn ? __jsx(_IndexPage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }) : __jsx(_Home__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), "\uB808\uC774\uC544\uC6C3", children);
};

AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./components/Menu.js");
/* harmony import */ var _Plus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Plus */ "./components/Plus.js");
var _jsxFileName = "C:\\Users\\\uC774\uADC0\uC601\\Documents\\coporate\\weave\\src\\ch1\\front\\components\\IndexPage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const IndexPage = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "\uB85C\uADF8\uC778\uD6C4", __jsx(_Plus__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./components/Plus.js":
/*!****************************!*\
  !*** ./components/Plus.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\\uC774\uADC0\uC601\\Documents\\coporate\\weave\\src\\ch1\\front\\components\\Plus.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Plus = () => {
  return __jsx("div", {
    className: "btnbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "\uADF8\uB8F9\uB9CC\uB4E4\uAE30"), __jsx("button", {
    id: "myBtn",
    onClick: function () {
      var pop = document.querySelector('.pop');
      var block = document.querySelector(".block");
      pop.style.display = "block";
      block.style.display = "block";
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Plus); // import React,{ Component } from 'react';
// class Plus extends Component {
//     render() {
//         return (
//             <div className="btnbox">
//                 <p>그룹만들기</p>
//                 <button id="myBtn" onClick={function(){
//                     var pop = document.querySelector('.pop');
//                     var block = document.querySelector(".block");
//                     pop.style.display="block"
//                     block.style.display="block"
//                 }}></button>
//             </div>
//         );
//     }
// }
// export default Plus;

/***/ })

})
//# sourceMappingURL=_app.js.d542e8bea5e7b00520f6.hot-update.js.map