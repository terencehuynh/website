import React from 'react'
import { Columns, Grid, Column, styled, space, theme } from 'fannypack'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Image from '../components/Image'
import { SubHeading, Highlight, Text } from '../components/Core'
import PageBlock from '../components/Core/PageBlock'
import Card from '../components/Card'

const Avatar = styled.div`
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
`

const ActivitiesGrid = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: ${space(3, 'major')}rem;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    display: block;
  }
`

const IndexPage = () => (
  <Layout pageTitle="About Me">
    <PageBlock>
      <Columns minBreakpoint="tablet">
        <Column spread={4} spreadTablet={12}>
          <Avatar>
            <Image filename="avatar.png" alt="Terence Huynh" />
          </Avatar>
        </Column>
        <Column spread={7} spreadTablet={12} spreadOffset={1}>
          <Highlight>
            Hey! I am a full-stack Software Engineer and Tech Blogger based in
            Melbourne, Australia.
          </Highlight>
          <Text>
            I am currently a Software Engineer at{' '}
            <a href="https://localz.com">Localz</a>, a startup that is
            developing last-mile solutions for retail, logistics and utility
            businesses based in Melbourne, Australia. I currently work across
            our backend, front-end and mobile applications (React Native).
          </Text>
          <Text>
            I am also the Executive Editor of{' '}
            <a href="https://techgeek.com.au">TechGeek</a>, covering technology,
            gaming and geek culture. TechGeek won the inaugural Best Independent
            Media award at the Australian IT Journalism Awards (known as the
            Lizzies) in 2013. It has also been nominated Best Website for three
            consecutive years (2012 - 2014) alongside with the{' '}
            <em>Sydney Morning Herald</em>, <em>CNET</em> and{' '}
            <em>Gizmodo Australia</em>.
          </Text>
          <Text>
            Interested to know more about me?{' '}
            <Link to="/contact">Feel free to get in contact.</Link>
          </Text>
        </Column>
      </Columns>
    </PageBlock>
    <PageBlock bgColor="#f9f9f9" border={true}>
      <SubHeading as="h3">Community Engagement</SubHeading>
      <ActivitiesGrid>
        <Card.Card>
          <Card.ImageBox>
            <Image filename="unihack.png" alt="UNIHACK" />
          </Card.ImageBox>
          <Card.Title as="h5">UNIHACK Melbourne</Card.Title>
          <Card.Description>
            I am the founder of UNIHACK, Australia's premier university student
            hackathon. With 200 students competing in Melbourne every year, we
            are also one of the largest hackathons in Australia.
          </Card.Description>
          <Card.Button
            as="a"
            href="https://unihack.net/"
            text="Visit the site"
          />
          <Card.Button
            href="https://twitter.com/unihackmelb"
            text="Follow @unihackmelb"
          />
        </Card.Card>
        <Card.Card>
          <Card.ImageBox>
            <Image filename="juniordev.png" alt="JuniorDev Melbourne" />
          </Card.ImageBox>
          <Card.Title as="h5">JuniorDev Melbourne</Card.Title>
          <Card.Description>
            I am one of the organisers of this meetup group that helps new and
            upcoming developers and other members in the IT scene in Melbourne
            learn and connect with their fellow peers in a friendly environment.
          </Card.Description>
          <Card.Button
            href="https://www.meetup.com/Junior-Developers-Melbourne/"
            text="Join the Meetup Group"
          />
          <Card.Button
            as="a"
            href="https://twitter.com/juniordevio"
            text="Follow @juniordevio"
          />
        </Card.Card>
      </ActivitiesGrid>
    </PageBlock>
  </Layout>
)

export default IndexPage
