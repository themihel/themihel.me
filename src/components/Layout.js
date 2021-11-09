import React from 'react';

import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />

      {children}

      <Footer />
    </>
  );
}
