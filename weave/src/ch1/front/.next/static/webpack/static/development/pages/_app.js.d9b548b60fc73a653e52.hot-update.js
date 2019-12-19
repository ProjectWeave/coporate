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
/* harmony import */ var _Templete_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Templete.css */ "./components/Templete.css");
/* harmony import */ var _Templete_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Templete_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _jsxFileName = "C:\\Users\\\uC774\uADC0\uC601\\Documents\\coporate\\weave\\src\\ch1\\front\\components\\File.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//import React from 'react';
 //import { useSelector, useDispatch } from 'react-redux';
//import axios from 'axios';





const File = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''); //const [file, setFile ] = useState(null);
  //const [selctedFile, setSelctedFile ] = useState(null);

  const {
    addingGroupPost,
    addedGroupPost
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post); //text 초기값

  const {
    0: grouptit,
    1: setGrouptit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: grouptext,
    1: setGrouptext
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const InputChangeTit = e => {
    e.preventDefault();
    console.log(value);
    setGrouptit(target.value);
  };

  const InputChangeText = e => {
    setGrouptext(e.target.value);
  }; //단일 이미지 미리보기


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
  }, []); // 취소버튼클릭시 파일창닫기

  const popBlockClose = e => {
    e.preventDefault();
    let pop = document.querySelector(".pop");
    let block = document.querySelector(".block");
    pop.style.display = "none";
    block.style.display = "none";
    setGrouptit('');
    setGrouptext('');
    setImg(null);
  }; // 그룹만들기서브밋


  const onSubmitGroup = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_GROUP_REQUEST"],
      data: {
        text,
        img
      }
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setText('');
  }, [addedGroupPost === true]);
  return __jsx("form", {
    className: "pop",
    onSubmit: onSubmitGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("div", {
    className: "gimg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("img", {
    src: img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  })), __jsx("div", {
    className: "filebox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "\uC0AC\uC9C4\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."), __jsx("input", {
    type: "file",
    id: "file",
    onChange: onChangeImage,
    accept: ".jpg, .jpeg, .png",
    className: "upload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  })), __jsx("div", {
    className: "group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "name",
    className: "gtit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, " \uADF8\uB8F9\uC774\uB984"), __jsx("input", {
    type: "text",
    name: "gname",
    className: "gname",
    value: grouptit,
    onChange: InputChangeTit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "name",
    className: "gtit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, " \uADF8\uB8F9\uC18C\uAC1C"), __jsx("input", {
    type: "text",
    name: "gintro",
    className: "gintro",
    value: grouptext,
    onChange: InputChangeText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), __jsx("p", {
    className: "send",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx("input", {
    type: "submit",
    value: "\uC62C\uB9AC\uAE30",
    loading: addingGroupPost,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), __jsx("input", {
    type: "button",
    value: "\uCDE8\uC18C",
    onClick: popBlockClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (File); // const handleChange = (event) => {
//   //console.log(event.target);
//   setFile({
//     file: URL.createObjectURL(event.target.files[0])
//   });
// };
// const fileUpSelcetedHandler = (event) => {
//   //console.log(event.target.file);
//   setSelctedFile({
//     selctedFile:event.target.file[0]
//   })
// };
// const fileUploadHandler = () => {
//     axios.post('');
// };
// class File extends React.Component{
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
//# sourceMappingURL=_app.js.d9b548b60fc73a653e52.hot-update.js.map