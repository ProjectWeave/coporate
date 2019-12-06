import React from 'react';
import PropTypes from 'prop-types';

import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';

import AppLayout from '../components/AppLayout';
import { LOG_IN_SUCCESS } from '../reducers/user';
import Home from '../components/Home';


const Weave = ({Component, store}) => {
    if(LOG_IN_SUCCESS)
    return (
        <Provider store={store}>
                <AppLayout>
                    <Component />
                </AppLayout>
        </Provider>
    );
};


Weave.propTypes={
    Component: PropTypes.elementType.isRequired,
    store : PropTypes.object.isRequired,
};

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
  
  export default withRedux(configureStore)(Weave);