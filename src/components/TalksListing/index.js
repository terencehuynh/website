import React from 'react'
import { Box, Card, Heading, Paragraph, styled } from 'fannypack'
import { theme } from 'styled-tools'

import Image from '../Image'

const Event = styled(Card.Card)`
  margin-bottom: 24px;
`

const EventTitle = styled(Heading)`
  font-size: 1.5rem;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing; -1px;
  margin: 8px 0 12px;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 1.3125rem;
  }

`

const EventDescription = styled(Paragraph)`
  line-height: 2;
  font-size: 1rem;
  font-family: 'Merriweather', sans-serif;
  font-weight: 300;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 0.875rem;
  }
`

const ImageBox = styled(Box)`
  width: 45%;
  margin-right: 36px;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`

const CardContents = styled(Box)`
  flex: 1;
`

const ImageCredit = styled(Paragraph)`
  font-size: 0.8125rem;
  color: #b0bec5;
`

const TalksListing = ({ data }) => (
  <Box>
    {data.map((event, index) => (
      <Event
        key={index}
        a11yDescriptionId="description"
        a11yTitleId="talkTitle"
      >
        <ImageBox>
          <Image filename={event.image} alt={event.title} />
        </ImageBox>
        <CardContents>
          <EventTitle as="h5" id="talkTitle">
            {event.title}
          </EventTitle>
          <EventDescription id="description">
            {event.description}
          </EventDescription>
          <ImageCredit>Image Credit: {event.imageCredit}</ImageCredit>
        </CardContents>
      </Event>
    ))}
  </Box>
)

export default TalksListing
