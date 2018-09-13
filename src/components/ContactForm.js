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

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class ContactForm extends Component {
  onSubmit = (input, form) => {
    // console.log('submitted', form)
    const a = {
      'form-name': 'test-form-one',
      ...input,
    }
    console.log('a', a)

    const b = encode(a)

    console.log('b', b)
    return fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: b,
    }).then(form.reset)
  }
  render() {
    return (
      <Container id="home-page">
        <Tile isAncestor style={{ marginTop: '-8rem' }}>
          <Tile
            isChild
            render={props => (
              <Box {...props}>
                <Form onSubmit={this.onSubmit}>
                  {({ handleSubmit, submitSucceeded }) => (
                    <>
                      <Subtitle isSize={4}>
                        {submitSucceeded
                          ? 'Thank you! We will be in touch'
                          : "Let's get started."}
                      </Subtitle>
                      <form
                        name="test-form-one"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        hidden
                      >
                        <input name="name" />
                        <input name="company" />
                        <input name="phone" />
                        <input name="email" />
                        <input name="city" />
                        <input name="state" />
                        <input name="loanAmount" />
                        <input name="estimatedCollateral" />
                        <textarea name="additionalInfo" />
                      </form>
                      <form
                        name="test-form-one"
                        // method="POST"
                        // data-netlify="true"
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

                        {/* <div data-netlify-rIecaptcha="true" /> */}

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
                    </>
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
