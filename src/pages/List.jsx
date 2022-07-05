import React from 'react';
import data from '../data';
import ProjectCard from '../components/ProjectCard';
import AnimatedPage from './AnimatedPage';

function List() {
  return (
  
<AnimatedPage>

      <div className="projects-container">
        {data.map((project) => {
          return <ProjectCard data={project} key={project.id} />;
        })}
      </div>
</AnimatedPage>
     
  );
}

export default List