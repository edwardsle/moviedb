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
    axios.get(`https://imdb-api.com/en/API/MostPopularTVs/${process.env.REACT_APP_IMDB_KEY}`)
      .then(res => {
        const movie_list = res.data;
        this.setState({ movie_list });
        console(res.data);
      })
      .catch(err => console.log(err));
  }
  
  render() {
    if (this.state.movie_list === undefined && this.state.acessos.length === 0) {
      return (<Spinner />);
    } else {      
      return(
        <MDBContainer className="mt-5">
          <h1 className="h1">Most Popular TV Shows</h1>
          {(this.state.movie_list.items || []).map(item => (
            <MovieListCardItem movie={item}/>
          ))}
        </MDBContainer>
      );
    }
  }
}

export default MostPopularTVs;
