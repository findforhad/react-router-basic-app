import React, { Component } from "react";
import { Route } from "react-router-dom";
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
          <Route component={Products} path="/products" />
          <Route component={Posts} path="/posts" />
          <Route component={Dashboard} path="/admin" />
          <Route component={Home} path="/" exact />
        </div>
      </div>
    );
  }
}

export default App;
