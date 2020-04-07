import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  ADD_GROUP_REQUEST } from '../reducers/gpost';
import './Templete.css';

const File = () => {
    const dispatch = useDispatch();
    const { addingGroupPost, addedGroupPost } = useSelector(state => state.gpost);
    const { poster } = useSelector(state => state.gpost);
    const { me } = useSelector(state => state.user);
    
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
      let pop = document.querySelector(".pop");
      let block = document.querySelector(".block");
      pop.style.display="none"
      block.style.display="none"
      setGrouptit('');
      setGrouptext('');
      setImg(null);
    };
    
    // 그룹만들기서브밋
    const onSubmitGroup = useCallback((e) => {
      e.preventDefault();
      if(!me){
        return alert('로그인이 필요합니다.');
      }
      dispatch({
          type: ADD_GROUP_REQUEST,
          data: {
            title: grouptit, // 제목
            descp: grouptext, // 소개글
            UserId: me.id,
          },
      });
      //1.5초뒤에 닫히기
      setTimeout(() => {
        popBlockClose(e);
      }, 1500);
    }, [grouptit, grouptext]);

    return (
      <form className="pop" encType="multipart/form-data" method="post" name="gg" onSubmit={onSubmitGroup}>
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
