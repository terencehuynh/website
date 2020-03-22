import React from 'react'
import { Columns, Column } from 'fannypack'

import Layout from '../components/Layout'
import PageBlock from '../components/Core/PageBlock'
import PageHeader from '../components/Core/PageHeader'
import SectionHeading from '../components/Core/SectionHeading'
import WritingWhere from '../components/Writing/Featured'
import WritingList from '../components/Writing/WritingList'

const WritingPage = () => {
  return (
    <Layout pageTitle="Writing">
      <PageHeader heading="Writing" />
      <PageBlock>
        <Columns>
          <Column spread={4}>
            <SectionHeading text="Where I Write" as="h3" />
            <WritingWhere />
          </Column>
          <Column spread={7} spreadOffset={1}>
            <SectionHeading text="Portfolio" as="h3" />
            <WritingList />
          </Column>
        </Columns>
      </PageBlock>
    </Layout>
  )
}

export default WritingPage
