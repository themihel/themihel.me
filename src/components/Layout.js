import React from 'react';

import 'normalize.css';
import { Helmet } from 'react-helmet';
import CookieConsent, { Cookies } from 'react-cookie-consent';
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

      <CookieConsent
        location="bottom"
        buttonText="Alright!"
        cookieName="cookieConsent"
        style={{ background: '#000000', transition: 'all .3s ease-in-out' }}
        buttonStyle={{
          color: '#000000', fontSize: '13px', background: '#FFFFFF', borderRadius: '5px',
        }}
        expires={150}
        debug
      >
        This website uses cookies.
      </CookieConsent>
    </>
  );
}
