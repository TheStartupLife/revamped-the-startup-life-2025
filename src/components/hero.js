// src/components/Hero.js
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled Hero Section
const HeroSection = styled.section`
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  background: url("/assets/demo/bg/bg-31-compressed.png") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  color: white;

  h1 {
    font-size: 5.5rem;
    line-height: 1.2;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  h6 {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1rem;

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }

  p {
    font-size: 1.25rem;
    max-width: 800px;
    margin: 0 auto 2rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  a.btn {
    text-decoration: none;
    padding: 0.75rem 2rem;
    border: 2px solid white;
    border-radius: 999px;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.3s ease;
    font-size: 0.9rem;

    &:hover {
      background: #FFDE59;
      color: black;
      border: 2px solid #FFDE59;
    }
  }
`;


// Styled Logo Carousel Section
const LogoCarouselWrapper = styled.div`
  background: #FFDE59;
  padding: 2rem 0;
  max-width: 100vw;
  overflow-x: hidden;


  .slick-slide {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  img {
    max-height: 60px;
    width: auto;
    object-fit: contain;
    opacity: 0.6;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

// Carousel Component
const ClientLogos = () => {
  const logoSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const logos = [
    "ff-logo.png",
    "xiexie logo special - 2.jpg",
    "cfa-logo-color.png",
    "Seal_of_Miami,_Florida (1).svg",
    "medicalbae-logo.png",
    "cfsf-logo.png",
    "PrettyPenny.png",
  ];

  return (
    <LogoCarouselWrapper>
      <Slider {...logoSettings}>
        {logos.map((logo, idx) => (
          <div key={idx}>
            <img src={`/assets/demo/clients/${logo}`} alt={`Client ${idx}`} />
          </div>
        ))}
      </Slider>
    </LogoCarouselWrapper>
  );
};

// Exported Component
const Hero = () => {
  return (
    <>
      <HeroSection>
        <div style={{ width: "100%" }}>
          <h6>WE LOVE CREATING</h6>
          <h1>Digital Ideas</h1>
          <p>
            The Startup Life is a thriving creative digital media & software
            development consultancy based in Miami, FL.
          </p>
          <a href="#" className="btn">
            Learn More
          </a>
        </div>
      </HeroSection>

      <ClientLogos />
    </>
  );
};

export default Hero;
