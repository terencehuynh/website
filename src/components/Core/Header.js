import React from 'react'
import {
  Container as _Container,
  Heading,
  styled,
  palette,
  space,
} from 'fannypack'
import { Link } from 'gatsby'
import { theme } from 'styled-tools'

import Navigation from './Navigation'
import { MonoFonts, SerifFonts } from '../../constants'

const Wrapper = styled.div`
  background: ${palette('header')};
  padding: 0 ${space(2, 'major')}rem;
  height: 72px;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    &.homepage {
      background: transparent;
    }
  }
`

const Container = styled(_Container)`
  align-items: center;
  display: flex;
  z-index: 999;
  height: 72px;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    display: block;
  }
`

const SiteHeader = styled(Heading)`
  font-size: 1.5rem;
  margin: 0;
  flex: 1;
  display: flex;
  align-items: center;
  color: white;
  height: 72px;
`

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: ${SerifFonts};
  font-weight: 700;
  letter-spacing: -1px;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`

const Header = () => (
  <Wrapper>
    <Container breakpoint="desktop">
      <SiteHeader as="h1">
        <HeaderLink to="/">Terence Huynh</HeaderLink>
      </SiteHeader>
      <Navigation />
    </Container>
  </Wrapper>
)

export default Header
