import React from 'react'
import PropTypes from 'prop-types'

const GatsbyHtml = (props) => {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: `
          body {
            background: #f2f2f2;
            -moz-osx-font-smoothing: auto;
            font-display: swap;
            --serif-font: 'Georgia', sans-serif;
          }

          body > div {
            background: white;
          }

          .wf-active body {
            --serif-font: 'Merriweather', 'Georgia', sans-serif;
          }
        `,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

GatsbyHtml.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

export default GatsbyHtml
