import { Box, styled } from 'fannypack'
import { theme } from 'styled-tools'

const PageWrap = styled(Box)`
  padding: 48px 20px;
  position: relative;
  background-color: ${props => props.bgColor || 'transparent'};
  overflow: visible;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    padding: 36px 20px;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    padding: 24px 20px;
  }
`

export default PageWrap
