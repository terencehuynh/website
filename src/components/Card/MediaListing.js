import React from 'react'
import { Set } from 'bumbag/Set'
import { Button } from './styled'

export const MediaListing = ({ media }) => {
  if (!media || Object.keys(media).length < 1) return null
  return (
    <Set marginTop="12px">
      {media.video && (
        <Button href={media.video} text="Watch" iconBefore="solid-video" />
      )}
      {media.slides && (
        <Button
          href={media.slides}
          text="Slides"
          iconBefore="brand-speaker-deck"
        />
      )}
    </Set>
  )
}
