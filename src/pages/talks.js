import React from 'react'
import { Box, Container, Heading, Text, styled } from 'fannypack'

import Layout from '../components/Layout'
import TalksListing from '../components/TalksListing'

import talksData from '../data/talks.json'

const PageWrap = styled(Box)`
  padding: 48px 0;
  background-color: ${props => props.bgColor || 'transparent'};
  position: relative;
  overflow: visible;

  &:before {
    content: ' ';
    display: block;
    height: 300px;
    background: #673ab7;
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

const IndexPage = () => (
  <Layout pageTitle="Talks">
    <PageWrap>
      <Container breakpoint="desktop">
        <PageHeader>
          <PageHeading as="h2">Talks</PageHeading>
          <PageSubHeading>I say words...</PageSubHeading>
        </PageHeader>
        <TalksListing data={talksData} />
      </Container>
    </PageWrap>
  </Layout>
)

export default IndexPage
