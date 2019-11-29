import React from 'react';

import Information from '../components/Information';
import Login from '../components/Login';
import '../components/First.css';

const Home = () => {
    return (
        <div>
            <Information />
            <Login />
        </div>
    );
};

export default Home;