import React from 'react';
import { BrowserRouter as Router,Route,NavLink} from 'react-router-dom';

import Header from "./Header";    
import Menu from "../components/Menu";

import "./Member.css";

const Member = () => {
    return (
        <div>
            <Header></Header>
            <Menu></Menu>
        </div>
    );
};

export default Member;