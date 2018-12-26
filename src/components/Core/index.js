import { Heading, Paragraph, styled } from 'fannypack'
import { theme } from 'styled-tools'

export const PageHeading = styled(Heading)`
  font-size: 1rem;
  margin: 0 0 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    margin-top: 24px;
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

export const Highlight = styled(Paragraph)`
  font-weight: 300;
  font-size: 2.625rem;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    font-size: 2rem;
  }
`

export const Text = styled(Paragraph)`
  line-height: 2;
  font-size: 1.125rem;
  font-family: 'Merriweather', sans-serif;
  font-weight: 300;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    font-size: 0.875rem;
  }
`
