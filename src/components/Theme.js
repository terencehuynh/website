import React from 'react'
import { ThemeProvider, css } from 'fannypack'
import {
  faLaptopCode,
  faPencilAlt,
  faMapMarkerAlt,
  faBars,
  faHeart,
  faVideo,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faFacebook,
  faTumblr,
  faLastfm,
  faGithub,
  faMastodon,
  faTelegram,
  faMedium,
  faSpeakerDeck,
} from '@fortawesome/free-brands-svg-icons'

const theme = {
  palette: {
    primary: '#004fc9',
    primaryDark: '#002294',
    primaryLight: '#97a8e4',
    header: '#24252a',
    menuInactive: '#2d2e35',
    menuBorder: '#474953',
    menuHover: '#36383f',
  },
  Container: {
    tabletMargin: '0 20px',
  },
  Icon: {
    iconSets: [
      {
        icons: [
          faLaptopCode,
          faPencilAlt,
          faMapMarkerAlt,
          faBars,
          faHeart,
          faVideo,
          faAngleRight,
        ],
        prefix: 'solid-',
        type: 'font-awesome',
      },
      {
        icons: [
          faTwitter,
          faInstagram,
          faLinkedinIn,
          faFacebook,
          faTumblr,
          faMastodon,
          faLastfm,
          faGithub,
          faTelegram,
          faMedium,
          faSpeakerDeck,
        ],
        prefix: 'brand-',
        type: 'font-awesome',
      },
    ],
  },
  Columns: {
    base: css`
      margin: 0;
    `,
  },
  Column: {
    base: css`
      padding: 0;
    `,
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
