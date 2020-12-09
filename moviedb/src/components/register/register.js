import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from "axios";

export default function Register() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [address, setAddress] = React.useState("");
    
    const submitForm = e => {
        
        axios.post("http://localhost:3001/user/signup",{ 
            name:name,
            email:email,
            password:pass,
            address:address
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
                        <input type="text" onChange={(e)=> {setName(e.target.value);}} i id="defaultFormRegisterNameEx" className="form-control" required/>
                        <br />
                        <label htmlFor="defaultFormAccountAddress" className="grey-text">
                        Address
                        </label>
                        <input type="text" onChange={(e)=> {setAddress(e.target.value);}} i id="defaultFormAccountAddress" className="form-control" required/>
                        <br/>
                        <hr/>
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                        Your email
                        </label>
                        <input type="email" onChange={(e)=> {setEmail(e.target.value);}} id="defaultFormRegisterEmailEx" className="form-control" required />
                        <br />
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                        Your password
                        </label>
                        <input type="text" onChange={(e)=> {setPass(e.target.value);}} i id="defaultFormRegisterPasswordEx" className="form-control" required/>
                        <div className="text-center mt-4">
                        <MDBBtn  onClick={submitForm} color="dark" type="submit">
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
