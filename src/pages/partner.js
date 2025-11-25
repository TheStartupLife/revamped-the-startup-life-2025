// src/pages/partner.js
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Wrap = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: clamp(64px, 8vw, 96px) 20px;
  color: #0f172a;

  h1, h2 { margin: 0 0 12px 0; line-height: 1.2; }
  p { color: #334155; line-height: 1.7; margin: 0 0 16px 0; }
  ul { margin: 8px 0 16px 20px; color: #334155; line-height: 1.7; }
`;

const Kicker = styled.p`
  margin-top: 6px;
  color: #475569;
  font-size: 18px;
  line-height: 1.7;
`;

const Section = styled.section`
  &:not(:first-child) { margin-top: clamp(32px, 6vw, 56px); }
`;

const Divider = styled.hr`
  border: 0; height: 1px; background: #e5e7eb;
  margin: clamp(28px, 5vw, 48px) 0;
`;

/* --- Form styles --- */
const Form = styled.form`
  margin-top: 12px; display: grid; gap: 14px;

  label { display: grid; gap: 8px; font-weight: 600; color: #1f2937; }
  input, select, textarea {
    font: inherit; padding: 12px 14px; border: 1px solid #e5e7eb;
    border-radius: 12px; background: #fff; color: #0f172a;
    outline: none; transition: box-shadow .18s ease, border-color .18s ease;
  }
  input:focus, select:focus, textarea:focus {
    border-color: #111827; box-shadow: 0 0 0 3px rgba(17,24,39,.08);
  }
  .row { display: grid; gap: 12px; }
  @media (min-width: 720px) { .row.two { grid-template-columns: 1fr 1fr; } }
`;

const Submit = styled.button`
  margin-top: 2px; align-self: start; text-decoration: none;
  padding: 0.9rem 1.6rem; border: 2px solid #ffde59; border-radius: 999px;
  font-weight: 800; text-transform: uppercase; font-size: 0.9rem;
  color: #111827; background: #ffde59;
  transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
  &:hover { transform: translateY(-2px); background: #ffd944; box-shadow: 0 10px 24px rgba(0,0,0,.08); }
  &:focus-visible { outline: 2px solid #111827; outline-offset: 3px; }
`;

const Note = styled.p`
  margin: 6px 0 0; font-size: 0.9rem; color: #6b7280;
`;

export default function PartnerPage() {
  return (
    <Layout
      title="Partner With Us — The Startup Life"
      description="Open, flexible partnerships: equity co-builds, licensing/collabs, pilots, sponsorships, and more."
    >
      <Wrap>
        <h1>Partner With Us</h1>
        <Kicker>
          We’re open to collaborations that help tell powerful stories, launch thoughtful products,
          and grow community-centered ventures. The ideas below are examples—not requirements.
          If you see a way to build together, we want to hear it.
        </Kicker>

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

        <Divider />

        <Section>
          <h2>Illustrative Ways to Collaborate (Not Exhaustive)</h2>
          <ul>
            <li>Co-created content series (editorial, short-form video, podcasts, newsletters).</li>
            <li>Beta cohorts with shared metrics (sign-ups, retention, NPS, email capture).</li>
            <li>Sponsored launches, pop-ups, or school/library events (e.g., TechGuild + STEM).</li>
            <li>Limited-edition drops and co-branded releases (e.g., MedicalBae, SipNSwoon).</li>
          </ul>
          <Note>We keep scopes tight, measure clearly, and scale with proof—never for vanity.</Note>
        </Section>

        <Divider />

        <Section>
          <h2>Tell Us Your Idea</h2>
          <p>Open proposals are welcome—no fixed format required.</p>

          {/* Netlify-friendly form with honeypot and hidden form-name */}
          <Form
            name="partner"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/thank-you/"
          >
            <input type="hidden" name="form-name" value="partner" />
            <input type="hidden" name="page" value="/partner" />
            <p hidden>
              <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </p>

            <div className="row two">
              <label> Name <input name="name" required /> </label>
              <label> Email <input name="email" type="email" required /> </label>
            </div>

            <div className="row two">
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

            <Submit type="submit">Submit Partner Application</Submit>
            <Note>We review every submission and follow up if there’s a clear fit.</Note>
          </Form>
        </Section>
      </Wrap>
    </Layout>
  );
}
