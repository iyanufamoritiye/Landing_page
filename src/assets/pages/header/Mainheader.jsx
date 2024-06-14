import React from "react";
import logohead from "../../logohead.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Mainheader = () => {
  const Header = styled.header`
    display: flex;
    justify-content: space-between;

    padding-top: 20px;
    padding-bottom: 20px;

    align-items: center;
    position: fixed;
    top: 0;
  background-color: hwb(0 100% 0% / 0.945);
     
    width: 100%;
   z-index:10000;
M
    
  `;

  const Nav = styled.nav`
    width: 60%;
    align-items: center;


    @media (max-width: 768px) {
    display: none;

  `;
  const Img = styled.img`
    max-height: 45px;
    width: 100px;

    font-weight: bold;
    padding-top: 10px;
  `;
  const Ul = styled.ul`
    display: flex;

    list-style-type: none;
    width: 60%;
    gap: 48px;
    :nth-child(1) {
      padding-left: 5px;
      padding-right: 5px;
    }
  `;

  const LiMain = styled.li`
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  `;

  const NavLink = styled(Link)`
    color: #333333;
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
    font-family: roboto, system-ui, Avenir, Helvetica, Arial, sans-serif;
    letter-spacing: 3px;
  `;

  return (
    <Header>
      <div>
        <Img src={logohead} alt="logo" />
      </div>

      <Nav>
        <Ul>
          <LiMain>
            <NavLink to="/">MAIN</NavLink>
          </LiMain>

          <li>
            <NavLink to="/gallery">GALLERY</NavLink>
          </li>

          <li>
            <NavLink to="/project">PROJECT</NavLink>
          </li>

          <li>
            <NavLink to="/certification">CERTIFICATES</NavLink>
          </li>

          <li>
            <NavLink to="/contact">CONTACTS</NavLink>
          </li>
        </Ul>
      </Nav>
    </Header>
  );
};
export default Mainheader;
