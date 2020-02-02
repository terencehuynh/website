export const generateLink = (links = []) => {
  return [
    {
      href:
        'https://fonts.googleapis.com/css?family=Martel:200,900&display=swap',
      rel: 'stylesheet',
    },
    {
      href:
        'https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,600&display=swap',
      rel: 'stylesheet',
    },
    ...links,
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
