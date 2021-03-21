import React from 'react'
import { Link } from 'bumbag/Link'
import { Columns } from 'bumbag/Columns/Columns'
import { Column } from 'bumbag/Columns/Column'
import Layout from '../components/Layout'
import { Highlight, Text } from '../components/Core/Text'
import PageBlock from '../components/Core/PageBlock'
import SectionHeading from '../components/Core/SectionHeading'
import ContactSocial from '../components/Contact/Social'

const IndexPage = () => (
  <Layout pageTitle="Contact">
    <PageBlock>
      <Columns>
        <Column spread={7}>
          <SectionHeading text="Contact Me" as="h2" />
          <Highlight>
            Want to get in touch with me? Here's how you can do that...
          </Highlight>
          <Text>
            Anything that is <strong>TechGeek</strong> related - such as press
            releases, story pitches, news tips, and review requests - should be
            directed to my TechGeek inbox. The email is{' '}
            <strong>terencehuynh (at) techgeek.com.au</strong>.
          </Text>
          <Text>
            Otherwise, you can reach me via email at{' '}
            <strong>me (at) terencehuynh.com</strong>. You can also send me a
            direct message on{' '}
            <Link href="https://twitter.com/terencehuynh">Twitter</Link> or send
            me a message through{' '}
            <Link href="https://telegram.me/terencehuynh">Telegram</Link>.
          </Text>
          <Text>
            I am not looking for any freelance development opportunities at this
            current time.
          </Text>
        </Column>
        <Column spread={4} spreadOffset={1}>
          <SectionHeading text="Social Media" as="h3" />
          <Text>
            Any and all views expressed on my social media profiles are my own
            and do not necessarily reflect those of my employer or associated
            organisations that I am involved with.
          </Text>
          <ContactSocial />
        </Column>
      </Columns>
    </PageBlock>
  </Layout>
)

export default IndexPage
