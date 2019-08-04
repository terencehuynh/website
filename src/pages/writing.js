import React from 'react'
import { Container } from 'fannypack'

import { SectionHeading } from '../components/Core'
import Layout from '../components/Layout'
import PageBlock from '../components/Core/PageBlock'
import PageHeader from '../components/Core/PageHeader'
import WritingFeatured from '../components/Writing/Featured'
import WritingPortfolio from '../components/Writing/Portfolio'

import portfolio from '../data/writing-portfolio.json'

const ACCENT = '#f4511e'

const WritingPage = () => (
  <Layout pageTitle="Writing">
    <PageBlock>
      <Container breakpoint="desktop">
        <PageHeader
          accent={ACCENT}
          icon="solid-pencil-alt"
          heading="Writing"
          subheading="I write stories..."
        />
        <SectionHeading as="h3" color={ACCENT}>
          Portfolio
        </SectionHeading>
        <WritingPortfolio stories={portfolio} />
        <SectionHeading as="h3" color={ACCENT}>
          Where I Write
        </SectionHeading>
        <WritingFeatured />
      </Container>
    </PageBlock>
  </Layout>
)

export default WritingPage
