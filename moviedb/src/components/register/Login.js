import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from "axios";

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [user,setPerson] = React.useState([]);
    
    const submitForm = () => {
        console.log(email);
        console.log(pass);
        axios.get("http://localhost:3001/user/login", {
            params: {
                "email":email,
                "pass":pass
            }
        })
        .then((response)=>{
            console.log(response);
            // this.setPerson({user: response.data});
        }, (error) => {
            console.log(error);
        });
        
        console.log(axios);
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
                        <input type="email" onChange={(e)=> {setEmail(e.target.value);}} id="defaultFormLoginEmailEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                        Your password
                        </label>
                        <input type="password" onChange={(e)=> {setPass(e.target.value);}} id="defaultFormLoginPasswordEx" className="form-control" />
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
