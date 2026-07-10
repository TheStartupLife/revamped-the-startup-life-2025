import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Wrap = styled.footer`
  border-top: 1px solid var(--color-line);
  background: #f4eee7;
`;

const Inner = styled.div`
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: 34px 0;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: center;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Brand = styled.div`
  font-family: var(--font-display);
  font-weight: 750;
  font-size: 1.25rem;
`;

const FinePrint = styled.p`
  margin: 8px 0 0;
  color: var(--color-muted);
  font-size: 0.92rem;
`;

const Links = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 22px;
  justify-content: flex-end;
  font-size: 0.94rem;
  font-weight: 600;

  a {
    color: var(--color-ink);
  }

  @media (max-width: 760px) {
    justify-content: flex-start;
  }
`;

export default function Footer() {
  return (
    <Wrap>
      <Inner>
        <div>
          <Brand>The Startup Life</Brand>
          <FinePrint>Copyright {new Date().getFullYear()} The Startup Life.</FinePrint>
        </div>
        <Links aria-label="Footer navigation">
          <Link to="/projects/">Ventures</Link>
          <a
            href="http://linkedin.com/company/thestartuplife"
            aria-label="The Startup Life on LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </Links>
      </Inner>
    </Wrap>
  );
}
