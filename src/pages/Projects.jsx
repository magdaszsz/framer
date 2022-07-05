import React from 'react'

import {Outlet} from 'react-router-dom'




function Projects() {

 
  return (
    // <div className='projects-container'>
 
    //  {data.map(project => {
    //   return <ProjectCard data={project} key={project.id}/>
    //  })}
    // </div>
    
     <Outlet/>

  );
}

export default Projects