import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  // State to control hamburger menu
  const [isOpen, setisOpen] = useState(false);

  return (
    <Nav>
      <Logo href="">Mitchell Rose</Logo>
      {/* onClick will set isOpen to true */}
      <Hamburger onClick={() => setisOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuItem href="#about">About</MenuItem>
        <MenuItem href="#projects">Projects</MenuItem>
        <MenuItem href="#contact">Contact</MenuItem>
      </Menu>
    </Nav>
  );
};

// Nav
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: transparent;
  z-index: 999;
`;

// Logo
const Logo = styled.a`
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    color: #ffbcb5;
    transition: all 0.3s ease-in;
  }

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }

  @media (max-width: 280px) {
    font-size: 1.2rem;
  } 
`;

// Menu
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  ${"" /* Centers all links to center of nav */}
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    ${"" /* Will center menu in middle underneath Logo */}
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;

// Hamburger
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #ffbcb5;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Menu Item
const MenuItem = styled.a`
  text-decoration: none;
  color: white;
  padding: 1rem 2rem;
  font-weight: 300;
  font-size: 1.5rem;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: #ffbcb5;
    transition: all 0.3s ease-in;
  }
`;

export default Navbar;
