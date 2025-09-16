import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import PortfolioIntro from "../components/PortfolioIntro";
import FocusAreas from "../components/FocusAreas";
import ProjectsShowcase from "../components/ProjectsShowcase";
import ClosingCTA from "../components/ClosingCTA";


export default function HomePage() {
  return (
    <Layout hero={true}>
      <Hero />
      <PortfolioIntro />
      <FocusAreas />
      <ProjectsShowcase />
      <ClosingCTA />
    </Layout>
  );
}
