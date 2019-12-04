import React from 'react';
//import {NavLink} from 'react-router-dom';
import { Link } from 'next/link';

import './Header.css';

const Header = () => {
    return (
        <div className="header">
          <div className="logo_w" activeClassName="active" />
            
          <div className="profile">
            {/* 프로필이미지 */}
            {/* 더보기란 */}
            <button className="pfBtn" />
          </div>
          
          <div className="srcbox">
              <input type="text" placeholder="검색해보세요." className="txtbox" />  
              <input type="submit" value="Search" className="search" />
          </div>

        </div>
    );
};

export default Header;