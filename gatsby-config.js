/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Manisha Basra",
    description:
      "Manisha Basra is a software engineer, based in India, specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.",
    siteUrl: "https://jscodelover.netlify.com", // No trailing slash allowed!
    image: "/og.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@jscodelover",
  },

  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "ManishaBasra",
        short_name: "ManishaBasra",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "minimal-ui",
        icon: "src/images/logo.png",
      },
    },
    "gatsby-plugin-offline",
  ],
}
