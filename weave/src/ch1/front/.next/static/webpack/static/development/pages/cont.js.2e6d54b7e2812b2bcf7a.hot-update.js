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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
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
    imagePaths,
    isAddingPost,
    postAdded,
    mainPosts
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
  }, []);

  const handleChange = event => {
    setFile({
      file: URL.createObjectURL(event.target.files[0])
    });
  };

  const onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setText(e.target.value); //console.log();
  }, []);

  if (Mode === 'member') {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: undefined
    }, __jsx("ul", {
      className: "menubox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: undefined
    }, __jsx("li", {
      className: "menu_a",
      id: "on",
      onClick: handleChangePage2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    }, "\uC804\uCCB4\uAE00"), __jsx("li", {
      className: "menu_m",
      onClick: handleChangePage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    }, "\uBA64\uBC84"))), __jsx("div", {
      className: "wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: undefined
    }, __jsx("div", {
      className: "groupinfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: undefined
    }, __jsx("div", {
      className: "groupimg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    }), __jsx("div", {
      className: "grouptext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: undefined
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: undefined
    }, "\uB315\uB315\uC774\uC9D1\uC0AC \uADF8\uB8F9"), __jsx("p", {
      className: "numMem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }, "Member. 43"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: undefined
    }, "\uC138\uC824\uC608 \uB315\uB315\uC774\uB4E4 \uBAA8\uC5EC\uB77C~!"), __jsx("nav", {
      className: "groupSubmitBtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: undefined
    }, __jsx("button", {
      className: "gjoin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: undefined
    }, "\uAC00\uC785\uD558\uAE30"), __jsx("button", {
      className: "gout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: undefined
    }, "\uADF8\uB8F9\uD0C8\uD1F4")))), __jsx("div", {
      className: "memberbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: undefined
    }, "\uBA64\uBC84\uBAA9\uB85D")));
  }

  ;
  if (Mode === 'read') return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("ul", {
    className: "menubox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("li", {
    className: "menu_a",
    id: "on",
    onClick: handleChangePage2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, "\uC804\uCCB4\uAE00"), __jsx("li", {
    className: "menu_m",
    onClick: handleChangePage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, "\uBA64\uBC84"))), __jsx("div", {
    className: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("div", {
    className: "groupinfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx("div", {
    className: "groupimg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }), __jsx("div", {
    className: "grouptext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, "\uB315\uB315\uC774\uC9D1\uC0AC \uADF8\uB8F9"), __jsx("p", {
    className: "numMem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "Member. 43"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, "\uC138\uC824\uC608 \uB315\uB315\uC774\uB4E4 \uBAA8\uC5EC\uB77C~!"), __jsx("nav", {
    className: "groupSubmitBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("button", {
    className: "gjoin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "\uAC00\uC785\uD558\uAE30"), __jsx("button", {
    className: "gout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "\uADF8\uB8F9\uD0C8\uD1F4")))), __jsx("form", {
    className: "uploadTb",
    encType: "multipart/form-data",
    onSubmit: onSubmitForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("div", {
    className: "row1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
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
      lineNumber: 118
    },
    __self: undefined
  })), __jsx("div", {
    className: "row2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx("div", {
    className: "icon01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx("input", {
    id: "img_file",
    type: "file",
    name: "file",
    size: "200",
    accept: ".jpg, .jpeg, .png",
    className: "icon01",
    value: "",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  })), __jsx("div", {
    className: "icon02",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx("label", {
    Htmlfor: "file-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }), __jsx("input", {
    id: "file-input",
    type: "file",
    name: "mv_file",
    accept: ".mp4, .wmv, .avi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  })), __jsx("div", {
    className: "icon03",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx("label", {
    Htmlfor: "file-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }), __jsx("input", {
    id: "doc_file",
    type: "file",
    accept: ".txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  })), __jsx("div", {
    className: "icon04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx("label", {
    Htmlfor: "file-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }), __jsx("button", {
    id: "file-input",
    type: "submit",
    loading: isAddingPost,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  })))), __jsx("div", {
    className: "letsbegin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, "\uADF8\uB8F9\uC5D0 \uC7AC\uBBF8\uC788\uB294 \uC774\uC57C\uAE30\uB97C \uC368\uBCF4\uC138\uC694.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Cont);

/***/ })

})
//# sourceMappingURL=cont.js.2e6d54b7e2812b2bcf7a.hot-update.js.map