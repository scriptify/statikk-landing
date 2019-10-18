import React from 'react';
import styled from 'styled-components';
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from '../general/Section';

const TutorialContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: ${props => props.theme.spacing[3]};
  ${props => props.theme.breakPoints.tablet} {
    flex-flow: column;
  }
`;

const VideoContainer = styled.div`
  width: 60%;
  min-height: 400px;
  border-radius: ${props => props.theme.spacing[1]};
  overflow: hidden;
  ${props => props.theme.breakPoints.tablet} {
    width: 100%;
    iframe {
      min-height: 400px;
    }
  }
`;
const StepsContainer = styled.ul`
  width: 40%;
  padding-left: ${props => props.theme.spacing[2]};
  list-style: none;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  ${props => props.theme.breakPoints.tablet} {
    width: 100%;
    padding: 0;
    padding-top: ${props => props.theme.spacing[2]};
  }
`;
const StepContainer = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing[1]};
`;
const StepNumber = styled.div`
  height: 2em;
  width: 2em;
  border-radius: 50%;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${props => props.theme.shadow.dark};
`;
const StepContent = styled.div`
  width: 85%;
  text-align: justify;
`;
const StepText = styled.p``;
const StepTitle = styled.h3`
  font-size: 1.5em;
  padding-top: 0;
`;

const YtVideo = () => (
  <iframe
    style={{ width: '100%', height: '100%' }}
    src="https://www.youtube.com/embed/RCP8OB2quss"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Statikk - Create GatsbyJS sites in minutes. Not days."
  ></iframe>
);

const Step = ({ text, number, title }) => (
  <StepContainer>
    <StepNumber>{number}</StepNumber>
    <StepContent>
      <StepTitle>{title}</StepTitle>
      <StepText>{text}</StepText>
    </StepContent>
  </StepContainer>
);

export default function HowItWorks() {
  return (
    <SectionContainer id="features">
      <SectionContent>
        <SectionTitle>This is how it works</SectionTitle>
        <TutorialContainer>
          <VideoContainer>
            <YtVideo />
          </VideoContainer>
          <StepsContainer>
            <Step
              number={1}
              title="Choose a template."
              text="Pick from a variety of very specialized templates which suit best your use case. From SaaS Landing pages, Portfolio Pages and Coming Soon pages, we have you covered!"
            />
            <Step
              number={2}
              title="Customize it."
              text={
                <>
                  Our editor has just enough features to customize the essential
                  parts. No complex new tool to learn.
                  <br />
                  <b>Simple. Efficient.</b>
                </>
              }
            />
            <Step
              number={3}
              title="Export."
              text={
                <>
                  Export site as a ZIP file. <b>Clean</b> and easily extendable{' '}
                  <b>codebase</b>. No more tinkering around with messy
                  templates. <b>It's free!</b>
                </>
              }
            />
          </StepsContainer>
        </TutorialContainer>
      </SectionContent>
    </SectionContainer>
  );
}
