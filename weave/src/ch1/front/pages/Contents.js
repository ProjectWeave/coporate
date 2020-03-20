// import React, { useCallback, useState, useEffect }  from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { ADD_POST_REQUEST } from '../reducers/post';

// import '../components/Contents.css';
// import Menu from '../components/Menu';


// const Contents = () => {
//     const dispatch = useDispatch();
//     const [text, setText ] = useState('');
//     const { imagePaths, isAddingPost, postAdded, mainPosts } = useSelector(state => state.post);
    
//     useEffect(() => {
//         setText('');
//     },[postAdded === true]);

//     const onSubmitForm = useCallback((e) => {
//         e.preventDefault();
//         dispatch({
//             type: ADD_POST_REQUEST,
//             data: {
//                 content: text,
//             },
//         });
//     }, [text]);

//     const handleChange = (event) => {
//         setFile({
//           file:URL.createObjectURL(event.target.files[0])
//         });
//       }

//     const onChangeText = useCallback((e) => {
//         setText(e.target.value);
//         //console.log();
//     }, []);

    
//     return (
//         <>
//             <Menu />
//             <div className="wrap">
//                 <div className="groupinfo">
//                     <div className="groupimg"></div>
//                     <div className="grouptext">
//                         <h1>댕댕이집사 그룹</h1>
//                         <p className="numMem">Member. 43</p>
//                         <p>세젤예 댕댕이들 모여라~!</p>
//                         <nav className="groupSubmitBtn">
//                             <button className="gjoin">가입하기</button>
//                             <button className="gout">그룹탈퇴</button>
//                         </nav>
//                     </div>
//                 </div>
                
//                 <form className="uploadTb" encType="multipart/form-data" onSubmit={onSubmitForm}>
//                     <div className='row1'>
//                         <textarea maxLength={1500} placeholder="소식을 남겨주세요"
//                                   className="tarea" value={text} onChange={onChangeText} />
//                     </div>
//                     <div className='row2'>
//                         <div>
//                             <label Htmlfor="file-input" className="icon01">사진올리기</label>
//                             <input id="img_file" type="file" name="file" size="200" accept=".jpg, .jpeg, .png" className="icon01" value="" onChange={handleChange} />
//                         </div>
//                         <div>
//                             <label Htmlfor="file-input" className="icon02"></label>
//                             <input id="file-input" type="file" name="mv_file" accept=".mp4, .wmv, .avi" />
//                         </div>
//                         <div>
//                             <label Htmlfor="file-input" className="icon03"></label>
//                             <input id="doc_file" type="file" accept=".txt" />
//                         </div>
//                         <div>
//                             <label Htmlfor="file-input" className="icon04"></label>
//                             <button id="file-input" className="icon04" type="submit" loading={isAddingPost} ></button>
//                         </div>
//                     </div>
//                 </form>
//                 <div className="letsbegin" >
//                     그룹에 재미있는 이야기를 써보세요. 
//                     {/* 반복문 */}
//                     {imagePaths.map((v) => (
//                             <div key={v} style={{display:"inline-block"}}>
//                                 <img src={`http://localhost:3065/${v}`} style={{ width:'200px'}} alt={v}></img> 
//                                 <div>
//                                     <button>제거</button>
//                                 </div>   
//                             </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Contents;


// // {/* 그룹에 게시물이 아무것도 없을때 */}
// // <div className="letsbegin">
// // 그룹에 재미있는 이야기를 써 보세요.
// // </div>
// // <button className="more">더보기</button>

// // <table className="uploadTb">
// //     <tbody>
// //         <tr className='row1'>
// //             <td colSpan='4'>
// //                 {/* <input type="textarea" name="text" placeholder="소식을 남겨주세요."></input> */}
// //                 <input type="textarea" maxLength={1500} placeholder="소식을 남겨주세요" value={text} onChange={onChangeText} />
// //             </td>
// //         </tr>
// //         <tr className='row2'>
// //             <td>
// //                 <label Htmlfor="file-input" className="icon01"></label>
// //                 <input id="file-input" type="file" name="file" size="200" accept=".jpg, .jpeg, .png" className="icon01" />
// //                 {/* <input type="file" id="img_file" name="file" size="200" accept=".jpg, .jpeg, .png" className="icon01"></input> */}
// //             </td>
// //             <td>
// //                 <label Htmlfor="file-input" className="icon02"></label>
// //                 <input id="file-input" type="file" name="file" accept=".mp4, .wmv, .avi" value="" />
// //                 {/* <input type="file" id="mv_file" name="file" accept=".mp4, .wmv, .avi"></input> */}
// //             </td>
// //             <td>
// //                 <label Htmlfor="file-input" className="icon03"></label>
// //                 <input id="file-input" type="file" value="" />
// //                 {/* <input type="file" id="doc_file" name="file" accept=".txt"></input> */}
// //             </td>
// //             <td>
// //                 <label Htmlfor="file-input" className="icon04"></label>
// //                 <input id="file-input" type="submit" loading={isAddingPost} onSubmit={onSubmitForm} />
// //             </td>
// //         </tr>
// //     </tbody>
// // </table>



// // import React, { useCallback, useState, useEffect } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { ADD_POST_REQUEST } from '../reducers/post';

// // const PostForm = () => {
// //     const dispatch = useDispatch();
// //     const [text, setText ] = useState('');
// //     const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);
    
// //     useEffect(() => {
// //         setText('');
// //     },[postAdded === true]);

// //     const onSubmitForm = useCallback((e) => {
// //         e.preventDefault();
// //         dispatch({
// //             type: ADD_POST_REQUEST,
// //             data: {
// //                 text,
// //             },
// //         });
// //     }, []);
    
// //     const onChangeText = useCallback((e) => {
// //         setText(e.target.value);
// //     }, []);
    
// //     return (
// //         <form style={{ margin: '10px 0 20px'}} encType="multipart/form-data" onSubmit={onSubmitForm}>
// //             <input htmlType="textarea" maxLength={140} placeholder="소식을 남겨주세요" value={text} onChange={onChangeText}></input>
// //             <div>
// //                 <input type="file" multiple hidden></input>
// //                 <button>이미지 업로드</button>
// //                 <button style={{float:"right"}} htmlType="submit" loading={isAddingPost}>짹짹</button>
// //             </div>
// //             <div>
// //                 {/* 반복문 */}
// //                 {imagePaths.map((v) => (
// //                         <div key={v} style={{display:"inline-block"}}>
// //                             <img src={`http://localhost:3065/${v}`} style={{ width:'200px'}} alt={v}></img> 
// //                             <div>
// //                                 <button>제거</button>
// //                             </div>   
// //                         </div>
// //                 ))}
// //             </div>
// //         </form>
// //     );
// // };

// // export default PostForm;