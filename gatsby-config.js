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
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
