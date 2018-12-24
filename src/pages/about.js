import React from 'react'
import {
  Box,
  Container,
  Columns,
  Column,
  Heading,
  Paragraph,
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
            <PageHeading as="h2">About Me</PageHeading>
            <Highlight>
              Hey! I am a full-stack Software Engineer and Tech Blogger based in
              Melbourne, Australia.
            </Highlight>
            <Text>
              I am currently a <strong>Software Engineer at Localz</strong>, a
              startup that is developing last-mile solutions for retail,
              logistics and utility businesses based in Melbourne, Australia. I
              currently work across our front-end, back-end and mobile
              applications.
            </Text>
            <Text>
              I am also the <strong>Executive Editor of TechGeek</strong>,
              covering technology, gaming and geek culture. TechGeek won the
              inaugural Best Independent Media award at the Australian IT
              Journalism Awards (known as the Lizzies) in 2013. It has also been
              nominated Best Website for three consecutive years (2012 - 2014)
              alongside with the <em>Sydney Morning Herald</em>, <em>CNET</em>{' '}
              and <em>Gizmodo Australia</em>.
            </Text>
            <Text>
              In addition, I am the <strong>founder of UNIHACK</strong>,
              Australia's premier university student hackathon. With 300+
              students competing across two cities, we are also one of the
              largest hackathons in Australia.
            </Text>
            <Text>
              Interested to know more about me? Feel free to get in contact.
            </Text>
          </Column>
        </Columns>
      </Container>
    </PageWrap>
    <PageWrap bgColor="#ECEFF1">
      <Container breakpoint="desktop">
        <Columns>
          <Column spread={3}>
            <SideHeading as="h3">History</SideHeading>
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
