import React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const siteUrl = "https://www.thestartuplife.io";
const defaultTitle = "The Startup Life | AI Training for Teams and Founders";
const defaultDescription =
  "The Startup Life provides AI training, AI adoption workshops, and practical AI consulting for corporate teams, founders, and small businesses.";
const defaultImage = `${siteUrl}/assets/img/Logos/Logo-trans-bg-tsl.png`;

const GlobalStyle = createGlobalStyle`
  :root {
    --color-bg: #f9f7f4;
    --color-surface: #ffffff;
    --color-ink: #1a1a1a;
    --color-muted: #5f5a54;
    --color-line: #ded7cf;
    --color-copper: #b86b3d;
    --color-copper-dark: #8f4f2a;
    --color-wash: #efe7df;
    --font-display: "Fraunces", "Playfair Display", Georgia, serif;
    --font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --font-mono: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    --header-h: 76px;
  }

  @media (max-width: 760px) {
    :root { --header-h: 66px; }
  }

  * { box-sizing: border-box; }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: var(--header-h);
  }

  body {
    margin: 0;
    background: var(--color-bg);
    color: var(--color-ink);
    font-family: var(--font-body);
    line-height: 1.5;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration-thickness: 0.08em;
    text-underline-offset: 0.18em;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  :focus-visible {
    outline: 3px solid rgba(184, 107, 61, 0.55);
    outline-offset: 3px;
  }
`;

const Main = styled.main`
  padding-top: ${({ $flush }) => ($flush ? "0" : "var(--header-h)")};
`;

const SkipLink = styled.a`
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 1000;
  transform: translateY(-140%);
  border-radius: 999px;
  background: var(--color-ink);
  color: var(--color-surface);
  padding: 0.7rem 1rem;
  font-weight: 700;
  text-decoration: none;
  transition: transform 160ms ease;

  &:focus {
    transform: translateY(0);
  }
`;

const buildUrl = (pathname = "/") => {
  if (/^https?:\/\//.test(pathname)) return pathname;
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteUrl}${normalized}`;
};

export default function Layout({
  children,
  title = defaultTitle,
  description = defaultDescription,
  pathname = "/",
  image = defaultImage,
  jsonLd = [],
  flush = false,
}) {
  const canonical = buildUrl(pathname);
  const structuredData = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,650;9..144,750&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {structuredData.map((item, index) => (
          <script type="application/ld+json" key={index}>
            {JSON.stringify(item)}
          </script>
        ))}
      </Helmet>
      <GlobalStyle />
      <SkipLink href="#main-content">Skip to content</SkipLink>
      <Header />
      <Main id="main-content" $flush={flush} tabIndex="-1">
        {children}
      </Main>
      <Footer />
    </>
  );
}
