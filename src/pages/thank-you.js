// src/pages/thank-you.js
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Wrap = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--header-h, 88px));
  padding: 40px 20px;
  text-align: center;
  background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
`;

const Inner = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: clamp(28px, 4vw, 36px);
  margin-bottom: 16px;
  color: #111827;
`;

const Message = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #374151;
  margin-bottom: 32px;
`;

const CTA = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 0.9rem 1.6rem;
  border: 2px solid #ffde59;
  border-radius: 999px;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.9rem;
  color: #111827;
  background: #ffde59;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    background: #ffd944;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  }
`;

export default function ThankYouPage() {
  return (
    <Layout title="Thank You — The Startup Life">
      <Wrap>
        <Inner>
          <Title>Thank You!</Title>
          <Message>
            Your submission has been received. We’ll review it and follow up if there’s a strong fit for collaboration.  
            In the meantime, feel free to explore our ventures and ongoing projects.
          </Message>
          <CTA href="/">Back to Home</CTA>
        </Inner>
      </Wrap>
    </Layout>
  );
}
