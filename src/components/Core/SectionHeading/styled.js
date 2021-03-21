import { styled, css } from 'bumbag/styled'
import { breakpoint, palette } from 'bumbag/utils/theme'

export const Heading = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  margin: 0 0 1rem;
  color: ${palette('primaryDark')};
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;

  &:before {
    content: ' ';
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background-color: ${palette('primaryDark')};
  }

  span {
    background: white;
    padding-right: 8px;
    position: relative;
    z-index: 2;
  }

  ${breakpoint(
    'min-desktop',
    css`
      margin: 0 0 1.5rem;
    `
  )}
`
