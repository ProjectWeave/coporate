import React,{ useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
//import Router from 'next/router';
import { LOAD_USER_REQUEST } from '../reducers/user';

import Header from './Header';
import Gmenu from './Gmenu';
import Home from './Home';
import IndexPage from './IndexPage';
import './Header.css';
import Cont from '../pages/Cont';
import './Grid.css';
import Router from 'next/router';

const AppLayout = ({children}) => {
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect((me) => {
        if(me){
            alert('로그인했으니 메인페이지로 이동합니다.');
            Router.push("/homepage");
        }

        if(!me){
            dispatch({
                type:LOAD_USER_REQUEST,
            });
        }
    }, []);

    useEffect(()=>{
      
    },[]);
   


    if(!me)return<><Home /></>
    // if(!isLoggedIn && Mode === 'clicked')
    // return
    // <>
    //     <Header />
    //     <div className="col-12">{children}</div>
    // </>
    if(me)
    return (
        <>
            <Header />
            <div>
                {/* <IndexPage /> */}
                {children}
                    
                {/* { isLoggedIn ? <IndexPage /> : <Home /> }       */}
            </div>
        </>
    );
};

AppLayout.propTypes={
    children:PropTypes.node,
};

export default AppLayout;
