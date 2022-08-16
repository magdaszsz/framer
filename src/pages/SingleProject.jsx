import React from 'react';
import data from '../data';
import {useParams, Link} from 'react-router-dom'
import AnimatedPage from './AnimatedPage';

function SingleProject() {

  const {id} = useParams();
  const project = data.find(project => project.id == id)
  
  return (
    <AnimatedPage>
      <div className="single-project-card">
        <h3>{project.title} </h3>
        <p>{project.description}</p>

        <div className="project-image">
          <img src={project.image} />
        </div>
        <div class="project-links">
        <a href={`${project.repoLink}`} class="btn" target="blank">code</a>
        <a href={`${project.liveLink}`} class="btn btn-dark" target="blank">live version
        </a>

        </div>
        <Link to="/projects/list">
          <button>go back</button>
        </Link>
      </div>
    </AnimatedPage>
  );
}

export default SingleProject