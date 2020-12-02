import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-0"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
              alt="First slide"
            />
          </MDBView>
          <MDBCarouselCaption>
            <MDBView>
              <MDBMask overlay="black-light" />
              <h3 className="h3-responsive white-text">Light mask</h3>
              <p className="white-text">First text</p>
            </MDBView>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
              alt="Second slide"
            />
          </MDBView>
          <MDBCarouselCaption>
          <MDBView>
            <MDBMask overlay="black-light" />
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </MDBView>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
              alt="Third slide"
            />
          </MDBView>
          <MDBCarouselCaption>
          <MDBView>
            <MDBMask overlay="black-light" />
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </MDBView>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;
