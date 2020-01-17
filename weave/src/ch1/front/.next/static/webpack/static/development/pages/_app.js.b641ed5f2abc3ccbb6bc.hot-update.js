webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/ContentForm.js":
/*!***********************************!*\
  !*** ./components/ContentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_Contents_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Contents.css */ "./components/Contents.css");
/* harmony import */ var _components_Contents_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_Contents_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_reset_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/reset.css */ "./components/reset.css");
/* harmony import */ var _components_reset_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_reset_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\\uC774\uADC0\uC601\\Documents\\coporate\\weave\\src\\ch1\\front\\components\\ContentForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// mode변경 test







const ContentForm = () => {
  const {
    0: comments,
    1: setComments
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    imagePaths,
    isAddingPost,
    postAdded,
    mainPosts,
    GroupPosts,
    commentAdded,
    isAddingComment,
    dummyComment
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post); // 댓글

  const onChangeComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setComments(e.target.value);
  }, []); //댓글창토글

  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setCommentFormOpened(prev => !prev);
  }, []); // 댓글올리기 사이클

  const onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"],
      data: {
        text
      }
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setComments('');
  }, [commentAdded === true]);
  if (postAdded === false) return __jsx("div", {
    className: "letsbegin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("div", {
    className: "startT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "\uADF8\uB8F9\uC5D0 \uC7AC\uBBF8\uC788\uB294 \uC774\uC57C\uAE30\uB97C \uC368\uBCF4\uC138\uC694."));
  if (postAdded === true) return __jsx("div", {
    className: "letsbegin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, mainPosts.map(v => {
    return __jsx("div", {
      key: v,
      className: "postbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }, __jsx("div", {
      className: "contBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    }, imagePaths.map(c => __jsx("div", {
      key: c,
      style: {
        display: "inline-block"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    }, __jsx("img", {
      src: "http://localhost:3065/".concat(c),
      style: {
        width: '200px'
      },
      alt: c,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: undefined
    }, __jsx("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: undefined
    }, "\uC81C\uAC70"))))), __jsx("div", {
      className: "btnsbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: undefined
    }, __jsx("button", {
      type: "button",
      className: "commentBtn",
      value: commentFormOpened,
      onClick: onToggleComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: undefined
    }), __jsx("button", {
      type: "button",
      className: "likeBtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: undefined
    }), __jsx("button", {
      type: "button",
      className: "removeBtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: undefined
    }), commentFormOpened === true && __jsx("form", {
      className: "commentbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: undefined
    }, __jsx("textarea", {
      className: "comment",
      value: comments,
      onChange: onChangeComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: undefined
    }), __jsx("button", {
      type: "submit",
      className: "combtn",
      onClick: onSubmitComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }, "COMMENT")), commentFormOpened === true && __jsx("div", {
      style: {
        display: "inline-block",
        width: "100%",
        height: "100px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: undefined
    }, __jsx("div", {
      className: "comline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: undefined
    }), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: undefined
    }, "\uB313\uAE00"), dummyComment.map(t => {
      return __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: undefined
      }, "[", id, " :  t[0]} ]", __jsx("button", {
        type: "button",
        className: "remove",
        value: "REMOVE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: undefined
      }));
    }))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentForm); // mainPosts:[{
//     id:1,
//     User:{
//         id: 1,
//         nickname: "위브",
//     },
//     content: "첫번째 게시글",
//     img:"http://www.redpiltong.co.kr/shopimages/redpiltong/012002000104.jpg?1547186041", 
//     Comments: [],
// }],

/***/ })

})
//# sourceMappingURL=_app.js.b641ed5f2abc3ccbb6bc.hot-update.js.map