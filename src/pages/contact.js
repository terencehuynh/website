import React from 'react'
import { Container, Columns, Column, Link } from 'fannypack'

import Layout from '../components/Layout'
import PageBlock from '../components/PageBlock'
import ContactSocial from '../components/Contact/Social'
import { PageHeading, Highlight, Text } from '../components/Core'

const IndexPage = () => (
  <Layout pageTitle="Contact">
    <PageBlock>
      <Container breakpoint="desktop">
        <Columns>
          <Column spread={8}>
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
              Otherwise, you can reach me via email at{' '}
              <strong>me (at) terencehuynh.com</strong>. You can also send me a
              direct message on{' '}
              <Link href="https://twitter.com/terencehuynh">Twitter</Link> or
              send me a message through{' '}
              <Link href="https://telegram.me/terencehuynh">Telegram</Link>.
            </Text>
            <Text>
              I am not looking for any freelance development opportunities at
              this current time.
            </Text>
            <PageHeading as="h2">Elsewhere on the Web</PageHeading>
            <ContactSocial />
          </Column>
        </Columns>
      </Container>
    </PageBlock>
  </Layout>
)

export default IndexPage
