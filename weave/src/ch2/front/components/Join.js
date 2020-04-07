import React, { useState,useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import './Join.css';

const TextInput=({value})=>{
    return(
        <div>{value}</div> //npmjs.com
    )
};

TextInput.propTypes={
    value: PropTypes.string,
};

 //커스텀훅
 export const useInput = (initValue = null)=>{
    const [value, setter] = useState(initValue);
    const handler = useCallback((e)=>{
        setter(e.target.value);
    },[]);
    return[value, handler];
};


const Join = () => {
    const [passwordCheck, setPasswordCheck] = useState();
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const [id, onChangeId] = useInput();
    const [nick, onChangeNick] = useInput();
    const [password, onChangePassword] = useInput();
    const dispatch = useDispatch();
    const { isSigningUp, isSignedUp } = useSelector(state=> state.user);

    const onSubmit= useCallback((e)=>{
        e.preventDefault();
        // 회원가입 성공시 로그인상태로 돌아가기
        if(isSignedUp === true){
            alert('가입해주셔서 감사합니다!');
            window.location.reload();
        } 
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
           
        return dispatch({
            type : SIGN_UP_REQUEST,
            data : {
                userId: id,
                password,
                nickname: nick,
            },
        });
    },[id, nick, password, passwordCheck, term]);

    // const onChangeId=(e)=>{
    //     setId(e.target.value);
    // };
    
    // const onChangeNick=(e)=>{
    //     setNick(e.target.value);
    // };
    
    // const onChangePassword=(e)=>{
    //     setPassword(e.target.value);
    // };
    
    const onChangePasswordCheck=useCallback((e)=>{
        setPasswordError(e.target.value !== password); //비밀번호체크
        setPasswordCheck(e.target.value);
    },[password]);
    
    const onChangeTerm=useCallback((e)=>{
        setTermError(false); //setTermError메세기 기본적으로 꺼두기
        setTerm(e.target.checked);
    },[]);

   
    return(
        <>
            <div className="logo_"></div>
            
            <div className="rbg2">
            <div className="lg_title2">지금 바로 가입하세요!</div>
                <form onSubmit={onSubmit} className="joinForm">
                    <div>
                        <label htmlFor="user-id" className="bld"/>
                        <input name="user-id"  value={id} required onChange={onChangeId} className="tbox" placeholder="아이디를 입력하세요." />
                    </div>
                    <div>
                        <label htmlFor="user-nick" className="bld" />
                        <input name="user-nick" value={nick} required onChange={onChangeNick} className="tbox" placeholder="닉네임을 입력하세요."/>
                    </div>
                    <div>
                        <label htmlFor="user-password" className="bld" />
                        <input name="user-password" type="password" value={password} required onChange={onChangePassword} className="tbox" placeholder="비밀번호를 입력하세요." />
                    </div>
                    <div>
                        <label htmlFor="user-password-chk" className="bld" />
                        <input name="user-password-chk" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} className="tbox" placeholder="비밀번호를 확인하세요." />
                        {passwordError && <div style={{color:'red'}}>비밀번호가 일치하지 않습니다.</div>}
                    </div>
                    <div>
                        <input type="checkbox" name="user-term" checked={term} onChange={onChangeTerm} />개인정보 수집 및 이용에 동의합니다.
                        {termError && <div style={{color:'red'}}>약관에 동의하셔야합니다.</div>}
                    </div>
                    <div className="joinBtn">
                        <button type="submit" className="btn" loading={isSigningUp}>가입하기</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Join;


