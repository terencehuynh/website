import { List } from 'bumbag/List'
import { Icon as _Icon } from 'bumbag/Icon'
import { styled, css } from 'bumbag/styled'
import { applyTheme } from 'bumbag/utils/applyTheme'
import { breakpoint, space } from 'bumbag/utils/theme'

import { Link } from 'gatsby'

const NavActiveStyle = ({ active }) =>
  active &&
  css`
    display: block;
  `

export const Nav = styled.nav`
  margin-top: 1rem;
  margin-left: -1rem;
  margin-bottom: -1rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  width: 100vw;
  display: none;

  ${NavActiveStyle}
  ${breakpoint(
    'min-desktop',
    css`
      flex: 1;
      display: flex;
      justify-content: flex-end;
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
          border-top: 1px solid rgba(255, 255, 255, 0.4);
          border-right: 1px solid rgba(255, 255, 255, 0.4);

          & li {
            border-left: 1px solid rgba(255, 255, 255, 0.4);
            border-bottom: 1px solid rgba(255, 255, 255, 0.4);
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
  color: white;
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

const ButtonActiveStyle = ({ active }) =>
  active &&
  css`
    color: white;
    background: rgba(0, 0, 0, 0.6);
  `

export const Button = styled.a`
  color: rgba(255, 255, 255, 0.4);
  background: rgba(0, 0, 0, 0.4);
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
    background: rgba(0, 0, 0, 0.6);
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
