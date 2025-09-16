import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard"; // from earlier step
import { projects } from "../data/projects";        // from earlier step

const Wrap = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: clamp(72px, 8vh, 120px) 20px;
`;

const Title = styled.h1`
  margin: 0 0 12px 0;
  font-size: clamp(28px, 4vw, 40px);
`;

const Sub = styled.p`
  color: #4b5563;
  margin: 0 0 32px 0;
  max-width: 70ch;
  line-height: 1.7;
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 20px;
`;

export default function ProjectsPage() {
  return (
    <Layout>
      <Wrap>
        <Title>Projects</Title>
        <Sub>
          These are the ventures our team is actively developing. Each project
          represents a long-term vision we’re scaling into reality. We welcome
          partners who can provide distribution, capital, compliance, or
          specialized expertise to accelerate growth.
        </Sub>

        <Grid>
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </Grid>
      </Wrap>
    </Layout>
  );
}
