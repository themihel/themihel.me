import React from 'react';

import 'normalize.css';
import { Helmet } from 'react-helmet';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,800;1,800&family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyles />
      <Typography />

      {children}
    </>
  );
}
