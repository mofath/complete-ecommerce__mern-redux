import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './views/protected.route'


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/react-popper/dist/index.umd.js';
import '../node_modules/popper.js';

import HomePage from './views/home-page/home-page';
import AdminPage from './views/admin-page/admin-page';
import ProducsPage from './views/products-page/products-page';
import ProductDetailPage from './views/product-details-page/product-details-page';
import CartPage from './views/cart-page/cart-page';

import Navbar from './views/utils/navbar/navbar'
import Footer from './views/utils/footer/footer'


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage}  ></Route>
          <Route exact path="/products" component={ProducsPage} />
          <Route exact path="/product/:productId" component={ProductDetailPage} />

          {/* <ProtectedRoute exact path="/admin" component={AdminPage} /> */}
          {/* <ProtectedRoute exact path="/user/cart" component={CartPage} /> */}
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/user/cart" component={CartPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
