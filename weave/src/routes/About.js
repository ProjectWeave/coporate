import React from 'react';
import { BrowserRouter as Router,Route,NavLink} from 'react-router-dom';

import Header from "./Header";
import Templete from "./Templete";

// import './About.css';

const About = () => {
    return (
        <div>
            <Header></Header>
            <Templete></Templete>
        </div>
    );
};

export default About;