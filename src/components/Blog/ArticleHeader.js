import { styled, css } from 'bumbag/styled'
import { breakpoint, space } from 'bumbag/utils/theme'

const ArticleHeader = styled.header`
  max-width: 680px;
  margin: 0 auto;
  margin-bottom: ${space(6, 'major')}rem;
  display: flex;
  text-align: left;
  flex-direction: column-reverse;

  h1 {
    margin: 0;
    font-family: var(--serif-font);
    font-weight: 700;
    letter-spacing: -1px;
    font-size: 2.25rem;
    line-height: 2.75rem;
  }

  p {
    margin: 0 0 ${space(2, 'major')}rem;
    opacity: 0.75;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.75rem;
    line-height: 1rem;
  }

  ${breakpoint(
    'min-tablet',
    css`
      text-align: center;

      h1 {
        font-size: 2.75rem;
        line-height: 3.25rem;
        font-weight: 900;
        letter-spacing: -2px;
      }

      p {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
    `
  )}
`

export default ArticleHeader
