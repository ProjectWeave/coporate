import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
//import Router from 'next/router';

import Header from './Header';
import Gmenu from './Gmenu';
import Home from './Home';
import IndexPage from './IndexPage';
import './Header.css';
import Cont from '../pages/Cont';
import './Grid.css';

const AppLayout = ({children}) => {
    const { isLoggedIn } = useSelector(state => state.user);
    //const { setState } = useSelector(state => state.user);
    if(!isLoggedIn)return<><Home /></>
    // if(!isLoggedIn && Mode === 'clicked')
    // return
    // <>
    //     <Header />
    //     <div className="col-12">{children}</div>
    // </>
    const onChangePage =((e) => {
        
    });
    if(isLoggedIn)
    return (
        <>
            <Header />
            {/* <Gmenu /> */}
            <div>
                {/* <IndexPage /> */}
                {/* <Cont /> */}
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
