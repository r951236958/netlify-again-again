// TODO: dear user, please change this to your own instance
const netlifyInstance = "https://gatsby-netlify.mechnick.com/"
if (netlifyInstance === "https://gatsby-netlify.mechnick.com/") {
  console.warn(`

**************************
WARNING: currently using Netlify Identity of https://jamstack-hackathon-starter.netlify.com

this is only meant for the working demo. if you forked or copied this code, you won't have access to this netlify identity instance

Go to your site, enable Netlify Identity, and paste that string here


More docs: https://www.netlify.com/docs/identity/

**************************
`)
}

module.exports = {
  siteMetadata: {
    title: "React App with Google Spreadsheet",
    description: `This is a fork of https://github.com/gatsbyjs/gatsby-starter-default which shows how to use Netlify Identity and Netlify Functions (via Netlify Dev) with Gatsby. Start here for your next JAMstack hackathon or use this as a reference implementation.`,
    author: `Nick Lin`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about/",
      },
      {
        name: "App",
        link: "/app/",
      },
      {
        name: "Page2",
        link: "/page-2/",
      },
      {
        name: "Example",
        link: "/example/",
      },
      {
        name: "Links",
        link: "/links/",
      },
      {
        name: "Form",
        link: "/form/",
      },
      {
        name: "Test",
        link: "/test/",
      },
    ],
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: netlifyInstance,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        // useResolveUrlLoader: true,
        sassOptions: {
          javascriptEnabled: true,
        },
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Roboto`,
                variants: [`300`, `400`, `500`],
              },
            ],
          },
        },
      },
    },
  ],
}
