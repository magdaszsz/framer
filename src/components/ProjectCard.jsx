import React from 'react'
import {Link} from 'react-router-dom'
import AnimatedPage from '../pages/AnimatedPage'

function ProjectCard({data}) {
 

  return (
    <AnimatedPage>


    <div className='project-card'>
      <h2>{data.title}</h2>
  <Link to={`/projects/${data.id}`}>details</Link>
    </div>
    </AnimatedPage>
  )
}

export default ProjectCard