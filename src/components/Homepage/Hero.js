import React from 'react'
import { Flex } from 'bumbag'
import { Link } from 'gatsby'
import { BgWrap, HeroLine, HeroContainer } from './styled'

const Hero = () => (
  <BgWrap>
    <HeroContainer breakpoint="desktop">
      <HeroLine>
        My name is <Link to="/about">Terence Huynh</Link> and{' '}
      </HeroLine>
      <HeroLine>
        I am a <Link to="/about">Software Engineer</Link>{' '}
      </HeroLine>
      <HeroLine>
        and <Link to="/writing">Tech Blogger</Link>{' '}
      </HeroLine>
      <HeroLine>
        from <a href="https://www.visitmelbourne.com/">Melbourne, Australia</a>
      </HeroLine>
    </HeroContainer>
  </BgWrap>
)

export default Hero
