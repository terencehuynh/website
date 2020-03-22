import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Theme from './Theme'
import Header from './Core/Header'
import Footer from './Core/Footer'

import { generateMeta, generateLink } from '../utils/helmet'

const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
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
        links,
        ...meta
      } = props
      const metaDescription = description || siteDescription
      const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
      return (
        <>
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            meta={generateMeta({ metaDescription, title, author, ...meta })}
            link={generateLink(links)}
          />
          <Theme>
            {showHeader && <Header />}
            {children}
            <Footer />
          </Theme>
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
}

Layout.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  showHeader: true,
}

export default Layout
