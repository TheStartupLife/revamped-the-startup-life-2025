import React from "react";
import styled from "styled-components";

const Wrap = styled.section`
  background: #f8f8f8;
  color: #000;
  padding: 6rem 5%;
  text-align: center;
  border-bottom: 1px solid #000;
`;

const ContentBox = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem;
  border: 1px solid #000;
  background: #fff;
`;

const Title = styled.h2`
  margin: 0 0 1.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
`;

const Sub = styled.p`
  margin: 0 auto 2.5rem;
  max-width: 60ch;
  color: #444;
  line-height: 1.6;
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
`;

const CTA = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 1rem 2rem;
  background: #000;
  color: #fff;
  border: 1px solid #000;
  font-family: 'Roboto Mono', monospace;
  transition: all 0.2s ease;

  &:hover { 
    background: #fff; 
    color: #000;
  }

  &:focus-visible {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`;

export default function ClosingCTA() {
  return (
    <Wrap aria-labelledby="partner-cta">
      <ContentBox>
        <Title id="partner-cta">Let’s build together.</Title>
        <Sub>
          If you share our vision and can unlock capital, distribution, or expertise,
          we’d love to collaborate on an active venture.
        </Sub>
        <CTA href="/partner">Partner With Us</CTA>
      </ContentBox>
    </Wrap>
  );
}
