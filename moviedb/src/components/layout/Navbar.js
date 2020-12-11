import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavLink, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBContainer, MDBCol, MDBBadge } from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.timeout = 0;
  }

  state = {
    isOpen: false,
    movieTitle: "",
    movie_list: [],
    fullname: "",
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({ movieTitle: e.target.value });
    var isInputDone = 0;
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      isInputDone = 1;
      console.log(isInputDone);
      if (isInputDone === 1) {
        axios.get('http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${this.state.movieTitle}')
          .then(res => {
            console.log("Search work");
            const movie_list = res.data.Search;
            this.setState({ movie_list:res.data.Search });
            console.log(this.state.movie_list);
          })
          .catch(err => {
            console.log("doesn't query");
            console.log(err)
          });
      }
    }, 1000);
  }

  componentDidMount() {
    this.authListenser();
  }

  authListenser(){
    axios.get("http://localhost:3001/user/login")
    .then((response) => {
      if(response.data.user){
        this.setState({fullname: response.data.user})
      }
      else{
        this.setState({fullname:""})
      }
    })
  }

  render() {
    return (
      <Router>
        {this.state.user}
        <MDBNavbar color="elegant-color" dark expand="md">
          <MDBContainer>
            <MDBNavbarBrand>
              <a href="/">
                <span className="warning-color border border-warning rounded p-2">
                  <strong className="dark-text">MovieDb</strong>
                </span>
              </a>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline"><MDBIcon icon="bars" /> Menu</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="dark" basic>
                      <MDBDropdownItem href="/"><MDBIcon icon="home" /> Home</MDBDropdownItem>
                      <MDBDropdownItem href="#!"><MDBIcon icon="list-ol" /> Charts</MDBDropdownItem>
                      <hr />
                      <MDBDropdownItem href="/movie">Single Movie</MDBDropdownItem>
                      <MDBDropdownItem href="/star">Single Star</MDBDropdownItem>
                      <MDBDropdownItem href="/search/result">Search Result</MDBDropdownItem>
                      <hr />
                      <MDBDropdownItem href="/search"><MDBIcon icon="search" /> Advanced Search <MDBIcon icon="angle-right" /></MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBCol>
                <div className="input-group md-form form-sm form-1 m-0 p-0">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-dark" id="basic-text1">
                      <MDBIcon className="text-white" icon="search" />
                    </span>
                  </div>
                  <input
                    className="form-control my-0 py-0 border border-left-0 rounded-right bg-white"
                    type="text"
                    name="movieTitle"
                    placeholder="Search movies ..."
                    onChange={this.onChange}
                    value={this.state.movieTitle}
                    aria-label="Search"
                  />
                </div>
                <ul className="list-group position-absolute" style={{ zIndex: "1000", width: "96.3%" }}>
                  {
                    (this.state.movie_list || []).map((val, key) => {
                      return (
                        <li className="list-group-item"><a href={`/movie/${val.imdbID}`}>{val.Title} ({val.Year})</a></li>
                      );
                    })
                  }
                </ul>
              </MDBCol>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="/account/cart">
                    <MDBIcon icon="shopping-cart" />
                    <MDBBadge color="danger" className="ml-1">0</MDBBadge>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="dark" basic>
                      {this.state.fullname ?
                        <>
                          <MDBDropdownItem href=""> {this.state.fullname}</MDBDropdownItem>
                          <MDBDropdownItem href="/logout"><MDBIcon icon="sign-out-alt" /> Logout</MDBDropdownItem>
                        </>
                        :
                        <>
                          <MDBDropdownItem href="/login"><MDBIcon icon="sign-in-alt" /> Log In</MDBDropdownItem>
                          <MDBDropdownItem href="/register"><MDBIcon icon="edit" /> Sign Up</MDBDropdownItem>
                        </>
                      }
                      <hr />
                      <MDBDropdownItem href="/account/cart">Cart</MDBDropdownItem>
                      <MDBDropdownItem href="/checkout">Checkout</MDBDropdownItem>
                      <hr />
                      <MDBDropdownItem href="/account/watchlist"><MDBIcon far icon="list-alt" /> Watchlists</MDBDropdownItem>
                      <MDBDropdownItem href="/account/orders"><MDBIcon icon="file-invoice-dollar" /> Order History</MDBDropdownItem>
                      <MDBDropdownItem href="/logout"><MDBIcon icon="sign-out-alt" /> Log Out</MDBDropdownItem>
                      <hr />
                      <MDBDropdownItem href="/help"><MDBIcon far icon="question-circle" /> Help Center</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Navbar;


