import {
  List,
  Icon as _Icon,
  Button as _Button,
  styled,
  palette,
  space,
  css,
  breakpoint,
  applyTheme,
} from 'bumbag'
import { Link } from 'gatsby'

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: right;

  ${breakpoint(
    'max-tablet',
    css`
      margin-top: 2rem;
      margin-left: -1rem;
      margin-bottom: -2rem;
      margin-right: -2rem;
      background: ${palette('menu')};
      padding: 2rem;
      display: ${(props) => (props.active ? 'block' : 'none')};
      width: 100vw;
      display: block;
    `
  )}
`

export const NavList = applyTheme(List, {
  styles: {
    base: (props) => css`
      display: flex;
      ${breakpoint(
        'max-tablet',
        css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-top: 1px solid ${palette('primaryDark')};
          border-right: 1px solid ${palette('primaryDark')};
        `
      )(props)}
    `,
  },
  Item: {
    styles: {
      base: (props) => css`
        display: inline-block;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: unset;

        ${breakpoint(
          'max-tablet',
          css`
            border-left: 1px solid ${palette('primaryDark')};
            border-bottom: 1px solid ${palette('primaryDark')};
            &:last-child:nth-last-child(odd) {
              grid-column: auto / span 2;
            }
          `
        )(props)}
      `,
    },
  },
})

export const NavLink = styled(Link)`
  font-size: 0.75rem;
  letter-spacing: 1px;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  color: ${palette('primaryLight')};
  margin-left: ${space(3, 'major')}rem;

  &:hover {
    color: white;
  }

  &.current {
    color: white;
    position: relative;
    font-weight: 700;

    &:after {
      content: ' ';
      display: block;
      background: white;
      position: absolute;
      bottom: -5px;
      height: 3px;
      width: 100%;
    }
  }

  ${breakpoint(
    'max-tablet',
    css`
      padding: ${space(2, 'major')}rem;
      margin-left: 0;
      font-size: 0.875rem;
      text-align: center;

      &.current {
        &:after {
          display: none;
        }
      }
    `
  )}
`

export const Button = styled.a`
  color: ${palette('menuText')};
  position: absolute;
  right: 0;
  top: 0;
  height: 64px;
  padding: 20px;
  font-size: 1.3125rem;
  display: none;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      color: white;
      background: ${palette('menu')};
    `}

  ${breakpoint(
    'max-deskop',
    css`
      display: block;
      background: ${palette('menuInactive')};

      &:hover {
        color: white;
        background: ${palette('menuHover')};
      }
    `
  )}
`

export const Icon = styled(_Icon)`
  height: auto;
  flex: 1;
`
