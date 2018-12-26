import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Theme from './Theme'
import Header from './Header'
import Footer from './Footer'

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
        homepage,
        breakpoint,
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
            link={generateLink()}
          />
          <Theme>
            <Header homepage={homepage} />
            {children}
            <Footer breakpoint={breakpoint} />
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
  homepage: PropTypes.bool,
  breakpoint: PropTypes.string,
}

Layout.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  homepage: false,
  breakpoint: 'desktop',
}

export default Layout
