import React from 'react';

import Login from '../components/Login';
import '../components/First.css';

const Home = () => {
    return (
        <div>
            
            <article className="lLg">
                <h2 className="bld">위브설명란</h2>
                <div className="wlogo"></div>
                <div className="tpic"></div>
            </article>
            <Login />
        </div>
    );
};

export default Home;