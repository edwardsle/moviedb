import React from "react";
import React, { useEffect } from 'react';
import { MDBAlert, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from "axios";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        axios.defaults.withCredentials = true;
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    

    login = e => {
        e.preventDefault();
        axios.post("http://localhost:3001/user/login", {
            "email": email,
            "pass": pass
        }).then((response) => {
            if(response.data.message) {
                setLoginStatus(response.data.message);
            }
            else{
                localStorage.setItem("token", response.data.token)
            }
        })
    }

    render() {
        <MDBContainer
            className='d-flex justify-content-center my-3 my-md-5'
            style={{ height: '100%', width: '100%' }}
        >
            <MDBRow>
                <MDBCol md='6'>
                    <MDBCard style={{ width: "22rem" }}>
                        <h5 className="card-header elegant-color white-text text-center py-4">
                            <strong>Log In</strong>
                        </h5>
                        <MDBCardBody>
                            {message && <div className="alert alert-danger">{message}</div>}
                            <form>
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    Your email
                        </label>
                                <input type="email" onChange={this.handleChange} id="defaultFormLoginEmailEx" className="form-control" />
                                <br />
                                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                    Your password
                        </label>
                                <input type="password" onChange={this.handleChange} id="defaultFormLoginPasswordEx" className="form-control" />
                                <div className="text-center mt-4">
                                    <MDBBtn onClick={submitForm} color="dark" type="submit">Login</MDBBtn>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    }
}