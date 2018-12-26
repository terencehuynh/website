import React from 'react'
import { Icon, Button as FpButton, styled } from 'fannypack'
import { theme } from 'styled-tools'

export const Button = styled(FpButton)`
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
    background: #303030;
    color: white;
  }

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    display: block;
  }
`

const MenuButton = ({ onClick, className }) => (
  <Button as="a" kind="link" onClick={onClick} className={className}>
    <Icon icon="solid-bars" />
  </Button>
)

export default MenuButton
