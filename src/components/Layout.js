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

        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
          media="print"
          onLoad="this.media='all'"
        />

        <noscript>
          {`
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap"
          />
          `}
        </noscript>
      </Helmet>
      <GlobalStyles />
      <Typography />

      {children}
    </>
  );
}
