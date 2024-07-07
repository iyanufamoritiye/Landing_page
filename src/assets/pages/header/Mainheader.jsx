import { useState } from "react";
import React from "react";
import logohead from "../../logohead.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaTimes, FaBars } from "react-icons/fa";
// const Mainheader = () => {
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: hwb(0 100% 0% / 0.945);
  max-width: center;
  width: 100%;
  height: 4rem;
  z-index: 10000;
  @media (max-width: 768px) {
    padding: 0 2rem 0 0;
    background-color: #ffff;
  }
  @media (max-width: 1024px
  min-width: 770px) {
    padding: 0 2rem 0 0;
    background-color: #ffff;
  }
  @media (max-width: 1400px) {
    padding: 0 3rem 0 0;
    background-color: #ffff;
  }
`;

const Nav = styled.nav`
  width: 60%;
  align-items: center;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: row;
    position: absolute;
    top: 60px;
    right: 40px;
    background-color: #ffffff;
    color: #282c34;

    padding: 20px;
    justify-content: end;
    width: 30%;
  }
  @media (max-width: 1025px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: row;
    position: absolute;
    top: 60px;
    right: 40px;
    background-color: #ffffff;
    color: #282c34;

    padding: 20px;
    justify-content: end;
    width: 30%;
 
`;
const Mainheader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const Img = styled.img`
    max-height: 45px;
    width: 100px;

    font-weight: bold;
    padding-top: 10px;
    @media (max-width: 768px) {
      width: 60px;
      max-height: 40px;
    }
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
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 12px;
      // justify-content: flex-end;
      align-items: start;
    }
    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 12px;
      // justify-content: flex-end;
      align-items: start;
    }
  `;

  const LiMain = styled.li`
    border-top: 2px solid black;
    border-bottom: 2px solid black;

    @media (max-width: 768px) {
      text-align: start;
      padding: 0;
    }
  `;

  const NavLink = styled(Link)`
    color: #333333;
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
    font-family: roboto, system-ui, Avenir, Helvetica, Arial, sans-serif;
    letter-spacing: 3px;
    @media (max-width: 768px) {
      justify-self: start;
      font-size: 10px;
      font-weight: 300;
      letter-spacing: 0;
    }
  `;
  const MenuIcon = styled.div`
    display: none;
    cursor: pointer;
    font-size: 24px;

    @media (max-width: 768px) {
      display: block;
      margin-right: 32px;
    }
    @media (max-width: 1024px) {
      display: block;
      margin-right: 24px;
    }
  `;
  return (
    <Header>
      <div>
        <Img src={logohead} alt="logo" />
      </div>
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <Nav isOpen={isOpen}>
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
