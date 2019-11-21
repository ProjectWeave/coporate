import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import File from "../components/File";
import Plus from "../components/plus";
import Dog from "../components/Dog";
import Travel from "../components/Travel";
import Food from "../components/Food";

import './Templete.css';
import '../components/GroupItem.css';

class Templete extends Component{
  render(){
    return (
      <div>
        {/* 구분선 */}
        <span className="hrline"></span>
        {/* 그룹만들기창 */}
        <File></File>
        {/* 컨텐츠그룹 */}
        <div className="groupitem">
          <Plus></Plus>
          <NavLink  exact to="/dog" className="" activeClassName="active">
            <Dog></Dog>
          </NavLink>            
          <NavLink to="/travel" className="" activeClassName="active">
            <Travel></Travel>
          </NavLink>            
          <NavLink to="/food" className="" activeClassName="active">
            <Food></Food>
          </NavLink>        
        </div>
      
        {/* 터치방지막 */}
        <div className="block"></div>
      </div>
    );
  }
};

export default Templete;