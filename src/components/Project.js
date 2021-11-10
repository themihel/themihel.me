import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/device';

const ProjectStyles = styled.div`
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 1px dotted var(--primary-dark);

  display: grid;
  grid-template-columns: 1fr;

  @media ${device.screenLgMin} {
    grid-template-columns: 1fr 1fr;
  }

  .description, .tags, .links {
    font-size: 18px;
    margin-bottom: 25px;
  }

  .tags {
    margin-top: 30px;

    @media ${device.screenSmMin} {
      margin-top: 50px;
    }

    &:before {
      content: 'Tags:';
      margin-right: 5px;
    }

    .tag {
      margin-right: 5px; 
      padding: 5px;
      text-decoration: none;
      font-size: 12px;

      background-color: var(--tags-background);
      color: var(--tags-text);
      border-radius: 5px;
    }
  }

  .links a {
    background-color: var(--primary-dark);
    color: var(--primary-light);
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.50);
    transition: box-shadow .3s ease-in-out;

    &:hover {
      box-shadow: none;
    }
  }
`;

export default function Project({ project }) {
  return (
    <ProjectStyles>
      <div>ImageContainer</div>
      <div>
        <h4>
          {project.name}
          {' '}
          <small>
            (
            {project.year}
            )
          </small>
        </h4>
        <div className="description">
          {project.abstract}
        </div>
        <div className="links">
          <a href="#">Test</a>
          <a href="#">Test</a>
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
