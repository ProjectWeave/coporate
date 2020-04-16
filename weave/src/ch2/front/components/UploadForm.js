import React, { useCallback, useState, useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST,LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';

import ContentForm from '../components/ContentForm';

import '../components/Contents.css';
import '../components/Menu.css';
import '../components/reset.css';

const UploadForm = () => {
    const dispatch = useDispatch();

    const [text, setText ] = useState('');
    const { isAddingPost, postAdded, mainPosts, imagePaths } = useSelector(state => state.post);

    // 게시물 로드하기
    useEffect(() => {
        dispatch({
          type: LOAD_MAIN_POSTS_REQUEST,
        });
      }, []);

    useEffect(() => {
        setText('');
    },[postAdded === true]);

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        // 빈텍스트, 스페이스바 게시물올리기 막기
        if(!text || !text.trim()){
            return alert('게시글을 작성하세요.');
        }
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                content: text,
            },  
        });
    }, [text]);
    
    
    // 단일이미지 미리보기
    const [img, setImg] = useState(null);
    const onChangeImage = useCallback((e)=>{
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = function () {
            setImg(reader.result);
          }
    },[]);

    // 소식을 남겨주세요부분 텍스트입력
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);

    return (
        <>
            
            <form className="uploadTb" encType="multipart/form-data" onSubmit={onSubmitForm}>
                <div className='row1'>
                        {/* <img src={img} style={{ width: '50%' }} /> */}
                        <textarea maxLength={1500} placeholder="소식을 남겨주세요" resize="none"
                            className="tarea" value={text} onChange={onChangeText} style={{
                                width:"100%",height:"110px", overflowY: "hidden"
                            }}>

                        </textarea>
                        <div>
                            {imagePaths.map( v => (
                                <div key={v} style={{display:"inline-block"}}>
                                        <img src={`http://localhost:3065/${v}`}  style={{width:"100px"}} alt={v} />
                                </div>
                            ))}
                        </div>
                    </div>
                <div className='row2'>
                    <div class="fileBox" >
                        <label for="uploadBtn_0" className="btn_file" > </label>
                        <input type="file" id="uploadBtn_0" className="uploadBtn" 
                            onChange={onChangeImage} accept=".jpg, .jpeg, .png" />
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
            
        </>
    );
};

export default UploadForm;