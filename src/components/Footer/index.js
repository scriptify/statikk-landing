import React from 'react';
import styled from 'styled-components';
import { IoLogoTwitter as TwitterIcon } from 'react-icons/io';

const FooterContainer = styled.footer`
  color: ${props => props.theme.colors.primary};
  width: 100%;
  padding: ${props => props.theme.spacing[3]};
  background: ${props => props.theme.colors.background};
  padding-top: 5vw;
  clip-path: polygon(
    /* left top */ 0 3vw,
    /* right top */ 100% 0,
    /* right bottom */ 100% 100%,
    /* left bottom */ 0 100%
  );

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${props => props.theme.colors.primary};
  }
`;

const FooterText = styled.p``;
const FooterLinks = styled.div``;
const FooterLink = styled.a`
  font-size: 2em;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        Made with 💻 and 💖 by{' '}
        <a href="https://www.twitter.com/scriptifyjs" target="_blank">
          Maximilian Torggler
        </a>
      </FooterText>
      <FooterLinks>
        <FooterLink href="https://www.twitter.com/scriptifyjs" target="_blank">
          <TwitterIcon />
        </FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
}
