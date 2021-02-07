import { Grid as _Grid, space, styled, breakpoint, css } from 'bumbag'

const Grid = styled(_Grid)`
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${space(3, 'major')}rem;

  ${breakpoint(
    'min-tablet',
    css`
      grid-template-columns: repeat(
        ${(props) => props.desktopColumns || props.tabletColumns || 2},
        1fr
      );
    `
  )}

  ${breakpoint(
    'min-desktop',
    css`
      grid-template-columns: repeat(
        ${(props) => props.desktopColumns || 2},
        1fr
      );
    `
  )}

  ${breakpoint(
    'min-widescreen',
    css`
      grid-template-columns: repeat(${(props) => props.columns || 2}, 1fr);
    `
  )}


  
`

export default Grid
