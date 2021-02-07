import React from 'react'
import {
  List as _List,
  Link as _Link,
  Icon as _Icon,
  styled,
  breakpoint,
  css,
} from 'bumbag'

export const List = styled(_List)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${breakpoint(
    'min-tablet',
    css`
      grid-template-columns: repeat(2, 1fr);
    `
  )}
`

export const Link = styled(_Link)`
  line-height: 2;
  font-size: 0.875rem;
  font-family: var(--serif-font);
  font-weight: 300;

  ${breakpoint(
    'min-desktop',
    css`
      font-size: 1.125rem;
    `
  )}
`

export const Icon = styled(_Icon)`
  margin-right: 8px;
`
