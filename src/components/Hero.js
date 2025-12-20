// src/components/Hero.js
import React from "react";
import styled from "styled-components";

// Styled Hero Section
const HeroSection = styled.section`
  min-height: 80vh;
  max-width: 100vw;
  overflow-x: hidden;
  background-color: #f8f8f8; /* Placeholder for new aesthetic */
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  text-align: left;
  border-bottom: 1px solid #000;

  h1 {
    font-family: 'Inter', sans-serif; /* Assuming Inter is available or fallback */
    font-size: 5rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 2rem;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    font-family: 'Roboto Mono', monospace;
    font-size: 1.1rem;
    max-width: 600px;
    margin-bottom: 3rem;
    line-height: 1.6;
    color: #444;
  }

  .actions {
    display: flex;
    gap: 1.5rem;
  }

  a.btn {
    text-decoration: none;
    padding: 1rem 2rem;
    border: 1px solid #000;
    background: transparent;
    color: #000;
    font-family: 'Roboto Mono', monospace;
    font-size: 0.9rem;
    text-transform: uppercase;
    transition: all 0.2s ease;

    &:hover {
      background: #000;
      color: #fff;
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <div style={{ width: "100%", maxWidth: "1200px" }}>
        <h1>Building Durable<br />Venture Architectures</h1>
        <p>
          We architect and scale high-value technology ventures through rigorous validation and strategic execution.
        </p>

        <div className="actions">
          <a href="/projects" className="btn">Our Ventures</a>
          <a href="/partner" className="btn">Work With Us</a>
        </div>
      </div>
    </HeroSection>
  );
};

export default Hero;
