import React from 'react'
import { Navigation, List, styled, palette, space } from 'fannypack'
import { Link } from 'gatsby'
import { theme } from 'styled-tools'

import MenuButton from './MenuButton'
import { MonoFonts } from '../../constants'

const Nav = styled(Navigation)`
  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    ul {
      display: none;
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
    &.active {
      display: grid;
      clear: both;
      margin: 0 -${space(2, 'major')}rem;
      background: ${palette('menuHover')};
      grid-template-columns: repeat(2, 1fr);
    }

    li {
      display: block;
    }
  }
`

const NavLink = styled(Link)`
  font-size: 0.875rem;
  letter-spacing: 2px;
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  color: #969898;
  margin-left: ${space(4, 'major')}rem;
  font-family: ${MonoFonts};

  &:hover {
    color: white;
  }

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    border-bottom: 1px solid ${palette('menuBorder')};
    padding: ${space(2, 'major')}rem ${space(2, 'major')}rem;
    margin-left: 0;
    text-align: center;
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
      <Nav as="nav" a11yTitle="Main Navigation">
        <MenuButton onClick={this.toggleState} className={className} />
        <NavList className={className}>
          <NavList.Item>
            <NavLink to="/about/">About</NavLink>
          </NavList.Item>
          <NavList.Item>
            <NavLink to="/talks/">Talks</NavLink>
          </NavList.Item>
          <NavList.Item>
            <NavLink to="/writing/">Writing</NavLink>
          </NavList.Item>
          <NavList.Item>
            <NavLink to="/contact/">Contact</NavLink>
          </NavList.Item>
        </NavList>
      </Nav>
    )
  }
}

export default MainNavigation
