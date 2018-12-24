import React from 'react'
import { Box, Card, Heading, Paragraph, styled } from 'fannypack'
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
`

const EventDescription = styled(Paragraph)`
  line-height: 2;
  font-size: 1rem;
  font-family: 'Merriweather', sans-serif;
  font-weight: 300;
`

const ImageBox = styled(Box)`
  width: 45%;
  margin-right: 36px;
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
    {data.map(event => (
      <Event a11yDescriptionId="description" a11yTitleId="talkTitle">
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
