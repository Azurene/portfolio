import React from 'react';

const Project = (props) => {
  return (
    <div className='row'>
      <div className='h3 col-3'>{props.title}
        <img className='col img-thumbnail project-image' src={props.imageLink} alt="" />
      </div>
      <div className='h3 col'>Description
        <p className='col h6'>{props.description}</p>
      <div className='link-list'>
        <ul>
          <li>
            <a className="btn btn-dark " href={props.github} target="_blank" rel='noreferrer noopener'>GitHub</a>
          </li>
          <li>
            <a className="btn btn-dark" href={props.live} target="_blank" rel='noreferrer noopener'>Demo</a>
          </li>
        </ul>
      </div>
      </div>
    </div >
    // <div className='card col-3'>
    //   <img className="card-img-top" src={props.imageLink} alt="" />
    //   <div className='card-body'>
    //     <h3 className="text-center card-title">{props.title}</h3>
    //     <p className="text-center card-text">{props.description}</p>
    //     <div className="link-list">
    //       <ul>
    //         <li>
    //           <a className="btn btn-dark " href={props.github} target="_blank" rel='noreferrer noopener'>GitHub</a>
    //         </li>
    //         <li>
    //           <a className="btn btn-dark" href={props.live} target="_blank" rel='noreferrer noopener'>Demo</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Project;