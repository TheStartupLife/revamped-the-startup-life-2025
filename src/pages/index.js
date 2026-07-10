import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const calendlyUrl = "https://calendly.com/thestartuplife/ai-training-discovery-call";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Startup Life",
  url: "https://www.thestartuplife.io",
  description:
    "The Startup Life provides AI training, AI adoption workshops, and practical AI consulting for corporate teams, founders, and small businesses.",
};

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Training for Corporate Teams",
    provider: {
      "@type": "Organization",
      name: "The Startup Life",
      url: "https://www.thestartuplife.io",
    },
    serviceType: "AI training and AI adoption workshops",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Corporate teams",
    },
    description:
      "Practical AI training for corporate teams that helps employees adopt AI tools, improve workflows, and use AI responsibly at work.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Training for Founders and Small Businesses",
    provider: {
      "@type": "Organization",
      name: "The Startup Life",
      url: "https://www.thestartuplife.io",
    },
    serviceType: "AI consulting for small businesses and founders",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Founders and small business owners",
    },
    description:
      "AI training for founders and AI consulting for small businesses that helps small teams save time, make sharper decisions, and build better operating habits.",
  },
];

const Page = styled.div`
  background:
    radial-gradient(circle at 12% 8%, rgba(184, 107, 61, 0.18), transparent 30%),
    linear-gradient(180deg, #f9f7f4 0%, #f4eee7 42%, #f9f7f4 100%);
`;

const Section = styled.section`
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: clamp(64px, 11vw, 128px) 0;
`;

const Eyebrow = styled.p`
  margin: 0 0 18px;
  color: var(--color-copper-dark);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const Hero = styled(Section)`
  min-height: calc(100vh - var(--header-h));
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.65fr);
  gap: clamp(42px, 7vw, 88px);
  align-items: center;

  @media (max-width: 820px) {
    min-height: auto;
    grid-template-columns: 1fr;
  }
`;

const H1 = styled.h1`
  max-width: 12ch;
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(3.25rem, 10vw, 7.75rem);
  font-weight: 750;
  line-height: 0.9;
  letter-spacing: 0;
`;

const Lead = styled.p`
  max-width: 680px;
  margin: 28px 0 0;
  color: var(--color-muted);
  font-size: clamp(1.08rem, 2.2vw, 1.35rem);
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
`;

const Button = styled.a`
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  padding: 14px 20px;
  border: 1px solid ${({ $variant }) => ($variant === "solid" ? "var(--color-copper)" : "var(--color-line)")};
  background: ${({ $variant }) => ($variant === "solid" ? "var(--color-copper)" : "rgba(255, 255, 255, 0.55)")};
  color: ${({ $variant }) => ($variant === "solid" ? "#fff" : "var(--color-ink)")};
  font-weight: 700;
  text-decoration: none;
  transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--color-copper-dark);
    background: ${({ $variant }) => ($variant === "solid" ? "var(--color-copper-dark)" : "#fff")};
  }
`;

const HeroPanel = styled.aside`
  position: relative;
  min-height: 420px;
  padding: clamp(24px, 4vw, 38px);
  border: 1px solid rgba(184, 107, 61, 0.34);
  background:
    linear-gradient(135deg, rgba(255,255,255,0.76), rgba(255,255,255,0.34)),
    repeating-linear-gradient(90deg, rgba(26,26,26,0.06) 0 1px, transparent 1px 28px);
  overflow: hidden;

  &:before {
    content: "AI";
    position: absolute;
    right: -18px;
    bottom: -38px;
    color: rgba(184, 107, 61, 0.13);
    font-family: var(--font-display);
    font-size: clamp(11rem, 26vw, 18rem);
    line-height: 0.75;
    font-weight: 750;
  }
`;

const PanelCopy = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 24px;
`;

const Signal = styled.div`
  border-top: 1px solid rgba(26, 26, 26, 0.18);
  padding-top: 18px;

  strong {
    display: block;
    font-size: 1.08rem;
    margin-bottom: 6px;
  }

  span {
    color: var(--color-muted);
  }
`;

const Stakes = styled(Section)`
  padding-top: 0;
`;

const StakesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--color-line);
  background: rgba(255, 255, 255, 0.58);

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const StakeCard = styled.article`
  padding: clamp(24px, 4vw, 36px);

  & + & {
    border-left: 1px solid var(--color-line);
  }

  @media (max-width: 820px) {
    & + & {
      border-left: 0;
      border-top: 1px solid var(--color-line);
    }
  }

  h2,
  h3 {
    margin: 0 0 12px;
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 4vw, 3rem);
    line-height: 1;
  }

  p {
    margin: 0;
    color: var(--color-muted);
  }
`;

const SectionIntro = styled.div`
  max-width: 760px;
  margin-bottom: 38px;

  h2 {
    margin: 0;
    font-family: var(--font-display);
    font-size: clamp(2.4rem, 6vw, 4.75rem);
    line-height: 0.98;
  }

  p {
    margin: 18px 0 0;
    color: var(--color-muted);
    font-size: 1.08rem;
  }
`;

const Paths = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const PathCard = styled.article`
  padding: clamp(28px, 5vw, 46px);
  background: var(--color-surface);
  border: 1px solid var(--color-line);

  h3 {
    margin: 0;
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3.15rem);
    line-height: 1;
  }

  p {
    color: var(--color-muted);
    font-size: 1.02rem;
  }

  ul {
    display: grid;
    gap: 12px;
    margin: 26px 0 30px;
    padding: 0;
    list-style: none;
  }

  li {
    padding-left: 22px;
    position: relative;
  }

  li:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.7em;
    width: 8px;
    height: 8px;
    background: var(--color-copper);
  }
`;

const Studio = styled(Section)`
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: clamp(28px, 7vw, 76px);
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const StudioCopy = styled.div`
  p {
    margin: 0 0 18px;
    color: var(--color-muted);
    font-size: 1.12rem;
  }

  a {
    color: var(--color-copper-dark);
    font-weight: 700;
  }
`;

const ProofGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const QuoteCard = styled.article`
  padding: 28px;
  border: 1px solid var(--color-line);
  background: rgba(255, 255, 255, 0.64);

  h3 {
    margin: 0;
    color: var(--color-ink);
    font-family: var(--font-display);
    font-size: 1.45rem;
    line-height: 1.12;
  }

  p {
    margin: 16px 0 0;
    color: var(--color-muted);
    font-size: 1rem;
  }
`;

const FaqList = styled.div`
  display: grid;
  gap: 12px;
`;

const FaqItem = styled.details`
  border: 1px solid var(--color-line);
  background: var(--color-surface);
  padding: 22px 24px;

  summary {
    cursor: pointer;
    font-weight: 800;
  }

  p {
    margin: 14px 0 0;
    color: var(--color-muted);
    max-width: 72ch;
  }
`;

const FinalCta = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const CtaCard = styled.article`
  padding: clamp(28px, 5vw, 42px);
  background: ${({ $dark }) => ($dark ? "var(--color-ink)" : "var(--color-surface)")};
  color: ${({ $dark }) => ($dark ? "#fff" : "var(--color-ink)")};
  border: 1px solid ${({ $dark }) => ($dark ? "var(--color-ink)" : "var(--color-line)")};

  h2 {
    margin: 0;
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3.2rem);
    line-height: 1;
  }

  p {
    color: ${({ $dark }) => ($dark ? "rgba(255,255,255,0.72)" : "var(--color-muted)")};
  }
`;

const OptInForm = styled.form`
  display: grid;
  gap: 12px;
  margin-top: 22px;

  label {
    display: grid;
    gap: 7px;
    color: var(--color-muted);
    font-size: 0.9rem;
    font-weight: 700;
  }

  input {
    min-height: 48px;
    border: 1px solid var(--color-line);
    background: #fff;
    color: var(--color-ink);
    padding: 12px 14px;
  }

  button {
    min-height: 50px;
    border: 1px solid var(--color-copper);
    background: var(--color-copper);
    color: #fff;
    font-weight: 800;
    cursor: pointer;
  }

  button:hover {
    background: var(--color-copper-dark);
  }
`;

const Hidden = styled.p`
  display: none;
