// src/components/ProjectCard.js
import React from "react";
import styled from "styled-components";

const Card = styled.article`
  border-radius: 16px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.3;
`;

const OneLiner = styled.p`
  margin: 0;
  color: #4b5563;
`;

const Badge = styled.span`
  align-self: flex-start;
  font-size: 0.75rem;
  padding: 6px 10px;
  border-radius: 999px;
  background: ${({ children }) =>
    children === "Building"
      ? "#FEF3C7"
      : children === "Beta"
      ? "#DBEAFE"
      : children === "Live"
      ? "#D1FAE5"
      : children === "Open to Pilots"
      ? "#DCFCE7"
      : "#F3F4F6"};
  color: #111827;
`;

const SectionTitle = styled.h4`
  margin: 8px 0 0 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #6b7280;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 18px;
  color: #374151;
`;

const Links = styled.div`
  margin-top: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  a {
    text-decoration: underline;
  }
`;

export default function ProjectCard({ project }) {
  return (
    <Card>
      <Badge>{project.status}</Badge>
      <Name>{project.name}</Name>
      <OneLiner>{project.oneLiner}</OneLiner>

      <SectionTitle>Current Focus</SectionTitle>
      <p>{project.currentFocus}</p>

      <SectionTitle>Seeking</SectionTitle>
      <List>
        {project.seeking.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </List>

      {project.links?.length > 0 && (
        <Links>
          {project.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </Links>
      )}
    </Card>
  );
}
