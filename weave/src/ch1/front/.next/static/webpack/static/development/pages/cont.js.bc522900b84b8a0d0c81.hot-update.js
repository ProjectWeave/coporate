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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_Contents_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Contents.css */ "./components/Contents.css");
/* harmony import */ var _components_Contents_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_Contents_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/reset.css */ "./components/reset.css");
/* harmony import */ var _components_reset_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_reset_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\\uC774\uADC0\uC601\\Documents\\coporate\\weave\\src\\ch1\\front\\components\\ContentForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// mode변경 test








const ContentForm = ({
  post
}) => {
  const {
    0: comments,
    1: setComments
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    imagePaths,
    postAdded,
    mainPosts,
    GroupPosts,
    commentAdded,
    isAddingComment
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post); // 댓글

  const onChangeComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setComments(e.target.value);
  }, []); //댓글창토글

  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setCommentFormOpened(prev => !prev);
  }, []); // 댓글올리기 사이클
  // const onSubmitComment = useCallback((e) => {
  //     e.preventDefault();
  //     dispatch({
  //         type: ADD_COMMENT_REQUEST,
  //         data: {
  //             text,
  //         },
  //     });
  // }, []);

  const onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();

    if (!me) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"],
      data: {}
    });
  }, [me && me.id]); // 댓글 성공시, 빈텍스트로 

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setComments('');
  }, [commentAdded === true]); //댓글삭제

  const onRemoveComments = () => {
    alert('댓글을 삭제하시겠습니까?');
  }; //////////////////////


  if (postAdded === false) return __jsx("div", {
    className: "letsbegin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("div", {
    className: "startT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "\uADF8\uB8F9\uC5D0 \uC7AC\uBBF8\uC788\uB294 \uC774\uC57C\uAE30\uB97C \uC368\uBCF4\uC138\uC694."));
  if (postAdded === true) return __jsx("div", {
    className: "letsbegin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, mainPosts.map(v => {
    return __jsx("div", {
      key: v,
      className: "postbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }, __jsx("div", {
      className: "contBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: undefined
    }, imagePaths.map(c => __jsx("div", {
      key: c,
      style: {
        display: "inline-block"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: undefined
    }, __jsx("img", {
      src: "http://localhost:3000/".concat(c),
      style: {
        width: '200px'
      },
      alt: c,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: undefined
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: undefined
    }, __jsx("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: undefined
    }, "\uC81C\uAC70"))))), __jsx("div", {
      className: "btnsbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: undefined
    }, __jsx("button", {
      type: "button",
      className: "commentBtn",
      value: commentFormOpened,
      onClick: onToggleComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: undefined
    }), __jsx("button", {
      type: "button",
      className: "likeBtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: undefined
    }), __jsx("button", {
      type: "button",
      className: "removeBtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: undefined
    }), commentFormOpened === true && __jsx("form", {
      className: "commentbox",
      onSubmit: onSubmitComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: undefined
    }, __jsx("textarea", {
      className: "comment",
      value: comments,
      onChange: onChangeComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: undefined
    }), __jsx("button", {
      type: "primary",
      htmlType: "submit",
      className: "combtn",
      loading: isAddingComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
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
        lineNumber: 108
      },
      __self: undefined
    }, __jsx("div", {
      className: "comline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: undefined
    }), __jsx("p", {
      style: {
        marginLeft: "10px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: undefined
    }, commentAdded ? '댓글' + post.Comments.length : '댓글' + ' 0'), __jsx("li", {
      key: t.createdAt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: undefined
    }, t.User.nickname, " : ", t.content, __jsx("button", {
      type: "button",
      className: "remove",
      onClick: onRemoveComments,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: undefined
    }, "REMOVE")), "); }) }")));
  }));
};

ContentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    User: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    img: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  })
};
/* harmony default export */ __webpack_exports__["default"] = (ContentForm);

/***/ })

})
//# sourceMappingURL=cont.js.bc522900b84b8a0d0c81.hot-update.js.map