import React from "react";
import Mainheader from "../header/Mainheader";
import Footer from "../main/Footer";
import styled from "styled-components";
import Gallery1 from "../images/Gallery1.png";
import Gallery2 from "../images/Gallery2.png";
import Gallery3 from "../images/Gallery3.png";
import Gallery4 from "../images/Gallery4.png";
import Gallery5 from "../images/Gallery5.png";
import Gallery6 from "../images/Gallery6.png";
import Gallery7 from "../images/Gallery7.png";
import Gallery8 from "../images/Gallery8.png";
import Gallery9 from "../images/Gallery9.png";
import Gallery10 from "../images/Gallery10.png";
import sidenum from "../images/sidenum.png";

const Gallery = () => {
  const Container = styled.div`
    max-width: 130rem;
    padding: 0 4.2rem;
    margin: 0 auto;
    font-family: "roboto", sans-serif;
    @media (max-width: 768px) {
      padding: 0 0.5rem;
    }
  `;
  const Buttonarrow = styled.button`
    border: none;
    padding: 0.6em 1.2em;
    font-size: 1.8;
    font-weight: 400;
    font-family: inherit;
    background-color: #ffffff;
    cursor: pointer;
    transition: border-color 0.25s;
    border: 1px solid #e9ecef;

    color: #343a40;
    &:hover {
      background-color: #f8f9fa;
    }
    &:focus,
    focus-visible {
      background-color: #e9ecef;
    }
  `;

  const H2p = styled.h2`
    margin-top: 130px;
    color: #bdbdbd;
    font-weight: 300;
    font-size: 48px;
    padding: 0;
    margin-bottom: 30px;
    font-family: roboto, sans-serif;
    line-height: 0.5;
  `;
  const H2g = styled.h2`
    color: #212529;
    font-weight: 700;
    font-size: 48px;
    padding: 0;
    margin-bottom: 40px;
    font-family: roboto, sans-serif;
    line-height: 0.5;
  `;
  const DivImg = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
        z-index: 1;
        position: relative;
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `;
  const Divarrow = styled.div`
    display: flex;
    align-items: left;
    gap: 10px;
  `;
  const DivImgBtn = styled.div`
    display: flex;
    align-items: left;
    gap: 30px;
    margin-bottom: 80px;
    margin-top: 50px;
  `;

  return (
    <Container>
      <Mainheader />
      <section>
        <div>
          <H2p>Photo</H2p>
          <H2g>Gallery</H2g>
          <DivImg>
            <img src={Gallery1} alt="gallery img" />
            <img src={Gallery2} alt="gallery img" />
            <img src={Gallery3} alt="gallery img" />
            <img src={Gallery4} alt="gallery img" />
            <img src={Gallery5} alt="gallery img" />
            <img src={Gallery6} alt="gallery img" />
            <img src={Gallery7} alt="gallery img" />
            <img src={Gallery8} alt="gallery img" />
            <img src={Gallery9} alt="gallery img" />
            <img src={Gallery10} alt="gallery img" />
          </DivImg>
          <DivImgBtn>
            <img src={sidenum} alt="" />
            <Divarrow>
              <Buttonarrow>←</Buttonarrow>
              <Buttonarrow>→</Buttonarrow>
            </Divarrow>
          </DivImgBtn>
        </div>
      </section>
      <Footer />
    </Container>
  );
};
export default Gallery;
