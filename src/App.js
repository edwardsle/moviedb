import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';
import "./index.css";
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
    );
  }
}

export default App;
