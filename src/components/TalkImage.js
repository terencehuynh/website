import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Image = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  gatsbyImageData(height: 480, aspectRatio: 1.5)
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const image = data.images.edges.find((n) => {
          return n.node.relativePath.includes(props.filename)
        })
        if (!image) {
          return null
        }
        return (
          <GatsbyImage
            alt={props.alt}
            image={image.node.childImageSharp.gatsbyImageData}
          />
        )
      }}
    />
  )
}

export default Image
