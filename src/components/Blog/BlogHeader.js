import React from 'react'
import PageHeader from '../Core/PageHeader'

const BlogHeader = () => {
  return (
    <PageHeader
      heading="dot com slash blog"
      mini={true}
      nav={[
        {
          to: '/blog',
          label: 'Index',
        },
        {
          to: '/blog/archive',
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
