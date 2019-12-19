import React from 'react';
import Link from 'next/link';
//import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
//import Contents from '../routes/Contents';
//import Member from '../routes/Member';
import './Menu.css';
import './reset.css';

 const Menu = () => {
  //  const OnLight = (e) => {
  //   e.preventDefault();
  //   var onclass = document.getElementsByClassName(".menu_a");
  //   onclass.onClick =function(){
  //     alert("클릭");
  //   }
  //  };
  const test1 = (e) => {
    e.preventDefault();
    let classa = document.querySelector(".menu_a")
    let classm = document.querySelector(".menu_m")
    classa.setAttribute("id","on");
    classm.setAttribute("id","");
  };

  const test2 = (e) => {
    e.preventDefault();
    let classa = document.querySelector(".menu_a")
    let classm = document.querySelector(".menu_m")
    classa.setAttribute("id","");
    classm.setAttribute("id","on");
  };

  return (
    <div className="top">
      <ul className="menubox">
        <Link><a href="/contents" onClick={test1}><li className="menu_a">전체글</li></a></Link>
        <Link><a href="/member" onClick={test2}><li className="menu_m">멤버</li></a></Link>
      </ul>           
    </div>
  );
};      

export default Menu;
