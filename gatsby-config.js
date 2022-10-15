module.exports = {
  siteMetadata: {
    title: `minijo.xyz`,
    author: {
      name: `Jonathan Lacasse`,
      bio: `<p>
            Jonathan Lacasse</br>
            Lead Engine Programmer</br>
            @ <a href="https://invokestudios.com">Invoke Studios</a> | <a href="https://wizards.com">Wizards</a>
            </p>`,
      dp: "https://s.gravatar.com/avatar/7e471557114b9ee19c80e224baae96a7?s=1000",
      social: [
        {
          title: "linkedin",
          username: `jonathanlacasse`,
          url: `https://linkedin.com/in/`,
        },
        {
          title: "twitter",
          username: `itsminijo`,
          url: `https://twitter.com/`,
        },
        {
          title: "instagram",
          username: `itsminijo`,
          url: `https://instagram.com/`,
        },
        {
          title: "github",
          username: `MiniJo`,
          url: `https://github.com/`,
        },
        { 
          title: "email", 
          username: `hello@minijo.xyz`, 
          url: `mailto:`
        },
      ],
    },
    description: `minijo.xyz`,
    siteUrl: `https://minijo.xyz`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "minijo.xyz RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minijo.xyz`,
        short_name: `minijo.xyz`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
