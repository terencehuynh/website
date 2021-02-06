import React from 'react'
import {
  Navigation,
  List as _List,
  Link as _Link,
  Icon as _Icon,
  styled,
} from 'fannypack'
import { theme } from 'styled-tools'

const List = styled(_List)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Link = styled(_Link)`
  line-height: 2;
  font-size: 1.125rem;
  font-family: var(--serif-font);
  font-weight: 300;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    font-size: 0.875rem;
  }
`

const Icon = styled(_Icon)`
  margin-right: 8px;
`

const ListItem = ({ name, icon, link, ...opt }) => (
  <List.Item>
    <Link href={link} {...opt}>
      {icon && <Icon icon={icon} />}
      {name}
    </Link>
  </List.Item>
)

const ContactSocial = () => (
  <Navigation as="nav" a11yTitle="Profile Links">
    <List>
      <ListItem
        name="Twitter"
        icon="brand-twitter"
        href="https://twitter.com/terencehuynh/"
      />
      <ListItem
        name="Instagram"
        icon="brand-instagram"
        href="https://www.instagram.com/terencehuynh/"
      />
      <ListItem
        name="LinkedIn"
        icon="brand-linkedin-in"
        href="https://www.linkedin.com/in/terencehuynh/"
      />
      <ListItem
        name="Facebook"
        icon="brand-facebook"
        href="https://www.facebook.com/terencehuynh/"
      />
      <ListItem
        name="GitHub"
        icon="brand-github"
        href="https://github.com/terencehuynh/"
      />
      <ListItem
        name="Tumblr"
        icon="brand-tumblr"
        href="http://blog.terencehuynh.com/"
      />
      <ListItem
        name="Last.fm"
        icon="brand-lastfm"
        href="https://www.last.fm/user/terencehuynh"
      />
      <ListItem
        name="Mastodon"
        icon="brand-mastodon"
        rel="me"
        href="https://melb.social/@terence"
      />
      <ListItem
        name="Telegram"
        icon="brand-telegram"
        href="https://telegram.me/terencehuynh"
      />
      <ListItem
        name="Medium"
        icon="brand-medium"
        href="https://medium.com/@terencehuynh"
      />
    </List>
  </Navigation>
)

export default ContactSocial
