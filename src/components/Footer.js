import React from 'react';
import styled from 'styled-components';
import ContentContainer from './ContentContainer';

const FooterStyles = styled.div`
  margin-bottom: 20px;
`;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <ContentContainer>
      <FooterStyles>
        &copy;
        {' '}
        {year}
        {' '}
        - Mischa Helfenstein.
      </FooterStyles>
    </ContentContainer>
  );
}
