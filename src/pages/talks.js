import React from 'react'
import { Container } from 'fannypack'

import Layout from '../components/Layout'
import PageBlock from '../components/PageBlock'
import PageHeader from '../components/PageHeader'
import TalksListing from '../components/Talks/Listing'

import talksData from '../data/talks.json'

const BG_COLOR = '#673ab7'

const TalksPage = () => (
  <Layout pageTitle="Talks">
    <PageBlock headerBg headerBgColor={BG_COLOR}>
      <Container breakpoint="desktop">
        <PageHeader heading="Talks" subheading="I say words..." />
        <TalksListing data={talksData} />
      </Container>
    </PageBlock>
  </Layout>
)

export default TalksPage
