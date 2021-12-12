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
          seo {
            title
            description
            themeColor
          }
        }
      }
    }
  `);

  const frontpageSEOSettings = frontpageSettingsNodes.nodes[0].seo;

  return (
    <>
      <SEO
        title={frontpageSEOSettings.title}
        themeColor={frontpageSEOSettings.themeColor}
        description={frontpageSEOSettings.description}
      />
      <ProfileBanner />
      <ContentContainer>
        <ProjectList />
      </ContentContainer>
      <Footer />
    </>
  );
}
