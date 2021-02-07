import React from 'react'
import { Provider as BumbagProvider } from 'bumbag'
import { theme } from './src/theme'

export const wrapRootElement = ({ element, ...props }) => (
  <BumbagProvider theme={theme}>{element}</BumbagProvider>
)
