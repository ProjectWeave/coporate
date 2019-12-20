import React from 'react';
import Link from 'next/link';
//import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
//import Contents from '../routes/Contents';
//import Member from '../routes/Member';
import './Menu.css';
import './reset.css';

 const Menu = () => {
  
  return (
    <div className="top">
      <ul className="menubox">
        <li className="menu_g">내 그룹</li>
      </ul>           
    </div>
  );
};      

export default Menu;
