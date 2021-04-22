module.exports = {
  siteMetadata: {
    title: "submelon.tech",
    description: "The official website of Kevin Hoerr, the developer of websites.",
    author: "Kevin J Hoerr",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
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
      },
    },
    "gatsby-plugin-mdx",
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
  ],
};
