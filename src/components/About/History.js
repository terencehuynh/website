import React from 'react'
import { Box, Paragraph, styled } from 'fannypack'
import { theme } from 'styled-tools'

const History = styled(Box)`
  :not(:last-child) {
    padding-bottom: 24px;
    border-bottom: 1px solid ${props => props.borderColor || '#e0e0e0'};
    margin-bottom: 24px;
  }
`

const HistoryTime = styled(Paragraph)`
  font-size: 0.875rem;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0 !important;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 0.8125rem;
  }
`

const HistoryTitle = styled(Paragraph)`
  font-size: 1.5rem;
  font-family: 'Merriweather', sans-serif;
  letter-spacing: -1px;
  font-weight: 900;

  :not(:last-child) {
    margin-bottom: 0px;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 1.125rem;
  }
`

const HistorySubtitle = styled(Paragraph)`
  font-weight: 400;
  font-size: 1.5rem;
  letter-spacing: -1px;
  margin-bottom: 12px !important;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 1.125rem;
  }
`

const AboutHistory = ({ data, borderColor }) => (
  <>
    {data.map(({ title, subtitle, time }, index) => (
      <History key={index} borderColor={borderColor}>
        <HistoryTitle>{title}</HistoryTitle>
        <HistorySubtitle>{subtitle}</HistorySubtitle>
        <HistoryTime>{time}</HistoryTime>
      </History>
    ))}
  </>
)

export default AboutHistory
