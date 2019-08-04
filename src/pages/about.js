import React from 'react'
import {
  Container as _Container,
  Columns,
  Column,
  Link,
  styled,
  theme,
} from 'fannypack'

import Layout from '../components/Layout'
import Image from '../components/Image'
import AboutHistory from '../components/About/History'
import { PageHeading, Highlight, Text, SideHeading } from '../components/Core'
import PageBlock from '../components/Core/PageBlock'

import history from '../data/about-history.json'
import current from '../data/about-current.json'

const Container = styled(_Container)`
  position: relative;
`

const Avatar = styled.div`
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
`

const IndexPage = () => (
  <Layout pageTitle="About Me">
    <PageBlock>
      <Container breakpoint="desktop">
        <Columns minBreakpoint="tablet">
          <Column spread={4} spreadTablet={12}>
            <Avatar>
              <Image filename="avatar.png" alt="Terence Huynh" />
            </Avatar>
          </Column>
          <Column spread={7} spreadTablet={12} spreadOffset={1}>
            <PageHeading as="h2">About Me</PageHeading>
            <Highlight>
              Hey! I am a full-stack Software Engineer and Tech Blogger based in
              Melbourne, Australia.
            </Highlight>
            <Text>
              I am currently a <strong>Software Engineer at Localz</strong>, a
              startup that is developing last-mile solutions for retail,
              logistics and utility businesses based in Melbourne, Australia. I
              currently work across our backend, front-end and mobile
              applications (React Native).
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
              Interested to know more about me?{' '}
              <Link href="/contact">Feel free to get in contact.</Link>
            </Text>
          </Column>
        </Columns>
      </Container>
    </PageBlock>
    <PageBlock bgColor="#FFC107">
      <Container breakpoint="desktop">
        <Columns>
          <Column spread={4}>
            <SideHeading as="h3" color="#303030">
              Currently...
            </SideHeading>
          </Column>
          <Column spread={7} spreadOffset={1}>
            <AboutHistory
              data={current}
              borderColor="#FFE57F"
              textColor="#303030"
            />
          </Column>
        </Columns>
      </Container>
    </PageBlock>
    <PageBlock>
      <Container breakpoint="desktop">
        <Columns>
          <Column spread={4}>
            <SideHeading as="h3">Previously...</SideHeading>
          </Column>
          <Column spread={7} spreadOffset={1}>
            <AboutHistory data={history} />
          </Column>
        </Columns>
      </Container>
    </PageBlock>
  </Layout>
)

export default IndexPage
