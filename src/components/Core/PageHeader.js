import React from 'react'
import { Box, Icon, Heading, Text, styled } from 'fannypack'
import { theme } from 'styled-tools'

const PageHeader = styled(Box)`
  margin-bottom: 48px;
  padding-bottom: 48px;
  border-bottom: 5px solid ${props => props.accent};

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    margin-bottom: 24px;
    padding-bottom: 24px;
  }
`

const PageHeading = styled(Heading)`
  font-size: 2.625rem;
  letter-spacing: -1px;
  color: ${props => props.accent || 'white'};
  font-weight: 700;
  margin: 0;
  display: inline-block;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    font-size: 2rem;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    display: block;
  }
`

const PageSubHeading = styled(Text)`
  font-weight: 200;
  font-size: 2.625rem;
  letter-spacing: -1px;
  border-left: 1px solid #d9d9d9;
  color: #b3b3b3;
  padding: 0 0 0 24px;
  margin: 0 0 0 24px;
  flex: 1;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    font-size: 2rem;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 1.3125rem;
    display: block;
    margin: 0;
    padding: 0;
    border-left: none;
    line-height: 1;
    letter-spacing: 0;
  }
`

const PageIcon = styled(Icon)`
  margin: 0 12px 0 0;
  font-size: 2.625rem;
  align-self: center;
  height: auto;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    font-size: 2rem;
  }
`

const Header = ({ icon, heading, subheading, accent }) => (
  <PageHeader accent={accent}>
    <PageHeading as="h2" accent={accent}>
      <PageIcon icon={icon} />
      {heading}
    </PageHeading>
    <PageSubHeading>{subheading}</PageSubHeading>
  </PageHeader>
)

export default Header
