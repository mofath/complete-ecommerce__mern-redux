import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './views/_Layout/Layout';
import Spinner from './views/UI/Spinner/Spinner'

import LandingScreen from './views/Screens/Landing/Landing';

const ProductScreen = React.lazy(() => { return import('./views/Screens/Product/Product'); });
const CartScreen = React.lazy(() => { return import('./views/Screens/Cart/Cart'); });
const UserOrdersScreen = React.lazy(() => { return import('./views/Screens/UserOrders/UserOrders'); });
const OrderDetailScreen = React.lazy(() => { return import('./views/Screens/OrderDetail/OrderDetail'); });
const AdminScreen = React.lazy(() => { return import('./views/Screens/Admin/Admin'); });
const HomeScreen = React.lazy(() => { return import('./views/Screens/Home/Home'); });

const App = () =>
  <div className="app">
    <Layout>
      <Switch>
        <Route path="/product/:id" exact render={(props) => <Suspense fallback={Spinner}><ProductScreen {...props} /></Suspense>} />
        <Route path="/cart" exact render={() => <Suspense fallback={Spinner}><CartScreen /></Suspense>} />
        <Route path="/user/orders" exact render={() => <Suspense fallback={Spinner}><UserOrdersScreen /></Suspense>} />
        <Route path="/user/order/:id" exact render={(props) => <Suspense fallback={Spinner}><OrderDetailScreen  {...props} /></Suspense>} />
        <Route path="/admin" exact render={() => <Suspense fallback={Spinner}><AdminScreen /></Suspense>} />
        <Route path="/home" exact render={() => <Suspense fallback={Spinner}><HomeScreen /></Suspense>} />
        <Route path="/" exact component={LandingScreen} />
      </Switch>
    </Layout>
  </div>


export default App;


// <Route path='*' exact={true} component={NotFoundPage} />
// <Route exact path="/not-authorized" component={NotAuthorizedPage} />
// <PrivateRoute exact path="/user/cart"  roles={["user","admin"]} component={CartPage} />
// <PrivateRoute exact path="/admin" roles={["admin"]} component={AdminPage} />


