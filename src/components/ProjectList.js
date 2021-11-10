import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Project from './Project';

export default function ProjectList() {
  const { projects } = useStaticQuery(graphql`
    query {
      projects: allSanityProject(sort: {fields: date, order: DESC}) {
        nodes {
          id
          name
          abstract
          year: date(formatString: "YYYY")
          tags {
            id
            name
          }
        }
      }
    }
  `);

  return (
    <>
      <h3>Projects</h3>
      {projects.nodes.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </>
  );
}
