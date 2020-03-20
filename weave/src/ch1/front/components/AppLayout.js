import React,{ useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import { LOAD_USER_REQUEST } from '../reducers/user';

import Header from './Header';
import Gmenu from './Gmenu';
import Home from './Home';
import './Header.css';
import './Grid.css';

const AppLayout = ({children}) => {

    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect((me) => {
        if(!me){
            dispatch({
                type:LOAD_USER_REQUEST,
            });
        }
    }, []);
   

    if(!me) return <Home />
    if(me)
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
        </>
    );
};

AppLayout.propTypes={
    children:PropTypes.node,
};

export default AppLayout;
