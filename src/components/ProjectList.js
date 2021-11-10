import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const ProjectListStyles = styled.div`
  h3 {
    text-transform: uppercase;
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
    color: #333333;
  }
`;

export default function ProjectList() {
  const { projects } = useStaticQuery(graphql`
    query {
      projects: allSanityProject(sort: {fields: date, order: DESC}) {
        nodes {
          id
          name
          abstract
          year: date(formatString: "YYYY")
          image {
            asset {
              gatsbyImageData
            }
          }
          links {
            title
            url
          }
          tags {
            id
            name
          }
        }
      }
    }
  `);

  return (
    <ProjectListStyles>
      <h3>Own Projects</h3>
      {projects.nodes.map((project) => (
        <Project className="project" key={project.id} project={project} />
      ))}
    </ProjectListStyles>
  );
}
