import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import store from './_store/store'
import './index.css';


const app = <BrowserRouter>
  <Provider store={store} >
    <App />
  </Provider>
</BrowserRouter>;


//enable concurent  
ReactDOM.render(app, document.getElementById('root'));
// ReactDOM.unstable_createRoot(document.getElementById('root')).render(app)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA



