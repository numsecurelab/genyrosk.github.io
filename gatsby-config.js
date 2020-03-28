module.exports = {
  // pathPrefix: "/",
  siteMetadata: {
    title: `Evgeny's journey`,
    description: `A blog dedicated to my projects and experiences as a software engineer and data scientist.`,
    author: `@genyrosk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `evgeny-blog`,
        short_name: `evgeny-blog`,
        start_url: `/`,
        background_color: `#004C99`,
        theme_color: `#004C99`,
        display: `minimal-ui`,
        icon: `src/assets/img/startup.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve:`gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        }
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,         // use prettier to format JS code output (default)
        svgo: true,             // use svgo to optimize SVGs (default)
        svgoConfig: {
          removeViewBox: true, // remove viewBox when possible (default)
          cleanupIDs: true,    // remove unused IDs and minify remaining IDs (default)
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134214549-1",
        head: false, // Puts tracking script in the head instead of the body
        anonymize: true, //optional
        respectDNT: true, // optional
        // Any additional create only fields (optional)
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
  ],
}
