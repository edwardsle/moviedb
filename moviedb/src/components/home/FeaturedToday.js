import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

const FeaturedToday = () => {
  return (
    <MDBContainer className="mt-5">
      <h1 className="h1">Charts</h1>
      <MDBCarousel activeItem={1} length={1} slide={true} showControls={false} showIndicators={false} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <a href="charts/most-popular">
                  <MDBCardImage className="img-fluid" src="img/charts/most-popular.jpg" />
                  </a>
                  <MDBCardBody>
                    <MDBCardTitle>Most Popular Movies</MDBCardTitle>
                    <MDBCardText>
                      As determined by IMDb Users
                    </MDBCardText>
                    <MDBBtn color="dark" href="charts/most-popular">View Chart</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <a href="charts/most-popular-tvs">
                  <MDBCardImage className="img-fluid" src="img/charts/most-popular-tvs.jpg" />
                  </a>
                  <MDBCardBody>
                    <MDBCardTitle>Most Popular TV Shows</MDBCardTitle>
                    <MDBCardText>
                      As determined by IMDb Users
                    </MDBCardText>
                    <MDBBtn color="dark" href="charts/most-popular-tvs">View Chart</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <a href="charts/top-rated-movies">
                  <MDBCardImage className="img-fluid" src="img/charts/top-rated-movies.jpg" />
                  </a>
                  <MDBCardBody>
                    <MDBCardTitle>Top Rated Movies</MDBCardTitle>
                    <MDBCardText>
                      Ratings from at least 25000 users
                    </MDBCardText>
                    <MDBBtn color="dark" href="charts/top-rated-movies">View Chart</MDBBtn>
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
