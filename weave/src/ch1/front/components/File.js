//import React from 'react';
import React, { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import PostForm from './PostForm';
import '../routes/Templete.css';

import { useSelector, useDispatch } from 'react-redux';
import {  ADD_GROUP_REQUEST } from '../reducers/post';


const File = () => {
    const dispatch = useDispatch();
    const [text, setText ] = useState('');
    const [file, setFile ] = useState(null);
    const [selctedFile, setSelctedFile ] = useState(null);
    const { imagePaths, addingGroupPost, addedGroupPost } = useSelector(state => state.post);
    
    useEffect(() => {
        setText('');
    },[addedGroupPost === true]);

    const onSubmitGroup = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: ADD_GROUP_REQUEST,
            data: {
                text,
            },
        });
    }, []);

    const handleChange = (event) => {
      setFile({
        file:URL.createObjectURL(event.target.files[0])
      });
    }
    
    const fileUpSelcetedHandler=event=>{
      //console.log(event.target.file);
      setSelctedFile({
        selctedFile:event.target.file[0]
      })
    }
      
    const fileUploadHandler = () => {
        axios.post('');
    }
 
    return (
      <form className="pop" onSubmit={onSubmitGroup}>
        <div className="gimg" onClick={file}>
          <img src={setFile} />
        </div>
        <div className="filebox">
          <label htmlFor ="file" >사진을 선택해주세요.</label>
          <input type="file" id="file" name="file" size="2000" 
                   accept=".jpg, .jpeg, .png" className="upload" value=""
                   onChange={handleChange} />
        </div>
        <div>
          {/* 반복문 */}
          {imagePaths.map((v) => (
              <div key={v} style={{display:"inline-block"}}>
                  <img src={`http://localhost:3065/${v}`} style={{ width:'200px'}} alt={v}></img> 
              </div>
          ))}
        </div>
        
        <div className="group">
          <label htmlFor ="name" className="gtit"> 그룹이름</label>
          <input type="text" name="gname" className="gname" />
          <label htmlFor ="name" className="gtit"> 그룹소개</label>
          <input type="text" name="gintro" className="gintro" />
          <p className="send">
            <input type="submit" value="올리기" loading={addingGroupPost}
                   onSubmit={fileUploadHandler}
            />
            <input type="reset" value="취소" 
              onClick={function(){
                var pop = document.querySelector(".pop")
                var block = document.querySelector(".block")
                pop.style.display="none"
                block.style.display="none"
              }}/>
          </p>
        </div>
      </form>
    );
};
export default File;


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

