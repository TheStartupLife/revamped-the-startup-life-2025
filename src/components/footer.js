// src/components/footer.js
import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMedium, FaYoutube } from "react-icons/fa";
import { Link } from "gatsby";

const FooterWrapper = styled.footer`
  background: #fff;
  color: black;
  padding: 3rem 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
`;

const Logo = styled.img`
  height: 4rem;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: black;
`;

const SocialIcons = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;

  a {
    color: black;
    font-size: 1.1rem;
    transition: color 0.3s;

    &:hover {
      color: #FFDE59;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Link to="/">
          <Logo src="/assets/img/Logos/Logo-trans-bg-tsl.png" alt="The Startup Life logo" />
        </Link>
        <Copyright>© 2025 The Startup Life LLC. All rights reserved.</Copyright>
        <SocialIcons>
          <li><a href="https://facebook.com/startuplifellc" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
          <li><a href="https://twitter.com/startuplifellc" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
          <li><a href="https://instagram.com/startuplifellc" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
          <li><a href="https://linkedin.com/company/thestartuplife" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
          <li><a href="https://medium.com/@thestartuplife" target="_blank" rel="noopener noreferrer"><FaMedium /></a></li>
          <li><a href="https://youtube.com/thestartuplife" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
        </SocialIcons>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
