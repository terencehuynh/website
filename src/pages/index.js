import React from 'react'
import { Columns, Column, Icon, styled, space } from 'fannypack'

import Layout from '../components/Layout'
import PageBlock from '../components/Core/PageBlock'
import SectionHeading from '../components/Core/SectionHeading'
import HomepageHero from '../components/Homepage/Hero'
import HomepageWriting from '../components/Writing/HomepageWriting'

import { SerifFonts } from '../constants'

const PostBlock = styled.article`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: ${space(5, 'major')}rem;
  padding-bottom: ${space(5, 'major')}rem;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0
    padding-bottom: 0;
  }

  p {
    margin: 0 0 ${space(3, 'major')}rem;
  }

  p:last-child {
    margin-bottom: 0;
  }
`

const AsideBlock = styled.article`
  margin-bottom: ${space(5, 'major')}rem;

  &:last-child {
    margin-bottom: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`

const PostHeading = styled.h3`
  font-size: 2.5rem;
  margin: 0 0 6px;
  line-height: 1;
  font-family: ${SerifFonts};
  font-weight: 900;
  letter-spacing: -1px;

  a {
    text-decoration: none;
    color: #004fc9;
    transition: color 0.08s ease-in-out;
  }

  a:hover {
    color: #223241;
  }
`

const AsideHeading = styled.h3`
  font-size: 1.3125rem;
  margin: 0 0 6px;
  line-height: 1;
  font-family: ${SerifFonts};
  font-weight: 900;
  letter-spacing: -1px;

  a {
    text-decoration: none;
    color: #004fc9;
    transition: color 0.08s ease-in-out;
  }

  a:hover {
    color: #223241;
  }
`

const PostDateMeta = styled.p`
  margin: 0 0 ${space(3, 'major')}rem;
  color: #778fa8;
`

const AsideMeta = styled.p`
  margin: 0 0 3px;
  font-size: 1rem;
  color: #778fa8;
`

const PostSummary = styled.p`
  font-family: ${SerifFonts};
  line-height: 2;
`

const PostLink = styled.a`
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

const BlogHeading = styled.h2`
  font-size: 1.125rem;
  margin: 0 0 ${space(5, 'major')}rem;
  color: #004fc9;
  text-transform: uppercase;
  position: relative;

  &:before {
    content: ' ';
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background-color: #004fc9;
    z-index: -99;
  }

  span {
    background: white;
    padding-right: 8px;
  }
`

const IndexPage = () => (
  <Layout>
    <HomepageHero />
    <PageBlock>
      <Columns>
        <Column spread={7}>
          <SectionHeading text="Blog Posts" />
          <PostBlock>
            <PostHeading>
              <a href="#">Hello World</a>
            </PostHeading>
            <PostDateMeta>12 December, 2020</PostDateMeta>
            <PostSummary>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              venenatis, erat molestie egestas molestie, odio tellus dapibus
              ante, vel volutpat augue turpis ut turpis. Donec odio ipsum,
              ornare a libero quis, sagittis suscipit ipsum. Interdum et
              malesuada fames ac ante.
            </PostSummary>
            <p>
              <PostLink href="#">
                Continue Reading <Icon icon="solid-angle-right" />
              </PostLink>
            </p>
          </PostBlock>

          <PostBlock>
            <PostHeading>
              <a href="#">Hello World</a>
            </PostHeading>
            <PostDateMeta>12 December, 2020</PostDateMeta>
            <PostSummary>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              venenatis, erat molestie egestas molestie, odio tellus dapibus
              ante, vel volutpat augue turpis ut turpis. Donec odio ipsum,
              ornare a libero quis, sagittis suscipit ipsum. Interdum et
              malesuada fames ac ante.
            </PostSummary>
            <p>
              <PostLink href="#">
                Continue Reading
                <Icon icon="solid-angle-right" />
              </PostLink>
            </p>
          </PostBlock>

          <PostBlock>
            <PostHeading>
              <a href="#">Hello World</a>
            </PostHeading>
            <PostDateMeta>12 December, 2020</PostDateMeta>
            <PostSummary>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              venenatis, erat molestie egestas molestie, odio tellus dapibus
              ante, vel volutpat augue turpis ut turpis. Donec odio ipsum,
              ornare a libero quis, sagittis suscipit ipsum. Interdum et
              malesuada fames ac ante.
            </PostSummary>
            <p>
              <PostLink href="#">
                Continue Reading <Icon icon="solid-angle-right" />
              </PostLink>
            </p>
          </PostBlock>
        </Column>
        <Column spread={4} spreadOffset={1}>
          <HomepageWriting />
        </Column>
      </Columns>
    </PageBlock>
  </Layout>
)

export default IndexPage
