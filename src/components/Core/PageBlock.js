import { Box, styled, space } from 'fannypack'
import { theme } from 'styled-tools'

const PageBlock = styled(Box)`
  padding: ${space(4, 'major')}rem ${space(2, 'major')}rem;
  position: relative;
  background-color: ${props => props.bgColor || 'transparent'};
  overflow: visible;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    padding: ${space(3, 'major')}rem ${space(2, 'major')}rem;
  }
`

export default PageBlock
