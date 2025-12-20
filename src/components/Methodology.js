import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 6rem 5%;
  background-color: #fff;
  color: #000;
  border-bottom: 1px solid #000;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Sidebar = styled.div`
  h2 {
    font-family: 'Roboto Mono', monospace;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
    position: sticky;
    top: 2rem;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Step = styled.div`
  border-top: 1px solid #000;
  padding: 3rem 0;
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  &:last-child {
    border-bottom: 1px solid #000;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }

  .number {
    font-family: 'Roboto Mono', monospace;
    font-size: 1.2rem;
    color: #666;
    min-width: 50px;
  }

  .content {
    h3 {
      font-family: 'Inter', sans-serif;
      font-size: 2rem;
      font-weight: 500;
      margin: 0 0 1rem 0;
    }

    p {
      font-family: 'Roboto Mono', monospace;
      font-size: 1rem;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
    }
  }
`;

const methodologySteps = [
    {
        id: "01",
        title: "Thesis Development",
        description: "We identify structural gaps in markets where technology can create asymmetric value. We don't just look for problems; we look for missing architecture."
    },
    {
        id: "02",
        title: "Validation & Prototype",
        description: "Rapid iteration cycles to validate unit economics and technical feasibility. We build functional prototypes to test hypotheses in the wild."
    },
    {
        id: "03",
        title: "Scale & Exit",
        description: "Once product-market fit is established, we operationalize for scale, recruiting leadership teams and structured capital for growth."
    }
];

const Methodology = () => {
    return (
        <Section>
            <Sidebar>
                <h2>Our Approach</h2>
            </Sidebar>
            <StepsContainer>
                {methodologySteps.map((step) => (
                    <Step key={step.id}>
                        <span className="number">{step.id}</span>
                        <div className="content">
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    </Step>
                ))}
            </StepsContainer>
        </Section>
    );
};

export default Methodology;
