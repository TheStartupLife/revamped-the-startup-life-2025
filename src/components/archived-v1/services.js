// src/components/services.js
import React from "react";
import styled from "styled-components";

const ServicesSection = styled.section`
  padding: 5rem 1rem;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Card = styled.div`
  flex: 1 1 320px;
  max-width: 360px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  padding: 2rem;
  box-sizing: border-box;
  transition: all 0.3s ease;

    &:hover {
    transform: translateY(-7px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: 90%;
  }

  h6 {
    font-size: 0.9rem;
    color: black;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.1em;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    color: #444;
  }

  ul {
    padding-left: 1.25rem;
    list-style: disc;

    li {
      margin-bottom: 0.4rem;
      font-weight: 500;
      font-size: 0.95rem;
    }
  }
`;

const ServiceCard = ({ number, title, description, items }) => (
  <Card>
    <h6>{number}</h6>
    <h2>{title}</h2>
    <p>{description}</p>
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </Card>
);

const Services = () => {
  return (
    <ServicesSection id="services">
      <Container>
        <Grid>
          <ServiceCard
            number="01"
            title="Product Strategy & Roadmapping"
            description="We help you turn vision into actionable sprints."
            items={[
              "Feature definition & prioritization",
              "Epic and user story mapping",
              "Milestone-driven delivery",
              "Launch planning & success metrics",
            ]}
          />
          <ServiceCard
            number="02"
            title="Technical Spec Development"
            description="Translate ideas into clear, buildable specs for dev teams."
            items={[
              "PRD, flowcharts, and wireframes",
              "System architecture docs",
              "API request/response mapping",
              "Third-party integration plans",
            ]}
          />
          <ServiceCard
            number="03"
            title="Agile Project Execution"
            description="We lead cross-functional teams with clarity and velocity."
            items={[
              "Scrum & sprint facilitation",
              "Backlog grooming & velocity tracking",
              "Weekly standups & demos",
              "Risk mitigation & team unblockers",
            ]}
          />
        </Grid>
      </Container>
    </ServicesSection>

  );
};

export default Services;
