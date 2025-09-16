import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 6rem 1rem;
  background-color: #f5f8fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3rem;
`;

const ImageWrapper = styled.div`
  flex: 1 1 50%;
  text-align: center;

  img {
    width: 100%;
    max-width: 500px;
    border-radius: 16px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`;

const Content = styled.div`
  flex: 1 1 50%;
  text-align: left;

  h2 {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #111;
  }

  p {
    font-size: 1.125rem;
    color: #444;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  a {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #FFDE59;
    color: white;
    border-radius: 30px;
    font-weight: bold;
    text-decoration: none;
    transition: background 0.3s ease;

    &:hover {
      background-color: #FFDE59c;
    }
  }
`;

const HowWeWork = () => {
  return (
    <Section>
      <Container>
        <ImageWrapper>
          <img
            src="/assets/demo/misc/xiexie-compressed.jpg"
            alt="Teamwork in action"
          />
        </ImageWrapper>
        <Content>
          <h2>Collaboration Is Our Superpower</h2>
          <p>
            We don’t just build websites — we craft experiences. Our team
            believes in co-creating with purpose, staying curious, and
            delivering results that resonate. Every project is personal, and
            every pixel is intentional.
          </p>
          <a href="#contact">Let’s Work Together</a>
        </Content>
      </Container>
    </Section>
  );
};

export default HowWeWork;
