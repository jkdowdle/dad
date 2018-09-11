import React from 'react'
import { Link } from 'gatsby'
import { Hero, HeroBody, Container, Title, Button, Subtitle } from 'bloomer'

import backgroundImage from '../images/backlit-clouds-dark.jpg'
import './header.css'

const Header = () => (
  <Hero
    isColor="danger"
    style={{ backgroundImage: `url("${backgroundImage}")` }}
  >
    <HeroBody>
      <Container>
        <Title isSize={3}>Dad's Awesome Loans </Title>
        <Subtitle isSize={4}>Get what you can, for what you can</Subtitle>
        <div style={{ textAlign: 'right' }}>
          <Button
            isColor="danger"
            style={{
              color: '#fff',
              backgroundColor: '#ff5722',
              borderColor: 'transparent',
              margin: '1rem',
            }}
            render={props => (
              <Link {...props} to="/about-us">
                What We Do
              </Link>
            )}
          />
          <Button
            isColor="danger"
            style={{
              color: '#fff',
              backgroundColor: '#ff5722',
              borderColor: 'transparent',
              margin: '1rem',
            }}
            render={props => (
              <Link {...props} to="/our-team">
                Who We Are
              </Link>
            )}
          />
        </div>
      </Container>
    </HeroBody>
  </Hero>
)

// const Header = ({ siteTitle }) => (
//   <div
//     style={{
//       background: 'rebeccapurple',
//       marginBottom: '1.45rem',
//     }}
//   >
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '1.45rem 1.0875rem',
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </div>
// )

export default Header
