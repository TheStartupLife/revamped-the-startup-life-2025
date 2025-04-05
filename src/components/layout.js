// src/components/layout.js
import React from "react";
import Header from "./header";
import Footer from "./footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    overflow-x: hidden;
    margin: 0;
    font-family: "Rajdhani", sans-serif;
    background-color: #fff;
    color: #000;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
    height: auto;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
