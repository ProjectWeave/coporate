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
/* harmony import */ var _routes_Templete_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes/Templete.css */ "./routes/Templete.css");
/* harmony import */ var _routes_Templete_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes_Templete_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\\uC774\uADC0\uC601\\Documents\\coporate\\weave\\src\\ch1\\front\\components\\File.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 //import './First.css';



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
      size: "500",
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

/* harmony default export */ __webpack_exports__["default"] = (File);

/***/ })

})
//# sourceMappingURL=_app.js.d80cf14f8e499ecec633.hot-update.js.map