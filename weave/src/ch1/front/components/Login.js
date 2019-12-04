import React,{ useCallback } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../pages/Join';
import { LOG_IN_REQUEST } from '../reducers/user';


const Login = () => {
  const [id, onChangeId] = useInput();
  const [password, onChangePassword] = useInput();
  const { isLoggingIn } = useSelector(state => state.user);
  const dispatch = useDispatch();
  
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
        type: LOG_IN_REQUEST,
        data: {
            id, password,
        },
    });
},[id, password]);

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
              <Link href="/join"><a><button className="btn">회원가입</button></a></Link>
              </div>
            </form>
          </div>
      </article>
    </div>
  );
};

export default Login;
