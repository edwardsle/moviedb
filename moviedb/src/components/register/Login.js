import React, { useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from "axios";
import Axios from 'axios';

export default function Login() {
    axios.defaults.withCredentials = true;

    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [userName, setUsername] = React.useState("");
    const [error, setError] = React.useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/user/auth").then((response) => {
            if (response.data.loggedIn == true){
                setUsername(response.data.user[0].full_name);
            }
        })
    }, []);

    const submitForm = e => {
        e.preventDefault()
        axios.get("http://localhost:3001/user/login", {
            params: {
                "email": email,
                "pass": pass
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    setError(response.data.message);
                }
            }, (error) => {
                console.log(error);
            });
    };
    
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
                            {error && <div className="alert alert-danger">{error}</div>}
                            {userName && <div className="alert alert-danger">{userName}</div>}
                            <form>
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    Your email
                        </label>
                                <input type="email" onChange={(e) => { setEmail(e.target.value); }} id="defaultFormLoginEmailEx" className="form-control" />
                                <br />
                                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                    Your password
                        </label>
                                <input type="password" onChange={(e) => { setPass(e.target.value); }} id="defaultFormLoginPasswordEx" className="form-control" />
                                <div className="text-center mt-4">
                                    <MDBBtn onClick={submitForm} color="dark" type="submit">Login</MDBBtn>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
