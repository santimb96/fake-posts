import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducers from "./reducers";

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;


ReactDOM.render(
  <Provider store={createStore(reducers, composeEnchancers(applyMiddleware(thunk)))}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
