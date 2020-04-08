import React, { useState, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';

import GroupBox from '../components/GroupBox';
import UploadForm from '../components/UploadForm';

import '../components/Menu.css';
import '../components/GroupItem.css';
import '../components/Contents.css';
import '../components/Templete.css';

// 동적페이지
const Contents = (props) => (
    <div>
        <Cont  />
        <p>여기는 {props.title} 의 페이지</p>
    </div>

)

const Cont = () => {
    const dispatch = useDispatch();
    const {GroupPosts} = useSelector(state=> state.gpost);
    // 메뉴클릭시 컨텐츠 변경
    const [ Mode, setMode ] = useState('read');

    // 게시물 로드하기
    useEffect(() => {
        dispatch({
          type: LOAD_MAIN_POSTS_REQUEST,
        });
      }, []);

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
                {GroupPosts.map((val)=>{
                    return(
                        <GroupBox gpost={val} />
                    );
                })}
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
                {/* 그룹이름이랑 같으면: 만약에 IndexPage의 그룹제목과 ---제목이 같을경우에만  */}
                {/* { gpost.title === val.title ? return :  return false;} */}
                {GroupPosts.map((val)=>{
                    return(
                        <GroupBox gpost={val} />
                    );
                })}
                {/* 즉시실행문 */}
                {(()=>{
                    
                })()}
                <UploadForm />
            </div>
        </>
    );
};


export default()=>(
    <div>
        <Contents />
    </div>
)
