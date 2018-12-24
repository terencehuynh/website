import React from 'react'
import { ThemeProvider, css } from 'fannypack'
import {
  faLaptopCode,
  faPencilAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'

const theme = {
  global: {},
  Paragraph: {
    base: css`
      &:not(:last-child) {
        margin-bottom: 18px;
      }
    `,
  },
  Container: {
    tabletMargin: '0 20px',
  },
  Icon: {
    iconSets: [
      {
        icons: [faLaptopCode, faPencilAlt, faMapMarkerAlt],
        prefix: 'solid-',
        type: 'font-awesome',
      },
    ],
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
