import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './theme';
import Footer from '../Footer';
import Header from '../Header';

const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Montserrat, sans-serif;
  }
`;

const LayoutContainer = styled.div``;

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
      <Footer />
    </ThemeProvider>
  );
}
