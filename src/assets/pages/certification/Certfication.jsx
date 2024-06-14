import React from "react";
import Mainheader from "../header/Mainheader";
import Footer from "../main/Footer";

import styled from "styled-components";

const Certfication = () => {
  const Container = styled.div`
    max-width: 130rem;
    padding: 0 4.2rem;
    margin: 0 auto;
    font-family: "roboto", sans-serif;
    @media (max-width: 768px) {
      padding: 0 0.5rem;
    }
  `;

  const H2C = styled.h2`
    margin-top: 130px;
    color: #bdbdbd;
    font-weight: 300;
    font-size: 36px;
    padding: 0;
    margin-bottom: 30px;
    font-family: roboto, sans-serif;
    line-height: 0.5;
  `;

  const H2C2 = styled.h2`
    color: #212529;
    font-weight: 700;
    font-size: 36px;
    padding: 0;
    margin-bottom: 40px;
    font-family: roboto, sans-serif;
    line-height: 0.5;
    margin-bottom: 450px;
  `;

  return (
    <Container>
      <Mainheader />
      <H2C>Company</H2C>
      <H2C2>Certificaions</H2C2>
      <Footer />
    </Container>
  );
};
export default Certfication;
