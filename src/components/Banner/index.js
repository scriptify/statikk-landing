import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import statikkIcon from '../../images/statikk-logo.png';

const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  flex-flow: column;
  color: ${props => props.theme.colors.primary};
  width: 100%;
  background: ${props => props.theme.colors.background};
  /** Not sure why this is needed. Otherwise, there's a strange white border.
  only happend when clip-path is added */
  margin-top: -1px;

  clip-path: polygon(
    /* left top */ 0 0,
    /* right top */ 100% 0,
    /* right bottom */ 100% calc(100% - 6vw),
    /* left bottom */ 0 100%
  );

  box-sizing: content-box;
`;
const BannerIconContainer = styled.div`
  img {
    height: 14em;
    width: auto;
  }
`;
const BannerCTAContainer = styled.div`
  margin-top: ${props => props.theme.spacing[4]};
`;
const BannerSlogan = styled.h2`
  font-weight: lighter;
  margin-top: ${props => props.theme.spacing[0]};
  text-align: center;
`;
const BannerBtn = styled(AnchorLink)`
  border: none;
  padding: ${props => props.theme.spacing[1]};
  min-width: 150px;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  transition: all 0.3s;
  text-transform: uppercase;
  display: inline-block;
  color: ${props => props.theme.colors.background};
  font-size: 0.87em;
  text-align: center;
  text-decoration: none;
`;

const BannerPrimaryBtn = styled(BannerBtn)`
  box-shadow: ${props => props.theme.shadow.primaryBtn};
  background: ${props => props.theme.colors.primaryHover};
  :hover {
    box-shadow: ${props => props.theme.shadow.primaryBtnHover};
  }
`;
const BannerSecondaryBtn = styled(BannerBtn)`
  background: none;
  color: ${props => props.theme.colors.primary};
  :hover {
    text-decoration: underline;
    color: ${props => props.theme.colors.primaryHover};
  }
`;

export default function Banner() {
  return (
    <BannerContainer>
      <BannerIconContainer>
        <img src={statikkIcon} alt="Statikk" />
      </BannerIconContainer>
      <BannerSlogan>
        Create GatsbyJS sites in minutes.
        <br />
        Not days.
      </BannerSlogan>
      <BannerCTAContainer>
        <BannerPrimaryBtn href="#templates">Start now</BannerPrimaryBtn>
        <BannerSecondaryBtn href="#features">How it works</BannerSecondaryBtn>
      </BannerCTAContainer>
    </BannerContainer>
  );
}
