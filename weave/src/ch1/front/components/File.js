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
      console.log(e.target.value);
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
      dispatch({
          type: ADD_GROUP_REQUEST,
          data: {
              text,
              img,
          },
      });
  }, []);

  useEffect(() => {
    setText('');
  },[addedGroupPost === true]);
 

    return (
      <form className="pop" onSubmit={onSubmitGroup}>
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

// const handleChange = (event) => {
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

