import React from 'react'
import { Heading as _Heading, Icon, styled, space, palette } from 'fannypack'
import { SerifFonts } from '../../constants'

export const HeadingLevel = {
  LARGE: 'LARGE',
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
}

const Block = styled.article`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: ${space(5, 'major')}rem;
  padding-bottom: ${space(5, 'major')}rem;

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
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

const getHeadingLevel = ({ headingLevel }) => {
  if (headingLevel === HeadingLevel.MEDIUM) return '1.5rem'
  return '2rem'
}

const Heading = styled(_Heading)`
  font-size: ${props => getHeadingLevel(props)};
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
`

const Metadata = styled.p`
  margin: 0;
  color: #778fa8;
`

const Link = styled.a`
  text-decoration: none;
  color: #004fc9;
  transition: all 0.08s ease-in-out;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
  border: 1px solid #004fc9;
  padding: 5px 7px;
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;

  svg {
    margin-left: 4px;
    transition: all 0.08s ease-in-out;
  }

  &:hover {
    background-color: #004fc9;
    color: white;

    svg {
      margin-left: 10px;
    }
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
        <a href={link}>{title}</a>
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
          <Link href={link}>
            Continue Reading
            <Icon icon="solid-angle-right" />
          </Link>
        </p>
      )}
    </Block>
  )
}

export default BlogItem
