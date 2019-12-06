import React from 'react';

import Login from '../components/Login';
import '../components/First.css';

const signup = () => {
    return (
        <div>
            <article className="lLg">
                <h2 className="bld">위브설명란</h2>
                <div className="wlogo"></div>
                <div className="tpic"></div>
            </article>
            <div>

            <div>
                <form onSubmit={onSubmit} className="joinForm">
                    <div>
                        <label htmlFor="user-id" />아이디<br />
                        <input name="user-id"  value={id} required onChange={onChangeId} />
                    </div>
                    <div>
                        <label htmlFor="user-nick" />닉네임<br />
                        <input name="user-nick" value={nick} required onChange={onChangeNick} />
                    </div>
                    <div>
                        <label htmlFor="user-password" />비밀번호<br />
                        <input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                    </div>
                    <div>
                        <label htmlFor="user-password-chk" />비밀번호체크<br />
                        <input name="user-password-chk" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
                        {passwordError && <div style={{color:'red'}}>비밀번호가 일치하지 않습니다.</div>}
                    </div>
                    <div>
                        <input type="checkbox" name="user-term" checked={term} onChange={onChangeTerm} />말을 잘 들을것에 동의 합니다.
                        {termError && <div style={{color:'red'}}>약관에 동의하셔야합니다.</div>}
                    </div>
                    <div className="joinBtn">
                        <button htmlType="submit" loading={isSigningUp}>가입하기</button>
                    </div>
            </form>
        </div>
            </div>
        </div>
    );
};

export default signup;