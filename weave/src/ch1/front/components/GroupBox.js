import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './GroupItem.css'


const GroupBox = ({gpost}) => {

    // const { GroupPosts } = useSelector(state => state.gpost);
    // const { grouptit, grouptext } = this.props;

    return (
        <div>
            <Link href="/cont"><a>
                <div className="contbox">
                    <div className="group_img"></div>
                    <h1> {gpost.id} </h1>
                    <p>
                        {gpost.content}
                    </p>
                </div>
            </a></Link>
        </div>
    );
};

GroupBox.propTypes={
    gpost: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
    }),
};


export default GroupBox;