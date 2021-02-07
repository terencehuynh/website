import { Container, styled, space, palette, breakpoint, css } from 'bumbag'

export const BgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background-color: ${palette('heroBg')};
  position: relative;
  padding: ${space(6, 'major')}rem ${space(2, 'major')}rem;

  ${breakpoint(
    'min-tablet',
    css`
      padding: ${space(12, 'major')}rem ${space(2, 'major')}rem;
    `
  )}
`

export const HeroLine = styled.span`
  margin: 0;
  font-weight: 300;
  line-height: 1.25;
  font-size: 1.5rem;
  letter-spacing: -1px;
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
    display: inline-block;
    clear: both;

    &:hover {
      border-bottom: 1px solid white;
    }

    ${breakpoint(
      'min-tablet',
      css`
        padding: 2px;
        display: block;
        clear: none;
      `
    )}
  }
`
