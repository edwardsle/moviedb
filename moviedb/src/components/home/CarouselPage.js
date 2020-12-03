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
              src="/img/firstslide.jpg"
              alt="First slide"
            />
          </MDBView>
          <MDBCarouselCaption style={{ background: 'rgba(0,0,0,0.7)' }}>
            <h3 className="h3-responsive">The Croods: A New Age</h3>
            <p>Animation, Adventure, Comedy | Director: Joel Crawford | 2020</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="/img/secondslide.jpg"
              alt="Second slide"
            />
          </MDBView>
          <MDBCarouselCaption style={{ background: 'rgba(0,0,0,0.7)' }}>
            <h3 className="h3-responsive">Wonder Woman 1984</h3>
            <p>Action, Adventure, Fantasy | Director: Patty Jenkins | 2020</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="/img/thirdslide.jpg"
              alt="Second slide"
            />
          </MDBView>
          <MDBCarouselCaption style={{ background: 'rgba(0,0,0,0.7)' }}>
            <h3 className="h3-responsive">Monster Hunter</h3>
            <p>Action, Adventure, Fantasy | Director: Paul W.S. Anderson | 2020</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;
