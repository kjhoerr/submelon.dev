module.exports = {
  siteMetadata: {
    title: "Kevin J Hoerr <kjhoerr@submelon.tech>",
    description: "The official website of Kevin Hoerr, developer of websites.",
    author: "Kevin J Hoerr",
    version: "1688844793",
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kevin J Hoerr`,
        short_name: `kjhoerr`,
        start_url: `/`,
        background_color: `#e1e1e1`,
        theme_color: `#e1e1e1`,
        display: `browser`,
        icon: `src/images/favicon-70x70.png`,
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ["**/icons*"],
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
  ],
};
