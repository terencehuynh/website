import { Grid as _Grid, space, styled, theme } from 'fannypack'

const Grid = styled(_Grid)`
  grid-template-columns: repeat(${props => props.columns || 2}, 1fr);
  grid-gap: ${space(3, 'major')}rem;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export default Grid
