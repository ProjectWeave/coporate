// import React from 'react';

// import Information from '../components/Information';
// import Login from '../components/Login';
// import '../components/First.css';

// const HomePage = () => {
//     return (
//         <div>
//             <Information />
//             <Login />
//         </div>
//     );
// };

// export default HomePage;

import React from 'react';
import { useSelector } from 'react-redux';
import Home from '../components/Home';
import PostForm from '../components/PostForm';
import '../components/First.css';

const HomePage = () => {
  const { isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  return (
    <div>
      {/* {isLoggedIn && <Home />} */}
      {mainPosts.map((c) => {
        return (
          <div key={c} post={c} />
        );
      })}
    </div>
  );
};

export default HomePage;


