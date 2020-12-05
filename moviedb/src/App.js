import React, { Component, Profiler } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';
import Register from "./components/register/register";
import Login from "./components/register/Login";
import Cart from "./components/account/cart";
import SearchResultPage from "./components/search/Result";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/account/cart" component={Cart} />
          <Route exact path="/search/result" component={SearchResultPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
