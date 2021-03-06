import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';

import Link from 'next/link';
import Plus from './Plus';
import './Contents.css';
import './Templete.css';
import './GroupItem.css';


const IndexPage = () => {
    const { GroupPosts } = useSelector(state => state.post);
    
    return (
        <div className="groupitem">
            <Plus />
            <Link href="/cont"><a>
                <div className="contbox">
                    <div className="dogimg"></div>
                    <h1> 댕댕이집사 그룹</h1>
                    <p>    
                        세젤예 댕댕이들 모여라~!
                    </p>
                </div>
            </a></Link>
            
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
            {/* 그룹 올라갈곳 */}
            { GroupPosts.map((c) => {
                return (
                    <Link  href="/cont"><a>
                        <div className="contbox" >
                            <div className="group_img" key={c}> 
                                <img src={c.img} style={{width:"100%"}} /> 
                            </div>
                            <h1>{c.content}</h1>
                            <p>
                                {c.gtext}
                            </p>
                        </div>
                    </a></Link>
                );
            })}
            
        </div>
    );
};

export default IndexPage;
