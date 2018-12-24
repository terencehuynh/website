import React from 'react'
import { Container } from 'fannypack'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import TalksListing from '../components/TalksListing'
import { PortfolioPageWrap as PageWrap } from '../components/PageWrap'

import talksData from '../data/talks.json'

const BG_COLOR = '#673ab7'

const TalksPage = () => (
  <Layout pageTitle="Talks">
    <PageWrap bgColor={BG_COLOR}>
      <Container breakpoint="desktop">
        <PageHeader heading="Talks" subheading="I say words..." />
        <TalksListing data={talksData} />
      </Container>
    </PageWrap>
  </Layout>
)

export default TalksPage
