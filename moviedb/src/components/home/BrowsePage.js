import React from "react";

import {  MDBContainer, MDBBtn, MDBBtnGroup, MDBCol, MDBRow } from
"mdbreact";

const CarouselPage = () => {
    return (
        <MDBContainer>
            <h1 className="h1">Browse Movies By Title</h1>
            <MDBRow>
                <MDBCol md='12' className="mb-4 text-center">
                    <MDBBtnGroup size="lg">
                        <MDBBtn href="browse/0" color="elegant">0</MDBBtn>
                        <MDBBtn href="browse/1" color="elegant">1</MDBBtn>
                        <MDBBtn href="browse/2" color="elegant">2</MDBBtn>
                        <MDBBtn href="browse/3" color="elegant">3</MDBBtn>
                        <MDBBtn href="browse/4" color="elegant">4</MDBBtn>
                        <MDBBtn href="browse/5" color="elegant">5</MDBBtn>
                        <MDBBtn href="browse/6" color="elegant">6</MDBBtn>
                        <MDBBtn href="browse/7" color="elegant">7</MDBBtn>
                        <MDBBtn href="browse/8" color="elegant">8</MDBBtn>
                        <MDBBtn href="browse/9" color="elegant">9</MDBBtn>
                    </MDBBtnGroup>
                    <MDBBtnGroup size="lg">
                        <MDBBtn href="browse/a" color="elegant">A</MDBBtn>
                        <MDBBtn href="browse/b" color="elegant">B</MDBBtn>
                        <MDBBtn href="browse/c" color="elegant">C</MDBBtn>
                        <MDBBtn href="browse/d" color="elegant">D</MDBBtn>
                        <MDBBtn href="browse/e" color="elegant">E</MDBBtn>
                        <MDBBtn href="browse/f" color="elegant">F</MDBBtn>
                        <MDBBtn href="browse/g" color="elegant">G</MDBBtn>
                        <MDBBtn href="browse/h" color="elegant">H</MDBBtn>
                        <MDBBtn href="browse/i" color="elegant">I</MDBBtn>
                    </MDBBtnGroup>
                    <MDBBtnGroup size="lg">
                        <MDBBtn href="browse/j" color="elegant">J</MDBBtn>
                        <MDBBtn href="browse/k" color="elegant">K</MDBBtn>
                        <MDBBtn href="browse/l" color="elegant">L</MDBBtn>
                        <MDBBtn href="browse/m" color="elegant">M</MDBBtn>
                        <MDBBtn href="browse/n" color="elegant">N</MDBBtn>
                        <MDBBtn href="browse/o" color="elegant">O</MDBBtn>
                        <MDBBtn href="browse/p" color="elegant">P</MDBBtn>
                        <MDBBtn href="browse/q" color="elegant">Q</MDBBtn>
                    </MDBBtnGroup>
                    <MDBBtnGroup size="lg">
                        <MDBBtn href="browse/r" color="elegant">R</MDBBtn>
                        <MDBBtn href="browse/s" color="elegant">S</MDBBtn>
                        <MDBBtn href="browse/t" color="elegant">T</MDBBtn>
                        <MDBBtn href="browse/u" color="elegant">U</MDBBtn>
                        <MDBBtn href="browse/v" color="elegant">V</MDBBtn>
                        <MDBBtn href="browse/w" color="elegant">W</MDBBtn>
                        <MDBBtn href="browse/x" color="elegant">X</MDBBtn>
                        <MDBBtn href="browse/y" color="elegant">Y</MDBBtn>
                        <MDBBtn href="browse/z" color="elegant">Z</MDBBtn>
                    </MDBBtnGroup>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default CarouselPage;
