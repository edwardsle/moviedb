import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';
import MostPopularMovies from './components/charts/MostPopularMovies';
import MostPopularTVs from './components/charts/MostPopularTVs';
import BestMovies from './components/charts/BestMovies';
import Register from "./components/register/Register";
import Login from "./components/register/Login";
import Cart from "./components/account/cart";
import SearchPage from "./components/search/layout/SearchPage";
import SearchResultPage from "./components/search/Result";

import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/account/cart" component={Cart} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/search/result" component={SearchResultPage} />
            <Route exact path="/charts/most-popular" component={MostPopularMovies} />
            <Route exact path="/charts/most-popular-tvs" component={MostPopularTVs} />
            <Route exact path="/charts/top-rated-movies" component={BestMovies} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
      
    );
  }
}

export default App;
