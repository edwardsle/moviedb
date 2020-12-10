import React from 'react'
import { MDBIcon } from 'mdbreact';

const StarList = (props) => {
    const { star } = props;
    return (
        <li className="list-group-item"><a className="dark-text" href={`/star/${star.id}`}><MDBIcon icon="chevron-right" /> {star.name}</a></li>
    );
}

export default StarList;
