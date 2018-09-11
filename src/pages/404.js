import React from 'react'
import { Link } from 'gatsby'
import { Content, Box, Title } from 'bloomer'

import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <Content>
      <Box>
        <Title>404: Page Not Found</Title>
        <Link to="/">Go back home</Link>
      </Box>
    </Content>
  </Layout>
)

export default NotFoundPage
