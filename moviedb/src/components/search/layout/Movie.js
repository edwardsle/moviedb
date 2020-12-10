import React from 'react';
import '../../components.css';

const Movie = ({ children }) => {
  return (
    <div className='result-demo'>
      <ul>{children}</ul>
    </div>
  );
};

export default Movie;
