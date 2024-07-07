import React from "react";
import FooterLogo from "../images/FooterLogo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  const DivCon = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: black;
  `;
  const Sectionfooter = styled.section`
    background-color: black;
    margin: 0 !important;
    @media (max-width: 768px) {
      padding: 0 1.4rem;

      max-width: 768px;
    }
    @media (max-width: 1024px) {
      padding: 0 2rem;
      width: 1024px;
      margin: 0;
    }
  `;

  const Divfooter = styled.div`
    display: flex;
    padding-left: 30px;
    padding-right: 30px;
    justify-content: space-around;

    padding: 10px 0;
    background-color: black;
    font-family: roboto, sans-serif;
    @media (max-width: 768px) {
      flex-direction: column;
    }

    @media (max-width: 1024px
    min-width: 769px) {
      flex-direction: row;
    }
  `;

  const Img = styled.img`
    max-height: 300px;
    width: 250px;
    @media (max-width: 768px) {
      max-height: 250px;
      width: 100px;
    }
  `;
  const NavLink = styled(Link)`
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    font-family: inherit;

    text-decoration: none;
    font-family: inherit;
    @media (max-width: 768px) {
      font-size: 14px;
      font-weight: 400;
    }
  `;
  const Ul = styled.ul`
    display: flex;
    list-style-type: none;
    flex-direction: column;
    gap: 30px;
    @media (max-width: 768px) {
      gap: 10px;
    }
  `;
  const Ulsocial = styled.ul`
    display: flex;
    list-style-type: none;
    flex-direction: row;
    gap: 10px;
    color: white;
  `;
  const H1footer = styled.h1`
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    color: #fff;
    font-family: inherit;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 20px;
    }
  `;
  const DivContain = styled.div`
    margin-top: 50px;
  `;
  const ListContact = styled.li`
    display: flex;
    font-size: 16px;
    color: #ffffff;
    font-family: inherit;

    line-height: 1.6;
    @media (max-width: 768px) {
      font-size: 14px;
      c
    }
  `;
  const ListSocials = styled.li`
    font-size: 16px;
    color: #ffffff;

    font-family: inherit;
    letter-spacing: 3px;
    line-height: 1.6;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  `;
  const Alink = styled.a`
    color: #ffffff;
  `;
  const DivCopyR = styled.div`
    display: flex;
    align-items: center;
    padding: 0;

    background-color: black;

    justify-content: center;

    border-top: 0.5px solid #868e96;
    padding-top: 20px;
    padding-bottom: 20px;
    @media (max-width: 768px) {
      font-size: 10px;
    }
  `;

  return (
    <DivCon>
      <Sectionfooter>
        <Divfooter>
          <DivContain>
            <Img src={FooterLogo} alt="Logo" />
          </DivContain>

          <DivContain>
            <div>
              <H1footer>Information</H1footer>
            </div>

            <nav>
              <Ul>
                <li>
                  <NavLink to="/">Main</NavLink>
                </li>

                <li>
                  <NavLink to="/gallery">Gallery</NavLink>
                </li>

                <li>
                  <NavLink to="/project">Project</NavLink>
                </li>

                <li>
                  <NavLink to="/certification">Certification</NavLink>
                </li>

                <li>
                  <NavLink to="/contact">Contacts</NavLink>
                </li>
              </Ul>
            </nav>
          </DivContain>

          <DivContain>
            <div>
              <H1footer>Contacts</H1footer>
            </div>

            <Ul>
              <ListContact>
                <FaHome style={{ marginRight: "10px" }} />
                <span>
                  1234 Sample Street
                  <br />
                  Austin Texas 78704
                </span>
              </ListContact>
              <ListContact>
                <FaPhone style={{ marginRight: "10px" }} />
                <span>512.333.2222</span>
              </ListContact>
              <ListContact>
                <FaEnvelope style={{ marginRight: "10px" }} />
                <span>sampleemail@gmail.com</span>
              </ListContact>
            </Ul>
          </DivContain>

          <DivContain>
            <div>
              <H1footer>Social Media</H1footer>
              <Ulsocial>
                <ListSocials>
                  <Alink href="http://www.facebook.com">
                    <FaFacebook style={{ marginRight: "10px" }} />
                  </Alink>
                </ListSocials>

                <ListSocials>
                  <Alink href="http://www.twitter.com">
                    <FaTwitter style={{ marginRight: "10px" }} />
                  </Alink>
                </ListSocials>

                <ListSocials>
                  <Alink href="http://www.linkedin.com">
                    <FaLinkedin
                      style={{ marginRight: "10px", color: "#fff" }}
                    />
                  </Alink>
                </ListSocials>

                <ListSocials>
                  <Alink href="http://www.pinerest.com">
                    <FaPinterest style={{ marginRight: "10px" }} />
                  </Alink>
                </ListSocials>
              </Ulsocial>
            </div>
          </DivContain>
        </Divfooter>
      </Sectionfooter>
      <DivCopyR>
        <FaRegCopyright
          style={{ marginLeft: "0", marginRight: "5px", color: "#868e96" }}
        />
        <span style={{ color: "#868e96" }}>
          2024 Your Company. All rights reserved.
        </span>
      </DivCopyR>
    </DivCon>
  );
};
export default Footer;
