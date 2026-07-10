/**
 * @type {import('gatsby').GatsbyConfig}
 */
const trackingIds = [
  process.env.GATSBY_GA_TRACKING_ID,
  process.env.GA_TRACKING_ID,
].filter(Boolean);

module.exports = {
  siteMetadata: {
    title: `The Startup Life | AI Training for Teams and Founders`,
    description: `AI training, AI adoption workshops, and AI consulting for corporate teams, founders, and small businesses.`,
    siteUrl: `https://www.thestartuplife.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds,
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
