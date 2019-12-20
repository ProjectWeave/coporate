// mode변경 test
import React, { useCallback, useState, useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';

import '../components/Contents.css';
import Link from 'next/link';
import '../components/Menu.css';
import '../components/reset.css';
import { Router } from 'next/router';

  
const Cont = () => {
    const dispatch = useDispatch();
    const [text, setText ] = useState('');
    const { imagePaths, isAddingPost, postAdded, mainPosts } = useSelector(state => state.post);
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

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                text,
            },
        });
    }, []);

    const handleChange = (event) => {
        setFile({
          file:URL.createObjectURL(event.target.files[0])
        });
      }

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
        //console.log();
    }, []);

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
                        <div>
                            <label Htmlfor="file-input" className="icon01">사진올리기</label>
                            <input id="img_file" type="file" name="file" size="200" accept=".jpg, .jpeg, .png" className="icon01" value="" onChange={handleChange} />
                        </div>
                        <div>
                            <label Htmlfor="file-input" className="icon02"></label>
                            <input id="file-input" type="file" name="mv_file" accept=".mp4, .wmv, .avi" />
                        </div>
                        <div>
                            <label Htmlfor="file-input" className="icon03"></label>
                            <input id="doc_file" type="file" accept=".txt" />
                        </div>
                        <div>
                            <label Htmlfor="file-input" className="icon04"></label>
                            <button id="file-input" className="icon04" type="submit" loading={isAddingPost} ></button>
                        </div>
                    </div>
                </form>
                <div className="letsbegin" >
                    그룹에 재미있는 이야기를 써보세요.
                    {/* <div post={c}></div> */}
                </div>
                
            </div>
            
        </>
    );
};

export default Cont;

