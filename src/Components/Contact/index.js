import React from 'react';
import { ContactSection, ContactTitle, Span, Form, FormInput, TextInput, EmailInput, SubjectInput, Textarea, SubmitInput } from './style.js';
const Contact = () => {
  return (
    <ContactSection>
      <div className="container">
        <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
        <Form action = "">
          <FormInput>
            <TextInput type="text" placeholder="Your Name" />
            <EmailInput type="email" placeholder="Your Email" />
          </FormInput>
          <SubjectInput type="text" placeholder="Your Subject" />
          <Textarea cols="30" rows="5" placeholder="Your Message"></Textarea>
          <SubmitInput type="submit" value="Send Message" />
        </Form>
      </div>
    </ContactSection>
  );//end return
}

export default Contact;