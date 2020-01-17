// mode변경 test
import React, { useCallback, useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

import '../components/Contents.css';
import Link from 'next/link';
import '../components/reset.css';

const ContentFormCopy = ({post}) => {
    
    const [comments, setComments ] = useState('');
    const [ commentFormOpened, setCommentFormOpened] = useState(false);
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const { imagePaths, postAdded, mainPosts, GroupPosts, commentAdded, isAddingComment } = useSelector(state => state.post);

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

            },
        });
    }, [me && me.id]);
    
    // 댓글 성공시, 빈텍스트로 
    useEffect(() => {
        setComments('');
    },[commentAdded === true]);
    
    //댓글삭제
    const onRemoveComments = () => {
        alert('댓글을 삭제하시겠습니까?');
    };

    //////////////////////
    // if(postAdded===false)
    // return(
    //     <div className="letsbegin" >
    //         <div className="startT">그룹에 재미있는 이야기를 써보세요.</div>
    //     </div>
    // );
    if(postAdded===true)
    return(
            <div className="postbox">
                <div className="contBox">
                    {/* <img alt="example" src={post.img}/>  */}
                    {imagePaths.map((c) => (
                        <div key={c} style={{display:"inline-block"}}>
                            <img src={`http://localhost:3000/${c}`} style={{ width:'200px'}} alt={c}></img> 
                            <div>
                                <button>제거</button>
                            </div>   
                        </div>
                    ))}
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
                    {commentFormOpened===true && 
                        <div style={{display:"inline-block",width:"100%",height:"100px"}}>
                            <div className="comline"></div>
                            {/* <p>{post.Comments ? post.Comments.length + '댓글' : 0 + '댓글'}</p> */}
                            <p style={{marginLeft:"10px"}}>{commentAdded ? '댓글' + post.Comments.length : '댓글'+' 0'}</p>
                            
                                    <li key={t.createdAt}>
                                        {t.User.nickname} : {t.content}
                                        <button type="button" className="remove" onClick={onRemoveComments} >REMOVE</button>
                                    </li>
                                );
                            })
                            }
                        </div>
                    }
                </div> 
            </div>
    );
    
};

ContentFormCopy.propTypes={
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createdAt: PropTypes.object,
    }),
};


export default ContentFormCopy;