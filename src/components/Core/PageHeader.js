import React from 'react'
import { Box, Heading, Text, styled } from 'fannypack'
import { theme } from 'styled-tools'

const PageHeader = styled(Box)`
  margin-bottom: 48px;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    margin-bottom: 24px;
  }
`

const PageHeading = styled(Heading)`
  font-size: 2.625rem;
  letter-spacing: -1px;
  color: ${props => props.textColor || 'white'};
  font-weight: 700;
  margin: 0;
  display: inline-block;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 2rem;
  }
`

const PageSubHeading = styled(Text)`
  font-weight: 300;
  font-size: 2.625rem;
  letter-spacing: -1px;
  color: ${props => props.textColor || 'white'};
  opacity: 0.5;
  margin: 0 0 0 24px;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 2rem;
  }
`

const Header = ({ heading, subheading, textColor }) => (
  <PageHeader>
    <PageHeading as="h2" textColor={textColor}>
      {heading}
    </PageHeading>
    <PageSubHeading textColor={textColor}>{subheading}</PageSubHeading>
  </PageHeader>
)

export default Header
