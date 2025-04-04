// src/components/Layout.js
import React from "react";
import { Helmet } from "react-helmet";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>The Startup Life</title>
        <link
          rel="stylesheet"
          href="/assets/css/theme.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/font-awesome/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/liquid-icon/liquid-icon.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
