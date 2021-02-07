import {
  Paragraph,
  List as _List,
  Link as _Link,
  styled,
  space,
  breakpoint,
  css,
} from 'fannypack'

export const List = styled(_List)`
  margin-bottom: 24px;

  li {
    display: inline-block;
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
`

export const Link = styled(_Link)`
  font-size: 1.5rem;
  color: #6d6d6d;

  &:hover {
    color: #004fc9;
  }
`

export const FooterParagraph = styled(Paragraph)`
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
    margin-bottom: 2px;
  }
`

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
