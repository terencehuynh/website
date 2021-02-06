module.exports = {
  siteMetadata: {
    title: `Terence Huynh`,
    description: `Software Engineer and Tech Blogger from Melbourne, Australia`,
    siteUrl: `https://terencehuynh.com/`,
    author: `@terencehuynh`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false,
        fileName: false,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Merriweather:ital,wght@0,300;0,700;0,900;1,300&display=swap',
          ],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/writing`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/content/assets`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-unwrap-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024,
              quality: 80,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                credits: {
                  classes: 'credits',
                },
              },
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
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
            query: `
              {
                allMarkdownRemark(
                  filter: { fields: { format: { eq: "post" } } }
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/blog/feed.xml',
            title: "Terence Huynh's Blog",
          },
        ],
      },
    },
  ],
}
