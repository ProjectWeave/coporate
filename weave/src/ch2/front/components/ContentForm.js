import React, { useCallback, useState, useEffect }  from 'react';
import PropTypes, { array } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COMMENT_REQUEST, LOAD_COMMENTS_REQUEST, REMOVE_POST_REQUEST } from '../reducers/post';

import '../components/Contents.css';
import '../components/reset.css';
import PostImages from './PostImages';

const ContentForm = ({post}) => {
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [commentText, setCommentText ] = useState('');
    const [likeNum, setLikeNum ] = useState(0);
    
    const { me } = useSelector(state => state.user);
    const { commentAdded, isAddingComment, mainPosts } = useSelector(state => state.post);
    const dispatch = useDispatch();
    
    //댓글창토글
    const onToggleComment = useCallback(() => {
        setCommentFormOpened(prev => !prev);
        if (!commentFormOpened) { 
          // 댓글창 켤때 불러오기
            dispatch({
              type: LOAD_COMMENTS_REQUEST,
              data: post.id,
            });
          }
      }, []);

    // 댓글
    const onChangeComment = useCallback((e) => {
        setCommentText(e.target.value);
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
                content: commentText,
            },
        });
    }, [me && me.id, commentText]);
    
    // 댓글 성공시, 빈텍스트로 
    useEffect(() => {
        setCommentText('');
    },[commentAdded === true]);

    // 댓글삭제하기
    const onRemoveComments = () => {
        alert('댓글을 삭제하시겠습니까?');
    };

    // 댓글 변수선언
    var listIndex;
    // 이미지
    var idxImg = post.Images;
    idxImg = post.Images.map((j)=>
            ( j.src )
        );

    // 게시글 삭제
    const onRemovePost = useCallback(userId => () => {
        alert('게시물을 삭제하시겠습니까?');
        // console.log("포스트아이디",me.id, post.User.id)
        if(me.id === post.User.id)
        dispatch({
          type: REMOVE_POST_REQUEST,
          data: userId,
        });
        if(me.id !== post.User.id)
        alert('다른 사용자의 게시물은 삭제할 수 없습니다.');
    });

    return(
        <>
            {/* {console.log("이미지 src:", idxImg)} */}
            <div className="postbox">   
                <div className="contBox">
                <p>{post.User.nickname} 님의 게시물 - 좋아요 : { likeNum } </p>
                    {/* <img style={{display:"block", margin:"0 auto", height:"200px"}} alt="example" 
                        src={`http://localhost:3065/${idxImg}`}/>  */}
                        <PostImages images={post.Images} />
                    <div>{post.content}</div>
                </div>
                <div className="btnsbox">
                    <button type="button" className="commentBtn"  value={commentFormOpened} onClick={onToggleComment} />
                    <button type="button" className="likeBtn" onClick={()=> setLikeNum(likeNum+1)} /> 
                    <button type="button" className="removeBtn" onClick={onRemovePost(post.id)} />
                    {commentFormOpened===true &&
                        <form className="commentbox" onSubmit={onSubmitComment}>
                            <textarea className="comment" value={commentText} onChange={onChangeComment} />
                            <button type="primary" htmlType="submit" className="combtn" loading={isAddingComment} >COMMENT</button>
                        </form>
                    }
                    {/* 댓글올라갈부분 */}
                    {commentFormOpened===true && (
                        <div style={{display:"inline-block", width:"100%"}}>
                            <p style={{marginLeft:"10px"}}>{commentAdded ? '댓글' + post.Comments.length : '댓글'+ '0'}</p>
                            <div className="comline"></div>
                            
                            {(()=>{
                                if(post.Comments){
                                    // console.log(post.Comments[0])
                                    listIndex = post.Comments.map((el)=>
                                        (
                                        <li style={{listStyle:"none", display:"inline-block", clear:"both"}} >
                                            {el.User.nickname} : {el.content}
                                            <button type="button" className="remove" onClick={onRemoveComments} >
                                                REMOVE
                                            </button>
                                        </li>
                                        )
                                   )
                                }
                                return(
                                    <ul> {listIndex} </ul>
                                );
                            })()}
                            
                        </div>
                        )
                    }
                </div> 
            </div>
        </>
    );
    

};

ContentForm.propTypes={
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createdAt: PropTypes.object,
    }),
};


export default ContentForm;

// {commentAdded ? '댓글' + post.Comments.length : '댓글'+ '0'}
