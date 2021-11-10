import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ children }) {
  return (
    <Helmet>
      <html lang="en" />
      <title>themihel.me | Mischa Helfenstein</title>

      {/* Meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Mischa Helfenstein | Student | Developer"
      />

      {children}
    </Helmet>
  );
}
