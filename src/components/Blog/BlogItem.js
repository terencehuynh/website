import React from 'react'
import { Heading as _Heading, styled, space, palette, theme } from 'fannypack'
import { HeadingLevel, getHeadingLevel, getMobileHeadingLevel } from './Common'
import Link from '../Link'
import LinkButton from '../LinkButton'
import { SerifFonts } from '../../constants'

const Block = styled.article`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: ${space(5, 'major')}rem;
  padding-bottom: ${space(5, 'major')}rem;

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    margin-bottom: ${space(3, 'major')}rem;
    padding-bottom: ${space(3, 'major')}rem;
  }
`

const Content = styled.div`
  margin: ${space(2, 'major')}rem 0 0;

  p {
    margin: 0 0 ${space(2, 'major')}rem;
    line-height: 2;
    font-family: ${SerifFonts};
  }

  p:last-child {
    margin-bottom: 0;
  }
`

const Heading = styled(_Heading)`
  font-size: ${(props) => getHeadingLevel(props)};
  margin: 0 0 ${space(2, 'major')}rem;
  line-height: 1.25;
  font-family: ${SerifFonts};
  font-weight: 900;
  letter-spacing: -1px;

  a {
    text-decoration: none;
    color: ${palette('primary')};
    transition: all 0.08s ease-in-out;
  }

  a:hover {
    color: #223241;
  }

  a:focus {
    background: ${palette('primary')};
    color: white;
    outline-offset: 0;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: ${(props) => getMobileHeadingLevel(props)};
  }
`

const Metadata = styled.p`
  margin: 0;
  color: #778fa8;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 0.875rem;
  }
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
  return (
    <Block>
      <Heading as={headingAs} headingLevel={headingLevel}>
        <Link to={link} text={title} />
      </Heading>
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
