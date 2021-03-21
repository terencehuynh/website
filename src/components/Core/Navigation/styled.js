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

const NavActiveStyle = ({ active, ...props }) =>
  active &&
  css`
    display: block;
  `

export const Nav = styled.nav`
  margin-top: 1rem;
  margin-left: -1rem;
  margin-bottom: -1rem;
  background: ${palette('menu')};
  padding: 2rem;
  width: 100vw;
  display: none;

  ${NavActiveStyle}
  ${breakpoint(
    'min-desktop',
    css`
      flex: 1;
      display: flex;
      justify-content: right;
      margin: 0;
      padding: 0;
      width: auto;
      background: transparent;
    `
  )}
`

export const NavList = applyTheme(List, {
  styles: {
    base: (props) => css`
      display: flex;
      & li {
        &:not(:last-child) {
          margin-bottom: unset;
        }
      }

      ${breakpoint(
        'max-tablet',
        css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-top: 1px solid ${palette('primaryDark')(props)};
          border-right: 1px solid ${palette('primaryDark')(props)};

          & li {
            border-left: 1px solid ${palette('primaryDark')(props)};
            border-bottom: 1px solid ${palette('primaryDark')(props)};
            &:last-child:nth-last-child(odd) {
              grid-column: auto / span 2;
            }
          }
        `
      )(props)}
    `,
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
      padding: 1rem;
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

const ButtonActiveStyle = ({ active, ...props }) =>
  active &&
  css`
    color: white;
    background: ${palette('menu')(props)};
  `

export const Button = styled.a`
  color: ${palette('menuText')};
  background: ${palette('menuInactive')};
  position: absolute;
  right: 0;
  top: 0;
  height: 64px;
  padding: 20px;
  font-size: 1.3125rem;
  display: block;
  cursor: pointer;

  &:hover {
    color: white;
    background: ${palette('menuHover')};
  }

  ${breakpoint(
    'min-desktop',
    css`
      display: none;
      background: transparent;
    `
  )}

  ${ButtonActiveStyle}
`

export const Icon = styled(_Icon)`
  height: auto;
  flex: 1;
`
