import React from "react";
import homeimage from "../../homeimage.png";
import Footer from "../main/Footer";
import sidenum from "../images/sidenum.png";
import ReadMore1 from "../images/ReadMore1.png";
import ReadMore2 from "../images/ReadMore2.png";
import ReadMore3 from "../images/ReadMore3.png";
import projectimg1 from "../images/projectimg1.png";
import projectimg2 from "../images/projectimg2.png";
import projectimg3 from "../images/projectimg3.png";
import projectimg4 from "../images/projectimg4.png";
import projectimg5 from "../images/projectimg5.png";
import contactUsImg from "../images/contactUsImg.png";

import styled from "styled-components";
import Mainheader from "../header/Mainheader";

const Main = () => {
  const Container = styled.div`
    max-width: 130rem;
    padding: 0 4.2rem;
    margin: 0 auto;
    font-family: "roboto", sans-serif;
    @media (max-width: 768px) {
      padding: 0 0.5rem;
    }
  `;

  const SectionHome = styled.div`
    display: flex;
    justify-content: space-between;

    overflow: hidden;
    padding: 0;
    margin: 100px 0 0 0;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;
  const Img = styled.img`
    width: 680px;
    height: 600px;
    object-fit: cover;
    @media (max-width: 768px) {
      margin-top: 20px;
    }
  `;
  const DivImg = styled.div`
    position: relative;
    width: 60%;
  `;

  const Buttonv = styled.button`
    position: absolute;
    display: none;
    z-index: 1;
    font-size: 10px;
    font-weight: 400;
    display: block;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 40px;
    padding-left: 20px;
    top: 560px;
    border-radius: 0;
    border: none;
    letter-spacing: 0.1rem;
    background-color: #ffffff;
    cursor: pointer;
    &:hover,
    active {
      background-color: #f8f9fa;
      border: 2px solid #495057;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
      padding-top: 14px;
      padding-bottom: 14px;
    }
    @media (max-width: 768px) {
      top: 582px;
      padding-top: 14px;
      padding-bottom: 14px;
      &: hover {
        padding-top: 11px;
        padding-bottom: 11px;
        border: 2px solid #495057;
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
      }
    }
  `;
  const ButtonR = styled.button`
    font-size: 10px;
    font-weight: 400;
    display: block;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 40px;
    padding-left: 20px;
    margin-top: 35px;
    background-color: #ffffff;
    border-radius: 0;
    border: none !important;
    letter-spacing: 0.1rem;
    &:hover {
      border: none;
      background-color: #dee2e6;
    }
  `;

  const Divarrow = styled.div`
    display: flex;
    align-items: left;
    gap: 10px;
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
  const ImgSide = styled.img`
    height: 35px;
    width: 120px;
    align-items: left;
    margin-top: 70px;
    @media (max-width: 768px) {
      margin-top: 40px;
      width: 100px;
    }
  `;
  const Divtext = styled.div`
    display: inline-block;
  `;

  const H1p = styled.h1`
    color: #bdbdbd;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 48px;
    padding: 0;
    margin-top: 200px;
    margin-bottom: 30px;
    font-family: roboto, sans-serif;
    line-height: 0.5;
    @media (max-width: 768px) {
      margin-top: 60px;
      font-size: 32px;
      margin-bottom: 10px;
    }
  `;

  const H1l = styled.h1`
    padding: 0;

    font-size: 48px;
    font-weight: 700;
    text-align: left;

    margin-bottom: 80px;
    @media (max-width: 768px) {
      font-size: 32px;
      margin-bottom: 40px;
    }
  `;

  // about section
  const Sectionabout = styled.section`
    display: flex;
    align-items: center;
    background-color: #fbfbfb;

    margin-top: 70px;
    margin-bottom: 30px;
    padding-top: 20px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;
  const Divreadimg = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    align-items: center;
    width: 60%;
    :nth-child(1) {
      justify-self: end;
    }
    :nth-child(3) {
      justify-self: end;
      height: 120%;
      width: 270px;
      margin-top: 30px;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      :nth-child(1) {
        width: 100%;
        height: 214px;
      }
      :nth-child(2) {
        width: 100%;
        height: 214px;
      }
      :nth-child(3) {
        width: 100%;
        height: 100%;
        margin-top: 0 !important;
      }
    }
  `;
  const Img2 = styled.img`
    grid-column: 2/3;
    grid-row: 1/3;
  `;
  const H2about = styled.h2`
    font-size: 48px;
    font-weight: 300;
    font-style: roboto, sans-serif;
    color: #bdbdbd;

    margin-bottom: 40px;
    @media (max-width: 768px) {
      margin-top: 40px;
      font-size: 32px;
      margin-bottom: 20px;
    }
  `;

  const Plorem = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    color: #000000;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  `;

  const Divreadtext = styled.div`
    display: inline-block;
    padding-right: 20px;
    @media (max-width: 768px) {
      padding: 0 0.5rem;
    }
  `;
  //mision statements
  const SectionMission = styled.section`
    margin-top: 90px;
  `;
  const H2heading = styled.h2`
    text-align: start;
    font-size: 48px;
    font-weight: 300;
    color: #bdbdbd;
    margin-top: 100px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      font-size: 32px;
    }
  `;

  const Divspancontainer = styled.div`
    display: flex;
    justify-content: left;
    gap: 300px;
    margin-top: 0;
    margin-bottom: 0;
    @media (max-width: 768px) {
      flex-direction: column;

      gap: 10px;
    }
  `;
  const Divnumtext = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 40px;
    margin-top: 20px;
    @media (max-width: 768px) {
      justify-content: flex-start;
    }
  `;
  const SpanNum = styled.span`
    display: block;
    padding-top: 0;
    font-size: 130px;
    font-weight: 900;
    text-align: center;
    line-height: 1;
    color: #f2f2f2;
    @media (max-width: 768px) {
      font-size: 64px;
      font-weight: 900;
    }
  `;
  const Plorem2 = styled.span`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    color: #000000;
    margin-top: 20px;
    @media (max-width: 768px) {
      font-size: 14px;
      font-weight: 300;
      line-height: 1.4;
      margin-top: 0;
    }
  `;
  //project section
  const SectionPorject = styled.section`
    position: relative;
    padding-bottom: 80px;
  `;
  const ButtonP = styled.button`
    font-size: 10px;
    font-weight: 400;
    display: flex;
    align-items: end;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 40px;
    padding-left: 20px;
    position: absolute;
    bottom: 20px;
    right: 5px;
    margin-bottom: -05px;
    background-color: #212529;
    color: #ffffff;

    letter-spacing: 0.1rem;

    &:hover {
      border: none;
      background-color: #dee2e6;
      color: #212529;
    }
  `;
  const ButtonP2 = styled.button`
    font-size: 10px;
    font-weight: 400;
    display: flex;
    align-items: end;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 40px;
    padding-left: 20px;
    position: absolute;

    margin-bottom: -05px;
    background-color: #212529;
    color: #ffffff;

    border-radius: 0;
    border: none;
    letter-spacing: 0.1rem;
    transition: background-color 0.3s ease;
    &:hover {
      border: none;
      background-color: #dee2e6;
      color: #212529;
    }

    @media (max-width: 768px) {
      font-size: 8px;
      font-weight: 400;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-right: 20px;
      padding-left: 10px;
    }
  `;

  const DivProjectimg = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    overflow: hidden;

    :nth-child(1) {
      width: 50%;
      object-fit: cover;
      filter: grayscale(100%) brightness(50%);
    }

    :nth-child(2) {
      width: 50%;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      :nth-child(1) {
        width: 100%;
      }

      :nth-child(2) {
        width: 100%;
      }
    }
  `;

  const DivProjectimg2 = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 20px;
    overflow: hidden;

    :nth-child(1) {
      width: 30%;
    }
    :nth-child(2) {
      width: 50%;
    }

    :nth-child(3) {
      width: 30%;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      :nth-child(1) {
        width: 100%;
        height: 167px;
      }

      :nth-child(2) {
        width: 100%;
        height: 167px;
      }
      :nth-child(3) {
        width: 100%;
        height: 167px;
      }
    }
  `;
  const DivImgButton = styled.div`
    position: absolute;
    left: 60px;
    top: 15px;
    @media (max-width: 768px) {
      left: 55px;
      top: -13px;
    }
  `;
  const H2reading2 = styled.h2`
    text-align: start;
    font-size: 48px;
    font-family: roboto, sans-serif;
    font-weight: 700;
    color: #ffffff;
    margin-top: 100px;
    margin-bottom: 20px;
    transition: background-color 0.3s ease;
    @media (max-width: 768px) {
      font-size: 32px;
    }
  `;

  //section form
  const DivInput = styled.div`
    display: flex;
    gap: 2em;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;
  const FormInput = styled.form`
    display: flex;

    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    font-size: 48px;
    font-weight: 400;
    width: 50%;

    :nth-child(1) {
      padding: 10px;
      width: 100%;
      background-color: #f3f3f3;
      border: none;
      height: 100%;
    }
    :nth-child(2) {
      padding: 10px;
      width: 100%;
      background-color: #f3f3f3;
      border: none;
      height: 100%;
    }
    :nth-child(3) {
      padding: 10px;
      width: 100%;
      background-color: #f3f3f3;
      border: none;
      height: 100%;
    }
    :nth-child(4) {
      padding: 10px;
      width: 100%;
      background-color: #f3f3f3;
      border: none;
      height: 100%;
    }
    :nth-child(5) {
      padding: 10px;
      width: 100%;
      padding-bottom: 140px;
      background-color: #f3f3f3;
      border: none;
      height: 100%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  `;
  const ButtonP3 = styled.button`
    font-size: 10px;
    font-weight: 400;

    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 40px;
    padding-left: 20px;

    margin-top: 60px;
    margin-bottom: 60px;
    background-color: #212529;
    color: #ffffff;

    border-radius: 0;
    border: none;
    letter-spacing: 0.1rem;
    transition: background-color 0.3s ease;
    &:hover {
      border: none;
      background-color: #dee2e6;
      color: #212529;
    }
  `;
  const ImgContact = styled.img`
    width: 60%;
    justify-self: end;
    @media (max-width: 768px) {
      width: 100%;
    }
  `;

  return (
    <Container>
      <Mainheader />
      <SectionHome>
        <div>
          <Divtext>
            <H1p>Project</H1p>
            <H1l>Lorum</H1l>
          </Divtext>
          <Divarrow>
            <Buttonarrow>←</Buttonarrow>
            <Buttonarrow>→</Buttonarrow>
          </Divarrow>
          <div>
            <ImgSide src={sidenum} alt="side numbers" />
          </div>
        </div>
        <DivImg>
          <Img src={homeimage} alt="project image" />
          <Buttonv>VIEW PROJECT →</Buttonv>
        </DivImg>
      </SectionHome>
      <Sectionabout>
        <Divreadimg>
          <img src={ReadMore1} alt="readmore img " />
          <Img2 src={ReadMore2} alt="readmore img" />
          <img src={ReadMore3} alt="readmore img" />
        </Divreadimg>
        <Divreadtext>
          <H2about>About</H2about>
          <Plorem>
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the
            <br /> industry's standard dummy text ever since the 1500s,
            <br /> when an unknown printer took a galley of type and
            <br /> scrambled it to make a type specimen book. It has <br />
            survived not only five centuries, but also the leap into <br />
            electronic typesetting, remaining essentially unchanged.
          </Plorem>
          <ButtonR>READ MORE → </ButtonR>
        </Divreadtext>
      </Sectionabout>
      <SectionMission>
        <H2heading>Main Focus/Mission Statement</H2heading>
        <Divspancontainer>
          <Divnumtext>
            <SpanNum>1</SpanNum>
            <Plorem2>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
              <br /> Sed efficitur, lectus et
              <br /> facilisis placerat.
            </Plorem2>
          </Divnumtext>
          <Divnumtext>
            <SpanNum>2</SpanNum>
            <Plorem2>
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Sed efficitur, lectus et <br />
              facilisis placerat, magna mauris porttitor <br />
              tortor, a auctor est felis ut nisl.
            </Plorem2>
          </Divnumtext>
        </Divspancontainer>
      </SectionMission>
      <SectionPorject>
        <H2heading>Our Project</H2heading>
        <DivProjectimg>
          <img src={projectimg1} alt="projectimg" />

          <img src={projectimg2} alt="projectimg" />
        </DivProjectimg>
        <DivProjectimg2>
          <img src={projectimg3} alt="projectimg" />
          <img src={projectimg4} alt="projectimg" />
          <img src={projectimg5} alt="projectimg" />
        </DivProjectimg2>
        <ButtonP>ALL PROJECTS →</ButtonP>
        <DivImgButton>
          <H2reading2>
            Sample <br />
            Project
          </H2reading2>
          <ButtonP2>VIEW MORE →</ButtonP2>
        </DivImgButton>
      </SectionPorject>

      <section>
        <H2heading>Contact Us</H2heading>
        <DivInput>
          <FormInput>
            <input type="name" placeholder="Name*" required />
            <input
              type="tel"
              placeholder="Phone Number*"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
            <input type="email" placeholder="Email*" required />
            <input type="text" placeholder="Interested In" />
            <input type="text" placeholder="Message*" required />
          </FormInput>

          <ImgContact src={contactUsImg} alt="img contact" />
        </DivInput>
        <ButtonP3>SEND EMAIL→</ButtonP3>
      </section>
      <Footer />
    </Container>
  );
};

export default Main;
