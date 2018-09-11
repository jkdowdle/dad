import React from 'react'

import Layout from '../components/layout'

import {
  Container,
  Card,
  CardHeader,
  CardHeaderTitle,
  CardImage,
  Content,
  Image,
  CardContent,
  Media,
  MediaLeft,
  MediaContent,
  Title,
  Subtitle,
  Columns,
  Column,
} from 'bloomer'

export const OurTeam = () => (
  <Layout>
    <Container>
      <Columns>
        <Column>
          <Card>
            <CardHeader>
              <CardHeaderTitle>Component</CardHeaderTitle>
            </CardHeader>
            <CardImage>
              <Image isRatio="4:3" src="https://via.placeholder.com/1280x960" />
            </CardImage>
            <CardContent>
              <Media>
                <MediaLeft>
                  <Image
                    isSize="48x48"
                    src="https://via.placeholder.com/96x96"
                  />
                </MediaLeft>
                <MediaContent>
                  <Title isSize={4}>John Wick</Title>
                  <Subtitle isSize={6}>@John Wick</Subtitle>
                </MediaContent>
              </Media>
              <Content>
                People Keep Asking If I’m Back, And I Haven’t Really Had An
                Answer, But Now, Yeah, I’m Thinking I’m Back.
                <br />
                <small>11:09 PM - 30 October 2014</small>
              </Content>
            </CardContent>
          </Card>
        </Column>
        <Column>
          <Card>
            <CardHeader>
              <CardHeaderTitle>Component</CardHeaderTitle>
            </CardHeader>
            <CardImage>
              <Image isRatio="4:3" src="https://via.placeholder.com/1280x960" />
            </CardImage>
            <CardContent>
              <Media>
                <MediaLeft>
                  <Image
                    isSize="48x48"
                    src="https://via.placeholder.com/96x96"
                  />
                </MediaLeft>
                <MediaContent>
                  <Title isSize={4}>John Wick</Title>
                  <Subtitle isSize={6}>@John Wick</Subtitle>
                </MediaContent>
              </Media>
              <Content>
                People Keep Asking If I’m Back, And I Haven’t Really Had An
                Answer, But Now, Yeah, I’m Thinking I’m Back.
                <br />
                <small>11:09 PM - 30 October 2014</small>
              </Content>
            </CardContent>
          </Card>
        </Column>
      </Columns>
    </Container>
  </Layout>
)

export default OurTeam
