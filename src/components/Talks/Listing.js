import React from 'react'
import {
  Grid,
  Box,
  Card,
  Heading,
  Paragraph,
  Button,
  Set,
  styled,
  theme,
} from 'fannypack'

import { SerifFonts } from '../../constants'
import Image from '../TalkImage'

const Event = styled(Card.Card)`
  overflow: hidden;
  display: block;
`

const EventTitle = styled(Heading)`
  font-size: 1.3125rem;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing; -1px;
  margin: 8px 0 8px;
`

const EventMetadata = styled(Paragraph)`
  font-size: 0.875rem;
  line-height: 1.15;
  font-weight: 400;
  letter-spacing; -1px;
  margin: 0 0 24px;

`

const EventDescription = styled(Paragraph)`
  line-height: 2;
  font-size: 0.875rem;
  font-family: ${SerifFonts};
  font-weight: 300;
  margin: 12px 0 0;
`

const ImageBox = styled(Box)`
  margin: -24px -24px 20px;
  width: auto;
`

const CardContents = styled(Box)`
  flex: 1;
`

const ImageCredit = styled(Paragraph)`
  font-weight: 300;
  font-size: 0.75rem;
  color: #90a4ae;
  margin: 12px 24px 0;
`

const MediaButton = styled(Button)`
  font-size: 0.875rem;
`

const Listings = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const MediaListing = ({ media }) => {
  if (!media || Object.keys(media).length < 1) return null
  return (
    <Set>
      {media.video && (
        <MediaButton use="a" href={media.video} iconBefore="solid-video">
          Watch
        </MediaButton>
      )}
      {media.slides && (
        <MediaButton
          use="a"
          href={media.slides}
          iconBefore="brand-speaker-deck"
        >
          Slides
        </MediaButton>
      )}
    </Set>
  )
}

const TalksListing = ({ data }) => (
  <Listings>
    {data.map((event, index) => (
      <Event
        key={index}
        a11yDescriptionId="description"
        a11yTitleId="talkTitle"
      >
        <ImageBox>
          <Image filename={event.image} alt={event.title} />
          {event.imageCredit && (
            <ImageCredit>Image Credit: {event.imageCredit}</ImageCredit>
          )}
        </ImageBox>
        <CardContents>
          <EventTitle as="h5" id="talkTitle">
            {event.title}
          </EventTitle>
          <EventMetadata>
            {event.date}
            {event.conference ? ` · ${event.conference}` : ''}
          </EventMetadata>
          <EventDescription id="description">
            {event.description}
          </EventDescription>
          <MediaListing media={event.media} />
        </CardContents>
      </Event>
    ))}
  </Listings>
)

export default TalksListing
