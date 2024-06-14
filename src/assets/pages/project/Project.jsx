import React from "react";
import Mainheader from "../header/Mainheader";
import Footer from "../main/Footer";
import styled from "styled-components";
const Project = () => {
  const Container = styled.div`
    max-width: 130rem;
    padding: 0 4.2rem;
    margin: 0 auto;
    font-family: "roboto", sans-serif;
  `;
  const Span = styled.span`
    font-size: 24px;
    font-weight: 300;
    color: #212529;
    font-family: roboto, sans-serif;
    display: flex;
    margin-top: 200px;
    align-items: center;
    justify-content: center;
    margin-bottom: 400px;
  `;
  return (
    <Container>
      <Mainheader />

      <Span>no page found</Span>
      <Footer />
    </Container>
  );
};
export default Project;
