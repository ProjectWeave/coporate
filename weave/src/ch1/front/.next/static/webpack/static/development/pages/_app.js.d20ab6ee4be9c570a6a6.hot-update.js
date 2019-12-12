webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/File.js":
/*!****************************!*\
  !*** ./components/File.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostForm */ "./components/PostForm.js");
/* harmony import */ var _routes_Templete_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes/Templete.css */ "./routes/Templete.css");
/* harmony import */ var _routes_Templete_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes_Templete_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\\uC774\uADC0\uC601\\Documents\\coporate\\weave\\src\\ch1\\front\\components\\File.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class File extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      selctedFile: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fileUpSelcetedHandler", event => {
      //console.log(event.target.file);
      this.setState({
        selctedFile: event.target.file[0]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fileUploadHandler", () => {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('');
    });

    this.state = {
      file: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  render() {
    return __jsx("form", {
      className: "pop",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("div", {
      className: "gimg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("img", {
      src: this.state.file,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), __jsx("div", {
      className: "filebox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "file",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "\uC0AC\uC9C4\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."), __jsx("input", {
      type: "file",
      id: "file",
      name: "file",
      size: "2000",
      accept: ".jpg, .jpeg, .png",
      className: "upload",
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), __jsx("div", {
      className: "group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "name",
      className: "gtit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, " \uADF8\uB8F9\uC774\uB984"), __jsx("input", {
      type: "text",
      name: "gname",
      className: "gname",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "name",
      className: "gtit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, " \uADF8\uB8F9\uC18C\uAC1C"), __jsx("input", {
      type: "text",
      name: "gintro",
      className: "gintro",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), __jsx("p", {
      className: "send",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("input", {
      type: "submit",
      value: "\uC62C\uB9AC\uAE30",
      onClick: this.fileUploadHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), __jsx("input", {
      type: "reset",
      value: "\uCDE8\uC18C",
      onClick: function () {
        var pop = document.querySelector(".pop");
        var block = document.querySelector(".block");
        pop.style.display = "none";
        block.style.display = "none";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    })), this.props.children));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (File); //   import React, { useCallback, useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { ADD_POST_REQUEST } from '../reducers/post';
//임시로만든 데이터객체
// const dummy={
//     isLoggedIn: true,
//     imagePaths:[],
//     mainPosts:[{
//         User:{
//             id: 1,
//             nickname: "두리안",
//         },
//             content: "첫번째 게시글",
//             img:"https://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/dailylife/187ea4bc2ad54b1db5030743265c5397.jpg", 
//     }],
// };
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
//# sourceMappingURL=_app.js.d20ab6ee4be9c570a6a6.hot-update.js.map