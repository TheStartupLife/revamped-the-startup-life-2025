// src/pages/thank-you.js
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Wrap = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(85vh - var(--header-h, 88px));
  padding: 40px 20px;
  background: #f8f8f8;
`;

const ContentBox = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 3rem;
  background: #fff;
  border: 1px solid #000;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #000;
  letter-spacing: -0.02em;
`;

const Message = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 2.5rem;
`;

const CTA = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 1rem 2rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background: #fff;
    color: #000;
  }
`;

export default function ThankYouPage() {
  return (
    <Layout title="Thank You — The Startup Life">
      <Wrap>
        <ContentBox>
          <Title>Thank You!</Title>
          <Message>
            Your submission has been received. We’ll review it and follow up if there’s a strong fit for collaboration.
            In the meantime, feel free to explore our ventures and ongoing projects.
          </Message>
          <CTA href="/">Back to Home</CTA>
        </ContentBox>
      </Wrap>
    </Layout>
  );
}
