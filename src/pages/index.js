// src/pages/index.js
import React from "react";
import Layout from "../components/layout";

import Hero from "../components/hero";
import About from "../components/about";
import OurWork from "../components/ourwork";
import Contact from "../components/contact";
import Services from "../components/services";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <OurWork />
      <Contact />
    </Layout>
  );
}
