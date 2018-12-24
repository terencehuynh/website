import { Box, styled } from 'fannypack'
import { theme } from 'styled-tools'

export const PortfolioPageWrap = styled(Box)`
  padding: 48px 0;
  position: relative;
  overflow: visible;

  &:before {
    content: ' ';
    display: block;
    height: 300px;
    background: ${props => props.bgColor || 'transparent'};
    position: absolute;
    width: 100vw;
    z-index: -1;
    top: 0;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    padding: 24px 0;

    &:before {
      height: 200px;
    }
  }
`
