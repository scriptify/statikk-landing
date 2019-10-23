import React from 'react';
import styled from 'styled-components';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '../general/Section';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: ${props => props.theme.spacing[2]};
  box-shadow: ${props => props.theme.shadow.dark};
  border-radius: ${props => props.theme.spacing[1]};
  overflow: hidden;

  transition: all 0.3s;
  :hover {
    box-shadow: ${props => props.theme.shadow.darkHover};
  }

  input,
  button {
    padding-top: ${props => props.theme.spacing[2]};
    padding-bottom: ${props => props.theme.spacing[2]};
    border: none;
    text-align: center;
    font-family: inherit;
    outline: none;
    font-size: 1em;
  }

  input {
    width: 80%;
    color: ${props => props.theme.colors.background};
  }
  button {
    width: 20%;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    border-top-left-radius: ${props => props.theme.spacing[1]};
  }

  ${props => props.theme.breakPoints.tablet} {
    input,
    button {
      display: block;
      border-radius: 0;
      width: 100%;
    }
  }
`;
const Text = styled.p`
  text-align: justify;
  padding: ${props => props.theme.spacing[1]};
`;

const mailchimpUrl =
  'https://gmail.us20.list-manage.com/subscribe/post?u=a583f5f7b9e655db973643dc2&amp;id=95158a5293';

export default function EmailSignup() {
  return (
    <SectionContainer id="newsletter">
      <SectionContent>
        <SectionTitle>notify me</SectionTitle>
        <FormContainer>
          <Text>
            Sign up to be notified when new templates or features arrive!
            <br />
            No spam, never.
          </Text>
          <MailchimpSubscribe url={mailchimpUrl} />
        </FormContainer>
      </SectionContent>
    </SectionContainer>
  );
}
