// src/pages/about.js
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Wrap = styled.main`
  color: #111;
  font-family: 'Roboto Mono', monospace;
`;

const HeaderBand = styled.section`
  background: #f8f8f8;
  border-bottom: 1px solid #000;
  padding: 6rem 5%;

  .inner {
    max-width: 1000px;
  }
`;

const Title = styled.h1`
  margin: 0 0 2rem 0;
  font-family: 'Inter', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

const Kicker = styled.p`
  margin: 0;
  max-width: 800px;
  color: #444;
  font-size: 1.1rem;
  line-height: 1.7;
`;

const Body = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  border-left: 1px solid #000;
  border-right: 1px solid #000;

  @media (max-width: 1200px) {
    border: none;
  }
`;

const Section = styled.section`
  padding: 4rem 5%;
  border-bottom: 1px solid #000;

  h2 {
    margin: 0 0 2rem 0;
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  p, li {
    font-size: 1rem;
    line-height: 1.7;
    color: #333;
    max-width: 700px;
  }
  
  ul {
    margin-top: 1rem;
    padding-left: 1.2rem;
  }
`;

const AreaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1px;
  background: #000; /* Creates borders via gap */
  border: 1px solid #000;
`;

const AreaCard = styled.article`
  background: #fff;
  padding: 2rem;
  
  h3 {
    margin: 0 0 1rem;
    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    color: #555;
  }
`;

const PillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  li {
    display: inline-block;
    padding: 0.5rem 1rem;
    border: 1px solid #000;
    background: transparent;
    color: #000;
    font-family: 'Roboto Mono', monospace;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const CTA = styled.a`
  display: inline-block;
  margin-top: 2rem;
  text-decoration: none;
  padding: 1rem 2rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: uppercase;
  transition: all 0.2s ease;

  &:hover {
    background: #fff;
    color: #000;
  }
`;

export default function AboutPage() {
  return (
    <Layout>
      <Wrap>
        {/* Top band */}
        <HeaderBand>
          <div className="inner">
            <Title>About The Startup Life</Title>
            <Kicker>
              We build where culture and technology meet. Our portfolio focuses on durable,
              community-rooted ventures with clear customer value and scalable paths to growth.
              We partner with operators and organizations who can unlock capital, distribution,
              compliance, or operational leverage.
            </Kicker>
          </div>
        </HeaderBand>

        {/* Body */}
        <Body>
          <Section>
            <h2>Mission</h2>
            <p>
              Create ventures that compound value over time—by pairing focused execution with
              cultural relevance, clear customer outcomes, and disciplined rollouts.
            </p>
          </Section>

          <Section>
            <h2>Focus Areas</h2>
            <AreaGrid>
              <AreaCard>
                <h3>Fintech</h3>
                <p>
                  Turning everyday spending into wealth-building opportunities with honest, consumer-first finance products.
                </p>
              </AreaCard>

              <AreaCard>
                <h3>Publishing &amp; IP</h3>
                <p>
                  Story-driven franchises designed for licensing, merchandising, and multi-format distribution.
                </p>
              </AreaCard>

              <AreaCard>
                <h3>Workforce Development</h3>
                <p>
                  Talent pipelines and learning initiatives that connect underrepresented communities to future-ready work.
                </p>
              </AreaCard>

              <AreaCard>
                <h3>Civic Tech</h3>
                <p>
                  Practical digital infrastructure that strengthens communities and institutions through usable tools and programs.
                </p>
              </AreaCard>

              <AreaCard>
                <h3>Consumer Retail</h3>
                <p>
                  Niche commerce concepts that blend community, culture, and curation into memorable brand experiences.
                </p>
              </AreaCard>
            </AreaGrid>
          </Section>

          <Section>
            <h2>How We Build</h2>
            <PillList>
              <li>Lean teams, clear specs</li>
              <li>Thesis-driven bets</li>
              <li>Measured rollouts</li>
            </PillList>
            <ul>
              <li><strong>Clarity first:</strong> simple scopes, fast cycles, and rigorous prioritization.</li>
              <li><strong>Capital efficient:</strong> we build incrementally and scale with proof, not hype.</li>
              <li><strong>Partnership leverage:</strong> we collaborate where distribution, expertise, or compliance accelerate outcomes.</li>
            </ul>
          </Section>

          <Section>
            <h2>Partnership Models</h2>
            <p>
              We collaborate through structures that align incentives and speed up execution:
            </p>
            <ul style={{ marginTop: '1.5rem' }}>
              <li><strong>Equity Co-Builds:</strong> shared ownership to align strategy and delivery.</li>
              <li><strong>Licensing &amp; Brand Collaborations:</strong> extend worlds, stories, and products through aligned partners.</li>
              <li><strong>Pilot Programs:</strong> scoped engagements to validate traction with real users and clear milestones.</li>
            </ul>
          </Section>

          <Section>
            <h2>Get Involved</h2>
            <p>
              If you share our conviction and can unlock capital, distribution, or operational leverage,
              let’s explore where we can build together.
            </p>
            <CTA href="/partner">Explore Partnership Models</CTA>
          </Section>
        </Body>
      </Wrap>
    </Layout>
  );
}
