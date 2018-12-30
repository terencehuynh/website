import React from 'react'
import { Flex, Link, Heading, styled } from 'fannypack'
import { theme } from 'styled-tools'

import Navigation from './Navigation'

export const Container = styled(Flex)`
  padding: 0 20px;
  background: #24252a;
  align-items: center;
  position: relative;
  z-index: 999;

  &.homepage {
    position: absolute;
    z-index: 999;
    top: 0;
    right: 0;
    left: 0;
    background: transparent;
    border-bottom: 1px solid #202020;
  }

  &.homepage h1 a {
    display: none;
  }

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    display: block;
  }
`

export const SiteHeader = styled(Heading)`
  font-size: 1.3125rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -1px;
  flex: 1;
  color: white;
  height: 72px;
`

export const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
  height: 72px;
  display: table-cell;
  vertical-align: middle;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`

const Header = ({ homepage }) => (
  <Container className={homepage && 'homepage'}>
    <SiteHeader as="h1">
      <HeaderLink href="/">Terence Huynh</HeaderLink>
    </SiteHeader>
    <Navigation />
  </Container>
)

export default Header
