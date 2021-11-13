import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.a`
  background-color: var(--primary-dark);
  color: var(--primary-light);
  padding: 10px;
  margin: 10px 10px 0 0;
  text-decoration: none;
  cursor: pointer;
  
  box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.50);
  transition: box-shadow .3s ease-in-out;
  
  border: 1px solid var(--primary-dark);
  border-radius: 10px;

  &:hover {
    text-decoration: none;
    box-shadow: none;
  }

  &:active {
    color: var(--primary-dark);
    background-color: var(--primary-light);
    border-style: dashed;
    box-shadow: none;
  }
`;

export default function Button({
  target, rel, href, children,
}) {
  return (
    <ButtonStyles
      target={target}
      rel={rel}
      href={href}
    >
      {children}
    </ButtonStyles>
  );
}
