import React from 'react'
import { Box, Paragraph, styled } from 'fannypack'

import data from '../../data/about-history.json'

const History = styled(Box)`
  :not(:last-child) {
    padding-bottom: 24px;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 24px;
  }
`

const HistoryTime = styled(Paragraph)`
  font-size: 1rem;
  margin: 0 0 12px;
  text-transform: uppercase;
`

const HistoryTitle = styled(Paragraph)`
  font-size: 1.5rem;
  font-family: 'Merriweather', sans-serif;
  letter-spacing: -1px;
  font-weight: 900;

  :not(:last-child) {
    margin-bottom: 0px;
  }
`

const HistorySubtitle = styled(HistoryTitle)`
  font-weight: 300;
  :not(:last-child) {
    margin-bottom: 6px;
  }
`

const AboutHistory = () => (
  <>
    {data.map(({ title, subtitle, time }) => (
      <History>
        <HistoryTime>{time}</HistoryTime>
        <HistoryTitle>{title}</HistoryTitle>
        <HistorySubtitle>{subtitle}</HistorySubtitle>
      </History>
    ))}
  </>
)

export default AboutHistory
