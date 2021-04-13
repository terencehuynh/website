export const generateMeta = ({
  siteUrl,
  metaDescription,
  title,
  author,
  ogImageUrl,
  keywords = [],
  meta = [],
  isBlogPost,
}) => {
  return [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: isBlogPost ? 'summary_large_image' : 'summary',
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]
    .concat(
      isBlogPost
        ? [
            {
              property: 'twitter:site',
              content: author,
            },
            { property: 'twitter:image', content: siteUrl + ogImageUrl },
            { property: 'og:image', content: siteUrl + ogImageUrl },
          ]
        : []
    )
    .concat(
      keywords.length > 0
        ? {
            name: `keywords`,
            content: keywords.join(`, `),
          }
        : []
    )
    .concat(meta)
}
