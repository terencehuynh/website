import React from 'react'
import { Container } from 'fannypack'

import Layout from '../components/Layout'
import PageBlock from '../components/Core/PageBlock'
import PageHeader from '../components/Core/PageHeader'
import TalksListing from '../components/Talks/Listing'

import talksData from '../data/talks.json'

const BG_COLOR = '#673ab7'

const TalksPage = () => (
  <Layout pageTitle="Talks">
    <PageBlock>
      <Container breakpoint="desktop">
        <PageHeader
          accent={BG_COLOR}
          icon="solid-laptop-code"
          heading="Talks"
          subheading="I say words..."
        />
        <TalksListing data={talksData} />
      </Container>
    </PageBlock>
  </Layout>
)

export default TalksPage
