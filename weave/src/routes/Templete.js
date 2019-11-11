import React, {Component} from 'react';

import './Templete.css';
import File from "../components/File";

class Templete extends Component{
  constructor(props){
    super(props)
    console.log('모달창떠라');
    this.state = {
      
    }
    this.ModalPop = this.ModalPop.bind(this)
  }
  ModalPop(event) {
    var pop = document.getElementsByClassName('pop');
 
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0]; 

    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
      pop.style.display = "block";
  }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        pop.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == pop) {
            pop.style.display = "none";
      }
  }
  

 }///ModalPop///

  render(){
    return (
      <div>
        {/* 구분선 */}
        <hr className="hrline"></hr>
        {/* 그룹만들기창 */}
        <File></File>
        {/*  Trigger/Open The Modal  */}
        <div className="btnbox">
          <p>그룹만들기</p>
          <button id="myBtn" onClick={function(){
            var pop = document.querySelector('.pop');
            pop.style.display="block"
          }}></button>
        </div>
        {/* The Modal */}
        <div id="myModal" className="modal">
          {/*  Modal content  */}
          <div className="modal-content">
            <span className="close">&times;</span>
          </div>
        </div>
        {/* 터지방지막 */}
        <div className="block"></div>

      </div>
    );
  }
};

export default Templete;