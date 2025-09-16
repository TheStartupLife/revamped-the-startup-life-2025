// src/components/ourwork.js
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 6rem 1rem;
  background-color: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #f9f9f9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
      
  
  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;


const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Heading = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  color: #666;
  font-size: 0.95rem;
`;

const OurWork = () => {
  const projects = [
    {
      title: "City of Miami – GetHousing Portal",
      image: "/assets/demo/portfolio/portfolio-3-compressed.jpg",
      description: "Scoped and redesigned public housing intake to streamline city services using research-driven UX flows.",
    },
    {
      title: "MedicalBae – MVP Launch",
      image: "/assets/demo/portfolio/medicalbae-compressed.jpg",
      description: "Delivered end-to-end product specs and oversaw agile sprints to launch a healthtech eCommerce platform.",
    },
    {
      title: "Break.in – Web App Development",
      image: "/assets/demo/portfolio/portfolio-1-compressed.jpg",
      description: "Defined feature roadmap and product architecture for a social discovery app from concept to code-ready.",
    },
    {
      title: "Pretty Penny – Cashback Wallet",
      image: "/assets/demo/portfolio/prettypenny-compressed.jpg",
      description: "Led UX overhaul and spec design for cashback investment platform integrating Stripe, Rakuten & Alpaca APIs.",
    },
  ];
  

  return (
    <Section id="ourwork">
      <Container>
        <Title>Case Studies</Title>
        <Grid>
          {projects.map((project, index) => (
            <Card key={index}>
              <Image src={project.image} alt={project.title} />
              <Content>
                <Heading>{project.title}</Heading>
                <Description>{project.description}</Description>
              </Content>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default OurWork;
