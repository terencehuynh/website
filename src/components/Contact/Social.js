import React from 'react'
import { Navigation } from 'bumbag/Navigation'
import { List, Link, Icon } from './styled'

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
