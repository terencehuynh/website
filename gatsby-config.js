module.exports = {
  siteMetadata: {
    title: `Terence Huynh`,
    description: `Software Engineer and Tech Blogger from Melbourne, Australia`,
    siteUrl: `https://terencehuynh.com/`,
    author: `@terencehuynh`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-bumbag',
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
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_element: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            output: '/blog/feed.xml',
            title: "Terence Huynh's Blog",
            match: '^/blog/',
          },
        ],
      },
    },
  ],
}
