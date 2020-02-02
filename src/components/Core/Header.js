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
import { MonoFonts } from '../../constants'

const Wrapper = styled.div`
  background: ${palette('header')};
  padding: 0 ${space(2, 'major')}rem;
  height: 72px;

  &.homepage {
    position: absolute;
    z-index: 999;
    top: 0;
    right: 0;
    left: 0;
    padding: 0;
  }

  &.homepage h1 a {
    display: none;
  }

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    &.homepage {
      background: transparent;
    }
  }
`

const Container = styled(_Container)`
  align-items: center;
  position: relative;
  display: flex;
  z-index: 999;
  height: 72px;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    display: block;
  }
`

const SiteHeader = styled(Heading)`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0px;
  flex: 1;
  color: white;
  height: 72px;
`

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
  height: 72px;
  display: table-cell;
  vertical-align: middle;
  font-family: ${MonoFonts};
  letter-spacing: -1px;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`

const Header = ({ homepage = false }) => (
  <Wrapper className={homepage && 'homepage'}>
    <Container breakpoint="desktop">
      <SiteHeader as="h1">
        <HeaderLink to="/">Terence Huynh</HeaderLink>
      </SiteHeader>
      <Navigation homepage={homepage} />
    </Container>
  </Wrapper>
)

export default Header
