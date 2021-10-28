import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.div`
  background: #262322;
  height: 100px;
  display: flex;
  padding-left: 30px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled.a`
  color: white;
  padding: 1rem 0;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 800;

    span {
        font-weight: 300;
        font-size: 1.3rem;
    }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  ${'' /* Centers all links to center of nav */}
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    ${'' /* Will center menu in middle underneath Logo */}
    width: 100%;
    max-height: ${({isOpen}) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
  }
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: #FFBCB5;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

const MenuItem = styled.a`
    text-decoration: none;
    color: white;
    padding: 1rem 2rem;
    font-weight: 300;
    font-size: 1.5rem;
    cursor: pointer;
    text-align: center;

    &:hover {
        color: #FFBCB5;
        transition: all 0.3s ease-in;
    }
`;

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);
  return (
    <Nav>
      <Logo>Mitchell Rose</Logo>
      <Hamburger onClick={() => setisOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuItem href="">Home</MenuItem>
        <MenuItem href="">About</MenuItem>
        <MenuItem href="">Projects</MenuItem>
        <MenuItem href="">Contact</MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;
