import { Heading, Paragraph, styled, theme, palette } from 'fannypack'
import { SerifFonts, MonoFonts } from '../../constants'

export const PageHeading = styled(Heading)`
  font-size: 1rem
  font-family: ${MonoFonts};
  background-color: ${palette('text')};
  color: white;
  padding: 2px 6px;
  display: inline-block;
  margin: 0 0 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    margin-top: 24px;
  }
`

export const SectionHeading = styled(Heading)`
  font-weight: 400;
  font-size: 1.125rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${props => props.color || 'inherit'};
  margin: 36px 0 16px;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    font-size: 1rem;
  }
`

export const SideHeading = styled(Heading)`
  font-weight: 700;
  font-size: 2.625rem;
  letter-spacing: -1px;
  margin: 0 0 24px;
  color: ${props => props.color || 'inherit'};

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 2rem;
  }
`

export const SubHeading = styled(Heading)`
  font-weight: 300;
  font-size: 2rem;
  letter-spacing: -1px;
  margin: 0 0 24px;
  font-family: ${MonoFonts};
  color: ${props => props.color || 'inherit'};
  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 1.75rem;
  }
`
export const Highlight = styled(Paragraph)`
  font-weight: 300;
  font-size: 2.25rem;
  font-family: ${MonoFonts};

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    font-size: 2rem;
  }
`

export const Text = styled(Paragraph)`
  line-height: 2;
  font-size: 1.125rem;
  font-family: ${SerifFonts};
  font-weight: 300;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    font-size: 0.875rem;
  }
`
