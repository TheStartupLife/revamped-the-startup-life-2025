// src/components/ProjectsShowcase.js
import React from "react";
import styled from "styled-components";
import { projects } from "../data/projects"; // ← single source of truth

const Wrap = styled.section`
  background: #ffffff;
  padding: clamp(80px, 10vw, 120px) 20px;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: clamp(24px, 3.2vw, 32px);
`;

const Sub = styled.p`
  color: #4b5563;
  margin: 0 0 28px;
  max-width: 70ch;
  line-height: 1.7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
`;

const Card = styled.article`
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 1px 0 rgba(17, 24, 39, 0.03);
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(17, 24, 39, 0.06);
  }

  &:focus-within {
    outline: 2px solid #111827;
    outline-offset: 2px;
  }

  header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 6px;
  }

  h3 {
    margin: 0;
    font-size: 20px;
  }

  p {
    margin: 8px 0 12px;
    color: #334155;
    line-height: 1.6;
  }
`;

/* Transient prop so it doesn't leak to the DOM */
const Badge = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 9px;
  border-radius: 999px;
  background: ${({ $tone }) =>
    $tone === "live" ? "#dcfce7" :          /* green-ish */
    $tone === "building" ? "#fef3c7" :      /* amber */
    $tone === "exploring" ? "#e0e7ff" :     /* indigo tint */
    "#f1f5f9"};                             /* default gray */
  color: #111827;
  border: 1px solid rgba(17, 24, 39, 0.08);
`;

const Btn = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.85rem;
  border-radius: 999px;
  padding: 9px 14px;
  border: 2px solid #111827;
  color: #111827;
  transition: all 0.18s ease;

  &:hover {
    background: #111827;
    color: #ffde59;
  }

  &:focus-visible {
    outline: 2px solid #111827;
    outline-offset: 3px;
  }
`;

/* ---------- helpers ---------- */
const toTone = (status = "") => {
  const s = status.toLowerCase();
  if (s.includes("live")) return "live";
  if (s.includes("build")) return "building";
  if (s.includes("explor")) return "exploring";
  return "open"; // "Open to Pilots" or anything else
};

const toLabel = (status = "") => {
  const s = status.toLowerCase();
  if (s.includes("live")) return "Live";
  if (s.includes("build")) return "Building";
  if (s.includes("explor")) return "Exploring";
  if (s.includes("pilot")) return "Open to Pilots";
  return status || "Status";
};

const isSafeUrl = (href = "") => {
  const u = href.trim();
  return u.startsWith("/") || /^https?:\/\//i.test(u);
};

const primaryLink = (links = []) => {
  if (!Array.isArray(links)) return null;
  const first = links.find(l => l && typeof l.href === "string" && isSafeUrl(l.href));
  return first || null;
};

/* ---------- component ---------- */
export default function ProjectsShowcase() {
  // If you want to show a subset on the homepage, you can slice here:
  // const visibleProjects = projects.slice(0, 6);
  const visibleProjects = projects;

  return (
    <Wrap aria-labelledby="projects-motion">
      <Inner>
        <Title id="projects-motion">Projects in Motion</Title>
        <Sub>
          A snapshot of ventures at different stages—from early exploration to active scaling.
        </Sub>

        <Grid>
          {visibleProjects.map((p) => {
            const tone = toTone(p.status);
            const statusLabel = toLabel(p.status);
            const link = primaryLink(p.links);

            return (
              <Card key={p.slug || p.name} tabIndex={0}>
                <header>
                  <Badge $tone={tone} aria-label={`Project status: ${statusLabel}`}>
                    {statusLabel}
                  </Badge>
                  <h3>{p.name}</h3>
                </header>

                {/* Use the one-liner from the shared data file */}
                {!!p.oneLiner && <p>{p.oneLiner}</p>}

                {/* Button only if we have a link */}
                {link && (
                  <Btn
                    href={link.href}
                    aria-label={`${p.name} – ${link.label}`}
                    target={/^https?:\/\//i.test(link.href) ? "_blank" : undefined}
                    rel={/^https?:\/\//i.test(link.href) ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Btn>
                )}
              </Card>
            );
          })}
        </Grid>
      </Inner>
    </Wrap>
  );
}
