// mode변경 test
import React, { useCallback, useState, useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST } from '../reducers/post';

import '../components/Contents.css';
import Link from 'next/link';
import '../components/Menu.css';
import '../components/reset.css';

  
const Cont = () => {
    const dispatch = useDispatch();

    const [text, setText ] = useState('');
    const [comments, setComments ] = useState('');
    const { imagePaths, isAddingPost, postAdded, mainPosts, GroupPosts, commentAdded, isAddingComment } = useSelector(state => state.post);

    //메뉴클릭시 컨텐츠 변경
    const [ Mode, setMode ] = useState('read');

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
    
    useEffect(() => {
        setComments('');
    },[commentAdded === true]);

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                text,
            },
        });
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
    // const onSubmitComment = useCallback((e) => {
    //     e.preventDefault();
    //     if(!me){
    //         return alert('로그인이 필요합니다.');
    //     }
    //     return dispatch({
    //         type: ADD_COMMENT_REQUEST,
    //         data:{
    //             postId: post.id,
    //         },
    //     });
    // }, [me && me.id]);

    
    // 단일이미지 미리보기
    const [img, setImg] = useState(null);
    const onChangeImage = useCallback((e)=>{
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = function () {
            setImg(reader.result)
          }
    },[]);

    // 소식을 남겨주세요부분 텍스트입력
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
        //console.log('렌더링');
    }, []);

    // 댓글
    const onChangeComment = useCallback((e) => {
        setComments(e.target.value);
    }, []);
    // 소식남기기칸포스트올리기 사이클
    const onGroupSubmitForm = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                text,
            },
        });
    }, []);

    //댓글창나오게
    const onInputComment = (e) => {
        e.preventDefault();
        document.querySelector(".commentbox").style.display="block";
    };
    

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
                <div className="groupinfo">
                    <div className="groupimg"></div>
                    <div className="grouptext">
                        <h1>댕댕이집사 그룹</h1>
                        <p className="numMem">Member. 43</p>
                        <p>세젤예 댕댕이들 모여라~!</p>
                        <nav className="groupSubmitBtn">
                            <button className="gjoin">가입하기</button>
                            <button className="gout">그룹탈퇴</button>
                        </nav>
                    </div>
                </div>
               
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
                <div className="groupinfo">
                    <div className="groupimg"></div>
                    <div className="grouptext">
                        <h1>댕댕이집사 그룹</h1>
                        <p className="numMem">Member. 43</p>
                        <p>세젤예 댕댕이들 모여라~!</p>
                        <nav className="groupSubmitBtn">
                            <button className="gjoin">가입하기</button>
                            <button className="gout">그룹탈퇴</button>
                        </nav>
                    </div>
                </div>
                
                <form className="uploadTb" encType="multipart/form-data" onSubmit={onSubmitForm}>
                    <div className='row1'>
                        <textarea maxLength={1500} placeholder="소식을 남겨주세요"
                                  className="tarea" value={text} onChange={onChangeText} />
                    </div>
                    <div className='row2'>
                        <div class="fileBox" >
                            <label for="uploadBtn" className="btn_file" > </label>
                            <input type="file" id="uploadBtn" className="uploadBtn" onChange={onChangeImage} accept=".jpg, .jpeg, .png" />
                        </div>
                        <div class="fileBox" >
                            <label for="uploadBtn" className="btn_file" > </label>
                            <input type="file" id="uploadBtn" className="uploadBtn" onChange={onChangeImage} accept=".mp4, .wmv, .avi" />
                        </div>
                        <div class="fileBox" >
                            <label for="uploadBtn" className="btn_file" > </label>
                            <input type="file" id="uploadBtn" className="uploadBtn" onChange={onChangeImage} accept=".txt" />
                        </div>
                    
                        <div className="icon04">
                            <label for="file-input"></label>
                            <input type="submit" value="" loading={isAddingPost} onSubmit={onGroupSubmitForm} />
                        </div>
                    </div>
                </form>
                    {/* 게시물올라갈부분 */}
                    <div className="letsbegin" >
                        <div>그룹에 재미있는 이야기를 써보세요.</div>
                        {/* 반복문 */}
                        { postAdded === true } 
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
                
                {/* 더보기버튼 */}
                <button className="more">더보기</button>
            </div>
            
        </>
    );
};

export default Cont;

// {/* <div className='row1'>
//                         <textarea maxLength={1500} placeholder="소식을 남겨주세요"
//                                   className="tarea" value={text} onChange={onChangeText} />
//                     </div>

//                     <div className='row2'>
//                         <div className="icon01">
//                             <label for="file" className="btn_file2" >이거를 클릭하면</label>
//                             <input type="file" name="file" accept=".jpg, .jpeg, .png" 
//                                     onChange={onChangeImage} />
//                         </div>
//                         <div className="icon02">
//                             <label for="file-input" className="btn_file2"></label>
//                             <input type="file" name="mv_file" 
//                                    accept=".mp4, .wmv, .avi" onClick={onChangeImage} />
//                         </div>
//                         <div className="icon03">
//                             <label for="file-input" className="btn_file2"></label>
//                             <input type="file" accept=".txt" onChange={onChangeImage} />
//                         </div>
//                         <div className="icon04">
//                             <label for="file-input"></label>
//                             <input type="submit" value="" loading={isAddingPost} />
//                         </div>
                        
//                     </div> */}