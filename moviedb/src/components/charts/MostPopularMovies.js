import React, { Fragment } from 'react';
import { MDBContainer } from 'mdbreact';
import Spinner from '../layout/Spinner';
import MovieListCardItem from '../movie/MovieListCardItem';
import { Consumer } from '../../context';
import axios from 'axios';

export default function MostPopularMovies() {
  const [list, setList] = React.useState([]);

  axios.get(`https://imdb-api.com/en/API/MostPopularMovies/k_k573whfn`)
    .then(res => {
      console.log(res.data);
      setList([... list, {
        id: list.id,
        rank: list.rank,
        rankUpDown: list.rankUpDown,
        title: list.title,
        fullTitle: list.fullTitle
      }])
    })
    .catch(err => console.log(err));

  return (
    <div>
      {list.map((item,key) => {
        
      })}
    </div>
  )
}
