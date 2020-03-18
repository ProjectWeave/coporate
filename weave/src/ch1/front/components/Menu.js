import React,{useState, useCallback } from 'react';
import Link from 'next/link';
//import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './Menu.css';
import './reset.css';
import { Router } from 'next/router';

 const Menu = () => {

  const [ Mode, setMode ] = useState('read');

  // const modify = useCallback((e)=>{
  //   e.preventDefault();
  //   Router.push("/cont");
  // })

  const test1 = (e) => {
    e.preventDefault();
    let classa = document.querySelector(".menu_a")
    let classm = document.querySelector(".menu_m")
    classa.setAttribute("id","on");
    classm.setAttribute("id","");
    // modify();
    //Router.push("/contents");
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
        <li className="menu_a" id="on" onClick={test1}>전체글</li>
        <li className="menu_m"  onClick={test2}>멤버</li>
      </ul>           
    </div>
  );
};      

export default Menu;
