import { styled, space, theme } from 'fannypack'

const ArticleHeader = styled.header`
  max-width: 680px;
  margin: 0 auto;
  margin-bottom: ${space(6, 'major')}rem;
  text-align: center;
  display: flex;
  flex-direction: column-reverse;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    text-align: left;
  }

  h1 {
    margin: 0;
    font-family: var(--serif-font);
    font-size: 2.75rem;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 3.25rem;

    @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
      font-size: 2.25rem;
      line-height: 2.75rem;
    }
  }

  p {
    margin: 0 0 ${space(2, 'major')}rem;
    opacity: 0.75;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.875rem;
    line-height: 1.25rem;

    @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }
`

export default ArticleHeader
