import { graphql } from 'gatsby';
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import SEO from '../components/SEO';
import ContentContainer from '../components/ContentContainer';

export default function StaticPage({ data: { staticPage } }) {
  return (
    <>
      <SEO title={staticPage.title} />
      <ContentContainer>
        <h1>{staticPage.title}</h1>
        <BlockContent blocks={staticPage._rawContent} ignoreUnknownTypes />
      </ContentContainer>
    </>
  );
}

export const query = graphql`
  query ($staticPageId: String!) {
    staticPage: sanityStaticPage(id: { eq: $staticPageId }) {
      id
      title
      slug {
        current
      }
      _rawContent
    }
  }
`;
