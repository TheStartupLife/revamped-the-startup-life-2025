import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMedium, FaYoutube } from "react-icons/fa";
import { Link } from "gatsby";

const HeaderWrapper = styled.header`
  background: transparent;
  position: absolute;
  width: 100%;
  z-index: 999;
`;

const Mainbar = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  flex-wrap: wrap;
`;

const Logo = styled.img`
  height: 4rem;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0%;
      height: 2px;
      background: white;
      transition: width 0.3s;
    }

    &:hover:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SocialIcons = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  margin: 0;

  a {
    color: white;
    font-size: 1.2rem;
    transition: color 0.3s;

    &:hover {
      color: #FFDE59;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuWrapper = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 998;

  a {
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: #FFDE59;
    }
  }
`;

const HamburgerWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  padding: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburgerIcon = styled.div`
  width: 24px;
  height: 18px;
  position: relative;

  span {
    background: white;
    display: block;
    height: 3px;
    width: 100%;
    position: absolute;
    transition: 0.3s ease-in-out;
    border-radius: 2px;
  }

  span:nth-child(1) {
    top: ${({ open }) => (open ? "7px" : "0px")};
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
  }

  span:nth-child(2) {
    top: 7px;
    opacity: ${({ open }) => (open ? "0" : "1")};
  }

  span:nth-child(3) {
    top: ${({ open }) => (open ? "7px" : "14px")};
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
  }
`;


const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <HeaderWrapper>
      <Mainbar>
        <Link to="/">
          <Logo src="/assets/img/Logos/Logo-trans-bg-tsl.png" alt="logo" />
        </Link>
        <Nav>
          <a href="#content">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="https://yi9w2vn5pmo.typeform.com/to/Ijtk7Xpa" target="_blank" rel="noopener noreferrer">
            Get Started
          </a>
        </Nav>
        <SocialIcons>
          <li>
            <a href="https://facebook.com/thestartuplifeio" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </li>
          <li>
            <a href="https://twitter.com/startuplifeio" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </li>
          <li>
            <a href="https://instagram.com/startuplife.io" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </li>
          <li>
            <a href="https://linkedin.com/company/thestartuplife" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </li>
          <li>
            <a href="https://medium.com/@thestartuplife" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
          </li>
          <li>
            <a href="https://youtube.com/thestartuplife" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </li>
        </SocialIcons>
        <HamburgerWrapper onClick={toggleMobileNav}>
          <HamburgerIcon open={isMobileNavOpen}>
            <span />
            <span />
            <span />
          </HamburgerIcon>
        </HamburgerWrapper>

      </Mainbar>

      <AnimatePresence>
        {isMobileNavOpen && (
          <MobileMenuWrapper
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <a href="#content" onClick={toggleMobileNav}>Home</a>
            <a href="#about" onClick={toggleMobileNav}>About</a>
            <a href="#services" onClick={toggleMobileNav}>Services</a>
            <a href="https://yi9w2vn5pmo.typeform.com/to/Ijtk7Xpa" target="_blank" rel="noopener noreferrer" onClick={toggleMobileNav}>
              Get Started
            </a>
          </MobileMenuWrapper>
        )}
      </AnimatePresence>
    </HeaderWrapper>
  );
};

export default Header;
