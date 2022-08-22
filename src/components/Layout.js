import React from 'react';

import 'normalize.css';
import { Helmet } from 'react-helmet';
import CookieConsent from 'react-cookie-consent';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export default function Layout({ children }) {
  return (
    <>
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
      >
        This website uses cookies.
      </CookieConsent>
    </>
  );
}
