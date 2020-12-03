import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
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
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h5 text-center mb-4">Sign up</p>
                        <div className="grey-text">
                            <MDBInput label="Your Firstname" icon="user" group type="text" validate error="wrong"
                                success="right" />
                            <MDBInput label="Your Lastname" icon="user" group type="text" validate error="wrong"
                                success="right" />
                            <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                                success="right" onChange={(e)=> {setEmail(e.target.value);}}/>
                            <MDBInput label="Your password" icon="lock" group type="password" onChange={(e)=> {setPass(e.target.value);}} validate />
                        </div>
                        <div className="text-center">
                            <MDBBtn onClick={submitForm} color="primary">Register</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
