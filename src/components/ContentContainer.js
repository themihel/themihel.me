import React from 'react';
import styled from 'styled-components';

const ContainerStyles = styled.div`
  display: grid;
  grid-template-columns: minmax(60%, 1100px);
  justify-content: center;
  margin: 0 10%;
`;

export default function ContentContainer({ children }) {
  return <ContainerStyles>{children}</ContainerStyles>;
}
