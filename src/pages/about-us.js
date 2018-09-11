import React from 'react'
import { Container, Box, Title } from 'bloomer'

import Layout from '../components/layout'

export const AboutUs = () => (
  <Layout>
    <Container>
      <Box>
        <Title>About us</Title>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum dolore
          magnam, mollitia commodi soluta dolores quibusdam aspernatur nemo sunt
          impedit facilis ad nobis quam sed maxime nisi hic libero ratione!
          Officia iusto voluptates rerum velit dicta totam eveniet labore
          delectus magnam cumque reprehenderit odit ipsum sapiente reiciendis
          tempora voluptatum consectetur quos, iste nostrum odio quod earum enim
          sint. Magnam, reprehenderit? Aliquid error ea exercitationem, magni
          pariatur, quae alias quis nesciunt natus ratione recusandae soluta
          voluptate tempora fugit, tenetur nam. Dolorem iste voluptas magnam
          delectus perspiciatis in iusto, commodi inventore a!
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum dolore
          magnam, mollitia commodi soluta dolores quibusdam aspernatur nemo sunt
          impedit facilis ad nobis quam sed maxime nisi hic libero ratione!
          Officia iusto voluptates rerum velit dicta totam eveniet labore
          delectus magnam cumque reprehenderit odit ipsum sapiente reiciendis
          tempora voluptatum consectetur quos, iste nostrum odio quod earum enim
          sint. Magnam, reprehenderit? Aliquid error ea exercitationem, magni
          pariatur, quae alias quis nesciunt natus ratione recusandae soluta
          voluptate tempora fugit, tenetur nam. Dolorem iste voluptas magnam
          delectus perspiciatis in iusto, commodi inventore a!
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum dolore
          magnam, mollitia commodi soluta dolores quibusdam aspernatur nemo sunt
          impedit facilis ad nobis quam sed maxime nisi hic libero ratione!
          Officia iusto voluptates rerum velit dicta totam eveniet labore
          delectus magnam cumque reprehenderit odit ipsum sapiente reiciendis
          tempora voluptatum consectetur quos, iste nostrum odio quod earum enim
          sint. Magnam, reprehenderit? Aliquid error ea exercitationem, magni
          pariatur, quae alias quis nesciunt natus ratione recusandae soluta
          voluptate tempora fugit, tenetur nam. Dolorem iste voluptas magnam
          delectus perspiciatis in iusto, commodi inventore a!
        </p>

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
    </Container>
  </Layout>
)

export default AboutUs
