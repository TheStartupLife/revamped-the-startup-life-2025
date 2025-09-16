import React from "react";
import styled from "styled-components";

const Wrap = styled.section`
  background: linear-gradient(180deg, #1f2937 0%, #000000 100%);
  color: #f9fafb;
  padding: clamp(56px, 8vw, 96px) 20px;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: clamp(26px, 3.4vw, 36px);
`;

const Sub = styled.p`
  margin: 0 auto 20px;
  max-width: 70ch;
  color: #f9fafb;
  line-height: 1.7;
`;

const CTA = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.95rem;
  border-radius: 999px;
  padding: 0.95rem 1.7rem;

  background: #ffde59;
  color: #111827;
  border: 2px solid #ffde59;
  transition: background 0.18s ease, color 0.18s ease, transform 0.18s ease;

  &:hover { 
  background: transparent; 
  color: #ffde59;
  transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid #111827;
    outline-offset: 3px;
  }
`;



export default function ClosingCTA() {
  return (
    <Wrap aria-labelledby="partner-cta">
      <Title id="partner-cta">Let’s build together.</Title>
      <Sub>
        If you share our vision and can unlock capital, distribution, or expertise,
        we’d love to collaborate on an active venture.
      </Sub>
      <CTA href="/partner">Partner With Us</CTA>
    </Wrap>
  );
}
