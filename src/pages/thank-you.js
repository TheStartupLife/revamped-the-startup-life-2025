import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const Wrap = styled.section`
  width: min(720px, calc(100% - 32px));
  min-height: calc(80vh - var(--header-h));
  margin: 0 auto;
  padding: clamp(64px, 12vw, 120px) 0;
  display: grid;
  align-content: center;
`;

const Card = styled.div`
  padding: clamp(28px, 6vw, 48px);
  border: 1px solid var(--color-line);
  background: var(--color-surface);
`;

const Title = styled.h1`
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 7vw, 5rem);
  line-height: 0.95;
`;

const Message = styled.p`
  margin: 22px 0 30px;
  color: var(--color-muted);
  font-size: 1.08rem;
`;

const Button = styled(Link)`
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  padding: 0 18px;
  border: 1px solid var(--color-copper);
  background: var(--color-copper);
  color: #fff;
  font-weight: 800;
  text-decoration: none;
`;

export default function ThankYouPage() {
  return (
    <Layout
      pathname="/thank-you/"
      title="Thank You | The Startup Life"
      description="Thank you for contacting The Startup Life."
    >
      <Wrap>
        <Card>
          <Title>Thank you.</Title>
          <Message>
            Your submission has been received. The Startup Life will follow up by email with the
            next step.
          </Message>
          <Button to="/">Back to Home</Button>
        </Card>
      </Wrap>
    </Layout>
  );
}
