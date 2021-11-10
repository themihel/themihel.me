import * as React from 'react';
import ProfileBanner from '../components/ProfileBanner';
import ProjectList from '../components/ProjectList';

export default function IndexPage({ data }) {
  return (
    <>
      <ProfileBanner />
      <ProjectList />
    </>
  );
}
