import * as React from 'react';
import ContentContainer from '../components/ContentContainer';
import ProfileBanner from '../components/ProfileBanner';
import ProjectList from '../components/ProjectList';
import SEO from '../components/SEO';

export default function IndexPage() {
  return (
    <>
      <SEO />
      <ProfileBanner />
      <ContentContainer>
        <ProjectList />
      </ContentContainer>
    </>
  );
}
