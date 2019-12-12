webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/File.js":
/*!****************************!*\
  !*** ./components/File.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostForm */ "./components/PostForm.js");
/* harmony import */ var _routes_Templete_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes/Templete.css */ "./routes/Templete.css");
/* harmony import */ var _routes_Templete_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes_Templete_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _jsxFileName = "C:\\Users\\\uC774\uADC0\uC601\\Documents\\coporate\\weave\\src\\ch1\\front\\components\\File.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//import React from 'react';







const File = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    imagePaths,
    isAddingPost,
    postAdded
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.post); // useEffect(() => {
  //     setText('');
  // },[addedGroupPost === true]);

  const onSubmitGroup = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["ADD_GROUP_REQUEST"],
      data: {
        text
      }
    });
  }, []);
  const [file, setFile] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [selctedFile, setSelectedFile] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null); //handleChange;

  const handleChange = event => {
    setFile({
      file: URL.createObjectURL(event.target.files[0])
    });
  };

  const fileUpSelcetedHandler = event => {
    //console.log(event.target.file);
    setFile({
      selctedFile: event.target.file[0]
    });
  };

  const fileUploadHandler = () => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('');
  };

  const popUp = () => {
    var pop = document.querySelector(".pop");
    var block = document.querySelector(".block");
    pop.style.display = "none";
    block.style.display = "none";
  };

  return __jsx("form", {
    className: "pop",
    onSubmit: onSubmitGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("div", {
    className: "gimg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx("div", {
    className: "filebox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "\uC0AC\uC9C4\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."), __jsx("input", {
    type: "file",
    id: "file",
    name: "file",
    size: "2000",
    accept: ".jpg, .jpeg, .png",
    className: "upload",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  })), __jsx("div", {
    className: "group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "name",
    className: "gtit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, " \uADF8\uB8F9\uC774\uB984"), __jsx("input", {
    type: "text",
    name: "gname",
    className: "gname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "name",
    className: "gtit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, " \uADF8\uB8F9\uC18C\uAC1C"), __jsx("input", {
    type: "text",
    name: "gintro",
    className: "gintro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), __jsx("p", {
    className: "send",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("input", {
    type: "submit",
    value: "\uC62C\uB9AC\uAE30",
    onClick: fileUploadHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }), __jsx("input", {
    type: "reset",
    value: "\uCDE8\uC18C",
    onClick: fpopUp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  })), undefined.props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (File); // class File extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       file: null
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange(event) {
//     this.setState({
//       file: URL.createObjectURL(event.target.files[0])
//     })
//   }
//   state={
//     selctedFile:null
//   }
//   fileUpSelcetedHandler=event=>{
//     //console.log(event.target.file);
//     this.setState({
//       selctedFile:event.target.file[0]
//     })
//   }
//   fileUploadHandler=()=>{
//     axios.post('');
//   }
//   render(){
//     return(
//       <form className="pop" onSubmit={onSubmitGroup}>
//           <div className="gimg">
//             <img src={this.state.file}/>
//           </div>
//           {/* <input type="image" alt="submit"></input> */}
//           <div className="filebox">
//             <label htmlFor ="file">사진을 선택해주세요.</label>
//             <input type="file" id="file" name="file" size="2000" 
//                    accept=".jpg, .jpeg, .png" className="upload"
//                    onChange={this.handleChange} />
//           </div>
//           <div className="group">
//             <label htmlFor ="name" className="gtit"> 그룹이름</label>
//             <input type="text" name="gname" className="gname" />
//             <label htmlFor ="name" className="gtit"> 그룹소개</label>
//             <input type="text" name="gintro" className="gintro" />
//             <p className="send">
//               <input type="submit" value="올리기"
//                      onClick={this.fileUploadHandler}
//               />
//               <input type="reset" value="취소" onClick={function(){
//                 var pop = document.querySelector(".pop")
//                 var block = document.querySelector(".block")
//                 pop.style.display="none"
//                 block.style.display="none"
//               }} />
//             </p>
//             {this.props.children}
//           </div>
//         </form>
//     );
//   }
// }
//   export default File;

/***/ })

})
//# sourceMappingURL=_app.js.704f7afc71a0341d0bff.hot-update.js.map