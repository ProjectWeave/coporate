import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_GROUP_POSTS_REQUEST } from '../reducers/gpost';

import Link from 'next/link';
import './Contents.css';
// import './GroupItem.css';
import './Templete.css';
import Plus from './Plus';
import GroupShowBox from './GroupShowBox';


const IndexPage = () => {
    const dispatch = useDispatch();
    const { GroupPosts } = useSelector(state => state.gpost);

    // 그룹 로드하기
    useEffect(() => {
        dispatch({
          type: LOAD_GROUP_POSTS_REQUEST,
        });
      }, []);

    //  동적페이지링크
    const PostLink = (props) => (
        <Link href={`post?title=${props.title}`}>
            <div className="contbox" style={{cursor:"pointer"}}>
                <div className="group_img"> 
                    <img src={props.img} style={{width:"100%", height:"100%", backgroundColor:"pink"}} /> 
                </div>
                <h1> {props.title} </h1>
                <p> {props.descp} </p>
            </div>
        </Link>
    )

    return (
        <div className="groupitem">
            <Plus />

            <Link href="/cont" ><a>
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
            {/* { GroupPosts.map((val) => {
               return(
                <Link href="/cont" ><a>
                    <GroupShowBox key={val} gpost={val}/>
                </a></Link>
               );
            })} */}
            
            { GroupPosts.map((val) => {
                return(
                    <PostLink title={val.title}  key={val} gpost={val} >
                        <GroupShowBox key={val} gpost={val}/>
                    </PostLink>
                );
            })}
            
        </div>
    );
};

export default IndexPage;
