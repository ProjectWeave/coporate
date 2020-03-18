import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './GroupItem.css'


const GroupBox = () => {

    const {grouptit, grouptext } = useSelector(state=>state.user);

    return (
        <div className="groupinfo">
                <div className="groupimg"></div>
                <div className="grouptext">
                    <h1> {grouptit} </h1>
                    <p className="numMem">Member. 43</p>
                    <p> {grouptext} </p>
                    <nav className="groupSubmitBtn">
                        <button className="gjoin">가입하기</button>
                        <button className="gout">그룹탈퇴</button>
                    </nav>
                </div>
        </div>
    );
};

// GroupBox.propTypes={
//     post: PropTypes.shape({
//         User: PropTypes.object,
//         content: PropTypes.string,
//         img: PropTypes.string,
//     }),
// };


export default GroupBox;