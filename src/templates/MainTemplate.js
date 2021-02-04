import React from 'react';
import PropTypes from 'prop-types';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';

const MainTemplate = ({ children }) => (
  <HelmetProvider>
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </HelmetProvider>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
