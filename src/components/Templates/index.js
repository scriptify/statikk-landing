import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '../general/Section';

const TemplatesContainer = styled.div`
  padding-top: ${props => props.theme.spacing[2]};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${props => props.theme.breakPoints.tablet} {
    justify-content: center;
  }
`;

const Template = styled.div`
  width: 20vw;
  min-width: 250px;
  max-width: 300px;
  height: 400px;
  background: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.spacing[0]};
  box-shadow: ${props => props.theme.shadow.dark};
  overflow: hidden;
  margin-top: ${props => props.theme.spacing[3]};
  margin-right: ${props => props.theme.spacing[3]};
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    box-shadow: ${props => props.theme.shadow.darkHover};
  }
`;
const TemplateHeader = styled.div`
  height: 80%;
`;
const TemplateName = styled.h2`
  padding: ${props => props.theme.spacing[1]};
`;

const TemplateLabelContainer = styled.div`
  margin-bottom: -1.8em;
  display: flex;
  justify-content: flex-end;
  opacity: 0.8;
`;
const TemplateLabelText = styled.p`
  padding: 0.5em;
  font-size: 0.6em;
  text-transform: uppercase;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  border-bottom-left-radius: ${props => props.theme.spacing[0]};
`;

const TemplateDescription = styled.div`
  padding: ${props => props.theme.spacing[1]};
`;

const TemplateLabel = ({ children }) => (
  <TemplateLabelContainer>
    <TemplateLabelText>{children}</TemplateLabelText>
  </TemplateLabelContainer>
);

const TemplateImageContainer = ({ className, img }) => (
  <BackgroundImage fluid={img.childImageSharp.fluid} className={className} />
);

const TemplateImageContainerStyled = styled(TemplateImageContainer)`
  height: 80%;
`;

const TemplateCmp = ({ title, description, label, img, inactive }) => (
  <Template style={{ opacity: inactive ? '0.75' : 1 }}>
    <TemplateHeader>
      <TemplateLabel>{label}</TemplateLabel>
      <TemplateName>{title}</TemplateName>
      <TemplateImageContainerStyled img={img} />
    </TemplateHeader>
    <TemplateDescription>{description}</TemplateDescription>
  </Template>
);

export default function Templates() {
  const {
    appLandingPreview,
    matePreview,
    saastasticPreview,
    destinyPreview,
  } = useStaticQuery(graphql`
    query {
      matePreview: file(relativePath: { eq: "preview/mate-preview.png" }) {
        childImageSharp {
          fluid(maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      appLandingPreview: file(
        relativePath: { eq: "preview/app-landing-preview.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      saastasticPreview: file(
        relativePath: { eq: "preview/saas-tastic-preview.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      destinyPreview: file(
        relativePath: { eq: "preview/destiny-preview.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <SectionContainer id="templates">
      <SectionContent>
        <SectionTitle>Choose a template</SectionTitle>
        <TemplatesContainer>
          <TemplateCmp
            title="Mate"
            description="A portfolio site for developers, designers and tech bloggers."
            label="free"
            img={matePreview}
          />
          <TemplateCmp
            title="App Land"
            description="An iOS and Android App landing page for your awesome app!"
            label="coming soon"
            img={appLandingPreview}
            inactive
          />
          <TemplateCmp
            title="SaaS-Tastic"
            description="A stunning landing page for your next SaaS business."
            label="coming soon"
            img={saastasticPreview}
            inactive
          />
          <TemplateCmp
            title="Destiny"
            description="A coming soon page for the revolutionary product you're going to launch!"
            label="coming soon"
            img={destinyPreview}
            inactive
          />
        </TemplatesContainer>
      </SectionContent>
    </SectionContainer>
  );
}
