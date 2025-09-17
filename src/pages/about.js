// src/pages/about.js
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Wrap = styled.main`
  color: #0f172a;
`;

const HeaderBand = styled.section`
  background: #f6f7fb;
  border-bottom: 1px solid #e5e7eb;
  padding: clamp(56px, 7vw, 88px) 20px;

  .inner {
    max-width: 1000px;
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  margin: 0 0 12px 0;
  font-size: clamp(32px, 4vw, 42px);
  line-height: 1.2;
`;

const Kicker = styled.p`
  margin: 0;
  max-width: 75ch;
  color: #475569;
  font-size: 18px;
  line-height: 1.7;
`;

const Body = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: clamp(56px, 7vw, 88px) 20px;
`;

/* ---------- Shared Bits ---------- */

const Section = styled.section`
  &:not(:first-child) {
    margin-top: clamp(40px, 6vw, 64px);
  }

  h2 {
    margin: 0 0 12px 0;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0.01em;
  }

  p,
  li {
    color: #334155;
    font-size: 16px;
    line-height: 1.7;
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #e5e7eb;
  margin: clamp(40px, 6vw, 64px) 0;
`;

/* ---------- Focus Areas ---------- */

const AreaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 14px;
`;

const AreaCard = styled.article`
  background: #f8fafc;
  border: 1px solid #e6eaf0;
  border-radius: 14px;
  padding: 16px 16px 14px;

  h3 {
    margin: 0 0 6px;
    font-size: 16px;
    font-weight: 700;
  }

  p {
    margin: 0;
    color: #475569;
  }
`;

/* ---------- Operating Model ---------- */

const PillList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 10px 0 14px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  li {
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    padding: 8px 12px;
    border-radius: 999px;
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    color: #1e293b;
    font-size: 14px;
    font-weight: 600;
  }
`;

/* ---------- CTA ---------- */

const CTArow = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const CTA = styled.a`
  text-decoration: none;
  padding: 0.78rem 1.45rem;
  border: 2px solid #ffde59;
  border-radius: 999px;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: #111827;
  background: #ffde59;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    background: #ffd944;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  }

  &:focus-visible {
    outline: 2px solid #111827;
    outline-offset: 3px;
  }
`;

/* ---------- Page ---------- */

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

          <Divider />

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

          <Divider />

          <Section>
            <h2>How We Build</h2>
            <PillList>
              <li>Lean teams, clear specs</li>
              <li>Thesis-driven bets</li>
              <li>Measured rollouts</li>
            </PillList>
            <ul>
              <li>Clarity first: simple scopes, fast cycles, and rigorous prioritization.</li>
              <li>Capital efficient: we build incrementally and scale with proof, not hype.</li>
              <li>Partnership leverage: we collaborate where distribution, expertise, or compliance accelerate outcomes.</li>
            </ul>
          </Section>

          <Divider />

          <Section>
            <h2>Partnership Models</h2>
            <p>
              We collaborate through structures that align incentives and speed up execution:
            </p>
            <ul>
              <li><strong>Equity Co-Builds:</strong> shared ownership to align strategy and delivery.</li>
              <li><strong>Licensing &amp; Brand Collaborations:</strong> extend worlds, stories, and products through aligned partners.</li>
              <li><strong>Pilot Programs:</strong> scoped engagements to validate traction with real users and clear milestones.</li>
            </ul>
          </Section>

          <Divider />

          <Section>
            <h2>Get Involved</h2>
            <p>
              If you share our conviction and can unlock capital, distribution, or operational leverage,
              let’s explore where we can build together.
            </p>
            <CTArow>
              <CTA href="/partner">Explore Partnership Models</CTA>
            </CTArow>
          </Section>
        </Body>
      </Wrap>
    </Layout>
  );
}
