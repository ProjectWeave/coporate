import React from 'react';
   
import Menu from "../components/Menu";
import "../components/Contents.css";

const Member = () => {
    return (
        <>
            <Menu />
            <div className="wrap">
                <div className="groupinfo">
                    <div className="groupimg"></div>
                    <div className="grouptext">
                        <h1>댕댕이집사 그룹</h1>
                        <p className="numMem">Member. 43</p>
                        <p>세젤예 댕댕이들 모여라~!</p>
                        <nav className="groupSubmitBtn">
                            <button className="gjoin">가입하기</button>
                            <button className="gout">그룹탈퇴</button>
                        </nav>
                    </div>
                </div>
                <div className="memberbox">
                    멤버목록
                </div>
            </div>

            
        </>
    );
};

export default Member;