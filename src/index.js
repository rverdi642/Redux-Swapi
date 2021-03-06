import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
import logger from 'redux-logger';

import rootReducer from './reducers';
// import { FETCHING, FETCHED, ERROR} from './actions';

// const sniffer = store => next =>action => {
//   console.group(action.type);
//   console.log('Action:',action)


// const result =  next(action)//if this is the last middleware, next points to store.dispatch
// console.log('New State', store.getState);
// console.groupEnd();

// return result;
// };

const middleware = applyMiddleware(logger, thunk);

const store = createStore(rootReducer , middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
