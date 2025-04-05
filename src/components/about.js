// src/components/about.js
import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 5rem 1rem;
  background-color: #fff;
  color: #111;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  margin: 2rem;

  h2 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 1rem;

    strong {
      color: #FFDE59;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .tagline {
    font-size: 1.3rem;
    font-style: italic;
    color: #555;
  }

  .cta {
    display: inline-block;
    background-color: #FFDE59;
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    border: 2px solid #FFDE59;
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 30px;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`;

const Images = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Content>
        <img
          src="/assets/img/Logos/Logo-trans-bg-tsl.png"
          alt="The Startup Life logo"
          width="202"
        />
        <h2>
          <strong>Build smarter.</strong><br />
          <strong>Scale faster.</strong>
        </h2>
        <p className="tagline">
          We turn napkin ideas into fully scoped, build-ready product specs.
        </p>
        <p>
          Whether you're launching your MVP or adding new features to an existing platform,
          we specialize in turning chaos into clarity. Our services include detailed
          technical documentation, sprint-ready user stories, and Scrum coaching to help
          teams ship confidently and on time.
        </p>
        <a href="#services" className="cta">
          More about us
        </a>
      </Content>
      <Images>
        <img
          src="/assets/demo/misc/xiexie-compressed.jpg"
          alt="Good Design Example 1"
        />
        <img
          src="/assets/demo/misc/femmefinanciar-compressed.jpg"
          alt="Good Design Example 2"
        />
      </Images>
    </AboutSection>
  );
};

export default About;
