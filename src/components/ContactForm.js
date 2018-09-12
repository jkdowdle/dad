import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import {
  Field as FormControl,
  Label,
  Control,
  Input,
  Select,
  TextArea,
  Button,
  Container,
  Tile,
  Subtitle,
  Box,
} from 'bloomer'

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

export default class ContactForm extends Component {
  onSubmit = input => {
    return fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'test-form-one',
        ...input,
      }),
    })
  }
  render() {
    return (
      <Container id="home-page">
        <Tile isAncestor style={{ marginTop: '-8rem' }}>
          <Tile
            isChild
            render={props => (
              <Box {...props}>
                <Subtitle isSize={4}>Let's get started.</Subtitle>

                <Form onSubmit={this.onSubmit}>
                  {({ handleSubmit }) => (
                    <form
                      name="test-form-one"
                      // method="POST"
                      data-netlify="true"
                      style={{ marginBottom: 0 }}
                      onSubmit={handleSubmit}
                    >
                      <Field name="name">
                        {({ input }) => (
                          <FormControl>
                            <Label htmlFor={input.name}>Name</Label>
                            <Control>
                              <Input
                                id={input.name}
                                name={input.name}
                                type="text"
                                {...input}
                              />
                            </Control>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="company">
                        {({ input }) => (
                          <FormControl>
                            <Label htmlFor={input.name}>Company</Label>
                            <Control>
                              <Input
                                id={input.name}
                                name={input.name}
                                required
                                type="text"
                                {...input}
                              />
                            </Control>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="phone">
                        {({ input }) => (
                          <FormControl>
                            <Label htmlFor={input.name}>Phone Number</Label>
                            <Control>
                              <Input
                                id={input.name}
                                name={input.name}
                                required
                                type="text"
                                {...input}
                              />
                            </Control>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="email">
                        {({ input }) => (
                          <FormControl>
                            <Label htmlFor={input.name}>Email</Label>
                            <Control>
                              <Input
                                id={input.name}
                                name={input.name}
                                required
                                type="email"
                                {...input}
                              />
                            </Control>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="city">
                        {({ input }) => (
                          <FormControl>
                            <Label htmlFor={input.name}>City</Label>
                            <Control>
                              <Input
                                id={input.name}
                                name={input.name}
                                required
                                type="text"
                                {...input}
                              />
                            </Control>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="state">
                        {({ input }) => (
                          <FormControl>
                            <Label htmlFor={input.name}>State</Label>
                            <Control>
                              <Select
                                id={input.name}
                                name={input.name}
                                required
                                isFullWidth
                                {...input}
                              >
                                <option>Utah</option>
                                <option>Nevada</option>
                                <option>Idaho</option>
                                <option>Arizona</option>
                              </Select>
                            </Control>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="loanAmount">
                        {({ input }) => (
                          <FormControl>
                            <Label htmlFor={input.name}>
                              Target Loan Amount
                            </Label>
                            <Control>
                              <Input
                                id={input.name}
                                name={input.name}
                                required
                                type="number"
                                {...input}
                              />
                            </Control>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="estimatedCollateral">
                        {({ input }) => (
                          <FormControl>
                            <Label htmlFor={input.name}>
                              Estimated Collateral
                            </Label>
                            <Control>
                              <Input
                                id={input.name}
                                name={input.name}
                                required
                                type="number"
                                {...input}
                              />
                            </Control>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="additionalInfo">
                        {({ input }) => (
                          <FormControl>
                            <Label htmlFor={input.name}>
                              Additional Information
                            </Label>
                            <Control>
                              <TextArea
                                id={input.name}
                                name={input.name}
                                {...input}
                              />
                            </Control>
                          </FormControl>
                        )}
                      </Field>

                      <div data-netlify-recaptcha="true" />

                      <br />

                      <FormControl>
                        <Control style={{ textAlign: 'right' }}>
                          <Button
                            id="submit-btn"
                            type="submit"
                            style={{
                              color: '#fff',
                              backgroundColor: '#ff5722',
                              borderColor: 'transparent',
                            }}
                          >
                            Submit
                          </Button>
                        </Control>
                      </FormControl>
                    </form>
                  )}
                </Form>
              </Box>
            )}
          />
        </Tile>
      </Container>
    )
  }
}

// const handleSubmit = event => {
//   event.preventDefault()
//   event.persist()

//   console.log(event)

//   const target = event.nativeEvent.target

//   const {
//     name,
//     company,
//     phone,
//     email,
//     city,
//     state,
//     loanAmount,
//     estimatedCollateral,
//     additionalInfo,
//   } = target

//   const encoded = encode({
//     'form-name': 'test-form-one',
//     name,
//     company,
//     phone,
//     email,
//     city,
//     state,
//     loanAmount,
//     estimatedCollateral,
//     additionalInfo,
//   })

//   fetch('/?no-cache=1', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     body: encoded,
//   })
//   // window.event = event.nativeEvent
// }
