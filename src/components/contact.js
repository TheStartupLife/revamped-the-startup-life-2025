// src/components/ContactCTA.js
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #f8f9fa;
  color: black;
  text-align: center;
  padding: 5rem 1rem;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  color: black;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.75rem;
  font-weight: bold;
  color: black;
  background-color: #FFDE59;
  border-radius: 50px;
  text-transform: uppercase;
  font-size: 1rem;
  transition: background 0.3s;

  &:hover {
    background-color: #FFDE59;
    color: white;
    text-decoration: none;
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <Title>Let’s build something impactful.</Title>
        <Subtitle>
          Whether you’re ready to launch or just exploring, we’re here to turn ideas into momentum.
        </Subtitle>
        <CTAButton
          href="https://yi9w2vn5pmo.typeform.com/to/Ijtk7Xpa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </CTAButton>
      </Container>
    </Section>
  );
};

export default Contact;
