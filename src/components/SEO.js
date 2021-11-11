import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ children }) {
  return (
    <Helmet>
      <html lang="en" />
      <title>themihel.me | Mischa Helfenstein</title>

      {/* Icons */}
      <link rel="icon" type="image/png" href="/favicon.png" />

      {/* Meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Hello, I'm Mischa, a socioinformatics student from Germany. Besides my master studies I work part-time as a software developer."
      />

      {children}
    </Helmet>
  );
}
