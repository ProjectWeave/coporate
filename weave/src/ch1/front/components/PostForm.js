import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';

//임시로만든 데이터객체
// const dummy={
//     isLoggedIn: true,
//     imagePaths:[],
//     mainPosts:[{
//         User:{
//             id: 1,
//             nickname: "두리안",
//         },
//             content: "첫번째 게시글",
//             img:"https://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/dailylife/187ea4bc2ad54b1db5030743265c5397.jpg", 
//     }],
// };

const PostForm = () => {
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
            <input htmlType="textarea" maxLength={140} placeholder="어떤 신기한 일이 있었나요?" value={text} onChange={onChangeText}></input>
            <div>
                <input type="file" multiple hidden></input>
                <button>이미지 업로드</button>
                <button style={{float:"right"}} htmlType="submit" loading={isAddingPost}>짹짹</button>
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

export default PostForm;