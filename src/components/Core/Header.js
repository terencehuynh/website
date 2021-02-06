import React from 'react'
import {
  Container as _Container,
  styled,
  palette,
  theme,
  space,
} from 'fannypack'
import { Link } from 'gatsby'

import Navigation from './Navigation'

const Wrapper = styled.div`
  display: flex;
  padding: ${space(2, 'major')}rem ${space(2, 'major')}rem;
  background: ${palette('primaryDark')};
  min-height: 64px;
`

const Container = styled(_Container)`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 900;
    letter-spacing: -1px;
    font-family: var(--serif-font);

    a {
      color: white;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`

const Header = () => (
  <Wrapper>
    <Container breakpoint="desktop">
      <h1>
        <Link to="/">Terence Huynh</Link>
      </h1>
      <Navigation />
    </Container>
  </Wrapper>
)

export default Header
