import React from 'react';

const Information = (props) => {

  return (
    <article className='container'>
      <div className='row'>
        <p className='col'>{props.title}</p>
        <p className='col'>{props.company}</p>
        <p className='col'>{props.time}</p>
        <p className='col'>{props.location}</p>
        <p className='col'>{props.description}</p>
      </div>
    </article>
  )
}

export default Information;