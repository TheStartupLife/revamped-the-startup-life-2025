import React from "react";
import styled from "styled-components";

const Wrap = styled.section`
  background: linear-gradient(180deg, #1f2937 0%, #000000 100%);
  color: #f9fafb;
  padding: clamp(48px, 8vw, 88px) 20px;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 16px;
`;

const Eyebrow = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
  font-size: 0.9rem;
`;

const Title = styled.h2`
  margin: 6px 0 8px;
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.2;
`;

const Kicker = styled.p`
  margin: 0;
  max-width: 70ch;
  line-height: 1.7;
  font-size: 18px;
`;

const CTA = styled.a`
  margin-top: 18px;
  display: inline-block;
  text-decoration: none;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.9rem;
  border-radius: 999px;
  padding: 0.75rem 1.5rem;
  width: auto;
  max-width: max-content;
  transition: all .2s ease;
  color: #111827;
  background: #ffde59;
  border: 2px solid #ffde59;
  &:hover { 
  background: transparent; 
  color: #ffde59;
  }
`;

export default function PortfolioIntro() {
  return (
    <Wrap id="portfolio">
      <Inner>
        {/* <Eyebrow>Portfolio</Eyebrow> */}
        <Title>The Startup Life Portfolio</Title>
        <Kicker>
          We’re building and scaling ventures that combine culture, creativity,
          and technology. From fintech to publishing, each project reflects our thesis:
          durable products, thoughtful execution, and real-world impact.
        </Kicker>
        <CTA href="/projects">Explore Projects</CTA>
      </Inner>
    </Wrap>
  );
}
