import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
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

const Kicker = styled.p`
  margin: 0 0 1rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: #666;
`;

const Title = styled.h1`
  margin: 0 0 1.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
  line-height: 1.1;
`;

const Message = styled.p`
  margin: 0 auto 2.5rem;
  color: #444;
  font-size: 1rem;
  line-height: 1.6;
  font-family: 'Roboto Mono', monospace;
  max-width: 480px;
`;

const Gif = styled.img`
  display: block;
  width: 100%;
  max-width: 320px;
  margin: 0 auto 2rem;
  border: 1px solid #000;
  /* Optional: grayscale filter to fit the vibe? */
  /* filter: grayscale(100%); */
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
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

  &.primary {
    background: #000;
    color: #fff;

    &:hover {
      background: #fff;
      color: #000;
    }
  }
`;

export default function NotFoundPage() {
  const GIF_URL =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejV5Yml2YXV4bDB1OTFuazUyd3J6d2liODR2NGFpa2Y3aDRvdjgyMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9J7tdYltWyXIY/giphy.gif";

  return (
    <Layout title="Page Not Found — The Startup Life">
      <Wrap>
        <ContentBox>
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
        </ContentBox>
      </Wrap>
    </Layout>
  );
}
