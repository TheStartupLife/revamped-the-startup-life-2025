import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { projects } from "../data/projects";

const Page = styled.div`
  background: var(--color-bg);
`;

const Section = styled.section`
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: clamp(58px, 10vw, 118px) 0;
`;

const Eyebrow = styled.p`
  margin: 0 0 16px;
  color: var(--color-copper-dark);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  max-width: 12ch;
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(3rem, 9vw, 7rem);
  line-height: 0.92;
`;

const Lead = styled.p`
  max-width: 760px;
  margin: 30px 0 0;
  color: var(--color-muted);
  font-size: clamp(1.08rem, 2vw, 1.28rem);
`;

const Grid = styled.div`
  display: grid;
  gap: 1px;
  margin-top: 54px;
  background: var(--color-line);
  border: 1px solid var(--color-line);
`;

const Row = styled.article`
  display: grid;
  grid-template-columns: 0.85fr 1.35fr auto;
  gap: 26px;
  padding: clamp(24px, 4vw, 34px);
  background: var(--color-surface);

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }

  h2 {
    margin: 0 0 10px;
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 4vw, 2.7rem);
    line-height: 1;
  }

  p {
    margin: 0 0 14px;
    color: var(--color-muted);
  }
`;

const Status = styled.span`
  display: inline-flex;
  align-self: start;
  padding: 8px 10px;
  border: 1px solid rgba(184, 107, 61, 0.45);
  color: var(--color-copper-dark);
  font-family: var(--font-mono);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 14px 0 0;
  padding: 0;
  list-style: none;

  li {
    padding: 7px 9px;
    background: #f4eee7;
    color: var(--color-muted);
    font-size: 0.86rem;
  }
`;

export default function ProjectsPage() {
  return (
    <Layout
      pathname="/projects/"
      title="Ventures | The Startup Life"
      description="Explore ventures and brands housed within The Startup Life studio portfolio."
    >
      <Page>
        <Section>
          <Eyebrow>Ventures</Eyebrow>
          <Title>The studio portfolio.</Title>
          <Lead>
            The Startup Life houses multiple ventures and remains open to aligned partnerships.
            This page is intentionally secondary to the AI training offer, but it shows the broader
            studio context behind the work.
          </Lead>

          <Grid>
            {projects.map((project) => {
              const link = project.links?.find((item) => item.href);

              return (
                <Row key={project.slug}>
                  <div>
                    <h2>{project.name}</h2>
                    <Status>{project.status}</Status>
                  </div>
                  <div>
                    <p>{project.oneLiner}</p>
                    {project.currentFocus && <p>{project.currentFocus}</p>}
                    {project.seeking?.length > 0 && (
                      <Tags aria-label={`${project.name} partnership interests`}>
                        {project.seeking.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </Tags>
                    )}
                  </div>
                  {link && (
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      Visit {link.label}
                    </a>
                  )}
                </Row>
              );
            })}
          </Grid>
        </Section>
      </Page>
    </Layout>
  );
}
