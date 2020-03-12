import React from 'react';
import { useSelector } from 'react-redux';

import './GroupItem.css'


const GroupBox = () => {

    const { GroupPosts } = useSelector(state => state.post);
    const { grouptit, grouptext } = this.props;

    return (
        <div>
            <Link href="/cont"><a>
                <div className="contbox000000">
                    <div className="group_img"></div>
                    <h1> {grouptit} </h1>
                    <p>
                        {grouptext}
                    </p>
                </div>
            </a></Link>
        </div>
    );
};

export default GroupBox;