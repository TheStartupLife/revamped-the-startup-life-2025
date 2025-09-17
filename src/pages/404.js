import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
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
  max-width: 680px;
`;

const Title = styled.h1`
  margin: 0 0 10px;
  font-size: clamp(28px, 5vw, 40px);
  color: #0f172a;
`;

const Kicker = styled.p`
  margin: 0 0 16px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #6b7280;
  font-size: 0.9rem;
`;

const Message = styled.p`
  margin: 0 auto 28px;
  color: #374151;
  font-size: 18px;
  line-height: 1.7;
  max-width: 70ch;
`;

const Gif = styled.img`
  display: block;
  width: 100%;
  max-width: 360px;
  margin: 0 auto 24px;
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(17, 24, 39, 0.08);
`;

const Actions = styled.div`
  display: inline-flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 0.9rem 1.6rem;
  border: 2px solid #111827;
  border-radius: 999px;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.9rem;
  color: #111827;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;

  &:hover {
    background: #111827;
    color: #ffde59;
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(17, 24, 39, 0.1);
  }

  &.primary {
    background: #ffde59;
    border-color: #ffde59;

    &:hover {
      background: #ffd944;
      color: #111827;
    }
  }
`;

export default function NotFoundPage() {
  // Swap in any fun, lighthearted gif you like:
  // (You can also remove <Gif /> entirely if you prefer a cleaner look.)
  const GIF_URL =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejV5Yml2YXV4bDB1OTFuazUyd3J6d2liODR2NGFpa2Y3aDRvdjgyMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9J7tdYltWyXIY/giphy.gif";

  return (
    <Layout title="Page Not Found — The Startup Life">
      <Wrap>
        <Inner>
          <Kicker>404 — Not Found</Kicker>
          <Title>Looks like this page took a detour.</Title>
          <Message>
            The link you followed doesn’t exist (or moved). No worries—explore
            our live and in-flight ventures, or head back to the homepage.
          </Message>

          <Gif src={GIF_URL} alt="A playful 'oops' animated gif" loading="lazy" />

          <Actions>
            <Button className="primary" to="/">Back to Home</Button>
            <Button to="/projects">See Projects</Button>
            <Button to="/partner">Partner With Us</Button>
          </Actions>
        </Inner>
      </Wrap>
    </Layout>
  );
}
