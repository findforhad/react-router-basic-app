import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route render={props => <Products {...props} />} path="/products" />
            <Route component={Posts} path="/posts/:year?/:month?" />
            <Redirect from="/asd" to="/" />
            <Route component={Dashboard} path="/admin" />
            <Route component={Home} path="/" exact />
            <Route component={NotFound} path="/not-found" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
