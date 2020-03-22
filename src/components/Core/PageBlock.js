import React from 'react'
import { Box, Container, styled, space } from 'fannypack'
import { theme } from 'styled-tools'

const PageBox = styled(Box)`
  padding: ${space(6, 'major')}rem ${space(2, 'major')}rem;
  position: relative;
  background-color: ${props => props.bgColor || 'transparent'};
  border-top: ${props => (props.border ? '1px solid #e9e9e9' : 'none')};
  overflow: visible;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    padding: ${space(3, 'major')}rem ${space(2, 'major')}rem;
  }
`

export const PageBlock = ({ children, ...props }) => {
  return (
    <PageBox {...props}>
      <Container breakpoint="desktop">{children}</Container>
    </PageBox>
  )
}

export default PageBlock
