import React from 'react';
import Project from './Project';

export default function ProjectList() {
  const projects = [
    {
      title: 'abc',
      descriptions: 'dsfasf',
      tags: ['a', 'b', 'c'],
    },
    {
      title: 'abc',
      descriptions: 'dsfasf',
      tags: ['a', 's', 'd'],
    },
    {
      title: 'abc',
      descriptions: 'dsfasf',
      tags: ['a', 'b', 'c'],
    },
  ];

  return (
    <>
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </>
  );
}
