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

        <div>
          <form name="contact" method="POST" netlify>
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Your Role:{' '}
                <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </Box>
    </Content>
  </Layout>
)

export default NotFoundPage
