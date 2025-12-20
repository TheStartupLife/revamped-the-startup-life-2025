import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import TracksGrid from "../components/TracksGrid";
import Methodology from "../components/Methodology";
import ProjectsShowcase from "../components/ProjectsShowcase";
import ClosingCTA from "../components/ClosingCTA";

export default function HomePage() {
  return (
    <Layout hero={true}>
      <Hero />
      <TracksGrid />
      <Methodology />
      <ProjectsShowcase />
      <ClosingCTA />
    </Layout>
  );
}

