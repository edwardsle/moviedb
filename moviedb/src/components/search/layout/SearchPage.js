import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardHeader, MDBCardText, MDBIcon } from 'mdbreact';
import Result from "./Result";

class SearchPage extends Component {
    state ={
        movieTitle: '',
        movie_list: []
    }

    findMovie = (e) => {
        e.preventDefault();

        axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${this.state.movieTitle}`)
            .then(res => {
                //console.log(res.data);
                const movie_list = res.data;
                this.setState({ movie_list });
            })
            .catch(err => console.log(err));
    }

    onChange = (e) => {
        this.setState({ movieTitle: e.target.value });
      }

    render() {
        return (
            <MDBContainer>
                <MDBCard className="mt-5">
                <MDBCardHeader className="text-center bg-dark white-text"><h1><MDBIcon icon="search" /> Search Movies</h1></MDBCardHeader>
                <MDBCardBody>
                    <MDBCardText>
                        <form onSubmit={this.findMovie.bind()}>
                            <div className="input-group">
                                <input type="text" 
                                name="movieTitle"
                                value={this.state.movieTitle}
                                onChange={this.onChange}
                                className="form-control form-control-lg" 
                                placeholder="search movies" 
                                aria-label="Search Movies" 
                                aria-describedby="basic-addon" 
                                />
                                <button 
                                className="btn btn-dark btn-md my-0" 
                                type="submit">Search</button>
                            </div>
                        </form>                    
                    </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
                <Result movie_list={this.state.movie_list.Search || []}/>
                
            </MDBContainer>
        )
    }
}

export default SearchPage;
