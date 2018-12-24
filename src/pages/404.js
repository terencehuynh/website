import React from 'react'
import { Flex, Box, Heading, styled } from 'fannypack'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const Wrapper = styled(Flex)`
  background-color: red;
  width: 100vw;
  height: 100vh;
  padding: 24px;
`

const Container = styled(Box)`
  background: white;
  padding: 32px 24px;
  max-width: 480px;

  h1 {
    margin: 0;
    color: red;
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }
`

const NotFoundPage = () => (
  <Layout pageTitle="404 Not Found">
    <Wrapper>
      <Container>
        <Heading>PAGE NOT FOUND</Heading>
        <p>The page you are looking for does not exist any more.</p>
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
