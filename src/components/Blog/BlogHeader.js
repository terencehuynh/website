import React from 'react'
import PageHeader from '../Core/PageHeader'
import { palette } from 'fannypack'

const BlogHeader = () => {
  return (
    <PageHeader
      heading="dot com slash blog"
      background={palette('miniHeader')}
      mini={true}
      nav={[
        {
          to: '/blog/',
          label: 'Archive',
        },
        {
          to: '/blog/feed.xml',
          label: 'Feed',
        },
      ]}
    />
  )
}

export default BlogHeader
