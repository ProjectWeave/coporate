import React,{ useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../pages/Join';
import { LOG_IN_REQUEST } from '../reducers/user';
import Router from 'next/router';

import Join from './Join';


const Login = () => {
  const [id, onChangeId] = useInput();
  const [password, onChangePassword] = useInput();
  const { isLoggingIn, me } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [ Mode, setMode ] = useState('read'); //초기값

  useEffect(() => {
    if(me){
        alert('로그인했으니 메인페이지로 이동합니다.');
        Router.push("/");
    }
  }, [me && me.id]);
  
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
        type: LOG_IN_REQUEST,
        data: {
            userId: id, 
            password,
        },
    });
  },[id, password]);

  const onChangeMode = (e) => {
    e.preventDefault();
    //setMode(e.target.mode);
    setMode('clicked');
  };

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
                <label htmlFor="user-password" className="bld">비밀번호</label>
                <input name="user-pasword" type="password" placeholder="비밀번호를 입력하세요." 
                       className="tbox" value={password} onChange={onChangePassword} required />
              </div>
              <div className="btngroup">
                <button htmltype="submit" className="btn" loading={isLoggingIn}>로그인</button>
                <button htmltype="button" className="btn" onClick={onChangeMode}>회원가입</button>
              </div>
            </form>
          </div>
      </article>
    </div>
  );
};

export default Login;
