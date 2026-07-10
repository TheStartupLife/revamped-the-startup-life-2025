import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  min-height: var(--header-h);
  background: rgba(249, 247, 244, 0.92);
  border-bottom: 1px solid var(--color-line);
  backdrop-filter: blur(18px);
`;

const Inner = styled.div`
  width: min(1120px, calc(100% - 32px));
  min-height: var(--header-h);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const Brand = styled(Link)`
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 3vw, 1.55rem);
  font-weight: 750;
  letter-spacing: 0;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(18px, 3vw, 34px);
  font-size: 0.94rem;
  font-weight: 600;

  a {
    text-decoration: none;
  }

  a:hover {
    color: var(--color-copper-dark);
  }

  @media (max-width: 720px) {
    display: ${({ $open }) => ($open ? "grid" : "none")};
    position: absolute;
    left: 16px;
    right: 16px;
    top: calc(var(--header-h) - 4px);
    padding: 20px;
    background: var(--color-surface);
    border: 1px solid var(--color-line);
    box-shadow: 0 18px 50px rgba(26, 26, 26, 0.12);
  }
`;

const MenuButton = styled.button`
  display: none;
  padding: 10px 0;
  border: 0;
  background: transparent;
  color: var(--color-ink);
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 720px) {
    display: inline-flex;
  }
`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <HeaderWrap>
      <Inner>
        <Brand to="/" onClick={close}>
          The Startup Life
        </Brand>
        <MenuButton
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </MenuButton>
        <Nav aria-label="Main navigation" $open={open}>
          <Link to="/" onClick={close}>
            Home
          </Link>
          <Link to="/about/" onClick={close}>
            About
          </Link>
          <Link to="/#ai-training" onClick={close}>
            AI Training
          </Link>
          <Link to="/#contact" onClick={close}>
            Contact
          </Link>
        </Nav>
      </Inner>
    </HeaderWrap>
  );
}
