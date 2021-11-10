import * as React from 'react';
import ProfileBanner from '../components/ProfileBanner';
import ProjectList from '../components/ProjectList';
import SEO from '../components/SEO';

export default function IndexPage() {
  return (
    <>
      <SEO />
      <ProfileBanner />
      <ProjectList />
    </>
  );
}
