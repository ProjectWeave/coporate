import React from 'react';

import File from '../components/File';
import './Templete.css';
import './GroupItem.css';


const Plus = () => {

    const popBlock = (e) => {
        e.preventDefault();
        let pop = document.querySelector('.pop');
        let block = document.querySelector(".block");
        pop.style.display="block"
        block.style.display="block";
    };

    return (
        <>
            <File />
            <div className="btnbox contbox">
                    <p className="plustit">그룹만들기</p>
                    <button type="button" id="myBtn" onClick={popBlock} />
            </div>
            {/* 터치방지막 */}
            <div className="block"></div>
        </>
    );
};





export default Plus;

// import React,{ Component } from 'react';

// class Plus extends Component {
//     render() {
//         return (
//             <div className="btnbox">
//                 <p>그룹만들기</p>
//                 <button id="myBtn" onClick={function(){
//                     var pop = document.querySelector('.pop');
//                     var block = document.querySelector(".block");
//                     pop.style.display="block"
//                     block.style.display="block"
//                 }}></button>
//             </div>
            
//         );
//     }
// }

// export default Plus;
