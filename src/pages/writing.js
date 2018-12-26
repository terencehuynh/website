import React from 'react'
import { Container } from 'fannypack'

import Layout from '../components/Layout'
import PageBlock from '../components/PageBlock'
import PageHeader from '../components/PageHeader'
import WritingFeatured from '../components/Writing/Featured'
import WritingPortfolio from '../components/Writing/Portfolio'

import portfolio from '../data/writing-portfolio.json'

const BG_COLOR = '#f4511e'

const WritingPage = () => (
  <Layout pageTitle="Writing">
    <PageBlock headerBg headerBgColor={BG_COLOR}>
      <Container breakpoint="desktop">
        <PageHeader heading="Writing" subheading="I write stories..." />
        <WritingFeatured />
        <WritingPortfolio stories={portfolio} />
      </Container>
    </PageBlock>
  </Layout>
)

export default WritingPage
