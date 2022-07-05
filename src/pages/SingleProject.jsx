import React from 'react';
import data from '../data';
import {useParams, Link} from 'react-router-dom'

function SingleProject() {

  const {id} = useParams();
  const project = data.find(project => project.id == id)
  
  return (
    <div className="single-project-card">
      <h3>{project.title} </h3>
      <a href={`${project.liveLink}`} target="blank">
        live version
      </a>
      <div className='project-image'>
      <img src={project.image}/>
      </div>
      <a href={`${project.repoLink}`}>code</a>

      <Link to="/projects/list">go back</Link>
    </div>
  );
}

export default SingleProject