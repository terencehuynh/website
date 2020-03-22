import React from 'react'
import {
  Container,
  Columns,
  Column,
  Icon,
  Paragraph,
  Link,
  styled,
  space,
} from 'fannypack'

import FooterSocial from './FooterSocial'

const FooterParagraph = styled(Paragraph)`
  font-size: 0.75rem;
  font-weight: 400;
  color: #6d6d6d;

  a {
    color: #6d6d6d;
    font-weight: 700;
  }

  a:hover {
    color: #004fc9;
  }

  &:not(:last-child) {
    margin-bottom: 2px;
  }
`

const FooterSection = styled.footer`
  background: #f2f2f2;
  padding: ${space(4, 'major')}rem;
`

const Footer = ({ breakpoint }) => (
  <FooterSection>
    <Container breakpoint="desktop">
      <FooterSocial />
      <FooterParagraph>
        &copy; 2020 Terence Huynh. All Rights Reserved.
      </FooterParagraph>
      <FooterParagraph>
        Made with <Icon a11yLabel="love" icon="solid-heart" color="#e53935" />{' '}
        in Melbourne, Australia
      </FooterParagraph>
      <FooterParagraph>
        Built with <Link href="https://fannypack.style">Fannypack</Link> and{' '}
        <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
      </FooterParagraph>
    </Container>
  </FooterSection>
)

export default Footer
