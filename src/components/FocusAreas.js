// src/components/FocusAreas.js
import React from "react";
import styled from "styled-components";

const Wrap = styled.section`
  background: #f6f7fb; /* light gray to contrast with white sections */
  padding: clamp(72px, 9vw, 120px) 20px;
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
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 1px 0 rgba(17, 24, 39, 0.03);

  h3 {
    margin: 0 0 8px;
    font-size: 20px;
  }

  p {
    margin: 0;
    color: #334155;
    line-height: 1.6;
  }
`;

const Example = styled.p`
  margin: 10px 0 0;
  font-size: 0.9rem;
  color: #6b7280;

  a {
    color: inherit;
    text-decoration: underline;
    text-decoration-thickness: 1px;

    &:hover {
      color: #111827;
    }
  }
`;

/** ---- Edit your portfolio areas here ---- */
const AREAS = [
  {
    title: "Fintech",
    desc: "Cashback, payments, and lightweight financial education.",
    examples: [{ label: "PrettyPenny.io", href: "/projects#prettypenny" }],
  },
  {
    title: "Publishing & IP",
    desc:
      "Original worlds and formats designed for multi-channel distribution.",
    examples: [
      { label: "Annakiyah.com", href: "/projects#annakiyah" },
      { label: "Horus & Anaya", href: "/projects#horus-anaya" },
    ],
  },
  {
    title: "Workforce Development",
    desc: "Upskilling, talent pipelines, and education initiatives that open opportunities for underrepresented communities.",
    examples: [{ label: "HaitiansinTech.com", href: "/projects#haitiansintech" }, { label: "MedicalBae.com", href: "/projects#medicalbae" }],
  },
  {
    title: "Civic Tech",
    desc: "Digital infrastructure and tools that improve how communities and institutions function.",
    examples: [{ label: "HaitiansinTech.com", href: "/projects#haitiansintech" }], // Haitians in Tech can appear here too if you want
  },
  {
    title: "Consumer Retail",
    desc:
      "Niche experiences with strong community and brand affinity.",
    examples: [{ label: "SipNSwoon.com", href: "/projects#sipnswoon" }, { label: "MedicalBae.com", href: "/projects#medicalbae" }, { label: "PrettyPenny.io", href: "/projects#prettypenny" }],
  },
];

export default function FocusAreas() {
  return (
    <Wrap id="focus-areas" aria-labelledby="focus-areas-title">
      <Inner>
        <Title id="focus-areas-title">What We’re Building</Title>
        <Sub>
          Our portfolio spans several themes where we see long-term opportunities.
        </Sub>

        <Grid>
          {AREAS.map((a) => (
            <Card key={a.title}>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
              {!!a.examples?.length && (
                <Example>
                  Example:{" "}
                  {a.examples.map((ex, i) => (
                    <span key={ex.label}>
                      {ex.href ? (
                        <a href={ex.href}>{ex.label}</a>
                      ) : (
                        ex.label
                      )}
                      {i < a.examples.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </Example>
              )}
            </Card>
          ))}
        </Grid>
      </Inner>
    </Wrap>
  );
}
