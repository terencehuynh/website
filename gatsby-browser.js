import React from 'react'
import { Provider as BumbagProvider } from 'bumbag/Provider'
import { theme } from './src/theme'
import '@fontsource/merriweather/latin-300.css'
import '@fontsource/merriweather/latin-300-italic.css'
import '@fontsource/merriweather/latin-900.css'

export const wrapRootElement = ({ element, ...props }) => (
  <BumbagProvider theme={theme}>{element}</BumbagProvider>
)
