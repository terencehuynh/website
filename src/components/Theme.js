import React from 'react'
import { ThemeProvider } from 'fannypack'
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
    menu: '#00196d',
    menuInactive: '#001d80',
    menuHover: '#0b43ff',
    menuText: '#0b43ff',
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
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
