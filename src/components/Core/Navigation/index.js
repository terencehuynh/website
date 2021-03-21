import React, { useState } from 'react'
import { Nav, NavList, NavLink, Button, Icon } from './styled'

const NavItems = [
  { title: 'About', to: '/about/' },
  { title: 'Talks', to: '/talks/' },
  { title: 'Writing', to: '/writing/' },
  { title: 'Blog', to: '/blog/', partiallyActive: true },
  { title: 'Contact', to: '/contact/' },
]

const MainNavigation = () => {
  const [active, setActive] = useState(false)

  const onClick = () => {
    setActive(!active)
  }

  return (
    <React.Fragment>
      <Button use="a" variant="link" onClick={onClick} active={active}>
        <Icon icon="solid-bars" />
      </Button>
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
    </React.Fragment>
  )
}

export default MainNavigation
