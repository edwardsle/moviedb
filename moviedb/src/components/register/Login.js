import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from "axios";
import {Redirect} from "react-router-dom";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
            loggedIn: false
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
        const { email, password } = this.state;
        axios.post("http://localhost:3001/user/login", {
            "email": email,
            "pass": password
        }).then((response) => {
            if (response.data.message) {
                this.setState({ error: response.data.message });
            }
            else {
                console.log(response);
                localStorage.setItem("token", "Bearer " + response.data.token)
                this.setState({ loggedIn: response.data.auth })
            }
        })
    }

    render() {
        // if (this.state.loggedIn) {
        //     return <Redirect to="/" />
        // }
        // else {
            return (
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
                                    {this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
                                    <form>
                                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                            Your email
                            </label>
                                        <input type="email" name="email" onChange={this.handleChange} id="defaultFormLoginEmailEx" className="form-control" />
                                        <br />
                                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                            Your password
                            </label>
                                        <input type="password" name="password" onChange={this.handleChange} id="defaultFormLoginPasswordEx" className="form-control" />
                                        <div className="text-center mt-4">
                                            <MDBBtn onClick={this.login} color="dark" type="submit">Login</MDBBtn>
                                        </div>
                                    </form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            )
        }

    // }
}