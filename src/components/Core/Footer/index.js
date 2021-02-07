import React from 'react'
import { Container, Icon, Link } from 'bumbag'

import FooterSocial from './FooterSocial'
import { FooterSection, FooterParagraph } from './styled'

const Footer = () => (
  <FooterSection>
    <Container breakpoint="desktop">
      <FooterSocial />
      <FooterParagraph>
        &copy; 2021 Terence Huynh. All Rights Reserved.
      </FooterParagraph>
      <FooterParagraph>
        Made with <Icon a11yLabel="love" icon="solid-heart" color="#e53935" />{' '}
        in Melbourne, Australia
      </FooterParagraph>
      <FooterParagraph>
        Built with <Link href="https://bumbag.style">Bumbag</Link> and{' '}
        <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
      </FooterParagraph>
    </Container>
  </FooterSection>
)

export default Footer
