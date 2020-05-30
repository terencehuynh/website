import React from 'react'
import { Navigation, List, styled, palette, space, theme } from 'fannypack'
import { Link } from 'gatsby'
import MenuButton from './MenuButton'

const Nav = styled(Navigation)`
  flex: 1;
  display: flex;
  justify-content: right;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    margin-top: ${space(2, 'major')}rem;
    margin-left: -${space(2, 'major')}rem;
    margin-bottom: -${space(2, 'major')}rem;
    margin-right: -${space(2, 'major')}rem;
    background: ${palette('menu')};
    padding: ${space(2, 'major')}rem;
    display: ${props => (props.active ? 'block' : 'none')};
    width: 100vw;
  }
`

const NavList = styled(List)`
  li {
    display: inline-block;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: unset;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-top: 1px solid ${palette('primaryDark')};
    border-right: 1px solid ${palette('primaryDark')};

    li {
      border-left: 1px solid ${palette('primaryDark')};
      border-bottom: 1px solid ${palette('primaryDark')};
    }
  }
`

const NavLink = styled(Link)`
  font-size: 0.75rem;
  letter-spacing: 1px;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  color: ${palette('primaryLight')};
  margin-left: ${space(3, 'major')}rem;

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

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    padding: ${space(2, 'major')}rem;
    margin-left: 0;
    font-size: 0.875rem;
    text-align: center;

    &.current {
      &:after {
        display: none;
      }
    }
  }
`

const NavItems = [
  { title: 'About', to: '/about/' },
  { title: 'Talks', to: '/talks/' },
  { title: 'Writing', to: '/writing/' },
  // { title: 'Blog', to: '/blog/' },
  { title: 'Contact', to: '/contact/' },
]

class MainNavigation extends React.Component {
  constructor() {
    super()
    this.state = {
      active: false,
    }
  }

  onClick = () => {
    this.setState(prevState => {
      return { active: !prevState.active }
    })
  }

  render() {
    const { active } = this.state
    return (
      <>
        <MenuButton onClick={this.onClick} active={active} />
        <Nav as="nav" a11yTitle="Main Navigation" active={active}>
          <NavList>
            {NavItems.map(item => {
              return (
                <NavList.Item key={item.title}>
                  <NavLink to={item.to} activeClassName="current">
                    {item.title}
                  </NavLink>
                </NavList.Item>
              )
            })}
          </NavList>
        </Nav>
      </>
    )
  }
}

export default MainNavigation
