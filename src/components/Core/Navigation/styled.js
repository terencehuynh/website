import {
  Navigation,
  List,
  styled,
  palette,
  space,
  css,
  breakpoint,
} from 'fannypack'
import { Link } from 'gatsby'

export const Nav = styled(Navigation)`
  flex: 1;
  display: flex;
  justify-content: right;

  ${breakpoint(
    'max-tablet',
    css`
      margin-top: ${space(2, 'major')}rem;
      margin-left: -${space(2, 'major')}rem;
      margin-bottom: -${space(2, 'major')}rem;
      margin-right: -${space(2, 'major')}rem;
      background: ${palette('menu')};
      padding: ${space(2, 'major')}rem;
      display: ${(props) => (props.active ? 'block' : 'none')};
      width: 100vw;
    `
  )}
`

export const NavList = styled(List)`
  li {
    display: inline-block;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: unset;
  }

  ${breakpoint(
    'max-tablet',
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      border-top: 1px solid ${palette('primaryDark')};
      border-right: 1px solid ${palette('primaryDark')};

      li {
        border-left: 1px solid ${palette('primaryDark')};
        border-bottom: 1px solid ${palette('primaryDark')};
      }

      li:last-child:nth-last-child(odd) {
        grid-column: auto / span 2;
      }
    `
  )}
`

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
