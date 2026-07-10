import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Startup Life",
  url: "https://www.thestartuplife.io",
  description:
    "The Startup Life provides AI training, AI adoption workshops, and practical AI consulting for corporate teams, founders, and small businesses.",
};

const Page = styled.div`
  background: var(--color-bg);
`;

const Section = styled.section`
  width: min(980px, calc(100% - 32px));
  margin: 0 auto;
  padding: clamp(58px, 10vw, 118px) 0;
`;

const Eyebrow = styled.p`
  margin: 0 0 16px;
  color: var(--color-copper-dark);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  max-width: 11ch;
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(3rem, 9vw, 7rem);
  line-height: 0.92;
`;

const Lead = styled.p`
  max-width: 760px;
  margin: 30px 0 0;
  color: var(--color-muted);
  font-size: clamp(1.08rem, 2vw, 1.35rem);
`;

const Body = styled.div`
  display: grid;
  gap: 34px;
  margin-top: 56px;
`;

const Block = styled.article`
  padding-top: 30px;
  border-top: 1px solid var(--color-line);

  h2 {
    margin: 0 0 14px;
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3.2rem);
    line-height: 1;
  }

  p {
    max-width: 76ch;
    margin: 0 0 14px;
    color: var(--color-muted);
  }

  a {
    color: var(--color-copper-dark);
    font-weight: 800;
  }
`;

export default function AboutPage() {
  return (
    <Layout
      pathname="/about/"
      title="About The Startup Life | Venture Studio and AI Training"
      description="The Startup Life is a venture studio offering practical AI training and consulting for teams, founders, and small businesses."
      jsonLd={organizationSchema}
    >
      <Page>
        <Section>
          <Eyebrow>About The Startup Life</Eyebrow>
          <Title>A studio for practical momentum.</Title>
          <Lead>
            The Startup Life builds and supports ventures where culture, technology, and work meet.
            Its AI training exists for the same reason: to help people turn new tools into useful,
            repeatable systems.
          </Lead>

          <Body>
            <Block>
              <h2>The studio lens</h2>
              <p>
                The Startup Life houses multiple brands and remains open to aligned partnerships,
                but the public-facing work now centers on AI adoption. The studio background gives
                the training a builder's point of view: practical, outcome-led, and grounded in how
                teams actually operate.
              </p>
            </Block>
            <Block>
              <h2>The company point of view</h2>
              <p>
                The company blends strategy, operations, technology, and a practical understanding
                of how founders and teams build under pressure. That perspective keeps the work
                focused on useful systems, not abstract AI theory.
              </p>
            </Block>
            <Block>
              <h2>What that means for AI training</h2>
              <p>
                AI workshops are designed around real workflows, not generic tool tours. Corporate
                teams get shared language and adoption habits. Founders and small business owners get
                simple ways to save time, make better decisions, and work with more leverage.
              </p>
              <p>
                <a href="/#ai-training">Explore AI training</a> or <a href="/projects/">view studio ventures</a>.
              </p>
            </Block>
          </Body>
        </Section>
      </Page>
    </Layout>
  );
}
