import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';

const GroupForm = () => {
    const dispatch = useDispatch();
    const [text, setText ] = useState('');
    const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);
    
    useEffect(() => {
        setText('');
    },[postAdded === true]);

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                text,
            },
        });
    }, []);
    
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);
    
    return (
        <form style={{ margin: '10px 0 20px'}} encType="multipart/form-data" onSubmit={onSubmitForm}>
            <input htmltype="textarea" maxLength={140} placeholder="소식을 남겨주세요" value={text} onChange={onChangeText}></input>
            <div>
                <input type="file" multiple hidden></input>
                <button>이미지 업로드</button>
                <button style={{float:"right"}} htmltype="submit" loading={isAddingPost}>짹짹</button>
            </div>
            <div>
                {/* 반복문 */}
                {imagePaths.map((v) => (
                        <div key={v} style={{display:"inline-block"}}>
                            <img src={`http://localhost:3065/${v}`} style={{ width:'200px'}} alt={v}></img> 
                            <div>
                                <button>제거</button>
                            </div>   
                        </div>
                ))}
            </div>
        </form>
    );
};

export default GroupForm;