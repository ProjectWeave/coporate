import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

// import Menu from './Menu';
//import Template from './Templete';
// import Member from './Member';
import './Menu.css';


class Menu extends Component{
  render(){
    return (
      <div className="top">
        <div className="menubox">
        <NavLink  exact to="/contents" className="menu_a" activeClassName="active">
            전체글
        </NavLink>            
        <NavLink to="/member" className="menu_m" activeClassName="active">
            멤버
        </NavLink>            
        </div>
      </div>

      );
  }
}

export default Menu;
