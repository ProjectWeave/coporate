import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Router from 'next/router';

import Header from './Header';
import Menu from './Menu';
import Home from './Home';
import IndexPage from './IndexPage';
import './Header.css';
import Head from 'next/head';
import Login from './Login';
import './Grid.css';

const AppLayout = ({children}) => {
    const { isLoggedIn } = useSelector(state => state.user);
    const { setState } = useSelector(state => state.user);
    if(!isLoggedIn)return<><Home /></>
    //if(!isLoggedIn && this.target.mode===true)
    return (
        <>
            <Header />
            <Menu />
            <div className="col-12">
                {children}
                    
                {/* { isLoggedIn ? <IndexPage /> : <Home /> }       */}
                {/* 로그인에 성공하면 인덱스페이지로 안했으면 홈으로 */}
                {/* {children} */}
            </div>
        </>
    );
};

AppLayout.propTypes={
    children:PropTypes.node,
};

export default AppLayout;


// 참고코드
// useEffect(() => {
//     if (me) {
//       alert('로그인했으니 메인페이지로 이동합니다.');
//       Router.push('/');
//     }
//   }, [me && me.id]);