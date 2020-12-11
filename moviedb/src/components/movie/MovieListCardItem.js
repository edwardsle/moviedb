import React from 'react';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardHeader, MDBCardImage, MDBIcon } from 'mdbreact';
const MovieListCardItem = (props) => {
  const { movie } = props;

  return (
    <>
    <div className="row align-items-center mb-2">
      <div className="col-md-3">
        <div className="view overlay mb-lg-0 mb-4">
        <MDBCard style={{ width: "100px" }} className="bg-dark">
          <MDBCardHeader className="bg-dark white-text text-center">
            <strong>{movie.rank}</strong>
          </MDBCardHeader>
          <Link to={`/movie/${movie.id}`}>
            <MDBCardImage className="img-fluid" src={movie.image} waves />
          </Link>          
        </MDBCard>
        </div>
      </div>
      <div className="col-md-9">
        <p className="dark-grey-text font-weight-bold">{movie.title}</p>        
        <p>{movie.crew}</p>
        <p>Year: {movie.year}</p>
        <Link to={`/movie/${movie.id}`} className="btn btn-dark btn-md mx-0 btn-rounded">
              <i className="fas fa-chevron-right"></i> Read more
        </Link>        
        <button type="button" className="btn btn-sm btn-outline-dark btn-rounded waves-effect"><MDBIcon far icon="bookmark" /> Wishlist</button>
        <button type="button" className="btn btn-sm btn-outline-dark btn-rounded waves-effect"><MDBIcon icon="cart-plus" /> Add to Cart</button>
      </div>
      <hr/>
    </div>
    <hr/>
    </>
  )
}

export default MovieListCardItem;
