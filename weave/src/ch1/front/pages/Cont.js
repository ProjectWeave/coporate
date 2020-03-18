// mode변경 test
import React, { useCallback, useState, useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';

import ContentForm from '../components/ContentForm';
import GroupBox from '../components/GroupBox';

import '../components/Contents.css';
import '../components/Menu.css';
import '../components/reset.css';

const Cont = () => {
    const dispatch = useDispatch();

    const [text, setText ] = useState('');
    const { isAddingPost, postAdded, mainPosts } = useSelector(state => state.post);

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
        // 빈텍스트, 스페이스바 게시물올리기 막기
        if(!text || !text.trim()){
            return alert('게시글을 작성하세요.');
        }
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                content: text,
            },  
        });
    }, [text]);
    
    
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
                {/* <div className="groupinfo">
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
                </div> */}
                <GroupBox />
               
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
                <GroupBox />
                
                <form className="uploadTb" encType="multipart/form-data" onSubmit={onSubmitForm}>
                    <div className='row1'>
                        <textarea maxLength={1500} placeholder="소식을 남겨주세요"
                                  className="tarea" value={text} onChange={onChangeText} />
                    </div>
                    <div className='row2'>
                        <div class="fileBox" >
                            <label for="uploadBtn" className="btn_file" > </label>
                            <input type="file" id="uploadBtn_0" className="uploadBtn" onChange={onChangeImage} accept=".jpg, .jpeg, .png" />
                        </div>
                        <div class="fileBox" >
                            <label for="uploadBtn" className="btn_file" > </label>
                            <input type="file" id="uploadBtn_1" className="uploadBtn" onChange={onChangeImage} accept=".mp4, .wmv, .avi" />
                        </div>
                        <div class="fileBox" >
                            <label for="uploadBtn" className="btn_file" > </label>
                            <input type="file" id="uploadBtn_2" className="uploadBtn" onChange={onChangeImage} accept=".txt" />
                        </div>
                    
                        <div className="icon04">
                            <label for="file-input"></label>
                            <input type="submit" value="" loading={isAddingPost} />
                        </div>
                    </div>
                </form>
                {/* 게시물올라가는부분 */}
                <div className="letsbegin">
                    <div className="startT">그룹에 재미있는 이야기를 써보세요.</div>
                    <div>
                        {mainPosts.map((i)=>{
                            return(
                                <ContentForm key={i} post={i} />
                            );
                        })}
                    </div>
                    
                </div>
                
                {/* 더보기버튼 */}
                <button className="more">더보기</button>
            </div>
           
            
        </>
    );
};

export default Cont;