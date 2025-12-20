import React from "react";
import styled from "styled-components";
import { GoArrowRight } from "react-icons/go";

const GridSection = styled.section`
  padding: 4rem 5%;
  background-color: #f8f8f8;
  border-bottom: 1px solid #000;
`;

const SectionHeader = styled.div`
  margin-bottom: 3rem;
  border-bottom: 1px solid #000;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h2 {
    font-family: 'Inter', sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
    margin: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  border-top: 1px solid #000;
  border-left: 1px solid #000;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 350px;
  background: white;
  transition: background 0.2s ease;

  &:hover {
    background: #f0f0f0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    
    .number {
      font-family: 'Roboto Mono', monospace;
      font-size: 1rem;
      color: #666;
    }

    .icon {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-family: 'Inter', sans-serif;
    font-size: 1.75rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
  }

  p {
    font-family: 'Roboto Mono', monospace;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #444;
    max-width: 400px;
  }
`;

const tracks = [
    {
        id: "01",
        title: "Venture Architecture",
        description: "End-to-end building of independent startups, from thesis to product-market fit."
    },
    {
        id: "02",
        title: "Corporate Innovation",
        description: "Partnering with enterprises to design and launch internal ventures that disrupt markets."
    },
    {
        id: "03",
        title: "Strategic Capital",
        description: "Deploying pre-seed and seed stage capital into high-leverage technical teams."
    },
    {
        id: "04",
        title: "Applied Research",
        description: "Looking around corners to identify emerging architectural shifts before the market does."
    }
];

const TracksGrid = () => {
    return (
        <GridSection>
            <SectionHeader>
                <h2>Our Tracks</h2>
            </SectionHeader>
            <Grid>
                {tracks.map((track) => (
                    <Card key={track.id}>
                        <div className="header">
                            <span className="number">{track.id}</span>
                            <GoArrowRight className="icon" />
                        </div>
                        <div>
                            <h3>{track.title}</h3>
                            <p>{track.description}</p>
                        </div>
                    </Card>
                ))}
            </Grid>
        </GridSection>
    );
};

export default TracksGrid;
