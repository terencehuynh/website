import { styled, breakpoint, palette, space, css } from 'bumbag'

const ArticleContent = styled.section`
  p,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr {
    max-width: 680px;
    margin: 0 auto ${space(2, 'major')}rem;

    ${breakpoint(
      'min-tablet',
      css`
        margin: 0 auto ${space(3, 'major')}rem;
      `
    )}
  }

  .gatsby-resp-image-wrapper {
    margin: 0 -${space(2, 'major')}rem ${space(2, 'major')}rem !important;

    ${breakpoint(
      'min-tablet',
      css`
        margin: 0 -${space(2, 'major')}rem ${space(3, 'major')}rem;
      `
    )}
  }

  p {
    font-size: 0.875rem;
    line-height: 1.75rem;
    font-family: var(--serif-font);
    margin: 0 auto 1rem;

    ${breakpoint(
      'min-tablet',
      css`
        font-weight: 300;
        line-height: 2rem;
        font-size: 1rem;
        margin: 0 auto 1.5rem;
      `
    )}
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    letter-spacing: -1px;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.75rem;
    margin-top: ${space(6, 'major')}rem;

    ${breakpoint(
      'min-tablet',
      css`
        font-size: 2rem;
        line-height: 2.25rem;
        margin-top: ${space(8, 'major')}rem;
      `
    )}
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1.75rem;
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: 700;
  }

  a {
    color: ${palette('primary')};
  }

  a:hover {
    color: ${palette('primaryHover')};
  }

  hr {
    border: 0;
    background-color: ${palette('primaryBorder')};
    height: 1px;
  }

  .credits {
    p {
      font-size: 0.75rem;
      line-height: 1.25rem;
      color: ${palette('text100')};
      font-family: inherit;
    }

    p:last-child {
      margin: 0;
    }
  }
`

export default ArticleContent
