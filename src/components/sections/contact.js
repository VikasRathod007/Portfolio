import React from 'react';
import styled from 'styled-components';
import { email } from '@config';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

// No scroll-reveal animation here: as the last section, it must never be left hidden
// if the reveal fails to trigger after navigating straight to #contact.
const Contact = () => (
  <StyledContactSection id="contact">
    <h2 className="numbered-heading overline">What&apos;s Next?</h2>

    <h2 className="title">Get In Touch</h2>

    <p>
      I&apos;m not actively job hunting, but I&apos;m open to the right role anywhere in India or
      remote. Whether you have an opportunity, a question, or just want to say hi, my inbox is
      always open!
    </p>

    <a className="email-link" href={`mailto:${email}`}>
      Say Hello
    </a>
  </StyledContactSection>
);

export default Contact;
