import {
  Icon as _Icon,
  Button as _Button,
  styled,
  palette,
  css,
  breakpoint,
} from 'bumbag'

export const Button = styled(_Button)`
  color: ${palette('menuText')};
  position: absolute;
  right: 0;
  top: 0;
  height: 64px;
  padding: 20px;
  font-size: 1.3125rem;
  display: none;
  cursor: pointer;

  ${breakpoint(
    'max-deskop',
    css`
      display: block;
      background: ${palette('menuInactive')};

      &:hover {
        color: white;
        background: ${palette('menuHover')};
      }

      ${(props) =>
        props.active &&
        css`
          color: white;
          background: ${palette('menu')};
        `}
    `
  )}
`

export const Icon = styled(_Icon)`
  height: auto;
  flex: 1;
`
