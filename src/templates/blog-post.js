import React from 'react'
import PropTypes from 'prop-types'
import { styled, theme, palette, space } from 'fannypack'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageBlock from '../components/Core/PageBlock'
import BlogHeader from '../components/Blog/BlogHeader'
import BlogCoffee from '../components/Blog/BlogCoffee'
import { SerifFonts } from '../constants'

const ArticleHeader = styled.header`
  max-width: 680px;
  margin: 0 auto;
  margin-bottom: ${space(5, 'major')}rem;
  text-align: center;

  h1 {
    margin: 0 0 ${space(1, 'major')}rem;
    font-family: ${SerifFonts};
    font-size: 3em;
    font-weight: 100;
    letter-spacing: -1px;
    line-height: 1.25;
  }

  p {
    margin: 0;
    color: #778fa8;
  }
`

const ArticleContent = styled.section`
  p {
    max-width: 680px;
    line-height: 2;
    font-size: 1rem;
    font-family: ${SerifFonts};
    font-weight: 300;
    margin: 0 auto ${space(3, 'major')}rem;
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: 700;
  }

  a {
    color: ${palette('primary')};
    font-weight: 700;
    text-decoration: none;
  }

  a:hover {
    color: ${palette('primaryLight')};
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 0.875rem;
  }
`

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
