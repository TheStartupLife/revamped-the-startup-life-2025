import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
  :root { --header-h: 88px; }
  @media (max-width: 768px) { :root { --header-h: 64px; } }
  html { scroll-padding-top: var(--header-h); }

  body {
    overflow-x: hidden;
    margin: 0;
    font-family: "Rajdhani", sans-serif;
    background-color: #f6f7fb;
    color: #000;
  }

  a { color: inherit; text-decoration: none; }
  ul { list-style: none; margin: 0; padding: 0; }
  img { width: 100%; max-width: 100vw; box-sizing: border-box; height: auto; }
`;

const Main = styled.main`
  padding-top: ${({ $hero }) => ($hero ? "0" : "var(--header-h)")};
`;

const Layout = ({ children, hero, noOffset }) => {
  // Support both 'hero' and 'noOffset' props for backward compatibility
  const isHero = hero || noOffset;

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main $hero={isHero}>
        {children}
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
