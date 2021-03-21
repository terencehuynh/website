import { space, styled, breakpoint, css } from 'bumbag'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${space(3, 'major')}rem;

  ${({ desktopColumns, tabletColumns, columns, ...props }) => css`
    ${breakpoint(
      'min-tablet',
      css`
        grid-template-columns: repeat(
          ${desktopColumns || tabletColumns || 2},
          1fr
        );
      `
    )(props)}
    ${breakpoint(
      'min-desktop',
      css`
        grid-template-columns: repeat(${desktopColumns || 2}, 1fr);
      `
    )(props)}
    ${breakpoint(
      'min-widescreen',
      css`
        grid-template-columns: repeat(${columns || 2}, 1fr);
      `
    )(props)}
  `}
`

export default Grid
