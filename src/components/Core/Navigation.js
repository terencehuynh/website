import React from 'react'
import { Navigation, List, Link, styled } from 'fannypack'
import { theme } from 'styled-tools'

import MenuButton from './MenuButton'

const Nav = styled(Navigation)`
  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    ul {
      display: none;
    }
    &.active ul {
      display: block;
    }
  }
`

const NavList = styled(List)`
  li {
    display: inline-block;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: unset;
  }

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    display: block;
    clear: both;
    margin: 0 -20px;
    background: #303030;

    li {
      display: block;
    }
  }
`

const NavLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  padding: 25px 14px;
  color: #969898;

  &:hover {
    color: white;
  }

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    border-bottom: 1px solid #606060;
    padding: 12px 20px;
  }
`

class MainNavigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  toggleState = () =>
    this.setState(prevState => ({ active: !prevState.active }))

  render() {
    const { active } = this.state
    const className = active ? 'active' : 'inactive'
    return (
      <Nav as="nav" className={className} a11yTitle="Main Navigation">
        <MenuButton onClick={this.toggleState} className={className} />
        <NavList>
          <NavList.Item>
            <NavLink href="/about">About</NavLink>
          </NavList.Item>
          <NavList.Item>
            <NavLink href="/talks">Talks</NavLink>
          </NavList.Item>
          <NavList.Item>
            <NavLink href="/writing">Writing</NavLink>
          </NavList.Item>
          <NavList.Item>
            <NavLink href="/contact">Contact</NavLink>
          </NavList.Item>
        </NavList>
      </Nav>
    )
  }
}

export default MainNavigation
