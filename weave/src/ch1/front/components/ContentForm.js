// mode변경 test
import React, { useCallback, useState, useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST } from '../reducers/post';

import '../components/Contents.css';
import Link from 'next/link';
import '../components/Menu.css';
import '../components/reset.css';

  
const ContentForm = () => {
    {/* 게시물올라갈부분 */}
    <div className="letsbegin" >
        
        {/* 반복문 */}
        { ADD_POST_SUCCESS ? 
        {imagePaths.map((c) => (
            <div key={c} style={{display:"inline-block"}}>
                <img src={`http://localhost:3065/${c}`} style={{ width:'200px'}} alt={c}></img> 
                <div>
                    <button>제거</button>
                </div>   
            </div>
        ))}
        {/* 게시글 */}
        {GroupPosts.map((v) => {
            return(
                <div key={v} className="postbox">
                    <div className="contBox" post={v}></div>
                    <div className="btnsbox">
                        <button type="button" className="commentBtn" onClick={onInputComment} />
                        <button type="button" className="likeBtn" /> 
                        <button type="button" className="removeBtn" />

                        <form className="commentbox">
                            <input type="textarea" resize="none" className="comment" value={comments} onChange={onChangeComment} />
                            <button type="submit" className="combtn" onClick={onSubmitComment}>COMMENT</button>
                            {/* 댓글올라갈부분 */}
                            {/* {mainPosts.map((c) => (
                                <div key={c} style={{display:"inline-block"}}>
                                    <div>
                                        <button type="button" className="remove">REMOVE</button>
                                    </div>   
                                </div>
                            ))} */}
                        </form>
                        
                    </div> 
                </div>
                );
        })
        }
    </div>

    : <div>그룹에 재미있는 이야기를 써보세요.</div> } 

{/* 더보기버튼 */}
<button className="more">더보기</button>
       
};

export default ContentForm;