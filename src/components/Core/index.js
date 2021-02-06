import { Heading, Paragraph, styled, theme, palette, space } from 'fannypack'

export const SubHeading = styled(Heading)`
  font-weight: 300;
  font-size: 2rem;
  line-height: 2.25rem;
  letter-spacing: -1px;
  margin: 0 0 ${space(3, 'major')}rem;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    text-align: center;
  }
`

export const Highlight = styled(Paragraph)`
  font-weight: 200;
  font-size: 2.5rem;
  margin-bottom: ${space(5, 'major')}rem !important;
  color: ${palette('primary')};

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 1.5rem;
    margin-bottom: ${space(3, 'major')}rem !important;
  }
`

export const Text = styled(Paragraph)`
  line-height: 2;
  font-size: 1.125rem;
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

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 0.875rem;
  }
`
