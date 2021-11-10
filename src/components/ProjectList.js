import React from 'react';
import Project from './Project';

export default function ProjectList() {
  const projects = [
    {
      title: 'abc1',
      descriptions: 'dsfasf',
      tags: ['a', 'b', 'c'],
    },
    {
      title: 'abc2',
      descriptions: 'dsfasf',
      tags: ['a', 's', 'd'],
    },
    {
      title: 'abc3',
      descriptions: 'dsfasf',
      tags: ['a', 'b', 'c'],
    },
  ];

  return (
    <>
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}
