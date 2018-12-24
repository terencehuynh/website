import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Theme from './Theme'
import Header from '../Header'

import { generateMeta, generateLink } from './helpers.js'

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
      const { children, pageTitle, description, lang, ...meta } = props
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
            <Header />
            {children}
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
}

Layout.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

export default Layout
