import React from 'react'
import {
  Navigation,
  List as _List,
  Link as _Link,
  Icon,
  styled,
} from 'fannypack'
import { theme } from 'styled-tools'

const List = styled(_List)`
  text-align: right;

  li {
    display: inline-block;
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    text-align: left;
    margin-top: 24px;
  }
`

const Link = styled(_Link)`
  font-size: 1.5rem;
  color: #78909c;

  &:hover {
    color: #37474f;
  }
`

const ListItem = ({ name, icon, link, ...opt }) => (
  <List.Item>
    <Link href={link} {...opt}>
      <Icon icon={icon} a11yTitle={name} />
    </Link>
  </List.Item>
)

const FooterSocial = () => (
  <Navigation as="nav" a11yTitle="Footer Links">
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
