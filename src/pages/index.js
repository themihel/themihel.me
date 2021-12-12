import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import ContentContainer from '../components/ContentContainer';
import Footer from '../components/Footer';
import ProfileBanner from '../components/ProfileBanner';
import ProjectList from '../components/ProjectList';
import SEO from '../components/SEO';

export default function IndexPage() {
  const { frontpageSettingsNodes } = useStaticQuery(graphql`
    query {
      frontpageSettingsNodes: allSanityFrontpageSettings {
        nodes {
          title
          description
          themeColor
        }
      }
    }
  `);

  const frontpageSettings = frontpageSettingsNodes.nodes[0];

  return (
    <>
      <SEO
        title={frontpageSettings.title}
        themeColor={frontpageSettings.themeColor}
        description={frontpageSettings.description}
      />
      <ProfileBanner />
      <ContentContainer>
        <ProjectList />
      </ContentContainer>
      <Footer />
    </>
  );
}
