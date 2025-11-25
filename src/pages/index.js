import React from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/Layout";
import { projects } from "../data/projects";

// ==========================================
// GLOBAL & SHARED STYLES
// ==========================================

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  padding: clamp(80px, 10vw, 160px) 24px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`;

const SectionHeader = styled.header`
  margin-bottom: clamp(48px, 6vw, 80px);
  max-width: 800px;
  
  h2 {
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 24px;
    color: #111827;
  }

  p {
    font-size: clamp(18px, 2vw, 22px);
    line-height: 1.6;
    color: #4b5563;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  background: #111827;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid #111827;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    background: transparent;
    color: #111827;
    transform: translateY(-2px);
  }

  &.outline {
    background: transparent;
    color: #ffffff;
    border-color: #ffffff;

    &:hover {
      background: #ffffff;
      color: #111827;
    }
  }

  &.accent {
    background: #FFDE59;
    border-color: #FFDE59;
    color: #111827;

    &:hover {
      background: transparent;
      color: #FFDE59;
    }
  }
`;

// ==========================================
// HERO SECTION
// ==========================================

const HeroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: #111827;
  color: white;
  padding-top: 80px; /* Account for nav if needed */
  width: 100%;
  overflow-x: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("/assets/demo/bg/bg-31-compressed.png") center/cover no-repeat;
  opacity: 0.4;
  mix-blend-mode: overlay;
  z-index: 0;
`;

const HeroContent = styled(Container)`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h6 {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #FFDE59;
    margin-bottom: 24px;
    animation: ${fadeIn} 0.8s ease-out;
  }

  h1 {
    font-size: clamp(36px, 8vw, 96px);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.03em;
    margin-bottom: 32px;
    max-width: 15ch;
    animation: ${fadeIn} 0.8s ease-out 0.1s backwards;
    word-wrap: break-word;
  }

  p {
    font-size: clamp(18px, 2.5vw, 24px);
    line-height: 1.6;
    max-width: 700px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 48px;
    animation: ${fadeIn} 0.8s ease-out 0.2s backwards;
  }

  .actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
    animation: ${fadeIn} 0.8s ease-out 0.3s backwards;
  }
`;

const LogoStrip = styled.div`
  width: 100%;
  background: #FFDE59;
  padding: 32px 0;
  margin-top: auto;
  position: relative;
  z-index: 2;

  .slick-track {
    display: flex;
    align-items: center;
  }

  img {
    height: 48px;
    width: auto;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;
    padding: 0 20px;

    &:hover {
      filter: none;
      opacity: 1;
    }
  }
`;

const Hero = () => {
  const logoSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
    speed: 5000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
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
    <HeroWrapper>
      <HeroBackground />
      <HeroContent>
        <h6>Currently Building</h6>
        <h1>Venture-Scale Projects</h1>
        <p>
          The Startup Life develops and scales innovative ventures across fintech,
          publishing, telehealth, civic tech, and retail.
        </p>
        <div className="actions">
          <Button href="/projects" className="accent">Explore Projects</Button>
          <Button href="/partner" className="outline">Partner With Us</Button>
        </div>
      </HeroContent>
      <LogoStrip>
        <Slider {...logoSettings}>
          {logos.map((logo, idx) => (
            <div key={idx}>
              <img src={`/assets/demo/clients/${logo}`} alt={`Client ${idx}`} />
            </div>
          ))}
        </Slider>
      </LogoStrip>
    </HeroWrapper>
  );
};

// ==========================================
// PORTFOLIO INTRO SECTION
// ==========================================

const IntroWrapper = styled(Section)`
  background: #111827;
  color: white;
  
  ${Container} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(40px, 8vw, 120px);
    align-items: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      text-align: left;
    }
  }
`;

const IntroText = styled.div`
  h2 {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 800;
    margin-bottom: 24px;
    line-height: 1.1;
  }
  
  p {
    font-size: 18px;
    line-height: 1.7;
    color: #9ca3af;
    margin-bottom: 32px;
  }
`;

