import React from 'react'
import { Button, Icon } from './styled'

const MenuButton = ({ onClick, active }) => {
  return (
    <Button as="a" kind="link" onClick={onClick} active={active}>
      <Icon icon="solid-bars" />
    </Button>
  )
}

export default MenuButton
