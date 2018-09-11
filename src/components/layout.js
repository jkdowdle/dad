import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Section, Footer, Container, Content, Columns, Column } from 'bloomer'
import { Link } from 'gatsby'

import Header from './header'
import './layout.css'
import 'bulma/css/bulma.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Section>{children}</Section>
        <Footer id="footer">
          <Container>
            <Content>
              <Columns>
                <Column
                  isSize={{
                    mobile: 12,
                    tablet: 8,
                  }}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column'
                  }}
                >
                  <p>Dad's Awesome Loans</p>
                  <Content isSize="small">
                    <p>
                      The source code is licensed under{' '}
                      <a target="_blank">MIT</a>.
                    </p>
                  </Content>
                </Column>
                <Column
                  isSize={{
                    mobile: 12,
                    tablet: 4,
                  }}
                >
                  <nav>
                    <Link to="/" activeClassName="active">
                      Home
                    </Link>
                    <Link to="/about-us" activeClassName="active">
                      About Us
                    </Link>
                    <Link to="/our-team" activeClassName="active">
                      Out Team
                    </Link>
                  </nav>
                </Column>
              </Columns>
            </Content>
          </Container>
        </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
