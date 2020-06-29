import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'fannypack'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageBlock from '../components/Core/PageBlock'
import BlogHeader from '../components/Blog/BlogHeader'
import BlogCoffee from '../components/Blog/BlogCoffee'
import ArticleContent from '../components/Blog/ArticleContent'
import ArticleHeader from '../components/Blog/ArticleHeader'

const ArticleFooter = styled.footer`
  max-width: 680px;
  margin: 0 auto;
`

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <BlogHeader />
      <PageBlock as="article">
        <ArticleHeader>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </ArticleHeader>
        <ArticleContent dangerouslySetInnerHTML={{ __html: post.html }} />
        <ArticleFooter>
          {post.frontmatter.showCoffee && <BlogCoffee />}
        </ArticleFooter>
      </PageBlock>
    </Layout>
  )
}

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        showCoffee: PropTypes.bool,
      }),
      html: PropTypes.any,
    }),
  }),
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        showCoffee
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`
