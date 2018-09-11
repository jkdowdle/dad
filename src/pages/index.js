import React from 'react'

import Layout from '../components/layout'

import {
  Field,
  Label,
  Control,
  Input,
  Select,
  TextArea,
  Checkbox,
  Radio,
  Button,
  Container,
  Tile,
  Subtitle,
  Box,
} from 'bloomer'

const IndexPage = () => (
  <Layout>
    <Container>
      <Tile isAncestor style={{ marginTop: '-8rem' }}>
        <Tile
          isChild
          render={props => (
            <Box {...props}>
              <Subtitle isSize={4}>Let's get started.</Subtitle>

              <form style={{ marginBottom: 0 }}>
                <Field>
                  <Label htmlFor="name">Name</Label>
                  <Control>
                    <Input id="name" name="name" required type="text" />
                  </Control>
                </Field>

                <Field>
                  <Label htmlFor="company">Company</Label>
                  <Control>
                    <Input id="company" name="company" required type="text" />
                  </Control>
                </Field>

                <Field>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Control>
                    <Input id="phone" name="phone" required type="text" />
                  </Control>
                </Field>

                <Field>
                  <Label htmlFor="email">Email</Label>
                  <Control>
                    <Input id="email" name="email" required type="email" />
                  </Control>
                </Field>

                <Field>
                  <Label htmlFor="city">City</Label>
                  <Control>
                    <Input
                      id="city"
                      name="city"
                      required
                      type="text"
                      required
                    />
                  </Control>
                </Field>

                <Field>
                  <Label htmlFor="state">State</Label>
                  <Control>
                    <Select id="state" name="state" required isFullWidth>
                      <option>Utah</option>
                      <option>Nevada</option>
                      <option>Idaho</option>
                      <option>Arizona</option>
                    </Select>
                  </Control>
                </Field>

                <Field>
                  <Label htmlFor="loanAmount">Target Loan Amount</Label>
                  <Control>
                    <Input
                      id="loanAmount"
                      name="loanAmount"
                      required
                      type="number"
                    />
                  </Control>
                </Field>

                <Field>
                  <Label htmlFor="estimatedCollateral">
                    Estimated Collateral
                  </Label>
                  <Control>
                    <Input
                      id="estimatedCollateral"
                      name="estimatedCollateral"
                      required
                      type="number"
                    />
                  </Control>
                </Field>

                <Field>
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Control>
                    <TextArea id="additionalInfo" name="additionalInfo" />
                  </Control>
                </Field>

                <Field>
                  <Control>
                    <Button
                      style={{
                        color: '#fff',
                        backgroundColor: '#ff5722',
                        borderColor: 'transparent',
                      }}
                      isFullWidth
                    >
                      Submit
                    </Button>
                  </Control>
                </Field>
              </form>
            </Box>
          )}
        />
      </Tile>
    </Container>
  </Layout>
)

export default IndexPage
