import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Navigation as _Navigation,
  List as _List,
  Heading as _Heading,
  styled,
  palette,
  space,
} from 'fannypack'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  padding-top: ${({ mini }) => (mini ? space('major-2') : space('major-4'))}rem;
  padding-bottom: ${({ mini }) => (mini ? space('major-2') : 0)}rem;
  padding-left: ${space('major-2')}rem;
  padding-right: ${space('major-2')}rem;
  background: ${(props) => props.background || 'transparent'};
  border-bottom: ${({ mini }) => (mini ? '1px solid' : 'none')};
  border-bottom-color: ${palette('primaryBorder')};
`

const Heading = styled(_Heading)`
  line-height: 1;
  color: ${palette('primaryDark')};
  font-weight: ${(props) => (props.mini ? 600 : 900)};
  letter-spacing: -1px;
  margin: 0;
  font-size: ${(props) => (props.mini ? 1.5 : 3)}rem;
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
      color: ${palette('miniHeaderLink')};
      font-size: 0.875rem;

      &:hover {
        color: ${palette('miniHeaderHover')};
        text-decoration: underline;
      }
    }
  }
`

const Header = ({ heading, background, as, mini, nav }) => (
  <Wrapper mini={mini} background={background}>
    <Container breakpoint="desktop">
      <Heading mini={mini} as={as}>
        {heading}
      </Heading>
      {nav && (
        <Navigation as="nav" a11yTitle={`${heading} Navigation`}>
          <List>
            {nav.map((item) => {
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
  background: PropTypes.string,
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
