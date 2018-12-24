import React from 'react'
import {
  Box,
  Grid,
  Container,
  Card,
  Heading,
  Text,
  Paragraph,
  Button,
  Link,
  styled,
} from 'fannypack'

import Layout from '../components/Layout'
import WritingFeatured from '../components/WritingFeatured'

const PageWrap = styled(Box)`
  padding: 48px 0;
  background-color: ${props => props.bgColor || 'transparent'};
  position: relative;
  overflow: visible;

  &:before {
    content: ' ';
    display: block;
    height: 300px;
    background: #f4511e;
    position: absolute;
    width: 100vw;
    z-index: -1;
    top: 0;
  }
`

const PageHeader = styled(Box)`
  margin-bottom: 48px;
`

const PageHeading = styled(Heading)`
  font-weight: 700;
  font-size: 2.625rem;
  letter-spacing: -1px;
  color: white;
  margin: 0;
  display: inline-block;
`

const PageSubHeading = styled(Text)`
  font-weight: 300;
  font-size: 2.625rem;
  letter-spacing: -1px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 0 24px;
`

const SectionHeading = styled(Text)`
  font-weight: 300;
  font-size: 2.625rem;
  letter-spacing: -1px;
  color: #f4511e;
  margin: 24px 0 8px;
`

const ArticlePublication = styled(Paragraph)`
  font-size: 1rem;
  color: #607d8b;
  &:not(:last-child) {
    margin: 0px;
  }
`

const ArticleDate = styled(Paragraph)`
  font-size: 0.8125rem;
  color: #607d8b;
  text-transform: uppercase;
  &:not(:last-child) {
    margin: 0px;
  }
`

const ArticleTitle = styled(Heading)`
  font-size: 1.5rem;
  font-family: 'Merriweather', sans-serif;
  letter-spacing: -1px;
  font-weight: 900;
  margin: 0 0 12px;

  a {
    text-decoration: none;
    color: #37474f;
  }

  a:hover {
    color: #f4511e;
  }
`

const Stories = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  border-left: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
`

const Story = styled(Grid.Item)`
  padding: 24px;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
