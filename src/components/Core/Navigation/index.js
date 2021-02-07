import React from 'react'
import { Nav, NavList, NavLink } from './styled'
import MenuButton from '../MenuButton'

const NavItems = [
  { title: 'About', to: '/about/' },
  { title: 'Talks', to: '/talks/' },
  { title: 'Writing', to: '/writing/' },
  { title: 'Blog', to: '/blog/', partiallyActive: true },
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
    this.setState((prevState) => {
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
            {NavItems.map((item) => {
              return (
                <NavList.Item key={item.title}>
                  <NavLink
                    to={item.to}
                    partiallyActive={item.partiallyActive}
                    activeClassName="current"
                  >
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
