webpackHotUpdate("static\\development\\pages\\cont.js",{

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
    isAddingComment
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
  if (_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"]) return __jsx("div", {
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
    }), __jsx("div", {
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
      resize: "none",
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
    }, "COMMENT")), commentFormOpened === true && mainPosts.map(c => __jsx("div", {
      key: c,
      style: {
        display: "inline-block",
        width: "100%",
        height: "100px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: undefined
    }, __jsx("div", {
      className: "comline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: undefined
    }, "\uB313\uAE00", __jsx("button", {
      type: "button",
      className: "remove",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: undefined
    }, "REMOVE"))))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentForm);

/***/ })

})
//# sourceMappingURL=cont.js.cc7f241cf514ce078471.hot-update.js.map