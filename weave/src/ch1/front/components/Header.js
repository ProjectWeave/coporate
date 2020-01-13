import React, { useState, useEffect, Component,useCallback } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';
import './Header.css';
import Router from 'next/router';

const Header = () => {

  const { isLoggedOut } = useSelector(state => state.user);
  const [clickBtn, setClickBtn] = useState({isToggleOn: false});
  const { isLoggingOut } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleClick =(e)=>{
    e.preventDefault();
    setClickBtn(!clickBtn);
  };
  
  //프로필페이지이동
  const handleProfile = () => {
    alert("프로필페이지로 이동합니다.");
    
  };

  //로그아웃 리퀘스트
  const logout = useCallback((e) => {
    alert('로그아웃 하시겠습니까?');
    e.preventDefault();
    dispatch({
        type: LOG_OUT_REQUEST,
        data: {},
    });
  },[]);

  //프로필창클릭시 내려오는 박스
  const Toggle = (e) => { 
    return(
        <div className="toggleBox">
          <ul>
            <li><Link href="/mygroup"><a>내 그룹</a></Link></li>
            <li loading={isLoggingOut} onClick={logout}>로그아웃</li>
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
          
        <div>
          {/* 프로필이미지 */}
          <div className="profile" onClick={handleProfile} ></div>
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
