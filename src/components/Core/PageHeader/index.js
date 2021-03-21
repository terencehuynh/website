import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'bumbag/Container'
import { Link } from 'gatsby'
import { Wrapper, Heading, Navigation, List } from './styled'

const Header = ({ heading, background, as, mini, nav }) => (
  <Wrapper mini={mini} background={background}>
    <Container breakpoint="desktop">
      <Heading mini={mini} as={as}>
        {heading}
      </Heading>
      {nav && (
        <Navigation a11yTitle={`${heading} Navigation`}>
          <List orientation="horizontal">
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
