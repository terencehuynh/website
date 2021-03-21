import { styled, breakpoint, css, palette, space } from 'bumbag'

export const Text = styled.p`
  line-height: 2;
  font-size: 0.875rem;
  margin: 0 0 1rem;
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
    text-decoration: none;
  }

  a:hover {
    color: ${palette('primaryHover')};
  }

  &:last-child {
    margin: 0;
  }

  ${breakpoint(
    'min-tablet',
    css`
      font-size: 1.125rem;
      margin: 0 0 1.5rem;
    `
  )}
`

export const Highlight = styled.p`
  font-weight: 200;
  color: ${palette('primary')};
  font-size: 1.5rem;
  margin: 0 0 ${space(3, 'major')}rem;

  ${breakpoint(
    'min-tablet',
    css`
      font-size: 2.5rem;
      margin-bottom: 0 0 ${space(5, 'major')}rem;
    `
  )}
`
