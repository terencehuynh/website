import React from 'react'
import { Container, styled, space } from 'fannypack'

const PageBox = styled.div`
  padding: ${space(4, 'major')}rem ${space(2, 'major')}rem;
  position: relative;
  background-color: ${props => props.bgColor || 'transparent'};
  border-top: ${props => (props.border ? '1px solid #e9e9e9' : 'none')};
`

export const PageBlock = ({ children, ...props }) => {
  return (
    <PageBox {...props}>
      <Container breakpoint="desktop">{children}</Container>
    </PageBox>
  )
}

export default PageBlock
