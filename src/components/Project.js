import React from 'react';

export default function Project({ project }) {
  return (
    <>
      <div>Image</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span className="tag">{tag}</span>
        ))}
      </div>
    </>
  );
}
