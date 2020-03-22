import React from 'react'
import { Heading as _Heading, styled, space } from 'fannypack'

const Heading = styled(_Heading)`
  font-size: 1.125rem;
  margin: 0 0 ${space(5, 'major')}rem;
  color: #004fc9;
  text-transform: uppercase;
  position: relative;

  &:before {
    content: ' ';
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background-color: #004fc9;
  }

  span {
    background: white;
    padding-right: 8px;
    position: relative;
    z-index: 2;
  }
`

const SectionHeading = ({ text, as = 'h2' }) => {
  return (
    <Heading as={as}>
      <span>{text}</span>
    </Heading>
  )
}

export default SectionHeading
