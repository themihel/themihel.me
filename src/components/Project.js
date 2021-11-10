import React from 'react';
import styled from 'styled-components';

const ProjectStyles = styled.div`
  background-color: green;
`;

export default function Project({ project }) {
  return (
    <ProjectStyles>
      <div>ImageContainer</div>
      <div>
        <h3>
          {project.name}
          {' '}
          <small>{project.year}</small>
        </h3>
        <div className="description">
          {project.abstract}
        </div>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag.id} className="tag">{tag.name}</span>
          ))}
        </div>
      </div>
    </ProjectStyles>
  );
}
