import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Page = styled.div`
  background: var(--color-bg);
`;

const Section = styled.section`
  width: min(900px, calc(100% - 32px));
  margin: 0 auto;
  padding: clamp(58px, 10vw, 118px) 0;
`;

const Eyebrow = styled.p`
  margin: 0 0 16px;
  color: var(--color-copper-dark);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(3rem, 9vw, 6.2rem);
  line-height: 0.92;
`;

const Lead = styled.p`
  max-width: 720px;
  margin: 28px 0 0;
  color: var(--color-muted);
  font-size: 1.12rem;
`;

const Form = styled.form`
  display: grid;
  gap: 18px;
  margin-top: 46px;
  padding: clamp(24px, 5vw, 42px);
  background: var(--color-surface);
  border: 1px solid var(--color-line);

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;

    @media (max-width: 680px) {
      grid-template-columns: 1fr;
    }
  }

  label {
    display: grid;
    gap: 8px;
    color: var(--color-muted);
    font-weight: 700;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid var(--color-line);
    background: #fff;
    color: var(--color-ink);
    padding: 12px 14px;
  }

  button {
    justify-self: start;
    min-height: 50px;
    padding: 0 20px;
    border: 1px solid var(--color-copper);
    background: var(--color-copper);
    color: #fff;
    font-weight: 800;
    cursor: pointer;
  }
`;

const Hidden = styled.p`
  display: none;
`;

export default function PartnerPage() {
  return (
    <Layout
      pathname="/partner/"
      title="Partner With The Startup Life"
      description="Share an aligned partnership idea with The Startup Life studio."
    >
      <Page>
        <Section>
          <Eyebrow>Partnerships</Eyebrow>
          <Title>Aligned ideas are still welcome.</Title>
          <Lead>
            AI training is the primary offer, but The Startup Life remains a venture studio. If you
            see a thoughtful partnership opportunity around a studio venture, share the context here.
          </Lead>

          <Form
            name="partner"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/thank-you/"
          >
            <input type="hidden" name="form-name" value="partner" />
            <Hidden>
              <label>
                Do not fill this out if you are human: <input name="bot-field" />
              </label>
            </Hidden>
            <div className="row">
              <label>
                Name
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>
            </div>
            <label>
              Organization
              <input name="organization" autoComplete="organization" />
            </label>
            <label>
              Partnership idea
              <textarea
                name="proposal"
                rows={7}
                placeholder="Share the venture, audience, timeline, and what you believe the partnership could unlock."
                required
              />
            </label>
            <button type="submit">Submit Partnership Idea</button>
          </Form>
        </Section>
      </Page>
    </Layout>
  );
}
