import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const Wrap = styled.section`
  width: min(760px, calc(100% - 32px));
  min-height: calc(80vh - var(--header-h));
  margin: 0 auto;
  padding: clamp(64px, 12vw, 120px) 0;
  display: grid;
  align-content: center;
`;

const Kicker = styled.p`
  margin: 0 0 16px;
  color: var(--color-copper-dark);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: 0.92;
`;

const Message = styled.p`
  margin: 24px 0 30px;
  color: var(--color-muted);
  font-size: 1.08rem;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Button = styled(Link)`
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  padding: 0 18px;
  border: 1px solid var(--color-line);
  background: #fff;
  color: var(--color-ink);
  font-weight: 800;
  text-decoration: none;

  &.primary {
    border-color: var(--color-copper);
    background: var(--color-copper);
    color: #fff;
  }
`;

export default function NotFoundPage() {
  return (
    <Layout
      pathname="/404/"
      title="Page Not Found | The Startup Life"
      description="The page you requested could not be found."
    >
      <Wrap>
        <Kicker>404</Kicker>
        <Title>This page moved.</Title>
        <Message>
          The link may be old, or the page may have been folded into the new AI training site.
        </Message>
        <Actions>
          <Button className="primary" to="/">
            Back to Home
          </Button>
          <Button to="/#ai-training">AI Training</Button>
          <Button to="/projects/">Ventures</Button>
        </Actions>
      </Wrap>
    </Layout>
  );
}
