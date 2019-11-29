// import React from 'react';
// import Head from 'next/head';
// import PropTypes from 'prop-types';
// import withRedux from 'next-redux-wrapper';
// import { applyMiddleware, compose, createStore } from 'redux';
// import { Provider } from 'react-redux';
// import createSagaMiddleware from 'redux-saga';

// import AppLayout from '../components/AppLayout';
// import reducer from '../reducers';
// import rootSaga from '../sagas';

// const Weave = ({ Component, store }) => {
//     return ( //레이아웃은 여기서코딩
//         <Provider store={store}>
//             <Head>
//                 <title>Weave</title>
//             </Head> 
//             <AppLayout>
//                 <Component />  {/*next에서 넣어주는 컴포넌트 */}
//             </AppLayout>
            
//         </Provider>
//     );
// };

// Weave.propTypes={  
//     Component: PropTypes.elementType.isRequired,
//     store : PropTypes.object.isRequired,
// };

// const configureStore = (initialState, options) => {
//     const sagaMiddleware = createSagaMiddleware();
//     const middlewares = [sagaMiddleware];
//     const enhancer = process.env.NODE_ENV === 'production'
//       ? compose(applyMiddleware(...middlewares))
//       : compose(
//         applyMiddleware(...middlewares),
//         !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
//       );
//     const store = createStore(reducer, initialState, enhancer);
//     sagaMiddleware.run(rootSaga);
//     return store;
//   };
  
//   export default withRedux(configureStore)(Weave);


import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import Information from '../components/Information';
import Login from '../components/Login';
import '../components/First.css';

import AppLayout from '../components/AppLayout';
import reducer from '../reducers';
import rootSaga from '../sagas';

const Bird = ({ Component, store }) => {
    return ( //레이아웃은 여기서코딩
        <Provider store={store}>
            <Information />
            <Login />
        </Provider>
    );
};

Bird.propTypes={  
    Component: PropTypes.elementType.isRequired,
    store : PropTypes.object.isRequired,
};

// const middleware = (store) => (next) => (action) => {
//     console.log(action);//다른작업들을 여기에
//     next(action);
// }; //curring 기법

// connect(mapStateToProps)(Component)
// hoc(Component);

// const hoc = (mapStateToProps) => (Component) => () => {
//     console.log("I'm hoc");
//     return(
//         <Component props={mapStateToProps()} />
//     ) //하위오더 컴포넌트
// };


/////////// 리액트+리덕스 //그냥외우자..//////////
// export default WithRedux((initialState, options)=>{
//     const sagaMiddleware = createSagaMiddleware();
//     const middlewares = [sagaMiddleware];   //여기에다가 store 커스터마이징
//     const enhancer = process.env.NODE_ENV === "production"
//         ? compose(applyMiddleware(...middlewares),)
//         : compose(
//             applyMiddleware(...middlewares),
//             !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
//         );
//     const store = createStore(reducer, initialState, enhancer);
//     sagaMiddleware.run(rootSaga);
//     return store;
// })(Bird);

const configureStore = (initialState, options) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : compose(
        applyMiddleware(...middlewares),
        !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
      );
    const store = createStore(reducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);
    return store;
  };
  
  export default withRedux(configureStore)(Bird);


