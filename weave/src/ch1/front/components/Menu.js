import React from 'react';
import Link from 'next/link';
//import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
//import Contents from '../routes/Contents';
//import Member from '../routes/Member';
import './Menu.css';

 const Menu = () => {
  return (
    <div className="top">
        <div className="menubox">
          <Link href="/contents" className="menu_a" activeClassName="active">
              <a>전체글</a>
          </Link>            
          <Link href="/member" className="menu_m" activeClassName="active">
              <a>멤버</a>
          </Link>            
        </div>
      </div>
  );
};      

export default Menu;


{/* <Switch>
    <Route exact path="/" component={Contents}/>
    <Route path="/contents" component={Member}/>
 </Switch>
          */}

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
