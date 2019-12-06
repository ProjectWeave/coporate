import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';

import { Link } from 'next/link';
import Head from 'next/head';
import Menu from './Menu';
import Plus from './Plus';
import '../routes/Contents.css';
import '../routes/Templete.css';
import './GroupItem.css';
import Home from "../components/Home";
import About from "../routes/About";
import Login from "./Login";

const IndexPage = () => {
    return (
        <div className="groupitem"> 
            {/* <div>
                
                <Router>
                    <div style={{backgroundColor:"yellow"}}>
                        <Switch>
                        <Route exact path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/login" component={Login}/>
                        </Switch>
                    </div>
                </Router>
            </div> */}
            <Plus />
            <div className="contbox">
                <div className="dogimg"></div>
                <h1> 댕댕이집사 그룹</h1>
                <p>    
                    세젤예 댕댕이들 모여라~!
                </p>
            </div>
            
            <div className="contbox">
                <div className="travelimg"></div>
                <h1>세계대탐방그룹</h1>
                <p>
                    열심히 일한 당신, 떠나라.
                    열심히 노는 당신, 당신도 떠나라.
                </p>
            </div>
            
            <div className="contbox">
                <div className="foodimg"></div>
                <h1> 먹부림 그룹</h1>
                <p>
                    미식가 여러분 환영합니다~!
                </p>
            </div>
            
        </div>
    );
};

export default IndexPage;

