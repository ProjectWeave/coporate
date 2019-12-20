webpackHotUpdate("static\\development\\pages\\contents.js",{

/***/ "./pages/contents.js":
/*!***************************!*\
  !*** ./pages/contents.js ***!
  \***************************/
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
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
var _jsxFileName = "C:\\Users\\\uC774\uADC0\uC601\\Documents\\coporate\\weave\\src\\ch1\\front\\pages\\contents.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Contents = () => {
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
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), __jsx("div", {
    className: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("div", {
    className: "groupinfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("div", {
    className: "groupimg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), __jsx("div", {
    className: "grouptext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "\uB315\uB315\uC774\uC9D1\uC0AC \uADF8\uB8F9"), __jsx("p", {
    className: "numMem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Member. 43"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "\uC138\uC824\uC608 \uB315\uB315\uC774\uB4E4 \uBAA8\uC5EC\uB77C~!"), __jsx("nav", {
    className: "groupSubmitBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("button", {
    className: "gjoin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "\uAC00\uC785\uD558\uAE30"), __jsx("button", {
    className: "gout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "\uADF8\uB8F9\uD0C8\uD1F4")))), __jsx("form", {
    className: "uploadTb",
    encType: "multipart/form-data",
    onSubmit: onSubmitForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("div", {
    className: "row1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
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
      lineNumber: 59
    },
    __self: undefined
  })), __jsx("div", {
    className: "row2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("label", {
    Htmlfor: "file-input",
    className: "icon01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "\uC0AC\uC9C4\uC62C\uB9AC\uAE30"), __jsx("input", {
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
      lineNumber: 65
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("label", {
    Htmlfor: "file-input",
    className: "icon02",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), __jsx("input", {
    id: "file-input",
    type: "file",
    name: "mv_file",
    accept: ".mp4, .wmv, .avi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("label", {
    Htmlfor: "file-input",
    className: "icon03",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), __jsx("input", {
    id: "doc_file",
    type: "file",
    accept: ".txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("label", {
    Htmlfor: "file-input",
    className: "icon04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), __jsx("button", {
    id: "file-input",
    className: "icon04",
    type: "submit",
    loading: isAddingPost,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  })))), __jsx("div", {
    className: "letsbegin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, "\uADF8\uB8F9\uC5D0 \uC7AC\uBBF8\uC788\uB294 \uC774\uC57C\uAE30\uB97C \uC368\uBCF4\uC138\uC694.", imagePaths.map(v => __jsx("div", {
    key: v,
    style: {
      display: "inline-block"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx("img", {
    src: "http://localhost:3065/".concat(v),
    style: {
      width: '200px'
    },
    alt: v,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "\uC81C\uAC70")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contents); // {/* 그룹에 게시물이 아무것도 없을때 */}
// <div className="letsbegin">
// 그룹에 재미있는 이야기를 써 보세요.
// </div>
// <button className="more">더보기</button>
// <table className="uploadTb">
//     <tbody>
//         <tr className='row1'>
//             <td colSpan='4'>
//                 {/* <input type="textarea" name="text" placeholder="소식을 남겨주세요."></input> */}
//                 <input type="textarea" maxLength={1500} placeholder="소식을 남겨주세요" value={text} onChange={onChangeText} />
//             </td>
//         </tr>
//         <tr className='row2'>
//             <td>
//                 <label Htmlfor="file-input" className="icon01"></label>
//                 <input id="file-input" type="file" name="file" size="200" accept=".jpg, .jpeg, .png" className="icon01" />
//                 {/* <input type="file" id="img_file" name="file" size="200" accept=".jpg, .jpeg, .png" className="icon01"></input> */}
//             </td>
//             <td>
//                 <label Htmlfor="file-input" className="icon02"></label>
//                 <input id="file-input" type="file" name="file" accept=".mp4, .wmv, .avi" value="" />
//                 {/* <input type="file" id="mv_file" name="file" accept=".mp4, .wmv, .avi"></input> */}
//             </td>
//             <td>
//                 <label Htmlfor="file-input" className="icon03"></label>
//                 <input id="file-input" type="file" value="" />
//                 {/* <input type="file" id="doc_file" name="file" accept=".txt"></input> */}
//             </td>
//             <td>
//                 <label Htmlfor="file-input" className="icon04"></label>
//                 <input id="file-input" type="submit" loading={isAddingPost} onSubmit={onSubmitForm} />
//             </td>
//         </tr>
//     </tbody>
// </table>
// import React, { useCallback, useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { ADD_POST_REQUEST } from '../reducers/post';
// const PostForm = () => {
//     const dispatch = useDispatch();
//     const [text, setText ] = useState('');
//     const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);
//     useEffect(() => {
//         setText('');
//     },[postAdded === true]);
//     const onSubmitForm = useCallback((e) => {
//         e.preventDefault();
//         dispatch({
//             type: ADD_POST_REQUEST,
//             data: {
//                 text,
//             },
//         });
//     }, []);
//     const onChangeText = useCallback((e) => {
//         setText(e.target.value);
//     }, []);
//     return (
//         <form style={{ margin: '10px 0 20px'}} encType="multipart/form-data" onSubmit={onSubmitForm}>
//             <input htmlType="textarea" maxLength={140} placeholder="소식을 남겨주세요" value={text} onChange={onChangeText}></input>
//             <div>
//                 <input type="file" multiple hidden></input>
//                 <button>이미지 업로드</button>
//                 <button style={{float:"right"}} htmlType="submit" loading={isAddingPost}>짹짹</button>
//             </div>
//             <div>
//                 {/* 반복문 */}
//                 {imagePaths.map((v) => (
//                         <div key={v} style={{display:"inline-block"}}>
//                             <img src={`http://localhost:3065/${v}`} style={{ width:'200px'}} alt={v}></img> 
//                             <div>
//                                 <button>제거</button>
//                             </div>   
//                         </div>
//                 ))}
//             </div>
//         </form>
//     );
// };
// export default PostForm;

/***/ })

})
//# sourceMappingURL=contents.js.1ddd438122e90d903620.hot-update.js.map