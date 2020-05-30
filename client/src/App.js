import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/react-popper/dist/index.umd.js';
import '../node_modules/popper.js';

import Home from './views/home/home';
import Admin from './views/admin/admin';	
import Producs from './views/products/products';
import ProductDetail from './views/productDetail/productDetail';
import Cart from './views/cart/cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">  
        <Route exact path="/" component={Home}  ></Route>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/products" component={Producs}/>
        <Route exact path="/product/:productId" component={ProductDetail}/>
        <Route exact path="/user/cart" component={Cart}/>
        </div>
      </BrowserRouter>
  );
  }
export default App;
