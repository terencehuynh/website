import React from 'react'
import PropTypes from 'prop-types'
import {
  Container as _Container,
  Navigation as _Navigation,
  List as _List,
  Heading,
  styled,
  palette,
  space,
  theme,
  css,
} from 'fannypack'
import { Link } from 'gatsby'
import { SerifFonts } from '../../constants'

const Wrapper = styled.div`
  background: ${palette('primary')};

  ${props =>
    props.mini
      ? css`
          padding: ${space(2, 'major')}rem ${space(2, 'major')}rem;
        `
      : css`
          padding: ${space(4, 'major')}rem ${space(2, 'major')}rem;
        `}

  .pageTitle {
    line-height: 1;
    color: white;
    font-weight: 300;
    letter-spacing: -1px;
    margin: 0;
    font-family: ${SerifFonts};

    ${props =>
      props.mini
        ? css`
            font-size: 2rem;
          `
        : css`
            font-size: 3rem;
          `}
  }

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    .pageTitle {
      font-size: 2rem;
    }
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    padding: ${space(2, 'major')}rem ${space(2, 'major')}rem;
    .pageTitle {
      font-size: 2rem;
    }
  }
`

const Container = styled(_Container)`
  display: flex;
`

const Navigation = styled(_Navigation)`
  flex: 1;
  display: flex;
  align-items: center;
`

const List = styled(_List)`
  margin-bottom: 0px;
  margin-left: ${space(2, 'major')}rem;
  padding-left: ${space(2, 'major')}rem;
  align-content: center;
  border-left: 1px solid white;
  flex: 1;
  display: flex;

  li {
    display: inline-block;
    margin-bottom: 0;
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }

    a {
      text-decoration: none;
      color: ${palette('primaryLight')};
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.875rem;

      &:hover {
        color: white;
      }
    }
  }
`

const Header = ({ heading, as, mini, nav }) => (
  <Wrapper mini={mini}>
    <Container breakpoint="desktop">
      <Heading as={as} className="pageTitle">
        {heading}
      </Heading>
      {nav && (
        <Navigation as="nav" a11yTitle={`${heading} Navigation`}>
          <List>
            {nav.map(item => {
              return (
                <List.Item key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </List.Item>
              )
            })}
          </List>
        </Navigation>
      )}
    </Container>
  </Wrapper>
)

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  as: PropTypes.string,
  mini: PropTypes.bool,
  nav: PropTypes.arrayOf(
    PropTypes.shape({ to: PropTypes.string, label: PropTypes.string })
  ),
}

Header.defaultProps = {
  mini: false,
  as: 'h2',
}

export default Header
