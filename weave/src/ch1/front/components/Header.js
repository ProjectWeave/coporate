import React, { useState, useEffect, Component } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import './Header.css';


const Header = () => {

  const { isLoggedOut } = useSelector(state => state.user);
  const [clickBtn, setClickBtn] = useState({isToggleOn: false});
  
  const handleClick =(e)=>{
    e.preventDefault();
    setClickBtn(!clickBtn);
  };
  const handleGoProfile = () => {
    alert("프로필페이지로 이동합니다.");
    
  };

  const logout = () => {
    alert('로그아웃 하시겠습니까?');
//     useEffect((me) => {
//       if(me){
//         alert('로그인했으니 메인페이지로 이동합니다.');
//         Router.push("/indexpage");
//     }
// }, [me && me.id]);(isLoggedOut);
  };
  //프로필창클릭시 내려오는 박스
  const Toggle = (e) => { 
    return(
        <div className="toggleBox">
          <ul>
            <li><Link href="/mygroup"><a>내 그룹</a></Link></li>
            <li onClick={logout}>로그아웃</li>
          </ul>
        </div>
    );
  };

  return (
      <div className="header">
        <Link href="/"><a>
          <div className="logo_w">
            <span className="bld">로고</span>
          </div>
        </a></Link>
          
        <div className="profile" onClick={handleGoProfile} >
          {/* 프로필이미지 */}
          {/* 더보기란 */}
          <button htmltype="button" className="pfBtn" value={clickBtn} onClick={handleClick} >
            { !clickBtn && <Toggle /> }
          </button>
        </div>
        
        <div className="srcbox">
            <input type="text" placeholder="검색해보세요." className="txtbox" />  
            <input type="submit" value="Search" className="search" />
        </div>

      </div>
  );
};

export default Header;
