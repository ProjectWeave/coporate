import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './GroupItem.css'

// 그룹폴더 안에있는 그룹박스
const GroupBox = ({gpost}) => {

    // const { poster } = useSelector(state => state.gpost);

    return (
        <div className="groupinfo">
                <div className="groupimg">
                    <img src=""/>
                </div>
                <div className="grouptext">
                    <h1> {gpost.title} </h1>
                    <p className="numMem">Member. 43</p>
                    <p> {gpost.descp} </p>
                    <nav className="groupSubmitBtn">
                        <button className="gjoin">가입하기</button>
                        <button className="gout">그룹탈퇴</button>
                    </nav>
                </div>
        </div>
    );
};
GroupBox.propTypes={
    gpost: PropTypes.shape({
        User: PropTypes.object,
        descp: PropTypes.string,
        img: PropTypes.string,
        title: PropTypes.string,
    }),
};
export default GroupBox;