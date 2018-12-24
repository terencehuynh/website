import React from 'react'
import { Container } from 'fannypack'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import WritingFeatured from '../components/WritingFeatured'
import WritingPortfolio from '../components/WritingPortfolio'
import { PortfolioPageWrap as PageWrap } from '../components/PageWrap'

import portfolio from '../data/writing-portfolio.json'

const BG_COLOR = '#f4511e'

const WritingPage = () => (
  <Layout pageTitle="Writing">
    <PageWrap bgColor={BG_COLOR}>
      <Container breakpoint="desktop">
        <PageHeader heading="Writing" subheading="I write stories..." />
        <WritingFeatured />
        <WritingPortfolio stories={portfolio} />
      </Container>
    </PageWrap>
  </Layout>
)

export default WritingPage
