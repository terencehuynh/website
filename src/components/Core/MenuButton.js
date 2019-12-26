import React from 'react'
import { Icon as FpIcon, Button as FpButton, styled, palette } from 'fannypack'
import { theme } from 'styled-tools'

const Button = styled(FpButton)`
  color: #969696;
  position: absolute;
  right: 0;
  top: 0;
  height: 72px;
  padding: 20px;
  font-size: 1.3125rem;
  display: none;

  &:hover {
    color: white;
  }

  &.active {
    background: ${palette('menuHover')};
    color: white;
  }

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    display: flex;
    background: ${palette('menuInactive')};
  }
`

const Icon = styled(FpIcon)`
  height: auto;
  flex: 1;
`

const MenuButton = ({ onClick, className }) => (
  <Button as="a" kind="link" onClick={onClick} className={className}>
    <Icon icon="solid-bars" />
  </Button>
)

export default MenuButton
