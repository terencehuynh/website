import { styled, breakpoint, css, space } from 'bumbag'

export const SubHeading = styled.h3`
  font-weight: 300;
  letter-spacing: -1px;
  margin: 0 0 ${space(3, 'major')}rem;
  font-size: 1.5rem;
  line-height: 1.75rem;
  text-align: center;

  ${breakpoint(
    'min-tablet',
    css`
      font-size: 2rem;
      line-height: 2.25rem;
      text-align: left;
    `
  )}
`
