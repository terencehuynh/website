import { styled, css, breakpoint } from 'bumbag'

const Avatar = styled.div`
  border-radius: 50%;
  overflow: hidden;

  ${breakpoint(
    'max-tablet',
    css`
      width: 200px;
      height: 200px;
      margin: 0 auto;
    `
  )}
`

export default Avatar
