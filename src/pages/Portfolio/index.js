import React from 'react';
import Project from '../../components/Project';
import projectList from '../../utils/projects';
const Portfolio = () => {

  return (
    <section className='container justify-content-center'>
      <div className='row'>
        <h2>Portfolio</h2>
        <p>Examples of some projects that I've worked on:</p>
      </div>
      <div className="row">
        {projectList.map(project => (
          <Project
            title={project.title}
            github={project.github}
            live={project.live}
            imageLink={project.imageLink}
            description={project.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Portfolio;