`;

const proofItems = [
  {
    title: "People know where AI belongs.",
    body: "Training connects AI to real workflows, so teams are not left guessing which tasks, tools, or use cases matter.",
  },
  {
    title: "Workflows get easier to repeat.",
    body: "The goal is not one impressive demo. It is a set of practical habits employees and founders can use again.",
  },
  {
    title: "Decisions move with more clarity.",
    body: "AI becomes useful when it helps people think, prioritize, draft, research, and act with better inputs.",
  },
];

const faqs = [
  {
    question: "What is AI training for corporate teams?",
    answer:
      "AI training for corporate teams teaches employees how to use AI tools in real work: writing, analysis, research, planning, customer operations, and internal workflows. The goal is adoption, not novelty.",
  },
  {
    question: "What does an AI workshop include?",
    answer:
      "An AI workshop typically includes practical demonstrations, guided exercises, workflow mapping, prompt strategy, risk-aware usage, and team-specific examples. The session is built around how your people already work.",
  },
  {
    question: "How long does an AI training engagement take?",
    answer:
      "Engagement length depends on the team and goals. Some teams begin with a focused workshop, while others use a series of sessions to support adoption across departments and workflows.",
  },
  {
    question: "Is this right for small businesses with no technical background?",
    answer:
      "Yes. The founder and small business training is designed for non-technical operators who want plain-language guidance, practical use cases, and repeatable ways to save time with AI.",
  },
  {
    question: "What AI tools are covered?",
    answer:
      "Training can cover tools such as ChatGPT, Claude, Gemini, Perplexity, Microsoft Copilot, Google Workspace AI features, and workflow-specific tools. The exact mix depends on what your team uses or plans to adopt.",
  },
  {
    question: "How do I get started?",
    answer:
      "Corporate teams can book a discovery call to discuss goals and fit. Founders and small business owners can start with the free AI Starter Kit for Small Business Owners.",
  },
];

export default function HomePage() {
  return (
    <Layout
      flush
      pathname="/"
      title="The Startup Life | AI Training for Corporate Teams and Founders"
      description="The Startup Life offers AI training for corporate teams, AI workshops for employees, and AI consulting for small businesses and founders."
      jsonLd={[organizationSchema, ...serviceSchemas]}
    >
      <Page>
        <Hero>
          <div>
            <Eyebrow>The Startup Life</Eyebrow>
            <H1>Make AI useful at work.</H1>
            <Lead>
              Practical AI training for corporate teams, founders, and small businesses that need
              clearer workflows, faster decisions, and employees who actually use the tools.
            </Lead>
            <Actions aria-label="Primary audience paths">
              <Button
                $variant="solid"
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                For Corporate Teams
              </Button>
              <Button href="#founder-opt-in">For Founders</Button>
            </Actions>
          </div>
          <HeroPanel aria-label="AI adoption focus areas">
            <PanelCopy>
              <Signal>
                <strong>AI workshops for employees</strong>
                <span>Hands-on sessions that move from curiosity to day-to-day use.</span>
              </Signal>
              <Signal>
                <strong>AI consulting for small businesses</strong>
                <span>Plain-language systems for founders who need leverage without complexity.</span>
              </Signal>
              <Signal>
                <strong>AI adoption workshops</strong>
                <span>Workflow-first training built around the way people already work.</span>
              </Signal>
            </PanelCopy>
          </HeroPanel>
        </Hero>

        <Stakes aria-labelledby="stakes-title">
          <StakesGrid>
            <StakeCard>
              <h2 id="stakes-title">AI is already in the workflow.</h2>
              <p>The question is whether people are using it well, safely, and consistently.</p>
            </StakeCard>
            <StakeCard>
              <h3>Teams need adoption.</h3>
              <p>Tools alone do not change performance. Clear habits and shared standards do.</p>
            </StakeCard>
            <StakeCard>
              <h3>Founders need leverage.</h3>
              <p>Small teams can move faster when AI supports decisions, operations, and execution.</p>
            </StakeCard>
          </StakesGrid>
        </Stakes>

        <Section id="ai-training" aria-labelledby="training-title">
          <SectionIntro>
            <Eyebrow>What We Do</Eyebrow>
            <h2 id="training-title">Two paths to practical AI adoption.</h2>
            <p>
              The work is tailored by audience, but the standard is the same: useful training,
              clearer workflows, and visible momentum after the session ends.
            </p>
          </SectionIntro>
          <Paths>
            <PathCard>
              <Eyebrow>Corporate Teams</Eyebrow>
              <h3>AI training that employees can put to work.</h3>
              <p>
                Workshops help teams understand where AI fits, how to use it responsibly, and how
                to turn experiments into measurable workflow improvements.
              </p>
              <ul>
                <li>Employees who actually use AI in their daily work</li>
                <li>Measurable improvements in repeatable workflows</li>
                <li>A sharper competitive edge without generic AI hype</li>
              </ul>
              <Button
                $variant="solid"
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Discovery Call
              </Button>
            </PathCard>
            <PathCard>
              <Eyebrow>Founders and SMBs</Eyebrow>
              <h3>Use AI to move faster and make smarter calls.</h3>
              <p>
                Founder-focused training helps small teams save time, clarify priorities, and use
                AI as an operating advantage without needing a technical background.
              </p>
              <ul>
                <li>Time saved on research, planning, and content workflows</li>
                <li>Clearer decisions with better inputs and faster synthesis</li>
                <li>Simple AI habits that compound for small teams</li>
              </ul>
              <Button href="#founder-opt-in">Get the Free AI Starter Kit</Button>
            </PathCard>
          </Paths>
        </Section>

        <Studio id="about-studio" aria-labelledby="studio-title">
          <div>
            <Eyebrow>About The Studio</Eyebrow>
            <SectionIntro>
              <h2 id="studio-title">Built from a venture studio point of view.</h2>
            </SectionIntro>
          </div>
          <StudioCopy>
            <p>
              The Startup Life is a venture studio for practical ideas at the edge of culture,
              technology, and work. That studio lens shapes the AI training: the focus is not on
              chasing tools, but on building useful systems people can repeat.
            </p>
            <p>
              The company houses multiple ventures and partners with aligned organizations when
              the work creates clear value. AI training is the front door for teams and founders
              who want to move with more clarity and less noise.
            </p>
            <p>
              <a href="/projects/">Explore the ventures</a>
            </p>
          </StudioCopy>
        </Studio>

        <Section aria-labelledby="proof-title">
          <SectionIntro>
            <Eyebrow>In Practice</Eyebrow>
            <h2 id="proof-title">What useful AI adoption looks like.</h2>
            <p>
              The Startup Life is built around outcomes that are easy to understand and hard to
              fake: clearer work, faster execution, and tools people keep using.
            </p>
          </SectionIntro>
          <ProofGrid>
            {proofItems.map((item) => (
              <QuoteCard key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </QuoteCard>
            ))}
          </ProofGrid>
        </Section>

        <Section aria-labelledby="faq-title">
          <SectionIntro>
            <Eyebrow>FAQ</Eyebrow>
            <h2 id="faq-title">Questions people ask before AI training.</h2>
          </SectionIntro>
          <FaqList>
            {faqs.map((item) => (
              <FaqItem key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </FaqItem>
            ))}
          </FaqList>
        </Section>

        <FinalCta id="contact" aria-label="Contact options">
          <CtaCard $dark>
            <Eyebrow>Corporate Inquiry</Eyebrow>
            <h2>Ready to make AI adoption practical?</h2>
            <p>Book a discovery call to discuss your team, goals, and best-fit workshop format.</p>
            <Button
              $variant="solid"
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Discovery Call
            </Button>
          </CtaCard>
          <CtaCard id="founder-opt-in">
            <Eyebrow>Founder Opt-in</Eyebrow>
            <h2>Start with the AI Starter Kit.</h2>
            <p>
              Get the free AI Starter Kit for Small Business Owners and begin with practical
              prompts, workflows, and decision support.
            </p>
            <OptInForm
              name="ai-starter-kit"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/thank-you/"
            >
              <input type="hidden" name="form-name" value="ai-starter-kit" />
              <Hidden>
                <label>
                  Do not fill this out if you are human: <input name="bot-field" />
                </label>
              </Hidden>
              <label>
                First name
                <input name="first_name" autoComplete="given-name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <button type="submit">Get the Free AI Starter Kit</button>
            </OptInForm>
          </CtaCard>
        </FinalCta>
      </Page>
    </Layout>
  );
}
