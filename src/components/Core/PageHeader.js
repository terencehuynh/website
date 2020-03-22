import React from 'react'
import {
  Container,
  Icon as _Icon,
  Heading as _Heading,
  styled,
  palette,
  space,
} from 'fannypack'
import { theme } from 'styled-tools'

const Wrapper = styled.div`
  background: ${palette('primary')};
  padding: ${space(6, 'major')}rem 0rem;
`

const Heading = styled(_Heading)`
  font-size: 3rem;
  line-height: 1;
  letter-spacing: -1px;
  color: white;
  font-weight: 700;
  margin: 0;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    font-size: 2rem;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    display: block;
    margin-bottom: ${space(1, 'major')}rem;
  }
`

const Header = ({ heading }) => (
  <Wrapper>
    <Container breakpoint="desktop">
      <Heading as="h2">{heading}</Heading>
    </Container>
  </Wrapper>
)

export default Header
