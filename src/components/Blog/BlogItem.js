import React from 'react'
import { Heading as _Heading, styled, space, palette, theme } from 'fannypack'
import { HeadingLevel, getHeadingLevel, getMobileHeadingLevel } from './Common'
import Link from '../Link'
import LinkButton from '../LinkButton'

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
  margin: ${space(3, 'major')}rem 0;
  line-height: 2;
  font-size: 1rem;
  font-family: var(--serif-font);

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 0.875rem;
    line-height: 1.75rem;
  }
`

const Heading = styled(_Heading)`
  font-size: ${(props) => getHeadingLevel(props)}rem;
  margin: 0 0 ${space(1, 'major')}rem;
  line-height: ${(props) => getHeadingLevel(props) + 0.5}rem;
  font-family: var(--serif-font);
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

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: ${(props) => getMobileHeadingLevel(props)}rem;
    line-height: ${(props) => getMobileHeadingLevel(props) + 0.5}rem;
  }
`

const Metadata = styled.p`
  margin: 0;
  color: #778fa8;
  font-size: 0.875rem;
  line-height: 1rem;
  text-transform: uppercase;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 0.75rem;
    line-height: 0.875rem;
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
