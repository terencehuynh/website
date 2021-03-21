import React from 'react'
import { Link } from 'gatsby'

import Navigation from '../Navigation'
import { Wrapper, Container } from './styled'

const Header = ({ palette }) => (
  <Wrapper palette={palette}>
    <Container breakpoint="desktop">
      <h1>
        <Link to="/">Terence Huynh</Link>
      </h1>
      <Navigation palette={palette} />
    </Container>
  </Wrapper>
)

export default Header
