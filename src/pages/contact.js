import React from 'react'
import {
  Box,
  Container,
  Columns,
  Column,
  Heading,
  Paragraph,
  Link,
  styled,
} from 'fannypack'

import Layout from '../components/Layout'
import Image from '../components/Image'
import AboutHistory from '../components/AboutHistory'

const PageWrap = styled(Box)`
  padding: 48px 0;
  background-color: ${props => props.bgColor || 'transparent'};
`

const PageHeading = styled(Heading)`
  font-size: 1rem;
  margin: 0 0 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`

const SideHeading = styled(Heading)`
  font-weight: 700;
  font-size: 2.625rem;
  letter-spacing: -1px;
  margin: 0;
`

const Highlight = styled(Paragraph)`
  font-weight: 300;
  font-size: 2.625rem;
`

const Text = styled(Paragraph)`
  line-height: 2;
  font-size: 1.125rem;
  font-family: 'Merriweather', sans-serif;
  font-weight: 300;
`

const IndexPage = () => (
  <Layout pageTitle="About Me">
    <PageWrap>
      <Container breakpoint="desktop">
        <Columns>
          <Column spread={3}>
            <Image filename="avatar.png" alt="Terence Huynh" />
          </Column>
          <Column spread={8} spreadOffset={1}>
            <PageHeading as="h2">Contact</PageHeading>
            <Highlight>
              Want to get in touch with me? Here's how you can do that...
            </Highlight>
            <Text>
              Anything that is <strong>TechGeek</strong> related - such as press
              releases, story pitches, news tips, and review requests - should
              be directed to my TechGeek inbox. The email is{' '}
              <strong>terencehuynh (at) techgeek.com.au</strong>.
            </Text>
            <Text>
              All <strong>UNIHACK</strong> enquiries should be directed to the
              UNIHACK team. They can be reached via email at{' '}
              <strong>team (at) unihack.net</strong>.
            </Text>
            <Text>
              Otherwise, you can reach me via email at{' '}
              <strong>me (at) terencehuynh.com</strong>. You can also send me a
              direct message on{' '}
              <Link href="https://twitter.com/terencehuynh">Twitter</Link> or
              send me a message through{' '}
              <Link href="https://telegram.org">Telegram</Link> (terencehuynh).
            </Text>
            <Text>
              I am not looking for any freelance development opportunities at
              this current time.
            </Text>
          </Column>
        </Columns>
      </Container>
    </PageWrap>
    <PageWrap bgColor="#ECEFF1">
      <Container breakpoint="desktop">
        <Columns>
          <Column spread={3}>
            <SideHeading as="h3">Social Media</SideHeading>
          </Column>
          <Column spread={8} spreadOffset={1}>
            <AboutHistory />
          </Column>
        </Columns>
      </Container>
    </PageWrap>
  </Layout>
)

export default IndexPage
