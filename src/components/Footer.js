import React from 'react'
import {
  Container,
  Columns,
  Column,
  Icon,
  Paragraph,
  Link,
  styled,
} from 'fannypack'

import PageBlock from './PageBlock'
import FooterSocial from './FooterSocial'

const FooterParagraph = styled(Paragraph)`
  font-size: 0.75rem;
  font-weight: 400;
  color: #607d8b;

  a {
    color: #607d8b;
    font-weight: 700;
  }

  a:hover {
    color: #37474f;
  }

  &:not(:last-child) {
    margin-bottom: 2px;
  }
`

const Footer = ({ breakpoint }) => (
  <PageBlock bgColor="#eceff1">
    <Container breakpoint={breakpoint}>
      <Columns>
        <Column>
          <FooterParagraph>
            Made with{' '}
            <Icon a11yLabel="love" icon="solid-heart" color="#e53935" /> in
            Melbourne, Australia
          </FooterParagraph>
          <FooterParagraph>
            Built with <Link href="https://fannypack.style">Fannypack</Link> and{' '}
            <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
          </FooterParagraph>
        </Column>
        <Column>
          <FooterSocial />
        </Column>
      </Columns>
    </Container>
  </PageBlock>
)

export default Footer
