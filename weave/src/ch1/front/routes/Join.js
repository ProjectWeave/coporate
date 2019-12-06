import React, { useState,useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

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
    const { isSigningUp,me } = useSelector(state=> state.user);

    // useEffect(() => {
    //     if(me){
    //         alert('로그인했으니 메인페이지로 이동합니다.');
    //         Router.push("/indexpage");
    //     }
    // }, [me && me.id]);


    const onSubmit= useCallback((e)=>{
        e.preventDefault();
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        dispatch({
            type : SIGN_UP_REQUEST,
            data : {
                id,
                password,
                nick,
            },
        });
    },[password, passwordCheck, term]);

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
        <div>
            <form onSubmit={onSubmit}>
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
                <div style={{ marginTop:10 }}>
                    <button htmlType="submit" loading={isSigningUp}>가입하기</button>
                </div>
            </form>
        </div>
    );
};

export default Join;


