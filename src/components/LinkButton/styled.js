import { styled, css, palette } from 'bumbag'

export const generateStyledLink = (component) => styled(component)`
  text-decoration: none;
  color: ${(props) => palette(props.palette)};
  transition: all 0.08s ease-in-out;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
  border: 1px solid ${(props) => palette(props.palette)};
  padding: 5px 7px;
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;

  svg {
    margin-left: 4px;
    transition: all 0.08s ease-in-out;
  }

  &:hover {
    background-color: ${(props) => palette(props.palette)};
    color: white;

    svg {
      margin-left: 10px;
    }
  }

  ${(props) =>
    props.invert &&
    css`
      color: white;
      border-color: white;

      &:hover {
        color: ${palette(props.palette)(props)};
        background-color: white;
      }
    `}
`
