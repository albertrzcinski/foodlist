import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <HelmetProvider>
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <h1>Hello world</h1>
  </HelmetProvider>
);

export default Root;
