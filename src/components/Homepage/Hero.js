import React from 'react'
import { Flex, Container, styled, space } from 'fannypack'
import { Link } from 'gatsby'
import { theme } from 'styled-tools'

const BgWrap = styled(Flex)`
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: ${space(12, 'major')}rem ${space(2, 'major')}rem;
  background-color: #004fc9;
  position: relative;
`

const HeroLine = styled.span`
  margin: 0;
  font-weight: 300;
  font-size: 2.5rem;
  line-height: 1.25;
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

const Hero = () => (
  <BgWrap>
    <Container breakpoint="desktop">
      <HeroLine>
        My name is <HeroLink to="/about">Terence Huynh</HeroLink> and{' '}
      </HeroLine>
      <HeroLine>
        I am a <HeroLink to="/about">Software Engineer</HeroLink>{' '}
      </HeroLine>
      <HeroLine>
        and <HeroLink to="/writing">Tech Blogger</HeroLink>{' '}
      </HeroLine>
      <HeroLine>
        from{' '}
        <HeroLink to="https://www.visitmelbourne.com/">
          Melbourne, Australia
        </HeroLink>
      </HeroLine>
    </Container>
  </BgWrap>
)

export default Hero
