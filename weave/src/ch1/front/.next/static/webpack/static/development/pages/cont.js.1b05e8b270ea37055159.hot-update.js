webpackHotUpdate("static\\development\\pages\\cont.js",{

/***/ "./pages/cont.js":
/*!***********************!*\
  !*** ./pages/cont.js ***!
  \***********************/
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
/* harmony import */ var _components_Menu_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Menu.css */ "./components/Menu.css");
/* harmony import */ var _components_Menu_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_Menu_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/reset.css */ "./components/reset.css");
/* harmony import */ var _components_reset_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_reset_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\\uC774\uADC0\uC601\\Documents\\coporate\\weave\\src\\ch1\\front\\pages\\cont.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// mode변경 test








const Cont = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: comments,
    1: setComments
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    imagePaths,
    isAddingPost,
    postAdded,
    mainPosts,
    GroupPosts
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post); //메뉴클릭시 컨텐츠 변경

  const {
    0: Mode,
    1: setMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('read');

  const handleChangePage = e => {
    e.preventDefault();
    setMode('member');
    let classa = document.querySelector(".menu_a");
    let classm = document.querySelector(".menu_m");
    classa.setAttribute("id", "");
    classm.setAttribute("id", "on");
  };

  const handleChangePage2 = e => {
    e.preventDefault();
    setMode('read');
    let classa = document.querySelector(".menu_a");
    let classm = document.querySelector(".menu_m");
    classa.setAttribute("id", "on");
    classm.setAttribute("id", "");
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setText('');
  }, [postAdded === true]);
  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"],
      data: {
        text
      }
    });
  }, []); //댓글올리기 사이클

  const onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"],
      data: {
        text
      }
    });
  }, []); //단일이미지 미리보기

  const {
    0: img,
    1: setImg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const onChangeImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onloadend = function () {
      setImg(reader.result);
    };
  }, []);
  const onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setText(e.target.value); //console.log('렌더링');
  }, []); // 댓글

  const onChangeComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setComments(e.target.value);
  }, []);
  const onGroupSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"],
      data: {
        text
      }
    });
  }, []); //댓글창나오게

  const onInputComment = e => {
    e.preventDefault();
    document.querySelector(".commentbox").style.display = "block";
  };

  if (Mode === 'member') {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: undefined
    }, __jsx("ul", {
      className: "menubox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: undefined
    }, __jsx("li", {
      className: "menu_a",
      id: "on",
      onClick: handleChangePage2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: undefined
    }, "\uC804\uCCB4\uAE00"), __jsx("li", {
      className: "menu_m",
      onClick: handleChangePage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    }, "\uBA64\uBC84"))), __jsx("div", {
      className: "wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: undefined
    }, __jsx("div", {
      className: "groupinfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: undefined
    }, __jsx("div", {
      className: "groupimg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: undefined
    }), __jsx("div", {
      className: "grouptext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: undefined
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: undefined
    }, "\uB315\uB315\uC774\uC9D1\uC0AC \uADF8\uB8F9"), __jsx("p", {
      className: "numMem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: undefined
    }, "Member. 43"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: undefined
    }, "\uC138\uC824\uC608 \uB315\uB315\uC774\uB4E4 \uBAA8\uC5EC\uB77C~!"), __jsx("nav", {
      className: "groupSubmitBtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: undefined
    }, __jsx("button", {
      className: "gjoin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: undefined
    }, "\uAC00\uC785\uD558\uAE30"), __jsx("button", {
      className: "gout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: undefined
    }, "\uADF8\uB8F9\uD0C8\uD1F4")))), __jsx("div", {
      className: "memberbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: undefined
    }, "\uBA64\uBC84\uBAA9\uB85D")));
  }

  ;
  if (Mode === 'read') return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, __jsx("ul", {
    className: "menubox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx("li", {
    className: "menu_a",
    id: "on",
    onClick: handleChangePage2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, "\uC804\uCCB4\uAE00"), __jsx("li", {
    className: "menu_m",
    onClick: handleChangePage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, "\uBA64\uBC84"))), __jsx("div", {
    className: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, __jsx("div", {
    className: "groupinfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, __jsx("div", {
    className: "groupimg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }), __jsx("div", {
    className: "grouptext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, "\uB315\uB315\uC774\uC9D1\uC0AC \uADF8\uB8F9"), __jsx("p", {
    className: "numMem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, "Member. 43"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, "\uC138\uC824\uC608 \uB315\uB315\uC774\uB4E4 \uBAA8\uC5EC\uB77C~!"), __jsx("nav", {
    className: "groupSubmitBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx("button", {
    className: "gjoin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "\uAC00\uC785\uD558\uAE30"), __jsx("button", {
    className: "gout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, "\uADF8\uB8F9\uD0C8\uD1F4")))), __jsx("form", {
    className: "uploadTb",
    encType: "multipart/form-data",
    onSubmit: onSubmitForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, __jsx("div", {
    className: "row1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, __jsx("textarea", {
    maxLength: 1500,
    placeholder: "\uC18C\uC2DD\uC744 \uB0A8\uACA8\uC8FC\uC138\uC694",
    className: "tarea",
    value: text,
    onChange: onChangeText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  })), __jsx("div", {
    className: "row2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }, __jsx("div", {
    class: "fileBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, __jsx("label", {
    for: "uploadBtn",
    className: "btn_file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, " "), __jsx("input", {
    type: "file",
    id: "uploadBtn",
    className: "uploadBtn",
    onChange: onChangeImage,
    accept: ".jpg, .jpeg, .png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  })), __jsx("div", {
    class: "fileBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, __jsx("label", {
    for: "uploadBtn",
    className: "btn_file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, " "), __jsx("input", {
    type: "file",
    id: "uploadBtn",
    className: "uploadBtn",
    onChange: onChangeImage,
    accept: ".mp4, .wmv, .avi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  })), __jsx("div", {
    class: "fileBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, __jsx("label", {
    for: "uploadBtn",
    className: "btn_file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, " "), __jsx("input", {
    type: "file",
    id: "uploadBtn",
    className: "uploadBtn",
    onChange: onChangeImage,
    accept: ".txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  })), __jsx("div", {
    className: "icon04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, __jsx("label", {
    for: "file-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }), __jsx("input", {
    type: "submit",
    value: "",
    loading: isAddingPost,
    onSubmit: onGroupSubmitForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }))), __jsx("div", {
    className: "letsbegin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, "\uADF8\uB8F9\uC5D0 \uC7AC\uBBF8\uC788\uB294 \uC774\uC57C\uAE30\uB97C \uC368\uBCF4\uC138\uC694."), postAdded === true, imagePaths.map(c => __jsx("div", {
    key: c,
    style: {
      display: "inline-block"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
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
      lineNumber: 184
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, "\uC81C\uAC70")))), GroupPosts.map(v => {
    return __jsx("div", {
      key: v,
      className: "postbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: undefined
    }, __jsx("div", {
      className: "contBox",
      post: v,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: undefined
    }), __jsx("div", {
      className: "btnsbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: undefined
    }, __jsx("button", {
      type: "button",
      className: "commentBtn",
      onClick: onInputComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: undefined
    }), __jsx("button", {
      type: "button",
      className: "likeBtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: undefined
    }), __jsx("button", {
      type: "button",
      className: "removeBtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: undefined
    }), __jsx("div", {
      className: "commentbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: undefined
    }, __jsx("input", {
      type: "textarea",
      resize: "none",
      className: "comment",
      value: comments,
      onChange: onChangeComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: undefined
    }), __jsx("button", {
      type: "submit",
      className: "combtn",
      onClick: onSubmitComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: undefined
    }, " \uC62C\uB9AC\uAE30"), mainPosts.map(c => __jsx("div", {
      key: c,
      style: {
        display: "inline-block"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: undefined
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: undefined
    }, __jsx("button", {
      type: "button",
      className: "removebtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: undefined
    }, "\uC9C0\uC6B0\uAE30")))))));
  }))), __jsx("button", {
    className: "more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }, "\uB354\uBCF4\uAE30")));
};

/* harmony default export */ __webpack_exports__["default"] = (Cont); // {/* <div className='row1'>
//                         <textarea maxLength={1500} placeholder="소식을 남겨주세요"
//                                   className="tarea" value={text} onChange={onChangeText} />
//                     </div>
//                     <div className='row2'>
//                         <div className="icon01">
//                             <label for="file" className="btn_file2" >이거를 클릭하면</label>
//                             <input type="file" name="file" accept=".jpg, .jpeg, .png" 
//                                     onChange={onChangeImage} />
//                         </div>
//                         <div className="icon02">
//                             <label for="file-input" className="btn_file2"></label>
//                             <input type="file" name="mv_file" 
//                                    accept=".mp4, .wmv, .avi" onClick={onChangeImage} />
//                         </div>
//                         <div className="icon03">
//                             <label for="file-input" className="btn_file2"></label>
//                             <input type="file" accept=".txt" onChange={onChangeImage} />
//                         </div>
//                         <div className="icon04">
//                             <label for="file-input"></label>
//                             <input type="submit" value="" loading={isAddingPost} />
//                         </div>
//                     </div> */}

/***/ })

})
//# sourceMappingURL=cont.js.1b05e8b270ea37055159.hot-update.js.map