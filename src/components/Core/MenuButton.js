import React from 'react'
import {
  Icon as _Icon,
  Button as _Button,
  styled,
  palette,
  css,
  theme,
} from 'fannypack'

const Button = styled(_Button)`
  color: ${palette('menuText')};
  position: absolute;
  right: 0;
  top: 0;
  height: 64px;
  padding: 20px;
  font-size: 1.3125rem;
  display: none;
  cursor: pointer;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    display: block;
    background: ${palette('menuInactive')};

    &:hover {
      color: white;
      background: ${palette('menuHover')};
    }

    ${props =>
      props.active &&
      css`
        color: white;
        background: ${palette('menu')};
      `}
  }
`

const Icon = styled(_Icon)`
  height: auto;
  flex: 1;
`

const MenuButton = ({ onClick, active }) => {
  return (
    <Button as="a" kind="link" onClick={onClick} active={active}>
      <Icon icon="solid-bars" />
    </Button>
  )
}

export default MenuButton
