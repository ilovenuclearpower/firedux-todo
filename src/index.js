import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import {configureStore} from 'redux-starter-kit';
import * as serviceWorker from './serviceWorker.js';

const store = configureStore ( {reducer: reducers} )

  ReactDOM.render(
    <Provider store={store}>
      <App className = "Global" />
    </Provider>,
    document.getElementById('root')
  );
  serviceWorker.register();
