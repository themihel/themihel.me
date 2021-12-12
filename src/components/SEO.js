import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({
  title, themeColor, description, children,
}) {
  const descriptionDefault = "Hello, I'm Mischa, a socioinformatics student from Germany. Besides my master studies I work part-time as a software developer.";

  return (
    <Helmet>
      <html lang="en" />
      <title>{title || 'themihel.me | Mischa Helfenstein'}</title>

      {/* Icons */}
      <link rel="icon" type="image/png" href="/favicon.png" />

      {/* Themecolor */}
      <meta name="theme-color" content={themeColor || '#000000'} />

      {/* Meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content={description || descriptionDefault}
      />

      {children}
    </Helmet>
  );
}
