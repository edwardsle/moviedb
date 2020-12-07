import React, { Component, Fragment } from 'react';
import { MDBContainer } from 'mdbreact';
import Spinner from '../layout/Spinner';
import MovieListCardItem from '../movie/MovieListCardItem';
import { Consumer } from '../../context';
import axios from 'axios';

class MostPopularTVs extends Component {
  state = {
    movie_list: []
  };

  componentDidMount(){
    axios.get(`https://imdb-api.com/en/API/MostPopularTVs/k_54e996be`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Consumer>
        {value => {
            const { movie_list } = value;
            if(movie_list === undefined || movie_list.length === 0){
              return <Spinner />
            } else {
              return (
                <MDBContainer className="mt-5">
                <h1 className="h1">Most Popular TV Shows</h1>             
                  {movie_list.items.map(item => (
                    <MovieListCardItem movie={item}/>
                  ))}
                </MDBContainer>
              );
            }
        }}
      </Consumer>
    );
  }  
}

export default MostPopularTVs;
