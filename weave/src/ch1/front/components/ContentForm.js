// mode변경 test
import React, { useCallback, useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

import '../components/Contents.css';
import Link from 'next/link';
import '../components/reset.css';

const ContentForm = ({post}) => {
    
    const [comments, setComments ] = useState('');
    const [ commentFormOpened, setCommentFormOpened] = useState(false);
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const { imagePaths, postAdded, mainPosts, commentAdded, isAddingComment,CommentPosts } = useSelector(state => state.post);

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
        if(!me){
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type: ADD_COMMENT_REQUEST,
            data:{
                postId: post.id,
            },
        });
    }, [me && me.id]);
    
    // 댓글 성공시, 빈텍스트로 
    useEffect(() => {
        setComments('');
    },[commentAdded === true]);

    const onRemoveComments = () => {
        alert('댓글을 삭제하시겠습니까?');
    };

    return(
        <>
            {/* 게시물올라갈부분 */}
            {/* {mainPosts.map((v) => { */}
                {/* return( */}
                    <div className="postbox">   
                        <div className="contBox">
                            <p>{post.id} 님의 게시물</p>
                            <img style={{display:"block", margin:"0 auto", height:"200px"}} alt="example" src={post.img}/> 
                            <div>{post.content}</div>
                        </div>
                        <div className="btnsbox">
                            <button type="button" className="commentBtn"  value={commentFormOpened} onClick={onToggleComment} />
                            <button type="button" className="likeBtn" /> 
                            <button type="button" className="removeBtn" />
                            {commentFormOpened===true &&
                                <form className="commentbox" onSubmit={onSubmitComment}>
                                    <textarea className="comment" value={comments} onChange={onChangeComment} />
                                    <button type="primary" htmlType="submit" className="combtn" loading={isAddingComment} >COMMENT</button>
                                </form>
                            }
                            {/* 댓글올라갈부분 */}
                            {commentFormOpened===true && (
                                <div style={{display:"inline-block", width:"100%"}}>
                                    <p style={{marginLeft:"10px"}}>{commentAdded ? '댓글' + post.Comments.length : '댓글'+ '0'}</p>
                                    <div className="comline"></div>
                                            {/* <li style={{
                                                listStyle:"none", display:"inline-block", clear:"both"}}
                                            >
                                                {post.id} : {post.content}
                                                <button type="button" className="remove" onClick={onRemoveComments} >REMOVE</button>
                                            </li> */}
                                    { CommentPosts.map((v) => {
                                        return( 
                                            <li key={v.createdAt} style={{
                                                listStyle:"none", display:"inline-block", clear:"both"}}
                                            >
                                                {v.User.nickname} : {v.content}
                                                <button type="button" className="remove" onClick={onRemoveComments} >REMOVE</button>
                                            </li>
                                        );
                                    })
                                    }
                                </div>
                                )
                            }
                        </div> 
                    </div>
                {/* ); */}
            {/* })
            } */}
        </>
    );
    

};

ContentForm.propTypes={
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
    }),
};


export default ContentForm;
