// mode변경 test
import React, { useCallback, useState, useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST } from '../reducers/post';

import '../components/Contents.css';
import Link from 'next/link';
import '../components/reset.css';

const ContentForm = () => {
    
    const [comments, setComments ] = useState('');
    const [text, setText ] = useState('');
    const [ commentFormOpened, setCommentFormOpened] = useState(false);

    const dispatch = useDispatch();

    const { imagePaths, isAddingPost, postAdded, mainPosts, GroupPosts, commentAdded, isAddingComment } = useSelector(state => state.post);

    // 댓글
    const onChangeComment = useCallback((e) => {
        setComments(e.target.value);
    }, []);

    //댓글창토글
    const onToggleComment = useCallback(() => {
        setCommentFormOpened(prev => !prev);
      }, []);

    // 댓글올리기 사이클
    const onSubmitComment = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
                text,
            },
        });
    }, []);

    useEffect(() => {
        setComments('');
    },[commentAdded === true]);

    if(postAdded===false)
    return(
        <div className="letsbegin" >
            <div className="startT">그룹에 재미있는 이야기를 써보세요.</div>
        </div>
    );
    if(postAdded===true)
    return(
        <div className="letsbegin" >
            {/* 게시물올라갈부분 */}
            {mainPosts.map((v) => {
                return(
                    <div key={v} className="postbox">
                        <div className="contBox">
                            {/* <img alt="example" src={post.img}/>  */}
                            {/* {imagePaths.map((c) => (
                                <div key={c} style={{display:"inline-block"}}>
                                    <img src={`http://localhost:3065/${c}`} style={{ width:'200px'}} alt={c}></img> 
                                    <div>
                                        <button>제거</button>
                                    </div>   
                                </div>
                            ))} */}
                        </div>
                        <div className="btnsbox">
                            <button type="button" className="commentBtn"  value={commentFormOpened} onClick={onToggleComment} />
                            <button type="button" className="likeBtn" /> 
                            <button type="button" className="removeBtn" />
                            {commentFormOpened===true&&
                                <form className="commentbox">
                                    <textarea resize="none" className="comment" value={comments} onChange={onChangeComment} />
                                    <button type="submit" className="combtn" onClick={onSubmitComment}>COMMENT</button>
                                </form>
                            }
                                {/* 댓글올라갈부분 */}
                                {commentFormOpened===true&& mainPosts.map((c) => (
                                    <div key={c} style={{display:"inline-block",width:"100%",height:"100px"}}>
                                        <div className="comline">
                                            댓글
                                            <button type="button" className="remove">REMOVE</button>
                                        </div>   
                                    </div>
                                ))}
                        </div> 
                    </div>
                );
            })
            }
        </div>
    );
    

};
export default ContentForm;
    
        
        
        