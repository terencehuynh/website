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
  color: white;
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
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 0 24px;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 2rem;
  }
`

const Header = ({ heading, subheading }) => (
  <PageHeader>
    <PageHeading as="h2">{heading}</PageHeading>
    <PageSubHeading>{subheading}</PageSubHeading>
  </PageHeader>
)

export default Header
