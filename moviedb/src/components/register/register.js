import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from "axios";

export default function Register() {
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    
    const submitForm = () => {
        axios.post("http://localhost:3001/user/signup",{ 
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
            style={{ height: '100%', width: '100%' }}
        >
            <MDBRow>
                <MDBCol md='6'>
                <MDBCard style={{ width: "22rem" }}>
                <h5 className="card-header elegant-color white-text text-center py-4">
                    <strong>Sign Up</strong>
                </h5>
                    <MDBCardBody>
                    <form>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                        Your name
                        </label>
                        <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormAccountAddress" className="grey-text">
                        Address
                        </label>
                        <input type="text" id="defaultFormAccountAddress" className="form-control" />
                        <br/>
                        <hr/>
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                        Your email
                        </label>
                        <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                        Confirm your email
                        </label>
                        <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                        Your password
                        </label>
                        <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
                        <div className="text-center mt-4">
                        <MDBBtn color="dark" type="submit">
                            Register
                        </MDBBtn>
                        </div>
                    </form>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
