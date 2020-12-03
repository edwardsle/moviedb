import React from 'react';
import '../components.css';

const Movie = ({ children }) => {
  return (
    <div className='result-demo'>
      <div>{children}</div>
    </div>
  );
};

export default Movie;
