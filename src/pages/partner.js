// src/pages/partner.js
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Wrap = styled.main`
  min-height: 80vh;
  padding-bottom: 6rem;
  font-family: 'Roboto Mono', monospace;
`;

const HeaderBand = styled.div`
  background: #f8f8f8;
  border-bottom: 1px solid #000;
  padding: 6rem 5%;

  h1 {
    font-family: 'Inter', sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  p {
    max-width: 800px;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;
    margin: 0;
  }
`;

const ContentContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 5%;
`;

const Section = styled.section`
  margin-bottom: 4rem;

  h2 {
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0 0 1.5rem 0;
    border-bottom: 1px solid #000;
    padding-bottom: 0.5rem;
    display: inline-block;
  }

  ul {
    padding-left: 1.2rem;
    
    li {
      margin-bottom: 0.75rem;
      font-size: 1rem;
      line-height: 1.6;
      color: #333;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: #fff;
  border: 1px solid #000;
  padding: 3rem;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }

  h3 {
    margin: 0 0 1rem;
    font-family: 'Inter', sans-serif;
    font-size: 1.75rem;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: #000;
    text-transform: uppercase;
  }

  input, textarea {
    font-family: 'Roboto Mono', monospace;
    font-size: 1rem;
    padding: 0.8rem;
    border: 1px solid #ccc;
    background: #f9f9f9;
    border-radius: 0;
    width: 100%;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: #000;
      background: #fff;
    }
  }
`;

const SubmitBtn = styled.button`
  align-self: flex-start;
  padding: 1rem 2.5rem;
  background: #000;
  color: #fff;
  border: 1px solid #000;
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #fff;
    color: #000;
  }
`;

export default function PartnerPage() {
  return (
    <Layout
      title="Partner With Us — The Startup Life"
      description="Open, flexible partnerships: equity co-builds, licensing/collabs, pilots, sponsorships, and more."
    >
      <Wrap>
        <HeaderBand>
          <h1>Partner With Us</h1>
          <p>
            We’re open to collaborations that help tell powerful stories, launch thoughtful products,
            and grow community-centered ventures. The ideas below are examples—not requirements.
            If you see a way to build together, we want to hear it.
          </p>
        </HeaderBand>

        <ContentContainer>
          <Section>
            <h2>Who Tends to Be a Fit</h2>
            <ul>
              <li><strong>Media/story partners</strong> across print, digital, audio, or video.</li>
              <li><strong>Beta/launch partners</strong> who want to test with real users.</li>
              <li><strong>Brands &amp; service providers</strong> (e.g., beauty/retail for PrettyPenny; creators for MedicalBae).</li>
              <li><strong>Financial education providers</strong> interested in curriculum/content collabs.</li>
              <li><strong>Funders &amp; sponsors</strong> (e.g., TechGuild activations, community initiatives).</li>
              <li><strong>Influencers/creators</strong> who’d lend audience in exchange for aligned upside.</li>
            </ul>
          </Section>

          <Section>
            <h2>Illustrative Ways to Collaborate</h2>
            <ul>
              <li>Co-created content series (editorial, short-form video, podcasts, newsletters).</li>
              <li>Beta cohorts with shared metrics (sign-ups, retention, NPS, email capture).</li>
              <li>Sponsored launches, pop-ups, or school/library events (e.g., TechGuild + STEM).</li>
              <li>Limited-edition drops and co-branded releases (e.g., MedicalBae, SipNSwoon).</li>
            </ul>
            <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#666' }}>
              We keep scopes tight, measure clearly, and scale with proof—never for vanity.
            </p>
          </Section>

          <Form
            name="partner"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/thank-you/"
          >
            <h3>Tell Us Your Idea</h3>
            <p style={{ marginBottom: '2rem', color: '#555' }}>Open proposals are welcome—no fixed format required.</p>

            <input type="hidden" name="form-name" value="partner" />
            <input type="hidden" name="page" value="/partner" />
            <p hidden>
              <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </p>

            <div className="row">
              <label> Name <input name="name" required /> </label>
              <label> Email <input name="email" type="email" required /> </label>
            </div>

            <div className="row">
              <label> Organization (optional) <input name="org" /> </label>
              <label> Links (site / LinkedIn) <input name="links" placeholder="https://..." /> </label>
            </div>

            <label>
              Ventures you’re most interested in (optional)
              <input name="ventures" placeholder="PrettyPenny, Annakiyah, TechGuild, MedicalBae, Haitians in Tech, SipNSwoon…" />
            </label>

            <label>
              How you’d like to collaborate
              <textarea
                name="proposal"
                rows={6}
                placeholder="Share your idea. If helpful, include goals, audience, timeline, and what you bring to the table."
                required
              />
            </label>

            <label>
              What type of value exchange do you imagine?
              <textarea
                name="value_exchange"
                rows={4}
                placeholder="e.g., sponsorship, distribution, licensing, co-branded launch, audience-for-upside, grant funding, other"
              />
            </label>

            <SubmitBtn type="submit">Submit Partner Application</SubmitBtn>
          </Form>
        </ContentContainer>
      </Wrap>
    </Layout>
  );
}
