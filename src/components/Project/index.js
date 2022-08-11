import React from 'react';

function Project(props) {
  return (
      <div className='card col-6'>
        <img className="card-img-top" src={props.imageLink} alt="" />
        <div className='card-body'>
          <h3 className="text-center card-title">{props.title}</h3>
          <p className="text-center card-text">{props.description}</p>
          <div className="link-list">
            <ul>
              <li>
                <a className="btn btn-dark" href={props.github} target="_blank" rel='noreferrer noopener'>Link to GitHub Repo</a>
              </li>
              <li>
                <a className="btn btn-dark" href={props.live} target="_blank" rel='noreferrer noopener'>Link to live demo</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Project;