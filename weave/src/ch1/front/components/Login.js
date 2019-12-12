import React,{ useCallback,useState } from 'react';
//import {Router, Link, Route} from 'react-router-dom'; 
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../pages/Join';
import { LOG_IN_REQUEST } from '../reducers/user';
import Router from 'next/router';
// import IndexPage from './IndexPage';
import Join from './Join';


const Login = () => {
  const [id, onChangeId] = useInput();
  const [password, onChangePassword] = useInput();
  const { isLoggingIn } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [ Mode, setMode ] = React.useState('read'); //초기값
  
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
        type: LOG_IN_REQUEST,
        data: {
            id, password,
        },
    });
  },[id, password]);

  const onChangeMode = (e) => {
    // alert('회원가입페이지로 이동합니다.');
    e.preventDefault();
    //setMode(e.target.mode);
    //alert('회원가입페이지로 이동합니다.');
    //Router.push("/join");
    setMode('clicked');
  };

  // const onChangePage =((e) => {
  //       //alert('회원가입페이지로 이동합니다.');
  //       //Router.push("/join");
  //       setMode('clicked');
  // });
  if(Mode==='clicked'){
    return(
    <>
     <Join />
    </>
    );
  };
  if(Mode==='read')
  return (
    <div>
      <article className="rLg">
        <div className="logo"></div>
        <div className="lg">
          <h2 className="bld">로그인</h2>
          <form 
            className="lgform" action="create_process" method="post"
            onSubmit={onSubmitForm}
          >
              <div className="lg_title">지금 바로 가입하세요!</div>
              <div>
                <label htmlFor="user-id" className="bld">아이디</label>
                <input name="user-id" value={id} onChange={onChangeId} placeholder="아이디를 입력하세요." className="tbox" required />
                <label htmlFor="user-password" value={password} onChange={onChangePassword} className="bld">비밀번호</label>
                <input name="user-pasword" type="password" placeholder="비밀번호를 입력하세요." className="tbox" required />
              </div>
              <div className="btngroup">
                <button htmlType="submit" className="btn" loading={isLoggingIn}>로그인</button>
                <button className="btn" onClick={onChangeMode}>회원가입</button>
                {/* <Link href="/join"><a><button className="btn" onClick={onChangePage}>회원가입</button></a></Link> */}
              </div>
            </form>
          </div>
      </article>
    </div>
  );
};

export default Login;
