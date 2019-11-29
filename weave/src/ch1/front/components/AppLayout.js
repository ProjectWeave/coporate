// import React from 'react';
// import './Header.css';
// import Link from 'next/link';
// import PropTypes from 'prop-types';

// import { useSelector } from 'react-redux';
// import Login from '../components/Login';
// import Dog from '../components/Dog';

// //임의로만든데이터객체
// const dummy={
//     nickname:'두리안', 
//     Post:[],
//     Followings:[],
//     Followers:[],
//     isLoggedIn:false,
// };


// const AppLayout = ({children}) => {
//   const { isLoggedIn } = useSelector(state => state.user);
//     return (
//         <div className="header">
//           <Link href="/home" className="logo_w" activeClassName="active"><a></a></Link>
//           {/* 프로필이미지 */}
//           <div className="profile">
//             {/* 더보기란 */}
//             <button className="pfBtn"></button>
//           </div>
          
//           <div className="srcbox">
//               <input type="text" placeholder="검색해보세요." className="txtbox"></input>  
//               <input type="submit" value="Search" className="search"></input>
//           </div>
//           {isLoggedIn ? <Dog /> : <Login />}
//           {children}
//         </div>
//     );
// };

// export default AppLayout;


import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Header from './Header';
import Menu from './Menu';
import Home from './Home';
import IndexPage from './IndexPage';
import './Header.css';

const AppLayout = ({children}) => {
    const { isLoggedIn } = useSelector(state => state.user);
    return (
        <div>
            {/* /<Header></Header> */}
            <Menu></Menu>
            { isLoggedIn===true? <IndexPage /> : <Home /> }      
            {/* 로그인에 성공하면 인덱스페이지로 안했으면 홈으로 */}
            레이아웃
            {children}
        </div>
    );
};

AppLayout.propTypes={
    children:PropTypes.node,
};

export default AppLayout;