const IntroVisual = styled.div`
  position: relative;
  
  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: 100%;
    background: radial-gradient(circle at center, #374151 0%, #111827 70%);
    border-radius: 50%;
    opacity: 0.5;
  }

  .stat {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    
    span {
      display: block;
      font-size: clamp(64px, 10vw, 120px);
      font-weight: 900;
      color: #FFDE59;
      line-height: 1;
    }
    
    label {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: 700;
    }
  }
`;

const PortfolioIntro = () => (
  <IntroWrapper>
    <Container>
      <IntroText>
        <h2>The Startup Life Portfolio</h2>
        <p>
          We’re building and scaling ventures that combine culture, creativity,
          and technology. From fintech to publishing, each project reflects our thesis:
          durable products, thoughtful execution, and real-world impact.
        </p>
        <Button href="/projects" className="accent">See All Ventures</Button>
      </IntroText>
      <IntroVisual>
        <div className="stat">
          <span>5+</span>
          <label>Active Industries</label>
        </div>
      </IntroVisual>
    </Container>
  </IntroWrapper>
);

// ==========================================
// FOCUS AREAS SECTION
// ==========================================

const FocusWrapper = styled(Section)`
  background: #F3F4F6;
`;

const FocusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
`;

const FocusCard = styled.article`
  background: white;
  padding: 32px;
  border-radius: 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 12px;
    color: #111827;
  }

  p {
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 24px;
  }

  .examples {
    font-size: 14px;
    color: #6b7280;
    padding-top: 16px;
    border-top: 1px solid #f3f4f6;
    
    strong {
      color: #111827;
      font-weight: 600;
    }

    a {
      color: #111827;
      text-decoration: underline;
      &:hover { color: #FFDE59; background: #111827; text-decoration: none; }
    }
  }
`;

const AREAS = [
  {
    title: "Fintech",
    desc: "Cashback, payments, and lightweight financial education.",
    examples: [{ label: "PrettyPenny.io", href: "/projects#prettypenny" }],
  },
  {
    title: "Publishing & IP",
    desc: "Original worlds and formats designed for multi-channel distribution.",
    examples: [
      { label: "Annakiyah.com", href: "/projects#annakiyah" },
      { label: "TechGuildHQ.com", href: "/projects#tech-guild" },
    ],
  },
  {
    title: "Workforce Development",
    desc: "Upskilling, talent pipelines, and education initiatives that open opportunities for underrepresented communities.",
    examples: [{ label: "HaitiansinTech.com", href: "/projects#haitiansintech" }, { label: "MedicalBae.com", href: "/projects#medicalbae" }],
  },
  {
    title: "Civic Tech",
    desc: "Digital infrastructure and tools that improve how communities and institutions function.",
    examples: [{ label: "HaitiansinTech.com", href: "/projects#haitiansintech" }],
  },
  {
    title: "Consumer Retail",
    desc: "Niche experiences with strong community and brand affinity.",
    examples: [{ label: "SipNSwoon.com", href: "/projects#sipnswoon" }, { label: "MedicalBae.com", href: "/projects#medicalbae" }, { label: "PrettyPenny.io", href: "/projects#prettypenny" }],
  },
];

const FocusAreas = () => (
  <FocusWrapper>
    <Container>
      <SectionHeader>
        <h2>What We’re Building</h2>
        <p>Our portfolio spans several themes where we see long-term opportunities for impact and growth.</p>
      </SectionHeader>
      <FocusGrid>
        {AREAS.map((area) => (
          <FocusCard key={area.title}>
            <h3>{area.title}</h3>
            <p>{area.desc}</p>
            <div className="examples">
              <strong>Example: </strong>
              {area.examples.map((ex, i) => (
                <span key={ex.label}>
                  {ex.href ? <a href={ex.href}>{ex.label}</a> : ex.label}
                  {i < area.examples.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          </FocusCard>
        ))}
      </FocusGrid>
    </Container>
  </FocusWrapper>
);

// ==========================================
// PROJECTS SHOWCASE SECTION
// ==========================================

const ProjectsWrapper = styled(Section)`
  background: white;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 32px;
`;

const ProjectCard = styled.a`
  display: block;
  text-decoration: none;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 48px rgba(0,0,0,0.06);
    border-color: #d1d5db;
    
    h3 { color: #2563eb; }
  }

  .content {
    padding: 32px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 22px;
    font-weight: 700;
    color: #111827;
    margin: 0;
    transition: color 0.2s;
  }

  p {
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 24px;
    flex: 1;
  }

  .meta {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    font-weight: 600;
    color: #111827;
    margin-top: auto;
    
    svg {
      width: 16px;
      height: 16px;
      transition: transform 0.2s;
    }
  }

  &:hover .meta svg {
    transform: translateX(4px);
  }
`;

const Badge = styled.span`
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 999px;
  letter-spacing: 0.05em;
  background: ${({ $tone }) =>
    $tone === "live" ? "#dcfce7" :
      $tone === "building" ? "#fef3c7" :
        $tone === "exploring" ? "#e0e7ff" :
          "#f3f4f6"};
  color: ${({ $tone }) =>
    $tone === "live" ? "#166534" :
      $tone === "building" ? "#92400e" :
        $tone === "exploring" ? "#3730a3" :
          "#374151"};
`;

// Helpers
const toTone = (status = "") => {
  const s = status.toLowerCase();
  if (s.includes("live")) return "live";
  if (s.includes("build")) return "building";
  if (s.includes("explor")) return "exploring";
  return "open";
};

const toLabel = (status = "") => {
  const s = status.toLowerCase();
  if (s.includes("live")) return "Live";
  if (s.includes("build")) return "Building";
  if (s.includes("explor")) return "Exploring";
  if (s.includes("pilot")) return "Open to Pilots";
  return status || "Status";
};

const primaryLink = (links = []) => {
  if (!Array.isArray(links)) return null;
  return links.find(l => l && typeof l.href === "string" && (l.href.startsWith("/") || /^https?:\/\//i.test(l.href))) || null;
};

const ProjectsShowcase = () => {
  return (
    <ProjectsWrapper>
      <Container>
        <SectionHeader>
          <h2>Projects in Motion</h2>
          <p>A snapshot of ventures at different stages—from early exploration to active scaling.</p>
        </SectionHeader>
        <ProjectGrid>
          {projects.map((p) => {
            const tone = toTone(p.status);
            const statusLabel = toLabel(p.status);
            const link = primaryLink(p.links);
            const href = link ? link.href : "#";

            return (
              <ProjectCard
                key={p.slug || p.name}
                href={href}
                target={/^https?:\/\//i.test(href) ? "_blank" : undefined}
                rel={/^https?:\/\//i.test(href) ? "noopener noreferrer" : undefined}
              >
                <div className="content">
                  <header>
                    <h3>{p.name}</h3>
                    <Badge $tone={tone}>{statusLabel}</Badge>
                  </header>
                  {!!p.oneLiner && <p>{p.oneLiner}</p>}
                  {link && (
                    <div className="meta">
                      {link.label}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                  )}
                </div>
              </ProjectCard>
            );
          })}
        </ProjectGrid>
      </Container>
    </ProjectsWrapper>
  );
};

// ==========================================
// CLOSING CTA SECTION
// ==========================================

const CTAWrapper = styled.section`
  background: #111827;
  color: white;
  padding: clamp(100px, 15vw, 180px) 24px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 222, 89, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const CTAContent = styled(Container)`
  position: relative;
  z-index: 1;
  max-width: 700px;

  h2 {
    font-size: clamp(40px, 6vw, 72px);
    font-weight: 900;
    margin-bottom: 24px;
    line-height: 1;
    letter-spacing: -0.02em;
  }

  p {
    font-size: clamp(18px, 2vw, 24px);
    color: #9ca3af;
    margin-bottom: 48px;
    line-height: 1.6;
  }
`;

const ClosingCTA = () => (
  <CTAWrapper>
    <CTAContent>
      <h2>Let’s build together.</h2>
      <p>
        If you share our vision and can unlock capital, distribution, or expertise,
        we’d love to collaborate on an active venture.
      </p>
      <Button href="/partner" className="accent" style={{ fontSize: '18px', padding: '20px 40px' }}>
        Partner With Us
      </Button>
    </CTAContent>
  </CTAWrapper>
);

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================

export default function HomePage() {
  return (
    <Layout hero={true}>
      <Hero />
      <PortfolioIntro />
      <FocusAreas />
      <ProjectsShowcase />
      <ClosingCTA />
    </Layout>
  );
}
