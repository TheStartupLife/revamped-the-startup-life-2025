// src/components/ProjectsShowcase.js
import React from "react";
import styled from "styled-components";
import { projects } from "../data/projects";

const Wrap = styled.section`
  background: #ffffff;
  padding: 6rem 5%;
  border-bottom: 1px solid #000;
`;

const SectionHeader = styled.div`
  margin-bottom: 3rem;
  border-bottom: 1px solid #000;
  padding-bottom: 1rem;
  
  h2 {
    font-family: 'Inter', sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
    margin: 0;
  }
`;

const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #000;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1fr;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e0e0e0;
  align-items: center;
  transition: background 0.2s ease;

  &:hover {
    background: #f9f9f9;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 1.5rem 0;
  }

  .name {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    color: #000;
  }

  .sector, .status {
    font-family: 'Roboto Mono', monospace;
    font-size: 0.9rem;
    color: #444;
  }

  .link {
    text-align: right;

    @media (max-width: 768px) {
      text-align: left;
    }

    a {
      text-decoration: none;
      color: #000;
      border-bottom: 1px solid #000;
      font-family: 'Roboto Mono', monospace;
      font-size: 0.9rem;
      padding-bottom: 2px;
      
      &:hover {
        background: #000;
        color: #fff;
      }
    }
  }
`;

const getSector = (slug) => {
  const map = {
    "annakiyah": "Media & IP",
    "prettypenny": "Fintech",
    "stealth-project": "EdTech",
    "haitians-in-tech": "Civic Tech",
    "medicalbae": "Commerce",
    "sipnswoon": "Commerce",
    "tech-guild": "EdTech"
  };
  return map[slug] || "Venture";
};

export default function ProjectsShowcase() {
  return (
    <Wrap>
      <SectionHeader>
        <h2>Active Ventures</h2>
      </SectionHeader>

      <Table>
        {projects.map((p) => {
          const sector = getSector(p.slug);
          const link = p.links && p.links[0]; // Simplified link logic

          return (
            <Row key={p.slug}>
              <div className="name">{p.name}</div>
              <div className="sector">{sector}</div>
              <div className="status">{p.status}</div>
              <div className="link">
                {link && link.href && (
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    Details &rarr;
                  </a>
                )}
              </div>
            </Row>
          );
        })}
      </Table>
    </Wrap>
  );
}
