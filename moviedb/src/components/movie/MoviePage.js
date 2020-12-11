import React, { Component } from 'react';
import {MDBBtn, MDBJumbotron, MDBIcon, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StarList from './StarList';
import GenreList from './GenreList';
import jwt from 'jsonwebtoken';

class MoviePage extends Component {
    state = {
        movie: {}
    }

    componentDidMount() {
        axios.get(`https://imdb-api.com/en/API/Title/${process.env.REACT_APP_IMDB_KEY}/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ movie: res.data });
            })
            .catch(err => console.log(err));
    }

    watchlistAdd = e => {
        e.preventDefault();
        axios.post('http://localhost:3001/user/addtowatchlist',{
            customerid: jwt.decode(localStorage.getItem('token')).id,
            title: this.state.movie.title,
        }).then((response) => {
            
        }).catch((error)=> {
            console.log(error);
        })
    }

    render() {
        const { movie } = this.state;
        const starlists = (movie.starList || []).map(starlist => (
            <StarList key={starlist.id} star={starlist} />
        ));
        const genrelists = (movie.genreList || []).map(genrelist => (
            <GenreList key={genrelist.id} genre={genrelist} />
        ));
        return (
            <MDBContainer className="mt-5">
                <MDBRow>
                    <MDBCol>
                        <MDBJumbotron>
                            <MDBRow>
                                <MDBCol md="8">
                                    <h2 className="h1 display-3">{movie.title}</h2>
                                    <p className="lead">
                                        Rating: {movie.imDbRating} <MDBIcon far icon="star" />
                                    </p>
                                    <MDBBtn onClick={this.watchlistAdd}color="secondary">Add to watchlist</MDBBtn>
                                    <hr className="my-2" />
                                    <p><strong>Genre(s):</strong> <ul className="list-group list-group-horizontal-sm">{genrelists}</ul></p>
                                    <p><strong>Year:</strong> {movie.year}</p>
                                    <p><strong>Director: </strong>{movie.directors}</p>
                                    <p><strong>Stars:</strong> {movie.stars}</p>
                                    <ul className="list-group list-group-flush">{starlists}</ul>
                                </MDBCol>
                                <hr className="my-2" />
                                <MDBCol md="4">
                                    <img className="img-fluid" src={movie.image} />
                                </MDBCol>
                            </MDBRow>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default MoviePage;
