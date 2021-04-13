const feedQuery = `
  {
    allMarkdownRemark(
      filter: { fields: { format: { eq: "post" } } }
      sort: { order: DESC, fields: [frontmatter___date] },
    ) {
      edges {
        node {
          html
          fields { slug }
          frontmatter {
            title
            date
            summary
          }
        }
      }
    }
  }
`

const serializeFeedItems = (isSummary = false) => ({
  query: {
    site: {
      siteMetadata: { siteUrl },
    },
    allMarkdownRemark,
  },
}) => {
  return allMarkdownRemark.edges.map(({ node }) => {
    const {
      html,
      frontmatter: { title, date, summary: description },
      fields: { slug },
    } = node
    const postUrl = siteUrl + slug
    return {
      title,
      date,
      description,
      url: postUrl,
      guid: postUrl,
      custom_elements: [
        {
          'content:encoded': isSummary
            ? `<p>${description}</p><p><a href="${postUrl}">Read More</a></p>`
            : html,
        },
      ],
    }
  })
}

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
            query: feedQuery,
            serialize: serializeFeedItems(true),
            output: '/blog/feed.xml',
            title: "Terence Huynh's Blog",
            match: '^/blog/',
          },
          {
            query: feedQuery,
            serialize: serializeFeedItems(false),
            output: '/blog/feed-full.xml',
            title: "Terence Huynh's Blog - Full Article",
            match: '^/blog/',
          },
        ],
      },
    },
  ],
}
