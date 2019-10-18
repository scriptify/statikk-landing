import styled from 'styled-components';

export const SectionContent = styled.div`
  width: 100%;
  max-width: ${props => props.theme.sizes[0]};
  margin: ${props => props.theme.spacing[3]} auto;
  padding: ${props => props.theme.spacing[2]};
  padding-top: 0;
`;

export const SectionContainer = styled.section`
  width: 100%;
`;

export const SectionTitle = styled.h2`
  letter-spacing: ${props => props.theme.letterSpacing[1]};
  text-transform: uppercase;
  text-align: center;
  font-size: 1.2em;
`;
