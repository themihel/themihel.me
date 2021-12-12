import { Link } from 'gatsby';
import * as React from 'react';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page not found!" />
      <h1>Not found!</h1>
      <p>
        <Link to="/">Let&apos;s go back!</Link>
      </p>
    </>
  );
}
