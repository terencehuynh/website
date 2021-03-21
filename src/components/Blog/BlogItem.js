import React from 'react'
import { Box } from 'bumbag/Box'
import { styled, css } from 'bumbag/styled'
import { breakpoint, space, palette } from 'bumbag/utils/theme'
import { HeadingLevel } from './Common'
import Link from '../Link'
import LinkButton from '../LinkButton'

const Block = styled.article`
  border-bottom: 1px solid ${palette('white800')};
  margin-bottom: 2rem;
  padding-bottom: 2rem;

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
  }

  ${breakpoint(
    'min-tablet',
    css`
      margin-bottom: ${space(5, 'major')}rem;
      padding-bottom: ${space(5, 'major')}rem;
    `
  )}
`

const Content = styled.div`
  font-family: var(--serif-font);
  margin: ${space(3, 'major')}rem 0;
  fill: ${palette('text')};
  font-size: 0.875rem;
  line-height: 1.75rem;

  ${breakpoint(
    'min-tablet',
    css`
      line-height: 2;
      font-size: 1rem;
      font-weight: 300;
    `
  )}
`

const Heading = styled(Box)`
  font-family: var(--serif-font);
  margin: 0 0 ${space(1, 'major')}rem;
  font-weight: 900;
  letter-spacing: -1px;

  a {
    text-decoration: none;
    color: ${palette('primary')};
    transition: all 0.08s ease-in-out;
  }

  a:hover {
    color: ${palette('primaryHover')};
  }

  a:focus {
    background: ${palette('primary')};
    color: white;
    outline-offset: 0;
  }

  ${(props) =>
    props.headingLevel === HeadingLevel.LARGE
      ? css`
          font-size: 1.75rem;
          line-height: 2.25rem;
          ${breakpoint(
            'min-tablet',
            css`
              font-size: 2rem;
              line-height: 2.5rem;
            `
          )(props)}
        `
      : css`
          font-size: 1.3125rem;
          line-height: 1.8125rem;
          ${breakpoint(
            'min-tablet',
            css`
              font-size: 1.5rem;
              line-height: 2rem;
            `
          )(props)}
        `}
`

const Metadata = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1rem;
  text-transform: uppercase;
  color: ${palette('textLight')};
`

const BlogItem = ({
  title,
  link,
  metadata,
  html,
  headingLevel = HeadingLevel.LARGE,
  headingAs = 'h3',
  showPostLink = true,
}) => {
  const BlogHeading = Heading.withComponent(headingAs)
  return (
    <Block>
      <BlogHeading headingLevel={headingLevel}>
        <Link to={link} text={title} />
      </BlogHeading>
      <Metadata>{metadata}</Metadata>
      {html && (
        <Content
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
      {showPostLink && html && (
        <p>
          <LinkButton to={link} text="Continue Reading" />
        </p>
      )}
    </Block>
  )
}

export default BlogItem
