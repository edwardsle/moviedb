import React from 'react'
import { MDBIcon } from 'mdbreact';

const GenreList = (props) => {
    const { genre } = props;
    return (
        <li className="list-group-item"><a className="dark-text" href={`/genre/${genre.key}`}>{genre.value}</a></li>
    );
}

export default GenreList;
