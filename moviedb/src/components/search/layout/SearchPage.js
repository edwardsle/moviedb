import React, {Fragment} from 'react'
import { MDBContainer, MDBCard, MDBCardBody, MDBCardHeader, MDBCardText, MDBIcon, MDBFormInline, MDBBtn, MDBInput } from 'mdbreact'

export default function SearchPage() {
    return (
        <MDBContainer>
            <MDBCard className="mt-5">
            <MDBCardHeader className="text-center bg-dark white-text"><h1><MDBIcon icon="search" /> Search Movies</h1></MDBCardHeader>
            <MDBCardBody>
                <MDBCardText>
                <div className="input-group">
                    <input type="text" className="form-control form-control-lg" placeholder="search movies" aria-label="Search Movies" aria-describedby="basic-addon" />
                    <button class="btn btn-dark btn-md my-0" type="submit">Search</button>
                </div>
                </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    )
}
