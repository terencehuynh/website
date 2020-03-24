import { Heading, Paragraph, styled, theme, palette, space } from 'fannypack'
import { SerifFonts } from '../../constants'

export const SubHeading = styled(Heading)`
  font-weight: 700;
  font-size: 1.75rem;
  letter-spacing: -1px;
  font-family: ${SerifFonts};
  margin: 0 0 ${space(2, 'major')}rem;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 1.5rem;
    text-align: center;
  }
`

export const Highlight = styled(Paragraph)`
  font-weight: 200;
  font-size: 2.5rem;
  margin-bottom: ${space(5, 'major')}rem !important;
  color: #004fc9;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 1.5rem;
    margin-bottom: ${space(3, 'major')}rem !important;
  }
`

export const Text = styled(Paragraph)`
  line-height: 2;
  font-size: 1.125rem;
  font-family: ${SerifFonts};
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
    color: ${palette('primaryLight')};
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 0.875rem;
  }
`
