import React from 'react'
import { Heading as _Heading, Icon, styled, space } from 'bumbag'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import PageBlock from '../components/Core/PageBlock'
import Text from '../components/Core/Text'

const Container = styled.div`
  max-width: 480px;

  a {
    text-decoration: none;
    color: #d11c16;
    transition: all 0.08s ease-in-out;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 4px;
    border: 1px solid #d11c16;
    padding: 5px 7px;
    display: inline-flex;
    align-items: center;
    font-size: 0.875rem;

    svg {
      margin-left: 4px;
      transition: all 0.08s ease-in-out;
    }

    &:hover {
      background-color: #d11c16;
      color: white;

      svg {
        margin-left: 10px;
      }
    }
  }
`

const Heading = styled(_Heading)`
  color: #d11c16;
  margin: 0 0 ${space(4, 'major')}rem;
  font-size: 3rem;
  line-height: 1;
`

const NotFoundPage = () => (
  <Layout pageTitle="404 Not Found">
    <PageBlock>
      <Container>
        <Heading as="h1">Page Not Found</Heading>
        <Text>
          Look, it means one of two things: that the page was previously here
          and it got moved without a redirect (which, in case, whoops?); or it
          actually did not exist.
        </Text>
        <Text>Either way, you're stuck on this page.</Text>
        <Link to="/">
          Go back to the homepage <Icon icon="solid-angle-right" />
        </Link>
      </Container>
    </PageBlock>
  </Layout>
)

export default NotFoundPage
