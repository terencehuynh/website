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
import { SerifFonts } from '../../constants'

const Wrapper = styled.div`
  display: flex;
  padding: ${space(2, 'major')}rem ${space(2, 'major')}rem;
  background: ${palette('primaryDark')};
  min-height: 72px;
`

const Container = styled(_Container)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: left;

  h1 {
    margin: 0 0 12px;
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: -1px;
    font-family: ${SerifFonts};

    a {
      color: white;
      text-decoration: none;
    }
  }
`

const Header = ({ showName = true }) => (
  <Wrapper>
    <Container breakpoint="desktop">
      {showName && (
        <h1>
          <Link to="/">Terence Huynh</Link>
        </h1>
      )}
      <Navigation />
    </Container>
  </Wrapper>
)

export default Header
