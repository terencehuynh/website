import { styled, css } from 'bumbag/styled'
import { breakpoint } from 'bumbag/utils/theme'

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
