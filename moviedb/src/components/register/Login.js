import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from "axios";

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    
    const submitForm = () => {
        axios.post("http://localhost:3001/user/login",{ 
            email:email,
            password:pass
        })
        .then((response)=>{
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    };

    return (
        <MDBContainer
            className='d-flex justify-content-center my-3 my-md-5'
            style={{ height: '100%', width: '100%'}}
        >
            <MDBRow>
                <MDBCol md='6'>
                <MDBCard style={{ width: "22rem" }}>
                <h5 className="card-header elegant-color white-text text-center py-4">
                    <strong>Log In</strong>
                </h5>
                    <MDBCardBody>
                    <form>
                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                        Your email
                        </label>
                        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                        Your password
                        </label>
                        <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
                        <div className="text-center mt-4">
                        <MDBBtn color="dark" type="submit">Login</MDBBtn>
                        </div>
                    </form>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
