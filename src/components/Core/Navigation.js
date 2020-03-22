import React from 'react'
import { Navigation, List, styled, palette, space } from 'fannypack'
import { Link } from 'gatsby'
import { theme } from 'styled-tools'

import MenuButton from './MenuButton'

const Nav = styled(Navigation)``

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
  letter-spacing: 1px;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  color: ${palette('primaryLight')};
  margin-right: ${space(4, 'major')}rem;

  &:hover {
    color: white;
  }

  &.current {
    color: white;
    position: relative;
    font-weight: 700;

    &:after {
      content: ' ';
      display: block;
      background: white;
      position: absolute;
      bottom: -5px;
      height: 3px;
      width: 100%;
    }
  }
`

const NavItems = [
  { title: 'About', to: '/about/' },
  { title: 'Talks', to: '/talks/' },
  { title: 'Writing', to: '/writing/' },
  { title: 'Blog', to: '/blog/' },
  { title: 'Contact', to: '/contact/' },
]

class MainNavigation extends React.Component {
  render() {
    return (
      <Nav as="nav" a11yTitle="Main Navigation">
        <NavList>
          {NavItems.map(item => {
            return (
              <NavList.Item>
                <NavLink to={item.to} activeClassName="current">
                  {item.title}
                </NavLink>
              </NavList.Item>
            )
          })}
        </NavList>
      </Nav>
    )
  }
}

export default MainNavigation
