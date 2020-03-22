import React from 'react'
import { Icon, Flex, Container as _Container, styled } from 'fannypack'
import { Link } from 'gatsby'
import { theme } from 'styled-tools'
import { MonoFonts } from '../../constants'

const BgWrap = styled(Flex)`
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 100px 20px;
  background-color: #004fc9;
  position: relative;
`

const Container = styled(_Container)`
  flex: 1;
`

const HeroLine = styled.span`
  margin: 0;
  font-weight: 300;
  font-size: 2.5rem;
  line-height: 1;
  letter-spacing: -1px;
  color: #97a8e4;
  display: block;
  text-align: left;

  &:not(:last-child) {
    margin: 0 0 12px 0;
  }

  strong {
    color: white;
    font-weight: 700;
  }

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    font-size: 2rem;
    letter-spacing: 0px;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 1.125rem;
  }
`

const HeroLink = styled(Link)`
  text-decoration: none;
  padding: 2px 6px;
  color: white;
  border-bottom: 1px solid white;
  font-weight: 700;
  transition: background-color 0.08s ease-in-out, color 0.08s ease-in-out;

  &:hover {
    background: white;
    color: #004fc9;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    padding: 0 4px;
    display: inline-block;
    clear: both;
  }
`

const HeroIcon = styled(Icon)`
  top: 0.35rem;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 2px;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    width: 1rem;
    height: 1rem;
  }
`

const Hero = () => (
  <BgWrap>
    <Container breakpoint="desktop">
      <HeroLine>
        My name is <HeroLink to="/about">Terence Huynh</HeroLink> and{' '}
      </HeroLine>
      <HeroLine>
        I am a{' '}
        <HeroLink to="/about">
          <HeroIcon icon="solid-laptop-code" /> Software Engineer
        </HeroLink>{' '}
      </HeroLine>
      <HeroLine>
        and{' '}
        <HeroLink to="/writing">
          <HeroIcon icon="solid-pencil-alt" /> Tech Blogger
        </HeroLink>{' '}
      </HeroLine>
      <HeroLine>
        from{' '}
        <HeroLink to="https://www.visitmelbourne.com/">
          <HeroIcon icon="solid-map-marker-alt" /> Melbourne, Australia
        </HeroLink>
      </HeroLine>
    </Container>
  </BgWrap>
)

export default Hero
