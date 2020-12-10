import React from 'react'
import {  MDBIcon } from "mdbreact";

const SearchBox = (props) => {
    return (
        <div className="input-group md-form form-sm form-1 m-0 p-0">
            <div className="input-group-prepend">
                <span className="input-group-text bg-dark" id="basic-text1">
                    <MDBIcon className="text-white" icon="search" />
                </span>
            </div>
            <input 
            className="form-control my-0 py-0 border border-left-0 rounded-right bg-white" 
            type="text" 
            name="movieTitle" 
            placeholder = { props.placeholder }
            onChange = { props.onChange }
            aria-label="Search" 
            />
        </div>
    )
}

export default SearchBox;
