import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Core/Header'
import Footer from './Core/Footer'

import { generateMeta } from '../utils/helmet'

const Layout = (props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `}
    render={(data) => {
      const {
        site: {
          siteMetadata: {
            title: siteTitle,
            description: siteDescription,
            author,
          },
        },
      } = data
      const {
        children,
        pageTitle,
        description,
        lang,
        showHeader,
        palette,
        isBlogPost = false,
        ...meta
      } = props
      const metaDescription = description || siteDescription
      const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
      return (
        <>
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            meta={generateMeta({
              siteUrl,
              metaDescription,
              title,
              author,
              isBlogPost,
              ...meta,
            })}
          />
          {showHeader && <Header palette={palette} />}
          {children}
          <Footer />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  pageTitle: PropTypes.string,
  showHeader: PropTypes.bool,
  palette: PropTypes.string,
}

Layout.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  showHeader: true,
}

export default Layout
