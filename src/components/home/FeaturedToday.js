import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

const FeaturedToday = () => {
  return (
    <MDBContainer className="mt-5">
      <h1 className="h1">Featured Today</h1>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={false} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="dark">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="dark">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="dark">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="dark">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="dark">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="dark">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="dark">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="dark">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="dark">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default FeaturedToday;
