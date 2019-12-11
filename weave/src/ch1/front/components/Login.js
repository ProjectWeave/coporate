import React,{ useCallback,useState } from 'react';
//import {Router, Link, Route} from 'react-router-dom'; 
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../pages/Join';
import { LOG_IN_REQUEST } from '../reducers/user';
import Router from 'next/router';
// import IndexPage from './IndexPage';
import Join from '../pages/Join';
import "./signup.css"


const Login = () => {
  const [id, onChangeId] = useInput();
  const [password, onChangePassword] = useInput();
  const { isLoggingIn } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [ mode, setMode ] = React.useState({mode:'read'}); //초기값
  
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
    //alert('모드 변경');
    setMode(e.target.mode);
  };

  const onChangePage =((e) => {
        alert('회원가입페이지로 이동합니다.');
        Router.push("/join");
        setMode({mode:'clicked'});
  });


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
                <button className="btn" onClick={onChangePage} setMode={mode}>회원가입</button>
                {/* <Link href="/join"><a><button className="btn" onClick={onChangePage}>회원가입</button></a></Link> */}
              </div>
            </form>
          </div>
      </article>
    </div>
  );
};
// return (
//   <div>
//       <article className="lLg">
//           <h2 className="bld">위브설명란</h2>
//           <div className="wlogo"></div>
//           <div className="tpic"></div>
//       </article>

//       <div>
//           <form onSubmit={onSubmitForm} className="joinForm">
//               <div>
//                   <label htmlFor="user-id" />아이디<br />
//                   <input name="user-id"  value={id} required onChange={onChangeId} />
//               </div>
//               <div>
//                   <label htmlFor="user-nick" />닉네임<br />
//                   <input name="user-nick"/>
//               </div>
//               <div>
//                   <label htmlFor="user-password" />비밀번호<br />
//                   <input name="user-password" type="password" />
//               </div>
//               <div>
//                   <label htmlFor="user-password-chk" />비밀번호체크<br />
//                   <input name="user-password-chk" type="password" />
//                   {passwordError && <div style={{color:'red'}}>비밀번호가 일치하지 않습니다.</div>}
//               </div>
//               <div>
//                   <input type="checkbox" name="user-term" />말을 잘 들을것에 동의 합니다.
//                   {termError && <div style={{color:'red'}}>약관에 동의하셔야합니다.</div>}
//               </div>
//               <div className="joinBtn">
//                   <button htmlType="submit">가입하기</button>
//               </div>
//           </form>
//       </div>
//   </div>
// );
// };

export default Login;
