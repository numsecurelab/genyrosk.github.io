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
          `gatsby-remark-mathjax`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                snippet: {
                  classes: 'snippet',
                },
                info: {
                  classes: 'info',
                  title: 'optional',
                },
              },
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-excerpts',
      options: {
        sources: {
          snippetBlocks: {
            type: 'htmlQuery',
            sourceField: 'html',
            excerptSelector: '.custom-block.snippet .custom-block-body',
            stripSelector: 'a',
            elementReplacements: [
              {
                selector: 'h6',
                replaceWith: 'strong',
              },
              {
                selector: 'h5',
                replaceWith: 'strong',
              },
              {
                selector: 'h4',
                replaceWith: 'h6',
              },
              {
                selector: 'h3',
                replaceWith: 'h5',
              },
              {
                selector: 'h2',
                replaceWith: 'h4',
              },
              {
                selector: 'h1',
                replaceWith: 'h3',
              },
            ],
          },
          default: {
            type: 'htmlQuery',
            sourceField: 'html',
            excerptSelector: 'html > *',
            ignoreSelector: 'img, .gatsby-highlight',
            stripSelector: 'a',
            elementReplacements: [
              {
                selector: 'h6',
                replaceWith: 'strong',
              },
              {
                selector: 'h5',
                replaceWith: 'strong',
              },
              {
                selector: 'h4',
                replaceWith: 'h6',
              },
              {
                selector: 'h3',
                replaceWith: 'h5',
              },
              {
                selector: 'h2',
                replaceWith: 'h4',
              },
              {
                selector: 'h1',
                replaceWith: 'h3',
              },
            ],
            truncate: {
              length: 80,
              byWords: true,
              ellipsis: '…',
            },
          },
        },
        sourceSets: {
          markdownHtml: ['snippetBlocks', 'default'],
        },
        excerpts: {
          snippet: {
            type: 'html',
            nodeTypeSourceSet: {
              MarkdownRemark: 'markdownHtml',
            },
          },
        },
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
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
        prettier: true, // use prettier to format JS code output (default)
        svgo: true, // use svgo to optimize SVGs (default)
        svgoConfig: {
          removeViewBox: true, // remove viewBox when possible (default)
          cleanupIDs: true, // remove unused IDs and minify remaining IDs (default)
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-134214549-1',
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
