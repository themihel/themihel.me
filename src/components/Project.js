import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { device } from '../utils/device';

const ProjectStyles = styled.div`
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 1px dotted var(--primary-dark);

  display: grid;
  grid-template-columns: 1fr;

  @media ${device.screenLgMin} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }

  .description, .tags, .links {
    font-size: 16px;
    margin-bottom: 25px;
    line-height: 1.35;
    text-align: justify;
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
      <div>
        <GatsbyImage image={project.image.asset.gatsbyImageData} alt={`${project.name} - Screenshot`} />
      </div>
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
        {project.subtitle && (<h5>{project.subtitle}</h5>)}
        <div className="description">
          {project.abstract}
        </div>
        <div className="links">
          {project.links.map((link) => (
            <a key={link._key} target="_blank" rel="noopener noreferrer" href={link.url}>{link.title}</a>
          ))}
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
