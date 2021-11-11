import { Link } from 'gatsby';
import * as React from 'react';
import SEO from '../components/SEO';

// markup
export default function NotFoundPage() {
  return (
    <>
      <SEO />
      <h1>Not found!</h1>
      <p>
        <Link to="/">Let's go back!</Link>
      </p>
    </>
  );
}
