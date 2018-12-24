import React from 'react'
import { Flex, Heading, Navigation, List, Link, styled } from 'fannypack'

const Container = styled(Flex)`
  padding: 0 20px;
  background: #101010;
  align-content: middle;
`

const SiteHeader = styled(Heading)`
  font-size: 1.3125rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -1px;
  padding: 20px 0;
  flex: 1;
  color: white;

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: white;
    text-decoration: underline;
  }
`

const NavList = styled(List)`
  li {
    display: inline-block;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: unset;
  }
`

const NavLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  padding: 25px 16px;
  color: #969898;

  &:hover {
    color: white;
  }
`

const Header = () => (
  <Container>
    <SiteHeader as="h1">
      <Link href="/">Terence Huynh</Link>
    </SiteHeader>
    <Navigation>
      <NavList isHorizontal>
        <List.Item>
          <NavLink href="/about">About</NavLink>
        </List.Item>
        <List.Item>
          <NavLink href="/talks">Talks</NavLink>
        </List.Item>
        <List.Item>
          <NavLink href="/writing">Writing</NavLink>
        </List.Item>
        <List.Item>
          <NavLink href="/contact">Contact</NavLink>
        </List.Item>
      </NavList>
    </Navigation>
  </Container>
)

export default Header
