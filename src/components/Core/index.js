import {
  Heading,
  Paragraph,
  styled,
  breakpoint,
  css,
  palette,
  space,
} from 'bumbag'

export const SubHeading = styled(Heading)`
  font-weight: 300;
  letter-spacing: -1px;
  margin: 0 0 ${space(3, 'major')}rem;
  font-size: 1.5rem;
  line-height: 1.75rem;
  text-align: center;

  ${breakpoint(
    'min-tablet',
    css`
      font-size: 2rem;
      line-height: 2.25rem;
      text-align: left;
    `
  )}
`

export const Highlight = styled(Paragraph)`
  font-weight: 200;
  color: ${palette('primary')};
  font-size: 1.5rem;
  margin-bottom: ${space(3, 'major')}rem !important;

  ${breakpoint(
    'min-tablet',
    css`
      font-size: 2.5rem;
      margin-bottom: ${space(5, 'major')}rem !important;
    `
  )}
`

export const Text = styled(Paragraph)`
  line-height: 2;
  font-size: 0.875rem;

  font-family: var(--serif-font);
  font-weight: 300;

  em {
    font-style: italic;
  }

  strong {
    font-weight: 700;
  }

  a {
    color: ${palette('primary')};
    font-weight: 700;
  }

  a:hover {
    color: ${palette('primaryHover')};
  }

  ${breakpoint(
    'min-tablet',
    css`
      font-size: 1.125rem;
    `
  )}
`
