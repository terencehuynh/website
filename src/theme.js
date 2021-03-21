import {
  faLaptopCode,
  faPencilAlt,
  faMapMarkerAlt,
  faBars,
  faHeart,
  faVideo,
  faAngleRight,
  faMugHot,
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

export const theme = {
  palette: {
    primary: '#1F6BC1',
    primaryDark: '#19579F',
    primaryHover: '#0B2747',
    primaryBorder: '#CBDEF6',
    miniHeader: '#EEF4FC',
    miniHeaderLink: '#5F81AB',
    miniHeaderHover: '#184077',
    heroBg: '#0B2747',
    heroText: '#85B3EA',
    text: '#435a6f',
    textLight: '#5F7995',
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
          faMugHot,
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
