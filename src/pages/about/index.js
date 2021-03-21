import React from 'react'
import { Columns, Column } from 'bumbag'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { SubHeading } from '../../components/Subheading'
import Layout from '../../components/Layout'
import PageBlock from '../../components/Core/PageBlock'
import { Highlight, Text } from '../../components/Core/Text'
import Card from '../../components/Card'
import Grid from '../../components/Grid'
import Avatar from '../../components/Avatar'

const IndexPage = () => (
  <Layout pageTitle="About Me">
    <PageBlock>
      <Columns minBreakpoint="tablet">
        <Column spread={4} spreadTablet={12}>
          <Avatar>
            <StaticImage
              src="assets/avatar.png"
              alt="Terence Huynh"
              style={{ display: 'block' }}
            />
          </Avatar>
        </Column>
        <Column spread={7} spreadTablet={12} spreadOffset={1}>
          <Highlight>
            Hey! I am a full-stack Software Engineer and Tech Blogger based in
            Melbourne, Australia.
          </Highlight>
          <Text>
            I am currently a Software Engineer at{' '}
            <a href="https://atlassian.com">Atlassian</a>, the company that
            makes tools like Jira, Trello and Confluence that are used by
            thousands of teams worldwide.
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
      <Grid>
        <Card.Card>
          <Card.ImageBox>
            <StaticImage src="assets/unihack.png" alt="UNIHACK" />
          </Card.ImageBox>
          <Card.Title as="h5">UNIHACK Melbourne</Card.Title>
          <Card.Description>
            I am the founder of UNIHACK, Australia's premier university student
            hackathon. With 200 students competing in Melbourne every year, we
            are also one of the largest hackathons in Australia.
          </Card.Description>
          <Card.Button href="https://unihack.net/" text="Visit the site" />
          <Card.Button
            href="https://twitter.com/unihackmelb"
            text="Follow @unihackmelb"
          />
        </Card.Card>
        <Card.Card>
          <Card.ImageBox>
            <StaticImage src="assets/juniordev.png" alt="JuniorDev Melbourne" />
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
            href="https://twitter.com/juniordevio"
            text="Follow @juniordevio"
          />
        </Card.Card>
      </Grid>
    </PageBlock>
  </Layout>
)

export default IndexPage
