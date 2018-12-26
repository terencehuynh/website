import React from 'react'
import { Container } from 'fannypack'

import Layout from '../components/Layout'
import PageBlock from '../components/Core/PageBlock'
import PageHeader from '../components/Core/PageHeader'
import TalksListing from '../components/Talks/Listing'

import talksData from '../data/talks.json'

const BG_COLOR = '#FFC107'

const TalksPage = () => (
  <Layout pageTitle="Talks">
    <PageBlock headerBg headerBgColor={BG_COLOR}>
      <Container breakpoint="desktop">
        <PageHeader
          heading="Projects"
          subheading="I code things..."
          textColor="#303030"
        />
        <TalksListing data={talksData} />
      </Container>
    </PageBlock>
  </Layout>
)

export default TalksPage
