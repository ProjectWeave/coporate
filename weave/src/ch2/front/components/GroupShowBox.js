import React,{ useEffect } from 'react';
import PropTypes from 'prop-types';
import './GroupItem.css';

const GroupShowBox = ({gpost}) => {

    return (
        <>
            <div className="contbox">
                <div className="group_img"> 
                    <img src={gpost.img} style={{width:"100%", height:"100%", backgroundColor:"pink"}} /> 
                </div>
                <h1> {gpost.title} </h1>
                <p> {gpost.descp} </p>
            </div>
        </>
    );
};

GroupShowBox.propTypes={
    gpost: PropTypes.shape({
        User: PropTypes.object,
        descp: PropTypes.string,
        img: PropTypes.string,
        title: PropTypes.string,
    }),
};

export default GroupShowBox;