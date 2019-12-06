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
        <li className="menu_a">전체글</li>
        <li className="menu_m">멤버</li>
      </ul>           
    </div>
  );
};      

export default Menu;


//import React, {Component} from 'react';
// import {NavLink} from 'react-router-dom';

// // import Menu from './Menu';
// //import Template from './Templete';
// // import Member from './Member';
// import './Menu.css';


// class Menu extends Component{
//   render(){
//     return (
//       <div className="top">
//         <div className="menubox">
//         <NavLink  exact to="/contents" className="menu_a" activeClassName="active">
//             전체글
//         </NavLink>            
//         <NavLink to="/member" className="menu_m" activeClassName="active">
//             멤버
//         </NavLink>            
//         </div>
//       </div>

//       );
//   }
// }

// export default Menu;
