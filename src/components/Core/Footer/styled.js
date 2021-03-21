import {
  Paragraph,
  List as _List,
  Link as _Link,
  styled,
  space,
  breakpoint,
  css,
  applyTheme,
} from 'bumbag'

export const List = applyTheme(_List, {
  styles: {
    base: {
      marginBottom: '24px',
    },
  },
})

export const Link = applyTheme(_Link, {
  styles: {
    base: css`
      font-size: 1.5rem;
      color: #6d6d6d;

      &:hover {
        color: #004fc9;
      }
    `,
  },
})

export const FooterParagraph = applyTheme(Paragraph, {
  styles: {
    base: css`
      font-size: 0.75rem;
      font-weight: 400;
      color: #6d6d6d;

      a {
        color: #6d6d6d;
        font-weight: 700;
      }

      a:hover {
        color: #004fc9;
      }

      &:not(:last-child) {
        margin-bottom: 8px;
      }
    `,
  },
})

export const FooterSection = styled.footer`
  background: #f2f2f2;
  padding: ${space(4, 'major')}rem ${space(2, 'major')}rem;
  text-align: center;

  ${breakpoint(
    'min-tablet',
    css`
      text-align: left;
    `
  )}
`
