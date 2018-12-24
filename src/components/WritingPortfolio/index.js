import React from 'react'
import { Grid, Heading, Text, Paragraph, Link, styled } from 'fannypack'
import { theme } from 'styled-tools'

const SectionHeading = styled(Text)`
  font-weight: 300;
  font-size: 2.625rem;
  letter-spacing: -1px;
  color: #f4511e;
  margin: 24px 0 8px;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    font-size: 2rem;
  }
`

const ArticlePublication = styled(Paragraph)`
  font-size: 1rem;
  color: #607d8b;
  &:not(:last-child) {
    margin: 0px;
  }
`

const ArticleDate = styled(Paragraph)`
  font-size: 0.8125rem;
  color: #607d8b;
  text-transform: uppercase;
  &:not(:last-child) {
    margin: 0px;
  }
`

const ArticleTitle = styled(Heading)`
  font-size: 1.5rem;
  font-family: 'Merriweather', sans-serif;
  letter-spacing: -1px;
  font-weight: 900;
  margin: 0 0 48px;
  flex: 1;

  a {
    text-decoration: none;
    color: #37474f;
  }

  a:hover {
    color: #f4511e;
  }

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    font-size: 1.3125rem;
    margin-bottom: 12px;
  }
`

const Stories = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  border-left: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Story = styled(Grid.Item)`
  padding: 24px;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    padding: 16px;
  }
`

const Portfolio = ({ stories }) => (
  <>
    <SectionHeading as="h3">Portfolio</SectionHeading>
    <Stories>
      {stories.map((story, key) => {
        const { link, title, publication, date } = story
        return (
          <Story key={key}>
            <ArticleTitle as="h6">
              <Link href={link}>{title}</Link>
            </ArticleTitle>
            <ArticlePublication>{publication}</ArticlePublication>
            <ArticleDate>{date}</ArticleDate>
          </Story>
        )
      })}
    </Stories>
  </>
)

export default Portfolio
