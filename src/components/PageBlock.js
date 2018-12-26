import { Box, styled, css } from 'fannypack'
import { theme } from 'styled-tools'

const PageWrap = styled(Box)`
  padding: 48px 0;
  position: relative;
  background-color: ${props => props.bgColor || 'transparent'};
  overflow: visible;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    padding: 36px 0;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    padding: 24px 0;
  }

  ${props =>
    props.headerBg &&
    css`
      &:before {
        content: ' ';
        display: block;
        height: 300px;
        background: ${props => props.headerBgColor || 'transparent'};
        position: absolute;
        width: 100vw;
        z-index: -1;
        top: 0;
      }
      @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
        &:before {
          height: 200px;
        }
      }
    `}
`

export default PageWrap
