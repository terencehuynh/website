import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Navigation as _Navigation,
  List as _List,
  Heading,
  styled,
  palette,
  space,
  css,
} from 'fannypack'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  ${props =>
    props.mini
      ? css`
          padding: ${space(2, 'major')}rem ${space(2, 'major')}rem;
          border-bottom: 1px solid ${palette('white900')};
        `
      : css`
          padding: ${space(4, 'major')}rem ${space(2, 'major')}rem 0rem;
        `}

  .pageTitle {
    line-height: 1;
    color: ${palette('primary')};
    font-weight: 900;
    letter-spacing: -1px;
    margin: 0;

    ${props =>
      props.mini
        ? css`
            font-size: 1.5rem;
          `
        : css`
            font-size: 3rem;
          `}
  }
`

const Navigation = styled(_Navigation)`
  align-items: center;
  margin-top: ${space(1, 'major')}rem;
`

const List = styled(_List)`
  margin-bottom: 0px;
  align-content: center;

  li {
    display: inline-block;
    margin-bottom: 0;
    margin-right: ${space(2, 'major')}rem;

    &:last-child {
      margin-right: 0;
    }

    a {
      text-decoration: none;
      color: ${palette('gray300')};
      font-size: 0.875rem;

      &:hover {
        color: ${palette('primary')};
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
