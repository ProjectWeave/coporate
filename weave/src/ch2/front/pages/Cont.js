// mode변경 test
import React, { useCallback, useState, useEffect, useRef }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST,LOAD_MAIN_POSTS_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../reducers/post';

import ContentForm from '../components/ContentForm';
import GroupBox from '../components/GroupBox';

import '../components/Contents.css';
import '../components/Menu.css';
import '../components/reset.css';

const Cont = () => {
    const dispatch = useDispatch();

    // 메뉴클릭시 컨텐츠 변경
    const [ Mode, setMode ] = useState('read');

    const [text, setText ] = useState('');
    const { isAddingPost, postAdded, mainPosts, imagePaths } = useSelector(state => state.post);
    const { GroupPosts } = useSelector(state => state.gpost);
    const imageInput = useRef();

    // 게시물 로드하기
    useEffect(() => {
        dispatch({
          type: LOAD_MAIN_POSTS_REQUEST,
        });
      }, []);

    const handleChangePage = (e) => {
        e.preventDefault();
        setMode('member');
        let classa = document.querySelector(".menu_a")
        let classm = document.querySelector(".menu_m")
        classa.setAttribute("id","");
        classm.setAttribute("id","on");
    };
    const handleChangePage2 = (e) => {
        e.preventDefault();
        setMode('read');
        let classa = document.querySelector(".menu_a")
        let classm = document.querySelector(".menu_m")
        classa.setAttribute("id","on");
        classm.setAttribute("id","");
    };

    
    useEffect(() => {
        setText('');
    },[postAdded === true]);

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        // if (!text || !text.trim()) {
        //   return alert('게시글을 작성하세요.');
        // }
        const formData = new FormData();
        imagePaths.forEach((i) => {
          formData.append('image', i);
        });
        formData.append('content', text);
        dispatch({
          type: ADD_POST_REQUEST,
          data: formData,
        });
      }, [text, imagePaths]);
    
    // 단일이미지 미리보기
    const [img, setImg] = useState(null);
    const onChangeImage = useCallback((e)=>{
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = function () {
            setImg(reader.result);
          }
    },[]);

    // 이미지업로드
    const onChangeImages = useCallback((e) => {
        console.log(e.target.files);
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => {
          imageFormData.append('image', f);
        });
        dispatch({
          type: UPLOAD_IMAGES_REQUEST,
          data: imageFormData,
        });
        console.log("이미지폼데이터:",imageFormData);
      }, []);
      const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
      }, [imageInput.current]);
    
    // 미리보기 이미지 지우기
    const onRemoveImage = useCallback(index => () => {
        dispatch({
            type: REMOVE_IMAGE,
            index,
        });
    }, []);
  
    // 소식을 남겨주세요부분 텍스트입력
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);

    if(Mode==='member'){
        return(
        <>
         <div className="top">
                <ul className="menubox">
                    <li className="menu_a" id="on" onClick={handleChangePage2}>전체글</li>
                    <li className="menu_m"  onClick={handleChangePage}>멤버</li>
                </ul>           
            </div>
            <div className="wrap">
                {GroupPosts.map((val)=>{
                    var url = decodeURI(window.location.href).split("=")[1];
                    if(url == val.title){
                        return(
                            <GroupBox gpost={val} />
                        );
                    }
                })}
               
                <div className="memberbox">
                    멤버목록
                </div>
            </div>
        </>
        );
      };

    if(Mode==='read')
    return (
        <>
            <div className="top">
                <ul className="menubox">
                    <li className="menu_a" id="on" onClick={handleChangePage2}>전체글</li>
                    <li className="menu_m"  onClick={handleChangePage}>멤버</li>
                </ul>           
            </div>
            <div className="wrap">
                {GroupPosts.map((val)=>{
                    // var url = decodeURI(window.location.href).split("=")[1];
                    // if(url == val.title){
                        return(
                            <GroupBox gpost={val} />
                        );
                    // }
                })}
                
                <form className="uploadTb" encType="multipart/form-data" onSubmit={onSubmitForm}>
                    <div className='row1'>
                        <textarea maxLength={1500} placeholder="소식을 남겨주세요" resize="none"
                            className="tarea" value={text} onChange={onChangeText} style={{
                                width:"100%",height:"110px", overflowY: "hidden"
                            }}>

                        </textarea>
                        <div>
                            {imagePaths.map( (v,i) => (
                                <div key={v} style={{display:"inline-block"}}>
                                        <img src={`http://localhost:3065/${v}`}  style={{width:"90px"}} alt={v} />
                                        <button onClick={onRemoveImage(i)}> X </button>
                                </div>
                            ))}
                        </div>
                    </div>
                  
                    <div className='row2'>
                        {/* <div>
                            <button onClick={onClickImageUpload} > test </button>
                            <input type="file" id="uploadBtn_0" className="uploadBtn" multiple hidden
                                onChange={onChangeImages} ref={imageInput} />
                        </div> */}
                        
                        <div class="fileBox" >
                            <label for="uploadBtn_0" className="btn_file" onClick={onClickImageUpload} > </label>
                            <input type="file" id="uploadBtn_0" className="uploadBtn" multiple
                                onChange={onChangeImages} ref={imageInput} accept=".jpg, .jpeg, .png" />
                        </div>
                        
                        <div class="fileBox" >
                            <label for="uploadBtn_1" className="btn_file" > </label>
                            <input type="file" id="uploadBtn_1" className="uploadBtn" 
                                onChange={onChangeImage} accept=".mp4, .wmv, .avi"  />
                        </div>
                        <div class="fileBox" >
                            <label for="uploadBtn_2" className="btn_file" > </label>
                            <input type="file" id="uploadBtn_2" className="uploadBtn" 
                                onChange={onChangeImage} accept=".txt" hidden />
                        </div>
                    
                        <div className="icon04">
                            <label for="file-input"></label>
                            <input type="submit" value="" loading={isAddingPost} />
                        </div>
                    </div>  
                </form>
                {/* 게시물올라가는부분 */}
                <div className="letsbegin">
                    <div className="startT">그룹에 재미있는 이야기를 써보세요.</div>
                    <div>
                        {mainPosts.map((i)=>{
                            return(
                                <ContentForm key={i} post={i} />
                            );
                        })}
                    </div>
                    {/* 더보기버튼 */}
                    <button className="more">더보기</button>
                </div>
                
                
            </div>
           
            
        </>
    );
};

export default Cont;
