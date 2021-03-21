import React from 'react'
import { Provider as BumbagProvider } from 'bumbag/Provider'
import { theme } from './src/theme'
import '@fontsource/merriweather/latin-300.css'
import '@fontsource/merriweather/latin-300-italic.css'
import '@fontsource/merriweather/latin-900.css'

import loadable from '@loadable/component'
const LazyFontFaceObserver = loadable.lib(() => import('fontfaceobserver'))

export const wrapRootElement = ({ element, ...props }) => (
  <BumbagProvider theme={theme}>
    <LazyFontFaceObserver>
      {({ default: FontFaceObserver }) => {
        const font = new FontFaceObserver('Merriweather')
        font.load().then(() => {
          document.documentElement.className += ' fonts-loaded'
        })
        return null
      }}
    </LazyFontFaceObserver>
    {element}
  </BumbagProvider>
)
