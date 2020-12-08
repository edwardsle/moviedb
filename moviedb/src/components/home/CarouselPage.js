import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
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
<<<<<<< Updated upstream
              src="/img/main-slide/firstslide.jpg"
              alt="First slide"
            />
          </MDBView>
          <MDBCarouselCaption style={{ background: 'rgba(0,0,0,0.7)' }}>
            <h3 className="h3-responsive">The Croods: A New Age</h3>
            <p>Animation, Adventure, Comedy | Director: Joel Crawford | 2020</p>
=======
              src="/img/firstslide.jpg"
              alt="First slide"
            />
          </MDBView>
          <MDBCarouselCaption>
            <MDBView>
              <MDBMask overlay="black-light" />
              <h3 className="h3-responsive white-text">The Croods 2: A New Age</h3>
              <p className="white-text">Animation, Adventure, Comedy | 2020 | Director: Joel Crawford</p>
            </MDBView>
>>>>>>> Stashed changes
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="/img/main-slide/secondslide.jpg"
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
              src="/img/main-slide/thirdslide.jpg"
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
