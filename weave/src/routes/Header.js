import React from 'react';
import {NavLink} from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <div className="header">
          <NavLink to="/" className="logo_w" activeClassName="active"></NavLink>
          <div>
            
          </div>
          <div className="profile">
            {/* 프로필이미지 */}
            {/* 더보기란 */}
            <button className="pfBtn"></button>
          </div>
          
          <div className="srcbox">
              <input type="text" placeholder="검색해보세요." className="txtbox"></input>  
              <input type="submit" value="Search" className="search"></input>
          </div>

        </div>
    );
};

export default Header;