`

const IndexPage = () => (
  <Layout pageTitle="Talks">
    <PageWrap>
      <Container breakpoint="desktop">
        <PageHeader>
          <PageHeading as="h2">Writing</PageHeading>
          <PageSubHeading>I write stories...</PageSubHeading>
        </PageHeader>
        <WritingFeatured />
        <SectionHeading as="h3">Portfolio</SectionHeading>
        <Stories>
          <Story>
            <ArticleTitle as="h6">
              <Link href="http://techgeek.com.au/2015/01/05/tinder-experiment-reveals-online-predators-using-app-meet-underage-girls/">
                Tinder experiment reveals online predators are using the app to
                meet underage girls
              </Link>
            </ArticleTitle>
            <ArticlePublication>TechGeek</ArticlePublication>
            <ArticleDate>January 5, 2015</ArticleDate>
          </Story>
          <Story>
            <ArticleTitle as="h6">
              <Link href="http://techgeek.com.au/2014/03/20/crossing-the-line/">
                Crossing the Line: YouTube community in crisis as sexual assault
                allegations are made public
              </Link>
            </ArticleTitle>
            <ArticlePublication>TechGeek</ArticlePublication>
            <ArticleDate>March 20, 2014</ArticleDate>
          </Story>
          <Story>
            <ArticleTitle as="h6">
              <Link href="http://techgeek.com.au/2016/11/06/myrepublic-ceo-isps-dont-want-know-actually-screwed/">
                MyRepublic CEO: The ISPs “don’t want you to know they actually
                screwed you over”
              </Link>
            </ArticleTitle>
            <ArticlePublication>TechGeek</ArticlePublication>
            <ArticleDate>November 6, 2016</ArticleDate>
          </Story>
          <Story>
            <ArticleTitle as="h6">
              <Link href="https://medium.com/localz-engineering/why-its-important-to-dogfood-your-own-product-10b387223db7/">
                Why it’s important to "dogfood" your own product
              </Link>
            </ArticleTitle>
            <ArticlePublication>Localz Engineering</ArticlePublication>
            <ArticleDate>December 17, 2018</ArticleDate>
          </Story>
          <Story>
            <ArticleTitle as="h6">
              <Link href="https://medium.com/localz-engineering/why-you-should-get-involved-in-your-local-tech-community-1a7514865178/">
                Why you should get involved in your local tech community
              </Link>
            </ArticleTitle>
            <ArticlePublication>Localz Engineering</ArticlePublication>
            <ArticleDate>December 17, 2018</ArticleDate>
          </Story>
          <Story>
            <ArticleTitle as="h6">
              <Link href="http://techgeek.com.au/2013/08/30/nokia-lumia-925-review-just-style-substance/">
                Nokia Lumia 925 Review: is it just style over substance?
              </Link>
            </ArticleTitle>
            <ArticlePublication>TechGeek</ArticlePublication>
            <ArticleDate>August 30, 2013</ArticleDate>
          </Story>
          <Story>
            <ArticleTitle as="h6">
              <Link href="https://medium.com/@terencehuynh/hey-hackathons-australia-do-we-really-need-to-certify-hackathons-10e6fb2db1da/">
                Hey Hackathons Australia, do we really need to certify
                hackathons?
              </Link>
            </ArticleTitle>
            <ArticlePublication>Medium</ArticlePublication>
            <ArticleDate>November 1, 2016</ArticleDate>
          </Story>
          <Story>
            <ArticleTitle as="h6">
              <Link href="http://techgeek.com.au/2014/11/02/senator-scott-ludlam-visits-pax-aus-asks-help-kill-govt-data-retention-plans/">
                Senator Scott Ludlam visits PAX Aus, asks for help to kill govt
                data retention plans
              </Link>
            </ArticleTitle>
            <ArticlePublication>TechGeek</ArticlePublication>
            <ArticleDate>November 2, 2014</ArticleDate>
          </Story>
          <Story>
            <ArticleTitle as="h6">
              <Link href="http://techgeek.com.au/2014/01/28/microsoft-company-using-onedrive-name/">
                Microsoft is not the only company using the 'OneDrive' name
              </Link>
            </ArticleTitle>
            <ArticlePublication>TechGeek</ArticlePublication>
            <ArticleDate>January 28, 2014</ArticleDate>
          </Story>
          <Story>
            <ArticleTitle as="h6">
              <Link href="http://techgeek.com.au/2013/07/30/phantom-strikes-back-tech-site-smarthouse-caught-plagiarising-again/">
                "Phantom" Strikes Back: tech site Smarthouse caught plagiarising
                again
              </Link>
            </ArticleTitle>
            <ArticlePublication>TechGeek</ArticlePublication>
            <ArticleDate>July 30, 2013</ArticleDate>
          </Story>
          <Story>
            <ArticleTitle as="h6">
              <Link href="https://medium.com/unihack-blog/revisiting-unihack-2014-a-photo-essay-26d36a07d0ea/">
                Revisiting UNIHACK 2014: A Photo Essay
              </Link>
            </ArticleTitle>
            <ArticlePublication>UNIHACK Blog</ArticlePublication>
            <ArticleDate>July 16, 2015</ArticleDate>
          </Story>
          <Story>
            <ArticleTitle as="h6">
              <Link href="https://medium.com/localz-engineering/why-we-adopted-react-native-to-deliver-happiness-to-stores-dce6d27791b9/">
                Why we adopted React Native to deliver happiness to stores
              </Link>
            </ArticleTitle>
            <ArticlePublication>Localz Engineering</ArticlePublication>
            <ArticleDate>December 6, 2018</ArticleDate>
          </Story>
        </Stories>
      </Container>
    </PageWrap>
  </Layout>
)

export default IndexPage
