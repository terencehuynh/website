import { Container } from 'bumbag/Container'
import { Flex } from 'bumbag/Flex'
import { styled, css } from 'bumbag/styled'
import { breakpoint, palette } from 'bumbag/utils/theme'

export const BgWrap = styled(Flex)`
  align-items: center;
  justify-content: center;
  width: 100vw;
  background-color: ${palette('heroBg')};
  position: relative;
  padding: 3rem 1rem;

  ${breakpoint(
    'min-tablet',
    css`
      padding: 6rem 1rem;
    `
  )}
`

export const HeroLine = styled.span`
  margin: 0;
  font-weight: 300;
  line-height: 1.25;
  font-size: 1.5rem;
  color: ${palette('heroText')};
  display: block;
  text-align: left;

  &:not(:last-child) {
    margin: 0 0 12px 0;
  }

  strong {
    color: white;
    font-weight: 700;
  }

  ${breakpoint(
    'min-tablet',
    css`
      font-size: 2rem;
      letter-spacing: 0px;
    `
  )}

  ${breakpoint(
    'min-desktop',
    css`
      font-size: 2.5rem;
      line-height: 1.25;
      letter-spacing: -1px;
    `
  )}
`

export const HeroContainer = styled(Container)`
  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
    border-bottom: 0px solid white;
    padding: 0 4px;
    clear: both;

    &:hover {
      border-bottom: 1px solid white;
    }

    ${breakpoint(
      'min-tablet',
      css`
        padding: 2px;
        display: inline;
        clear: none;
      `
    )}
  }
`
