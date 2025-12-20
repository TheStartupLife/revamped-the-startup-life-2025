import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { projects } from "../data/projects";

const Wrap = styled.main`
  min-height: 80vh;
  padding-bottom: 4rem;
`;

const Header = styled.div`
  background: #f8f8f8;
  border-bottom: 1px solid #000;
  padding: 6rem 5%;

  h1 {
    font-family: 'Inter', sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    margin: 0 0 1.5rem 0;
    letter-spacing: -0.02em;
  }

  p {
    font-family: 'Roboto Mono', monospace;
    font-size: 1.1rem;
    max-width: 800px;
    color: #444;
    line-height: 1.6;
    margin: 0;
  }
`;

const TableContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border-left: 1px solid #000;
  border-right: 1px solid #000;

  @media (max-width: 1200px) {
    border: none;
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  padding: 2.5rem;
  border-bottom: 1px solid #000;
  transition: background 0.2s ease;
  align-items: start;

  &:hover {
    background: #f9f9f9;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .main-info {
    h2 {
      font-family: 'Inter', sans-serif;
      font-size: 1.75rem;
      font-weight: 600;
      margin: 0 0 0.5rem 0;
    }

    .one-liner {
      font-family: 'Roboto Mono', monospace;
      font-size: 0.95rem;
      color: #666;
      line-height: 1.5;
    }
  }

  .details {
    padding-right: 2rem;
    
    .label {
      font-family: 'Roboto Mono', monospace;
      font-size: 0.8rem;
      text-transform: uppercase;
      color: #888;
      margin-bottom: 0.5rem;
    }

    p {
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      color: #222;
    }

    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;

      li {
        font-family: 'Roboto Mono', monospace;
        font-size: 0.85rem;
        background: #eee;
        padding: 0.4rem 0.8rem;
        border-radius: 4px;
        color: #444;
      }
    }
  }

  .meta {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;

    @media (max-width: 900px) {
      align-items: flex-start;
      text-align: left;
    }

    .status {
      display: inline-block;
      padding: 0.4rem 0.8rem;
      border: 1px solid #000;
      font-family: 'Roboto Mono', monospace;
      font-size: 0.85rem;
      text-transform: uppercase;
      font-weight: 600;
    }

    a.link {
      font-family: 'Roboto Mono', monospace;
      color: #000;
      text-decoration: none;
      border-bottom: 1px solid #000;
      padding-bottom: 2px;
      font-size: 0.9rem;

      &:hover {
        background: #000;
        color: #fff;
      }
    }
  }
`;

export default function ProjectsPage() {
  return (
    <Layout>
      <Wrap>
        <Header>
          <h1>Venture Portfolio</h1>
          <p>
            Each project represents a long-term vision we’re scaling into reality.
            We partner with those who can provide distribution, capital, compliance,
            or specialized expertise to accelerate growth.
          </p>
        </Header>

        <TableContainer>
          {projects.map((p) => {
            const link = p.links && p.links[0];

            return (
              <TableRow key={p.slug}>
                <div className="main-info">
                  <h2>{p.name}</h2>
                  <p className="one-liner">{p.oneLiner}</p>
                </div>

                <div className="details">
                  {p.currentFocus && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <div className="label">Current Focus</div>
                      <p>{p.currentFocus}</p>
                    </div>
                  )}

                  {p.seeking && p.seeking.length > 0 && (
                    <div>
                      <div className="label">Seeking Partners For</div>
                      <ul>
                        {p.seeking.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="meta">
                  <span className="status">{p.status}</span>
                  {link && link.href && (
                    <a className="link" href={link.href} target="_blank" rel="noreferrer">
                      Visit {link.label} &rarr;
                    </a>
                  )}
                </div>
              </TableRow>
            );
          })}
        </TableContainer>
      </Wrap>
    </Layout>
  );
}
