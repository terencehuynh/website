import { Grid as _Grid, space, styled, theme } from 'fannypack'

const Grid = styled(_Grid)`
  grid-template-columns: repeat(${(props) => props.columns || 2}, 1fr);
  grid-gap: ${space(3, 'major')}rem;

  @media (max-width: ${theme('fannypack.layout.desktopBreakpoint')}px) {
    grid-template-columns: repeat(${(props) => props.desktopColumns || 2}, 1fr);
  }

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    grid-template-columns: repeat(
      ${(props) => props.desktopColumns || props.tabletColumns || 2},
      1fr
    );
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export default Grid
