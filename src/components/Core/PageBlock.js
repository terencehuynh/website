import React from 'react'
import PropTypes from 'prop-types'
import { Container, styled, space } from 'bumbag'

const getVerticalPadding = (props) => {
  if (props.xl) return space(6, 'major')
  else return space(4, 'major')
}

const PageBox = styled.div`
  padding: ${(props) => getVerticalPadding(props)}rem ${space(2, 'major')}rem;
  position: relative;
  background-color: ${(props) => props.bgColor || 'transparent'};
  border-top: ${(props) => (props.border ? '1px solid #e9e9e9' : 'none')};
`

export const PageBlock = ({ as, children, ...props }) => {
  return (
    <PageBox {...props}>
      <Container as={as} breakpoint="desktop">
        {children}
      </Container>
    </PageBox>
  )
}

PageBlock.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
}

export default PageBlock
