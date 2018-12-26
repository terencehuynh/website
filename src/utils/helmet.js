export const generateLink = () => {
  return [
    {
      href: 'https://fonts.googleapis.com/css?family=Merriweather:300,900',
      rel: 'stylesheet',
    },
  ]
}

export const generateMeta = ({
  metaDescription,
  title,
  author,
  keywords = [],
  meta = [],
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
      content: `summary`,
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
      keywords.length > 0
        ? {
            name: `keywords`,
            content: keywords.join(`, `),
          }
        : []
    )
    .concat(meta)
}
