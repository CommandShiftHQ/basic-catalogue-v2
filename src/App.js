import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// mock data
import products from './data/products.json';

// components
import Navigation from './components/Navigation';
import PageNotFound from './components/PageNotFound';
import ProductDetails from './components/ProductDetails';
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div className="app">
      <Router>
        <h1>Example shop</h1>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route exact path="/products">
            <ProductList products={products} />
          </Route>
          <Route exact path="/about">
            <h1>About</h1>
          </Route>
          <Route exact path="/contact-us">
            <h1>Contact us</h1>
          </Route>
          <Route exact path="/product/:id">
            <ProductDetails />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
