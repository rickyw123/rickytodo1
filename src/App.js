import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/product/:id' component={ProductDetail} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </Router>
  )
}

export default App;