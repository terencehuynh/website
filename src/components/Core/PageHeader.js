import React from 'react'
import {
  Container,
  Heading as _Heading,
  styled,
  palette,
  space,
  theme,
} from 'fannypack'

const Wrapper = styled.div`
  background: ${palette('primary')};
  padding: ${space(6, 'major')}rem ${space(2, 'major')}rem;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    padding: ${space(4, 'major')}rem ${space(2, 'major')}rem;
  }
`

const Heading = styled(_Heading)`
  font-size: 3rem;
  line-height: 1;
  color: white;
  font-style: italic;
  font-weight: 300;
  font-family: 'Merriweather';
  margin: 0;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    font-size: 2rem;
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
