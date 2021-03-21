import React from 'react'
import { Navigation } from 'bumbag/Navigation'
import { Icon } from 'bumbag/Icon'
import { VisuallyHidden } from 'bumbag/VisuallyHidden'
import { List, Link } from './styled'

const ListItem = ({ name, icon, link, ...opt }) => (
  <List.Item>
    <Link href={link} {...opt}>
      <Icon icon={icon} a11yLabel={name} />
      <VisuallyHidden>{name}</VisuallyHidden>
    </Link>
  </List.Item>
)

const FooterSocial = () => (
  <Navigation as="nav" a11yTitle="Footer Links">
    <List orientation="horizontal">
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
        name="GitHub"
        icon="brand-github"
        href="https://github.com/terencehuynh/"
      />
      <ListItem
        name="Medium"
        icon="brand-medium"
        href="https://medium.com/@terencehuynh"
      />
    </List>
  </Navigation>
)

export default FooterSocial
