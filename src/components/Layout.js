import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { createGlobalStyle, styled } from "styled-components";



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
`
;

const Main = styled.main`
  padding-top: ${({ $hero }) => ($hero ? "0" : "var(--header-h)")};
`;

const Layout = ({ children, noOffset }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main noOffset={noOffset}>
        {children}
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
