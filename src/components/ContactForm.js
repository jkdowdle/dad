import React, { Component, createRef } from 'react'
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
    const body = encode({
      'form-name': 'test-form-one',
      ...input,
    })

    return fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(form.reset)
      .then(() => {
        this.submitMessage = createRef()
        document.querySelector('.box h2').scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        })
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
                <Form
                  initialValues={{ state: 'Utah' }}
                  onSubmit={this.onSubmit}
                >
                  {({ handleSubmit, submitSucceeded, form }) => (
                    <>
                      <Subtitle isSize={4} ref={this.submitMessage}>
                        {submitSucceeded
                          ? 'Thank you! We will be in touch!'
                          : 'Lets get started!'}
                      </Subtitle>
                      {submitSucceeded && (
                        <div>
                          <Button
                            id="submit-btn"
                            type="button"
                            style={{
                              color: '#fff',
                              backgroundColor: '#ff5722',
                              borderColor: 'transparent',
                              marginBottom: '2rem',
                            }}
                            onClick={form.reset}
                          >
                            Restart
                          </Button>
                        </div>
                      )}
                      <form
                        name="test-form-one"
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
                                  required
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
                                  required
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
                                  <option value="Utah">Utah</option>
                                  <option value="Nevada">Nevada</option>
                                  <option value="Idaho">Idaho</option>
                                  <option value="Arizona">Arizona</option>
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
                        <select name="state" />
                        <input name="loanAmount" />
                        <input name="estimatedCollateral" />
                        <textarea name="additionalInfo" />
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
