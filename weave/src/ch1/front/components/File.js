//import React from 'react';
import React, { useCallback, useState, useEffect } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
//import axios from 'axios';
import './Templete.css';

import { useSelector, useDispatch } from 'react-redux';
import {  ADD_GROUP_REQUEST } from '../reducers/post';


const File = () => {
    const dispatch = useDispatch();
    const [text, setText ] = useState('');
    //const [file, setFile ] = useState(null);
    //const [selctedFile, setSelctedFile ] = useState(null);
    const { addingGroupPost, addedGroupPost } = useSelector(state => state.post);
    
    //text 초기값
    const [grouptit, setGrouptit] = useState('');
    const [grouptext, setGrouptext] = useState('');

    const InputChangeTit = (e) => {
      e.preventDefault();
      // console.log(e.target.value);
      setGrouptit(e.target.value);
    };
    const InputChangeText = (e) => {
      setGrouptext(e.target.value);
    };

    //단일 이미지 미리보기
    const [img, setImg] = useState(null);
    const onChangeImage = useCallback((e)=>{
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = function () {
            setImg(reader.result)
          }
    },[])

    // 취소버튼클릭시 파일창닫기
    const popBlockClose = (e) => {
      e.preventDefault();
      let pop = document.querySelector(".pop")
      let block = document.querySelector(".block")
      pop.style.display="none"
      block.style.display="none"
      setGrouptit('');
      setGrouptext('');
      setImg(null);
    };
    
    // 그룹만들기서브밋
    const onSubmitGroup = useCallback((e) => {
      e.preventDefault();
      // debugger;
      // console.log(e);
      dispatch({
          type: ADD_GROUP_REQUEST,
          data: {
            
          },
      });
      //1.5초뒤에 닫히기
      setTimeout(() => {
        popBlockClose(e);
      }, 1500);
      
  }, []);

  //그룹포스트올리기성공하면 텍스트 초기화
  useEffect(() => {
    setText('');
  },[addedGroupPost === true]);
 

    return (
      <form className="pop" encType="multipart/form-data" method="post" onSubmit={onSubmitGroup}>
        <div className="gimg">
          <img src={img} ></img>
        </div>
        
        <div className="filebox">
          <label htmlFor ="file" >사진을 선택해주세요.</label>
          <input type = "file" id="file" onChange={onChangeImage} 
                 accept=".jpg, .jpeg, .png" className="upload" /> 
        </div>
        
        <div className="group">
          <label htmlFor ="name" className="gtit"> 그룹이름</label>
          <input type="text" name="gname" className="gname" value={grouptit} onChange={InputChangeTit} />
          <label htmlFor ="name" className="gtit"> 그룹소개</label>
          <input type="text" name="gintro" className="gintro" value={grouptext} onChange={InputChangeText} />
          <p className="send">
            <input type="submit" value="올리기" loading={addingGroupPost} />
            <input type="button" value="취소" onClick={popBlockClose} />
          </p>
        </div>
      </form>
    );
};
export default File;

// import React, { Component } from "react";
// import './test.css';

// class File extends Component{

// inputChangedHandler = e => {
//   const { changeInput } = this.props;
//   const { name, value } = e.target;
//   console.log("clicked", name, value);
//   changeInput({ name, value });
// };

// htmlChangedHandler = ({ name, value }) => {
//   const { changeInput } = this.props;
//   changeInput({ name, value });
// };

// fileSelectedHandler = e => {
//   console.log(e.target.files[0]);

// // changeInput = ({ name, value }) => {
// //   const { onChangeInput } = this.props;
// //   onChangeInput({ name, value });
// // };

// // changeFile = (name, file) => {
// //   const { onChangeFile } = this.props;
// //   onChangeFile(name, file);
// // };

//   if (e.target.files != null || e.target.files[0] != null) {
//     const { changeFile } = this.props;
//     const { name } = e.target;

   
//     let reader = new FileReader();
//     reader.onload = e => {
//       this.refImg.setAttribute("src", e.target.result);
//       console.log(e.target.result);
//       changeFile(name, e.target.result);
//     };
//     reader.readAsDataURL(e.target.files[0]);
//   }
// };

// render() {
//   const {
//     title,
//     sub,
//     img,
//     submitPost,
//     isEdit
//   } = this.props;

//     return(
//       <div className="">
//       <form className="pop" onSubmit={submitPost}>
//             <div>
//               <input
//                 style={{ display: "none" }}
//                 type="file"
//                 name="img"
//                 onChange={this.fileSelectedHandler}
//                 ref={ref => (this.refInput = ref)}
//               />
//               <div className="filebox">
//                 {/* <h4>그룹 사진 업로드</h4> */}
//                 <button type="button" onClick={() => this.refInput.click()}>
//                   사진을 선택해주세요.
//                 </button>
//               </div>
//               <div className="">
//                 <img
//                   ref={ref => (this.refImg = ref)}
//                   alt={img ? "seleted_image" : null}
//                   src={img ? img : null}
//                   align="middle"
//                   width="100%"
//                   height="100%"
//                 />
//               </div>
//             </div>
          

//           <div className="group">
            
//             <input
//               type="text"
//               name="title"
//               value={title}
//               className="gname"
//               placeholder="그룹이름을 입력하세요"
//               onChange={this.inputChangedHandler}
//             />
            
//             <input
//               type="text"
//               name="sub"
//               value={sub}
//               className="gintro"
//               placeholder="그룹 소개를 입력하세요"
//               onChange={this.inputChangedHandler}
//             />
//             <div className="">
//               <button theme="point-big" type="submit">
//                 {isEdit ? "수정" : "저장"}하기
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default File;

